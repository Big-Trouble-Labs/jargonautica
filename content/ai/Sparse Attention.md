---
title: "Sparse Attention"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "Having each position attend to only some of the others rather than all of them, chosen by a fixed pattern or learned."
---

# Sparse Attention

## Plain View

Having each position attend to only some of the others rather than all of them, chosen by a fixed pattern or learned. It cuts cost while keeping the general shape of attention, and the art is in choosing which connections to keep so that information can still travel across the whole sequence.

## Technical View

Patterns include sliding windows for local context, global tokens that attend to and are attended by everything, dilated and block-sparse schemes, and learned or routed selection. Effective receptive field grows with depth when windows are stacked. Hardware efficiency depends on the pattern being block-structured, since arbitrary sparsity does not map well onto accelerators, and this constraint drives most practical designs.

## Related

- [[Attention]]: the mechanism being restricted
- [[Linear Attention]]: the alternative approach
- [[Flash Attention]]: the exact method that reduced the pressure
- [[Context Window]]: what these techniques aim to extend

---

Part of [[AI Terminology Index]], section: How the Machinery Works.
