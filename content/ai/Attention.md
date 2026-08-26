---
title: "Attention"
aliases:
  - "Attention Mechanism"
tags:
  - glossary/ai
  - ai/language-models
section: "Language Models Specifically"
summary: "The mechanism that lets a model decide which earlier words matter most when working out what comes next."
---

# Attention

## Plain View

The mechanism that lets a model decide which earlier words matter most when working out what comes next. In the sentence 'the dog chased the ball because it was fast', attention is what connects 'it' to 'the dog' rather than to 'the ball'. It gives the model a way to weigh relevance rather than treating all preceding words equally.

## Technical View

Each token produces three vectors: a query, a key and a value. Relevance between tokens is computed as the dot product of one token's query with another's key, scaled and passed through a softmax to produce weights, which are then used to take a weighted sum of value vectors. Models use multiple attention heads in parallel, each free to specialise in different relationships, such as syntactic dependencies or coreference. Interpretability research has found individual heads performing surprisingly specific and identifiable functions.

## Related

- [[Transformer]]: the architecture attention sits inside
- [[Context Window]]: the limit created by attention's cost
- [[Tokens]]: what attention weighs against each other
- [[Caching]]: how repeated attention work is avoided
- [[Interpretability]]: individual heads turn out to do identifiable jobs

---

Part of [[AI Terminology Index]], section: Language Models Specifically.
