---
title: "Code Execution"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "Letting the model write a program and run it."
---

# Code Execution

## Plain View

Letting the model write a program and run it. It removes a whole class of weaknesses at once, since arithmetic, data manipulation and file processing are things code does reliably and language models do not. It also means untrusted code is running somewhere, which needs taking seriously.

## Technical View

Executed in a sandboxed interpreter with restricted network and filesystem access, resource limits and a timeout, returning stdout, stderr and produced artefacts to the model for inspection and retry. The generate-run-observe-fix loop substantially improves reliability on quantitative tasks. Security requirements are the same as for running any untrusted code, and the additional risk is that the code is authored by a system that reads untrusted input.

## Related

- [[Sandboxing]]: the containment it requires
- [[Agentic Coding]]: the loop it enables
- [[Tool Use and Function Calling]]: the general capability
- [[Reinforcement Learning with Verifiable Rewards]]: execution as verification
- [[Sandbox Escape]]: the risk being managed

---

Part of [[AI Terminology Index]], section: Agents and Tools.
