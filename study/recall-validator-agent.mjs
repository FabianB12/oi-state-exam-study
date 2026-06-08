const DEFAULT_MODEL = "google/gemini-3.1-flash-lite";

function safeList(items, limit = 12) {
  if (!Array.isArray(items)) return [];
  return items
    .map((item) => String(item || "").trim())
    .filter(Boolean)
    .slice(0, limit);
}

function extractJson(text) {
  const trimmed = String(text || "").trim();
  try {
    return JSON.parse(trimmed);
  } catch {
    const match = trimmed.match(/\{[\s\S]*\}/);
    if (!match) return null;
    try {
      return JSON.parse(match[0]);
    } catch {
      return null;
    }
  }
}

function normalizeVerdict(verdict) {
  const value = String(verdict || "").toLowerCase();
  if (value === "right" || value === "partial" || value === "wrong") return value;
  return "partial";
}

function safeText(value, limit = 220) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, limit);
}

function normalizeMissing(items) {
  if (!Array.isArray(items)) return [];
  return items.slice(0, 4).map((item) => {
    if (typeof item === "string") {
      return { label: safeText(item, 60), why: "", say: "" };
    }
    return {
      label: safeText(item?.label, 60),
      why: safeText(item?.why, 180),
      say: safeText(item?.say, 140)
    };
  }).filter((item) => item.label);
}

function normalizeTeaching(teaching) {
  if (!teaching || typeof teaching !== "object") return null;
  const allowedTypes = new Set([
    "comparison",
    "checklist",
    "steps",
    "concept",
    "formula_cards",
    "growth_ladder",
    "bound_chart",
    "decision_table"
  ]);
  const type = allowedTypes.has(teaching.type) ? teaching.type : "checklist";
  const items = Array.isArray(teaching.items) ? teaching.items.slice(0, 8).map((item) => ({
    label: safeText(item?.label ?? item, 70),
    value: safeText(item?.value, 40),
    detail: safeText(item?.detail ?? item?.why, 180)
  })).filter((item) => item.label || item.detail) : [];
  return {
    type,
    title: safeText(teaching.title || "Make the missing part stick", 90),
    prompt: safeText(teaching.prompt || "", 180),
    items
  };
}

function normalizeResult(parsed, fallbackText = "") {
  return {
    verdict: normalizeVerdict(parsed?.verdict),
    feedback: safeText(parsed?.feedback || fallbackText || "No feedback returned.", 320),
    missing: normalizeMissing(parsed?.missing),
    fix: safeText(parsed?.fix, 140),
    teaching: normalizeTeaching(parsed?.teaching)
  };
}

function parsePlainFeedback(text) {
  const cleaned = String(text || "").trim();
  const match = cleaned.match(/^(right|partial|wrong)\s*[:.-]\s*/i);
  const verdict = normalizeVerdict(match?.[1] || "partial");
  const feedback = (match ? cleaned.slice(match[0].length) : cleaned)
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 320);
  return {
    verdict,
    feedback: feedback || "The model returned an empty validation.",
    missing: [],
    fix: "",
    teaching: null
  };
}

function visibleFeedbackFromStructuredStream(text) {
  const beforeData = String(text || "").split(/\nDATA\s*:/i)[0] || "";
  return beforeData.replace(/^FEEDBACK\s*:\s*/i, "").trim();
}

function parseStructuredFeedback(text) {
  const raw = String(text || "").trim();
  const feedback = visibleFeedbackFromStructuredStream(raw);
  const dataMatch = raw.match(/\nDATA\s*:\s*([\s\S]+)$/i) || raw.match(/^DATA\s*:\s*([\s\S]+)$/i);
  if (!dataMatch) return parsePlainFeedback(feedback || raw);
  const parsed = extractJson(dataMatch[1]);
  return normalizeResult(parsed, feedback);
}

function timeoutError() {
  return new Error("OpenRouter validation timed out. The selected validation model may be busy; try again.");
}

export class RecallValidatorAgent {
  constructor({ apiKey, model = DEFAULT_MODEL, fetchImpl = fetch, timeoutMs = 70_000 } = {}) {
    if (!apiKey) throw new Error("OPENROUTER_API_KEY is required");
    this.apiKey = apiKey;
    this.model = model;
    this.fetch = fetchImpl;
    this.timeoutMs = timeoutMs;
  }

