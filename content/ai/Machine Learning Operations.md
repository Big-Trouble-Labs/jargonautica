---
title: "Machine Learning Operations"
aliases:
  - "MLOps"
  - "LLMOps"
tags:
  - glossary/ai
  - ai/practice
section: "Testing, Safeguarding and Running Models in Practice"
summary: "The unglamorous engineering work of running AI systems in production reliably, as opposed to building a model that works once in a demonstration."
---

# Machine Learning Operations

## Plain View

The unglamorous engineering work of running AI systems in production reliably, as opposed to building a model that works once in a demonstration. Version control, monitoring, testing, deployment, cost management and rollback. Most AI projects that fail do so here rather than at the modelling stage.

## Technical View

Adds concerns to standard software practice that arise from behaviour being learned rather than specified: data and model versioning, reproducibility, and monitoring for drift, where input distributions shift away from training conditions and performance degrades silently. For language model applications specifically, sometimes called LLMOps, the emphasis shifts towards prompt versioning, evaluation pipelines, output monitoring, cost and latency tracking, and managing changes to underlying models supplied by third parties.

## Related

- [[Benchmarks and Evals]]: evaluation pipelines as a core part of it
- [[Guardrails]]: run-time checks it maintains
- [[Inference]]: the cost and latency it manages
- [[Training]]: versioning and reproducibility of runs
- [[Model Card]]: documentation it keeps current

---

Part of [[AI Terminology Index]], section: Testing, Safeguarding and Running Models in Practice.
