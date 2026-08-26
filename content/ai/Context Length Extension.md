---
title: "Context Length Extension"
aliases:
  - "RoPE Scaling"
  - "Long Context"
tags:
  - glossary/ai
  - ai/language-models
section: "Language Models Specifically"
summary: "Making a model handle longer inputs than it was trained on."
---

# Context Length Extension

## Plain View

Making a model handle longer inputs than it was trained on. It is largely a matter of adjusting how position is encoded, and it works up to a point before quality quietly degrades. A model advertised at a million tokens has usually been extended, not trained, at that length.

## Technical View

Techniques interpolate or rescale rotary position embeddings, sometimes with frequency-dependent adjustment, often followed by brief fine-tuning at the longer length. Evaluation should go beyond needle-in-a-haystack retrieval to tasks requiring aggregation across distant passages, where extended models degrade first. Serving cost also rises sharply with length, so the practical limit is often economic rather than architectural.

## Related

- [[Positional Encoding]]: what is being rescaled
- [[Context Window]]: the limit being pushed
- [[Lost in the Middle]]: why longer is not always usable
- [[Cost Per Task]]: long context is expensive to serve

---

Part of [[AI Terminology Index]], section: Language Models Specifically.
