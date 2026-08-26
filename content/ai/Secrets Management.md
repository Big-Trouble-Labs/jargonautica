---
title: "Secrets Management"
tags:
  - glossary/ai
  - ai/security
section: "Security and Privacy"
summary: "Keeping credentials out of prompts, logs and model context."
---

# Secrets Management

## Plain View

Keeping credentials out of prompts, logs and model context. Anything in the context window can end up in the output, in a log, or in a provider's systems. Anything in a log can end up in a support ticket. The safe assumption is that a secret placed anywhere near a model will eventually be seen.

## Technical View

Use a dedicated secret store with short-lived, narrowly scoped credentials issued per task, injected at the tool boundary rather than into model context, so the model requests an action rather than handling the key. Redact known secret patterns from logs and traces, rotate on suspicion, and scan trajectories for leaked material. Tokens for third-party connectors should be per-user and revocable rather than shared.

## Related

- [[Least Privilege]]: scoped, short-lived credentials
- [[Data Exfiltration]]: what leaked secrets enable
- [[Audit Logging]]: redaction before storage
- [[Sandboxing]]: keeping credentials outside the sandbox
- [[Tool Use and Function Calling]]: injecting credentials at the tool boundary

---

Part of [[AI Terminology Index]], section: Security and Privacy.
