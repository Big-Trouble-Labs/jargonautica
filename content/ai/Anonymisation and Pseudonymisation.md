---
title: "Anonymisation and Pseudonymisation"
aliases:
  - "Anonymisation"
  - "Pseudonymisation"
tags:
  - glossary/ai
  - ai/data
section: "Data"
summary: "Two different things that get used interchangeably and should not be."
---

# Anonymisation and Pseudonymisation

## Plain View

Two different things that get used interchangeably and should not be. Pseudonymisation replaces identifiers with codes, and the data is still personal data because the mapping exists somewhere. Anonymisation means nobody can re-identify anyone, which is a much higher bar and harder to achieve than it sounds.

## Technical View

Under most data protection regimes pseudonymised data remains in scope while genuinely anonymised data falls out of scope, which makes the distinction legally consequential. Re-identification attacks combining supposedly anonymous datasets with auxiliary information have repeatedly succeeded, which is why formal guarantees such as differential privacy are preferred to ad hoc masking. Models trained on personal data can memorise it, so the model itself may carry residual identifiability.

## Related

- [[Personally Identifiable Information]]: what is being obscured
- [[Differential Privacy]]: the formal guarantee
- [[Data Subject Rights]]: why the distinction is legally significant
- [[Model Extraction and Membership Inference]]: re-identification through the model

---

Part of [[AI Terminology Index]], section: Data.
