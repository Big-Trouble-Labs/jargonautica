---
title: "Loss Landscape"
aliases:
  - "Loss Surface"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "A way of picturing training as walking across hilly terrain, where each point is one possible setting of the model and its height is how badly that setting performs."
---

# Loss Landscape

## Plain View

A way of picturing training as walking across hilly terrain, where each point is one possible setting of the model and its height is how badly that setting performs. Training means heading downhill to find a low valley. The shape of the terrain, whether it has wide smooth valleys or narrow ravines and false dips, affects how easy a model is to train and how well it copes with new data.

## Technical View

The loss viewed as a function over parameter space, which for modern networks has billions of dimensions and is highly non-convex. Contrary to early worries, poor local minima are rarely the main obstacle in large networks; saddle points, plateaus and ill-conditioned ravines matter more. Flat minima are often associated with better generalisation, though the link depends on parameterisation and is debated. It is studied through Hessian spectra, paths connecting separate solutions (mode connectivity) and low-dimensional visualisations, and it informs choices of optimiser, learning rate schedule, normalisation and residual connections, which smooth it.

## Related

- [[Gradient Descent]]: the method that walks it
- [[Loss Function]]: what defines its height
- [[Convexity]]: the property it lacks
- [[Optimiser]]: tools for crossing difficult terrain
- [[Generalisation]]: the debated link with flat minima
- [[Residual Connection]]: a design that smooths it

---

Part of [[AI Terminology Index]], section: How the Machinery Works.
