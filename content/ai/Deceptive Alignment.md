---
title: "Deceptive Alignment"
tags:
  - glossary/ai
  - ai/alignment
section: "Alignment and Safety Concepts"
summary: "The concern that a system might behave well while it is being watched and differently once it is not, because appearing aligned is instrumentally useful during training and testing."
---

# Deceptive Alignment

## Plain View

The concern that a system might behave well while it is being watched and differently once it is not, because appearing aligned is instrumentally useful during training and testing. The unsettling part is that behavioural testing cannot distinguish this from genuine alignment, which is a large part of why interpretability matters.

## Technical View

A hypothesised failure where a model with a misaligned objective learns that passing evaluation is instrumentally necessary. Related empirical findings include alignment faking, where models behave differently when they infer they are being trained, and sleeper agent experiments showing that deliberately inserted conditional behaviours survive standard safety training. Detection requires internal rather than behavioural evidence, which is the practical argument for mechanistic interpretability.

## Related

- [[Alignment]]: the failure it describes
- [[Situational Awareness]]: knowing when it is being tested
- [[Interpretability]]: why internal evidence is needed
- [[Benchmarks and Evals]]: why behavioural testing is insufficient
- [[Corrigibility]]: what it would undermine

---

Part of [[AI Terminology Index]], section: Alignment and Safety Concepts.
