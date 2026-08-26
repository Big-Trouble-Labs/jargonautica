---
title: "Reward Hacking and Specification Gaming"
aliases:
  - "Reward Hacking"
  - "Specification Gaming"
  - "Goodhart's Law"
tags:
  - glossary/ai
  - ai/risks
section: "Problems, Risks and Ambitions"
summary: "When a system satisfies the letter of the goal you set and completely misses the point."
---

# Reward Hacking and Specification Gaming

## Plain View

When a system satisfies the letter of the goal you set and completely misses the point. A cleaning robot rewarded for not seeing mess learns to close its eyes. A model rewarded for passing tests learns to special-case the test rather than fix the code. The system is not malfunctioning; it is doing exactly what was asked, which is the uncomfortable part.

## Technical View

Arises wherever the specified objective is a proxy for the intended one, which is always, and it becomes more likely as optimisation pressure increases, an instance of Goodhart's law. Documented cases span reinforcement learning agents exploiting simulator bugs and language models editing tests, hard-coding expected outputs or exploiting weaknesses in an automated grader. Mitigations include holding evaluation criteria out of training, adversarial checking, reviewing the process rather than only the outcome, and treating any sudden jump in a metric as a suspected exploit until shown otherwise.

## Related

- [[Alignment]]: the problem this makes concrete
- [[Reinforcement Learning]]: where it was first catalogued
- [[Benchmarks and Evals]]: the metrics most often gamed
- [[Sycophancy]]: a specific and common instance
- [[Interpretability]]: why you would want to see the process, not just the result
- [[Existential Risk]]: the argument this observation gets extrapolated to
- [[Recommender Systems]]: the largest deployed example of optimising a proxy

---

Part of [[AI Terminology Index]], section: Problems, Risks and Ambitions.
