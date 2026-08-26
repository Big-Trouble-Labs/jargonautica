---
title: "Self-consistency"
tags:
  - glossary/ai
  - ai/runtime
section: "Controlling and Extending Behaviour at Run Time"
summary: "Asking the same question several times and taking the most common answer."
---

# Self-consistency

## Plain View

Asking the same question several times and taking the most common answer. Because the model samples differently each time, mistakes tend to be scattered while correct answers converge. It costs several times as much and reliably improves accuracy on reasoning problems.

## Technical View

Samples multiple chains of thought at non-zero temperature and marginalises over reasoning paths by majority vote on the final answer. Gains are largest where an answer can be extracted and compared exactly, such as arithmetic or multiple choice, and awkward for open-ended text where votes must be clustered semantically. It also provides a usable confidence signal: agreement rate across samples correlates with correctness better than the model's stated confidence.

## Related

- [[Chain of Thought]]: what is sampled repeatedly
- [[Temperature and Sampling]]: why the samples differ
- [[Model Confidence and Calibration]]: agreement as a confidence signal
- [[Monte Carlo Methods]]: sampling and aggregating
- [[Cost Per Task]]: several times the cost

---

Part of [[AI Terminology Index]], section: Controlling and Extending Behaviour at Run Time.
