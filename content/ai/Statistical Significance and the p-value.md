---
title: "Statistical Significance and the p-value"
aliases:
  - "p-value"
  - "Statistical Significance"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "A measure of how surprising your result would be if nothing were really going on."
---

# Statistical Significance and the p-value

## Plain View

A measure of how surprising your result would be if nothing were really going on. It is routinely misread as the probability that your finding is true, which it is not. A significant result can be tiny and useless; a non-significant one can mean you simply did not gather enough data.

## Technical View

The probability of observing data at least as extreme as yours under the null hypothesis. It says nothing about effect size or about the probability of the hypothesis. Multiple comparisons inflate false positives, requiring correction. In evaluation work the practical issues are running many variants until one passes, and treating a threshold as a decision rule rather than reporting effect size with an interval.

## Related

- [[Confidence Interval]]: the more informative alternative
- [[Controlled Experiment]]: where it is most used and misused
- [[Benchmarks and Evals]]: why small benchmark gaps mean little
- [[Baseline]]: significance against what

---

Part of [[AI Terminology Index]], section: Maths and Statistics.
