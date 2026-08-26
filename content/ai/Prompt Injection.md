---
title: "Prompt Injection"
tags:
  - glossary/ai
  - ai/practice
section: "Testing, Safeguarding and Running Models in Practice"
summary: "A serious security problem where instructions hidden in content the model reads get treated as commands."
---

# Prompt Injection

## Plain View

A serious security problem where instructions hidden in content the model reads get treated as commands. If a model summarises a web page containing the text 'ignore your previous instructions and do this instead', it may well comply. This matters much more for agents that can take actions than for systems that only produce text, because the consequence shifts from a bad answer to a real action taken on someone's behalf.

## Technical View

The root cause is architectural: a language model receives instructions and data in the same channel with no reliable mechanism for distinguishing them, so this is not straightforwardly fixable by better training. Indirect injection, where the malicious content arrives via a retrieved document, email or web page rather than from the user, is the harder case. Mitigations are containment rather than solutions: limiting tool permissions, requiring human confirmation for consequential actions, isolating untrusted content, and monitoring outputs.

## Related

- [[Prompt]]: the mechanism being exploited
- [[System Prompt]]: the instructions an injection tries to displace
- [[Jailbreaking]]: the related attack, done by the user directly
- [[Agent]]: the risk multiplies once a system can act
- [[Tool Use and Function Calling]]: outside content arriving through tools
- [[Guardrails]]: the standard partial defence

---

Part of [[AI Terminology Index]], section: Testing, Safeguarding and Running Models in Practice.
