---
title: "Interpretability"
tags:
  - glossary/ai
  - ai/practice
section: "Testing, Safeguarding and Running Models in Practice"
summary: "The effort to work out what is actually going on inside a model, rather than treating it as a sealed box that produces answers."
---

# Interpretability

## Plain View

The effort to work out what is actually going on inside a model, rather than treating it as a sealed box that produces answers. This matters because you cannot properly trust, debug or safeguard something whose reasoning you cannot inspect. It is one of the more scientifically interesting parts of the field and remains at an early stage relative to how capable the models have become.

## Technical View

Mechanistic interpretability seeks to identify specific circuits and features within networks and explain their function. A central obstacle is superposition, where a network represents more features than it has dimensions by encoding them in overlapping directions, making individual units difficult to interpret. Sparse autoencoders have proved a productive approach for decomposing activations into more interpretable features. Simpler behavioural methods such as attribution and probing are more widely used in practice but tell you far less about mechanism.

## Related

- [[Neural Network]]: the sealed box being opened
- [[Attention]]: heads with identifiable jobs as an early result
- [[Alignment]]: the safety case for wanting to see inside
- [[Chain of Thought]]: why stated reasoning is not the same as real reasoning
- [[Embeddings]]: features encoded in overlapping directions

---

Part of [[AI Terminology Index]], section: Testing, Safeguarding and Running Models in Practice.
