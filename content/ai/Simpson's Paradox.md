---
title: "Simpson's Paradox"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "A pattern that appears in every subgroup can reverse when the groups are combined."
---

# Simpson's Paradox

## Plain View

A pattern that appears in every subgroup can reverse when the groups are combined. A treatment that works better for both men and women can appear worse overall, purely because of how many of each received it. It is the sharpest available demonstration that aggregate statistics can be true and completely misleading at once.

## Technical View

Arises from a confounding variable associated with both group membership and outcome, and with unequal group sizes. The resolution is not statistical but causal: which analysis is correct depends on the causal structure, specifically whether the grouping variable is a confounder to adjust for or a mediator to leave alone. It is the standard argument for disaggregated evaluation, since aggregate model performance can hide reversed performance for every subgroup.

## Related

- [[Correlation and Causation]]: why the causal structure decides the correct analysis
- [[Bias]]: the argument for disaggregated evaluation
- [[Causal Inference]]: confounders and how to handle them
- [[Error Analysis]]: why aggregate scores hide subgroup behaviour

---

Part of [[AI Terminology Index]], section: Maths and Statistics.
