import http from "node:http";
import { createRecallValidatorAgent } from "./recall-validator-agent.mjs";

const PORT = Number(process.env.RECALL_VALIDATOR_PORT || 8787);
const HOST = process.env.RECALL_VALIDATOR_HOST || "127.0.0.1";
const MAX_BODY_BYTES = 80_000;

const agent = createRecallValidatorAgent({
  apiKey: process.env.OPENROUTER_API_KEY,
  model: process.env.OPENROUTER_MODEL || "google/gemini-3.1-flash-lite",
  timeoutMs: Number(process.env.RECALL_VALIDATOR_TIMEOUT_MS || 120_000)
});

function sendJson(res, status, payload) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Cache-Control": "no-store"
  });
  res.end(JSON.stringify(payload));
}

function sendSse(res, event, payload) {
  res.write(`event: ${event}\n`);
  res.write(`data: ${JSON.stringify(payload)}\n\n`);
}

function startSse(res) {
  res.writeHead(200, {
    "Content-Type": "text/event-stream; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Cache-Control": "no-store, no-transform",
    "Connection": "keep-alive",
    "X-Accel-Buffering": "no"
  });
  res.write(": connected\n\n");
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.setEncoding("utf8");
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > MAX_BODY_BYTES) {
        reject(new Error("Request body is too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch {
        reject(new Error("Invalid JSON body"));
      }
    });
    req.on("error", reject);
  });
}

const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") {
    sendJson(res, 204, {});
    return;
  }

  if (req.method === "GET" && req.url === "/health") {
    sendJson(res, 200, {
      ok: true,
      model: agent.model,
      hasKey: Boolean(process.env.OPENROUTER_API_KEY)
    });
    return;
  }

  if (req.method === "POST" && req.url === "/api/validate-recall/stream") {
    try {
      const body = await readJsonBody(req);
      startSse(res);
      sendSse(res, "status", { message: "Local validator connected." });

      const startedAt = Date.now();
      const heartbeat = setInterval(() => {
        const seconds = Math.round((Date.now() - startedAt) / 1000);
        sendSse(res, "status", { message: `Still waiting on ${agent.model} via OpenRouter... ${seconds}s` });
      }, 10_000);

      req.on("close", () => clearInterval(heartbeat));

      await agent.streamValidate(body, (event) => {
        if (event.type === "status") sendSse(res, "status", { message: event.message });
        if (event.type === "token") sendSse(res, "token", { delta: event.delta, text: event.text });
        if (event.type === "final") sendSse(res, "final", { result: event.result });
      });

      clearInterval(heartbeat);
      res.end();
    } catch (error) {
      if (!res.headersSent) startSse(res);
      sendSse(res, "error", {
        error: error instanceof Error ? error.message : String(error)
      });
      res.end();
    }
    return;
  }

  if (req.method !== "POST" || req.url !== "/api/validate-recall") {
    sendJson(res, 404, { ok: false, error: "Not found" });
    return;
  }

  try {
    const body = await readJsonBody(req);
    const result = await agent.validate(body);
    sendJson(res, 200, { ok: true, result });
  } catch (error) {
    sendJson(res, 500, {
      ok: false,
      error: error instanceof Error ? error.message : String(error)
    });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Recall validator listening on http://${HOST}:${PORT}`);
});
