---
title: Tool-using operations agent
description: An agent that reasons over a request and takes controlled actions through business tools.
useCase: Workflow automation, operations support, analyst assistance, and internal productivity systems.
order: 2
nodes:
  - { id: user, component: experience, x: 5, y: 44, label: User request }
  - { id: api, component: api, x: 19, y: 44, label: API / auth }
  - { id: agent, component: agent, x: 40, y: 44 }
  - { id: model, component: model, x: 40, y: 19 }
  - { id: tools, component: tool-layer, x: 64, y: 25, label: Business tools }
  - { id: guardrail, component: guardrail, x: 64, y: 68 }
  - { id: answer, component: experience, x: 87, y: 44, label: Result / handoff }
connections:
  - { from: user, to: api, label: request }
  - { from: api, to: agent, label: task }
  - { from: agent, to: model, label: plan }
  - { from: model, to: agent, label: next step }
  - { from: agent, to: tools, label: tool call }
  - { from: tools, to: guardrail, label: action result }
  - { from: guardrail, to: answer, label: approved result }
---
The agent is useful because the path is not fully known in advance. The tool layer and guardrail are equally important: one gives the system reach, and the other limits what that reach can do.
