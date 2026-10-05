---
title: Ship application changes safely
eyebrow: 19 · CI/CD AND DELIVERY
summary: Add a delivery pipeline that tests, assesses, packages, and deploys application changes consistently.
why: We now have one Application layer boundary. The next engineering problem is changing it safely and repeatably.
without: Releases depend on local machines, checks are skipped under pressure, and nobody can reliably explain which version is running.
role: Source control triggers tests and security checks, successful builds produce an artifact, and the pipeline promotes that artifact through development, staging, and production with rollback controls.
tradeoff: Automation takes setup and maintenance, but it makes releases faster, repeatable, and easier to roll back.
question: Which checks must pass before an application artifact can be promoted, and how will we roll it back?
order: 19
replaces: [security-assessment, cicd]
legend: A source change enters CI/CD, passes tests and assessments, and becomes a deployable Application layer release.
nodes:
  - { id: users, label: Users, detail: Product traffic, kind: boundary, x: 8, y: 50 }
  - { id: application, label: Application layer, detail: Complete product pipeline, kind: merged-container, x: 42, y: 50, merge: [frontend, api, system, data-layer, security, reliability, scalability, observability, feedback] }
  - { id: source-change, label: Source change, detail: Code + prompt + configuration update, kind: generation, x: 20, y: 80 }
  - { id: cicd, label: CI/CD pipeline, detail: Build + test + assess + deploy, kind: merged-container, x: 55, y: 80, merge: [source-control, build, test, security-scan, artifact, deploy] }
  - { id: output, label: Response, detail: Running application result, kind: boundary, x: 92, y: 50 }
connections:
  - { from: users, to: application, label: use product }
  - { from: application, to: output, label: product response }
  - { from: source-change, to: cicd, label: commit }
  - { from: cicd, to: application, label: promoted release }
highlight: [cicd]
---
CI/CD is the controlled path that turns an approved application change into a repeatable release.
