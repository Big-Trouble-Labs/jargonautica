---
title: "Datasheets for Datasets"
aliases:
  - "Datasheet"
tags:
  - glossary/ai
  - ai/data
section: "Data"
summary: "A standard set of questions that the people who build a dataset answer and publish alongside it, explaining why it was made, what is in it, how it was collected and what it should not be used for."
---

# Datasheets for Datasets

## Plain View

A standard set of questions that the people who build a dataset answer and publish alongside it, explaining why it was made, what is in it, how it was collected and what it should not be used for. The idea borrows from electronics, where every component ships with a datasheet. It helps anyone reusing the data spot gaps, biases and limits before they build on it.

## Technical View

Proposed by Timnit Gebru and colleagues in a 2018 paper, later published in Communications of the ACM in 2021. The questions are grouped by life cycle stage: motivation, composition, collection process, preprocessing and labelling, uses, distribution and maintenance. The aim is to encourage reflection by creators and informed choice by consumers rather than to certify quality. It sits alongside model cards as part of the documentation movement in machine learning. Limitations are that completion is voluntary, answers are self-reported, and very large scraped corpora are hard to describe at the level of detail the questions invite.

## Related

- [[Model Card]]: the equivalent document for models
- [[Training Corpus]]: what it describes
- [[Data Lineage]]: the provenance it records
- [[Bias]]: one of the risks it is meant to surface
- [[Data Governance]]: the wider regime it supports

---

Part of [[AI Terminology Index]], section: Data.
