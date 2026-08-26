---
title: "Context Window"
tags:
  - glossary/ai
  - ai/language-models
section: "Language Models Specifically"
summary: "How much text a model can hold in view at once, counting both what you have sent and what it has replied."
---

# Context Window

## Plain View

How much text a model can hold in view at once, counting both what you have sent and what it has replied. Once a conversation exceeds it, the earliest material falls out of view and the model genuinely no longer has access to it. This is why very long chats start losing track of things established at the beginning.

## Technical View

The limit exists because attention cost grows with the square of sequence length, so doubling context roughly quadruples the compute required. Various techniques have pushed practical limits from a few thousand tokens to hundreds of thousands. A large window is not the same as reliable use of it: models often show a 'lost in the middle' effect, attending well to the beginning and end of a long input while under-weighting material in the middle. Nothing persists between separate conversations unless it is deliberately stored and re-supplied.

## Related

- [[Tokens]]: the unit the window is measured in
- [[Attention]]: the mechanism whose cost sets the limit
- [[Retrieval Augmented Generation]]: how you get around a fixed window
- [[Caching]]: how repeated context is made cheaper
- [[Knowledge Cutoff]]: the other limit on what a model can know

---

Part of [[AI Terminology Index]], section: Language Models Specifically.
