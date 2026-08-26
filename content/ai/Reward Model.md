---
title: "Reward Model"
tags:
  - glossary/ai
  - ai/post-training
section: "Training and Post-training"
summary: "A separate model trained to predict which of two answers a person would prefer."
---

# Reward Model

## Plain View

A separate model trained to predict which of two answers a person would prefer. Once you have one, you can score any output automatically, which is what makes preference-based training possible at scale. Its quality caps everything downstream, because the main model will learn to satisfy this judge rather than the humans it stands in for.

## Technical View

Trained on pairwise human preference data, usually initialised from the policy model with a scalar output head, optimised so preferred responses score higher. Known failure modes include length bias, style over substance, and poor generalisation off-distribution. Over-optimising against it produces reward hacking, which is why divergence from the reference policy is penalised and why reward model quality is monitored throughout.

## Related

- [[Reinforcement Learning from Human Feedback]]: where it is used
- [[Reward Hacking and Specification Gaming]]: what over-optimising it produces
- [[Data Labelling and Annotation]]: preference data as its training set
- [[Direct Preference Optimisation]]: the method that removes the need for one
- [[Sycophancy]]: a bias it commonly encodes

---

Part of [[AI Terminology Index]], section: Training and Post-training.
