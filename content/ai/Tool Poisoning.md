---
title: "Tool Poisoning"
aliases:
  - "Tool Poisoning Attack"
tags:
  - glossary/ai
  - ai/security
section: "Security and Privacy"
summary: "An attack in which malicious instructions are hidden in the description of a tool that an AI agent can use, so the agent follows them without the person noticing."
---

# Tool Poisoning

## Plain View

An attack in which malicious instructions are hidden in the description of a tool that an AI agent can use, so the agent follows them without the person noticing. The user typically sees only a tool's name and a short summary, but the model reads the whole description. A harmless-looking calculator tool might secretly tell the agent to read private files and send them elsewhere. It is a way of slipping hostile instructions to an AI through the very tools it has been told to trust.

## Technical View

Named by Invariant Labs in April 2025 in the context of the Model Context Protocol ('MCP'). Variants include hidden instructions in tool descriptions or parameter schemas; shadowing, where one server's description changes how the agent uses another, trusted server's tools; and the rug pull, where a server alters a description after the user has approved it. Mitigations include showing full descriptions to users, pinning and hashing tool definitions, vetting third-party servers, isolating servers from one another and enforcing least privilege so a hijacked agent cannot reach sensitive data. It is a specific case of both indirect prompt injection and supply chain risk.

## Related

- [[Indirect Prompt Injection]]: the attack family it belongs to
- [[Model Context Protocol]]: the setting where it was named
- [[Tool Schema]]: where the hidden instructions sit
- [[Supply Chain Security]]: the risk of trusting third-party tools
- [[Data Exfiltration]]: the usual goal
- [[Least Privilege]]: what limits the damage

---

Part of [[AI Terminology Index]], section: Security and Privacy.
