---
title: Build the smallest POC
eyebrow: 01 · DIRECT MODEL POC
summary: Send a visitor’s product question directly to one Model and return its response.
why: "The fastest way to test the idea is to build the smallest possible interaction: user question in, model response out."
without: We do not know whether the assistant can provide any useful value for the business problem.
role: The POC sends the question directly to a Model—a language model that generates an answer—with a basic instruction and displays the response.
tradeoff: This is quick to build, but the Model has no approved product knowledge, no support tools, and no reliable control over its answer.
question: Does this simple interaction solve enough of the user’s problem to justify building the next layer?
order: 1
nodes:
  - { id: input, label: Visitor question, detail: Product request, kind: boundary, x: 12, y: 50 }
  - { id: model, label: Model, detail: Direct answer generation, kind: generation, x: 50, y: 50 }
  - { id: output, label: Response, detail: Displayed to the user, kind: boundary, x: 88, y: 50 }
connections:
  - { from: input, to: model, label: prompt }
  - { from: model, to: output, label: answer }
highlight: [model]
---
This is intentionally incomplete. We are testing the product idea before adding architecture.
