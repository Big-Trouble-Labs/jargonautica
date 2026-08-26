---
title: "Direct Preference Optimisation"
aliases:
  - "DPO"
tags:
  - glossary/ai
  - ai/post-training
section: "Training and Post-training"
summary: "A simpler way of achieving what preference-based reinforcement learning does, by training directly on pairs of preferred and rejected answers without building a separate reward model or running a reinforcement loop."
---

# Direct Preference Optimisation

## Plain View

A simpler way of achieving what preference-based reinforcement learning does, by training directly on pairs of preferred and rejected answers without building a separate reward model or running a reinforcement loop. Much easier to get working, which is why it spread quickly.

## Technical View

Reparameterises the reinforcement learning objective so the optimal policy can be derived in closed form from preference data, turning it into a classification-style loss over chosen and rejected pairs with an implicit reward defined by the log ratio to a reference model. Cheaper and more stable than the full pipeline, but it is offline, so it cannot explore beyond the preference dataset, and it is more prone to degenerate behaviour when preferences are noisy.

## Related

- [[Proximal Policy Optimisation]]: the approach it simplifies
- [[Reward Model]]: what it makes unnecessary
- [[Reinforcement Learning from Human Feedback]]: the goal it serves
- [[Fine-tuning]]: it is implemented as a fine-tuning loss

---

Part of [[AI Terminology Index]], section: Training and Post-training.
