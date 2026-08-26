---
title: "Temperature and Sampling"
aliases:
  - "Temperature"
  - "Sampling"
tags:
  - glossary/ai
  - ai/runtime
section: "Controlling and Extending Behaviour at Run Time"
summary: "The dial controlling how predictable a model's output is."
---

# Temperature and Sampling

## Plain View

The dial controlling how predictable a model's output is. At a low setting it consistently picks the most likely next word, giving reliable, repeatable and rather plain output. Turn it up and it takes more chances, producing more varied and creative text but also more errors and nonsense. Low for factual work and code, higher for brainstorming and creative writing.

## Technical View

Temperature scales the logits before the softmax, flattening or sharpening the probability distribution over next tokens. Related controls include top-k sampling, restricting choice to the k most likely tokens, and top-p or nucleus sampling, restricting to the smallest set whose cumulative probability exceeds p. Note that even at temperature zero, output is not guaranteed to be perfectly reproducible in practice, because of floating point non-determinism and batching effects on parallel hardware.

## Related

- [[Inference]]: the stage these settings apply at
- [[Tokens]]: what is being chosen between at each step
- [[Hallucination]]: higher settings make invention more likely
- [[Structured Output]]: low settings are the norm for machine-readable answers
- [[Chain of Thought]]: reasoning quality is sensitive to these settings

---

Part of [[AI Terminology Index]], section: Controlling and Extending Behaviour at Run Time.
