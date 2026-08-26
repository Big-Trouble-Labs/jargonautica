---
title: "Data Lineage"
tags:
  - glossary/ai
  - ai/data
section: "Data"
summary: "Knowing where a number came from and what happened to it on the way."
---

# Data Lineage

## Plain View

Knowing where a number came from and what happened to it on the way. When a model produces something surprising, the first question is which data drove it, and without lineage that question can take days to answer, if it can be answered at all.

## Technical View

Tracks the flow of data across sources, transformations and consumers, at table, column or record level, captured either by parsing transformation code or by instrumenting the pipeline. It supports impact analysis when an upstream source changes, root cause analysis of anomalies, and regulatory obligations to explain how a decision was reached. For models it extends to which dataset version trained which model version.

## Related

- [[Data Quality]]: tracing the cause of a quality problem
- [[Versioning]]: the model-side equivalent
- [[Audit Logging]]: the record that supports explanation
- [[Data Pipeline]]: what lineage is tracked across
- [[Data Subject Rights]]: finding every copy of a person's data

---

Part of [[AI Terminology Index]], section: Data.
