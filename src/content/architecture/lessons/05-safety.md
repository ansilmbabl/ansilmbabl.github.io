---
title: Decide what is allowed
eyebrow: 07 · SAFETY AND SECURITY
summary: Add a boundary before the assistant reads sensitive data or suggests a production action.
why: A helpful assistant is not automatically a safe assistant. We need explicit checks around requests, retrieved content, tool calls, and responses.
without: The assistant might reveal private information, call the wrong tool, or present a guess as a fact.
role: A Guardrail checks whether an interaction follows the rules. In a real application, identity and authorization also decide who may access each tool or document.
tradeoff: Checks add a little latency and may sometimes block a valid request, but they make unsafe behavior visible and intentional.
question: What must never happen—for example, changing production from a chat—and which rule must be enforced by code?
order: 7
nodes:
  - { id: ai-system, label: AI system, detail: Existing assistant path, kind: container, x: 50, y: 50, merge: [guard, agent, tools, model] }
  - { id: input, label: Input, detail: Authenticated request, kind: boundary, x: 8, y: 50 }
  - { id: guard, label: Guardrail, detail: Policy boundary, kind: safety, x: 27, y: 20 }
  - { id: agent, label: Agent, detail: Plans work, kind: core, x: 47, y: 50 }
  - { id: tools, label: Tools, detail: Controlled actions, kind: action, x: 69, y: 20 }
  - { id: model, label: Model, detail: Generates response, kind: generation, x: 69, y: 76 }
  - { id: output, label: Output, detail: Allowed response, kind: boundary, x: 92, y: 50 }
connections:
  - { from: input, to: guard, label: validate }
  - { from: guard, to: agent, label: allowed request }
  - { from: agent, to: tools, label: action }
  - { from: agent, to: model, label: context }
  - { from: tools, to: output, label: approved result }
  - { from: model, to: output, label: checked response }
highlight: [guard]
---
Guardrails reduce risk; they do not replace identity, authorization, network controls, or careful Tool design.
