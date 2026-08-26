---
title: "Observability and Tracing"
aliases:
  - "Tracing"
  - "Observability"
tags:
  - glossary/ai
  - ai/production
section: "Running It in Production"
summary: "Being able to see inside a running system well enough to answer questions you did not anticipate."
---

# Observability and Tracing

## Plain View

Being able to see inside a running system well enough to answer questions you did not anticipate. For a multi-step AI system this matters more than usual, because a bad answer could come from retrieval, from a tool, from the prompt or from the model, and without a trace you are guessing.

## Technical View

A trace records the full request path as nested spans covering retrieval, model calls, tool invocations and post-processing, each with timing, token counts, cost and inputs and outputs. Correlate by request identifier across services. Beyond the three classical pillars of logs, metrics and traces, AI systems need quality signals attached to traces so that regressions can be sliced by prompt version, model version, tenant and input type.

## Related

- [[Trajectory]]: the agent-level record
- [[Audit Logging]]: the durable, compliance-facing record
- [[Error Analysis]]: where failures are found
- [[Cost Per Task]]: attribution of spend by stage
- [[Machine Learning Operations]]: the practice it belongs to

---

Part of [[AI Terminology Index]], section: Running It in Production.
