---
title: "Determinism and Seed"
aliases:
  - "Seed"
  - "Determinism"
tags:
  - glossary/ai
  - ai/production
section: "Running It in Production"
summary: "Why the same prompt gives different answers even at the lowest temperature setting."
---

# Determinism and Seed

## Plain View

Why the same prompt gives different answers even at the lowest temperature setting. Partly it is sampling, and partly it is that the arithmetic on a graphics chip depends on how requests happened to be grouped together, which changes moment to moment.

## Technical View

Temperature zero makes token selection deterministic in principle, but floating-point addition is not associative and reduction order varies with batch composition and kernel selection, so identical inputs can diverge. Seeds control the sampler and not the numerics. Some providers offer best-effort determinism with a system fingerprint indicating when the backend changed. Applications requiring identical outputs should cache the response rather than expect regeneration to match.

## Related

- [[Reproducibility]]: the property it partially supports
- [[Greedy Decoding]]: deterministic in principle only
- [[Continuous Batching]]: batch composition changes the numerics
- [[Temperature and Sampling]]: the deliberate source of variation

---

Part of [[AI Terminology Index]], section: Running It in Production.
