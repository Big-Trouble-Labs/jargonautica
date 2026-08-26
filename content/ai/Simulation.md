---
title: "Simulation"
tags:
  - glossary/ai
  - ai/modalities
section: "Modalities and Applications"
summary: "Training or testing a system in a model of the world rather than the world itself, because the real thing is slow, expensive or dangerous."
---

# Simulation

## Plain View

Training or testing a system in a model of the world rather than the world itself, because the real thing is slow, expensive or dangerous. It is how robots learn to walk and how autonomous vehicles encounter rare situations. The difficulty is always the gap between the simulation and reality.

## Technical View

Enables massively parallel data collection and safe exploration of failure cases that cannot be sampled in the real world. The sim-to-real gap is addressed by domain randomisation over physical and visual parameters, system identification to match simulator dynamics to measurements, and fine-tuning on limited real data. Simulation is also increasingly used as an evaluation environment for agents, where determinism and resettability are the properties that make comparable measurement possible.

## Related

- [[3D Generation]]: where simulated assets come from
- [[Robotics and Embodied AI]]: the main application
- [[Environment]]: what simulation provides for agents
- [[Reinforcement Learning]]: where simulated experience is used
- [[Agent Evaluation]]: determinism and resettability
- [[Synthetic Data]]: simulated data as training material

---

Part of [[AI Terminology Index]], section: Modalities and Applications.
