---
title: "Pass@k"
tags:
  - glossary/ai
  - ai/measurement
section: "Measuring Performance"
summary: "The chance that at least one of k attempts is correct."
---

# Pass@k

## Plain View

The chance that at least one of k attempts is correct. It is the standard way of scoring code generation, because a model that gets it right one time in ten is genuinely useful when you can run the tests and keep the one that works, and useless if you can only take one shot.

## Technical View

Estimated unbiasedly from n samples with c correct rather than by literally generating k. Pass@1 measures single-shot reliability; higher k measures whether a correct solution is within reach given a verifier. The gap between them quantifies how much value a selection mechanism adds, which is directly relevant to agentic systems that generate, test and retry. It requires a reliable verifier, so weak test suites inflate the measure.

## Related

- [[Code Model]]: what it measures
- [[Agentic Coding]]: generate, test and retry as the practical loop
- [[Benchmarks and Evals]]: the wider practice
- [[Reinforcement Learning with Verifiable Rewards]]: verifiers as the scoring mechanism

---

Part of [[AI Terminology Index]], section: Measuring Performance.
