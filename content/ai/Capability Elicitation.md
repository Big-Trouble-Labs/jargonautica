---
title: "Capability Elicitation"
aliases:
  - "Elicitation"
tags:
  - glossary/ai
  - ai/practice
section: "Testing, Safeguarding and Running Models in Practice"
summary: "The effort to draw out the most a model can actually do when it is being tested, so that its abilities are not underestimated."
---

# Capability Elicitation

## Plain View

The effort to draw out the most a model can actually do when it is being tested, so that its abilities are not underestimated. A model may fail a test not because it lacks the skill but because the question was badly framed, it lacked the right tools or it was given too few attempts. Safety testing depends on finding the true ceiling, because a dangerous ability that testers missed is still there for someone else to find.

## Technical View

Methods include careful prompting and worked examples, access to tools and agent scaffolding, larger reasoning budgets, many attempts with the best selected, and task-specific fine-tuning, generally regarded as one of the strongest checks where weights are available. Under-elicitation is a recognised weakness of dangerous capability evaluations, because better scaffolding or prompting after release can raise measured performance well above launch figures. Evaluators such as Model Evaluation and Threat Research ('METR') have published guidance on elicitation effort, and results are more meaningful when the effort is reported and scaled to what a realistic attacker could bring. Fine-tuning-based elicitation also helps detect sandbagging.

## Related

- [[Dangerous Capability Evaluation]]: the tests it makes trustworthy
- [[Sandbagging]]: deliberate underperformance it tries to defeat
- [[Red Teaming]]: a related adversarial practice
- [[Benchmarks and Evals]]: scores that depend on elicitation effort
- [[Fine-tuning]]: among the strongest elicitation methods
- [[Responsible Scaling Policy]]: decisions that rest on elicited results

---

Part of [[AI Terminology Index]], section: Testing, Safeguarding and Running Models in Practice.
