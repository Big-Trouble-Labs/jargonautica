---
title: "Sub-agent"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "Handing a bounded piece of work to a fresh instance with its own clean context, which reports back a result."
---

# Sub-agent

## Plain View

Handing a bounded piece of work to a fresh instance with its own clean context, which reports back a result. The main benefit is context isolation: the parent never has to hold all the detail of the sub-task, only its conclusion.

## Technical View

Each sub-agent receives a scoped task and returns a structured result, keeping intermediate exploration out of the parent context and enabling parallel execution across independent sub-tasks. Costs are token duplication from repeated context setup, latency where results must be gathered before proceeding, and loss of information the parent might have needed. Sub-agents should have narrower tool access than the parent.

## Related

- [[Multi-agent Systems]]: the wider pattern
- [[Handoff]]: how work is passed
- [[Context Engineering]]: context isolation as the main benefit
- [[Least Privilege]]: sub-agents should have narrower access
- [[Cost Per Task]]: context duplication as the cost

---

Part of [[AI Terminology Index]], section: Agents and Tools.
