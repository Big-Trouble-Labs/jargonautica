---
title: "Assistant Prefill"
aliases:
  - "Response Prefill"
tags:
  - glossary/ai
  - ai/language-models
section: "Language Models Specifically"
summary: "Starting the model's answer for it."
---

# Assistant Prefill

## Plain View

Starting the model's answer for it. Supply the first few characters of the reply and the model continues from there, which is a reliable way to force a format, skip preamble, or ensure an answer begins with a particular structure.

## Technical View

Appends partial assistant-role content to the prompt so generation continues it rather than starting fresh. Highly effective for enforcing JSON or a fixed opening, and cheaper than constrained decoding. Note the safety consideration: because it bypasses the model's natural turn opening, it has been used as a jailbreak technique, so applications should not expose it to untrusted users unrestricted.

## Related

- [[Structured Output]]: a cheap way to force a format
- [[Prompt]]: where it is appended
- [[Jailbreaking]]: why it should not be exposed to untrusted users
- [[Chat Template]]: the turn structure it bypasses

---

Part of [[AI Terminology Index]], section: Language Models Specifically.
