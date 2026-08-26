---
title: "Steering Vector"
aliases:
  - "Activation Steering"
tags:
  - glossary/ai
  - ai/practice
section: "Testing, Safeguarding and Running Models in Practice"
summary: "Nudging a model's behaviour by adding a direction to its internal state at run time, rather than retraining it."
---

# Steering Vector

## Plain View

Nudging a model's behaviour by adding a direction to its internal state at run time, rather than retraining it. Add the direction associated with caution and the model becomes more cautious. It is a demonstration that these internal directions are real and usable, and a control mechanism in its own right.

## Technical View

Computed as the difference in mean activations between contrasting prompt sets, or taken from a dictionary feature, then added to the residual stream during inference with a tunable coefficient. Effects can be specific and dose-dependent, degrading coherence at high strength. Applications include behavioural control, refusal modification, and probing what a direction encodes. The same technique applied to remove refusal from open weights is a known safety concern.

## Related

- [[Feature (Interpretability Sense)]]: the direction being used
- [[Sparse Autoencoder]]: a source of usable directions
- [[Refusal and Over-refusal]]: refusal as a removable direction
- [[Open Weights]]: why this is a safety concern for published models
- [[Interpretability]]: control as an application of understanding

---

Part of [[AI Terminology Index]], section: Testing, Safeguarding and Running Models in Practice.
