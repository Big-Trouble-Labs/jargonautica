---
title: "Activation Patching"
aliases:
  - "Causal Tracing"
tags:
  - glossary/ai
  - ai/practice
section: "Testing, Safeguarding and Running Models in Practice"
summary: "Running the model twice on slightly different inputs, then copying an internal value from one run into the other and seeing whether the output changes."
---

# Activation Patching

## Plain View

Running the model twice on slightly different inputs, then copying an internal value from one run into the other and seeing whether the output changes. It establishes cause rather than correlation, which is what separates real mechanistic claims from plausible stories.

## Technical View

Also called causal tracing or interchange intervention. Replaces activations at a chosen component with those from a counterfactual run and measures the effect on the output logits, localising which components carry the relevant information. Variants include denoising and noising directions, and path patching, which isolates specific routes between components. It is the standard causal method underlying circuit discovery.

## Related

- [[Circuit]]: what it is used to discover
- [[Interpretability]]: the field
- [[Probing]]: the correlational counterpart
- [[Causal Inference]]: intervention as the source of causal claims

---

Part of [[AI Terminology Index]], section: Testing, Safeguarding and Running Models in Practice.
