---
title: "Faithfulness"
tags:
  - glossary/ai
  - ai/retrieval
section: "Retrieval and Knowledge"
summary: "Whether the answer actually reflects the material it was given, as opposed to whether it happens to be true."
---

# Faithfulness

## Plain View

Whether the answer actually reflects the material it was given, as opposed to whether it happens to be true. A system can produce a correct answer unfaithfully by drawing on training data instead of your documents, which is a problem, because next time the training data is wrong you will not know.

## Technical View

Distinct from factual accuracy and from answer relevance. Measured by decomposing the response into atomic claims and checking each for entailment against the retrieved context, typically using a model judge or a natural language inference model. Low faithfulness with high accuracy indicates the model is answering from parametric knowledge rather than context, which is unreliable for changeable facts and undermines the point of retrieval.

## Related

- [[Grounding and Citation]]: the mechanism it evaluates
- [[Hallucination]]: the related but distinct failure
- [[Retrieval Augmented Generation]]: the setting it applies to
- [[LLM as a Judge]]: how it is usually measured

---

Part of [[AI Terminology Index]], section: Retrieval and Knowledge.
