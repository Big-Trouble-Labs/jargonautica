---
title: "Retrieval Metrics"
aliases:
  - "Recall at k"
  - "NDCG"
tags:
  - glossary/ai
  - ai/retrieval
section: "Retrieval and Knowledge"
summary: "How to tell whether your search is any good, separately from whether the final answer is good."
---

# Retrieval Metrics

## Plain View

How to tell whether your search is any good, separately from whether the final answer is good. If the right document was never retrieved, no amount of prompt engineering will save the answer, so measuring the retrieval step on its own is the first diagnostic anyone should build.

## Technical View

Recall at k is the primary measure for retrieval feeding generation, since generation cannot use what was not retrieved. Precision at k, mean reciprocal rank and normalised discounted cumulative gain capture ranking quality where position matters. Building the ground truth requires labelled query-document relevance, which can be bootstrapped by generating questions from known passages. Report retrieval and generation metrics separately or failures cannot be attributed.

## Related

- [[Benchmarks and Evals]]: evaluation practice generally
- [[Retrieval Augmented Generation]]: the stage being measured
- [[Learning to Rank]]: the measures it optimises
- [[Golden Dataset]]: labelled relevance judgements

---

Part of [[AI Terminology Index]], section: Retrieval and Knowledge.
