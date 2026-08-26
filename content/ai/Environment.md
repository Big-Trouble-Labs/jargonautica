---
title: "Environment"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "Everything the agent can see and change."
---

# Environment

## Plain View

Everything the agent can see and change. A codebase, a browser, a set of files, a simulated world. Defining it precisely matters, because an agent's competence is a property of the pairing, not of the model alone: the same model is capable in a well-designed environment and useless in a badly designed one.

## Technical View

Specifies the observation space, the action space, the transition dynamics and the reward or success criterion. For evaluation it must be deterministic and resettable to permit comparable runs, which is why containerised task environments with fixed snapshots are the standard. Environment design choices, including how errors are surfaced and how much state is visible, dominate measured agent performance and are frequently under-reported.

## Related

- [[Agent]]: what acts within it
- [[Agent Evaluation]]: comparability depends on it
- [[Simulation]]: a constructed environment
- [[Sandboxing]]: the containment version
- [[Reinforcement Learning]]: the state and action framing

---

Part of [[AI Terminology Index]], section: Agents and Tools.
