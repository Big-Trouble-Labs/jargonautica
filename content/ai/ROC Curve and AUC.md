---
title: "ROC Curve and AUC"
aliases:
  - "ROC Curve"
  - "AUC"
tags:
  - glossary/ai
  - ai/measurement
section: "Measuring Performance"
summary: "A Receiver Operating Characteristic ('ROC') curve is a chart showing how well a model separates two groups, such as fraudulent and genuine transactions, across every possible decision threshold."
---

# ROC Curve and AUC

## Plain View

A Receiver Operating Characteristic ('ROC') curve is a chart showing how well a model separates two groups, such as fraudulent and genuine transactions, across every possible decision threshold. It plots how many true cases are caught against how many false alarms are raised as the threshold moves. The Area Under the Curve ('AUC') condenses this into one number: 1 is perfect separation and 0.5 is no better than a coin toss.

## Technical View

The Receiver Operating Characteristic ('ROC') curve plots true positive rate against false positive rate as the classification threshold varies; the name comes from signal detection work on radar. The Area Under the Curve ('AUC') equals the probability that a randomly chosen positive is scored above a randomly chosen negative, so it measures ranking quality independent of threshold. It ignores calibration and can look reassuring under heavy class imbalance, where precision-recall curves are more informative. A single figure also hides which operating region is good, so partial AUC or performance at the chosen threshold matters for deployment.

## Related

- [[Accuracy, Precision and Recall]]: the threshold-specific metrics it summarises
- [[Confusion Matrix]]: the counts at each threshold
- [[Imbalanced Data and Resampling]]: where it can mislead
- [[Model Confidence and Calibration]]: what it does not measure
- [[Classification and Regression]]: the task it evaluates

---

Part of [[AI Terminology Index]], section: Measuring Performance.
