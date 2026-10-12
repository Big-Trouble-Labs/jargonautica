---
title: "Object Detection"
tags:
  - glossary/ai
  - ai/modalities
section: "Modalities and Applications"
summary: "Finding the things in an image and drawing a box around each one, with a label saying what it is."
---

# Object Detection

## Plain View

Finding the things in an image and drawing a box around each one, with a label saying what it is. It answers both 'what is in this picture' and 'where is it'. It is how a car camera spots pedestrians, how a shop counts stock on its shelves and how drone footage is searched for vehicles.

## Technical View

Models predict box coordinates, a class and a confidence score for each object. Two-stage detectors first propose candidate regions and then classify them; single-stage detectors, such as the You Only Look Once ('YOLO') family, predict boxes in one pass and historically traded some accuracy for speed. Set-prediction transformer detectors, such as the DEtection TRansformer ('DETR'), remove hand-designed steps such as non-maximum suppression. Evaluation uses Intersection over Union ('IoU') to match predictions to labelled boxes and mean Average Precision ('mAP') across classes. Small, hidden and rare objects, and changes in camera or lighting, are the usual failure points.

## Related

- [[Computer Vision]]: the wider field
- [[Image Segmentation]]: the finer, pixel-level task
- [[Convolutional Neural Network]]: the classic backbone
- [[Vision Transformer]]: the newer backbone
- [[Accuracy, Precision and Recall]]: the basis of its metrics
- [[Geospatial AI]]: a major application

---

Part of [[AI Terminology Index]], section: Modalities and Applications.
