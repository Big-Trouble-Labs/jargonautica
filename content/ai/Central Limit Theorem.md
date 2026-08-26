---
title: "Central Limit Theorem"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "Add up enough independent random things and the total tends towards a bell curve, regardless of what the individual things looked like."
---

# Central Limit Theorem

## Plain View

Add up enough independent random things and the total tends towards a bell curve, regardless of what the individual things looked like. It is why averages are well behaved even when individual measurements are not, and it is the licence behind a great deal of routine statistics.

## Technical View

The normalised sum of independent, identically distributed variables with finite variance converges to a normal distribution. The conditions matter: it fails for heavy-tailed distributions with infinite variance, and convergence is slow for skewed data, so small-sample normal approximations can be poor. It justifies confidence intervals for means and underlies the practice of averaging across evaluation runs.

## Related

- [[Normal Distribution]]: the shape it converges to
- [[Confidence Interval]]: what licenses the usual intervals
- [[Sampling and Sampling Bias]]: the sampling assumptions required
- [[Variance and Standard Deviation]]: the finite variance condition

---

Part of [[AI Terminology Index]], section: Maths and Statistics.
