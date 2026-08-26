---
title: "Convexity"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "A shape with a single bottom, like a bowl."
---

# Convexity

## Plain View

A shape with a single bottom, like a bowl. If your error landscape is that shape, walking downhill always gets you to the best answer. Neural network landscapes are nothing like it, full of ridges, valleys and plateaus, which is why training is unpredictable and why the same setup can produce different results on different runs.

## Technical View

A convex function has a unique global minimum, and gradient descent converges to it. Linear and logistic regression with standard losses are convex; deep networks are emphatically not. In very high dimensions, however, most critical points are saddle points rather than poor local minima, and empirically the minima reached are usually of similar quality, which is why non-convexity is less catastrophic in practice than theory suggests.

## Related

- [[Gradient Descent]]: why it converges reliably in the convex case
- [[Linear and Logistic Regression]]: the convex models
- [[Neural Network]]: the non-convex case
- [[Loss Function]]: the shape of the landscape being described
- [[Determinism and Seed]]: why runs differ when the surface is not convex

---

Part of [[AI Terminology Index]], section: Maths and Statistics.
