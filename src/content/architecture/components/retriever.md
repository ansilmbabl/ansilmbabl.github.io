---
title: Retriever
layer: Knowledge and data
category: knowledge
description: Finds relevant evidence before the model writes an answer.
solves: Knowledge gaps and unsupported answers.
risks: Poor chunking, low recall, stale sources, or access leaks.
tradeoff: Better grounding adds indexing, search, and latency complexity.
questions: [Do we need semantic, keyword, or hybrid search?, How will retrieval quality be measured?]
inputs: [query]
outputs: [evidence]
recommendedConnections: [vector-db, model, guardrail]
warningConnections: [private-data]
order: 2
visibility: core
---
Retrieval is where the system decides what evidence the model is allowed to see.
