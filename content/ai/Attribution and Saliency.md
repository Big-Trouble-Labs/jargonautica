---
title: "Attribution and Saliency"
aliases:
  - "Saliency"
  - "Shapley Values"
tags:
  - glossary/ai
  - ai/practice
section: "Testing, Safeguarding and Running Models in Practice"
summary: "Highlighting which parts of the input mattered most to the answer."
---

# Attribution and Saliency

## Plain View

Highlighting which parts of the input mattered most to the answer. Widely used because it produces an intuitive picture, and to be treated carefully, because several popular methods have been shown to produce similar-looking pictures regardless of what the model actually did.

## Technical View

Methods include gradient-based saliency, integrated gradients, and game-theoretic attributions such as Shapley values, plus attention weights, which are frequently misread as explanations despite evidence that they are neither necessary nor sufficient. Sanity checks comparing against randomised models expose methods that are insensitive to the model. They indicate input importance, not mechanism, and are best treated as a starting point for investigation.

## Related

- [[Interpretability]]: the field
- [[Right to Explanation]]: where such methods are proposed as answers
- [[Attention]]: attention weights are not explanations
- [[Chain-of-thought Faithfulness]]: the same gap between story and mechanism

---

Part of [[AI Terminology Index]], section: Testing, Safeguarding and Running Models in Practice.
