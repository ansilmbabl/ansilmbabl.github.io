---
title: Cache
layer: Runtime and deployment
category: performance
description: Reuses safe, repeatable work to reduce latency and model spend.
solves: Repeated requests and expensive intermediate operations.
risks: Stale results, unsafe sharing, or weak cache keys.
tradeoff: Lower cost and latency require freshness and invalidation rules.
questions: [What can safely be reused?, When must a cached result expire?]
inputs: [cache-key, result]
outputs: [cached-result]
recommendedConnections: [retriever, model, tool-layer]
warningConnections: []
order: 9
visibility: production
---
Caching is an optimization layer. It should never silently weaken permissions or freshness.
