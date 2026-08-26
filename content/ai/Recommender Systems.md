---
title: "Recommender Systems"
aliases:
  - "Recommendation Engine"
  - "Collaborative Filtering"
tags:
  - glossary/ai
  - ai/adjacent
section: "Adjacent Fields"
summary: "The systems that decide what you see next: which video, which product, which post."
---

# Recommender Systems

## Plain View

The systems that decide what you see next: which video, which product, which post. They are the most economically significant AI in daily use, they predate the current wave by decades, and they are the clearest everyday example of optimising for a proxy measure, engagement, and producing effects nobody chose.

## Technical View

Classical approaches are collaborative filtering, using patterns across users, and content-based filtering, using item features, usually combined through matrix factorisation and now through neural retrieval and ranking stages over very large catalogues. Persistent problems include the cold start for new users and items, popularity bias, and feedback loops where the system's own recommendations shape the data it next learns from. Offline measures correlate poorly with online outcomes, so evaluation depends on controlled experiments, and the choice of objective is where most of the societal argument actually lives.

## Related

- [[Embeddings]]: the representation underneath most of them
- [[Reward Hacking and Specification Gaming]]: engagement as the proxy objective
- [[Machine Learning]]: the field this is the largest deployment of
- [[Bias]]: popularity and feedback loops as concrete mechanisms
- [[Benchmarks and Evals]]: why offline measures mislead here

---

Part of [[AI Terminology Index]], section: Adjacent Fields.
