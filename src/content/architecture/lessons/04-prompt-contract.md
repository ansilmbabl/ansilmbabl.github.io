---
title: Give the routed models a reliable contract
eyebrow: 03 · PROMPTS AND OUTPUTS
summary: Put a clear prompt before the model route and validate the response before it reaches the visitor.
why: The routed system now needs a repeatable request shape. A prompt defines the model’s job, while an output schema gives the application something it can validate.
without: The fast and reasoning routes may return inconsistent responses that the rest of the application cannot safely use.
role: The Prompt prepares the request, the Model route represents the Orchestrator plus its fast and reasoning models, and the Output schema validates what comes back.
tradeoff: More instructions can improve consistency, but they consume tokens and can make prompts harder to maintain.
question: Which parts of the response must be guaranteed by code instead of merely requested from the model?
order: 3
replaces: [orchestrator, fast-model, reasoning-model]
legend: Model = the Orchestrator, fast model, and reasoning model merged behind one contract.
nodes:
  - { id: input, label: Visitor question, detail: Product request, kind: boundary, x: 10, y: 50 }
  - { id: prompt, label: Prompt, detail: Instructions + context, kind: generation, x: 30, y: 50 }
  - { id: model, label: Model, detail: Combined model route, kind: merged-container, x: 50, y: 50, merge: [orchestrator, fast-model, reasoning-model] }
  - { id: schema, label: Output schema, detail: Validated response shape, kind: quality, x: 70, y: 50 }
  - { id: output, label: Response, detail: Displayed to the visitor, kind: boundary, x: 90, y: 50 }
connections:
  - { from: input, to: prompt, label: question }
  - { from: prompt, to: model, label: instructions }
  - { from: model, to: schema, label: structured result }
  - { from: schema, to: output, label: response }
highlight: [prompt, model, schema]
---
The goal is not to write a clever prompt. It is to create a model route the application can validate.
