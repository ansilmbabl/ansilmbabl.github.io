---
title: Add the application data layer
eyebrow: 12 · DATA AND STORAGE
summary: Give the application durable places for users, history, documents, and the existing RAG index.
why: An AI feature is rarely only a model call. It needs durable storage for users, configuration, documents, audit records, and the searchable index.
without: Important state disappears when a process restarts, documents have nowhere reliable to live, and operational history cannot be recovered.
role: PostgreSQL can hold users and conversation history, object storage can hold source documents, and the vector store can hold the searchable representations already used by RAG.
tradeoff: Durable storage improves reliability, but introduces schemas, migrations, backups, retention rules, and access controls.
question: What is the source of truth for each kind of data, and how long should we keep it?
order: 12
replaces: [postgres, object, vector, backup, data-layer]
legend: The Data layer groups durable stores and recovery policy without hiding that each store has a different job.
nodes:
  - { id: frontend, label: Frontend, detail: Web or mobile visitor experience, kind: boundary, x: 8, y: 50 }
  - { id: api, label: API layer, detail: Stable application contract, kind: security, x: 25, y: 50 }
  - { id: system, label: AI system, detail: Complete AI capability, kind: merged-container, x: 48, y: 50, merge: [orchestrator, fast-model, reasoning-model, prompt, retriever, reranker, sources, pipeline, embeddings, index, vector-store, tools, guard, cache, schema, observability, evaluation] }
  - { id: data-layer, label: Data layer, detail: Users + history + documents + index, kind: merged-container, x: 72, y: 78, merge: [postgres, object, vector, backup] }
  - { id: output, label: Response, detail: One public response shape, kind: boundary, x: 92, y: 50 }
connections:
  - { from: frontend, to: api, label: visitor request }
  - { from: api, to: system, label: validated request }
  - { from: system, to: data-layer, label: read + write }
  - { from: system, to: output, label: response }
highlight: [data-layer]
---
Choosing storage is part of the product design: it determines what can be recovered, searched, changed, or deleted.
