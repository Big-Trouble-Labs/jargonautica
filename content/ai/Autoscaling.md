---
title: "Autoscaling"
tags:
  - glossary/ai
  - ai/production
section: "Running It in Production"
summary: "Adding and removing capacity as demand changes."
---

# Autoscaling

## Plain View

Adding and removing capacity as demand changes. For ordinary web services this is routine; for models it is awkward, because starting a new instance means loading tens of gigabytes of weights, which takes minutes rather than seconds.

## Technical View

Scaling signals should be queue depth or time to first token rather than processor utilisation, which correlates poorly with accelerator saturation. The dominant constraint is cold start latency from weight loading, mitigated by warm pools, pre-loaded images, weight streaming and keeping a minimum replica count. Scaling to zero saves money and is rarely acceptable for interactive workloads. Accelerator availability itself may be the binding limit rather than budget.

## Related

- [[Cold Start]]: the constraint that makes it awkward
- [[Serving Endpoint]]: what is being scaled
- [[Load Testing]]: how limits are discovered
- [[Cost Per Task]]: idle capacity versus tail latency

---

Part of [[AI Terminology Index]], section: Running It in Production.
