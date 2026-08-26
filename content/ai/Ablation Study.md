---
title: "Ablation Study"
tags:
  - glossary/ai
  - ai/measurement
section: "Measuring Performance"
summary: "Removing one part of a system to see whether it was doing anything."
---

# Ablation Study

## Plain View

Removing one part of a system to see whether it was doing anything. It is the only way to know which of your changes actually caused the improvement, and skipping it is how teams end up maintaining elaborate machinery that contributes nothing.

## Technical View

Systematically disables or replaces components while holding everything else fixed, reporting the delta on a stable evaluation set. Requires attention to interactions, since components can be individually unnecessary and jointly essential, and to variance, since a difference smaller than run-to-run noise is not a result. In language model applications, ablating prompt sections, retrieval stages and tool availability is the fastest route to understanding a pipeline.

## Related

- [[Baseline]]: the comparison point
- [[Error Analysis]]: the qualitative counterpart
- [[Regression Testing]]: detecting what a change broke
- [[Prompt Chaining]]: ablating stages of a pipeline

---

Part of [[AI Terminology Index]], section: Measuring Performance.
