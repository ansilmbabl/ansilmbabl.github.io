---
title: Put boundaries around behavior
eyebrow: 05 · SAFETY AND SECURITY
summary: Add guardrails and access boundaries before the system acts at scale.
why: A useful system must also keep private data, unsafe actions, and unsupported claims within policy.
without: Tools may be called incorrectly, sensitive evidence may leak, and the model may present guesses as facts.
role: Guardrails validate requests, tool calls, retrieved context, and responses. Authentication and authorization become separate layers as the application grows.
tradeoff: Safety checks add latency and can create false positives, but they make failure behavior intentional.
question: What must never happen, and which rules require hard enforcement outside the model?
order: 5
nodes:
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
Guardrails reduce risk; they do not replace identity, authorization, network controls, or careful tool design.
