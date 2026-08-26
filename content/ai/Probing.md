---
title: "Probing"
tags:
  - glossary/ai
  - ai/practice
section: "Testing, Safeguarding and Running Models in Practice"
summary: "Testing whether some piece of information is present inside a model by training a small classifier on its internal activations."
---

# Probing

## Plain View

Testing whether some piece of information is present inside a model by training a small classifier on its internal activations. If a simple probe can read the answer off the internal state, the model represented it somewhere, even if the output never mentions it.

## Technical View

A supervised classifier trained on frozen intermediate representations. The central caveat is that probe success shows information is decodable, not that the model uses it, which is why control tasks and comparisons against randomly initialised baselines are needed to distinguish genuine representation from probe capacity. Probes are used to trace where information appears across layers, and for lightweight runtime monitoring of internal states.

## Related

- [[Interpretability]]: the field
- [[Feature (Interpretability Sense)]]: what probes look for
- [[Activation Patching]]: the causal counterpart
- [[World Model]]: probing as the main evidence for internal structure

---

Part of [[AI Terminology Index]], section: Testing, Safeguarding and Running Models in Practice.
