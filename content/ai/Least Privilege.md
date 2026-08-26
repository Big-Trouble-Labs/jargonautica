---
title: "Least Privilege"
aliases:
  - "Principle of Least Privilege"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "Giving an agent the minimum access it needs to do its job and nothing more."
---

# Least Privilege

## Plain View

Giving an agent the minimum access it needs to do its job and nothing more. Read-only unless it must write. One folder rather than the whole drive. It is ordinary security practice and it matters more here, because the thing holding the permissions can be talked into misusing them by any text it reads.

## Technical View

Applies to tool exposure, credential scope and data access. Practical measures include scoped tokens with short lifetimes, separate identities per agent rather than shared service accounts, read and write separation, and per-tool approval requirements for irreversible actions. The relevant threat model is the confused deputy: the agent's legitimate authority is what an injection attack borrows, so restricting authority bounds the damage regardless of the attack.

## Related

- [[Confused Deputy]]: the attack it bounds
- [[Sandboxing]]: the containment counterpart
- [[Prompt Injection]]: why authority must be limited
- [[Tenant Isolation]]: the same principle across customers
- [[Agent]]: what holds the permissions

---

Part of [[AI Terminology Index]], section: Agents and Tools.
