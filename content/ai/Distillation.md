---
title: "Distillation"
tags:
  - glossary/ai
  - ai/efficiency
section: "Making Models Smaller, Faster and Cheaper"
summary: "Training a small model to imitate a large one."
---

# Distillation

## Plain View

Training a small model to imitate a large one. The big model answers a great many questions, and the small model learns to produce the same answers. The result is a cheaper, faster model that retains much of the larger one's ability on the tasks it was distilled for. Most of the small, fast models offered commercially are produced this way.

## Technical View

A student model is trained on the teacher's full output distribution rather than only its final answers, since the relative probabilities across all options carry more information than the single top choice. Distillation transfers capability efficiently but tends to narrow it: students typically match teachers on the distribution they were distilled over and fall away faster on unusual or out-of-distribution inputs. Many model providers explicitly forbid using their outputs to train competing models.

## Related

- [[Quantisation]]: another route to a smaller, faster model
- [[Pruning]]: a third route to a smaller, faster model
- [[Synthetic Data]]: teacher output used as training material
- [[Training]]: the process the student goes through
- [[Mixture of Experts]]: a different answer to the same cost problem

---

Part of [[AI Terminology Index]], section: Making Models Smaller, Faster and Cheaper.
