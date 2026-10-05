---
title: Prepare trusted knowledge
eyebrow: 04 · THE KNOWLEDGE PIPELINE
summary: Build the offline knowledge path that turns company documents into context the online model can use.
why: The model needs company knowledge, but that knowledge must be prepared before a visitor asks a question.
without: The assistant may retrieve stale, incomplete, duplicated, or unauthorized information even when the search component appears to work.
role: Offline, the pipeline parses documents into smaller chunks, adds metadata, creates embeddings, versions the content, and builds an index. Online, the Retriever uses that prepared index when a visitor asks a question.
tradeoff: Better preparation costs more engineering time, but it improves retrieval quality and makes updates safer.
question: How does approved content travel from a document into the model’s context, and when should that evidence stop being trusted?
order: 4
removesConnections:
  - { from: prompt, to: model }
legend: 'Offline lane: Documents → Ingestion → Embeddings → Knowledge index. Online lane: Visitor question → Retriever → Model.'
nodes:
  - { id: input, label: Visitor question, detail: Retrieval query, kind: boundary, x: 6, y: 25 }
  - { id: prompt, label: Prompt, detail: Instructions + context slot, kind: generation, x: 24, y: 25 }
  - { id: retriever, label: Retriever, detail: Selects relevant evidence, kind: knowledge, x: 42, y: 25 }
  - { id: model, label: Model, detail: Generates from supplied context, kind: merged-container, x: 60, y: 25, merge: [orchestrator, fast-model, reasoning-model] }
  - { id: schema, label: Output schema, detail: Validated response shape, kind: quality, x: 78, y: 25 }
  - { id: output, label: Response, detail: Grounded answer, kind: boundary, x: 94, y: 25 }
  - { id: sources, label: Documents, detail: Approved company content, kind: boundary, x: 8, y: 75 }
  - { id: pipeline, label: Ingestion, detail: Parse + chunk + enrich, kind: knowledge, x: 28, y: 75, dotted: true }
  - { id: embeddings, label: Embeddings, detail: Searchable representation, kind: generation, x: 48, y: 75, dotted: true }
  - { id: index, label: Knowledge index, detail: Versioned evidence, kind: data, x: 68, y: 75, dotted: true }
connections:
  - { from: input, to: prompt, label: question }
  - { from: prompt, to: retriever, label: search intent }
  - { from: retriever, to: model, label: retrieved context }
  - { from: model, to: schema, label: structured result }
  - { from: schema, to: output, label: response }
  - { from: sources, to: pipeline, label: publish }
  - { from: pipeline, to: embeddings, label: represent }
  - { from: embeddings, to: index, label: store }
  - { from: index, to: retriever, label: evidence }
highlight: [retriever, pipeline, embeddings, index]
---
RAG is not only a search call. It is a data pipeline with provenance, freshness, and access decisions.
