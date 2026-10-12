---
title: "Authentication and Authorisation"
aliases:
  - "Authentication"
  - "Authorisation"
tags:
  - glossary/ai
  - ai/security
section: "Security and Privacy"
summary: "Authentication checks who is asking; authorisation decides what they are allowed to do."
---

# Authentication and Authorisation

## Plain View

Authentication checks who is asking; authorisation decides what they are allowed to do. Logging in with a password proves your identity, which is authentication. Whether you can then open a particular file is authorisation. With AI agents both matter twice over, because an agent acts on someone's behalf: the system needs to know which person the agent represents, and must limit it to what that person, and that task, permit.

## Technical View

Authentication uses passwords, certificates, multi-factor methods or federated identity; authorisation applies policies such as role-based or attribute-based access control. For agents the standard pattern is delegated authorisation through OAuth, where a user grants an agent a scoped, revocable token rather than sharing credentials, and the Model Context Protocol ('MCP') defines optional authorisation for remote servers, based on draft OAuth 2.1 as of its June 2025 revision. Common failures are agents running with broad service-account permissions, tokens leaking into prompts or logs, and the confused deputy problem, where an agent lends its own privileges to a request the user could not make. Authorisation belongs in code, never in the model's judgement.

## Related

- [[Least Privilege]]: how narrowly permissions should be granted
- [[Confused Deputy]]: the classic authorisation failure
- [[Secrets Management]]: where credentials should live
- [[Zero Trust]]: checking every request
- [[Model Context Protocol]]: a standard that specifies agent authorisation
- [[Audit Logging]]: recording who did what on whose behalf

---

Part of [[AI Terminology Index]], section: Security and Privacy.
