---
title: "Semantic Search"
tags:
  - glossary/ai
  - ai/retrieval
section: "Retrieval and Knowledge"
summary: "Search by meaning rather than by matching words."
---

# Semantic Search

## Plain View

Search by meaning rather than by matching words. A query for 'car insurance' finds a document about 'vehicle cover' even though they share no vocabulary. It is what embeddings were made for, and it is a useful capability in its own right, quite apart from feeding a language model.

## Technical View

Implemented by embedding queries and documents into the same space and ranking by cosine similarity. Its weakness mirrors its strength: it can miss exact identifiers, product codes and proper nouns that keyword search handles trivially, which is why production systems nearly always run hybrid search. Domain adaptation of the embedding model, or fine-tuning on in-domain query and document pairs, gives large gains on specialist vocabulary.

## Related

- [[Embeddings]]: the mechanism behind it
- [[Vector Database]]: where it runs
- [[Reranking]]: the accuracy pass on top
- [[Retrieval Augmented Generation]]: its main use in language systems
- [[Encoder, Decoder and Encoder-Decoder]]: encoder-only models do this cheaply

---

Part of [[AI Terminology Index]], section: Retrieval and Knowledge.
