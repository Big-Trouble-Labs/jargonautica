---
title: "Failure Taxonomy"
tags:
  - glossary/ai
  - ai/measurement
section: "Measuring Performance"
summary: "A named list of the ways your system goes wrong."
---

# Failure Taxonomy

## Plain View

A named list of the ways your system goes wrong. Hallucinated citation, refused a reasonable request, ignored part of the instruction, retrieved the wrong document, formatted the output incorrectly. Naming them turns a vague sense that quality is patchy into a tracked list with counts that go up and down.

## Technical View

Built inductively from error analysis and maintained as a living artefact, with each category defined by a discriminating criterion and illustrated by examples. It enables per-category tracking over releases, targeted evaluation sets, and routing of failures to the responsible component. Categories should be mutually exclusive where possible and explicitly allow multiple labels where not, and the distribution across categories usually shifts substantially after each fix.

## Related

- [[Error Analysis]]: the activity that builds it
- [[Golden Dataset]]: categories become test cases
- [[Hallucination]]: one common category
- [[Refusal and Over-refusal]]: another common category
- [[Incident Response]]: classifying what went wrong

---

Part of [[AI Terminology Index]], section: Measuring Performance.
