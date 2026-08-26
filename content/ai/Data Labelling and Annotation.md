---
title: "Data Labelling and Annotation"
aliases:
  - "Labelling"
  - "Annotation"
tags:
  - glossary/ai
  - ai/data
section: "Data"
summary: "The human work of marking up examples so a model can learn from them."
---

# Data Labelling and Annotation

## Plain View

The human work of marking up examples so a model can learn from them. Someone has to draw the boxes round the pedestrians, mark the emails as spam, or judge which of two answers is better. It is the hidden cost behind most supervised systems, it is frequently outsourced and poorly paid, and the quality of the resulting model is capped by the quality of this work.

## Technical View

Practical concerns include annotation guidelines, inter-annotator agreement measured by statistics such as Cohen's kappa, and adjudication of disagreements. Ambiguous guidelines produce noisy labels that put a ceiling on achievable accuracy regardless of model choice. Active learning reduces volume by selecting the most informative examples to label next. For language models, preference annotation, where people rank candidate outputs, has largely replaced direct labelling and brings its own biases towards length and confident tone.

## Related

- [[Data Labour]]: the people who do this work
- [[Supervised Learning]]: what labels are for
- [[Reinforcement Learning from Human Feedback]]: preference annotation, the modern form
- [[Bias]]: annotator judgement is where much of it enters
- [[Golden Dataset]]: labelling done for evaluation rather than training
- [[Data Curation and Deduplication]]: the other half of dataset preparation

---

Part of [[AI Terminology Index]], section: Data.
