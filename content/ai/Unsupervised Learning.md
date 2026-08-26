---
title: "Unsupervised Learning"
tags:
  - glossary/ai
  - ai/foundations
section: "The Foundations"
summary: "Learning from data with no answers provided."
---

# Unsupervised Learning

## Plain View

Learning from data with no answers provided. The system has to find structure by itself. A retailer might feed in customer purchase histories and let the system group shoppers into natural clusters, without anyone deciding in advance what the groups should be. It is useful when you have plenty of data but no labels, which is most data in the world.

## Technical View

Common approaches include clustering, which groups similar items, and dimensionality reduction, which compresses data into fewer numbers while keeping the important variation. A closely related idea, self-supervised learning, is what actually powers modern language models: the labels are generated automatically from the data itself. Hide a word in a sentence and the answer is simply the word you hid. This gives you effectively unlimited labelled training data at zero labelling cost, which is the single biggest reason language models could be scaled so far.

## Related

- [[Machine Learning]]: the parent idea
- [[Supervised Learning]]: the contrasting approach, with labels
- [[Large Language Model]]: built on self-supervised learning, the close cousin of this
- [[Embeddings]]: a common product of unsupervised structure-finding

---

Part of [[AI Terminology Index]], section: The Foundations.
