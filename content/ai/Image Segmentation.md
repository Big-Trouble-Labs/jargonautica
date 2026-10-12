---
title: "Image Segmentation"
aliases:
  - "Semantic Segmentation"
  - "Instance Segmentation"
tags:
  - glossary/ai
  - ai/modalities
section: "Modalities and Applications"
summary: "Labelling every dot (pixel) in an image with what it belongs to, so the system knows the exact outline of each thing rather than just that it is there."
---

# Image Segmentation

## Plain View

Labelling every dot (pixel) in an image with what it belongs to, so the system knows the exact outline of each thing rather than just that it is there. A medical scan can be split into tumour and healthy tissue, a street scene into road, pavement, cars and people. It gives a far more precise picture than drawing a box round an object.

## Technical View

Semantic segmentation assigns a class to every pixel; instance segmentation also separates individual objects of the same class; panoptic segmentation does both. Encoder-decoder architectures such as the U-Net, and detectors extended with a mask-predicting head, have been the standard designs, and promptable segmentation models can outline arbitrary objects from a click or a box. Quality is measured with Intersection over Union ('IoU') or the Dice coefficient. Pixel-level labels are slow and expensive to produce, so annotation cost often limits what is possible, especially in medical imaging.

## Related

- [[Computer Vision]]: the wider field
- [[U-Net]]: the architecture built for it
- [[Object Detection]]: the coarser, box-level task
- [[Data Labelling and Annotation]]: why pixel labels are costly
- [[Convolutional Neural Network]]: the usual backbone

---

Part of [[AI Terminology Index]], section: Modalities and Applications.
