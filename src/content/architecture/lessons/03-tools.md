---
title: Give the complex route a controlled Tool
eyebrow: 06 · TOOLS AND ACTIONS
summary: Continue both model routes, then let the complex route use one explicit Tool.
why: Simple questions can still use the fast model. A harder question may need the complex model to look up product details or prepare a support request through a controlled Tool.
without: The complex model can describe an action, but it cannot safely perform work in another system.
role: The Orchestrator keeps routing simple questions to the fast model. For complex questions, it sends work to the complex model, which can call a narrow Tool and use the result before answering.
tradeoff: The system becomes more useful, but tool permissions, errors, and model-to-tool decisions now need testing and observability.
question: Which Tool should the complex route receive first, and what must it never be allowed to do?
order: 6
nodes:
  - { id: input, label: Visitor question, detail: Product request, kind: boundary, x: 9, y: 50 }
  - { id: orchestrator, label: Orchestrator, detail: Chooses the route, kind: core, x: 31, y: 50 }
  - { id: fast-model, label: Fast model, detail: Simple product answer, kind: generation, x: 51, y: 25 }
  - { id: reasoning-model, label: Complex model, detail: Plans the harder answer, kind: generation, x: 51, y: 55 }
  - { id: tools, label: Tool, detail: Reads catalogue or prepares support, kind: action, x: 66, y: 80 }
  - { id: output, label: Response, detail: Answer or handoff, kind: boundary, x: 91, y: 50 }
connections:
  - { from: input, to: orchestrator, label: request }
  - { from: orchestrator, to: fast-model, label: simple route }
  - { from: orchestrator, to: reasoning-model, label: complex route }
  - { from: reasoning-model, to: tools, label: tool call }
  - { from: tools, to: reasoning-model, label: result }
  - { from: fast-model, to: output, label: answer }
  - { from: reasoning-model, to: output, label: answer }
highlight: [tools]
---
The wrapper is the first useful boundary: inside it, orchestration, models, and tools work together; outside it, the product sees one AI capability.
