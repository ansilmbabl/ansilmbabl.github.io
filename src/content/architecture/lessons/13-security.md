---
title: Add security and IAM
eyebrow: 13 · TRUST BOUNDARIES
summary: Protect the application with identity, authorization, privacy, secrets, and audit decisions.
why: The application now stores user and product data. The next risk is not only model behavior, but who can access which data and action.
without: A helpful response can still leak data, cross a tenant boundary, or perform an action that the user was never authorized to request.
role: IAM answers who may access data or invoke an action. Security also covers secrets, privacy, retention, human approval, and audit around the AI system; Guardrails separately check model behavior.
tradeoff: Stronger controls add latency and implementation work, but they make the system safe to expose.
question: Which identity is allowed to see this evidence or invoke this action, and how can we prove that decision later?
order: 13
replaces: [assistant, identity, privacy, audit, security]
legend: The Security boundary protects the AI system at the caller, data, tool, privacy, and audit decisions.
nodes:
  - { id: frontend, label: Frontend, detail: Web or mobile visitor experience, kind: boundary, x: 8, y: 50 }
  - { id: api, label: API layer, detail: Authenticated application boundary, kind: security, x: 25, y: 50 }
  - { id: security, label: Security boundary, detail: Identity + IAM + privacy + audit, kind: merged-container, x: 50, y: 20, merge: [identity, privacy, audit] }
  - { id: system, label: AI system, detail: Complete AI capability, kind: merged-container, x: 58, y: 50, merge: [orchestrator, fast-model, reasoning-model, prompt, retriever, reranker, sources, pipeline, embeddings, index, vector-store, tools, guard, cache, schema, observability, evaluation] }
  - { id: data-layer, label: Data layer, detail: Users + history + documents + index, kind: merged-container, x: 58, y: 80, merge: [postgres, object, vector, backup] }
  - { id: output, label: Response, detail: Authorized answer or handoff, kind: boundary, x: 92, y: 50 }
connections:
  - { from: frontend, to: api, label: visitor request }
  - { from: api, to: system, label: authenticated request }
  - { from: api, to: security, label: identity + IAM }
  - { from: system, to: security, label: protect + audit }
  - { from: system, to: data-layer, label: authorized data access }
  - { from: system, to: output, label: safe response }
highlight: [security]
---
Security is not a final filter around the model. It is a set of decisions applied at the boundary, data, tool, and audit layers.
