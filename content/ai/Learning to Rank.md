---
title: "Learning to Rank"
aliases:
  - "Ranking"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "Producing a good ordering rather than a good score for each item individually."
---

# Learning to Rank

## Plain View

Producing a good ordering rather than a good score for each item individually. What matters in search and recommendation is which things appear at the top, so the model should be trained on the ordering directly rather than on predicting each item's relevance in isolation.

## Technical View

Pointwise approaches regress relevance per item, pairwise approaches learn preferences between pairs, and listwise approaches optimise a ranking measure over the whole list. Evaluation uses normalised discounted cumulative gain, mean reciprocal rank or precision at k, all of which weight the top of the list heavily. Gradient boosted trees with a ranking objective remain a very strong baseline, and rerankers in retrieval systems are the same idea applied to documents.

## Related

- [[Reranking]]: the same idea inside a retrieval pipeline
- [[Retrieval Metrics]]: the measures it optimises
- [[Recommender Systems]]: the largest application
- [[Random Forest and Gradient Boosting]]: still a very strong method here
- [[Semantic Search]]: the ordering problem it addresses

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.
