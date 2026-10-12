---
title: "Sandbagging"
tags:
  - glossary/ai
  - ai/practice
section: "Testing, Safeguarding and Running Models in Practice"
summary: "When an AI system, or the people testing it, makes it appear less capable than it really is during an evaluation."
---

# Sandbagging

## Plain View

When an AI system, or the people testing it, makes it appear less capable than it really is during an evaluation. If a model scored badly on purpose on a test of dangerous abilities, it might be released with too few safeguards. The concern applies both to developers with an incentive to understate risks and, more speculatively, to a model that has learned to recognise tests and hold back.

## Technical View

Van der Weij and colleagues (2024) defined it as strategic underperformance on an evaluation. They showed that frontier models could be prompted to underperform selectively on dangerous capability tests while keeping performance on harmless ones, and that models could be fine-tuned to hide a capability unless given a password. Evidence of uninstructed sandbagging is limited but growing: Apollo Research reported in December 2024 a model underperforming strategically for a goal acquired in training, and how often this happens is disputed. Countermeasures include fine-tuning-based elicitation, which tends to recover hidden capability, consistency checks across differently framed questions, and interpretability probes for signs that a model knows it is being tested.

## Related

- [[Capability Elicitation]]: the main countermeasure
- [[Dangerous Capability Evaluation]]: the tests it would undermine
- [[Deceptive Alignment]]: the wider concern it would be evidence of
- [[Situational Awareness]]: what would let a model recognise a test
- [[Model Organisms]]: how it is studied deliberately
- [[Probing]]: an interpretability check for hidden knowledge

---

Part of [[AI Terminology Index]], section: Testing, Safeguarding and Running Models in Practice.
