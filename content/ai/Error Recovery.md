---
title: "Error Recovery"
tags:
  - glossary/ai
  - ai/product
section: "Product and Adoption"
summary: "Designing for the system being wrong, because it will be."
---

# Error Recovery

## Plain View

Designing for the system being wrong, because it will be. Can the user see what it did, correct part of it without redoing everything, and undo it afterwards. Products that assume success and offer only accept or reject force people into all-or-nothing decisions on work that is usually mostly right.

## Technical View

Patterns include editable output rather than fixed responses, partial regeneration of a selected section, showing the inputs used so the user can correct the premise rather than the conclusion, diffs against a previous version, and explicit undo for actions with side effects. For agents, the equivalent is checkpointing so a trajectory can be resumed from a point before the mistake rather than restarted.

## Related

- [[Feedback Loop]]: capturing what the user changed
- [[Reversibility]]: the strongest form of it
- [[Trust Calibration]]: designing for the system being wrong
- [[Escalation to a Human]]: the exit route
- [[Trajectory]]: resuming from a checkpoint

---

Part of [[AI Terminology Index]], section: Product and Adoption.
