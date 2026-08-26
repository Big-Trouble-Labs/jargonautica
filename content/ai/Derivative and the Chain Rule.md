---
title: "Derivative and the Chain Rule"
aliases:
  - "Chain Rule"
  - "Derivative"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "A derivative is the rate at which one thing changes as another changes."
---

# Derivative and the Chain Rule

## Plain View

A derivative is the rate at which one thing changes as another changes. The chain rule says that if A affects B and B affects C, you can work out how A affects C by multiplying the effects together. That single rule, applied across many layers, is the whole mechanism by which a deep network learns.

## Technical View

Backpropagation is the chain rule applied in reverse mode, computing all partial derivatives of a scalar output in one backward pass at roughly the cost of the forward pass. Reverse mode is efficient precisely when outputs are few and inputs are many, which is the shape of a loss function over parameters. Automatic differentiation frameworks implement this by building a computation graph during the forward pass.

## Related

- [[Backpropagation]]: the chain rule applied in reverse
- [[Gradient]]: what the derivatives assemble into
- [[Neural Network]]: layers as composed functions
- [[Loss Function]]: which must be differentiable for this to work

---

Part of [[AI Terminology Index]], section: Maths and Statistics.
