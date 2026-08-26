---
title: "Session State"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "What the system remembers between turns."
---

# Session State

## Plain View

What the system remembers between turns. Some of it is the conversation, some is data gathered along the way, some is where the agent had got to in a longer job. Being explicit about what persists, where it lives and when it is cleared prevents a whole category of confusing behaviour.

## Technical View

Distinguish conversation history, working memory such as intermediate artefacts, and durable memory across sessions. Storage sits outside the model and is reconstructed into context each turn, so context assembly policy is the real definition of what the system knows. Concerns include size growth requiring compaction, consistency under concurrent requests, expiry, and the fact that session stores frequently contain personal data and therefore fall within retention and deletion obligations.

## Related

- [[Prompt Compression]]: shortening history to fit
- [[Personalisation]]: what stored preferences enable
- [[Memory]]: the durable cross-session version
- [[Context Engineering]]: what gets reassembled each turn
- [[Context Window]]: the constraint on how much
- [[Retention Policy]]: session stores hold personal data
- [[Trajectory]]: the record of what happened

---

Part of [[AI Terminology Index]], section: Agents and Tools.
