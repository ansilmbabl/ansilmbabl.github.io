---
title: Add a safe fast path
eyebrow: 08 · PERFORMANCE AND STATE
summary: Let the system reuse a safe result before sending every request through the full Prompt, RAG, and Agent path.
why: The system is safer and more capable, but every request still repeats expensive retrieval, model, and Tool work.
without: Identical authorized requests repeat the same work even when a fresh, safe result is already available.
role: The Guardrail-approved request checks the Cache before expensive Prompt, RAG, and Agent work. A safe hit returns through the response contract; a miss continues through the normal path shown in the diagram.
tradeoff: Caching can improve speed and cost, but a bad key or stale entry can return the wrong result to the wrong visitor.
question: What can safely be reused, which user context belongs in the cache key, and when must the result expire?
order: 8
replaces: [model, tools, schema]
legend: 'Cache is a fast path after authorization: a hit returns directly, while the shown miss path continues through Prompt, RAG, and Agent.'
nodes:
  - { id: input, label: Visitor question, detail: Product request, kind: boundary, x: 8, y: 32 }
  - { id: guard, label: Guardrail, detail: Policy boundary, kind: safety, x: 22, y: 32 }
  - { id: cache, label: Cache, detail: Hit → response · miss → continue, kind: performance, x: 36, y: 32 }
  - { id: prompt, label: Prompt, detail: Instructions + context slot, kind: generation, x: 50, y: 32 }
  - { id: rag, label: RAG, detail: Trusted knowledge context, kind: merged-container, x: 64, y: 32, merge: [retriever, reranker, sources, pipeline, embeddings, index, vector-store] }
  - { id: agent, label: Agent, detail: Model + Tool + output contract, kind: merged-container, x: 78, y: 32, merge: [model, tools, schema] }
  - { id: output, label: Response, detail: Allowed answer or action result, kind: boundary, x: 92, y: 32 }
connections:
  - { from: guard, to: cache, label: lookup }
  - { from: input, to: guard, label: question }
  - { from: cache, to: prompt, label: cache miss }
  - { from: prompt, to: rag, label: retrieval request }
  - { from: rag, to: agent, label: trusted context }
  - { from: agent, to: output, label: checked response }
highlight: [cache]
---
Caching is an optimization layer—not a substitute for correct access, fresh RAG context, or safe Agent behavior.
