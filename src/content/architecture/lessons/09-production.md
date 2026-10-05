---
title: Scale the application path
eyebrow: 16 · SCALABILITY
summary: Add load balancing and capacity controls so the application can serve more users safely, even when a replica fails.
why: We can see application traffic now, but visibility does not create capacity. More visitors require the request path to distribute work safely.
without: One instance can become overloaded, a single failure can take down the service, and traffic spikes can make every user experience slow responses.
role: The API receives traffic through a scalability layer that balances requests, limits abusive bursts, and routes work across healthy replicas. Shared state and cache keys must still work when requests move between replicas.
tradeoff: More capacity improves availability, but it adds coordination, state-management, and cost decisions.
question: What should happen when traffic doubles, one replica fails, or a request becomes too expensive?
order: 16
replaces: [client, client-api, system, data-layer, reliability, api, runtime, ops, deploy, scalability]
legend: The Scalability layer distributes traffic and protects the application path as demand grows.
nodes:
  - { id: frontend, label: Frontend, detail: Web or mobile visitor experience, kind: boundary, x: 8, y: 50 }
  - { id: api, label: API layer, detail: Stable application contract, kind: security, x: 25, y: 50 }
  - { id: scalability, label: Scalability layer, detail: Load balancer + rate limits + replicas, kind: merged-container, x: 50, y: 50, merge: [load-balancer, rate-limiter, replicas, autoscaling] }
  - { id: system, label: AI system, detail: Application path, kind: merged-container, x: 72, y: 50, merge: [orchestrator, fast-model, reasoning-model, prompt, retriever, reranker, sources, pipeline, embeddings, index, vector-store, tools, guard, cache, schema, observability, evaluation] }
  - { id: observability, label: Observability, detail: Access + traffic + internal traces, kind: merged-container, x: 72, y: 80, merge: [logs, metrics] }
  - { id: output, label: Response, detail: Reliable result, kind: boundary, x: 92, y: 50 }
connections:
  - { from: frontend, to: api, label: visitor request }
  - { from: api, to: scalability, label: incoming traffic }
  - { from: scalability, to: system, label: balanced workload }
  - { from: system, to: output, label: response }
  - { from: api, to: observability, label: traffic signals }
highlight: [scalability]
---
This is not a claim that every application needs every platform component on day one. It is a guided checklist for making important operational decisions explicit as the system earns more users.
