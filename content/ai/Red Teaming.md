---
title: "Red Teaming"
tags:
  - glossary/ai
  - ai/practice
section: "Testing, Safeguarding and Running Models in Practice"
summary: "Deliberately attacking a system before release to find out how it fails."
---

# Red Teaming

## Plain View

Deliberately attacking a system before release to find out how it fails. People are tasked with getting the model to do things it should not, so those weaknesses can be fixed rather than discovered by the public. Standard practice in security, now standard for AI models too.

## Technical View

Combines manual adversarial probing by domain specialists with automated attack generation. It is a discovery method rather than a guarantee: it establishes that particular failures exist, never that none remain. Findings feed back into training, filtering and system-level guardrails. Coverage is a persistent weakness, since the space of possible inputs is unbounded and attackers face no obligation to stay within tested territory.

## Related

- [[Jailbreaking]]: the thing red teamers try to do
- [[Guardrails]]: what gets tested and hardened
- [[Alignment]]: the property being stress-tested
- [[Benchmarks and Evals]]: the scored counterpart to adversarial testing
- [[Prompt Injection]]: one of the attack classes covered

---

Part of [[AI Terminology Index]], section: Testing, Safeguarding and Running Models in Practice.
