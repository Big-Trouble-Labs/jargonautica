---
title: "Model Context Protocol"
aliases:
  - "MCP"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "An open standard for connecting models to tools and data sources."
---

# Model Context Protocol

## Plain View

An open standard for connecting models to tools and data sources. Before it, every combination of assistant and system needed its own bespoke integration. The protocol defines a common way for a server to expose tools, files and prompts so that any compatible client can use them, which turns a many-to-many problem into a many-to-one.

## Technical View

Introduced by Anthropic in late 2024 and since adopted broadly across the industry. Servers expose tools, resources and prompt templates over a defined transport, and clients discover and invoke them on the model's behalf. The security considerations follow directly from the design: a connected server is untrusted content entering the model's context, so tool descriptions themselves can carry injected instructions. Permission scoping, human confirmation for consequential actions and careful auditing of third-party servers all matter.

## Related

- [[Tool Use and Function Calling]]: the capability this standardises
- [[Agent]]: what consumes these connections
- [[Prompt Injection]]: the risk a connected server introduces
- [[Structured Output]]: how calls and results are shaped
- [[Computer Use]]: the alternative when no such interface exists
- [[Agent-to-agent Protocol]]: the counterpart standard for agents talking to agents
- [[Agent Skills]]: a complementary way to extend agents with know-how rather than connections
- [[Tool Poisoning]]: the main attack against connected servers

---

Part of [[AI Terminology Index]], section: Agents and Tools.
