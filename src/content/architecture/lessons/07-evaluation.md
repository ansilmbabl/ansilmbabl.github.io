---
title: Measure whether the system is good
eyebrow: 10 · EVALUATION
summary: Use an offline evaluation set plus runtime traces and outputs to measure whether the assistant is improving.
why: Tracing tells us what happened during a run, but it does not tell us whether the answer was good for the visitor.
without: A prompt edit, Model upgrade, or retrieval change could make the product worse without anyone noticing.
role: Replayable Evaluation cases run through the same AI assistant without waiting for a live visitor. Evaluation then reads traces and outputs, checks answers against a rubric, and combines automated checks with human feedback.
tradeoff: Good tests take time to create and maintain, but they replace guesswork with evidence.
question: Which representative visitor cases should become evaluation cases, and what evidence proves that the system handled them well?
order: 10
legend: The live lane serves a visitor; the offline lane replays Evaluation cases and uses Observability data to improve the system.
nodes:
  - { id: input, label: Visitor question, detail: Representative customer case, kind: boundary, x: 8, y: 50 }
  - { id: assistant, label: AI assistant, detail: Agent + RAG + safety + cache, kind: merged-container, x: 50, y: 50, merge: [orchestrator, fast-model, reasoning-model, prompt, retriever, reranker, sources, pipeline, embeddings, index, vector-store, tools, guard, cache, schema], dotted: false }
  - { id: observability, label: Observability, detail: Traces and runtime signals, kind: operations, x: 50, y: 20 }
  - { id: evaluation-cases, label: Evaluation cases, detail: Replayable visitor scenarios, kind: quality, x: 25, y: 80 }
  - { id: evaluation, label: Evaluation, detail: Quality and regression signals, kind: quality, x: 72, y: 80 }
  - { id: output, label: Response, detail: Answer or handoff, kind: boundary, x: 91, y: 50 }
connections:
  - { from: input, to: assistant, label: cases }
  - { from: assistant, to: output, label: result }
  - { from: assistant, to: observability, label: traces + outputs }
  - { from: evaluation-cases, to: evaluation, label: replay }
  - { from: observability, to: evaluation, label: measured run }
  - { from: evaluation, to: assistant, label: feedback loop }
highlight: [evaluation]
---
Evaluation is how the team learns whether the observable system is helping real users and whether a change should be kept.
