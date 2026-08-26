---
title: "Corrigibility"
tags:
  - glossary/ai
  - ai/alignment
section: "Alignment and Safety Concepts"
summary: "A system that lets you correct it."
---

# Corrigibility

## Plain View

A system that lets you correct it. It accepts being shut down, does not resist changes to its objectives, and does not manipulate the people supervising it. Easy to state and awkward to specify, because a system with any goal has a reason to avoid being stopped from pursuing it.

## Technical View

The difficulty is that shutdown-acceptance conflicts with goal achievement for a straightforward utility-maximising agent, and naive fixes such as indifference create their own pathologies including incentives to cause shutdown. Approaches include uncertainty over the objective, so that human correction is evidence rather than obstruction, and training explicitly for deference. Empirically, current models sometimes exhibit shutdown-avoidance in constructed evaluations, which is closely watched.

## Related

- [[Alignment]]: the property being sought
- [[Instrumental Convergence]]: why it conflicts with goal pursuit
- [[Human in the Loop]]: the practical version of correction
- [[Scalable Oversight]]: supervision that a system must accept
- [[Deceptive Alignment]]: apparent corrigibility that is not real

---

Part of [[AI Terminology Index]], section: Alignment and Safety Concepts.
