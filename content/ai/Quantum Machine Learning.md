---
title: "Quantum Machine Learning"
aliases:
  - "QML"
tags:
  - glossary/ai
  - ai/adjacent
section: "Adjacent Fields"
summary: "Research into whether quantum computers, which process information using the unusual rules of quantum physics, could run machine learning tasks faster or better than ordinary computers."
---

# Quantum Machine Learning

## Plain View

Research into whether quantum computers, which process information using the unusual rules of quantum physics, could run machine learning tasks faster or better than ordinary computers. It is a research field rather than a working technology: existing quantum machines are small and error-prone, and whether they will ever give a practical advantage for learning is disputed.

## Technical View

Approaches include quantum versions of linear algebra routines, variational circuits trained like neural networks, and quantum kernel methods. Proposed exponential speed-ups often assume classical data can be loaded into quantum states efficiently, which is itself a bottleneck, and several were matched by quantum-inspired classical algorithms, starting with Ewin Tang's 2018 result on recommendation systems. Variational models face barren plateaus, where gradients vanish as circuits grow. The strongest case is for data that is itself quantum, such as outputs of physics experiments, and claims of practical advantage remain contested.

## Related

- [[Machine Learning]]: what it tries to accelerate
- [[Linear Algebra]]: the maths most proposals speed up
- [[Vanishing and Exploding Gradients]]: the classical cousin of barren plateaus
- [[Recommender Systems]]: the case that was matched classically
- [[Hype Cycle]]: a lens on its expectations

---

Part of [[AI Terminology Index]], section: Adjacent Fields.
