---
title: "Agent Evaluation"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "Measuring an agent is harder than measuring a model, because there is no single output to grade."
---

# Agent Evaluation

## Plain View

Measuring an agent is harder than measuring a model, because there is no single output to grade. The same task can be completed well or badly by routes that both end in success, and a system that succeeds by luck two thirds of the time is not a system you can deploy.

## Technical View

Combines outcome measures, task success against a verifiable end state, with process measures covering tool selection accuracy, step efficiency, cost and recovery from errors. Requires repeated runs per task to estimate variance, since agent behaviour is stochastic and single-run results are uninformative. Environments must be resettable to a known state. Partial credit against sub-goals gives more signal than binary success on long tasks.

## Related

- [[Agent]]: what is being measured
- [[Trajectory]]: process measures come from it
- [[Environment]]: which must be resettable
- [[Benchmarks and Evals]]: the wider practice
- [[Variance and Standard Deviation]]: why repeated runs are required

---

Part of [[AI Terminology Index]], section: Agents and Tools.
