---
title: "Interpolation and Extrapolation"
tags:
  - glossary/ai
  - ai/foundations
section: "The Foundations"
summary: "Filling in between examples you have seen, versus reaching beyond them."
---

# Interpolation and Extrapolation

## Plain View

Filling in between examples you have seen, versus reaching beyond them. Models are much better at the first than the second. Ask about a situation that sits comfortably inside the range of the training data and you generally get something sensible; ask about one outside it and confidence stays high while reliability quietly collapses.

## Technical View

In high dimensions the distinction is subtler than it sounds, since almost every new point is technically outside the convex hull of the training set, which has led some to argue the framing is misleading for deep learning. The practical version stands regardless: performance degrades with distance from the training distribution, degradation is not signalled by the model's own confidence, and out-of-distribution detection is a separate and unsolved problem.

## Related

- [[Generalisation]]: the broader property
- [[Drift]]: what happens when deployment moves outside the training range
- [[Robustness Testing]]: probing behaviour near the edges
- [[Curse of Dimensionality]]: why the distinction is subtler in high dimensions

---

Part of [[AI Terminology Index]], section: The Foundations.
