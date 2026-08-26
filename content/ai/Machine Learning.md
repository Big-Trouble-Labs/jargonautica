---
title: "Machine Learning"
tags:
  - glossary/ai
  - ai/foundations
section: "The Foundations"
summary: "Teaching a computer by showing it examples instead of writing step by step instructions."
---

# Machine Learning

## Plain View

Teaching a computer by showing it examples instead of writing step by step instructions. Rather than trying to describe in code what makes an email spam, you show the system a hundred thousand emails already marked as spam or not spam, and it works out the distinguishing features for itself. This matters because for most interesting problems, nobody can write down the rules. You know a friend's face instantly but you could not describe it precisely enough for someone else to pick them out of a crowd.

## Technical View

Formally, a system improves its performance on a task with respect to some measure of success as it is exposed to more data. The mechanics are always the same three parts: a model with adjustable internal settings, a loss function that scores how wrong the current output is, and an optimisation method that changes the settings to reduce that score. Everything from a simple straight line fitted through data points to a trillion-parameter language model follows this pattern. The differences lie in how expressive the model is and how the optimisation is done.

## Related

- [[Artificial Intelligence]]: the wider field this sits inside
- [[Supervised Learning]]: learning from labelled examples
- [[Unsupervised Learning]]: learning without labels
- [[Reinforcement Learning]]: learning from rewards
- [[Training]]: the process where the learning actually happens

---

Part of [[AI Terminology Index]], section: The Foundations.
