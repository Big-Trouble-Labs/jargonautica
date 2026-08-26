---
title: "Termination Condition"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "How a loop knows to stop."
---

# Termination Condition

## Plain View

How a loop knows to stop. Without an explicit answer it will either quit too early with a half-finished job, or keep going until it exhausts your budget. Deciding what 'done' looks like is one of the first things to specify and one of the most commonly left implicit.

## Technical View

Conditions include the model signalling completion, a verifier passing, a maximum iteration count, a token or cost ceiling, a wall-clock timeout, and detection of no progress. Multiple conditions should be combined, with hard limits as a backstop independent of the model's own judgement, since a model that believes it has finished is not a reliable stopping signal. Termination reason should be logged, as the distribution across reasons is a useful health measure.

## Related

- [[Loop Detection]]: the failure it backstops
- [[Budget Caps]]: the hard limits
- [[Agent]]: what needs stopping
- [[Orchestrator]]: where it is enforced
- [[Stop Sequence]]: the token-level equivalent

---

Part of [[AI Terminology Index]], section: Agents and Tools.
