---
title: "Markov Chain"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "A process where what happens next depends only on where you are now, not on how you got there."
---

# Markov Chain

## Plain View

A process where what happens next depends only on where you are now, not on how you got there. Weather modelled as sunny or rainy with fixed transition odds is a Markov chain. It is a useful simplification, and language models deliberately break it, since attending to the whole history is precisely their advantage over what came before.

## Technical View

A stochastic process satisfying the Markov property, characterised by a transition matrix, with long-run behaviour described by a stationary distribution where one exists. Hidden Markov models add unobserved state and dominated speech and sequence modelling before neural approaches. An autoregressive language model is Markovian only if you define the state as the entire context window, which is a technicality worth noticing.

## Related

- [[Hidden Markov Model]]: the version with unobserved state
- [[Autoregressive Generation]]: how language models depart from the Markov assumption
- [[Monte Carlo Methods]]: Markov chain Monte Carlo sampling
- [[Reinforcement Learning]]: the state and transition framing

---

Part of [[AI Terminology Index]], section: Maths and Statistics.
