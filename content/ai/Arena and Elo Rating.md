---
title: "Arena and Elo Rating"
aliases:
  - "Elo"
  - "Chatbot Arena"
tags:
  - glossary/ai
  - ai/measurement
section: "Measuring Performance"
summary: "Ranking models by having people compare two anonymous answers to the same question and pick the better one, then aggregating those votes into a rating like the one used for chess."
---

# Arena and Elo Rating

## Plain View

Ranking models by having people compare two anonymous answers to the same question and pick the better one, then aggregating those votes into a rating like the one used for chess. It captures overall preference well and is vulnerable to style: people reliably prefer longer, more confident, better formatted answers.

## Technical View

Pairwise comparisons are aggregated with a Bradley-Terry or Elo-style model producing a scalar rating with confidence intervals. Advantages are open-ended prompts from real users and resistance to contamination. Weaknesses include length and formatting bias, self-selected voter population, sensitivity to prompt distribution, and susceptibility to gaming through targeted campaigns. Style-controlled variants attempt to isolate substance from presentation.

## Related

- [[Benchmarks and Evals]]: the wider practice
- [[LLM as a Judge]]: the automated counterpart
- [[Human Evaluation Protocol]]: the discipline it partially applies
- [[Standard Benchmarks]]: the fixed-test alternative
- [[Sycophancy]]: length and style bias in preference

---

Part of [[AI Terminology Index]], section: Measuring Performance.
