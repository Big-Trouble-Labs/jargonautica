---
title: "Multi-agent Systems"
aliases:
  - "Multi-agent"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "Several model-driven agents working together, each with a defined role, handing work between them."
---

# Multi-agent Systems

## Plain View

Several model-driven agents working together, each with a defined role, handing work between them. One might plan, another write code, another review it. It suits problems that decompose cleanly and are large enough that a single context cannot hold everything. It also multiplies the number of ways things can go wrong.

## Technical View

Common patterns include an orchestrator delegating to specialist workers, sequential pipelines with defined handoffs, and debate or critique arrangements where one agent reviews another's output. The advantages are context isolation and parallelism; the costs are token consumption, latency and compounding error, since a mistake made early is inherited downstream. Reliability depends far more on clear interfaces and verification at each handoff than on the sophistication of any individual agent.

## Related

- [[Agent]]: the building block
- [[Workflow Versus Agent]]: the decision that should precede this
- [[Context Engineering]]: context isolation is the main benefit
- [[Cost Per Task]]: the cost that multiplies fastest
- [[Tool Use and Function Calling]]: how the pieces act
- [[Model Context Protocol]]: the standard way they reach tools

---

Part of [[AI Terminology Index]], section: Agents and Tools.
