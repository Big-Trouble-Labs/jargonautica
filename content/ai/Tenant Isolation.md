---
title: "Tenant Isolation"
tags:
  - glossary/ai
  - ai/security
section: "Security and Privacy"
summary: "Keeping one customer's data away from another's in a shared system."
---

# Tenant Isolation

## Plain View

Keeping one customer's data away from another's in a shared system. It matters more than usual here because the paths are unfamiliar: shared caches, shared vector indexes, shared fine-tuned adapters and logs are all places where data can cross a boundary nobody was watching.

## Technical View

Requires per-tenant scoping of retrieval indexes or mandatory metadata filters enforced server-side, cache keys that include tenant identity so prompt caching cannot leak across tenants, separate fine-tuned artefacts, tenant-scoped credentials for tools, and tenant-aware logging with access controls. Threat cases include cache timing inference and prompt injection attempting cross-tenant retrieval. Isolation should be tested adversarially rather than assumed from configuration.

## Related

- [[Least Privilege]]: the underlying principle
- [[Metadata Filtering]]: how retrieval is scoped
- [[Caching]]: cache keys must include tenant identity
- [[Data Residency and Confidentiality]]: the customer-facing commitment
- [[Data Exfiltration]]: the cross-tenant failure mode

---

Part of [[AI Terminology Index]], section: Security and Privacy.
