---
title: Measure whether it works
eyebrow: 07 · EVALUATION
summary: Add representative tests and quality signals before calling the system reliable.
why: A system can look impressive in one demo and still fail common user tasks. Evaluation turns quality into something we can compare over time.
without: Prompt changes, model upgrades, and retrieval changes can silently make the product worse.
role: Evaluation uses test cases, traces, rubrics, human feedback, and regression checks to measure behavior.
tradeoff: Good evaluation takes maintenance and judgment, but it reduces guesswork.
question: What does a successful answer mean for this user and this business process?
order: 7
nodes:
  - { id: input, label: Input, detail: Test questions + traffic, kind: boundary, x: 9, y: 50 }
  - { id: system, label: AI system, detail: Retrieval + tools + model, kind: core, x: 43, y: 50 }
  - { id: evaluation, label: Evaluation, detail: Quality signals, kind: quality, x: 67, y: 22 }
  - { id: output, label: Output, detail: User result, kind: boundary, x: 90, y: 50 }
connections:
  - { from: input, to: system, label: cases }
  - { from: system, to: output, label: result }
  - { from: system, to: evaluation, label: traces + outputs }
  - { from: evaluation, to: system, label: feedback loop }
highlight: [evaluation]
---
Evaluation is how the system learns whether its architecture is helping real users.
