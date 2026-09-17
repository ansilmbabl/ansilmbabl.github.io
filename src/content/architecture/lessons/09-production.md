---
title: Prepare it for production
eyebrow: 09 · RUNTIME AND DEPLOYMENT
summary: Put the AI system behind reliable APIs, containers, secrets, and runtime controls.
why: A good design must be deployable, repeatable, secure, observable, and recoverable—not just correct on a developer laptop.
without: Deployments drift, secrets leak, capacity is unpredictable, and failures are difficult to recover from.
role: API boundaries, authentication, secrets management, Docker, Kubernetes, queues, databases, and deployment controls turn a system into an operable product.
tradeoff: Production readiness adds platform work, but it protects reliability, security, and the ability to change safely.
question: What must be true for this system to be safe to deploy, roll back, and operate every day?
order: 9
nodes:
  - { id: client, label: Client, detail: Product or user, kind: boundary, x: 8, y: 50 }
  - { id: api, label: API boundary, detail: Auth + validation, kind: security, x: 27, y: 50 }
  - { id: runtime, label: Container runtime, detail: Docker + Kubernetes, kind: runtime, x: 48, y: 50 }
  - { id: system, label: AI system, detail: The application path, kind: core, x: 69, y: 50 }
  - { id: ops, label: Operations, detail: Logs + metrics + alerts, kind: operations, x: 69, y: 20 }
  - { id: deploy, label: Delivery, detail: CI/CD + rollback, kind: runtime, x: 69, y: 80 }
  - { id: response, label: Response, detail: Reliable result, kind: boundary, x: 91, y: 50 }
connections:
  - { from: client, to: api, label: request }
  - { from: api, to: runtime, label: authenticated traffic }
  - { from: runtime, to: system, label: managed workload }
  - { from: system, to: response, label: response }
  - { from: system, to: ops, label: telemetry }
  - { from: deploy, to: runtime, label: release }
highlight: [api, runtime, ops, deploy]
---
This is not a claim that every application needs every platform component on day one. It is a checklist for making the important operational decisions explicit.
