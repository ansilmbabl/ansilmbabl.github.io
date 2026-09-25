---
title: Give it trusted knowledge
eyebrow: 05 · RETRIEVAL
summary: Let the chatbot look up approved product and service information before answering.
why: A general Model does not know the company’s current product catalogue, documentation, or public support guidance. Retrieval gives it relevant evidence at the moment a visitor asks a question.
without: The assistant may sound confident while guessing, using old information, or missing the document that contains the answer.
role: The Retriever turns the visitor’s question into a search. The Vector DB stores approved public documents as searchable representations and returns likely matches.
tradeoff: Retrieval makes answers more grounded, but we now need an ingestion pipeline, permissions, source references, and more latency.
question: How will we know that the evidence is relevant and that this user is allowed to see it?
order: 5
nodes:
  - { id: ai-system, label: AI system, detail: Existing assistant path, kind: container, x: 52, y: 52, merge: [agent, retriever, vector-db, model] }
  - { id: input, label: Input, detail: User question, kind: boundary, x: 9, y: 50 }
  - { id: agent, label: Agent, detail: Orchestrates the request, kind: core, x: 30, y: 50 }
  - { id: retriever, label: Retriever, detail: Finds evidence, kind: knowledge, x: 52, y: 30 }
  - { id: vector, label: Vector DB, detail: Stores searchable knowledge, kind: data, x: 52, y: 76 }
  - { id: model, label: Model, detail: Answers from context, kind: generation, x: 75, y: 50 }
  - { id: output, label: Output, detail: Answer + sources, kind: boundary, x: 93, y: 50 }
connections:
  - { from: input, to: agent, label: question }
  - { from: agent, to: retriever, label: search intent }
  - { from: retriever, to: vector, label: retrieve }
  - { from: retriever, to: model, label: evidence }
  - { from: model, to: output, label: grounded answer }
highlight: [retriever, vector]
---
This is the point where a conversational demo starts becoming a knowledge system.
