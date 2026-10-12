---
title: "Sentiment Analysis"
aliases:
  - "Opinion Mining"
tags:
  - glossary/ai
  - ai/modalities
section: "Modalities and Applications"
summary: "Working out automatically whether a piece of text expresses a positive, negative or neutral feeling."
---

# Sentiment Analysis

## Plain View

Working out automatically whether a piece of text expresses a positive, negative or neutral feeling. Companies use it to sift thousands of reviews, survey responses or social media posts and see how people feel about a product or a policy. It is good at broad trends and unreliable on any single sarcastic or ambiguous comment.

## Technical View

Ranges from word lists with polarity scores, through classifiers trained on labelled examples, to fine-tuned or prompted language models. Aspect-based sentiment ties feeling to specific features ('the battery is great, the screen is not'), and emotion classification goes beyond positive and negative. Sarcasm, negation, domain-specific language and cultural differences cause most errors, and accuracy measured in one domain transfers poorly to another. Aggregate scores also inherit any bias in who posts and what gets sampled, so results describe the sample rather than the population.

## Related

- [[Natural Language Processing]]: the field it belongs to
- [[Classification and Regression]]: the underlying task type
- [[Cultural Bias]]: why tone reads differently across groups
- [[Sampling and Sampling Bias]]: why the totals can mislead
- [[Named Entity Recognition]]: linking feeling to who or what

---

Part of [[AI Terminology Index]], section: Modalities and Applications.
