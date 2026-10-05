---
title: Make retrieval trustworthy
eyebrow: 05 · RETRIEVAL QUALITY
summary: Improve the basic RAG path so the model receives the most relevant approved evidence.
why: Finding candidate passages is not the same as finding the best context. Reranking and metadata filters help the system prioritize relevant, current, and applicable evidence.
without: The model may receive loosely related passages, too much context, or evidence that should not be used for this request.
role: The Retriever finds candidate passages from the prepared index. The Reranker orders those candidates, and the Model receives a smaller, more useful context window.
tradeoff: Better retrieval quality adds latency and another component to evaluate, but it reduces noise in the model’s context.
question: Which evidence should be passed to the model, and how can we prove that it was relevant and allowed?
order: 5
removesConnections:
  - { from: retriever, to: model }
legend: The Retriever finds candidates; the Reranker chooses the context that reaches the Model.
nodes:
  - { id: input, label: Visitor question, detail: Retrieval query, kind: boundary, x: 6, y: 25 }
  - { id: prompt, label: Prompt, detail: Instructions + context slot, kind: generation, x: 20, y: 25 }
  - { id: retriever, label: Retriever, detail: Finds candidate evidence, kind: knowledge, x: 34, y: 25 }
  - { id: reranker, label: Reranker, detail: Orders the best passages, kind: knowledge, x: 48, y: 25 }
  - { id: model, label: Model, detail: Generates from selected context, kind: merged-container, x: 62, y: 25, merge: [orchestrator, fast-model, reasoning-model] }
  - { id: schema, label: Output schema, detail: Validated response shape, kind: quality, x: 76, y: 25 }
  - { id: output, label: Response, detail: Grounded answer + sources, kind: boundary, x: 90, y: 25 }
connections:
  - { from: input, to: prompt, label: question }
  - { from: prompt, to: retriever, label: search intent }
  - { from: retriever, to: reranker, label: candidates }
  - { from: reranker, to: model, label: selected context }
  - { from: model, to: schema, label: structured result }
  - { from: schema, to: output, label: grounded answer }
highlight: [reranker]
---
This is the point where a conversational demo starts becoming a knowledge system.
