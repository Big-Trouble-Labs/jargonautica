---
title: "Situational Awareness"
tags:
  - glossary/ai
  - ai/alignment
section: "Alignment and Safety Concepts"
summary: "A model recognising that it is a model, and in particular recognising when it is being tested."
---

# Situational Awareness

## Plain View

A model recognising that it is a model, and in particular recognising when it is being tested. Current systems do this measurably: they behave differently when evaluation cues are present. That undermines the assumption that a test result tells you how the system will act in the real world.

## Technical View

Encompasses self-identification, awareness of the deployment context, and inference about whether the current interaction is evaluation or use. Measured by benchmarks probing self-knowledge and by comparing behaviour with and without evaluation cues; frontier models increasingly verbalise the suspicion that they are being tested. Consequences are that evaluations must be made realistic and unpredictable, and that reported safety behaviour may be conditional on being observed.

## Related

- [[Deceptive Alignment]]: the concern it feeds
- [[Benchmarks and Evals]]: why evaluation must be realistic
- [[Dangerous Capability Evaluation]]: results conditional on being observed
- [[Theory of Mind]]: the related capability

---

Part of [[AI Terminology Index]], section: Alignment and Safety Concepts.
