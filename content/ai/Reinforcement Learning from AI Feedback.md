---
title: "Reinforcement Learning from AI Feedback"
aliases:
  - "RLAIF"
tags:
  - glossary/ai
  - ai/post-training
section: "Training and Post-training"
summary: "Replacing the human preference judgements with a model's."
---

# Reinforcement Learning from AI Feedback

## Plain View

Replacing the human preference judgements with a model's. It scales far beyond what people can label and inherits whatever biases the judging model has. Most current post-training uses a mixture, with people setting the standard and models applying it at volume.

## Technical View

A capable model generates preference labels against written principles, producing training data at a fraction of the cost of human annotation. Consistency is higher than human labelling and independence is lower, since errors are systematic rather than random. Standard practice validates a sample against human judgement and uses human data for the areas where models are known to be poor judges, including safety-critical and culturally specific cases.

## Related

- [[Reinforcement Learning from Human Feedback]]: the human version
- [[Constitutional AI]]: principles guiding the AI labeller
- [[LLM as a Judge]]: the same substitution applied to evaluation
- [[Reward Model]]: what the labels train
- [[Data Labelling and Annotation]]: the cost it displaces

---

Part of [[AI Terminology Index]], section: Training and Post-training.
