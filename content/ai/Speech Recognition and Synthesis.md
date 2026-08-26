---
title: "Speech Recognition and Synthesis"
aliases:
  - "Speech Recognition"
  - "Text to Speech"
tags:
  - glossary/ai
  - ai/adjacent
section: "Adjacent Fields"
summary: "Turning speech into text and text into speech."
---

# Speech Recognition and Synthesis

## Plain View

Turning speech into text and text into speech. Both have improved sharply: transcription now works well enough for meeting notes and subtitles across many languages, and synthetic voices are close enough to human that a voice is no longer evidence of identity. The remaining hard parts are noisy rooms, overlapping speakers and working out who said what.

## Technical View

Modern automatic speech recognition uses end-to-end sequence models trained on very large weakly supervised corpora, replacing the separate acoustic, pronunciation and language models of earlier systems. Word error rate remains the headline measure and degrades with accent, background noise and specialist vocabulary, which is where domain adaptation and custom vocabularies help. Speaker diarisation, deciding who spoke when, is a separate and harder problem. Synthesis uses neural vocoders with voice cloning from short samples, which is why consent and provenance now matter as much as quality.

## Related

- [[Multimodal]]: how speech is reaching general models
- [[Deepfake]]: what cheap voice cloning enabled
- [[Transformer]]: the architecture behind current systems
- [[Natural Language Processing]]: the neighbouring field
- [[Tokens]]: audio gets discretised much the same way

---

Part of [[AI Terminology Index]], section: Adjacent Fields.
