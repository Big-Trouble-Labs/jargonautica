---
title: "Byte Pair Encoding"
aliases:
  - "BPE"
  - "Tokeniser"
tags:
  - glossary/ai
  - ai/language-models
section: "Language Models Specifically"
summary: "The method that decides where words get split into tokens."
---

# Byte Pair Encoding

## Plain View

The method that decides where words get split into tokens. It starts with individual characters and repeatedly merges the most common pairs until it has a vocabulary of the required size. This is why common words are single tokens and unusual ones are fragments.

## Technical View

A greedy merge algorithm learned from the training corpus, producing a fixed vocabulary that can represent any input by falling back to smaller units. Byte-level variants operate on raw bytes, guaranteeing no unknown tokens and handling any script. Alternatives include WordPiece and Unigram. Tokeniser choice is effectively frozen at pre-training, and it determines cost, effective context and per-language efficiency for the model's whole life.

## Related

- [[Tokens]]: what it produces
- [[Vocabulary and Special Tokens]]: the fixed list it builds
- [[Language Coverage]]: why some languages tokenise inefficiently
- [[Embedding Layer]]: where tokens become vectors

---

Part of [[AI Terminology Index]], section: Language Models Specifically.
