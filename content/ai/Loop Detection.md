---
title: "Loop Detection"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "Noticing when an agent is going round in circles, calling the same tool with the same arguments and getting the same result."
---

# Loop Detection

## Plain View

Noticing when an agent is going round in circles, calling the same tool with the same arguments and getting the same result. It is a common failure and it burns money quickly, so a simple check that breaks the cycle is worth having before anything more sophisticated.

## Technical View

Detect by hashing recent action and argument pairs and flagging repeats, by measuring similarity across consecutive states, or by tracking absence of progress against a task-specific measure. Responses include injecting a message noting the repetition, forcing a different action, escalating to a stronger model, or terminating. Root causes are usually a tool returning an unhelpful error the model cannot act on, or a goal the available tools cannot achieve.

## Related

- [[Termination Condition]]: the backstop
- [[Budget Caps]]: what a loop consumes
- [[Trajectory]]: where repetition is visible
- [[Agent]]: the behaviour being caught

---

Part of [[AI Terminology Index]], section: Agents and Tools.
