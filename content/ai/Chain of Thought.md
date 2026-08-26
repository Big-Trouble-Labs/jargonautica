---
title: "Chain of Thought"
tags:
  - glossary/ai
  - ai/runtime
section: "Controlling and Extending Behaviour at Run Time"
summary: "Getting the model to work through a problem step by step before giving its answer, rather than jumping straight to a conclusion."
---

# Chain of Thought

## Plain View

Getting the model to work through a problem step by step before giving its answer, rather than jumping straight to a conclusion. It improves accuracy noticeably on anything involving reasoning, arithmetic or multiple stages, for much the same reason that showing your working helps a person avoid careless mistakes.

## Technical View

Intermediate reasoning tokens give the model more computation to allocate to a problem and let it condition on its own partial results. An important caveat is that the stated reasoning is not a reliable account of the underlying process: models can produce plausible reasoning that does not correspond to how the answer was actually reached, so a chain of thought should not be treated as an audit trail.

## Related

- [[Reasoning Models and Test-Time Compute]]: models that do this internally by default
- [[Prompt Engineering]]: the craft this technique belongs to
- [[Interpretability]]: stated reasoning is not a reliable account of the real process
- [[Zero-shot, One-shot and Few-shot]]: often combined with worked examples
- [[Tokens]]: reasoning steps cost tokens

---

Part of [[AI Terminology Index]], section: Controlling and Extending Behaviour at Run Time.
