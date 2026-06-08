import { createRecallValidatorAgent } from "../study/recall-validator-agent.mjs";

const ALLOWED_ORIGINS = new Set([
  "https://fabianb12.github.io",
  "http://127.0.0.1:8765",
  "http://localhost:8765"
]);

function corsHeaders(request) {
  const origin = request.headers.get("Origin") || "";
  const allowOrigin = ALLOWED_ORIGINS.has(origin) ? origin : "https://fabianb12.github.io";
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin"
  };
}

function jsonResponse(request, status, payload) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      ...corsHeaders(request),
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}

function ssePayload(event, payload) {
  return `event: ${event}\ndata: ${JSON.stringify(payload)}\n\n`;
}

function streamRecallValidation(request, env, body) {
  const encoder = new TextEncoder();
  const agent = createRecallValidatorAgent({
    apiKey: env.OPENROUTER_API_KEY,
    model: env.OPENROUTER_MODEL || "google/gemini-3.1-flash-lite",
    fetchImpl: (input, init) => fetch(input, init),
    timeoutMs: Number(env.RECALL_VALIDATOR_TIMEOUT_MS || 120000)
  });

  const stream = new ReadableStream({
    async start(controller) {
      const send = (event, payload) => controller.enqueue(encoder.encode(ssePayload(event, payload)));
      const startedAt = Date.now();
      const heartbeat = setInterval(() => {
        const seconds = Math.round((Date.now() - startedAt) / 1000);
        send("status", { message: `Still waiting on ${agent.model} via OpenRouter... ${seconds}s` });
      }, 10000);

      try {
        send("status", { message: "Hosted validator connected." });
        await agent.streamValidate(body, (event) => {
          if (event.type === "status") send("status", { message: event.message });
          if (event.type === "token") send("token", { delta: event.delta, text: event.text });
          if (event.type === "final") send("final", { result: event.result });
        });
      } catch (error) {
        send("error", { error: error instanceof Error ? error.message : String(error) });
      } finally {
        clearInterval(heartbeat);
        controller.close();
      }
    }
  });

  return new Response(stream, {
    headers: {
      ...corsHeaders(request),
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-store, no-transform",
      "Connection": "keep-alive",
      "X-Accel-Buffering": "no"
    }
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(request) });
    }

    if (request.method === "GET" && url.pathname === "/health") {
      return jsonResponse(request, 200, {
        ok: true,
        model: env.OPENROUTER_MODEL || "google/gemini-3.1-flash-lite",
        hasKey: Boolean(env.OPENROUTER_API_KEY)
      });
    }

    if (request.method === "POST" && url.pathname === "/api/validate-recall/stream") {
      if (!env.OPENROUTER_API_KEY) {
        return jsonResponse(request, 500, { ok: false, error: "OPENROUTER_API_KEY is not configured." });
      }

      let body;
      try {
        body = await request.json();
      } catch {
        return jsonResponse(request, 400, { ok: false, error: "Invalid JSON body." });
      }

      return streamRecallValidation(request, env, body);
    }

    return jsonResponse(request, 404, { ok: false, error: "Not found." });
  }
};
