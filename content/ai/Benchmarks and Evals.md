---
title: "Benchmarks and Evals"
aliases:
  - "Benchmarks"
  - "Evals"
  - "Evaluation"
tags:
  - glossary/ai
  - ai/practice
section: "Testing, Safeguarding and Running Models in Practice"
summary: "Standard tests used to measure how good a model is, and the basis of nearly every performance claim you will see."
---

# Benchmarks and Evals

## Plain View

Standard tests used to measure how good a model is, and the basis of nearly every performance claim you will see. They are useful but should be read sceptically. Test questions leak into training data, models are optimised towards the tests that get publicised, and a high score on a benchmark often fails to predict usefulness on your actual work.

## Technical View

Public benchmarks suffer badly from contamination, since anything on the open internet may appear in training corpora, and from Goodhart effects once they become optimisation targets. Serious practice increasingly relies on private, task-specific evaluation sets built from real examples, alongside human preference comparisons and, where possible, automated checking against verifiable outcomes. Using a model to grade another model's output is common and cheap but carries known biases, including a preference for longer answers and for outputs resembling its own style.

## Related

- [[Overfitting]]: what happens when models are tuned to the test
- [[Model Card]]: where results are published
- [[Machine Learning Operations]]: evaluation as a production discipline
- [[Red Teaming]]: adversarial testing rather than scored testing
- [[Reasoning Models and Test-Time Compute]]: where benchmark gains are currently concentrated

---

Part of [[AI Terminology Index]], section: Testing, Safeguarding and Running Models in Practice.
