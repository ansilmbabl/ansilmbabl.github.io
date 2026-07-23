---
title: "RAG retrieval map"
description: "A visual experiment for seeing how a question moves through rewriting, retrieval, filtering, reranking, and answer generation."
kind: "Interactive visualisation"
status: "live"
demoPath: "/playground/rag-retrieval-map/"
demo: "rag-explorer"
order: 2
featured: true
---

This browser-safe explainer follows a small public fixture from ingestion to answer generation. It is intentionally deterministic: no private documents, API keys, or live model calls are involved.

## What to look for

- **Indexing:** documents are parsed, split into meaningful chunks, embedded, and stored with metadata such as source, freshness, and access scope.
- **Retrieval:** a rewritten question is permission-filtered, searched with both semantic and keyword signals, fused, and reranked.
- **Grounding:** only the retained context is passed to generation, with a source pointer and an abstention path when evidence is weak.
- **Evaluation:** retrieval quality and answer quality are measured separately. Recall, context precision, faithfulness, relevancy, latency, and cost all matter.

The interactive values are illustrative fixtures designed to make the architecture legible—not production telemetry.
