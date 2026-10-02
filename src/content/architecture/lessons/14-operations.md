---
title: Close the feedback loop
eyebrow: 17 · CONTINUOUS FEEDBACK
summary: Turn real user behavior into feedback, evaluation cases, experiments, and controlled updates.
why: A deployed application improves only when real usage becomes evidence. Feedback should become repeatable evaluation cases and controlled experiments instead of isolated anecdotes.
without: Incidents become guesswork, alerts arrive too late, and every failure requires rediscovering how the system works.
role: The feedback loop collects user signals, adds evaluation cases, compares experiments, and sends only tested changes back to the application.
tradeoff: Operational discipline takes time, but it reduces recovery time and makes support less dependent on one person.
question: Which user signal should become a new evaluation case, and what evidence is enough to ship an improvement?
order: 17
replaces: [request, system, dashboard, alerts, runbook, team, operations, feedback]
legend: The Feedback loop turns real usage into evidence and sends tested improvements back to the application.
nodes:
  - { id: frontend, label: Frontend, detail: Web or mobile visitor experience, kind: boundary, x: 8, y: 50 }
  - { id: api, label: API layer, detail: Stable application contract, kind: security, x: 24, y: 50 }
  - { id: scalability, label: Scalability layer, detail: Load balancing + capacity controls, kind: merged-container, x: 43, y: 50, merge: [load-balancer, rate-limiter, replicas, autoscaling] }
  - { id: system, label: AI system, detail: Application path, kind: merged-container, x: 64, y: 50, merge: [orchestrator, fast-model, reasoning-model, prompt, retriever, reranker, sources, pipeline, embeddings, index, vector-store, tools, guard, cache, schema, observability, evaluation] }
  - { id: feedback, label: Feedback loop, detail: Users + evaluation + experiments, kind: merged-container, x: 64, y: 80, merge: [user-feedback, evaluation-cases, experiment, release] }
  - { id: output, label: Response, detail: Improved answer or handoff, kind: boundary, x: 92, y: 50 }
connections:
  - { from: frontend, to: api, label: visitor request }
  - { from: api, to: scalability, label: traffic }
  - { from: scalability, to: system, label: balanced workload }
  - { from: system, to: output, label: response }
  - { from: output, to: feedback, label: real usage }
  - { from: feedback, to: system, label: tested improvement }
highlight: [feedback]
---
An AI system is production-ready only when a team can understand and support it after the original author is unavailable.
