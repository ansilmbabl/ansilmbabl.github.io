---
title: Make slow work reliable
eyebrow: 14 · RELIABILITY AND ASYNC WORK
summary: Add an asynchronous reliability layer for queues, workers, retries, and fallbacks.
why: The application is protected and can store its state, but some work will still be slow or temporarily unavailable.
without: One slow dependency can make the whole request time out, duplicate work can happen, and transient failures become user-visible outages.
role: A queue holds document ingestion, long-running actions, or support handoffs; a worker processes them, and retry or fallback rules handle temporary failures. A normal short chatbot answer can remain synchronous.
tradeoff: Async processing improves resilience, but users may wait longer and the team must operate more moving parts.
question: Which failures should we retry, which should fall back, and which should reach a human?
order: 14
replaces: [api, queue, worker, fallback, result, reliability]
legend: The Reliability layer handles slow or failing work without changing the AI system’s public contract.
nodes:
  - { id: frontend, label: Frontend, detail: Web or mobile visitor experience, kind: boundary, x: 8, y: 50 }
  - { id: api, label: API layer, detail: Stable application contract, kind: security, x: 25, y: 50 }
  - { id: system, label: AI system, detail: Agent + RAG + controls, kind: merged-container, x: 50, y: 50, merge: [orchestrator, fast-model, reasoning-model, prompt, retriever, reranker, sources, pipeline, embeddings, index, vector-store, tools, guard, cache, schema, observability, evaluation] }
  - { id: reliability, label: Reliability layer, detail: Async queue + worker + recovery, kind: merged-container, x: 64, y: 80, merge: [api, queue, worker, fallback, result] }
  - { id: output, label: Response, detail: Result or safe handoff, kind: boundary, x: 92, y: 50 }
connections:
  - { from: frontend, to: api, label: visitor request }
  - { from: api, to: system, label: validated request }
  - { from: system, to: reliability, label: async work }
  - { from: reliability, to: system, label: result or fallback }
  - { from: system, to: output, label: response }
highlight: [reliability]
---
Reliability is not one feature. It is a set of decisions about what happens when the happy path stops being happy.
