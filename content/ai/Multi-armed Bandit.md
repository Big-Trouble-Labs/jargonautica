---
title: "Multi-armed Bandit"
aliases:
  - "Bandit"
  - "Thompson Sampling"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "Deciding how to split effort between trying new options and using the one that already works."
---

# Multi-armed Bandit

## Plain View

Deciding how to split effort between trying new options and using the one that already works. Named after a row of slot machines. It formalises the recommendation problem, the pricing problem and the trial-design problem, and it is a smarter alternative to a fixed A/B test when you want to stop wasting traffic on the losing variant.

## Technical View

Algorithms include epsilon-greedy, upper confidence bound and Thompson sampling, with regret bounds describing convergence to the best arm. Contextual bandits condition on features, making them a natural fit for personalisation. Compared to fixed-horizon A/B testing they reduce cost but complicate inference, since adaptive allocation breaks standard significance testing.

## Related

- [[Reinforcement Learning]]: the wider framework
- [[Controlled Experiment]]: the fixed-horizon alternative
- [[Recommender Systems]]: a natural application
- [[Online Learning]]: the setting it belongs to

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.
