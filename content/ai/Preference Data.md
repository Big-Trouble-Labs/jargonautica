---
title: "Preference Data"
aliases:
  - "Preference Pairs"
tags:
  - glossary/ai
  - ai/post-training
section: "Training and Post-training"
summary: "Records of which of two or more answers a person, or another model, judged better for the same question."
---

# Preference Data

## Plain View

Records of which of two or more answers a person, or another model, judged better for the same question. Rather than writing the perfect answer, a reviewer simply picks the better of two, which is quicker and often easier to judge reliably. Collections of these choices are used to teach models to produce the kinds of answers people prefer.

## Technical View

Typically stored as a prompt with a chosen and a rejected response, sometimes with rankings, ratings or rationales. It trains reward models for Reinforcement Learning from Human Feedback ('RLHF') or is used directly by Direct Preference Optimisation ('DPO') and its variants. Quality depends on annotator guidelines, agreement and expertise; known biases include preferring longer, more confident or more flattering answers, which models then learn. Sources range from paid annotators to user feedback buttons to AI judges, the last trading cost for the judge's own biases. Coverage matters: preferences gathered on easy prompts say little about hard ones.

## Related

- [[Reward Model]]: what it is used to train
- [[Direct Preference Optimisation]]: a method that learns from it directly
- [[Reinforcement Learning from Human Feedback]]: the pipeline it feeds
- [[Sycophancy]]: a bias it can teach
- [[Reinforcement Learning from AI Feedback]]: where the preferences come from a model

---

Part of [[AI Terminology Index]], section: Training and Post-training.
