---
title: "Code Model"
tags:
  - glossary/ai
  - ai/modalities
section: "Modalities and Applications"
summary: "Models specialised in programming."
---

# Code Model

## Plain View

Models specialised in programming. Code differs from prose in useful ways: it has strict syntax, it can be executed, and correctness can often be checked automatically. That last property is why progress here has been faster than in most other areas.

## Technical View

Trained on large code corpora with objectives including fill-in-the-middle, which supports completion with surrounding context rather than only continuation. Evaluated by functional correctness against test suites rather than text similarity, and increasingly on repository-level tasks requiring changes across multiple files. Repository context, dependency awareness and build environment access matter more to practical performance than raw benchmark scores on isolated functions.

## Related

- [[Agentic Coding]]: what these models enable
- [[Pass@k]]: how they are measured
- [[Code Execution]]: verification by running it
- [[Large Language Model]]: the general family
- [[Data Mixture]]: code improves general reasoning

---

Part of [[AI Terminology Index]], section: Modalities and Applications.
