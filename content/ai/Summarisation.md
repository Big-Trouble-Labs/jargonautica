---
title: "Summarisation"
aliases:
  - "Summarization"
tags:
  - glossary/ai
  - ai/modalities
section: "Modalities and Applications"
summary: "Producing a shorter version of a text that keeps the points that matter."
---

# Summarisation

## Plain View

Producing a shorter version of a text that keeps the points that matter. It can mean picking out the most important sentences as they stand, or writing a fresh account in new words, which is what AI assistants do. The risk is that a fluent summary can quietly leave out or distort something important.

## Technical View

Extractive methods select and order source sentences; abstractive methods generate new text, which reads better but can introduce content not in the source. Large language models made abstractive summarisation routine, with long inputs handled by summarising chunks in stages or by long context windows, which have been shown to neglect material in the middle. Automatic metrics such as Recall-Oriented Understudy for Gisting Evaluation ('ROUGE') reward word overlap and say little about faithfulness, so serious evaluation relies on human review or model judges checking each claim against the source.

## Related

- [[Faithfulness]]: the main quality test
- [[Hallucination]]: the failure abstractive methods risk
- [[Chunking]]: how long inputs are split
- [[Lost in the Middle]]: a weakness with long inputs
- [[BLEU and ROUGE]]: the traditional overlap metrics
- [[LLM as a Judge]]: a common way to check claims

---

Part of [[AI Terminology Index]], section: Modalities and Applications.
