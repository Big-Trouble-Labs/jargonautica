---
title: "Prompt"
aliases:
  - "Prompts"
tags:
  - glossary/ai
  - ai/building
section: "Building and Using Models"
summary: "Simply what you type in."
---

# Prompt

## Plain View

Simply what you type in. Everything the model produces is a continuation of it, which is why its wording matters more than most people expect. In most applications the prompt also includes instructions set by the developer that the user never sees, shaping how the model behaves.

## Technical View

The full prompt typically comprises a system message defining role and constraints, any conversation history, retrieved documents, and the current user turn. Every part consumes context and influences output. A significant security concern is prompt injection, where instructions embedded in content the model reads, such as a web page or an uploaded document, are treated as directives. This is a live and largely unsolved problem for any system that reads untrusted input.

## Related

- [[System Prompt]]: the developer-set part the user never sees
- [[Prompt Engineering]]: the craft of writing a good one
- [[Context Window]]: the space a prompt consumes
- [[Prompt Injection]]: the security problem prompts create
- [[Tokens]]: what a prompt is measured in

---

Part of [[AI Terminology Index]], section: Building and Using Models.
