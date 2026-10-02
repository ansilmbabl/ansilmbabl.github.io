---
title: Observe application access and traffic
eyebrow: 15 · APPLICATION OBSERVABILITY
summary: Extend AI tracing into application access, traffic, latency, cost, and errors.
why: Stage 09 introduced tracing inside the AI system. The application pipeline also needs to show who is calling it, how traffic behaves, and where latency or errors appear at the API boundary.
without: A user reports “it failed,” and the team has to guess which part of the system went wrong.
role: Logs and traces explain one run; metrics for access, traffic, latency, cost, and errors reveal what is changing across many runs.
tradeoff: More visibility costs storage and requires redaction, retention, and access rules so diagnostic data does not become a new leak.
question: Can we follow one answer from request to response without recording sensitive content unnecessarily?
order: 15
replaces: [request, system, logs, metrics, observability, security, data-layer, reliability]
legend: Application Observability connects API access and traffic signals to the AI system’s internal traces.
nodes:
  - { id: frontend, label: Frontend, detail: Web or mobile visitor experience, kind: boundary, x: 8, y: 50 }
  - { id: api, label: API layer, detail: Access + validation + traffic boundary, kind: security, x: 27, y: 50 }
  - { id: system, label: AI system, detail: AI + data + security + reliability, kind: merged-container, x: 57, y: 50, merge: [orchestrator, fast-model, reasoning-model, prompt, retriever, reranker, sources, pipeline, embeddings, index, vector-store, tools, guard, cache, schema, observability, evaluation, security, postgres, object, vector, backup, reliability, queue, worker, fallback, result] }
  - { id: observability, label: Observability, detail: Access + traffic + internal traces, kind: merged-container, x: 57, y: 80, merge: [logs, metrics] }
  - { id: output, label: Response, detail: User-visible result, kind: boundary, x: 92, y: 50 }
connections:
  - { from: frontend, to: api, label: visitor request }
  - { from: api, to: system, label: validated traffic }
  - { from: system, to: output, label: result }
  - { from: api, to: observability, label: access + latency }
  - { from: system, to: observability, label: traces + cost }
highlight: [observability]
---
Observability is what turns a demo that works into a service the team can support.
