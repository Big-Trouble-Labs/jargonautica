---
title: "Symbolic AI and Expert Systems"
aliases:
  - "Symbolic AI"
  - "Expert Systems"
  - "GOFAI"
tags:
  - glossary/ai
  - ai/adjacent
section: "Adjacent Fields"
summary: "The older approach to AI, based on writing down rules and facts explicitly rather than learning them from data."
---

# Symbolic AI and Expert Systems

## Plain View

The older approach to AI, based on writing down rules and facts explicitly rather than learning them from data. It dominated the field into the 1990s, produced genuinely useful systems for diagnosis and configuration, and ran into the difficulty that the rules have to be extracted from experts and maintained by hand, which does not scale. It is worth knowing about because its strengths, transparency and guaranteed consistency, are exactly what learned systems lack.

## Technical View

Comprises logic programming, production rule systems with forward and backward chaining, planners and constraint solvers. Its decline came from the knowledge acquisition bottleneck and brittleness at the edges of the encoded rules, not from any flaw in the reasoning itself. Symbolic components remain standard in production as constraint checkers, planners and business rule engines, and neuro-symbolic approaches that use a language model to translate natural language into a formal representation for a solver combine the flexibility of one with the guarantees of the other.

## Related

- [[Artificial Intelligence]]: the field's other half
- [[Knowledge Graph]]: the surviving descendant
- [[Interpretability]]: the property learned systems lack
- [[Machine Learning]]: the approach that displaced it
- [[Structured Output]]: how models now talk to symbolic tools

---

Part of [[AI Terminology Index]], section: Adjacent Fields.
