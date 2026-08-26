---
title: "LLM as a Judge"
aliases:
  - "Model as a Judge"
  - "AI Judge"
tags:
  - glossary/ai
  - ai/measurement
section: "Measuring Performance"
summary: "Using one language model to score the output of another."
---

# LLM as a Judge

## Plain View

Using one language model to score the output of another. For open-ended work there is no single correct answer to check against, and paying people to read every result does not scale, so the practical compromise is to have a capable model grade against a written rubric. It works better than most people expect, and it has consistent biases you have to correct for.

## Technical View

Known biases include position bias, favouring whichever answer is shown first, verbosity bias, favouring longer responses, and self-preference, favouring output from the same model family. Mitigations include randomising order and averaging, using pairwise comparison rather than absolute scores, providing detailed rubrics with worked examples, and calibrating against a human-labelled subset. Agreement with human judgement should be measured rather than assumed, and the judge treated as an instrument that requires its own validation.

## Related

- [[Benchmarks and Evals]]: the wider practice this belongs to
- [[Golden Dataset]]: what the judge is usually run against
- [[Sycophancy]]: a bias the judge shares with the model it grades
- [[Machine Learning Operations]]: where automated grading runs in production
- [[Reasoning Models and Test-Time Compute]]: often used as the judge for hard tasks

---

Part of [[AI Terminology Index]], section: Measuring Performance.
