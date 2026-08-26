---
title: "Sampling and Sampling Bias"
aliases:
  - "Sampling Bias"
  - "Selection Bias"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "Taking a subset to stand in for the whole, and the ways that goes wrong."
---

# Sampling and Sampling Bias

## Plain View

Taking a subset to stand in for the whole, and the ways that goes wrong. If the way you collected your examples relates to what you are trying to measure, no amount of data will fix it. A survey of people who answer surveys tells you about people who answer surveys.

## Technical View

Random, stratified and cluster sampling differ in how they trade variance against practicality. Selection bias, survivorship bias and non-response bias are all cases where the sampling mechanism is not independent of the outcome. In machine learning this determines who a model works for: training data collected from one population produces disparate performance on others, and this is a data collection problem that modelling cannot repair.

## Related

- [[Bias]]: how sampling choices become model bias
- [[Training Corpus]]: what the sample actually is for a model
- [[Data Quality]]: fitness for purpose starts here
- [[Confidence Interval]]: how sample size limits what you can claim
- [[Cross-validation]]: making better use of a small sample

---

Part of [[AI Terminology Index]], section: Maths and Statistics.
