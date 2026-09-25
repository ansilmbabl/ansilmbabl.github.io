---
title: Make one request traceable
eyebrow: 16 · OBSERVABILITY
summary: Leave enough evidence to explain what happened when the public chatbot is wrong or slow.
why: An AI response is the result of several steps. We need to see whether the problem came from the Model, retrieval, a Tool, permissions, latency, or stale data.
without: A user reports “it failed,” and the team has to guess which part of the system went wrong.
role: Logs record important events, traces connect those events to one request, and metrics show trends such as errors, latency, and cost.
tradeoff: More visibility costs storage and requires redaction, retention, and access rules so diagnostic data does not become a new leak.
question: Can we follow one answer from request to response without recording sensitive content unnecessarily?
order: 16
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
Observability is what turns a demo that works into a service the team can support.
