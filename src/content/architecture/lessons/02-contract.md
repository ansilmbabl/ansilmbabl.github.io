---
title: Expose the assistant through a stable API
eyebrow: 11 · THE APPLICATION CONTRACT
summary: Give the completed AI assistant one stable client and API boundary.
why: The POC proved the idea and the Orchestrator now chooses between two models. The next step is to expose that growing capability through one predictable interface rather than letting a client know about every internal route.
without: The UI becomes coupled to model choices, and every internal change can force changes in every caller.
role: The API authenticates the caller, validates the visitor’s question, invokes the AI assistant, and returns one consistent response shape.
tradeoff: A stable contract takes planning, but it lets the models and routing logic evolve behind the interface.
question: What should every caller be able to depend on even when the internal model route changes?
order: 11
legend: Solid box = the client and API boundary around the completed AI assistant.
nodes:
  - { id: client-api, label: Client + API, detail: Public application boundary, kind: merged-container, x: 18, y: 50 }
  - { id: orchestrator, label: Orchestrator, detail: Routes the question, kind: core, x: 45, y: 50 }
  - { id: fast-model, label: Fast model, detail: Simple product answer, kind: generation, x: 66, y: 25 }
  - { id: reasoning-model, label: Complex model, detail: Harder solution question, kind: generation, x: 66, y: 75 }
  - { id: output, label: Response, detail: One public response shape, kind: boundary, x: 91, y: 50 }
connections:
  - { from: client-api, to: orchestrator, label: validated input }
  - { from: orchestrator, to: fast-model, label: simple route }
  - { from: orchestrator, to: reasoning-model, label: complex route }
  - { from: fast-model, to: output, label: answer }
  - { from: reasoning-model, to: output, label: answer }
highlight: [client-api]
---
This is the first boundary that lets the AI capability become part of a real product.
