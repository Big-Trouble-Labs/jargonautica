---
title: "Weight Initialisation"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "The random values a network starts with before it learns anything."
---

# Weight Initialisation

## Plain View

The random values a network starts with before it learns anything. It seems like it should not matter much and it does: start too small and signals fade away, start too large and they blow up. There are standard recipes, and using the wrong one can stop training working entirely.

## Technical View

Schemes such as Xavier and He initialisation scale variance by fan-in or fan-out to keep activation and gradient variance roughly constant across layers, matched to the activation function in use. Poor initialisation causes saturation or divergence in the first steps. For very large models, initialisation interacts with learning rate and depth in ways captured by parameterisations that allow hyperparameters tuned on small models to transfer to large ones.

## Related

- [[Weights, Parameters and Biases]]: the values being set
- [[Vanishing and Exploding Gradients]]: what bad initialisation causes
- [[Normal Distribution]]: the usual sampling distribution
- [[Learning Rate Schedule]]: the two interact strongly

---

Part of [[AI Terminology Index]], section: How the Machinery Works.
