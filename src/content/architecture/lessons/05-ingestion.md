---
title: Prepare trusted knowledge
eyebrow: 04 · THE KNOWLEDGE PIPELINE
summary: Build the path that turns company documents into searchable, governed evidence.
why: Retrieval quality begins before the user asks a question. Documents need parsing, chunking, metadata, embeddings, versioning, and access rules.
without: The assistant may retrieve stale, incomplete, duplicated, or unauthorized information even when the search component appears to work.
role: Ingest approved public material, preserve provenance, and make each passage traceable to its source and version.
tradeoff: Better preparation costs more engineering time, but it improves retrieval quality and makes updates safer.
question: How will we know where every retrieved passage came from, and when it should stop being trusted?
order: 4
legend: Dotted outline = knowledge-building pieces that become the retrieval layer next.
nodes:
  - { id: sources, label: Documents, detail: Approved company content, kind: boundary, x: 10, y: 50 }
  - { id: pipeline, label: Ingestion, detail: Parse + chunk + enrich, kind: knowledge, x: 35, y: 50, dotted: true }
  - { id: embeddings, label: Embeddings, detail: Searchable representation, kind: generation, x: 60, y: 50, dotted: true }
  - { id: index, label: Knowledge index, detail: Versioned evidence, kind: data, x: 85, y: 50, dotted: true }
connections:
  - { from: sources, to: pipeline, label: publish }
  - { from: pipeline, to: embeddings, label: represent }
  - { from: embeddings, to: index, label: store }
highlight: [pipeline, embeddings, index]
---
RAG is not only a search call. It is a data pipeline with provenance, freshness, and access decisions.
