---
title: Start with a useful interaction
eyebrow: 01 · THE SMALLEST SYSTEM
summary: Begin with a request, a system boundary, and a response.
why: Before adding technology, define what the user is trying to accomplish and what the system promises to return.
without: There is no clear entry point, contract, or way to tell whether the system helped.
role: "The Agent is a black-box starting point here: it represents the capability we will progressively open up and improve."
tradeoff: A simple black box is easy to understand, but it hides important decisions that production systems must eventually make visible.
question: What should this system do when it cannot confidently answer?
order: 1
nodes:
  - { id: input, label: Input, detail: User request, kind: boundary, x: 12, y: 50 }
  - { id: agent, label: Agent, detail: System capability, kind: core, x: 50, y: 50 }
  - { id: output, label: Output, detail: Useful response, kind: boundary, x: 88, y: 50 }
connections:
  - { from: input, to: agent, label: request }
  - { from: agent, to: output, label: response }
highlight: [agent]
---
This is intentionally incomplete. It gives us a stable story to build on.
