---
title: "Sandboxing"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "Running an agent's actions inside a confined space where it cannot reach anything it should not."
---

# Sandboxing

## Plain View

Running an agent's actions inside a confined space where it cannot reach anything it should not. If it is going to execute code, browse the web or edit files, the containing environment is the safety mechanism, and the assumption should be that the agent will eventually do something you did not anticipate.

## Technical View

Layers include process isolation, containers, virtual machines and microVMs, with network egress restricted by allowlist, filesystem access scoped to a working directory, and resource limits on CPU, memory, disk and execution time. Containers alone are a weaker boundary than virtualisation for untrusted code. Ephemeral environments destroyed after each task limit persistence, and secrets should never be present inside the sandbox.

## Related

- [[Code Execution]]: the main thing needing containment
- [[Sandbox Escape]]: the failure mode
- [[Least Privilege]]: the complementary principle
- [[Secrets Management]]: nothing valuable should be inside
- [[Agent]]: what is being contained

---

Part of [[AI Terminology Index]], section: Agents and Tools.
