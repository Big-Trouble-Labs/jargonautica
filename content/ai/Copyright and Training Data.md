---
title: "Copyright and Training Data"
aliases:
  - "Copyright"
tags:
  - glossary/ai
  - ai/governance
section: "Governance, Law and Regulation"
summary: "The unresolved question of whether training a model on copyrighted material requires permission."
---

# Copyright and Training Data

## Plain View

The unresolved question of whether training a model on copyrighted material requires permission. Rights holders argue it is copying at industrial scale; developers argue it is analysis rather than reproduction and comparable to a person reading. Cases are working through courts in several countries with mixed outcomes. Separately there is the question of whether the output itself can infringe, and who owns it.

## Technical View

Three issues are frequently conflated: the legality of ingestion, the legality of outputs that reproduce protected expression, and the copyright status of generated material. Jurisdictions differ, with text and data mining exceptions in some places, fair use argued in the United States, and opt-out regimes elsewhere. Verbatim memorisation, which deduplication reduces, is central to output-side claims. Practical mitigations for anyone deploying include output filtering against known works, indemnities offered by some providers, and provenance records for anything used in fine-tuning.

## Related

- [[Training Corpus]]: the material in dispute
- [[Data Licensing]]: the commercial route round the question
- [[Common Crawl and Web Scraping]]: how the material was collected
- [[Data Curation and Deduplication]]: what reduces verbatim reproduction
- [[Provenance and Watermarking]]: the output side of the same problem

---

Part of [[AI Terminology Index]], section: Governance, Law and Regulation.
