---
title: "Error Analysis"
tags:
  - glossary/ai
  - ai/measurement
section: "Measuring Performance"
summary: "Actually reading the failures rather than looking at the score."
---

# Error Analysis

## Plain View

Actually reading the failures rather than looking at the score. Take fifty wrong answers, sort them into groups, and you will learn more about what to fix than from any aggregate number. It is the highest-value and most frequently skipped activity in applied machine learning.

## Technical View

Sample failures stratified across input types, categorise by cause, and quantify each category's share to prioritise work by expected gain. Distinguish model errors from data errors, label errors and specification ambiguity, since a meaningful fraction of apparent failures are cases where the reference answer is wrong or the task is underspecified. In pipelines, attribute failures to stages, since retrieval and parsing errors are commonly misattributed to the model.

## Related

- [[Failure Taxonomy]]: what it produces
- [[Benchmarks and Evals]]: what it goes beyond
- [[Ablation Study]]: attributing failures to components
- [[Golden Dataset]]: failures become new evaluation cases
- [[Observability and Tracing]]: where the failures are found

---

Part of [[AI Terminology Index]], section: Measuring Performance.
