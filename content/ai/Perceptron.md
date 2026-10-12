---
title: "Perceptron"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "One of the first artificial neurons that could learn: a simple unit that adds up weighted inputs and answers yes or no depending on whether the total passes a threshold."
---

# Perceptron

## Plain View

One of the first artificial neurons that could learn: a simple unit that adds up weighted inputs and answers yes or no depending on whether the total passes a threshold. Frank Rosenblatt introduced it in the late 1950s, and it learned by nudging its weights after each mistake. On its own it can only separate things with a straight line, a limit that once dampened enthusiasm for neural networks until multi-layer versions overcame it.

## Technical View

Computes a weighted sum plus bias and applies a step function. The learning rule adds or subtracts each misclassified input from the weights, and the perceptron convergence theorem guarantees a finite number of mistakes when the data are linearly separable; otherwise it never settles. Rosenblatt described it in a 1957 report, publicly demonstrated a simulation on an IBM 704 in 1958, then built the Mark I Perceptron hardware for image recognition, shown in 1960. Minsky and Papert's 1969 book Perceptrons formalised the limits of single-layer versions, including exclusive-or, and contributed to reduced funding. Multi-layer networks trained by backpropagation removed the limitation, and modern feed-forward blocks descend from it.

## Related

- [[Neural Network]]: what it grew into
- [[Activation Function]]: the step function it used
- [[Backpropagation]]: the training method that made multi-layer versions practical
- [[Linear and Logistic Regression]]: a close linear cousin
- [[Universal Approximation Theorem]]: what multi-layer versions can represent

---

Part of [[AI Terminology Index]], section: How the Machinery Works.
