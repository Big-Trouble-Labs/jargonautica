---
title: "Stop Sequence"
tags:
  - glossary/ai
  - ai/language-models
section: "Language Models Specifically"
summary: "A string that tells generation to end when it appears."
---

# Stop Sequence

## Plain View

A string that tells generation to end when it appears. Without one, a model will happily carry on past the answer and start writing the next turn of the conversation itself. Setting them correctly is a small detail that removes a whole class of odd output.

## Technical View

Matched on the decoded string rather than on tokens, since the target may span token boundaries, and the matched text is normally excluded from the returned output. Interacts with streaming, where a partial match must be buffered rather than emitted. Chat models have implicit stop tokens from their template, and additional application-level sequences are commonly used to terminate structured sections.

## Related

- [[Chat Template]]: which supplies implicit stop tokens
- [[Streaming]]: buffering complicates matching
- [[Structured Output]]: terminating a defined section
- [[Termination Condition]]: the agent-level equivalent

---

Part of [[AI Terminology Index]], section: Language Models Specifically.
