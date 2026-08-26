---
title: "Missing Data and Imputation"
aliases:
  - "Imputation"
  - "Missing Data"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "Deciding what to do about blanks."
---

# Missing Data and Imputation

## Plain View

Deciding what to do about blanks. Filling them with the average is easy and quietly destroys information, because the fact that a value is missing is often itself informative. A blank income field may say more about the applicant than any number would.

## Technical View

The standard taxonomy distinguishes missing completely at random, missing at random and missing not at random, and only the first two permit unbiased imputation without modelling the missingness mechanism. Methods run from mean and median filling through k-nearest neighbours and iterative model-based imputation to multiple imputation with proper uncertainty propagation. Adding an explicit indicator column preserves the signal that a value was absent.

## Related

- [[Data Quality]]: completeness as a quality dimension
- [[Feature Engineering]]: where the decision is made
- [[Data Leakage]]: imputing before splitting is a common leak
- [[Bias]]: missingness is rarely random across groups

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.
