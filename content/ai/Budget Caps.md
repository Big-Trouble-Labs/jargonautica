---
title: "Budget Caps"
aliases:
  - "Cost Caps"
  - "Spend Limits"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "Hard limits on how much an agent can spend in tokens, time and actions before it is stopped."
---

# Budget Caps

## Plain View

Hard limits on how much an agent can spend in tokens, time and actions before it is stopped. Without them, a loop that goes wrong at three in the morning is discovered by the invoice. They should be enforced by the surrounding system rather than requested of the model.

## Technical View

Enforced per task, per session and per tenant across token spend, wall-clock time, iteration count and tool invocations, with the limit checked by the orchestrator before each step rather than relied upon in the prompt. Behaviour at the limit should be specified: return partial results with a clear status rather than failing silently. Aggregate caps at the account level protect against many simultaneous runaway tasks.

## Related

- [[Cost Per Task]]: the number being capped
- [[Termination Condition]]: one of the stopping rules
- [[Loop Detection]]: the failure that consumes budget
- [[Orchestrator]]: where enforcement belongs
- [[Rate Limits and Quotas]]: the provider-side limit

---

Part of [[AI Terminology Index]], section: Agents and Tools.
