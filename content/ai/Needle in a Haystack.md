---
title: "Needle in a Haystack"
aliases:
  - "NIAH"
tags:
  - glossary/ai
  - ai/measurement
section: "Measuring Performance"
summary: "A test that hides one specific fact in a very long document and asks the model to find it."
---

# Needle in a Haystack

## Plain View

A test that hides one specific fact in a very long document and asks the model to find it. By moving the fact to different places and making the document longer or shorter, testers can see whether a model really uses everything it has been given or loses track of parts of it. It is a quick check on claims about how much text a model can handle.

## Technical View

Popularised in 2023 by Greg Kamradt's open-source test, which inserts a sentence at varying depths in filler text of varying lengths and plots retrieval accuracy as a heat map. Its weakness is that it measures literal lookup of an out-of-place sentence, which modern long-context models largely pass, while real tasks need multi-hop reasoning, aggregation across many facts, and resistance to distractors. Harder successors such as RULER add multiple needles, variable tracking and aggregation, and generally show effective context well below the advertised maximum.

## Related

- [[Context Window]]: the capacity it probes
- [[Lost in the Middle]]: the effect it often reveals
- [[Context Length Extension]]: the methods it checks
- [[Benchmark Saturation]]: what happened to the simple version
- [[Benchmarks and Evals]]: the wider practice

---

Part of [[AI Terminology Index]], section: Measuring Performance.
