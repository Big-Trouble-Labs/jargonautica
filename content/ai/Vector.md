---
title: "Vector"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "A list of numbers treated as a single thing."
---

# Vector

## Plain View

A list of numbers treated as a single thing. Position on a map is a vector of two numbers; a word's meaning inside a language model is a vector of a few thousand. Once something is a vector you can measure distance and direction, which is how machines compare things that are not obviously comparable.

## Technical View

An element of a vector space, supporting addition and scalar multiplication. In machine learning, effectively always a fixed-length array of floating point numbers representing a point in a high-dimensional space. Direction usually carries the meaning and magnitude often does not, which is why cosine similarity is preferred to Euclidean distance for embeddings, and why normalising to unit length is routine.

## Related

- [[Embeddings]]: the vectors that represent meaning
- [[Dot Product and Cosine Similarity]]: how vectors get compared
- [[Matrix and Tensor]]: what you get when you stack them
- [[Dimensionality Reduction]]: squeezing vectors down to fewer numbers

---

Part of [[AI Terminology Index]], section: Maths and Statistics.
