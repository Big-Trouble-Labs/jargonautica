---
title: "Data Curation and Deduplication"
aliases:
  - "Data Curation"
  - "Deduplication"
tags:
  - glossary/ai
  - ai/data
section: "Data"
summary: "Cleaning and choosing what goes into training."
---

# Data Curation and Deduplication

## Plain View

Cleaning and choosing what goes into training. Removing near-identical copies matters more than people expect: the same passage appearing a thousand times teaches the model to reproduce it word for word rather than to generalise. Careful curation of a smaller collection routinely beats a larger unfiltered one.

## Technical View

Standard steps include exact and fuzzy deduplication using hashing schemes such as MinHash, quality filtering by classifier or heuristic, language identification, removal of personal data and boilerplate, and decontamination against evaluation benchmarks. Deduplication measurably reduces memorisation and verbatim regurgitation and improves performance per token. Filtering choices are value judgements: quality classifiers trained on reference corpora systematically favour some registers and dialects, and that preference propagates into model behaviour.

## Related

- [[Training Corpus]]: what is being curated
- [[Bias]]: filtering choices are value judgements
- [[Benchmarks and Evals]]: decontamination protects these
- [[Copyright and Training Data]]: deduplication reduces verbatim memorisation
- [[Data Labelling and Annotation]]: the other half of dataset preparation

---

Part of [[AI Terminology Index]], section: Data.
