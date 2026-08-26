---
title: "Delimiters and Structure"
aliases:
  - "Delimiters"
tags:
  - glossary/ai
  - ai/runtime
section: "Controlling and Extending Behaviour at Run Time"
summary: "Marking clearly where the instructions end and the content begins, using tags, headings or fences."
---

# Delimiters and Structure

## Plain View

Marking clearly where the instructions end and the content begins, using tags, headings or fences. It sounds trivial and it removes a lot of confusion, particularly when the content itself contains instructions or looks like a question.

## Technical View

Explicit delimiters improve instruction following and reduce the chance that content is interpreted as directive, though they are a robustness measure rather than a security boundary, since determined injection defeats them. Models differ in which conventions they respond to best, with tag-style markup working well for some families. Structure also aids caching, since stable, clearly bounded sections can be positioned at the front of the prompt.

## Related

- [[Role Prompting]]: the other common prompt convention
- [[Prompt Engineering]]: the practice
- [[Prompt Injection]]: a robustness measure, not a security boundary
- [[Caching]]: stable structure aids prefix caching
- [[Prompt Template]]: where structure is codified

---

Part of [[AI Terminology Index]], section: Controlling and Extending Behaviour at Run Time.
