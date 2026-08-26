---
title: "Reinforcement Learning with Verifiable Rewards"
aliases:
  - "RLVR"
tags:
  - glossary/ai
  - ai/post-training
section: "Training and Post-training"
summary: "Training on tasks where correctness can be checked automatically: the code runs or it does not, the sum is right or wrong, the proof checks out."
---

# Reinforcement Learning with Verifiable Rewards

## Plain View

Training on tasks where correctness can be checked automatically: the code runs or it does not, the sum is right or wrong, the proof checks out. Because the signal is objective, there is no reward model to fool, and this is the approach behind the recent jump in mathematical and coding ability.

## Technical View

Uses a programmatic verifier as the reward, eliminating reward model exploitation and permitting long training runs with high sample counts. It underpins reasoning models trained to produce extended chains of thought. Limitations are that it applies only where verification exists, that models learn to exploit weak verifiers such as incomplete test suites, and that gains transfer unevenly to unverifiable tasks.

## Related

- [[Reasoning Models and Test-Time Compute]]: what it is used to train
- [[Reward Hacking and Specification Gaming]]: weak verifiers get exploited
- [[Reward Model]]: what a verifier replaces
- [[Agentic Coding]]: tests as the verifier
- [[Reinforcement Learning]]: the underlying method

---

Part of [[AI Terminology Index]], section: Training and Post-training.
