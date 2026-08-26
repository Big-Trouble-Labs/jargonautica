---
title: "Heuristic"
tags:
  - glossary/ai
  - ai/foundations
section: "The Foundations"
summary: "A rule of thumb that usually works and is not guaranteed to."
---

# Heuristic

## Plain View

A rule of thumb that usually works and is not guaranteed to. Estimating a journey by distance rather than calculating every route is a heuristic. They are everywhere in practical systems because exact answers are often unaffordable, and they fail in predictable ways at the edges, which is worth knowing before you rely on one.

## Technical View

In search, an estimate of the remaining cost to a goal, used to prioritise which branches to explore; admissible heuristics never overestimate and preserve optimality guarantees in algorithms such as A star. More loosely, any approximation adopted for tractability. Much of what looks like intelligence in deployed systems is careful heuristic engineering around a model, and the heuristics are usually where the failures come from.

## Related

- [[Search and Optimisation]]: where heuristics do their main work
- [[Algorithm]]: the exact counterpart
- [[Inductive Bias]]: an assumption serving the same purpose in learning
- [[No Free Lunch Theorem]]: why assumptions are unavoidable

---

Part of [[AI Terminology Index]], section: The Foundations.
