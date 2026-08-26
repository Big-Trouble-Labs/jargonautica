---
title: "Grounding and Citation"
aliases:
  - "Grounding"
  - "Citation"
tags:
  - glossary/ai
  - ai/retrieval
section: "Retrieval and Knowledge"
summary: "Tying every claim in an answer to the source it came from, and showing the user."
---

# Grounding and Citation

## Plain View

Tying every claim in an answer to the source it came from, and showing the user. It is the main defence against invented answers, because a claim with no source is visibly unsupported, and it turns the system from something you have to trust into something you can check.

## Technical View

Implemented by requiring span-level or chunk-level references in the output, validated post-generation by checking that cited sources exist and support the claim, often with a separate entailment check. Failure modes include citing a real source that does not contain the claim, and correct claims with no citation. Attribution should be evaluated explicitly rather than assumed from the presence of citation markers.

## Related

- [[Faithfulness]]: whether the citation actually supports the claim
- [[Hallucination]]: the failure it is meant to prevent
- [[Retrieval Augmented Generation]]: the system it belongs to
- [[Confidence Display]]: showing users what is supported
- [[Trust Calibration]]: evidence rather than assertion

---

Part of [[AI Terminology Index]], section: Retrieval and Knowledge.
