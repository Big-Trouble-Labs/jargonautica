---
title: "Confused Deputy"
tags:
  - glossary/ai
  - ai/security
section: "Security and Privacy"
summary: "The classic security problem underneath most agent attacks."
---

# Confused Deputy

## Plain View

The classic security problem underneath most agent attacks. The agent has legitimate permissions, an attacker cannot use those permissions directly, so the attacker persuades the agent to use them on their behalf. The agent is not compromised; it is doing what it was asked by the wrong party.

## Technical View

Arises when authority is ambient rather than tied to the requester's identity, so any instruction reaching the agent inherits the agent's privileges. Mitigations include propagating the end user's identity and entitlements to every downstream call rather than using a shared service account, capability-based rather than ambient authority, per-action confirmation for irreversible operations, and separating the components that read untrusted content from those that hold credentials.

## Related

- [[Prompt Injection]]: how the agent gets instructed
- [[Least Privilege]]: the standard mitigation
- [[Agent]]: the deputy in question
- [[Tool Use and Function Calling]]: the authority being borrowed
- [[Threat Model]]: the framing that makes it visible

---

Part of [[AI Terminology Index]], section: Security and Privacy.
