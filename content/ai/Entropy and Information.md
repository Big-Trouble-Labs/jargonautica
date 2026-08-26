---
title: "Entropy and Information"
aliases:
  - "Entropy"
  - "Cross-entropy"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "A measure of uncertainty."
---

# Entropy and Information

## Plain View

A measure of uncertainty. A fair coin has more entropy than a biased one because you can say less about what comes next. Information is what reduces it. This is the basis for compression, for how models are trained, and for the argument that prediction and understanding are more closely related than they first appear.

## Technical View

Shannon entropy is the expected number of bits needed to encode outcomes from a distribution. Cross-entropy loss measures the cost of encoding the true distribution using the model's predicted one, which is why it is the standard training objective for classification and language modelling. Perplexity is its exponential. Decision trees split on information gain, the reduction in entropy achieved by a split.

## Related

- [[Loss Function]]: cross-entropy as the standard objective
- [[Perplexity]]: the exponential of entropy per token
- [[Kullback-Leibler Divergence]]: the closely related quantity
- [[Probability Distribution]]: what entropy measures
- [[Decision Tree]]: information gain as the splitting criterion

---

Part of [[AI Terminology Index]], section: Maths and Statistics.
