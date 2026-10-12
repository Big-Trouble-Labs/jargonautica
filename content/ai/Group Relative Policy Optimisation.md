---
title: "Group Relative Policy Optimisation"
aliases:
  - "GRPO"
tags:
  - glossary/ai
  - ai/post-training
section: "Training and Post-training"
summary: "A training method that improves a model by having it answer the same question several times, scoring each answer, and nudging it towards the answers that scored better than the group's average."
---

# Group Relative Policy Optimisation

## Plain View

A training method that improves a model by having it answer the same question several times, scoring each answer, and nudging it towards the answers that scored better than the group's average. Because it compares answers with each other rather than with a separate judge of expected quality, it needs less computing power. It became widely used for teaching models to reason through maths and coding problems.

## Technical View

Introduced by DeepSeek in the 2024 DeepSeekMath paper as a variant of Proximal Policy Optimisation ('PPO'). For each prompt it samples a group of completions, computes rewards, and uses each completion's reward normalised against the group mean and standard deviation as its advantage. This removes the separate value model PPO needs, cutting memory and compute. A Kullback-Leibler ('KL') penalty keeps the policy near a reference model. It pairs naturally with verifiable rewards. Reported issues include length biases from how losses are normalised and weak signal when all samples in a group score the same, which later variants address.

## Related

- [[Proximal Policy Optimisation]]: the method it simplifies
- [[Reinforcement Learning with Verifiable Rewards]]: the reward setting it is mostly used with
- [[Reasoning Models and Test-Time Compute]]: the models it helped train
- [[Kullback-Leibler Divergence]]: the penalty that keeps it anchored
- [[Reward Model]]: an alternative source of scores

---

Part of [[AI Terminology Index]], section: Training and Post-training.
