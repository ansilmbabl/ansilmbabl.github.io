---
title: Ship application changes safely
eyebrow: 19 · CI/CD AND DELIVERY
summary: Add a delivery pipeline that tests, assesses, packages, and deploys application changes consistently.
why: A complete application still needs a repeatable path from source change to a safe release. CI/CD turns quality and security checks into an engineering system instead of a manual checklist.
without: Releases depend on local machines, checks are skipped under pressure, and nobody can reliably explain which version is running.
role: Source control triggers tests and security checks, successful builds produce an artifact, and the delivery pipeline promotes that artifact through controlled environments.
tradeoff: Automation takes setup and maintenance, but it makes releases faster, repeatable, and easier to roll back.
question: Which checks must pass before an application artifact can be promoted, and how will we roll it back?
order: 19
replaces: [security-assessment, cicd]
legend: CI/CD connects source changes to tested, assessed, and deployable application artifacts.
nodes:
  - { id: users, label: Users, detail: Product traffic, kind: boundary, x: 8, y: 50 }
  - { id: application, label: Application layer, detail: Complete product pipeline, kind: merged-container, x: 42, y: 50, merge: [frontend, api, system, data-layer, security, reliability, scalability, observability, feedback] }
  - { id: cicd, label: CI/CD pipeline, detail: Build + test + assess + deploy, kind: merged-container, x: 68, y: 80, merge: [source-control, build, test, security-scan, artifact, deploy] }
  - { id: output, label: Response, detail: Running application result, kind: boundary, x: 92, y: 50 }
connections:
  - { from: users, to: application, label: use product }
  - { from: application, to: output, label: product response }
  - { from: application, to: cicd, label: release change }
highlight: [cicd]
---
CI/CD is the controlled path that turns an approved application change into a repeatable release.
