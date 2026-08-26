---
title: "Benchmark Contamination"
tags:
  - glossary/ai
  - ai/measurement
section: "Measuring Performance"
summary: "When the test questions are in the training data."
---

# Benchmark Contamination

## Plain View

When the test questions are in the training data. The model then scores brilliantly by recall rather than ability, and the number tells you nothing. Because training corpora are scraped from the web and benchmarks are published on the web, this happens by default rather than by accident.

## Technical View

Detection methods include n-gram overlap against the corpus where accessible, comparing performance on items published before and after the training cutoff, and testing sensitivity to perturbed or reordered variants of the same question. Mitigations include held-out private test sets, continuously refreshed benchmarks, and canary strings that publishers embed so contamination can be checked. Reported scores on old public benchmarks should be treated as upper bounds.

## Related

- [[Benchmarks and Evals]]: what it invalidates
- [[Data Leakage]]: the same problem in general form
- [[Data Curation and Deduplication]]: decontamination as a pipeline step
- [[Standard Benchmarks]]: the public tests most affected
- [[Golden Dataset]]: why private sets matter

---

Part of [[AI Terminology Index]], section: Measuring Performance.
