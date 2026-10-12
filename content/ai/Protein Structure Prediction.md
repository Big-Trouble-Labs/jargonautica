---
title: "Protein Structure Prediction"
tags:
  - glossary/ai
  - ai/modalities
section: "Modalities and Applications"
summary: "Working out the three-dimensional shape a protein folds into from the chain of building blocks it is made from."
---

# Protein Structure Prediction

## Plain View

Working out the three-dimensional shape a protein folds into from the chain of building blocks it is made from. Shape determines what a protein does, so knowing it helps with understanding disease and designing drugs. Measuring a shape in the laboratory can take months or years; AI methods can predict many in minutes, often close to laboratory accuracy.

## Technical View

Predicts atomic coordinates from an amino acid sequence, typically using evolutionary information from alignments of related proteins. DeepMind's AlphaFold2 reached accuracy competitive with experiment at the Critical Assessment of Techniques for Protein Structure Prediction ('CASP') in 2020, and the 2024 Nobel Prize in Chemistry went half to Demis Hassabis and John Jumper for protein structure prediction and half to David Baker for computational protein design. Limits include flexible regions, shape changes, complexes and drug binding, and confidence scores that do not always match accuracy. A prediction is a hypothesis to test, not a measurement.

## Related

- [[AI for Science]]: its best-known success
- [[Attention]]: a core ingredient of the leading models
- [[Deep Learning]]: the approach that cracked it
- [[Model Confidence and Calibration]]: trusting per-residue confidence
- [[Dual Use]]: the biosecurity side of protein design

---

Part of [[AI Terminology Index]], section: Modalities and Applications.
