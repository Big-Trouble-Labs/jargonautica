---
title: "Computer Use"
aliases:
  - "Browser Agent"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "Agents that operate a computer directly, moving a cursor, clicking buttons and typing into applications, rather than calling a defined interface."
---

# Computer Use

## Plain View

Agents that operate a computer directly, moving a cursor, clicking buttons and typing into applications, rather than calling a defined interface. It lets a model use software that has no interface built for machines, which is most software. It is also slower, more fragile and considerably riskier than a proper integration, and should be a last resort rather than a first choice.

## Technical View

Implemented by feeding screenshots or accessibility trees to a multimodal model that emits mouse and keyboard actions. Reliability is limited by visual grounding, small layout changes and the compounding error rate typical of long action sequences. The security position is difficult: anything visible on screen is untrusted input capable of carrying injected instructions, and the agent holds whatever credentials the session holds, so sandboxing, restricted accounts and confirmation for consequential actions are essential.

## Related

- [[Agent]]: the wider category
- [[Prompt Injection]]: anything on screen is untrusted input
- [[Multimodal]]: the capability that makes it possible
- [[Tool Use and Function Calling]]: the cleaner alternative where it exists
- [[Guardrails]]: necessary once a system can click things

---

Part of [[AI Terminology Index]], section: Agents and Tools.
