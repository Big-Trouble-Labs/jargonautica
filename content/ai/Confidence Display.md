---
title: "Confidence Display"
tags:
  - glossary/ai
  - ai/product
section: "Product and Adoption"
summary: "Showing how sure the system is."
---

# Confidence Display

## Plain View

Showing how sure the system is. Done well it helps people calibrate when to check. Done badly, and it usually is, it either hides uncertainty behind fluent prose or displays a precise-looking percentage that is not actually meaningful. The failure mode of most AI interfaces is expressing everything with equal confidence.

## Technical View

Underlying signals include token probabilities, agreement across sampled generations, retrieval coverage and verifier outcomes, of which sampling agreement tends to be the most usable. Presentation options run from numeric scores through banded qualitative labels to behavioural cues such as flagging claims lacking source support. Numeric confidence should not be shown unless calibrated and validated, since an uncalibrated number is worse than no number.

## Related

- [[Model Confidence and Calibration]]: the signal being shown
- [[Trust Calibration]]: the goal it serves
- [[Grounding and Citation]]: evidence as an alternative to a number
- [[Automation Bias]]: what poor display encourages

---

Part of [[AI Terminology Index]], section: Product and Adoption.
