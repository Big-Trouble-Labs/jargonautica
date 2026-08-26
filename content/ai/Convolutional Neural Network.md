---
title: "Convolutional Neural Network"
aliases:
  - "CNN"
tags:
  - glossary/ai
  - ai/architectures
section: "Other Kinds of Neural Network"
summary: "The design that dominated image work for about a decade."
---

# Convolutional Neural Network

## Plain View

The design that dominated image work for about a decade. Instead of looking at a whole picture at once, it slides a small window across the image looking for a particular feature, then repeats with other windows looking for other features. Because the same window is reused everywhere, a CNN can spot a cat whether it appears top left or bottom right.

## Technical View

Convolutional layers apply learned filters across the input with shared weights, giving translation invariance and far fewer parameters than a fully connected layer would need. Pooling layers progressively reduce spatial resolution while retaining the strongest signals. CNNs remain common in medical imaging and on constrained hardware, though transformer-based vision models now match or beat them at large scale, given enough data.

## Related

- [[Neural Network]]: the general structure it specialises
- [[Transformer]]: the architecture now competing with it on images
- [[Multimodal]]: how image handling gets combined with text
- [[Deep Learning]]: the wider approach it belongs to

---

Part of [[AI Terminology Index]], section: Other Kinds of Neural Network.
