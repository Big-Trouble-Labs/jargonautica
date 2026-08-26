---
title: "Tokens"
aliases:
  - "Token"
  - "Tokenisation"
tags:
  - glossary/ai
  - ai/language-models
section: "Language Models Specifically"
summary: "The small chunks of text a model actually works with."
---

# Tokens

## Plain View

The small chunks of text a model actually works with. A token is roughly a short word or part of a longer one, averaging about four characters in English. 'Understanding' might be split into 'under' and 'standing'. Everything is measured in tokens, including limits and pricing, which is why costs are quoted per million tokens.

## Technical View

Tokenisation uses subword algorithms such as byte pair encoding, which builds a fixed vocabulary from the most frequent character sequences in the training data. This keeps the vocabulary manageable while still handling any input, including invented words and typos, by breaking them into smaller pieces. It also explains several well known model weaknesses: counting letters in a word, or reversing a string, is awkward for a system that never sees individual characters. Languages under-represented in the training data often tokenise less efficiently, meaning the same content costs more and consumes more context.

## Related

- [[Context Window]]: measured in these
- [[Large Language Model]]: predicts one of these at a time
- [[Embeddings]]: what tokens get turned into
- [[Inference]]: generation happens one token per step
- [[Compute]]: cost and pricing are counted in tokens

---

Part of [[AI Terminology Index]], section: Language Models Specifically.
