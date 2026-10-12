---
title: "Label Noise"
aliases:
  - "Noisy Labels"
tags:
  - glossary/ai
  - ai/data
section: "Data"
summary: "Mistakes in the answers a model is trained or tested on."
---

# Label Noise

## Plain View

Mistakes in the answers a model is trained or tested on. If some photos of cats are tagged as dogs, the model learns from wrong examples and is marked against wrong answers. Some noise is unavoidable when people label data quickly or disagree, and a little is tolerable, but a lot of it quietly caps how good a model can become.

## Technical View

Errors in training or evaluation labels, either random (annotator slips) or systematic (consistent confusion between two classes, biased guidelines). Deep networks can memorise noisy labels outright, which harms generalisation. Mitigations include multiple annotators with adjudication, confident learning methods that flag likely mislabels where a model's out-of-sample predicted probabilities confidently contradict the given label, robust loss functions, and early stopping before memorisation sets in. Noise in test sets is particularly damaging because it distorts the measurement itself: audits of widely used benchmarks have found mislabelled items, so small differences between models near the top of a leaderboard may sit within the noise.

## Related

- [[Data Quality]]: the wider property it degrades
- [[Ground Truth]]: the reference that noise corrupts
- [[Data Labelling and Annotation]]: where most of it originates
- [[Overfitting]]: how models memorise wrong labels
- [[Inter-rater Reliability]]: a measure of how noisy labels are likely to be

---

Part of [[AI Terminology Index]], section: Data.
