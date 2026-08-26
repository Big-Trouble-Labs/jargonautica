---
title: "Inter-rater Reliability"
tags:
  - glossary/ai
  - ai/measurement
section: "Measuring Performance"
summary: "Whether your human graders agree with each other."
---

# Inter-rater Reliability

## Plain View

Whether your human graders agree with each other. If two competent people looking at the same output give different scores, the measurement is unstable and no amount of averaging fixes the underlying ambiguity. Low agreement usually means the rubric is unclear rather than that the raters are careless.

## Technical View

Measured by Cohen's kappa for two raters, Fleiss' kappa for more, or Krippendorff's alpha for mixed data types, all correcting for chance agreement. Values below about 0.6 indicate the task definition needs work. It sets a ceiling on achievable model performance as measured, since a model cannot exceed the reliability of the labels. It should also be reported when validating a model judge against human raters.

## Related

- [[Human Evaluation Protocol]]: where it is measured
- [[Rubric]]: unclear rubrics cause low agreement
- [[Data Labelling and Annotation]]: the same measure for training labels
- [[LLM as a Judge]]: validating a judge against humans

---

Part of [[AI Terminology Index]], section: Measuring Performance.
