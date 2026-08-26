---
title: "Handoff"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "Passing work from one agent to another cleanly."
---

# Handoff

## Plain View

Passing work from one agent to another cleanly. The receiving agent needs enough context to continue and not so much that it inherits the confusion. Most multi-agent failures happen at these boundaries, where something the first agent knew implicitly never made it into the message.

## Technical View

Requires an explicit contract specifying what is transferred: task statement, relevant artefacts, constraints, and what has already been tried and failed. Passing full conversation history is simple and pollutes context; passing a summary is cleaner and loses detail. Structured handoff objects with defined fields are more reliable than free text. Failures should be attributable to a handoff, which requires logging the exact content transferred.

## Related

- [[Multi-agent Systems]]: where handoffs happen
- [[Sub-agent]]: the delegation pattern
- [[Orchestrator]]: what manages the transfer
- [[Context Engineering]]: deciding what to carry across
- [[Trajectory]]: the record that makes failures attributable

---

Part of [[AI Terminology Index]], section: Agents and Tools.