  buildMessages(payload, { streaming = false } = {}) {
    const mustKnow = safeList(payload.mustKnow);
    const question = String(payload.prompt || "Free recall answer").trim();
    const answer = String(payload.answer || "").trim();
    const referenceAnswer = String(payload.referenceAnswer || "").trim();

    const commonUserPayload = {
      page: payload.page || "",
      moduleKey: payload.moduleKey || "",
      moduleTitle: payload.moduleTitle || "",
      question,
      expectedPoints: mustKnow,
      hiddenReferenceAnswer: referenceAnswer,
      studentAnswer: answer
    };

    if (streaming) {
      return [
        {
          role: "system",
          content: [
            "You are a strict but kind state-exam study validator.",
            "Judge whether the student's free-recall answer covers the hidden reference answer and expected points.",
            "Treat the hidden reference answer as authoritative; do not make up extra requirements.",
            "Do not reveal or restate the full hidden reference answer.",
            "Output exactly two parts and no markdown.",
            "Part 1 must be one line: FEEDBACK: RIGHT: ... or FEEDBACK: PARTIAL: ... or FEEDBACK: WRONG: ...",
            "Part 1 is user-facing and may stream immediately. Use at most 2 short sentences.",
            "Part 2 must start on a new line with DATA: followed by a compact JSON object.",
            "DATA JSON keys: verdict, feedback, missing, fix, teaching.",
            "verdict is right, partial, or wrong.",
            "missing is an array of up to 4 objects: {label, why, say}.",
            "teaching is one safe interactive visual schema, not HTML: {type,title,prompt,items}.",
            "Choose the schema that will actually help the student understand the missing idea.",
            "teaching.type must be one of: formula_cards, growth_ladder, bound_chart, decision_table, comparison, steps, concept, checklist.",
            "Prefer formula_cards for missed formulas/definitions, growth_ladder for ordering/growth-rate mistakes, bound_chart for upper/lower/tight-bound intuition, decision_table for when-to-use comparisons, and steps for algorithms/proofs.",
            "Avoid checklist unless the missed material is literally a checklist.",
            "teaching.items are up to 8 objects: {label,value,detail}. For formula_cards put the formula in value. For growth_ladder put the expression in value and include all essential rungs. For bound_chart use labels like Big-O, Omega, Theta with the bound relation in value.",
            "Make teaching target exactly what the student missed."
          ].join(" ")
        },
        { role: "user", content: JSON.stringify(commonUserPayload) }
      ];
    }

    return [
      {
        role: "system",
        content: [
          "You are a strict but kind state-exam study validator.",
          "Judge whether the student's free-recall answer covers the hidden reference answer and expected points.",
          "Treat the hidden reference answer as authoritative; do not make up extra requirements.",
          "Do not introduce unrelated advanced material.",
          "Be very brief: feedback must be at most 2 short sentences.",
          "Do not reveal or restate the full hidden reference answer.",
          "Return only JSON with keys: verdict, feedback, missing, fix, teaching.",
          "verdict must be one of: right, partial, wrong.",
          "missing is an array of up to 4 objects: {label, why, say}.",
          "fix is one short study direction or empty string, not the full answer.",
          "teaching is one safe interactive visual schema, not HTML: {type,title,prompt,items}.",
          "Choose the schema that will actually help the student understand the missing idea.",
          "teaching.type must be one of: formula_cards, growth_ladder, bound_chart, decision_table, comparison, steps, concept, checklist.",
          "Prefer formula_cards for missed formulas/definitions, growth_ladder for ordering/growth-rate mistakes, bound_chart for upper/lower/tight-bound intuition, decision_table for when-to-use comparisons, and steps for algorithms/proofs.",
          "Avoid checklist unless the missed material is literally a checklist.",
          "teaching.items are up to 8 objects: {label,value,detail}. For formula_cards put the formula in value. For growth_ladder put the expression in value and include all essential rungs. For bound_chart use labels like Big-O, Omega, Theta with the bound relation in value."
        ].join(" ")
      },
      {
        role: "user",
        content: JSON.stringify(commonUserPayload)
      }
    ];
  }

  openRouterRequestBody(payload, { streaming = false } = {}) {
    return {
      model: this.model,
      messages: this.buildMessages(payload, { streaming }),
      temperature: 0.1,
      max_tokens: streaming ? 420 : 520,
      reasoning: { effort: "minimal" },
      stream: streaming,
      ...(streaming ? {} : { response_format: { type: "json_object" } })
    };
  }

