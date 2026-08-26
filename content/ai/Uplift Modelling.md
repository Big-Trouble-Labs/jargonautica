---
title: "Uplift Modelling"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "Predicting not who will act, but who will act because you intervened."
---

# Uplift Modelling

## Plain View

Predicting not who will act, but who will act because you intervened. Marketing at people who would have bought anyway wastes money and inflates the numbers. This method targets the group whose behaviour actually changes, which is a genuinely different and more useful question.

## Technical View

Estimates the conditional average treatment effect, the difference in outcome probability under treatment versus control for each individual. Requires randomised data to train on. Approaches include two-model differencing, class transformation and uplift trees. Evaluation uses Qini or uplift curves rather than accuracy, since the individual counterfactual is never observed and only group-level effects can be validated.

## Related

- [[Causal Inference]]: the framework it sits in
- [[Controlled Experiment]]: the randomised data it requires
- [[Classification and Regression]]: the ordinary prediction it improves on
- [[Recommender Systems]]: targeting who is actually influenced

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.
