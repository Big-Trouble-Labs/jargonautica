---
title: "Probability Distribution"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "A description of how likely each possible outcome is."
---

# Probability Distribution

## Plain View

A description of how likely each possible outcome is. Rolling a fair die gives an even distribution over six outcomes; a language model produces a distribution over tens of thousands of possible next words. Understanding that a model outputs a distribution rather than an answer explains most of its behaviour, including why the same prompt can give different results.

## Technical View

A function assigning probability mass or density over a sample space, integrating to one. Discrete distributions over vocabulary are what language models produce at each step; the sampling strategy then selects from it. Key properties are the mode, the mean, and the tail, and much of what makes generation feel creative or unreliable comes from how far into the tail sampling is allowed to reach.

## Related

- [[Logits and Softmax]]: how a model produces one
- [[Temperature and Sampling]]: how one gets sampled from
- [[Expected Value]]: summarising a distribution with one number
- [[Entropy and Information]]: measuring its uncertainty
- [[Normal Distribution]]: the most commonly assumed shape

---

Part of [[AI Terminology Index]], section: Maths and Statistics.
