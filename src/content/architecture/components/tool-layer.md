---
title: Tool layer
layer: Tools and actions
category: action
description: Gives the system controlled ways to read from or act on external systems.
solves: Work that cannot be completed from text generation alone.
risks: Bad parameters, permission mistakes, retries, or irreversible actions.
tradeoff: More usefulness also means a larger security and testing surface.
questions: [Which actions are safe to automate?, What can be retried or rolled back?]
inputs: [tool-request]
outputs: [tool-result]
recommendedConnections: [agent, guardrail]
warningConnections: [model]
order: 4
visibility: core
---
Tools turn an answer into an action, so their contracts and permissions matter.
