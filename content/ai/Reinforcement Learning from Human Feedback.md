---
title: "Reinforcement Learning from Human Feedback"
aliases:
  - "RLHF"
tags:
  - glossary/ai
  - ai/risks
section: "Problems, Risks and Ambitions"
summary: "The main method used to turn a raw text predictor into something helpful and well behaved."
---

# Reinforcement Learning from Human Feedback

## Plain View

The main method used to turn a raw text predictor into something helpful and well behaved. People compare pairs of model outputs and say which is better; those judgements are used to train the model towards what people prefer. This is largely why a modern assistant is useful and polite rather than simply continuing your text in whatever direction the internet suggests.

## Technical View

The classic pipeline trains a reward model on human preference comparisons, then optimises the language model against it, typically with proximal policy optimisation and a penalty term preventing drift too far from the original model. Known weaknesses include reward model exploitation, and the tendency to reward outputs that appear good to a rater rather than those that are correct, which contributes to sycophancy and confident-sounding errors. Newer approaches such as direct preference optimisation simplify the pipeline, and constitutional methods use written principles and model-generated critiques to reduce reliance on human labelling volume.

## Related

- [[Alignment]]: the goal this technique serves
- [[Reinforcement Learning]]: the underlying method
- [[Fine-tuning]]: the stage that comes before it
- [[Large Language Model]]: what it turns from a text continuer into an assistant
- [[Jailbreaking]]: attempts to undo what it installed

---

Part of [[AI Terminology Index]], section: Problems, Risks and Ambitions.
