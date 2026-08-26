---
title: "Tree of Thoughts"
aliases:
  - "ToT"
tags:
  - glossary/ai
  - ai/runtime
section: "Controlling and Extending Behaviour at Run Time"
summary: "Exploring several lines of reasoning as a branching structure, evaluating them, and backtracking from the ones that look wrong, rather than committing to a single chain."
---

# Tree of Thoughts

## Plain View

Exploring several lines of reasoning as a branching structure, evaluating them, and backtracking from the ones that look wrong, rather than committing to a single chain. It suits problems where you can tell a partial solution is going nowhere, such as puzzles and planning.

## Technical View

Maintains a search tree over intermediate reasoning states with a generator producing candidate next steps and an evaluator scoring partial states, explored by breadth-first, depth-first or beam search. Substantially more expensive than chain of thought, by an order of magnitude or more, and dependent on a usable state evaluator. Much of its benefit is now obtained internally by reasoning models trained to search during generation.

## Related

- [[Chain of Thought]]: the single-path version
- [[Search and Optimisation]]: the search framing
- [[Reasoning Models and Test-Time Compute]]: which internalise much of this
- [[Cost Per Task]]: substantially more expensive

---

Part of [[AI Terminology Index]], section: Controlling and Extending Behaviour at Run Time.
