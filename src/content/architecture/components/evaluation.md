---
title: Evaluation
layer: Evaluation and operations
category: quality
description: Turns quality into observable signals using representative tests and feedback.
solves: Uncertainty about whether a change improved the system.
risks: Unrepresentative datasets, weak rubrics, or metrics disconnected from users.
tradeoff: Reliable measurement requires ongoing test and review investment.
questions: [What does a good answer mean for this user?, Which failures deserve a regression test?]
inputs: [traces, outputs, feedback]
outputs: [quality-signal]
recommendedConnections: [model, retriever, agent, guardrail]
warningConnections: []
order: 7
visibility: core
---
Evaluation closes the loop between an architecture decision and evidence that it works.
