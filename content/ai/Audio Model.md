---
title: "Audio Model"
tags:
  - glossary/ai
  - ai/modalities
section: "Modalities and Applications"
summary: "Models that work with sound beyond speech: identifying what is making a noise, detecting faults in machinery from how it sounds, separating overlapping sources, and generating sound effects."
---

# Audio Model

## Plain View

Models that work with sound beyond speech: identifying what is making a noise, detecting faults in machinery from how it sounds, separating overlapping sources, and generating sound effects. Less discussed than the language and image work and useful in industrial and accessibility settings.

## Technical View

Operate either on spectrogram representations with vision-style architectures or on raw waveforms with neural codecs producing discrete audio tokens suitable for transformer modelling. Tasks include classification, event detection, source separation and generation. Neural audio codecs are the enabling component for token-based audio generation, and the same tokenisation approach underpins speech-to-speech models.

## Related

- [[Speech Recognition and Synthesis]]: the speech-specific case
- [[Multimodal]]: the wider capability
- [[Speech to Speech]]: token-based audio generation
- [[Music Generation]]: the creative application

---

Part of [[AI Terminology Index]], section: Modalities and Applications.
