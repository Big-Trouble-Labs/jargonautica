---
title: "Agent"
aliases:
  - "Agents"
  - "Agentic"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "A model given tools and the ability to take actions in a sequence, rather than just replying once."
---

# Agent

## Plain View

A model given tools and the ability to take actions in a sequence, rather than just replying once. It might search the web, run some code, look at the result, notice a problem and try a different approach, all without being prompted at each step. This is the difference between something that answers questions and something that carries out tasks.

## Technical View

Implemented as a loop where the model chooses from a set of available tools, receives structured results, and decides what to do next until a stopping condition is met. Reliability is the central difficulty: error rates compound across steps, so a system that is ninety-five per cent reliable per step is only about sixty per cent reliable across ten. Agents that can act in the world also inherit prompt injection risk in a more serious form, since a malicious instruction in a retrieved document can potentially trigger real actions rather than merely a bad answer.

## Related

- [[Tool Use and Function Calling]]: the capability agents are built on
- [[Structured Output]]: how tool calls are expressed
- [[Reasoning Models and Test-Time Compute]]: the models that suit multi-step work
- [[Reinforcement Learning]]: the training approach behind acting in sequence
- [[Guardrails]]: the checks needed once a system can act

---

Part of [[AI Terminology Index]], section: Agents and Tools.
