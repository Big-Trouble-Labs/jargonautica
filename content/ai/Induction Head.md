---
title: "Induction Head"
aliases:
  - "Induction Heads"
tags:
  - glossary/ai
  - ai/language-models
section: "Language Models Specifically"
summary: "A small mechanism found inside language models that spots a repeated pattern and continues it: if 'Mr' was followed by 'Dursley' earlier in the text, then when 'Mr' appears again, it predicts 'Dursley'."
---

# Induction Head

## Plain View

A small mechanism found inside language models that spots a repeated pattern and continues it: if 'Mr' was followed by 'Dursley' earlier in the text, then when 'Mr' appears again, it predicts 'Dursley'. Researchers think mechanisms like this are a large part of how models pick up patterns from the text in front of them without retraining, and they are one of the best understood examples of what happens inside a model.

## Technical View

A two-head circuit described by Anthropic interpretability researchers, first in 'A Mathematical Framework for Transformer Circuits' (2021) and in depth by Olsson and colleagues in 2022. A previous-token head in an earlier layer writes each token's predecessor into the residual stream; the induction head then matches the current token against those records and copies the token that followed, so a sequence A, B, then A again predicts B. Induction heads form in a sharp phase change early in training, coinciding with a jump in in-context learning. The authors argue they may account for much in-context learning, but the evidence is strongest for small models and partly correlational.

## Related

- [[Circuit]]: the kind of mechanism it is
- [[Interpretability]]: the field that found it
- [[Zero-shot, One-shot and Few-shot]]: the in-context learning it helps explain
- [[Multi-head Attention]]: the heads it is built from
- [[Emergent Capabilities]]: an example of an abrupt change in training

---

Part of [[AI Terminology Index]], section: Language Models Specifically.
