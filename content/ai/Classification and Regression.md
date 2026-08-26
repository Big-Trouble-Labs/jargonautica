---
title: "Classification and Regression"
aliases:
  - "Classification"
  - "Regression"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "The two basic shapes of prediction problem."
---

# Classification and Regression

## Plain View

The two basic shapes of prediction problem. Classification puts things into categories: spam or not spam, fraud or legitimate, which of five faults this is. Regression predicts a number: tomorrow's demand, the price of a house, how long a repair will take. Almost every practical machine learning task is one or the other, and knowing which you have decides how you measure success.

## Technical View

Classification outputs a distribution over discrete classes, typically trained with cross-entropy loss and evaluated with accuracy, precision, recall and the area under the receiver operating characteristic curve. Regression outputs a continuous value, typically trained and evaluated with mean squared or mean absolute error. The boundary blurs in practice: ordinal problems and probability estimation sit between the two, and a classifier's raw scores usually need calibration before they can honestly be treated as probabilities.

## Related

- [[Multi-label and Ordinal Classification]]: the variants that complicate the picture
- [[Supervised Learning]]: the setting both live in
- [[Loss Function]]: each shape has its own standard loss
- [[Accuracy, Precision and Recall]]: how classification gets measured
- [[Linear and Logistic Regression]]: the simplest model of each kind
- [[Confusion Matrix]]: where classification errors get broken down

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.
