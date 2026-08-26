---
title: "Robustness Testing"
tags:
  - glossary/ai
  - ai/measurement
section: "Measuring Performance"
summary: "Checking that a system still works when the input is a bit different."
---

# Robustness Testing

## Plain View

Checking that a system still works when the input is a bit different. Rephrase the question, add a typo, change the order of the options, send it in a different language. Real users do all of these constantly, and a system that only works on clean inputs will look far better in testing than in life.

## Technical View

Perturbation families include paraphrase, typographical noise, formatting changes, option reordering for multiple choice, irrelevant context injection and distractor documents. Report performance variance under perturbation alongside mean accuracy, since sensitivity to order and formatting is a well-documented weakness and a large gap indicates reliance on superficial cues. This overlaps with adversarial testing, but the distribution of interest is naturally occurring variation rather than worst-case attack.

## Related

- [[Adversarial Examples]]: the worst-case counterpart
- [[Benchmarks and Evals]]: variance under perturbation as a reported measure
- [[Interpolation and Extrapolation]]: behaviour away from the training distribution
- [[Red Teaming]]: adversarial rather than naturalistic variation

---

Part of [[AI Terminology Index]], section: Measuring Performance.
