---
title: "Confidence Interval"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "A range that expresses how precisely you actually know something."
---

# Confidence Interval

## Plain View

A range that expresses how precisely you actually know something. An accuracy of 84 per cent measured on fifty examples might really be anywhere between 71 and 92 per cent, which changes what you can honestly claim. Reporting a single number from a small evaluation set is the most common way benchmark results mislead.

## Technical View

An interval that would contain the true parameter in a stated proportion of repeated samples. For a proportion, width scales roughly with the inverse square root of sample size, so distinguishing two systems a couple of points apart needs far more examples than people expect. Bootstrapping gives intervals without distributional assumptions and is the practical default for model evaluation.

## Related

- [[Statistical Significance and the p-value]]: the related and weaker summary
- [[Benchmarks and Evals]]: why single benchmark numbers mislead
- [[Variance and Standard Deviation]]: what determines the width
- [[Cross-validation]]: a practical route to an interval

---

Part of [[AI Terminology Index]], section: Maths and Statistics.
