---
title: "Agent Framework"
aliases:
  - "Agent SDK"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "A software library that supplies the plumbing for building an AI agent, so developers do not have to write it from scratch."
---

# Agent Framework

## Plain View

A software library that supplies the plumbing for building an AI agent, so developers do not have to write it from scratch. An agent needs a loop that calls the model, a way to describe and run tools, somewhere to keep track of the conversation, and handling for errors and limits. A framework packages those pieces. It saves time, but it also makes design choices on your behalf, and those choices can be hard to see or change later.

## Technical View

Typically provides an execution loop around a model, tool registration and schema generation, state and memory management, orchestration primitives such as handoffs and graphs, tracing hooks and adapters for several model providers. Offerings range from thin software development kits ('SDKs') to opinionated graph or role-based runtimes. The trade-off is abstraction against control: heavy frameworks speed up prototyping but can hide prompts, retry logic and context assembly, which complicates debugging and evaluation. Many teams start with a framework and later replace parts with direct calls once they know which behaviours matter, and lock-in to one framework's state model is a common migration cost.

## Related

- [[Agent]]: what it helps you build
- [[Orchestrator]]: the coordinating layer many frameworks supply
- [[Tool Use and Function Calling]]: the capability it wraps
- [[Observability and Tracing]]: what you need when the abstraction hides behaviour
- [[Workflow Versus Agent]]: a choice the framework should not make for you
- [[Vendor Lock-in]]: the migration cost of a heavy framework

---

Part of [[AI Terminology Index]], section: Agents and Tools.
