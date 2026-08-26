---
title: "Meta-prompting"
tags:
  - glossary/ai
  - ai/runtime
section: "Controlling and Extending Behaviour at Run Time"
summary: "Using a model to write or improve the prompt."
---

# Meta-prompting

## Plain View

Using a model to write or improve the prompt. Given a task description and some examples of good and bad output, models are reasonably good at producing instructions better than the ones a person wrote quickly, and there are tools that do this iteratively against an evaluation set.

## Technical View

Automated prompt optimisation searches the instruction space using a model as the proposer and an evaluation set as the objective, in frameworks that treat prompts as optimisable parameters. Effective when a golden dataset exists to score against, and prone to overfitting that set when it is small. Optimised prompts are frequently unintuitive and model-specific, and must be re-optimised when the underlying model changes.

## Related

- [[Prompt Engineering]]: what it automates
- [[Golden Dataset]]: the objective it optimises against
- [[Overfitting]]: the risk on small evaluation sets
- [[Prompt Template]]: the artefact being optimised

---

Part of [[AI Terminology Index]], section: Controlling and Extending Behaviour at Run Time.
