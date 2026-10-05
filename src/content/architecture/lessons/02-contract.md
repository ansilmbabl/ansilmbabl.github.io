---
title: Put an API in front of the AI system
eyebrow: 11 · THE APPLICATION PIPELINE
summary: Introduce the application boundary that lets a frontend call the completed AI system through one stable API.
why: The AI system is now a coherent capability. The next question is how a real visitor reaches it without seeing its internal complexity.
without: The frontend becomes coupled to model choices, and every internal change can force changes in every caller.
role: The frontend collects the visitor’s question, the API validates and routes the request, and the AI system returns one consistent response shape.
tradeoff: A stable contract takes planning, but it lets the models and routing logic evolve behind the interface.
question: What should every caller be able to depend on even when the internal model route changes?
order: 11
replaces: [input, assistant, observability, evaluation, evaluation-cases]
legend: Frontend and API are separate application concerns; the AI system remains behind the API boundary.
nodes:
  - { id: frontend, label: Frontend, detail: Web or mobile visitor experience, kind: boundary, x: 8, y: 50 }
  - { id: api, label: API layer, detail: Validation + routing + response contract, kind: security, x: 29, y: 50 }
  - { id: system, label: AI system, detail: Complete AI capability, kind: merged-container, x: 59, y: 50, merge: [orchestrator, fast-model, reasoning-model, prompt, retriever, reranker, sources, pipeline, embeddings, index, vector-store, tools, guard, cache, schema, observability, evaluation] }
  - { id: output, label: Response, detail: One public response shape, kind: boundary, x: 92, y: 50 }
connections:
  - { from: frontend, to: api, label: visitor request }
  - { from: api, to: system, label: validated request }
  - { from: system, to: output, label: stable response }
highlight: [api]
---
The frontend and API are different boundaries: one serves people, the other protects and stabilizes the AI capability.
