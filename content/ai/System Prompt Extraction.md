---
title: "System Prompt Extraction"
aliases:
  - "System Prompt Leakage"
  - "Prompt Leaking"
tags:
  - glossary/ai
  - ai/security
section: "Security and Privacy"
summary: "Tricking an AI application into revealing the hidden instructions its builders gave it."
---

# System Prompt Extraction

## Plain View

Tricking an AI application into revealing the hidden instructions its builders gave it. Many chat products run on a concealed set of instructions that set tone, rules and sometimes business logic. Users can often coax a model into repeating these, for example by asking it to print everything above the conversation. The leak itself is usually embarrassing rather than dangerous; the real harm comes when those instructions hold secrets or are being relied on for security.

## Technical View

Listed by the Open Worldwide Application Security Project ('OWASP') as System Prompt Leakage in its 2025 Top 10 for large language model applications. Techniques include direct requests, role-play, translation or encoding tricks, and asking for the text in fragments. Defences such as instructions not to reveal the prompt, or output filters that match prompt text, reduce casual leaks but are routinely bypassed. The sound posture is to assume the system prompt will become public: keep credentials, internal rules and permission logic out of it, and enforce access control and safety checks in code and external guardrails rather than in prompt text.

## Related

- [[System Prompt]]: what is being extracted
- [[Prompt Injection]]: the usual technique
- [[Jailbreaking]]: a close cousin aimed at behaviour rather than text
- [[Secrets Management]]: why credentials never belong in prompts
- [[Guardrails]]: controls that do not depend on secrecy
- [[Model Extraction and Membership Inference]]: other ways of pulling hidden information out

---

Part of [[AI Terminology Index]], section: Security and Privacy.
