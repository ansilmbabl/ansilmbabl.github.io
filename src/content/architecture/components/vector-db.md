---
title: Vector database
layer: Knowledge and data
category: storage
description: Stores numerical representations so related content can be found by meaning.
solves: Search over a growing body of unstructured knowledge.
risks: Bad embeddings, missing metadata, stale indexes, or expensive refreshes.
tradeoff: Semantic search introduces storage and operational complexity.
questions: [Which metadata travels with each chunk?, How will freshness and deletion work?]
inputs: [embedding, query]
outputs: [matches]
recommendedConnections: [retriever]
warningConnections: [model]
order: 3
visibility: core
---
In a larger system this can sit beside PostgreSQL, object storage, or a search index.
