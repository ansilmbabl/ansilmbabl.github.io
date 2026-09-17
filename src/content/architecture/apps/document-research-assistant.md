---
title: Document research assistant
description: A multi-stage application that ingests documents, retrieves evidence, and produces a reviewable synthesis.
useCase: Research briefs, due diligence, technical literature, and document-heavy analysis.
order: 3
nodes:
  - { id: files, component: storage, x: 5, y: 26, label: Documents }
  - { id: ingest, component: pipeline, x: 22, y: 26, label: Ingestion pipeline }
  - { id: vectordb, component: vector-db, x: 40, y: 26 }
  - { id: user, component: experience, x: 5, y: 72, label: Researcher }
  - { id: retriever, component: retriever, x: 40, y: 72 }
  - { id: model, component: model, x: 62, y: 50 }
  - { id: evaluation, component: evaluation, x: 62, y: 82 }
  - { id: answer, component: experience, x: 87, y: 50, label: Brief + citations }
connections:
  - { from: files, to: ingest, label: files }
  - { from: ingest, to: vectordb, label: chunks + embeddings }
  - { from: user, to: retriever, label: question }
  - { from: retriever, to: vectordb, label: search }
  - { from: retriever, to: model, label: evidence }
  - { from: model, to: evaluation, label: draft }
  - { from: evaluation, to: answer, label: reviewed synthesis }
---
This pattern makes the difference between an ingestion pipeline and a query-time retrieval path visible. It also keeps evaluation close to the output rather than treating it as an afterthought.
