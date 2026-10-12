---
title: "Linear Algebra"
tags:
  - glossary/ai
  - ai/maths
section: "Maths and Statistics"
summary: "The branch of mathematics that deals with lists and grids of numbers and the rules for combining them, and the working language of almost all modern AI."
---

# Linear Algebra

## Plain View

The branch of mathematics that deals with lists and grids of numbers and the rules for combining them, and the working language of almost all modern AI. Text, images and sound are turned into long lists of numbers, and a model is mostly a huge collection of number grids that those lists are multiplied through. When people say AI is 'just maths', this is mostly the maths they mean.

## Technical View

Covers vector spaces, linear maps and their representation as matrices, with tools such as matrix multiplication, rank, inverses, orthogonality, eigendecomposition and Singular Value Decomposition ('SVD'). A neural network layer is an affine map followed by a nonlinearity, so training and inference are dominated by dense matrix multiplications, which is why accelerator hardware is built around them. Embeddings, attention scores, low-rank adaptation and dimensionality reduction are all linear algebra in practice. At scale, numerical issues such as conditioning and floating point precision matter as much as the algebra.

## Related

- [[Vector]]: the basic object it works with
- [[Matrix and Tensor]]: the grids of numbers it manipulates
- [[Dot Product and Cosine Similarity]]: the operation behind similarity and attention
- [[Eigenvalues and Eigenvectors]]: a core tool within it
- [[Singular Value Decomposition]]: the factorisation used most in practice
- [[Graphics Processing Unit]]: hardware built for its operations

---

Part of [[AI Terminology Index]], section: Maths and Statistics.
