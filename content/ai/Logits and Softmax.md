---
title: "Logits and Softmax"
aliases:
  - "Logits"
  - "Softmax"
tags:
  - glossary/ai
  - ai/language-models
section: "Language Models Specifically"
summary: "What the model actually produces before you see any text."
---

# Logits and Softmax

## Plain View

What the model actually produces before you see any text. At each step it emits a raw score for every possible next token, tens of thousands of them. Softmax turns those scores into probabilities that add up to one, and only then does something choose a token. Temperature and the various sampling controls all operate at this step, which is why they change style and reliability without changing the model at all.

## Technical View

Logits are the unnormalised outputs of the final linear layer. Softmax exponentiates and normalises them, and dividing logits by a temperature beforehand flattens or sharpens the distribution. Log probabilities of chosen tokens are exposed by many interfaces and serve as a rough confidence signal, though they measure fluency rather than truth and are poorly calibrated after preference training. Constrained decoding works by masking the logits of any token that would break a required schema.

## Related

- [[Temperature and Sampling]]: the controls that operate here
- [[Tokens]]: there is one logit per possible token
- [[Structured Output]]: constrained decoding masks logits
- [[Activation Function]]: softmax is the output-layer activation
- [[Perplexity]]: computed from these probabilities

---

Part of [[AI Terminology Index]], section: Language Models Specifically.
