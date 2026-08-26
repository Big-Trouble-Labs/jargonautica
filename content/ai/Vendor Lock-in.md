---
title: "Vendor Lock-in"
tags:
  - glossary/ai
  - ai/product
section: "Product and Adoption"
summary: "How hard it would be to move."
---

# Vendor Lock-in

## Plain View

How hard it would be to move. Prompts tuned to one model, a fine-tuned model that cannot be exported, embeddings that only work with one provider's model, and data held in a proprietary format all raise the cost of leaving. Some of that is an acceptable price for capability; the point is to know what you are accepting.

## Technical View

Lock-in sources include model-specific prompt tuning, provider-specific tool and structured output formats, fine-tuned weights that cannot be extracted, embeddings requiring full re-indexing on model change, and proprietary orchestration. Mitigations include an internal abstraction over providers, maintaining a portable evaluation suite to qualify alternatives quickly, exportable data formats, and periodically testing a secondary provider rather than assuming portability.

## Related

- [[Build versus Buy]]: the decision it shapes
- [[Model Deprecation]]: dependence on someone else's roadmap
- [[Embeddings]]: re-indexing cost on model change
- [[Golden Dataset]]: what makes qualifying an alternative fast
- [[Open Weights]]: the independence argument

---

Part of [[AI Terminology Index]], section: Product and Adoption.
