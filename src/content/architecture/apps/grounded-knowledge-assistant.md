---
title: Grounded knowledge assistant
description: A RAG application that answers questions from a controlled document collection.
useCase: Internal policies, support knowledge, engineering documentation, and enterprise search.
order: 1
nodes:
  - { id: user, component: experience, x: 5, y: 44, label: User }
  - { id: api, component: api, x: 19, y: 44, label: API / auth }
  - { id: retriever, component: retriever, x: 39, y: 28 }
  - { id: vectordb, component: vector-db, x: 39, y: 66 }
  - { id: model, component: model, x: 63, y: 44 }
  - { id: guardrail, component: guardrail, x: 63, y: 78 }
  - { id: answer, component: experience, x: 86, y: 44, label: Answer + sources }
connections:
  - { from: user, to: api, label: question }
  - { from: api, to: retriever, label: search intent }
  - { from: retriever, to: vectordb, label: retrieve }
  - { from: retriever, to: model, label: evidence }
  - { from: model, to: guardrail, label: draft }
  - { from: guardrail, to: answer, label: grounded response }
---
The system separates knowledge retrieval from response generation so that answers can be grounded in sources that are private, recent, or too large to fit inside a model’s training data.
