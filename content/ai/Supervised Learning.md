---
title: "Supervised Learning"
tags:
  - glossary/ai
  - ai/foundations
section: "The Foundations"
summary: "Learning from examples that come with the right answers already attached."
---

# Supervised Learning

## Plain View

Learning from examples that come with the right answers already attached. Photos labelled 'cat' or 'not cat'. Past loan applications labelled 'repaid' or 'defaulted'. Scans labelled 'tumour present' or 'clear'. This is the most common and most reliable form of machine learning, and its main cost is that somebody has to produce all those labels, which is slow and expensive.

## Technical View

The system learns a mapping from inputs to outputs using labelled pairs. Two main flavours: classification, where the output is a category, and regression, where the output is a number. The critical discipline is holding back some labelled data the model never sees during training, then testing on it. Performance on data it was trained on tells you almost nothing useful, because a model can score perfectly by memorising. Performance on held-out data tells you whether it has actually generalised.

## Related

- [[Machine Learning]]: the parent idea
- [[Unsupervised Learning]]: the contrasting approach, without labels
- [[Overfitting]]: the main way supervised learning goes wrong
- [[Fine-tuning]]: supervised learning applied to an already trained model
- [[Benchmarks and Evals]]: how held-out performance gets measured

---

Part of [[AI Terminology Index]], section: The Foundations.
