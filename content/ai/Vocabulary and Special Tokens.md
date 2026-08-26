---
title: "Vocabulary and Special Tokens"
aliases:
  - "Vocabulary"
  - "Special Tokens"
tags:
  - glossary/ai
  - ai/language-models
section: "Language Models Specifically"
summary: "The fixed list of tokens a model knows, plus a handful of markers that are not words at all: start of text, end of turn, and similar."
---

# Vocabulary and Special Tokens

## Plain View

The fixed list of tokens a model knows, plus a handful of markers that are not words at all: start of text, end of turn, and similar. Those markers are how a plain text predictor gets structured into a conversation, and getting them wrong is a common cause of strange behaviour.

## Technical View

Vocabulary size trades embedding parameters and softmax cost against sequence length, with modern models typically using between 32,000 and 256,000 entries; larger vocabularies improve multilingual efficiency. Special tokens delimit roles, turns and tool calls, and are usually reserved so user text cannot forge them, though inadequate reservation has been a real source of prompt injection.

## Related

- [[Byte Pair Encoding]]: how the vocabulary is built
- [[Chat Template]]: where special tokens are used
- [[Tokens]]: the units themselves
- [[Prompt Injection]]: forged markers as an attack route

---

Part of [[AI Terminology Index]], section: Language Models Specifically.
