---
title: "Long Short-Term Memory"
aliases:
  - "LSTM"
tags:
  - glossary/ai
  - ai/architectures
section: "Other Kinds of Neural Network"
summary: "A kind of neural network designed to remember information over long stretches of a sequence, such as words in a sentence or readings over time."
---

# Long Short-Term Memory

## Plain View

A kind of neural network designed to remember information over long stretches of a sequence, such as words in a sentence or readings over time. Earlier networks of this type tended to forget after a few steps. Long Short-Term Memory ('LSTM') networks add small gates that decide what to keep, what to forget and what to pass on, and they powered speech recognition and translation for years before transformers took over.

## Technical View

A Recurrent Neural Network ('RNN') variant introduced by Hochreiter and Schmidhuber in 1997. A cell state carries information forward through mostly additive updates, controlled by sigmoid input and output gates and, from Gers and colleagues in 2000, a forget gate; the additive path lets gradients survive many steps and mitigates vanishing gradients. Variants include peephole connections and the simpler Gated Recurrent Unit ('GRU'). Strengths are constant memory per step and natural streaming; weaknesses are sequential computation that resists parallel training and weaker long-range recall than attention. Recurrent ideas have returned through state space models.

## Related

- [[Recurrent Neural Network]]: the family it belongs to
- [[Vanishing and Exploding Gradients]]: the problem it was designed to solve
- [[Transformer]]: the architecture that displaced it
- [[State Space Model]]: a modern recurrent successor
- [[Time Series Forecasting]]: where it remains common

---

Part of [[AI Terminology Index]], section: Other Kinds of Neural Network.
