---
title: "No Free Lunch Theorem"
tags:
  - glossary/ai
  - ai/foundations
section: "The Foundations"
summary: "The result that no learning method is best at everything."
---

# No Free Lunch Theorem

## Plain View

The result that no learning method is best at everything. Averaged across all possible problems, every approach performs the same, so any method that does well on the problems we care about does so by making assumptions that happen to fit them. It is the formal reason to be sceptical of claims that one technique is universally superior.

## Technical View

Wolpert and Macready's result concerns performance averaged over all possible objective functions, a set dominated by structureless ones that never occur in practice. The useful reading is not that method choice is arbitrary but that it is an empirical question about which inductive biases match your domain. It is frequently invoked more loosely than the theorem supports.

## Related

- [[Inductive Bias]]: the assumptions that let a method win on real problems
- [[Baseline]]: why simple methods must always be tried
- [[Machine Learning]]: the field the theorem constrains
- [[Heuristic]]: the practical consequence

---

Part of [[AI Terminology Index]], section: The Foundations.
