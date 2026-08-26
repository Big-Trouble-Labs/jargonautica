---
title: "Perplexity"
tags:
  - glossary/ai
  - ai/measurement
section: "Measuring Performance"
summary: "The standard score for how well a language model predicts text: roughly, how surprised it is by what actually comes next."
---

# Perplexity

## Plain View

The standard score for how well a language model predicts text: roughly, how surprised it is by what actually comes next. Lower is better. It is useful for comparing training runs within one model family, but it says little about whether a model is helpful, truthful or pleasant to use, which is why nobody chooses a product on it.

## Technical View

The exponential of the average negative log likelihood per token, interpretable as the effective number of equally likely choices the model is deciding between at each step. Values are only comparable across models sharing a tokeniser and evaluation corpus, since a different subword vocabulary changes the denominator. It correlates with downstream capability within a family but breaks down across families and after instruction tuning, which typically raises perplexity on raw text while improving usefulness.

## Related

- [[Large Language Model]]: what it measures
- [[Loss Function]]: the quantity it is an exponential of
- [[Tokens]]: measured per token, so tokenisers must match
- [[Benchmarks and Evals]]: the capability measures that replaced it
- [[Instruction Tuning]]: which raises perplexity while improving usefulness

---

Part of [[AI Terminology Index]], section: Measuring Performance.
