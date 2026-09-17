---
title: Make failures visible
eyebrow: 08 · OBSERVABILITY
summary: Add logs, traces, metrics, and alerts so the system can be operated.
why: When a user reports a bad answer, we need to know whether the issue came from the model, retrieval, a tool, latency, permissions, or stale data.
without: Production failures become anecdotes and debugging becomes guesswork.
role: Observability connects one request to its components and records latency, errors, cost, decisions, and safe diagnostic context.
tradeoff: More visibility costs storage and needs careful redaction, retention, and access control.
question: Can we trace one answer end to end without exposing sensitive content?
order: 8
nodes:
  - { id: request, label: Request, detail: One user journey, kind: boundary, x: 10, y: 50 }
  - { id: system, label: AI system, detail: All runtime components, kind: core, x: 43, y: 50 }
  - { id: logs, label: Logs + traces, detail: What happened, kind: operations, x: 68, y: 22 }
  - { id: metrics, label: Metrics + alerts, detail: What is changing, kind: operations, x: 68, y: 78 }
  - { id: response, label: Response, detail: User-visible result, kind: boundary, x: 91, y: 50 }
connections:
  - { from: request, to: system, label: trace context }
  - { from: system, to: response, label: result }
  - { from: system, to: logs, label: spans + errors }
  - { from: system, to: metrics, label: latency + cost }
  - { from: metrics, to: system, label: alert + action }
highlight: [logs, metrics]
---
Observability is the difference between a demo that works and a service you can support.
