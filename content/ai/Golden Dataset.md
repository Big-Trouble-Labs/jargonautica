---
title: "Golden Dataset"
aliases:
  - "Evaluation Set"
  - "Regression Set"
tags:
  - glossary/ai
  - ai/measurement
section: "Measuring Performance"
summary: "A fixed set of examples with agreed correct answers that you test every change against."
---

# Golden Dataset

## Plain View

A fixed set of examples with agreed correct answers that you test every change against. Without one, improving a prompt or swapping a model becomes guesswork and opinion. Twenty carefully chosen cases assembled early are worth more than a thousand assembled late, and building one is the highest-value unglamorous work in any language model project.

## Technical View

Also called an evaluation or regression set. It should cover typical cases, known edge cases and previously observed failures, with each entry carrying an input, an expected output or grading rubric, and provenance. It must be versioned alongside prompts and model configuration, kept out of any fine-tuning data, and grown deliberately as new failure modes appear in production. Running it automatically in a deployment pipeline turns a subjective argument about whether a change helped into an observable regression test.

## Related

- [[Benchmarks and Evals]]: the wider practice
- [[LLM as a Judge]]: how open-ended entries get graded
- [[Machine Learning Operations]]: running it as a regression test
- [[Model Deprecation]]: what makes a model migration measurable
- [[Prompt Engineering]]: what turns prompt changes from opinion into evidence

---

Part of [[AI Terminology Index]], section: Measuring Performance.
