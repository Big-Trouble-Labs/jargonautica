---
title: "System Prompt"
tags:
  - glossary/ai
  - ai/runtime
section: "Controlling and Extending Behaviour at Run Time"
summary: "A set of instructions given to the model by whoever built the application, sitting above and before anything the user types."
---

# System Prompt

## Plain View

A set of instructions given to the model by whoever built the application, sitting above and before anything the user types. It defines the model's role, tone, limits and available information. Users generally never see it, and it explains much of why the same underlying model behaves quite differently across different products.

## Technical View

Usually a distinct message role that models are trained to weight more heavily than user turns, though the separation is a matter of training rather than a hard architectural boundary, which is why prompt injection and instruction-override attacks remain possible. System prompts occupy context on every request, making them a natural target for prompt caching.

## Related

- [[Prompt]]: the wider thing this is part of
- [[Prompt Injection]]: the attack that tries to override it
- [[Caching]]: why static instructions go at the front
- [[Guardrails]]: the checks that sit outside the model instead
- [[Alignment]]: shaping behaviour at run time rather than in training

---

Part of [[AI Terminology Index]], section: Controlling and Extending Behaviour at Run Time.
