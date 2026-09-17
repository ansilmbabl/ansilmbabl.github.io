---
title: Agent
layer: Orchestration
category: orchestration
description: Chooses steps and adapts execution when the path is not fully known.
solves: Multi-step work with tools, decisions, and changing context.
risks: Loops, hidden state, tool misuse, and unpredictable cost.
tradeoff: Flexibility comes with less determinism and harder evaluation.
questions: [Does this need an agent or a deterministic workflow?, Where should the agent be allowed to stop?]
inputs: [request, context]
outputs: [plan, tool-request]
recommendedConnections: [model, retriever, tool-layer, guardrail]
warningConnections: [private-data]
order: 5
visibility: core
---
An agent is a control loop. It should earn its complexity by solving genuinely variable work.
