---
title: "Hidden Markov Model"
aliases:
  - "HMM"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "A model for sequences where the thing you care about is hidden and you only see its effects."
---

# Hidden Markov Model

## Plain View

A model for sequences where the thing you care about is hidden and you only see its effects. You observe the words in a sentence and want the grammatical roles behind them, or you observe sounds and want the words. It ran speech recognition and sequence tagging for decades before neural methods arrived.

## Technical View

Comprises hidden states with Markov transitions and observation likelihoods, with the Viterbi algorithm for the most likely state sequence, the forward-backward algorithm for marginals, and Baum-Welch for unsupervised parameter estimation. Displaced by neural sequence models, but the framing survives in structured prediction, and the state space model architectures now competing with transformers are a direct descendant.

## Related

- [[Markov Chain]]: the underlying process
- [[Recurrent Neural Network]]: what replaced it for sequences
- [[Speech Recognition and Synthesis]]: its most successful application
- [[State Space Model]]: the modern descendant of the same framing

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.
