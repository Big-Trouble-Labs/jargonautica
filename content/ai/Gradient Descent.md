---
title: "Gradient Descent"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "The actual nudging, done alongside backpropagation."
---

# Gradient Descent

## Plain View

The actual nudging, done alongside backpropagation. Picture walking down a hill in thick fog. You cannot see the bottom, but you can feel which way is downhill from where you stand, so you take a small step in that direction and repeat. The landscape here is error, and the model is looking for the lowest point it can reach.

## Technical View

Parameters are updated in the direction opposite the gradient, scaled by a learning rate. Too large a learning rate and training diverges; too small and it takes forever or stalls. Modern practice uses stochastic gradient descent, computing gradients on small random batches rather than the whole dataset, which is both faster and adds helpful noise. Optimisers such as Adam adapt the step size per parameter. The loss surface of a large network is wildly non-convex, so there is no guarantee of finding the global minimum, but in high dimensions good local minima turn out to be plentiful and usually good enough.

## Related

- [[Backpropagation]]: the partner process that works out the direction
- [[Epoch, Batch and Learning Rate]]: the settings that govern each step
- [[Training]]: the wider process this drives
- [[Overfitting]]: what happens if you keep descending too long

---

Part of [[AI Terminology Index]], section: How the Machinery Works.
