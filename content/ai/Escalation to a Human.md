---
title: "Escalation to a Human"
aliases:
  - "Escalation"
  - "Human Handover"
tags:
  - glossary/ai
  - ai/product
section: "Product and Adoption"
summary: "Knowing when to stop and hand over."
---

# Escalation to a Human

## Plain View

Knowing when to stop and hand over. The trigger should be defined in advance rather than left to the model, and the handover needs to carry the context, because nothing annoys a person more than being asked to repeat everything they just told the machine.

## Technical View

Triggers include low confidence, detected sensitive categories such as distress or complaint, repeated failure, explicit user request, and high-stakes action classes. The handover should transfer conversation history, a summary of what was attempted, and any partial work. Measure escalation rate and post-escalation resolution, since a system optimised only for deflection will suppress escalations that should have happened, which is the most common failure in customer service deployments.

## Related

- [[Human in the Loop]]: the general pattern
- [[Model Confidence and Calibration]]: a common trigger
- [[Error Recovery]]: the wider design question
- [[Handoff]]: the agent-to-agent equivalent
- [[Service Level Objective]]: escalation rate as a measure

---

Part of [[AI Terminology Index]], section: Product and Adoption.
