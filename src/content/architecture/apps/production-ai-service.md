---
title: Production AI service
description: The surrounding platform view of an AI application, including runtime, observability, caching, and evaluation.
useCase: A reliable product-facing AI capability that needs to be operated over time.
order: 4
nodes:
  - { id: client, component: experience, x: 5, y: 44, label: Product / client }
  - { id: api, component: api, x: 19, y: 44, label: API gateway }
  - { id: cache, component: cache, x: 37, y: 19 }
  - { id: agent, component: agent, x: 40, y: 54 }
  - { id: tools, component: tool-layer, x: 61, y: 27 }
  - { id: model, component: model, x: 61, y: 68 }
  - { id: observability, component: observability, x: 80, y: 20 }
  - { id: evaluation, component: evaluation, x: 80, y: 71 }
  - { id: result, component: experience, x: 94, y: 44, label: Response }
connections:
  - { from: client, to: api, label: request }
  - { from: api, to: cache, label: lookup }
  - { from: api, to: agent, label: miss / invoke }
  - { from: agent, to: tools, label: action }
  - { from: agent, to: model, label: generation }
  - { from: model, to: result, label: response }
  - { from: agent, to: observability, label: traces }
  - { from: result, to: evaluation, label: feedback }
---
This view helps explain that production readiness is not only about the model path. Latency, repeated work, traces, and quality feedback shape the system too.
