---
title: "Process Reward Model"
aliases:
  - "PRM"
tags:
  - glossary/ai
  - ai/post-training
section: "Training and Post-training"
summary: "A model that scores each step of a worked answer rather than only whether the final answer is right."
---

# Process Reward Model

## Plain View

A model that scores each step of a worked answer rather than only whether the final answer is right. In a maths problem it can say step three is where the reasoning went wrong. That gives more useful feedback for training, and it can be used to pick the best of several attempts by preferring the one whose steps all look sound.

## Technical View

Contrasted with an outcome reward model, which scores only the final result. OpenAI's 2023 paper 'Let's Verify Step by Step' trained one on PRM800K, a dataset of human step-level labels, and found process supervision outperformed outcome supervision for selecting solutions to competition maths problems. Uses include best-of-n reranking, guiding tree search during inference, and dense rewards in reinforcement learning. Costs are expensive step-level labels (often now generated automatically by rolling out from each step) and vulnerability to reward hacking, where the policy learns steps that look valid to the scorer without being correct.

## Related

- [[Reward Model]]: the outcome-level version
- [[Chain of Thought]]: the steps it scores
- [[Reward Hacking and Specification Gaming]]: a risk when optimising against it
- [[Reasoning Models and Test-Time Compute]]: where it guides search
- [[Chain-of-thought Faithfulness]]: whether scored steps reflect the real reasoning

---

Part of [[AI Terminology Index]], section: Training and Post-training.
