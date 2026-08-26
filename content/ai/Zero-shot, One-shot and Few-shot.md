---
title: "Zero-shot, One-shot and Few-shot"
aliases:
  - "Zero-shot"
  - "Few-shot"
  - "One-shot"
  - "In-context Learning"
tags:
  - glossary/ai
  - ai/runtime
section: "Controlling and Extending Behaviour at Run Time"
summary: "How many examples you give the model before asking it to do something."
---

# Zero-shot, One-shot and Few-shot

## Plain View

How many examples you give the model before asking it to do something. Zero-shot means you simply describe the task. Few-shot means you show it two or three worked examples first. Showing examples is often the fastest way to improve results, especially when you want a specific format, and it usually beats trying to describe that format in words.

## Technical View

This is in-context learning: the model adapts its behaviour from examples in the prompt without any parameter updates. It was one of the notable emergent properties of scale. Example selection and ordering both affect results measurably, and gains typically plateau after a handful of examples. Instruction-tuned models have narrowed the gap between zero-shot and few-shot performance considerably compared with early base models.

## Related

- [[Prompt Engineering]]: the craft this technique belongs to
- [[Emergent Capabilities]]: in-context learning appeared with scale
- [[Fine-tuning]]: the heavier alternative when examples are not enough
- [[Chain of Thought]]: often combined with worked examples
- [[Context Window]]: examples consume space in it

---

Part of [[AI Terminology Index]], section: Controlling and Extending Behaviour at Run Time.
