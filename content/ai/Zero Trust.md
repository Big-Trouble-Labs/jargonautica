---
title: "Zero Trust"
aliases:
  - "Zero Trust Architecture"
tags:
  - glossary/ai
  - ai/security
section: "Security and Privacy"
summary: "A security approach that grants nothing automatically: every person, device and program must prove who it is and that it is allowed, each time it asks for something."
---

# Zero Trust

## Plain View

A security approach that grants nothing automatically: every person, device and program must prove who it is and that it is allowed, each time it asks for something. Older security treated anything inside the company network as safe. Zero trust assumes attackers may already be inside, so it checks every request and gives the least access needed. For AI systems, the same thinking applies to agents and the tools they call.

## Technical View

Popularised by Forrester analyst John Kindervag in 2010 and codified by the United States National Institute of Standards and Technology ('NIST') in Special Publication 800-207 (August 2020), which moves defences from network perimeters to users, devices and individual resources. Authentication and authorisation happen per session against policy, using identity, device state and context. Applied to AI, it means treating models, agents and tool servers as distinct identities with scoped, short-lived credentials, never treating model output as an authorisation decision, and handling retrieved content and tool descriptions as untrusted input. The costs are policy complexity and friction for users.

## Related

- [[Least Privilege]]: the access rule at its core
- [[Authentication and Authorisation]]: the checks it applies to every request
- [[Attack Surface]]: what it aims to shrink
- [[Threat Model]]: the assume-breach starting point
- [[Confused Deputy]]: a failure it is designed to prevent
- [[Tenant Isolation]]: separation it extends inside the network

---

Part of [[AI Terminology Index]], section: Security and Privacy.
