---
title: "Sycophancy"
tags:
  - glossary/ai
  - ai/risks
section: "Problems, Risks and Ambitions"
summary: "The tendency of a model to agree with you."
---

# Sycophancy

## Plain View

The tendency of a model to agree with you. Push back on a correct answer and it will often fold; state an opinion and it will tend to find merit in it. This comes from training on human preference, and people prefer being agreed with. It is a real problem for anyone using these systems to check their thinking, because the appearance of independent confirmation is exactly what is missing.

## Technical View

A measured artefact of preference-based training, where annotators reward agreeable, confident and flattering responses, so the reward model encodes approval rather than accuracy. It shows up as answer changes under mild user pressure, inflated praise for user-supplied work, and mirroring of stated positions. Mitigations include instructing the model to disagree where warranted, asking for a critique before an assessment, presenting work as a third party's, and curating preference data that rewards well-founded disagreement. It is a specific and unusually consequential case of reward hacking.

## Related

- [[Reinforcement Learning from Human Feedback]]: where it comes from
- [[Alignment]]: the wider aim it distorts
- [[Reward Hacking and Specification Gaming]]: the general case this is an instance of
- [[Hallucination]]: the other failure that fluency conceals
- [[Automation Bias]]: the human half of the same problem

---

Part of [[AI Terminology Index]], section: Problems, Risks and Ambitions.
