---
title: "Data Quality"
tags:
  - glossary/ai
  - ai/data
section: "Data"
summary: "Whether your data is fit for the use you have in mind."
---

# Data Quality

## Plain View

Whether your data is fit for the use you have in mind. It breaks down into a few practical questions: is it complete, is it accurate, is it consistent, is it current, and is it actually about what you think it is about. Most AI projects that fail on data fail on the last one.

## Technical View

Standard dimensions are completeness, accuracy, consistency, timeliness, validity and uniqueness, each measurable as a rule-based check that can be automated in a pipeline. Tools express these as assertions that fail a build. The dimension that resists automation is fitness for purpose, which requires knowing how the data was generated and what it omits, and this is where documentation matters more than tooling.

## Related

- [[Data Curation and Deduplication]]: quality work applied to a training corpus
- [[Data Lineage]]: knowing where a value came from
- [[Schema and Metadata]]: the structure quality is checked against
- [[Data Pipeline]]: where checks are enforced
- [[Missing Data and Imputation]]: completeness in practice

---

Part of [[AI Terminology Index]], section: Data.
