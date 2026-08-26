---
title: "Dot Product and Cosine Similarity"
aliases:
  - "Dot Product"
  - "Cosine Similarity"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "The two standard ways of asking how similar two lists of numbers are."
---

# Dot Product and Cosine Similarity

## Plain View

The two standard ways of asking how similar two lists of numbers are. Multiply them position by position and add up the result, and you get a number that is large when they point the same way. Divide by their lengths and you get a score between minus one and one that ignores magnitude. This single operation is what makes semantic search and attention work.

## Technical View

The dot product equals the product of magnitudes times the cosine of the angle between vectors. Cosine similarity normalises it, isolating direction, which suits embeddings where magnitude reflects token frequency or text length rather than meaning. Attention scores are scaled dot products; retrieval ranks by cosine similarity. Note that high cosine similarity indicates distributional relatedness, not truth, entailment or agreement.

## Related

- [[Vector]]: what is being compared
- [[Embeddings]]: the main practical application
- [[Attention]]: attention scores are scaled dot products
- [[Semantic Search]]: ranking by this measure
- [[Vector Database]]: the operation an index accelerates

---

Part of [[AI Terminology Index]], section: Maths and Statistics.
