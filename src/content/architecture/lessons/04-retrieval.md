---
title: Give the system useful knowledge
eyebrow: 04 · RETRIEVAL
summary: Add a retriever and a searchable knowledge store.
why: Models do not automatically know private, recent, or organization-specific information. Retrieval finds evidence at request time.
without: The model may sound confident while inventing an answer or using stale knowledge.
role: The retriever turns a question into a search, and the vector database stores searchable representations of documents.
tradeoff: Retrieval improves grounding, but introduces ingestion, chunking, indexing, permissions, and latency concerns.
question: How will we preserve source references and prevent unauthorized evidence from entering context?
order: 4
nodes:
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
This is the point where a conversational demo becomes a knowledge system.
