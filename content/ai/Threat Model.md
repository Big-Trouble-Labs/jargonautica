---
title: "Threat Model"
tags:
  - glossary/ai
  - ai/security
section: "Security and Privacy"
summary: "Writing down who might attack your system, what they want, and what they can do, before deciding what to defend."
---

# Threat Model

## Plain View

Writing down who might attack your system, what they want, and what they can do, before deciding what to defend. Without it, security work becomes a list of controls with no way to judge whether it is enough. For AI systems the useful starting question is what the model can reach and whose text it reads.

## Technical View

Structured approaches such as STRIDE enumerate categories of threat against a decomposed architecture with trust boundaries marked. AI-specific additions include the training pipeline, the model artefact itself, the prompt and context assembly path, tool and connector surfaces, and the output path into downstream systems. Adversary classes run from opportunistic users through malicious insiders to sophisticated actors, and the model itself should be treated as an untrusted component in the flow.

## Related

- [[Attack Surface]]: what it enumerates
- [[Red Teaming]]: how assumptions get tested
- [[Prompt Injection]]: the central AI-specific threat
- [[Least Privilege]]: the control it justifies
- [[Data Protection Impact Assessment]]: the privacy counterpart

---

Part of [[AI Terminology Index]], section: Security and Privacy.
