---
title: "Decision Tree"
aliases:
  - "Decision Trees"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "A model that works by asking a series of yes or no questions, like a flowchart."
---

# Decision Tree

## Plain View

A model that works by asking a series of yes or no questions, like a flowchart. Is the customer over sixty? Have they claimed before? Was the claim over five thousand pounds? Follow the branches to an answer. The appeal is that you can print one out and read it, which makes them popular wherever somebody has to justify the decision afterwards.

## Technical View

Trees split the data recursively on whichever feature most reduces impurity, measured by Gini index or entropy for classification and by variance for regression. They handle mixed data types and non-linear relationships without preprocessing and need no feature scaling. Left unconstrained they overfit badly, effectively memorising the training set, so depth limits and pruning are essential. A single tree is also unstable: small changes to the data produce a very different tree, which is precisely the weakness that ensembles turn into a strength.

## Related

- [[Random Forest and Gradient Boosting]]: what you get when you combine many of them
- [[Overfitting]]: what an unconstrained tree does immediately
- [[Interpretability]]: the reason people still choose them
- [[Classification and Regression]]: trees do both
- [[Feature Engineering]]: trees need less of it than most models

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.
