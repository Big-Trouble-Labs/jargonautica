---
title: "Controlled Experiment"
aliases:
  - "A/B Testing"
  - "Randomised Controlled Trial"
  - "Split Test"
tags:
  - glossary/ai
  - ai/measurement
section: "Measuring Performance"
summary: "Randomly showing different users different versions and comparing what happens."
---

# Controlled Experiment

## Plain View

Randomly showing different users different versions and comparing what happens. Done properly it is the closest thing to proof available in a product. Done badly, and it usually is done badly, it produces confident conclusions from noise: stopping early, testing many things at once, or measuring the wrong outcome.

## Technical View

Requires randomisation at the correct unit, a pre-registered primary metric, a power calculation determining sample size and duration before starting, and correction for multiple comparisons. Common failures are peeking and stopping when significance is reached, which inflates false positives, interference between units, and using proxy metrics that move independently of the outcome. Sequential testing methods permit continuous monitoring with valid inference.

## Related

- [[Causal Inference]]: randomisation as identification
- [[Statistical Significance and the p-value]]: how results are judged and misjudged
- [[Multi-armed Bandit]]: the adaptive alternative
- [[Online and Offline Evaluation]]: the online half
- [[Return on Investment]]: how benefit is credibly measured

---

Part of [[AI Terminology Index]], section: Measuring Performance.
