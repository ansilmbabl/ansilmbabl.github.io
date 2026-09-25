---
title: Decide where information lives
eyebrow: 13 · DATA AND STORAGE
summary: Give the service places to keep documents, application state, and operational records.
why: An AI feature is rarely only a model call. It needs durable storage for users, configuration, documents, audit records, and the searchable index.
without: Important state disappears when a process restarts, documents have nowhere reliable to live, and operational history cannot be recovered.
role: PostgreSQL can hold application data, object storage can hold source files, and a vector store can hold searchable representations.
tradeoff: Durable storage improves reliability, but introduces schemas, migrations, backups, retention rules, and access controls.
question: What is the source of truth for each kind of data, and how long should we keep it?
order: 13
nodes:
  - { id: system, label: AI service, detail: Reads and writes data, kind: core, x: 16, y: 50 }
  - { id: postgres, label: PostgreSQL, detail: Users + application state, kind: data, x: 43, y: 20 }
  - { id: object, label: Object storage, detail: Source documents, kind: data, x: 43, y: 50 }
  - { id: vector, label: Vector store, detail: Searchable representations, kind: knowledge, x: 43, y: 80 }
  - { id: backup, label: Backup + retention, detail: Recovery and lifecycle, kind: operations, x: 82, y: 50 }
connections:
  - { from: system, to: postgres, label: state }
  - { from: system, to: object, label: documents }
  - { from: system, to: vector, label: retrieval index }
  - { from: postgres, to: backup, label: recover }
  - { from: object, to: backup, label: retain }
highlight: [postgres, object, vector]
---
Choosing storage is part of the product design: it determines what can be recovered, searched, changed, or deleted.
