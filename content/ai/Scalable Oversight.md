---
title: "Scalable Oversight"
tags:
  - glossary/ai
  - ai/alignment
section: "Alignment and Safety Concepts"
summary: "The problem of supervising a system that is better than you at the task."
---

# Scalable Oversight

## Plain View

The problem of supervising a system that is better than you at the task. If a model writes ten thousand lines of code or a hundred-page analysis, checking it properly costs more than doing it yourself, and that gap widens as capability grows. Techniques here try to give a weaker supervisor leverage.

## Technical View

Approaches include decomposing a task into checkable parts, using models to assist evaluation, adversarial arrangements such as debate, recursive reward modelling where models help train the next stage's evaluators, and prover-verifier framings where generating a verifiable argument is required. The core assumption is that verification is easier than generation, which holds for many tasks and not all. It is the practical bottleneck on aligning systems past human expert level.

## Related

- [[Alignment]]: the problem it serves
- [[Debate]]: one proposed mechanism
- [[Weak-to-strong Generalisation]]: the empirical study of the same question
- [[LLM as a Judge]]: models assisting evaluation
- [[Constitutional AI]]: principles as a scaling device

---

Part of [[AI Terminology Index]], section: Alignment and Safety Concepts.
