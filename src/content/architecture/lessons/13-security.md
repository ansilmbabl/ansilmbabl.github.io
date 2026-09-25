---
title: Protect identity, data, and actions
eyebrow: 12 · TRUST BOUNDARIES
summary: Add the controls that keep a useful assistant from becoming an uncontrolled data or action path.
why: Public AI systems must protect sensitive information, validate callers, limit tools, resist prompt injection, and preserve an audit trail.
without: A helpful response can still leak data, cross a tenant boundary, or perform an action that the user was never authorized to request.
role: Apply authentication, authorization, input and output checks, secret handling, privacy rules, retention, and human approval where needed.
tradeoff: Stronger controls add latency and implementation work, but they make the system safe to expose.
question: Which identity is allowed to see this evidence or invoke this action, and how can we prove that decision later?
order: 12
legend: Dotted outline = controls added around the AI system before it handles real data or actions.
nodes:
  - { id: client-api, label: Client + API, detail: Authenticated boundary, kind: merged-container, x: 12, y: 50 }
  - { id: identity, label: Identity, detail: Authentication + authorization, kind: security, x: 35, y: 25, dotted: true }
  - { id: privacy, label: Privacy, detail: PII + retention rules, kind: safety, x: 35, y: 75, dotted: true }
  - { id: assistant, label: AI assistant, detail: Controlled system path, kind: core, x: 62, y: 50 }
  - { id: audit, label: Audit trail, detail: Decisions and actions, kind: operations, x: 87, y: 50, dotted: true }
connections:
  - { from: client-api, to: identity, label: authenticate }
  - { from: identity, to: assistant, label: authorize }
  - { from: privacy, to: assistant, label: protect }
  - { from: assistant, to: audit, label: record }
highlight: [identity, privacy, audit]
---
Security is not a final filter around the model. It is a set of decisions applied at the boundary, data, tool, and audit layers.
