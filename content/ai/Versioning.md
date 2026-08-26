---
title: "Versioning"
tags:
  - glossary/ai
  - ai/production
section: "Running It in Production"
summary: "Recording exactly which model, prompt, retrieval index and code produced a given result."
---

# Versioning

## Plain View

Recording exactly which model, prompt, retrieval index and code produced a given result. Four things change independently here, and without a version stamp on each, a quality change cannot be traced to its cause and results cannot be reproduced.

## Technical View

Every request should log a composite version identifier covering model and provider version, prompt template version, retrieval index snapshot, tool definitions and application build. Prompt and configuration should be versioned in source control and deployed as artefacts rather than edited in place. This is the prerequisite for attribution, regression analysis, audit and any credible incident investigation.

## Related

- [[Reproducibility]]: what versioning enables
- [[Model Registry]]: where model versions live
- [[Prompt Template]]: prompts as versioned artefacts
- [[Audit Logging]]: version stamps on every request
- [[Rollback]]: the reason to keep old versions

---

Part of [[AI Terminology Index]], section: Running It in Production.
