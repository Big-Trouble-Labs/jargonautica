---
title: "Model Confidence and Calibration"
aliases:
  - "Calibration"
  - "Confidence"
tags:
  - glossary/ai
  - ai/measurement
section: "Measuring Performance"
summary: "Whether a model's stated certainty tracks how often it is right."
---

# Model Confidence and Calibration

## Plain View

Whether a model's stated certainty tracks how often it is right. A well-calibrated system that says it is 70 per cent sure should be correct about seventy times in a hundred. Language models are generally poorly calibrated, and preference training makes it worse by rewarding confident-sounding answers.

## Technical View

Measured by expected calibration error and reliability diagrams comparing predicted probability against observed frequency in bins. Sources of confidence include token log probabilities, verbalised confidence, and consistency across sampled generations, the last of which tends to be the most useful in practice. Post-hoc methods such as temperature scaling can improve calibration on a fixed distribution, and selective prediction, abstaining below a threshold, is the practical application.

## Related

- [[Aleatoric and Epistemic Uncertainty]]: the two things confidence could mean
- [[Self-consistency]]: agreement across samples as a usable signal
- [[Confidence Display]]: showing it to users
- [[Human in the Loop]]: confidence-based routing depends on it
- [[Logits and Softmax]]: where the raw signal comes from

---

Part of [[AI Terminology Index]], section: Measuring Performance.
