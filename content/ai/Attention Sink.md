---
title: "Attention Sink"
aliases:
  - "Attention Sinks"
tags:
  - glossary/ai
  - ai/language-models
section: "Language Models Specifically"
summary: "The habit language models have of directing a large share of their attention to the first few words of a text, even when those words carry little meaning."
---

# Attention Sink

## Plain View

The habit language models have of directing a large share of their attention to the first few words of a text, even when those words carry little meaning. Attention is the step where a model weighs which earlier words matter, and the weights must add up to one, so spare attention needs somewhere to go and the opening words become a parking spot. Dropping them from memory can make a model's output fall apart.

## Technical View

Named by Xiao and colleagues in 2023, who found that window attention, which evicts the oldest keys and values from the cache, collapses once the initial tokens are dropped. Softmax forces each query to distribute a full unit of weight, and models learn to dump surplus weight on early positions that every later token can see. Their StreamingLLM method keeps a handful of initial sink tokens plus a recent window, giving stable generation over millions of tokens without fine-tuning, and they showed that a dedicated learnable sink token added during pre-training helps further. Similar sinks appear in vision transformers, where extra register tokens absorb them.

## Related

- [[Attention]]: the mechanism that produces it
- [[Logits and Softmax]]: why the weights must go somewhere
- [[Caching]]: why the first tokens must stay cached
- [[Context Length Extension]]: a related long-context concern
- [[Streaming]]: the setting where it matters most

---

Part of [[AI Terminology Index]], section: Language Models Specifically.
