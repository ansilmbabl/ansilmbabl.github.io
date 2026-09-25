---
title: Write down what “good” means
eyebrow: 10 · EVALUATION
summary: Test the chatbot with realistic customer questions before trusting its answers.
why: One impressive demo does not prove that the system works for ordinary users. Evaluation gives us examples and signals we can compare after every change.
without: A prompt edit, Model upgrade, or retrieval change could make the product worse without anyone noticing.
role: Evaluation runs representative questions, checks the answers against a rubric, and combines automated checks with human feedback where needed.
tradeoff: Good tests take time to create and maintain, but they replace guesswork with evidence.
question: What does a successful answer look like for this user and this business process?
order: 10
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
Evaluation is how the team learns whether the system is helping real users.
