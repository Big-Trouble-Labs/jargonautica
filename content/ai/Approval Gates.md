---
title: "Approval Gates"
aliases:
  - "Approval Gate"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "Checkpoints where an AI agent must stop and get a person's permission before it takes a particular action."
---

# Approval Gates

## Plain View

Checkpoints where an AI agent must stop and get a person's permission before it takes a particular action. Typical examples are sending an email, spending money, deleting files or changing a live system. The agent can prepare everything, but the action does not happen until someone says yes. Gates work best on the few actions that are costly or hard to undo, rather than on everything.

## Technical View

Implemented in the agent runtime rather than the prompt: tool calls are classified by risk, for example read-only, reversible or irreversible, and calls in gated classes are paused with their proposed arguments shown to a reviewer, then resumed, edited or rejected. Good gates show exactly what will happen, including full parameters, and record the decision in an audit log. The main failure mode is approval fatigue: too many prompts train people to click through, which recreates automation bias. Gates must be enforced outside the model, because an instruction to ask first can be overridden by prompt injection.

## Related

- [[Human in the Loop]]: the wider principle it implements
- [[Reversibility]]: what decides which actions need a gate
- [[Automation Bias]]: why frequent gates stop working
- [[Least Privilege]]: the complementary limit on what can be attempted
- [[Audit Logging]]: where approvals are recorded
- [[Levels of Autonomy]]: how gates set an agent's level

---

Part of [[AI Terminology Index]], section: Agents and Tools.
