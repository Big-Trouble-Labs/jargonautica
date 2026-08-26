---
title: "Accuracy, Precision and Recall"
aliases:
  - "Accuracy"
  - "Precision"
  - "Recall"
tags:
  - glossary/ai
  - ai/measurement
section: "Measuring Performance"
summary: "Three ways of being right, and the reason 'ninety-nine per cent accurate' can be worthless."
---

# Accuracy, Precision and Recall

## Plain View

Three ways of being right, and the reason 'ninety-nine per cent accurate' can be worthless. If one transaction in a thousand is fraudulent, a system that says 'not fraud' every single time is 99.9 per cent accurate and completely useless. Precision asks: of the cases it flagged, how many were real? Recall asks: of the real cases, how many did it catch? You can nearly always trade one against the other, and which matters is a business decision rather than a technical one.

## Technical View

Precision is true positives over predicted positives; recall is true positives over actual positives. The trade-off is controlled by the decision threshold applied to predicted probabilities and is best examined through a precision-recall curve, which is more informative than a receiver operating characteristic curve under heavy class imbalance. Accuracy is only meaningful when classes are reasonably balanced and the two error types cost about the same. When screening a large population, even a very low false positive rate produces a large absolute number of wrong flags, which is usually the binding constraint.

## Related

- [[Confusion Matrix]]: the table these are all derived from
- [[F1 Score]]: the single number that balances two of them
- [[Classification and Regression]]: the problem type these measure
- [[Benchmarks and Evals]]: where these numbers get reported
- [[Guardrails]]: false positives and negatives are the trade-off there too

---

Part of [[AI Terminology Index]], section: Measuring Performance.
