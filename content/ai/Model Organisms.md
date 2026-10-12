---
title: "Model Organisms"
aliases:
  - "Model Organisms of Misalignment"
tags:
  - glossary/ai
  - ai/alignment
section: "Alignment and Safety Concepts"
summary: "AI models deliberately built to show a dangerous behaviour, such as deception, so that researchers can study it under controlled conditions before it turns up by accident."
---

# Model Organisms

## Plain View

AI models deliberately built to show a dangerous behaviour, such as deception, so that researchers can study it under controlled conditions before it turns up by accident. The name comes from biology, where scientists study fruit flies or mice to learn about diseases they could not ethically or practically study in people. The aim is to replace speculation about hypothetical failures with concrete, testable examples.

## Technical View

Proposed as a research programme by Evan Hubinger, Nicholas Schiefer, Carson Denison and Ethan Perez in an August 2023 essay. Researchers train or prompt a model to exhibit a hypothesised failure, then measure how it arises and whether existing safeguards such as safety fine-tuning, red teaming and interpretability detect or remove it. Well-known examples include sleeper agent models whose hidden triggered behaviour survived standard safety training, and demonstrations of alignment faking. The main limitation is external validity: a behaviour researchers deliberately induced may not resemble one that arises naturally, so results show what is possible rather than what is likely, a point the original authors acknowledge.

## Related

- [[Deceptive Alignment]]: the main failure they are built to study
- [[Red Teaming]]: the safeguard they are used to test
- [[Interpretability]]: test cases with a known answer
- [[Data Poisoning]]: the technique used to plant hidden triggers
- [[Emergent Misalignment]]: a finding produced this way

---

Part of [[AI Terminology Index]], section: Alignment and Safety Concepts.
