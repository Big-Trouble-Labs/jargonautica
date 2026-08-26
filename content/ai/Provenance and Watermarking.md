---
title: "Provenance and Watermarking"
aliases:
  - "Watermarking"
  - "C2PA"
  - "Content Credentials"
tags:
  - glossary/ai
  - ai/governance
section: "Governance, Law and Regulation"
summary: "Techniques for marking content as machine-generated so it can be recognised later."
---

# Provenance and Watermarking

## Plain View

Techniques for marking content as machine-generated so it can be recognised later. The Coalition for Content Provenance and Authenticity ('C2PA') defines a standard for attaching a signed record of how a file was made, and some models embed statistical watermarks in what they produce. Both help; neither is a solution, because a determined party can strip provenance data and the absence of a mark proves nothing.

## Technical View

C2PA content credentials are cryptographically signed manifests carried in file metadata, robust to inspection but easily removed by re-encoding or screenshotting unless durable variants are used. Statistical watermarking for text biases token selection within a secret partition so a detector can identify machine generation at a stated false positive rate; it survives light editing and degrades under paraphrase. Post-hoc detectors that classify text as AI-generated without a watermark are unreliable and produce false accusations, particularly against people writing in a second language, and should not be used for consequential decisions.

## Related

- [[Deepfake]]: the harm this is meant to limit
- [[Copyright and Training Data]]: the ownership side of the same question
- [[Transparency and Disclosure Obligations]]: the regulation driving adoption
- [[Synthetic Data]]: knowing what is machine-made matters for training too

---

Part of [[AI Terminology Index]], section: Governance, Law and Regulation.
