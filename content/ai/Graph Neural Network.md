---
title: "Graph Neural Network"
aliases:
  - "GNN"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "A network for data shaped like a network: molecules, road systems, social connections, supply chains."
---

# Graph Neural Network

## Plain View

A network for data shaped like a network: molecules, road systems, social connections, supply chains. Rather than assuming a grid like an image or a sequence like a sentence, it works with whatever connections actually exist and lets information flow along them.

## Technical View

Operates by message passing, where each node aggregates transformed representations of its neighbours over several rounds, giving each node a view of its k-hop neighbourhood. Variants differ in aggregation, including graph convolution, attention-based and sampling-based approaches. Known limitations are over-smoothing with depth, where node representations converge, and limited expressive power bounded by the Weisfeiler-Lehman test.

## Related

- [[AI for Science]]: molecules and materials as the main application
- [[Knowledge Graph]]: the structure it operates on
- [[Neural Network]]: the general family
- [[Embeddings]]: node representations as vectors
- [[GraphRAG]]: retrieval over graphs rather than text

---

Part of [[AI Terminology Index]], section: How the Machinery Works.
