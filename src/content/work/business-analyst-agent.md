---
title: "MCP-enabled Business Analyst Agent"
description: "A sanitized case study about turning a financial-services MIS into a tool other applications could use directly."
category: "Agent systems"
organization: "Grid Dynamics · supporting Visa"
order: 1
confidential: true
featured: true
technologies: [Python, LangGraph, MCP, PostgreSQL, Kubernetes]
---

## The problem

Management information workflows depended on a large amount of manual analysis. The opportunity was to let business users ask for useful outcomes in natural language while keeping the underlying data and actions controlled.

## My contribution

I worked directly with business stakeholders and internal users to shape a Business Analyst agent inside an internal financial-services application. The system brought together five agents and fourteen tools, then exposed the complete application through MCP so other applications could consume its capabilities without another integration layer.

## Technical approach

The system used Python, LangGraph, model integrations, PostgreSQL, AWS S3, REST and gRPC services, FastAPI, Pydantic, Docker, CI/CD, and on-premise Kubernetes on Red Hat clusters. Retrieval included ingestion, chunking, embeddings, hybrid search, reranking, metadata filtering, query rewriting, pgvector, and access-controlled retrieval.

## Reliability and iteration

We added hallucination checks, DeepEval, LangSmith tracing, latency and cost tracking, prompt comparisons, retries, fallbacks, dashboards, and alerts. Feedback from users and the business team shaped the next iterations.

## Outcome

The reporting workflow moved from roughly two months of manual effort to two weeks, with an internal application supporting approximately 500 users and 50 GB of data.

Some implementation details are intentionally omitted because this was confidential client work.
