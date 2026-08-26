---
title: "Regression Testing"
tags:
  - glossary/ai
  - ai/measurement
section: "Measuring Performance"
summary: "Checking that a change did not break something that used to work."
---

# Regression Testing

## Plain View

Checking that a change did not break something that used to work. In ordinary software this is routine. With models it is harder, because the output is not a fixed string and 'still works' has to be defined by a grader rather than an equality check, but the discipline is the same and just as necessary.

## Technical View

Runs a versioned evaluation set on every change to prompt, model, retrieval configuration or tooling, comparing against the previous run with a tolerance band that accounts for sampling variance. Graders may be exact-match, rule-based or model-based. Failures should be categorised rather than merely counted, since an overall score can hold steady while a specific important behaviour disappears.

## Related

- [[Golden Dataset]]: what it runs against
- [[Versioning]]: what changes are being tested
- [[Model Deprecation]]: the migration it makes measurable
- [[Machine Learning Operations]]: where it lives in the pipeline
- [[Canary Release]]: the production counterpart

---

Part of [[AI Terminology Index]], section: Measuring Performance.
