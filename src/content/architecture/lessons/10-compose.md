---
title: Compose the complete AI assistant
eyebrow: 09 · THE AI SYSTEM
summary: Bring the core building blocks together into one bounded assistant capability.
why: 'The assistant is now more than a model: orchestration, prompts, retrieval, tools, guardrails, and optimization must cooperate as one understandable system.'
without: Each component can work in isolation while the end-to-end behavior remains unpredictable and difficult to explain.
role: Define the internal AI system boundary and the request path that owns decisions, evidence, actions, safety, and response generation.
tradeoff: A clear boundary improves ownership and testing, but it requires explicit contracts between components.
question: Can we describe the complete request path from visitor question to answer, evidence, action, or handoff?
order: 9
legend: Solid box = the complete AI assistant assembled from the earlier building blocks.
nodes:
  - { id: entry, label: Visitor question, detail: Public request, kind: boundary, x: 9, y: 50 }
  - { id: assistant, label: AI assistant, detail: Orchestration + knowledge + tools, kind: merged-container, x: 50, y: 50, dotted: false }
  - { id: answer, label: Answer or handoff, detail: User-visible outcome, kind: boundary, x: 91, y: 50 }
connections:
  - { from: entry, to: assistant, label: request }
  - { from: assistant, to: answer, label: response }
highlight: [assistant]
---
This is the first point where the learner should be able to explain the AI system as a whole before learning how to operate it.
