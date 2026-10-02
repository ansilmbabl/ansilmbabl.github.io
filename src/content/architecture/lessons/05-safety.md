---
title: Put safety around the acting system
eyebrow: 07 · SAFETY AND SECURITY
summary: Merge the Model and Tool into an Agent, then add a Guardrail that checks requests, context, and actions around it.
why: The assistant can now retrieve knowledge and call a product Tool. Before that capability becomes an Agent, we need a deliberate safety boundary around requests, context, and actions.
without: The Agent might reveal private information, call a Tool for the wrong user, or present an unsafe action as a normal answer.
role: The Guardrail receives the request and assembled context, applies policy before the Agent acts, and provides the authorization decision that controls the Agent’s Tool use and response path.
tradeoff: Safety checks add a little latency and may sometimes block a valid request, but they make unsafe behavior visible and intentional.
question: What must never happen—for example, changing production from a chat—and which rule must be enforced before the Agent acts?
order: 7
replaces: [model, tools, schema]
legend: The Agent is the main execution path; the Guardrail is a cross-cutting policy layer that authorizes what the Agent may do.
nodes:
  - { id: input, label: Visitor question, detail: Product request, kind: boundary, x: 8, y: 32 }
  - { id: prompt, label: Prompt, detail: Instructions + context slot, kind: generation, x: 24, y: 32 }
  - { id: rag, label: RAG, detail: Trusted knowledge context, kind: merged-container, x: 40, y: 32, merge: [retriever, reranker, sources, pipeline, embeddings, index, vector-store] }
  - { id: agent, label: Agent, detail: Model + Tool + output contract, kind: merged-container, x: 72, y: 32, merge: [model, tools, schema] }
  - { id: guard, label: Guardrail, detail: Request + context + action policy, kind: safety, x: 56, y: 78 }
  - { id: output, label: Response, detail: Allowed answer or action result, kind: boundary, x: 90, y: 32 }
connections:
  - { from: input, to: prompt, label: question }
  - { from: prompt, to: rag, label: retrieval request }
  - { from: rag, to: agent, label: trusted context }
  - { from: input, to: guard, label: request policy }
  - { from: rag, to: guard, label: context policy }
  - { from: guard, to: agent, label: allowed action }
  - { from: agent, to: output, label: checked response }
highlight: [guard]
---
Guardrails reduce risk; they do not replace identity, authorization, network controls, or careful Tool design inside the Agent.
