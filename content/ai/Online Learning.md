---
title: "Online Learning"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "Updating the model continuously as new data arrives, rather than retraining in batches."
---

# Online Learning

## Plain View

Updating the model continuously as new data arrives, rather than retraining in batches. Suits fast-moving environments such as recommendation, pricing and fraud, where yesterday's model is already stale. The cost is that the system can be moved by whatever arrives next, including deliberately.

## Technical View

Incremental parameter updates on streaming data, evaluated by regret against the best fixed hypothesis in hindsight. Practical concerns include catastrophic forgetting, sensitivity to non-stationarity, and the difficulty of rollback once bad data has been absorbed. It also creates a poisoning surface: an adversary who can generate traffic can steer the model. Most production systems prefer frequent scheduled retraining with validation gates.

## Related

- [[Data Poisoning]]: continuous updating is a steering opportunity
- [[Drift]]: the problem it responds to
- [[Catastrophic Forgetting]]: the risk of continuous updates
- [[Multi-armed Bandit]]: the classic online decision setting
- [[Rollback]]: why continuous learning is hard to undo

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.
