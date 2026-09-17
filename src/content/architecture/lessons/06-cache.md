---
title: Make repeated work cheaper
eyebrow: 06 · PERFORMANCE
summary: Add caching where the same safe work happens repeatedly.
why: Model calls, retrieval, and tool operations can be expensive or slow. A cache can reuse results when the context and freshness rules allow it.
without: Repeated requests pay the full latency and cost every time.
role: Cache keys, invalidation, permissions, and freshness policies determine whether reuse is safe.
tradeoff: Lower latency and cost come with stale-data risk and another stateful layer to operate.
question: What is safe to reuse, and when must the cached result expire?
order: 6
nodes:
  - { id: input, label: Input, detail: Request, kind: boundary, x: 9, y: 50 }
  - { id: cache, label: Cache, detail: Fast path, kind: performance, x: 29, y: 20 }
  - { id: agent, label: Agent, detail: Full path on miss, kind: core, x: 50, y: 50 }
  - { id: model, label: Model, detail: Expensive operation, kind: generation, x: 71, y: 76 }
  - { id: output, label: Output, detail: Response, kind: boundary, x: 92, y: 50 }
connections:
  - { from: input, to: cache, label: lookup }
  - { from: cache, to: output, label: hit }
  - { from: cache, to: agent, label: miss }
  - { from: agent, to: model, label: compute }
  - { from: model, to: output, label: response }
highlight: [cache]
---
Caching is an optimization layer—not a substitute for correct access and freshness rules.
