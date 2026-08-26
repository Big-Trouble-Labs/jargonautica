---
title: "Speech to Speech"
aliases:
  - "Voice Mode"
tags:
  - glossary/ai
  - ai/modalities
section: "Modalities and Applications"
summary: "Talking to a system and being answered in speech, without text in the middle."
---

# Speech to Speech

## Plain View

Talking to a system and being answered in speech, without text in the middle. Removing the text step cuts the delay to something like a natural conversation and preserves tone and emphasis that transcription throws away. It is what makes voice interfaces feel like conversation rather than dictation.

## Technical View

End-to-end models process and generate audio tokens directly, avoiding the latency and information loss of a transcription, generation and synthesis chain. Requirements include streaming operation, interruption handling and turn-taking prediction. Preserving paralinguistic information such as emotion and emphasis is an advantage over cascaded systems, while text-based moderation and logging become harder, which has practical consequences for safety and audit.

## Related

- [[Speech Recognition and Synthesis]]: the cascaded alternative
- [[Audio Model]]: the underlying technology
- [[Latency, Throughput and Time to First Token]]: why latency defines the experience
- [[Content Moderation]]: harder without a text intermediate
- [[Conversational Interface]]: the interaction it enables

---

Part of [[AI Terminology Index]], section: Modalities and Applications.
