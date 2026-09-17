---
title: Observability
layer: Evaluation and operations
category: operations
description: Captures traces, latency, errors, costs, and decisions across a run.
solves: The blind spot between a user complaint and its root cause.
risks: Missing spans, noisy logs, or sensitive data in telemetry.
tradeoff: More visibility costs storage and needs careful redaction.
questions: [Can we trace one answer end to end?, What should trigger an alert?]
inputs: [events, traces, metrics]
outputs: [diagnostic-signal]
recommendedConnections: [agent, tool-layer, model, evaluation]
warningConnections: []
order: 8
visibility: production
---
Observability explains what happened after the system leaves the diagram.
