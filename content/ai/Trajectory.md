---
title: "Trajectory"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "The full sequence of what an agent did: every thought, tool call, result and decision."
---

# Trajectory

## Plain View

The full sequence of what an agent did: every thought, tool call, result and decision. It is the thing you debug, and it is the thing you evaluate, because an agent can reach the right answer through a process you would never sanction.

## Technical View

The ordered record of states, actions and observations for a task episode. Used for debugging, for evaluation of process as well as outcome, and as training data for imitation or preference learning. Storage grows quickly, so retention policy matters, and trajectories often contain sensitive data from tool results, which brings them within data protection scope. Comparing trajectories across runs is how non-determinism in agent behaviour is quantified.

## Related

- [[Session State]]: what persists between turns
- [[ReAct]]: the loop that produces it
- [[Agent Evaluation]]: process as well as outcome
- [[Observability and Tracing]]: how it is captured
- [[Audit Logging]]: the record that matters for agents
- [[Handoff]]: attributing failures to transfers
- [[Retention Policy]]: trajectories contain sensitive data

---

Part of [[AI Terminology Index]], section: Agents and Tools.
