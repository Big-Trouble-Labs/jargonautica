---
title: "Tool Use and Function Calling"
aliases:
  - "Tool Use"
  - "Function Calling"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "Giving a model the ability to call external software rather than answering from memory alone."
---

# Tool Use and Function Calling

## Plain View

Giving a model the ability to call external software rather than answering from memory alone. It might run a calculator for arithmetic, query a database, check today's date, or send a request to another system. This fixes several of the things models are inherently bad at, and it is the foundation on which agents are built.

## Technical View

The developer supplies structured descriptions of available functions and their parameters. When the model determines a tool is needed, it emits a structured call rather than prose; the application executes it and returns the result into the conversation for the model to use. Failure modes include calling the wrong tool, malforming arguments, and degraded selection accuracy as the number of available tools grows.

## Related

- [[Agent]]: what this capability makes possible
- [[Structured Output]]: the format a tool call takes
- [[Knowledge Cutoff]]: one of the weaknesses tools fix
- [[Retrieval Augmented Generation]]: search as a tool
- [[Prompt Injection]]: the risk that comes with acting on outside content

---

Part of [[AI Terminology Index]], section: Agents and Tools.
