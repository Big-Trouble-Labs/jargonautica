---
title: "Knowledge Cutoff"
tags:
  - glossary/ai
  - ai/runtime
section: "Controlling and Extending Behaviour at Run Time"
summary: "The date after which a model knows nothing, because its training data stopped there."
---

# Knowledge Cutoff

## Plain View

The date after which a model knows nothing, because its training data stopped there. Ask about events after that point and it will either say it does not know or, worse, confidently invent something. Many systems compensate by giving the model web search, but the underlying model itself remains frozen at its cutoff.

## Technical View

Coverage thins out well before the nominal cutoff date, since recent material is under-represented at collection time relative to how much will eventually exist about it. Models are also often poor at judging what they do and do not know about the boundary period. Retrieval and search tools are the standard mitigation, which shifts the problem to the reliability of retrieval rather than removing it.

## Related

- [[Pre-trained Model]]: knowledge is frozen when training ends
- [[Retrieval Augmented Generation]]: the standard way round it
- [[Tool Use and Function Calling]]: search as the other way round it
- [[Hallucination]]: what tends to happen past the cutoff
- [[Training]]: the run that sets the date

---

Part of [[AI Terminology Index]], section: Controlling and Extending Behaviour at Run Time.
