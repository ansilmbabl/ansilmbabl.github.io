---
title: Let the system take controlled action
eyebrow: 03 · TOOLS
summary: Connect the agent to the outside world through explicit tools.
why: A model can describe an action, but a tool layer gives the system a controlled way to read data or change something in another system.
without: The assistant can only talk about work. It cannot complete the workflow.
role: Tools expose narrow, testable operations with contracts, permissions, retries, and error handling.
tradeoff: Tools make the system useful, but every new action adds a security and testing surface.
question: Which actions are safe to automate, and which require human approval?
order: 3
nodes:
  - { id: input, label: Input, detail: User request, kind: boundary, x: 9, y: 50 }
  - { id: agent, label: Agent, detail: Chooses the next step, kind: core, x: 34, y: 50 }
  - { id: model, label: Model, detail: Plans and interprets, kind: generation, x: 34, y: 20 }
  - { id: tools, label: Tool layer, detail: Controlled actions, kind: action, x: 62, y: 76 }
  - { id: output, label: Output, detail: Result or handoff, kind: boundary, x: 90, y: 50 }
connections:
  - { from: input, to: agent, label: request }
  - { from: agent, to: model, label: plan }
  - { from: model, to: agent, label: next step }
  - { from: agent, to: tools, label: tool call }
  - { from: tools, to: output, label: result }
highlight: [tools]
---
The agent decides; the tool contract controls what can actually happen.
