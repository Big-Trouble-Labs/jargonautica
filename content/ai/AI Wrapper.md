---
title: "AI Wrapper"
aliases:
  - "LLM Wrapper"
tags:
  - glossary/ai
  - ai/product
section: "Product and Adoption"
summary: "A product that adds its own interface, workflow or data around someone else's AI model, rather than building a model of its own."
---

# AI Wrapper

## Plain View

A product that adds its own interface, workflow or data around someone else's AI model, rather than building a model of its own. A great deal of useful software is built this way. The term is often used dismissively, implying the product could be copied easily or made redundant when the maker of the underlying model adds the same feature.

## Technical View

Typically combines a third-party model accessed through an Application Programming Interface ('API') with prompts, retrieval over proprietary data, integrations, evaluation and a user experience tuned to one job. Defensibility rests on what the model provider cannot easily replicate: distribution, proprietary data, depth of workflow, domain trust and accumulated user feedback. Risks include dependence on one vendor's pricing, rate limits, deprecations and behaviour changes, and margin pressure when token costs dominate. Routing across several models and a vendor-neutral design reduce that exposure but do not remove it.

## Related

- [[Build versus Buy]]: the decision it represents
- [[Vendor Lock-in]]: the dependence it carries
- [[Foundation Model]]: what sits underneath
- [[Model Router]]: spreading the dependence across models
- [[Model Deprecation]]: an upstream change it must absorb
- [[Application Programming Interface]]: how it reaches the model

---

Part of [[AI Terminology Index]], section: Product and Adoption.
