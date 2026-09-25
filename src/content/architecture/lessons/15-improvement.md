---
title: Learn from real use
eyebrow: 18 · CONTINUOUS IMPROVEMENT
summary: Close the loop between users, evaluation, engineering changes, and the next release.
why: A production AI system is never finished. Real usage reveals new questions, failure cases, cost pressure, and opportunities to make the experience more useful.
without: The system slowly falls behind user needs, while changes are driven by anecdotes instead of evidence.
role: Feedback becomes new evaluation cases, experiments compare possible improvements, and controlled releases let the team learn safely.
tradeoff: Continuous improvement requires time and prioritization, but it keeps the product aligned with the people who use it.
question: What evidence would convince us that the next version is genuinely better?
order: 18
nodes:
  - { id: users, label: Users, detail: Real questions and feedback, kind: boundary, x: 10, y: 50 }
  - { id: feedback, label: Feedback, detail: Problems worth learning from, kind: quality, x: 31, y: 20 }
  - { id: evaluation, label: Evaluation set, detail: Repeatable test cases, kind: quality, x: 52, y: 50 }
  - { id: experiment, label: Experiment, detail: Compare an improvement, kind: generation, x: 73, y: 20 }
  - { id: system, label: AI service, detail: Controlled release, kind: core, x: 73, y: 75 }
  - { id: release, label: Next release, detail: Better behavior, kind: runtime, x: 91, y: 50 }
connections:
  - { from: users, to: feedback, label: report }
  - { from: feedback, to: evaluation, label: add case }
  - { from: evaluation, to: experiment, label: measure }
  - { from: experiment, to: system, label: test change }
  - { from: system, to: release, label: ship safely }
highlight: [feedback, evaluation, experiment]
---
The project becomes a learning loop: observe real use, turn it into evidence, improve deliberately, and measure again.
