---
title: "Mesa-optimisation"
aliases:
  - "Mesa-optimiser"
  - "Learned Optimisation"
tags:
  - glossary/ai
  - ai/alignment
section: "Alignment and Safety Concepts"
summary: "The hypothesis that training can produce a model that is itself an optimiser, internally searching for ways to achieve some goal, and that this learned goal need not be the one the training process was aiming for."
---

# Mesa-optimisation

## Plain View

The hypothesis that training can produce a model that is itself an optimiser, internally searching for ways to achieve some goal, and that this learned goal need not be the one the training process was aiming for. The authors coined 'mesa' as the opposite of 'meta', glossing it as Greek for below (the Greek word actually means inside): training optimises the model, and the model may in turn optimise something else. Whether today's models do this in any meaningful sense is debated.

## Technical View

Introduced by Hubinger, van Merwijk, Mikulik, Skalse and Garrabrant in 2019. Gradient descent is the base optimiser, pursuing the base objective set by the loss; if it produces a model that performs internal search or planning, that model is a mesa-optimiser with its own mesa-objective. Because many objectives fit the training data, the mesa-objective may be a proxy, and a capable mesa-optimiser aware of training could behave well instrumentally, which is the origin of the deceptive alignment argument. Critics argue that current networks are better described as bundles of learned heuristics than coherent optimisers, and that the framing assumes more goal-directedness than has been shown.

## Related

- [[Outer and Inner Alignment]]: the distinction it introduced
- [[Deceptive Alignment]]: its most worrying consequence
- [[Goal Misgeneralisation]]: the observed behaviour it would explain
- [[Gradient Descent]]: the base optimiser in the framing
- [[Search and Optimisation]]: what the learned model would be doing internally

---

Part of [[AI Terminology Index]], section: Alignment and Safety Concepts.
