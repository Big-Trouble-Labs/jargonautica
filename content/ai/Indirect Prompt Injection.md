---
title: "Indirect Prompt Injection"
aliases:
  - "Cross-domain Prompt Injection"
tags:
  - glossary/ai
  - ai/security
section: "Security and Privacy"
summary: "Instructions hidden in content the model reads rather than typed by the user."
---

# Indirect Prompt Injection

## Plain View

Instructions hidden in content the model reads rather than typed by the user. A web page, a document, a calendar invitation or an email can contain text aimed at the model, and the model has no reliable way of telling data from instructions. This is the central unsolved security problem of agentic systems.

## Technical View

Payloads may be invisible to humans through white text, metadata, image steganography or Unicode tricks, and can chain: injected content instructs the agent to fetch attacker-controlled resources, exfiltrate context or take actions. Mitigations reduce rather than remove risk: strict separation of trusted instructions, egress restriction, human confirmation for consequential actions, capability limits and output monitoring. No prompt-level defence is reliable, so architectural containment is the answer.

## Related

- [[Prompt Injection]]: the general problem
- [[Data Exfiltration]]: the usual objective
- [[Confused Deputy]]: the mechanism it exploits
- [[Browser Automation]]: a major exposure route
- [[Least Privilege]]: the only reliable containment

---

Part of [[AI Terminology Index]], section: Security and Privacy.
