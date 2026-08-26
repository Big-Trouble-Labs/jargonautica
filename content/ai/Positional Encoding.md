---
title: "Positional Encoding"
tags:
  - glossary/ai
  - ai/language-models
section: "Language Models Specifically"
summary: "How a transformer knows what order the words came in."
---

# Positional Encoding

## Plain View

How a transformer knows what order the words came in. Attention by itself is order-blind: without extra help, 'the dog bit the man' and 'the man bit the dog' look identical to it. Positional encoding adds information about each token's place in the sequence, and the details of how it is done are a large part of why context windows have been able to grow so much.

## Technical View

Original transformers added fixed sinusoidal vectors to token embeddings. Learned absolute positions followed, then relative schemes, and rotary position embedding ('RoPE') is now standard, rotating query and key vectors by an angle proportional to position so that attention depends on relative distance. Extending context beyond the trained length is largely a matter of interpolating or scaling these encodings, which works but degrades quality if pushed too far.

## Related

- [[Transformer]]: the architecture that needs this
- [[Attention]]: order-blind without it
- [[Context Window]]: extending it is largely a positional encoding problem
- [[Tokens]]: what gets a position

---

Part of [[AI Terminology Index]], section: Language Models Specifically.
