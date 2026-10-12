---
title: "Survivorship Bias"
aliases:
  - "Survivor Bias"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "The error of drawing conclusions only from the cases that made it through some filter, while ignoring the ones that did not."
---

# Survivorship Bias

## Plain View

The error of drawing conclusions only from the cases that made it through some filter, while ignoring the ones that did not. Studying only successful start-ups to learn what makes companies succeed misses all the failures that did the same things. In AI it shows up when people judge a tool by the impressive examples that get shared rather than the many ordinary or failed attempts nobody posts.

## Technical View

A form of selection bias in which the sample is conditioned on an outcome related to the variable of interest. The standard illustration is Abraham Wald's analysis of damage to returning aircraft for the Statistical Research Group at Columbia University during the Second World War, where the aircraft that did not return carried the information about fatal hits; popular retellings simplify his method. In machine learning it appears in datasets built from logged outcomes (only approved loans have repayment labels), in published benchmark results, in cherry-picked demonstrations and in vendor case studies. Remedies include tracking the full population, reject inference and pre-registered evaluation.

## Related

- [[Sampling and Sampling Bias]]: the wider family of selection errors
- [[Bias]]: one of its statistical forms
- [[Feedback Loop]]: how deployed models create filtered data
- [[Regression to the Mean]]: a related statistical illusion
- [[Data Quality]]: a hidden gap in what was collected

---

Part of [[AI Terminology Index]], section: Maths and Statistics.
