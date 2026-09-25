---
title: Avoid repeating expensive work
eyebrow: 08 · PERFORMANCE AND STATE
summary: Add a fast path for answers or work that is safe to reuse.
why: Model calls, searches, and tool calls can take time and money. A Cache lets us reuse a previous result when the request and freshness rules allow it.
without: Two identical requests do the same expensive work twice.
role: The system checks the Cache first. On a hit it returns the saved result; on a miss it follows the normal Agent path and may save the new result.
tradeoff: Caching can improve speed and cost, but a bad key or stale entry can return the wrong result to the wrong user.
question: What can safely be reused, and when must the saved result expire?
order: 8
nodes:
  - { id: ai-system, label: AI system, detail: Existing assistant path, kind: container, x: 50, y: 50, merge: [cache, agent, model] }
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
