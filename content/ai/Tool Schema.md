---
title: "Tool Schema"
aliases:
  - "Function Schema"
  - "Tool Definition"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "The description of a tool that the model reads in order to decide whether and how to use it."
---

# Tool Schema

## Plain View

The description of a tool that the model reads in order to decide whether and how to use it. Name, what it does, what arguments it takes. It is a prompt, not just a technical interface, and writing it well makes more difference to whether tools get used correctly than almost anything else.

## Technical View

Typically JSON Schema with a natural language description per function and per parameter, injected into context on every request and therefore counting against the token budget. Selection accuracy degrades as the number of tools grows, which motivates dynamic exposure of a relevant subset. Descriptions should state when not to use the tool as well as when to, and they are untrusted-adjacent, since third-party schemas can carry injected instructions.

## Related

- [[Tool Use and Function Calling]]: the capability it describes
- [[Structured Output]]: the format of a call
- [[Context Engineering]]: schemas consume context and degrade selection
- [[Prompt Injection]]: third-party schemas as an injection route
- [[Model Context Protocol]]: the standard that carries them

---

Part of [[AI Terminology Index]], section: Agents and Tools.
