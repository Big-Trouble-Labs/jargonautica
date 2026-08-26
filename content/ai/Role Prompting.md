---
title: "Role Prompting"
tags:
  - glossary/ai
  - ai/runtime
section: "Controlling and Extending Behaviour at Run Time"
summary: "Telling the model to act as a particular kind of person: a careful editor, an experienced accountant, a sceptical reviewer."
---

# Role Prompting

## Plain View

Telling the model to act as a particular kind of person: a careful editor, an experienced accountant, a sceptical reviewer. It shifts vocabulary, tone and what the model attends to. It does not add knowledge or ability, despite a great deal of advice implying otherwise.

## Technical View

Conditions generation on a persona, measurably affecting style, verbosity and default assumptions, with modest and inconsistent effects on task accuracy. Evidence for persona-based accuracy gains is weak and does not reliably reproduce across models. It is most useful when the role genuinely disambiguates the task, such as specifying an audience, and least useful when substituted for explicit instructions about what is wanted.

## Related

- [[Prompt Engineering]]: the practice it belongs to
- [[System Prompt]]: where roles are usually set
- [[Prompt Template]]: how it gets reused
- [[Expectation Setting]]: audience framing as the useful part

---

Part of [[AI Terminology Index]], section: Controlling and Extending Behaviour at Run Time.
