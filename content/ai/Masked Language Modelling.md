---
title: "Masked Language Modelling"
aliases:
  - "MLM"
  - "Masked Language Model"
tags:
  - glossary/ai
  - ai/language-models
section: "Language Models Specifically"
summary: "A way of training a language model by hiding some words in a sentence and asking it to guess them from the words on both sides."
---

# Masked Language Modelling

## Plain View

A way of training a language model by hiding some words in a sentence and asking it to guess them from the words on both sides. Shown 'the cat sat on the ...', it learns to fill in 'mat'. Because it sees the text before and after each gap, it builds a rich understanding of language, which suits tasks like search and sorting documents better than writing new text.

## Technical View

A self-supervised objective popularised by Bidirectional Encoder Representations from Transformers ('BERT') in 2018: about 15 per cent of tokens are selected, most replaced with a mask token, some with random tokens and some left unchanged, and the encoder predicts the originals under cross-entropy loss. Bidirectional context yields strong representations for classification, retrieval and entity tagging, but each pass learns only from the masked fraction of tokens and the objective does not directly support left-to-right generation. Variants include whole-word and span masking, replaced token detection, and diffusion-style text models that unmask iteratively.

## Related

- [[Self-supervised Learning]]: the training family it belongs to
- [[Encoder, Decoder and Encoder-Decoder]]: the encoder models it trains
- [[Autoregressive Generation]]: the next-word alternative
- [[Pre-training]]: the stage where it is used
- [[Embeddings]]: a common product of encoder models

---

Part of [[AI Terminology Index]], section: Language Models Specifically.
