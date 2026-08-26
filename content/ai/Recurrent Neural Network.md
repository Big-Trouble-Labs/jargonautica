---
title: "Recurrent Neural Network"
aliases:
  - "RNN"
tags:
  - glossary/ai
  - ai/architectures
section: "Other Kinds of Neural Network"
summary: "The older approach to handling sequences such as sentences or time series."
---

# Recurrent Neural Network

## Plain View

The older approach to handling sequences such as sentences or time series. It reads one item at a time, carrying forward a running summary of everything it has seen. It works, but it struggles to hold on to information from far back, in much the same way you lose the thread of a very long spoken sentence.

## Technical View

RNNs maintain a hidden state updated at each step. Long short-term memory ('LSTM') and gated recurrent unit ('GRU') variants added gating mechanisms to mitigate vanishing gradients over long sequences. The fundamental limitation was that computation is inherently sequential, preventing efficient parallel training. This is precisely what transformers removed, and why they displaced RNNs almost entirely for language work.

## Related

- [[Transformer]]: what replaced it for language work
- [[Attention]]: the mechanism that made the replacement possible
- [[Neural Network]]: the general structure it specialises
- [[Context Window]]: the long-range memory problem it struggled with

---

Part of [[AI Terminology Index]], section: Other Kinds of Neural Network.
