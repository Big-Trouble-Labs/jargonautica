---
title: "Grokking"
tags:
  - glossary/ai
  - ai/post-training
section: "Training and Post-training"
summary: "A strange phenomenon where a model appears to have simply memorised its training data, then, if you keep training it long after that point, suddenly generalises."
---

# Grokking

## Plain View

A strange phenomenon where a model appears to have simply memorised its training data, then, if you keep training it long after that point, suddenly generalises. It suggests that memorisation and understanding are distinct processes and that one can follow the other, which is unsettling for how training is usually stopped.

## Technical View

Observed on small algorithmic tasks, where test accuracy jumps from chance to near-perfect long after training accuracy saturates. Explanations centre on weight decay driving a transition from a memorising to a generalising circuit, with interpretability work identifying the emergence of structured representations at the transition. It is mainly of theoretical interest, and it complicates the assumption that training loss plateauing means learning has finished.

## Related

- [[Generalisation]]: the transition it demonstrates
- [[Overfitting]]: memorisation as an apparent endpoint
- [[Double Descent]]: the other counterintuitive scaling result
- [[Interpretability]]: circuits emerging at the transition

---

Part of [[AI Terminology Index]], section: Training and Post-training.
