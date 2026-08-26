---
title: "Robotics and Embodied AI"
aliases:
  - "Robotics"
  - "Embodied AI"
tags:
  - glossary/ai
  - ai/adjacent
section: "Adjacent Fields"
summary: "AI in things that move and act physically."
---

# Robotics and Embodied AI

## Plain View

AI in things that move and act physically. Progress here has been much slower than in text and images, for a straightforward reason: the physical world offers no equivalent of the internet to learn from, mistakes are expensive, and the tolerances are unforgiving. Recent work applies foundation model methods to robot control, which is promising and considerably earlier than the demonstrations suggest.

## Technical View

The stack spans perception, state estimation, planning and control. Learning-based control is trained largely in simulation, which creates the sim-to-real gap that domain randomisation only partly addresses. Vision-language-action models trained on teleoperated demonstrations aim for general manipulation policies and are limited by data volume, since demonstrations are collected in real time by people. Moravec's paradox still holds: the reasoning tasks people find hard have proved easier to automate than the sensorimotor competence a toddler has.

## Related

- [[Reinforcement Learning]]: the dominant training approach
- [[Computer Vision]]: the perception half
- [[World Model]]: what planning depends on
- [[Multimodal]]: vision, language and action in one model
- [[Foundation Model]]: the method now being applied to control

---

Part of [[AI Terminology Index]], section: Adjacent Fields.
