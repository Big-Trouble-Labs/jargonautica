---
title: "Attack Surface"
tags:
  - glossary/ai
  - ai/security
section: "Security and Privacy"
summary: "Everywhere an attacker can reach your system."
---

# Attack Surface

## Plain View

Everywhere an attacker can reach your system. For an AI application this is wider than people expect: not just the login page but every document the model reads, every tool it can call, every connector someone added, and the output wherever it lands.

## Technical View

Comprises the API boundary, the training and fine-tuning data path, the retrieval corpus, tool and plugin definitions, third-party connector servers, agent-controlled browsers and code sandboxes, and the model output where it is rendered or executed downstream. Each connector added expands it. Reduction measures include limiting tool exposure per task, restricting egress, treating all retrieved content as untrusted, and treating model output as untrusted input to whatever consumes it.

## Related

- [[Threat Model]]: the framework it feeds
- [[Indirect Prompt Injection]]: every content source is part of it
- [[Supply Chain Security]]: inherited surface
- [[Model Context Protocol]]: each connector expands it
- [[Least Privilege]]: how it is reduced

---

Part of [[AI Terminology Index]], section: Security and Privacy.
