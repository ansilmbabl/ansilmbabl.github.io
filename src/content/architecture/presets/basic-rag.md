---
title: Basic RAG
description: Ground a model response in a searchable knowledge base.
components: [model, retriever, vector-db]
connections:
  - { from: retriever, to: vector-db, kind: recommended }
  - { from: retriever, to: model, kind: recommended }
lesson:
  - { id: start, title: Start with a question, copy: A system begins with a user need—not a technology list., requires: [] }
  - { id: model, title: Add a model, copy: The model can generate language, but it does not automatically know your private or recent information., requires: [model] }
  - { id: retrieval, title: Add retrieval, copy: Retrieval finds the evidence the model should see before it answers., requires: [model, retriever] }
  - { id: knowledge, title: Connect the knowledge source, copy: The retriever needs an index to search. Connect it to a vector database., requires: [model, retriever, vector-db], requiresConnection: { from: retriever, to: vector-db } }
  - { id: safety, title: Add a safety boundary, copy: Grounded answers still need policy. Add a guardrail before calling this system safe to use., requires: [model, retriever, vector-db, guardrail] }
  - { id: evaluation, title: Add evaluation, copy: A system is not finished when it answers once. Add evaluation so changes can be measured over time., requires: [model, retriever, vector-db, guardrail, evaluation] }
  - { id: review, title: Review the boundary, copy: Grounding, safety, and evaluation are present. Now think about freshness, access control, and observability., requires: [model, retriever, vector-db, guardrail, evaluation] }
order: 1
---
Use this pattern to understand the minimum shape of a grounded AI answer.
