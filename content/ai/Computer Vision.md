---
title: "Computer Vision"
tags:
  - glossary/ai
  - ai/adjacent
section: "Adjacent Fields"
summary: "Getting computers to interpret images and video."
---

# Computer Vision

## Plain View

Getting computers to interpret images and video. Reading a number plate, spotting a defect on a production line, counting stock on a shelf, guiding a vehicle. It was the field that demonstrated deep learning worked, in 2012, and it remains where a great deal of practical non-language AI value sits.

## Technical View

Core tasks are classification, object detection, segmentation, tracking and depth estimation. Convolutional architectures dominated until vision transformers matched them given enough data, and detection families such as YOLO remain standard where real-time performance on constrained hardware matters. Practical difficulty usually lies in the data rather than the architecture: lighting, camera placement, domain shift between where the training data came from and where the system is deployed, and the cost of annotation. Multimodal models now answer open-ended questions about images but remain weaker than specialist models at precise localisation and measurement.

## Related

- [[Convolutional Neural Network]]: the architecture that defined it
- [[Multimodal]]: how vision reached language models
- [[Deep Learning]]: the field vision proved out in 2012
- [[Adversarial Examples]]: its most striking failure mode
- [[Optical Character Recognition]]: a specialised branch of it

---

Part of [[AI Terminology Index]], section: Adjacent Fields.
