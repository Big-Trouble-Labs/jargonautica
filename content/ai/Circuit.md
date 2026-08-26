---
title: "Circuit"
tags:
  - glossary/ai
  - ai/practice
section: "Testing, Safeguarding and Running Models in Practice"
summary: "A mechanism inside a model that spans several components and performs an identifiable job, such as tracking which name was mentioned earlier so it can be repeated later."
---

# Circuit

## Plain View

A mechanism inside a model that spans several components and performs an identifiable job, such as tracking which name was mentioned earlier so it can be repeated later. Finding these is the closest thing to reading a model's source code.

## Technical View

A subgraph of components, typically attention heads and feed-forward layers, whose interaction implements a specific behaviour, identified by activation patching and path analysis and validated by ablation. Documented examples include induction heads, which copy patterns seen earlier and are strongly associated with in-context learning, and indirect object identification. Circuit analysis scales poorly to full models, which is why automated circuit discovery is an active area.

## Related

- [[Activation Patching]]: the method used to find them
- [[Interpretability]]: the field
- [[Attention]]: induction heads as the best known example
- [[Residual Connection]]: the stream circuits read and write
- [[Feature (Interpretability Sense)]]: the units circuits connect

---

Part of [[AI Terminology Index]], section: Testing, Safeguarding and Running Models in Practice.
