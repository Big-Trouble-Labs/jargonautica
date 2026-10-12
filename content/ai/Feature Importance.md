---
title: "Feature Importance"
tags:
  - glossary/ai
  - ai/classical-ml
section: "Classical Machine Learning"
summary: "A score showing how much each input contributed to a model's predictions, such as how much income, age or postcode mattered in a loan decision."
---

# Feature Importance

## Plain View

A score showing how much each input contributed to a model's predictions, such as how much income, age or postcode mattered in a loan decision. It helps people check whether a model relies on sensible factors, spot problems in the data and explain decisions to those affected. The scores describe what the model uses, which is not the same as what actually causes the outcome in the real world.

## Technical View

Global methods include impurity-based importance in tree ensembles (fast but biased towards high-cardinality features), permutation importance (the drop in a metric when one feature is shuffled) and mean absolute SHapley Additive exPlanations ('SHAP') values. Correlated features split or swap credit unpredictably, and permutation creates unrealistic inputs when features are dependent. Scores are specific to one model, can differ between equally accurate models, and should be computed on held-out data. Local attribution explains individual predictions; feature importance usually means the aggregate view across a dataset.

## Related

- [[Attribution and Saliency]]: the per-prediction view
- [[Random Forest and Gradient Boosting]]: models that report it natively
- [[Feature Engineering]]: deciding which features to keep
- [[Correlation and Causation]]: why importance is not cause
- [[Right to Explanation]]: a reason it is demanded
- [[Mutual Information]]: a model-free measure of relevance

---

Part of [[AI Terminology Index]], section: Classical Machine Learning.
