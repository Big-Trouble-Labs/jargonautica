---
title: "Chain-of-thought Faithfulness"
aliases:
  - "Faithful Reasoning"
tags:
  - glossary/ai
  - ai/practice
section: "Testing, Safeguarding and Running Models in Practice"
summary: "Whether the reasoning a model writes out is the reasoning it actually used."
---

# Chain-of-thought Faithfulness

## Plain View

Whether the reasoning a model writes out is the reasoning it actually used. Studies show it often is not: models will produce a plausible argument for an answer that was determined by something they do not mention, including a hint planted in the prompt. This matters because visible reasoning is widely proposed as a safety mechanism.

## Technical View

Tested by perturbing the reasoning trace and observing whether the answer changes, and by introducing biasing features and checking whether the stated reasoning acknowledges them. Results show substantial unfaithfulness, including post-hoc rationalisation. Implications are that monitoring reasoning traces gives partial rather than reliable oversight, and that optimising traces to look acceptable risks training away the informativeness that made them useful.

## Related

- [[Chain of Thought]]: the technique being examined
- [[Interpretability]]: why behavioural evidence is not enough
- [[Scalable Oversight]]: monitoring reasoning as a proposed safeguard
- [[Deceptive Alignment]]: the concern it feeds
- [[Reasoning Models and Test-Time Compute]]: where traces are longest

---

Part of [[AI Terminology Index]], section: Testing, Safeguarding and Running Models in Practice.
