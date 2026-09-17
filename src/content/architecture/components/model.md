---
title: Model
layer: Orchestration
category: generation
description: Generates, transforms, or reasons over the context it receives.
solves: Language understanding and response generation.
risks: Weak instructions, poor context, model drift, or provider dependency.
tradeoff: More capability can mean more cost, latency, and less determinism.
questions: [What does the model need to know?, How will prompts and versions be evaluated?]
inputs: [prompt, context]
outputs: [response]
recommendedConnections: [agent, retriever, guardrail]
warningConnections: [private-data]
order: 1
visibility: core
---
The model is a capability inside the system, not the whole system.
