---
title: "Anomaly Detection"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "Finding the unusual without being told in advance what unusual looks like."
---

# Anomaly Detection

## Plain View

Finding the unusual without being told in advance what unusual looks like. Used for fraud, equipment failure, network intrusion and quality control. The difficulty is that anomalies are rare by definition, so you rarely have enough labelled examples to train a normal classifier, and what counts as anomalous drifts over time.

## Technical View

Approaches include density estimation, distance and isolation-based methods such as isolation forests and local outlier factor, one-class support vector machines, and reconstruction error from autoencoders. Evaluation is awkward given extreme class imbalance, favouring precision-recall curves over accuracy. The dominant practical problem is alert volume: even excellent false positive rates generate unmanageable numbers of alerts at scale.

## Related

- [[Gaussian Mixture Model]]: density estimation as a detector
- [[Outlier]]: the statistical notion behind it
- [[Imbalanced Data and Resampling]]: the class balance problem it faces
- [[Unsupervised Learning]]: usually done without labels
- [[Abuse Monitoring]]: a direct application
- [[Accuracy, Precision and Recall]]: why alert volume dominates

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.
