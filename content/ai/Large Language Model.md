---
title: "Large Language Model"
aliases:
  - "LLM"
tags:
  - glossary/ai
  - ai/language-models
section: "Language Models Specifically"
summary: "A very large neural network trained to predict the next word in a piece of text."
---

# Large Language Model

## Plain View

A very large neural network trained to predict the next word in a piece of text. That is genuinely all the training objective is. Reading an enormous quantity of writing and getting steadily better at that one prediction task turns out to require picking up grammar, facts, reasoning patterns, tone and style along the way, because all of those help you guess what comes next. The capability is a by-product of the prediction task, not something programmed in.

## Technical View

Pre-training is self-supervised next-token prediction over a very large corpus, typically trillions of tokens, using a transformer architecture. The resulting base model is a raw text continuer, not an assistant. Turning it into something conversational requires further stages, usually instruction tuning followed by preference-based training. Capabilities that were not explicitly trained for, such as multi-step reasoning or translation between language pairs never paired in training, appear as scale increases, which remains only partly understood.

## Related

- [[Transformer]]: the architecture it is built on
- [[Tokens]]: the units it actually predicts
- [[Context Window]]: how much it can hold in view
- [[Foundation Model]]: the wider category it belongs to
- [[Hallucination]]: the failure mode that follows from prediction
- [[Training]]: the pre-training that produces it

---

Part of [[AI Terminology Index]], section: Language Models Specifically.
