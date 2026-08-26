---
title: "Rollback"
tags:
  - glossary/ai
  - ai/production
section: "Running It in Production"
summary: "Getting back to the previous version quickly when something goes wrong."
---

# Rollback

## Plain View

Getting back to the previous version quickly when something goes wrong. Every part of the system needs this: model version, prompt, retrieval configuration and code. If rolling back a prompt requires a deployment, it will not happen fast enough.

## Technical View

Requires immutable versioned artefacts, a mechanism to switch versions without redeployment such as configuration-driven selection, and awareness of state changes that cannot be undone. Model provider deprecations remove the option entirely, which is an argument for validating an alternative in advance. Rollback should be routinely exercised rather than assumed to work, and the time to complete it is a metric worth tracking.

## Related

- [[Versioning]]: what makes rollback possible
- [[Canary Release]]: the stage that triggers it
- [[Model Deprecation]]: when rollback is no longer available
- [[Incident Response]]: the first action in many incidents

---

Part of [[AI Terminology Index]], section: Running It in Production.
