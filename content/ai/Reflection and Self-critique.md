---
title: "Reflection and Self-critique"
aliases:
  - "Self-critique"
  - "Reflection"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "Having the model check its own work before finishing."
---

# Reflection and Self-critique

## Plain View

Having the model check its own work before finishing. It catches a useful proportion of mistakes, particularly formatting and instruction-following errors, and it is unreliable on the errors that matter most, because a model confident enough to state something wrong is usually confident enough to approve it.

## Technical View

Prompts the model to critique and revise its output, optionally against a checklist or rubric. Evidence is mixed: reliable gains where an external signal is available, such as test results or a verifier, and much weaker gains on pure self-assessment, where models tend to ratify their own answers. Effectiveness improves with a separate critic instance, a different model, or a fresh context that does not contain the original reasoning.

## Related

- [[Agent]]: where it is used
- [[Constitutional AI]]: self-critique as a training method
- [[LLM as a Judge]]: a separate critic is more reliable
- [[Reinforcement Learning with Verifiable Rewards]]: external signals beat self-assessment
- [[Sycophancy]]: why models ratify their own answers

---

Part of [[AI Terminology Index]], section: Agents and Tools.
