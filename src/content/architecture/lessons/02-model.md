---
title: Add an orchestrator
eyebrow: 02 · ROUTING AND ORCHESTRATION
summary: Analyse the question and send it to the model that fits the job.
why: A single model is a useful POC, but a real assistant receives different kinds of questions. An Orchestrator can classify the request and route it to a fast model, reasoning model, or specialist flow.
without: Every question uses the same expensive path, even when a simpler or more suitable model would be better.
role: The Orchestrator reads the request, selects a route, adds basic instructions, and sends the work to the chosen Model.
tradeoff: Routing can improve cost and quality, but it adds another decision that must be tested and observed.
question: What signals tell us which model or workflow is the right fit for this request?
order: 2
replaces: [model]
nodes:
  - { id: input, label: Visitor question, detail: Product request, kind: boundary, x: 9, y: 50 }
  - { id: orchestrator, label: Orchestrator, detail: Understands and routes, kind: core, x: 35, y: 50 }
  - { id: fast-model, label: Fast model, detail: Simple product answer, kind: generation, x: 62, y: 26 }
  - { id: reasoning-model, label: Reasoning model, detail: Complex solution question, kind: generation, x: 62, y: 74 }
  - { id: output, label: Response, detail: Useful answer or handoff, kind: boundary, x: 91, y: 50 }
connections:
  - { from: input, to: orchestrator, label: question }
  - { from: orchestrator, to: fast-model, label: simple route }
  - { from: orchestrator, to: reasoning-model, label: complex route }
  - { from: fast-model, to: output, label: answer }
  - { from: reasoning-model, to: output, label: answer }
highlight: [orchestrator, fast-model, reasoning-model]
---
The orchestrator is application logic around the models—not a replacement for them.
