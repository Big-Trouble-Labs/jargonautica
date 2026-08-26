---
title: "F1 Score"
aliases:
  - "F1"
tags:
  - glossary/ai
  - ai/measurement
section: "Measuring Performance"
summary: "A single number that balances precision and recall, used when you need one figure to compare models by."
---

# F1 Score

## Plain View

A single number that balances precision and recall, used when you need one figure to compare models by. It is the harmonic mean of the two, which means it punishes a model that is excellent at one and poor at the other. Convenient, but it hides the trade-off it is averaging, so it should never be the only thing you look at.

## Technical View

F1 is twice precision times recall over their sum. The general F-beta form weights recall beta times as heavily as precision, so F2 suits screening where misses are costly and F0.5 suits situations where false alarms are expensive. For multi-class problems, macro-averaging treats every class equally and exposes poor performance on rare classes, while micro-averaging weights by frequency and is dominated by common ones. Stating which was used is essential and frequently omitted.

## Related

- [[Accuracy, Precision and Recall]]: the two quantities being balanced
- [[Confusion Matrix]]: the source of both
- [[Benchmarks and Evals]]: where it is most often quoted

---

Part of [[AI Terminology Index]], section: Measuring Performance.
