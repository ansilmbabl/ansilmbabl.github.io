---
title: Guardrail
layer: Safety and security
category: safety
description: Constrains inputs, tool calls, outputs, and access to keep behavior within policy.
solves: Unsafe actions, data leakage, and unsupported claims.
risks: Gaps, false positives, or checks placed too late.
tradeoff: Safety checks add latency and can reduce apparent flexibility.
questions: [What must never happen?, Which checks need hard enforcement?]
inputs: [request, tool-request, response]
outputs: [allowed-request, allowed-response]
recommendedConnections: [agent, tool-layer, model, evaluation]
warningConnections: []
order: 6
visibility: core
---
Guardrails are policy boundaries, not a replacement for authentication or authorization.
