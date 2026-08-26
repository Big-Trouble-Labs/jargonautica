---
title: "Data Pipeline"
tags:
  - glossary/ai
  - ai/production
section: "Running It in Production"
summary: "The plumbing that moves data from where it is created to where it is used, transforming it on the way."
---

# Data Pipeline

## Plain View

The plumbing that moves data from where it is created to where it is used, transforming it on the way. Unglamorous, and the most common single cause of a machine learning system quietly producing worse results: a source changed, a job failed silently, and nobody noticed for a month.

## Technical View

Orchestrated as a directed graph of tasks with dependency management, retry semantics and backfill capability. Requirements include idempotent tasks, schema validation at boundaries, data quality assertions that fail the run, freshness monitoring and alerting on absence as well as on error. Distinguish batch from streaming, and note that lambda-style dual pipelines are a recurring source of training-serving skew.

## Related

- [[Data Quality]]: checks enforced along the way
- [[Data Lineage]]: what is tracked across it
- [[Drift]]: silent failures show up as degradation
- [[Feature Store]]: where computed features land
- [[Schema and Metadata]]: validation at boundaries

---

Part of [[AI Terminology Index]], section: Running It in Production.
