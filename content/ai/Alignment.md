---
title: "Alignment"
tags:
  - glossary/ai
  - ai/risks
section: "Problems, Risks and Ambitions"
summary: "The broad problem of getting a model to do what people actually want and intend, rather than something that technically satisfies the instruction but misses the point."
---

# Alignment

## Plain View

The broad problem of getting a model to do what people actually want and intend, rather than something that technically satisfies the instruction but misses the point. It covers everyday matters, such as a model refusing genuinely harmful requests while remaining useful for legitimate ones, and longer term questions about maintaining control of systems more capable than the people overseeing them.

## Technical View

The core difficulty is specification: any measurable proxy for what we want can be optimised in unintended ways, sometimes called reward hacking or Goodhart's law. Related concerns include deceptive alignment, where a system behaves well under observation and differently otherwise, and scalable oversight, the question of how humans supervise outputs they cannot readily evaluate. Active research directions include interpretability, adversarial testing, and using models to help evaluate other models.

## Related

- [[Reinforcement Learning from Human Feedback]]: the main technique used for it
- [[Guardrails]]: the run-time complement to it
- [[Artificial General Intelligence]]: why the problem is treated as urgent
- [[Red Teaming]]: how alignment is stress-tested
- [[Interpretability]]: understanding the inside as a route to trusting it
- [[Bias]]: one of the concrete things alignment addresses

---

Part of [[AI Terminology Index]], section: Problems, Risks and Ambitions.
