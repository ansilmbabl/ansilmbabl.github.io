---
title: Keep slow work from blocking users
eyebrow: 14 · RELIABILITY AND ASYNC WORK
summary: Add queues, workers, retries, and fallbacks for work that may be slow or fail.
why: Model providers, document processing, and external tools can be slow or temporarily unavailable. A production service must decide how to wait, retry, defer, or recover.
without: One slow dependency can make the whole request time out, duplicate work can happen, and transient failures become user-visible outages.
role: A queue holds work safely, a worker processes it, and retry or fallback rules handle temporary failures without hiding permanent ones.
tradeoff: Async processing improves resilience, but users may wait longer and the team must operate more moving parts.
question: Which failures should we retry, which should fall back, and which should reach a human?
order: 14
nodes:
  - { id: api, label: API, detail: Accepts the request, kind: security, x: 10, y: 50 }
  - { id: queue, label: Queue, detail: Holds work safely, kind: runtime, x: 32, y: 50 }
  - { id: worker, label: Worker, detail: Processes the task, kind: core, x: 55, y: 50 }
  - { id: fallback, label: Retry + fallback, detail: Handles failures, kind: safety, x: 55, y: 20 }
  - { id: result, label: Result store, detail: Status and output, kind: data, x: 80, y: 50 }
connections:
  - { from: api, to: queue, label: enqueue }
  - { from: queue, to: worker, label: consume }
  - { from: worker, to: result, label: save result }
  - { from: fallback, to: worker, label: recover }
highlight: [queue, worker, fallback]
---
Reliability is not one feature. It is a set of decisions about what happens when the happy path stops being happy.
