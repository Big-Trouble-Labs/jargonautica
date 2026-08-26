---
title: "Small Language Model"
aliases:
  - "SLM"
tags:
  - glossary/ai
  - ai/efficiency
section: "Making Models Smaller, Faster and Cheaper"
summary: "A deliberately compact model, typically small enough to run on a laptop or a phone."
---

# Small Language Model

## Plain View

A deliberately compact model, typically small enough to run on a laptop or a phone. It will lose to a frontier model on hard reasoning, and for a well-defined narrow job it is often indistinguishable, while costing a fraction as much, responding faster and keeping data on the device. A great deal of practical work does not need the largest available model.

## Technical View

Usually in the range of one to a few tens of billions of parameters, produced through a combination of distillation, careful data curation and training on far more tokens than compute-optimal scaling would suggest. Quantised to four or eight bits they fit in consumer memory. The sensible pattern is routing: a small model handles the bulk of traffic and escalates to a larger one when confidence or task type warrants, which can cut cost substantially with little quality loss provided the routing itself is evaluated.

## Related

- [[Distillation]]: how most of them are made
- [[Quantisation]]: what makes them fit
- [[On-device Inference]]: where they are most useful
- [[Cost Per Task]]: the reason to route traffic to one
- [[Large Language Model]]: the thing being traded down from

---

Part of [[AI Terminology Index]], section: Making Models Smaller, Faster and Cheaper.
