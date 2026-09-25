---
title: Make the model’s job explicit
eyebrow: 03 · PROMPTS AND OUTPUTS
summary: Give the model instructions, context, and a response shape the application can trust.
why: A model can produce many plausible answers. Prompts, examples, and structured output rules tell it what role to play and what shape its answer must have.
without: The response may be difficult to parse, inconsistent between requests, or missing information that the rest of the application needs.
role: The Agent builds the prompt, the Model generates an answer, and a response schema helps the API validate what came back.
tradeoff: More instructions can improve consistency, but they consume tokens and can make prompts harder to maintain.
question: Which parts of the response must be guaranteed by code instead of merely requested from the Model?
order: 3
nodes:
  - { id: ai-system, label: AI system, detail: Orchestration + prompt + model, kind: container-wide, x: 50, y: 50, merge: [agent, prompt, model, schema] }
  - { id: agent, label: Agent, detail: Builds the request, kind: core, x: 13, y: 50 }
  - { id: prompt, label: Prompt, detail: Instructions + context, kind: generation, x: 36, y: 50 }
  - { id: model, label: Model, detail: Generates an answer, kind: generation, x: 61, y: 50 }
  - { id: schema, label: Output schema, detail: Validated response shape, kind: quality, x: 85, y: 50 }
connections:
  - { from: agent, to: prompt, label: assemble }
  - { from: prompt, to: model, label: instructions }
  - { from: model, to: schema, label: structured result }
highlight: [prompt, schema]
---
The goal is not to write a clever prompt. It is to create a behavior the application can validate.
