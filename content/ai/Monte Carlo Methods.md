---
title: "Monte Carlo Methods"
aliases:
  - "Monte Carlo"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "Answering a hard question by trying many random possibilities and looking at what happens."
---

# Monte Carlo Methods

## Plain View

Answering a hard question by trying many random possibilities and looking at what happens. If you cannot calculate the odds directly, simulate the situation thousands of times and count. It is the workhorse behind risk modelling, game-playing systems and a great deal of statistics.

## Technical View

Estimating expectations by sampling, with error decreasing as the inverse square root of sample count regardless of dimension, which is why it beats grid methods in high dimensions. Variants include importance sampling and Markov chain Monte Carlo for sampling from distributions known only up to a constant. Monte Carlo tree search underpinned the game-playing systems of the 2010s and reappears in reasoning models that search over candidate solutions.

## Related

- [[Probability Distribution]]: what is being sampled from
- [[Self-consistency]]: sampling several answers and voting
- [[Reasoning Models and Test-Time Compute]]: search over candidate solutions
- [[Curse of Dimensionality]]: why sampling beats grids in high dimensions

---

Part of [[AI Terminology Index]], section: Maths and Statistics.
