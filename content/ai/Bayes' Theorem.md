---
title: "Bayes' Theorem"
aliases:
  - "Bayes Theorem"
  - "Bayesian"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "The rule for updating what you believe when new evidence arrives."
---

# Bayes' Theorem

## Plain View

The rule for updating what you believe when new evidence arrives. It says the strength of your new belief depends not just on how good the evidence is but on how likely the thing was to begin with. It is the reason a positive result on a test for a rare condition is often still probably wrong.

## Technical View

The posterior is proportional to the likelihood times the prior. It underpins Bayesian inference, naive Bayes classification, and the framing of learning as updating beliefs over parameters given data. Practically its most valuable use is diagnostic reasoning about classifier outputs under class imbalance, where ignoring the base rate produces confidently wrong conclusions.

## Related

- [[Prior and Posterior]]: the two beliefs it connects
- [[Base Rate Fallacy]]: what happens when the prior is ignored
- [[Naive Bayes]]: a classifier built directly on it
- [[Accuracy, Precision and Recall]]: why a good test can still mislead

---

Part of [[AI Terminology Index]], section: Maths and Statistics.
