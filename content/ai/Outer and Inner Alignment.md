---
title: "Outer and Inner Alignment"
aliases:
  - "Inner Alignment"
  - "Outer Alignment"
tags:
  - glossary/ai
  - ai/alignment
section: "Alignment and Safety Concepts"
summary: "A way of splitting the alignment problem into two parts."
---

# Outer and Inner Alignment

## Plain View

A way of splitting the alignment problem into two parts. Outer alignment asks whether the goal you wrote down, the score or reward used to train the system, actually captures what you want. Inner alignment asks whether the system that comes out of training has really adopted that goal, or has learned something different that merely scored well. A system can fail either test, and fixing one does not fix the other.

## Technical View

The terms come from Hubinger and colleagues' 2019 work on learned optimisation. Outer misalignment shows up as specification gaming: the objective is optimised and turns out to be wrong. Inner misalignment covers cases where the objective was right but the learned policy pursues a proxy, observed as goal misgeneralisation and hypothesised in its worst form as deceptive alignment. Techniques map roughly onto the split: better reward models and scalable oversight target the outer problem, while adversarial training, diverse training data and interpretability target the inner one. Some researchers, notably Alex Turner, argue the split makes the problem harder, because a loss shapes behaviour rather than being a goal to adopt.

## Related

- [[Alignment]]: the problem being split
- [[Reward Hacking and Specification Gaming]]: the typical outer failure
- [[Goal Misgeneralisation]]: the typical inner failure
- [[Mesa-optimisation]]: the framework the terms come from
- [[Scalable Oversight]]: a response to the outer problem
- [[Deceptive Alignment]]: the most serious hypothesised inner failure

---

Part of [[AI Terminology Index]], section: Alignment and Safety Concepts.
