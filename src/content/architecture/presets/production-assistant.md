---
title: Production assistant
description: Add the operational layers that make an AI system diagnosable and maintainable.
components: [model, agent, retriever, vector-db, tool-layer, guardrail, evaluation, observability, cache]
connections:
  - { from: agent, to: model, kind: recommended }
  - { from: agent, to: retriever, kind: recommended }
  - { from: retriever, to: vector-db, kind: recommended }
  - { from: agent, to: tool-layer, kind: recommended }
  - { from: guardrail, to: agent, kind: recommended }
  - { from: observability, to: evaluation, kind: recommended }
lesson: []
order: 3
---
Use this pattern to see how quality, safety, performance, and operations surround the core AI path.
