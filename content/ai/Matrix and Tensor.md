---
title: "Matrix and Tensor"
aliases:
  - "Matrix"
  - "Tensor"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "A matrix is a grid of numbers; a tensor is the same idea extended to more dimensions."
---

# Matrix and Tensor

## Plain View

A matrix is a grid of numbers; a tensor is the same idea extended to more dimensions. Nearly all the computation in a neural network is multiplying these together, billions of times. This is why graphics chips are so well suited to the work: they were already built to do exactly this for rendering.

## Technical View

A matrix is a two-dimensional array representing a linear map; a tensor generalises to arbitrary rank, and in practice the word usually just means a multi-dimensional array with a shape and a data type. Shapes are the source of most implementation errors. Batch dimensions, broadcasting rules and memory layout determine performance as much as the arithmetic does, since matrix multiplication is memory-bound at scale.

## Related

- [[Vector]]: the building block
- [[Graphics Processing Unit]]: hardware built for multiplying these
- [[Neural Network]]: what its computation consists of
- [[Arithmetic Intensity]]: why the shape of these operations decides speed
- [[Eigenvalues and Eigenvectors]]: the structure inside a matrix

---

Part of [[AI Terminology Index]], section: Maths and Statistics.
