---
title: "Gradient"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "The direction of steepest increase, and how steep it is."
---

# Gradient

## Plain View

The direction of steepest increase, and how steep it is. Training follows it downhill. In one dimension it is just the slope of a line; with a billion parameters it is a list of a billion slopes, one for each, saying how much that particular number is contributing to the error.

## Technical View

The vector of partial derivatives of a scalar function with respect to its inputs. For a loss over parameters, it points towards steepest ascent, so updates move against it. Its magnitude drives the vanishing and exploding gradient problems; its noise, from mini-batching, is a form of implicit regularisation that appears to help generalisation rather than merely being a computational compromise.

## Related

- [[Gradient Descent]]: what follows it
- [[Backpropagation]]: how it is computed efficiently
- [[Vanishing and Exploding Gradients]]: what goes wrong with its magnitude
- [[Loss Function]]: the surface it is taken over
- [[Derivative and the Chain Rule]]: the calculus underneath

---

Part of [[AI Terminology Index]], section: Maths and Statistics.
