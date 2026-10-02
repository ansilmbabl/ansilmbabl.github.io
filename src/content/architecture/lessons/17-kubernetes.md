---
title: Run and manage the application on Kubernetes
eyebrow: 20 · KUBERNETES AND PLATFORM MANAGEMENT
summary: Give the application a managed runtime for replicas, networking, secrets, scaling, and controlled rollouts.
why: CI/CD can produce a deployable artifact, but a production application still needs a runtime that keeps workloads healthy and reachable.
without: Containers run without consistent placement, service discovery is fragile, scaling is manual, and a failed workload can remain unavailable.
role: Kubernetes schedules workloads, exposes services, manages configuration and secrets, and supports health checks, replicas, autoscaling, and rollouts.
tradeoff: Kubernetes provides powerful control, but it introduces platform complexity that must be operated deliberately.
question: Which runtime responsibilities should the platform own, and how will we know that a rollout is healthy?
order: 20
legend: Kubernetes is the managed runtime where the application artifact becomes a resilient service.
nodes:
  - { id: users, label: Users, detail: Product traffic, kind: boundary, x: 8, y: 50 }
  - { id: application, label: Application layer, detail: Complete product pipeline, kind: merged-container, x: 37, y: 50, merge: [frontend, api, system, data-layer, security, reliability, scalability, observability, feedback] }
  - { id: cicd, label: CI/CD pipeline, detail: Tested application artifact, kind: merged-container, x: 58, y: 20, merge: [source-control, build, test, security-scan, artifact, deploy] }
  - { id: kubernetes, label: Kubernetes platform, detail: Cluster + services + replicas + rollouts, kind: merged-container, x: 66, y: 78, merge: [cluster, namespace, service, ingress, autoscaling, secrets] }
  - { id: output, label: Response, detail: Managed application result, kind: boundary, x: 92, y: 50 }
connections:
  - { from: users, to: application, label: use product }
  - { from: application, to: output, label: product response }
  - { from: application, to: kubernetes, label: managed workload }
  - { from: cicd, to: kubernetes, label: rollout artifact }
highlight: [kubernetes]
---
The learning journey ends with a clear boundary between application ownership and platform ownership.
