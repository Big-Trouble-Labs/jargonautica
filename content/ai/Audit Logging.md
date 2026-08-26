---
title: "Audit Logging"
aliases:
  - "Audit Trail"
tags:
  - glossary/ai
  - ai/production
section: "Running It in Production"
summary: "The durable record of what happened: who asked what, what the system did, what it returned, and which versions were involved."
---

# Audit Logging

## Plain View

The durable record of what happened: who asked what, what the system did, what it returned, and which versions were involved. You need it before you need it, because the moment you need it is after something has gone wrong.

## Technical View

Should capture request and response payloads, identity, timestamps, version identifiers, tool invocations and their results, cost, and any guardrail or moderation decisions, in tamper-evident append-only storage with defined retention. Logs frequently contain personal data and sometimes secrets, so redaction, access control and retention limits are required. For agentic systems, the full trajectory rather than the final output is the meaningful record.

## Related

- [[Versioning]]: what should be stamped on each record
- [[Trajectory]]: the meaningful record for agents
- [[Retention Policy]]: how long logs are kept
- [[Personally Identifiable Information]]: logs frequently contain it
- [[Incident Response]]: the evidence you need afterwards

---

Part of [[AI Terminology Index]], section: Running It in Production.
