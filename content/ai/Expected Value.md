---
title: "Expected Value"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "The average outcome if you repeated something many times, weighting each possibility by how likely it is."
---

# Expected Value

## Plain View

The average outcome if you repeated something many times, weighting each possibility by how likely it is. Useful for deciding, and misleading on its own, because the average of a distribution that is mostly small losses and occasionally catastrophic looks identical to one that is mildly negative every time.

## Technical View

The probability-weighted mean of a random variable. Training minimises expected loss over the data distribution, approximated by the empirical mean over samples. Its weakness is insensitivity to tail risk, which is why practical evaluation reports percentiles and worst-case behaviour alongside means, and why expected-value reasoning alone is a poor guide to decisions with irreversible downside.

## Related

- [[Probability Distribution]]: what is being averaged
- [[Loss Function]]: training minimises expected loss
- [[Variance and Standard Deviation]]: what the average hides
- [[Cost Per Task]]: why tail cost matters more than the mean

---

Part of [[AI Terminology Index]], section: Maths and Statistics.
