---
title: "Data Exfiltration"
aliases:
  - "Exfiltration"
tags:
  - glossary/ai
  - ai/security
section: "Security and Privacy"
summary: "Getting sensitive information out of a system through the model."
---

# Data Exfiltration

## Plain View

Getting sensitive information out of a system through the model. It can be as simple as a hidden instruction telling the agent to include the contents of a private file in a link it fetches. The model becomes the courier, using access it was legitimately given.

## Technical View

Channels include outbound requests with data encoded in a URL, rendered images pointing at attacker-controlled endpoints, markdown links, tool calls to external services, and the response text itself. Controls include egress allowlists, disabling automatic fetching of remote resources in rendered output, sanitising links, restricting which tools can transmit externally, and monitoring for anomalous outbound patterns. Context content should be treated as exfiltratable by default when untrusted input is present.

## Related

- [[Indirect Prompt Injection]]: the usual delivery mechanism
- [[Least Privilege]]: what bounds the damage
- [[Secrets Management]]: keeping credentials out of reach
- [[Tenant Isolation]]: cross-customer leakage
- [[Audit Logging]]: detecting it after the fact

---

Part of [[AI Terminology Index]], section: Security and Privacy.
