---
title: Give the team a way to operate it
eyebrow: 17 · PRODUCTION OPERATIONS
summary: Turn system behavior into dashboards, alerts, and runbooks that people can use.
why: Production users do not report architecture diagrams. They report slow answers, missing data, and failed actions. The team needs signals that connect those symptoms to causes.
without: Incidents become guesswork, alerts arrive too late, and every failure requires rediscovering how the system works.
role: Dashboards show health, alerts call attention to meaningful changes, and runbooks explain the first safe actions during an incident.
tradeoff: Operational discipline takes time, but it reduces recovery time and makes support less dependent on one person.
question: Which signal should wake someone up, and what should they do first when it happens?
order: 17
nodes:
  - { id: request, label: User request, detail: Real traffic, kind: boundary, x: 10, y: 50 }
  - { id: system, label: AI service, detail: Runtime behavior, kind: core, x: 38, y: 50 }
  - { id: dashboard, label: Dashboard, detail: Health and trends, kind: operations, x: 63, y: 20 }
  - { id: alerts, label: Alerts, detail: Important changes, kind: operations, x: 63, y: 50 }
  - { id: runbook, label: Runbook, detail: Safe response steps, kind: quality, x: 63, y: 80 }
  - { id: team, label: Engineering team, detail: Learns and responds, kind: boundary, x: 89, y: 50 }
connections:
  - { from: request, to: system, label: traffic }
  - { from: system, to: dashboard, label: metrics }
  - { from: system, to: alerts, label: thresholds }
  - { from: alerts, to: team, label: notify }
  - { from: runbook, to: team, label: guide }
highlight: [dashboard, alerts, runbook]
---
An AI system is production-ready only when a team can understand and support it after the original author is unavailable.
