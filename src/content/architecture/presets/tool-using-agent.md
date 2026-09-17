---
title: Tool-using agent
description: Let a system plan and take controlled actions.
components: [model, agent, tool-layer, guardrail]
connections:
  - { from: agent, to: model, kind: recommended }
  - { from: agent, to: tool-layer, kind: recommended }
  - { from: guardrail, to: tool-layer, kind: recommended }
lesson: []
order: 2
---
Use this pattern to explore the difference between generating an answer and executing work.
