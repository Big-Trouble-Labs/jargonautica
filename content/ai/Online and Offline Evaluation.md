---
title: "Online and Offline Evaluation"
tags:
  - glossary/ai
  - ai/measurement
section: "Measuring Performance"
summary: "Testing against a fixed dataset versus testing with real users."
---

# Online and Offline Evaluation

## Plain View

Testing against a fixed dataset versus testing with real users. They frequently disagree, and when they do the real users are right. Offline evaluation is fast, cheap and repeatable; online evaluation is slow, expensive and actually measures what you care about. Serious teams use both and treat the offline set as a proxy that needs periodic revalidation.

## Technical View

Offline evaluation on held-out data suffers from distribution shift and from measuring proxies such as relevance rather than outcomes such as task completion. Online evaluation through controlled experiments measures outcomes but is confounded by novelty effects, network effects and seasonality, and cannot cover rare cases. The productive practice is to correlate the two explicitly and recalibrate the offline set when they diverge.

## Related

- [[Controlled Experiment]]: the online method
- [[Golden Dataset]]: the offline instrument
- [[Benchmarks and Evals]]: the wider practice
- [[Drift]]: why offline sets need revalidating

---

Part of [[AI Terminology Index]], section: Measuring Performance.
