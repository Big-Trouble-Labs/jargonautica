---
title: "Chat Template"
tags:
  - glossary/ai
  - ai/language-models
section: "Language Models Specifically"
summary: "The exact formatting that turns a list of messages into the single string a model actually sees."
---

# Chat Template

## Plain View

The exact formatting that turns a list of messages into the single string a model actually sees. Each model family has its own, defined during training, and using the wrong one produces output that is subtly worse in ways that are hard to diagnose because nothing errors.

## Technical View

Usually specified as a template shipped with the tokeniser, inserting role markers and special tokens around each message and appending a generation prompt for the assistant turn. Mismatches degrade instruction following and safety behaviour without any explicit failure. It is also the boundary that separates system, user and tool content, so its integrity is directly relevant to injection resistance.

## Related

- [[Assistant Prefill]]: starting the assistant turn by hand
- [[Vocabulary and Special Tokens]]: the markers it inserts
- [[Base Model and Instruct Model]]: only instruct models expect one
- [[System Prompt]]: the role boundary it encodes
- [[Prompt]]: how messages become one string

---

Part of [[AI Terminology Index]], section: Language Models Specifically.
