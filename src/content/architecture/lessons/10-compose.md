---
title: Compose and trace the AI assistant
eyebrow: 09 · THE AI SYSTEM
summary: Bring the Agent, RAG, and runtime controls together, then make every run traceable.
why: 'We now have the core AI system: routing, contracts, RAG, Tools, Guardrails, and Cache.'
without: Each component can work in isolation while the end-to-end behavior remains difficult to explain when a visitor reports a bad or slow answer.
role: Define one internal AI system boundary that owns the Agent, the complete RAG path, safety checks, caching, and response generation. Add tracing so each model, retrieval, and Tool step can be followed.
tradeoff: A clear boundary improves ownership and testing, but it requires explicit contracts between components.
question: Can we explain one request end to end, including what the Model, RAG path, and Tool did along the way?
order: 9
legend: Solid box = the complete AI assistant; the Observability tile records its traces, latency, errors, and decisions.
nodes:
  - { id: entry, label: Visitor question, detail: Public request, kind: boundary, x: 9, y: 50 }
  - { id: assistant, label: AI assistant, detail: Agent + RAG + safety + cache, kind: merged-container, x: 50, y: 50, merge: [orchestrator, fast-model, reasoning-model, prompt, retriever, reranker, sources, pipeline, embeddings, index, vector-store, tools, guard, cache, schema], dotted: false }
  - { id: observability, label: Observability, detail: Traces, latency, errors, and tool steps, kind: operations, x: 50, y: 20 }
  - { id: answer, label: Response, detail: Answer or handoff, kind: boundary, x: 91, y: 50 }
connections:
  - { from: entry, to: assistant, label: request }
  - { from: assistant, to: answer, label: response }
  - { from: assistant, to: observability, label: trace run }
highlight: [assistant]
---
This is the first point where the learner can explain the AI system as a whole and inspect what happened inside one run.
