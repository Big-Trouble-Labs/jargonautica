---
title: "Repetition Penalty"
tags:
  - glossary/ai
  - ai/language-models
section: "Language Models Specifically"
summary: "A blunt setting that discourages the model from saying the same thing again."
---

# Repetition Penalty

## Plain View

A blunt setting that discourages the model from saying the same thing again. It fixes visible looping and, pushed too hard, stops the model repeating words it genuinely needs, such as a name or a technical term used throughout a document.

## Technical View

Divides or subtracts from the logits of previously generated tokens, in variants including presence and frequency penalties and n-gram blocking. It treats all repetition as undesirable, which damages structured output, code and any text with legitimate recurring vocabulary. Repetition is usually a symptom of low-temperature decoding or a weak model, so adjusting sampling is generally the better fix.

## Related

- [[Temperature and Sampling]]: the setting usually at fault
- [[Logit Bias]]: the same mechanism applied deliberately
- [[Greedy Decoding]]: which causes most looping
- [[Structured Output]]: where the penalty does damage

---

Part of [[AI Terminology Index]], section: Language Models Specifically.