  async validate(payload) {
    const answer = String(payload?.answer || "").trim();
    if (answer.length < 12) {
      return {
        verdict: "wrong",
        feedback: "Too short to validate. Say the core definitions and at least one key tradeoff or algorithm idea.",
        missing: ["substance"],
        fix: "Write 2-4 concrete sentences.",
        teaching: null
      };
    }

    const requestOpenRouter = async () => {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), this.timeoutMs);
      try {
        const response = await this.fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          signal: controller.signal,
          headers: {
            "Authorization": `Bearer ${this.apiKey}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "http://127.0.0.1:8765/study/",
            "X-Title": "OI State Exam Study Recall Validator"
          },
          body: JSON.stringify(this.openRouterRequestBody(payload))
        });

        const textBody = await response.text();
        if (!response.ok) {
          throw new Error(`OpenRouter ${response.status}: ${textBody.slice(0, 300)}`);
        }
        return JSON.parse(textBody);
      } catch (error) {
        if (error?.name === "AbortError") throw timeoutError();
        throw error;
      } finally {
        clearTimeout(timeout);
      }
    };

    let data;
    try {
      data = await Promise.race([
        requestOpenRouter(),
        new Promise((_, reject) => setTimeout(() => reject(timeoutError()), this.timeoutMs + 500))
      ]);
    } catch (error) {
      throw error;
    }

    /*
      The timeout wraps the body read too. Some OpenRouter routes send headers
      quickly and then wait in the free-model queue before returning JSON.
    */
    const text = data?.choices?.[0]?.message?.content || "";
    const parsed = extractJson(text);
    if (!parsed) {
      return {
        verdict: "partial",
        feedback: String(text || "The model responded, but not in the expected format. Re-read the must-say bullets and try again.").slice(0, 220),
        missing: [],
        fix: "",
        teaching: null
      };
    }

    return {
      ...normalizeResult(parsed)
    };
  }

  async streamValidate(payload, onEvent = () => {}) {
    const answer = String(payload?.answer || "").trim();
    if (answer.length < 12) {
      const result = {
        verdict: "wrong",
        feedback: "Too short to validate. Say the core definitions and at least one key tradeoff or algorithm idea.",
        missing: ["substance"],
        fix: "Write 2-4 concrete sentences.",
        teaching: null
      };
      onEvent({ type: "final", result });
      return result;
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this.timeoutMs);
    let accumulated = "";

    try {
      onEvent({ type: "status", message: "Request sent to OpenRouter. Waiting for the model..." });
      const response = await this.fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        signal: controller.signal,
        headers: {
          "Authorization": `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://127.0.0.1:8765/study/",
          "X-Title": "OI State Exam Study Recall Validator"
        },
        body: JSON.stringify(this.openRouterRequestBody(payload, { streaming: true }))
      });

      if (!response.ok) {
        const body = await response.text();
        throw new Error(`OpenRouter ${response.status}: ${body.slice(0, 300)}`);
      }

      if (!response.body) throw new Error("OpenRouter did not return a readable stream.");
      onEvent({ type: "status", message: "Connected. Waiting for the first feedback tokens..." });

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const events = buffer.split(/\n\n/);
        buffer = events.pop() || "";

        for (const event of events) {
          const dataLines = event
            .split(/\n/)
            .map((line) => line.trim())
            .filter((line) => line.startsWith("data:"))
            .map((line) => line.slice(5).trim());
          if (!dataLines.length) continue;

          const data = dataLines.join("\n");
          if (data === "[DONE]") {
            const result = parseStructuredFeedback(accumulated);
            onEvent({ type: "final", result });
            return result;
          }

          let chunk;
          try {
            chunk = JSON.parse(data);
          } catch {
            continue;
          }

          if (chunk.error) {
            throw new Error(chunk.error.message || "OpenRouter returned a streaming error.");
          }

          const delta = chunk.choices?.[0]?.delta?.content || "";
          if (delta) {
            accumulated += delta;
            const visibleText = visibleFeedbackFromStructuredStream(accumulated);
            if (visibleText) {
              onEvent({ type: "token", delta, text: visibleText });
            }
          }
        }
      }

      const result = parseStructuredFeedback(accumulated);
      onEvent({ type: "final", result });
      return result;
    } catch (error) {
      if (error?.name === "AbortError") throw timeoutError();
      throw error;
    } finally {
      clearTimeout(timeout);
    }
  }
}

export function createRecallValidatorAgent(config) {
  return new RecallValidatorAgent(config);
}
