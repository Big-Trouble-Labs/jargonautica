---
title: "Scaling Laws"
aliases:
  - "Scaling Law"
tags:
  - glossary/ai
  - ai/hardware
section: "Hardware, Compute and Training Mechanics"
summary: "The observed finding that models get predictably better as you increase their size, the amount of data they see, and the computing power spent on training, all together."
---

# Scaling Laws

## Plain View

The observed finding that models get predictably better as you increase their size, the amount of data they see, and the computing power spent on training, all together. This predictability is why organisations have been willing to commit enormous sums to single training runs: the improvement can be forecast reasonably well in advance.

## Technical View

Empirical power-law relationships between loss and model size, dataset size and compute. Later work established that earlier models were substantially under-trained on data relative to their parameter count, shifting practice towards smaller models trained on far more tokens. Scaling laws predict loss, which is not the same as predicting downstream capability, and there is active debate about where and whether they flatten out.

## Related

- [[Compute]]: one of the three quantities being scaled
- [[Training]]: what the laws are used to plan
- [[Emergent Capabilities]]: the part scaling does not predict
- [[Deep Learning]]: the field these laws describe
- [[Large Language Model]]: where they have been applied hardest

---

Part of [[AI Terminology Index]], section: Hardware, Compute and Training Mechanics.
