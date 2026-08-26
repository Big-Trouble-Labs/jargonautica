---
title: "Sandbox Escape"
tags:
  - glossary/ai
  - ai/security
section: "Security and Privacy"
summary: "Breaking out of the confined environment an agent was supposed to be limited to."
---

# Sandbox Escape

## Plain View

Breaking out of the confined environment an agent was supposed to be limited to. If code execution is offered, someone will eventually try, and the strength of the boundary is the difference between a contained incident and a compromised host.

## Technical View

Container escapes exploit kernel vulnerabilities, misconfigured capabilities, privileged mode or exposed sockets, which is why virtualisation or microVMs are preferred for untrusted code. Defence in depth includes seccomp and mandatory access control profiles, dropping capabilities, read-only filesystems, no network by default, non-root execution, resource limits and ephemeral instances. Assume the sandbox will eventually fail and ensure nothing valuable, particularly credentials, is inside it.

## Related

- [[Sandboxing]]: the boundary being broken
- [[Code Execution]]: the capability that creates the risk
- [[Secrets Management]]: why nothing valuable should be inside
- [[Least Privilege]]: limiting what an escape reaches

---

Part of [[AI Terminology Index]], section: Security and Privacy.
