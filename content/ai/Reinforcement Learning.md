---
title: "Reinforcement Learning"
tags:
  - glossary/ai
  - ai/foundations
section: "The Foundations"
summary: "Learning by trying things and receiving rewards or penalties, rather than being shown correct answers."
---

# Reinforcement Learning

## Plain View

Learning by trying things and receiving rewards or penalties, rather than being shown correct answers. It is how you would train a dog, and how a system learns to play a game: make moves, see whether you win, do more of what led to winning. It suits situations with a clear goal but no obvious right answer at each individual step.

## Technical View

An agent observes a state, chooses an action from a policy, receives a reward, and moves to a new state, aiming to maximise cumulative reward over time. The central difficulty is credit assignment: a reward may arrive long after the move that caused it, so the system must work out which of many earlier actions deserve credit. A second difficulty is the balance between exploration, trying new things, and exploitation, repeating what already works. Reinforcement learning is powerful but notoriously unstable and data-hungry compared to supervised learning.

## Related

- [[Machine Learning]]: the parent idea
- [[Reinforcement Learning from Human Feedback]]: the version used to make models conversational
- [[Reasoning Models and Test-Time Compute]]: trained with reinforcement learning on checkable tasks
- [[Agent]]: systems that act in sequence, the natural home for this
- [[Alignment]]: what reinforcement from feedback is trying to achieve

---

Part of [[AI Terminology Index]], section: The Foundations.
