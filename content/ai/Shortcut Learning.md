---
title: "Shortcut Learning"
tags:
  - glossary/ai
  - ai/risks
section: "Problems, Risks and Ambitions"
summary: "When a model learns an easy cue that happens to predict the right answer in its training data, instead of the thing you actually wanted it to learn."
---

# Shortcut Learning

## Plain View

When a model learns an easy cue that happens to predict the right answer in its training data, instead of the thing you actually wanted it to learn. A classic illustration is an image classifier that recognises cows by spotting green grass, and so fails on a cow standing on a beach. The model scores well in testing, because the test data shares the same cue, then fails in the real world where the cue is missing.

## Technical View

Popularised and surveyed by Geirhos and colleagues in 2020, shortcut learning describes decision rules that exploit spurious correlations between inputs and labels: texture rather than shape in image models, hospital-specific markers in medical scans, or word overlap in language inference datasets. Because standard train and test splits come from the same distribution, they reward shortcuts rather than expose them. Detection relies on out-of-distribution test sets, counterfactual or adversarially constructed examples, and attribution methods that show which features drive predictions. Mitigations include data augmentation, rebalancing and objectives designed to be robust across subgroups, none of which guarantees the intended feature is learned.

## Related

- [[Generalisation]]: what shortcuts quietly undermine
- [[Correlation and Causation]]: the confusion a shortcut encodes
- [[Robustness Testing]]: how shortcuts are exposed
- [[Data Leakage]]: a related way test scores flatter a model
- [[Goal Misgeneralisation]]: the equivalent failure for goals rather than features

---

Part of [[AI Terminology Index]], section: Problems, Risks and Ambitions.
