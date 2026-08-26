---
title: "Reasoning Models and Test-Time Compute"
aliases:
  - "Reasoning Models"
  - "Test-Time Compute"
tags:
  - glossary/ai
  - ai/runtime
section: "Controlling and Extending Behaviour at Run Time"
summary: "A newer class of model that spends longer thinking before answering, sometimes working through a problem at length internally before producing a response."
---

# Reasoning Models and Test-Time Compute

## Plain View

A newer class of model that spends longer thinking before answering, sometimes working through a problem at length internally before producing a response. They cost more and take longer, but do markedly better on hard problems in mathematics, coding and logic. For simple questions they are usually overkill.

## Technical View

The insight is that quality can be bought with inference-time computation rather than only with training-time scale. These models are typically trained with reinforcement learning on verifiable tasks where correctness can be checked automatically. Techniques include extended internal reasoning, sampling multiple candidate solutions and selecting among them, and iterative self-correction. The trade-off is a substantial rise in latency and token cost, and the gains are concentrated in domains with checkable answers.

## Related

- [[Chain of Thought]]: the technique these models internalise
- [[Inference]]: where the extra computation is spent
- [[Compute]]: the resource being traded for quality
- [[Reinforcement Learning]]: how they are trained on checkable tasks
- [[Agent]]: multi-step work these models suit
- [[Benchmarks and Evals]]: where their advantage shows up

---

Part of [[AI Terminology Index]], section: Controlling and Extending Behaviour at Run Time.
