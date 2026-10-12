---
title: "Agent-to-agent Protocol"
aliases:
  - "A2A"
  - "Agent2Agent"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "An open standard that lets AI agents built by different companies find each other, describe what they can do and hand work between them."
---

# Agent-to-agent Protocol

## Plain View

An open standard that lets AI agents built by different companies find each other, describe what they can do and hand work between them. Without a shared standard, getting one company's agent to delegate a job to another's needs a custom integration each time. The protocol gives agents a common way to advertise their skills and to pass tasks, progress updates and results back and forth, while keeping each agent's inner workings private.

## Technical View

Introduced by Google in April 2025 and moved to the Linux Foundation in June 2025. Each agent publishes an Agent Card, a JavaScript Object Notation ('JSON') document describing its identity, skills, endpoint and authentication requirements. Work is organised as stateful tasks with a defined lifecycle (input-required, completed, failed and others), exchanged over bindings that have grown since launch to include JSON Remote Procedure Call ('JSON-RPC'), gRPC and Representational State Transfer ('REST'), with streaming and push notifications. It complements the Model Context Protocol ('MCP'): MCP connects an agent to tools and data, while this connects agents to one another. A remote agent's output is still untrusted input, needing injection defences.

## Related

- [[Multi-agent Systems]]: the setting it standardises
- [[Model Context Protocol]]: the companion standard for tools and data
- [[Handoff]]: the act it carries across organisations
- [[Sub-agent]]: delegation within one system rather than across vendors
- [[Indirect Prompt Injection]]: the risk in trusting another agent's output
- [[Agent Framework]]: where support for it is usually built in

---

Part of [[AI Terminology Index]], section: Agents and Tools.
