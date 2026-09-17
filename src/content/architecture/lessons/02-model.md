---
title: Give the system a reasoning engine
eyebrow: 02 · GENERATION
summary: Split the agent’s hidden capability into an explicit model.
why: A model generates and transforms language. Making it explicit helps us reason about prompts, context, latency, provider choice, and cost.
without: The system’s central capability is invisible, difficult to test, and impossible to tune deliberately.
role: The model receives instructions and context, then produces a draft response or the next action.
tradeoff: More capable models can improve quality, but usually add cost, latency, and provider dependency.
question: What context does the model need, and how will we measure whether its output is good?
order: 2
nodes:
  - { id: input, label: Input, detail: User request, kind: boundary, x: 10, y: 50 }
  - { id: agent, label: Agent, detail: Orchestrates the request, kind: core, x: 39, y: 50 }
  - { id: model, label: Model, detail: Generates and reasons, kind: generation, x: 65, y: 50 }
  - { id: output, label: Output, detail: Useful response, kind: boundary, x: 90, y: 50 }
connections:
  - { from: input, to: agent, label: request }
  - { from: agent, to: model, label: instructions + context }
  - { from: model, to: output, label: draft response }
highlight: [model]
---
The model is a component inside the system—not the whole system.
