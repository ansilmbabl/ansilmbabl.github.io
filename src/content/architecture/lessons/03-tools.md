---
title: Give the system a controlled way to act
eyebrow: 06 · TOOLS AND ACTIONS
summary: Collapse the knowledge path into RAG, then connect a controlled Tool to the merged Model route.
why: The assistant can now ground an answer in approved knowledge. The next step is to let the Model complete a useful action without exposing an uncontrolled path into another system.
without: The assistant can explain what should happen, but it cannot safely read from or write to a product system on the visitor’s behalf.
role: RAG supplies trusted context to the merged Model tile. When the Model decides that an action is needed, it calls a narrow Tool, receives the result, and then returns a structured response.
tradeoff: Tools make the assistant useful beyond question answering, but every tool needs an explicit contract, authorization, timeout, retry policy, and audit trail.
question: Which action is safe to automate first, and what must the Tool refuse even when the Model asks for it?
order: 6
replaces: [retriever, reranker, sources, pipeline, embeddings, index, vector-store]
removesConnections:
  - { from: model, to: schema }
  - { from: schema, to: output }
legend: RAG supplies trusted context; the merged Model can call the Tool and use its result before producing the response.
nodes:
  - { id: input, label: Visitor question, detail: Product request, kind: boundary, x: 7, y: 32 }
  - { id: prompt, label: Prompt, detail: Instructions + context slot, kind: generation, x: 21, y: 32 }
  - { id: rag, label: RAG, detail: Trusted knowledge context, kind: merged-container, x: 37, y: 32, merge: [retriever, reranker, sources, pipeline, embeddings, index, vector-store] }
  - { id: model, label: Model, detail: Orchestration + model routing, kind: merged-container, x: 55, y: 32, merge: [orchestrator, fast-model, reasoning-model] }
  - { id: tools, label: Tool, detail: Controlled product action, kind: action, x: 55, y: 72 }
  - { id: schema, label: Output schema, detail: Validated response shape, kind: quality, x: 73, y: 32 }
  - { id: output, label: Response, detail: Answer or confirmed action, kind: boundary, x: 93, y: 32 }
connections:
  - { from: input, to: prompt, label: question }
  - { from: prompt, to: rag, label: retrieval request }
  - { from: rag, to: model, label: trusted context }
  - { from: model, to: tools, label: tool call }
  - { from: tools, to: model, label: tool result }
  - { from: model, to: schema, label: structured result }
  - { from: schema, to: output, label: response }
highlight: [tools]
---
The system now has two clear capabilities: RAG answers from approved knowledge, while the Tool route performs a carefully bounded action. Both meet at the merged Model route.
