---
title: "Feature Store"
tags:
  - glossary/ai
  - ai/production
section: "Running It in Production"
summary: "A shared place where the calculated inputs to models live, so that the same definition is used when training and when running live."
---

# Feature Store

## Plain View

A shared place where the calculated inputs to models live, so that the same definition is used when training and when running live. The classic failure without one is that the training pipeline and the production system compute 'customer tenure' slightly differently, and nobody notices until performance is poor.

## Technical View

Provides an offline store for training data with point-in-time correctness, ensuring features reflect only information available at the historical prediction moment, and an online store for low-latency serving, both generated from a single definition to prevent training-serving skew. Includes versioning, backfill and monitoring per feature. It is heavy infrastructure and warranted mainly where many models share features or point-in-time correctness is difficult to get right by hand.

## Related

- [[Feature Engineering]]: the definitions it holds
- [[Data Pipeline]]: how features are produced
- [[Data Leakage]]: point-in-time correctness prevents one form
- [[Machine Learning Operations]]: the practice it belongs to

---

Part of [[AI Terminology Index]], section: Running It in Production.
