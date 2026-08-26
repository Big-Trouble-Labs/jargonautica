---
title: "Memory"
aliases:
  - "Persistent Memory"
tags:
  - glossary/ai
  - ai/retrieval
section: "Retrieval and Knowledge"
summary: "How a system carries information from one conversation to the next, given that the model itself remembers nothing."
---

# Memory

## Plain View

How a system carries information from one conversation to the next, given that the model itself remembers nothing. Anything that persists is stored outside the model by the application and put back into the prompt when relevant. Understanding this explains both why assistants can seem to know you and why they sometimes confidently forget something you told them last week.

## Technical View

Typical implementations combine a running summary of the conversation, an extracted store of durable facts and preferences, and retrieval over past sessions, all reinserted into context at the start of a turn. The hard problems are deciding what is worth keeping, resolving contradictions when a stored fact is superseded, and forgetting on request, which matters for data protection. Everything held in memory occupies context and shapes behaviour, so an incorrect stored fact is persistent and can be difficult for a user to detect or remove.

## Related

- [[Context Window]]: the limit memory works around
- [[Retrieval Augmented Generation]]: the mechanism usually used
- [[Knowledge Cutoff]]: the other thing the model does not know
- [[Context Engineering]]: deciding what to bring back and when
- [[Data Residency and Confidentiality]]: stored memory is retained personal data

---

Part of [[AI Terminology Index]], section: Retrieval and Knowledge.
