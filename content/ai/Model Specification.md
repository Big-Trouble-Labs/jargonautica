---
title: "Model Specification"
aliases:
  - "Model Spec"
tags:
  - glossary/ai
  - ai/alignment
section: "Alignment and Safety Concepts"
summary: "A written document in which an AI developer sets out how it wants its models to behave: what they should help with, what they should decline, and how to weigh goals such as helpfulness, honesty and safety when they conflict."
---

# Model Specification

## Plain View

A written document in which an AI developer sets out how it wants its models to behave: what they should help with, what they should decline, and how to weigh goals such as helpfulness, honesty and safety when they conflict. It serves as a target for training and a public statement people can hold the developer to, though it describes intended behaviour and does not guarantee the model follows it.

## Technical View

OpenAI published a first Model Spec in May 2024, organised into objectives, rules and default behaviours, with a chain of command for when developer and user instructions conflict; Anthropic publishes a constitution for its Claude models that plays a similar role. Specifications guide human feedback guidelines and synthetic training data, and some developers train models to reason over the specification directly. They also give evaluators a reference for deciding whether an output is a bug or intended. Weaknesses are that natural language leaves ambiguity, conflicting principles need case-by-case judgement, and conformance has to be measured empirically rather than assumed from the document.

## Related

- [[Constitutional AI]]: a training method built on written principles
- [[System Prompt]]: where operators adjust behaviour within the specification
- [[Refusal and Over-refusal]]: where refusal boundaries are defined
- [[Reinforcement Learning from Human Feedback]]: the training it guides
- [[Alignment]]: the behaviour it sets out to define

---

Part of [[AI Terminology Index]], section: Alignment and Safety Concepts.
