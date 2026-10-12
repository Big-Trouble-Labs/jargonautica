---
title: "Ground Truth"
tags:
  - glossary/ai
  - ai/data
section: "Data"
summary: "The correct answer that a model's output is checked against."
---

# Ground Truth

## Plain View

The correct answer that a model's output is checked against. In a photo dataset it is the label saying 'cat' or 'dog'; in a translation test it is the reference translation a person wrote. Every score a model receives depends on it, so if the supposed truth is wrong or disputed, the score is too.

## Technical View

The reference labels or outputs treated as correct for training and evaluation. In practice it is rarely absolute: it is produced by annotators, instruments or existing records, each with error, and for subjective tasks (toxicity, relevance, summary quality) reasonable people disagree. Good practice records how it was produced, measures inter-annotator agreement, and treats low-agreement items separately rather than forcing a single answer. Where outputs are open-ended, a single reference understates the space of acceptable answers, which is why reference-based metrics are increasingly supplemented with rubric or model-based judging.

## Related

- [[Data Labelling and Annotation]]: how it is usually produced
- [[Label Noise]]: what happens when it is wrong
- [[Golden Dataset]]: a curated set of it for evaluation
- [[Inter-rater Reliability]]: how much annotators agree on it
- [[BLEU and ROUGE]]: metrics that compare against a reference

---

Part of [[AI Terminology Index]], section: Data.
