---
title: "World Model"
aliases:
  - "World Models"
tags:
  - glossary/ai
  - ai/adjacent
section: "Adjacent Fields"
summary: "An internal model of how things work that lets a system predict what happens next and plan accordingly."
---

# World Model

## Plain View

An internal model of how things work that lets a system predict what happens next and plan accordingly. Whether current language models have anything of the sort is genuinely contested: they clearly represent some structure about the world, since that helps prediction, but whether that amounts to a coherent model or a very large collection of useful correlations is unresolved, and it matters for what one should expect them to be able to do.

## Technical View

In reinforcement learning, a world model is an explicit learned dynamics model used for planning and imagined rollouts, as in the Dreamer line of work, and it improves sample efficiency substantially. For language models, evidence of implicit world models comes from probing studies that recover structured representations such as board state or spatial coordinates from activations, balanced against failures showing incoherent representations that produce correct outputs on the training distribution and break outside it. Video generation models are increasingly framed as world models, which is a strong claim that current evaluation does not settle.

## Related

- [[Robotics and Embodied AI]]: where explicit world models are used
- [[Reinforcement Learning]]: the setting they were developed in
- [[Interpretability]]: how the evidence for implicit ones is gathered
- [[Emergent Capabilities]]: the related claim about what scale produces
- [[Diffusion Model]]: video generation framed as world modelling

---

Part of [[AI Terminology Index]], section: Adjacent Fields.
