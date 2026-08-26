---
title: "Prompt Engineering"
tags:
  - glossary/ai
  - ai/building
section: "Building and Using Models"
summary: "The practice of phrasing your input to get better results."
---

# Prompt Engineering

## Plain View

The practice of phrasing your input to get better results. The reliable basics: be specific about what you want, state the format you need, give an example or two, and provide relevant background rather than assuming it is known. Asking a model to work through a problem step by step often produces noticeably better answers on anything requiring reasoning.

## Technical View

Established techniques include few-shot prompting, supplying worked examples in the prompt; chain-of-thought prompting, eliciting intermediate reasoning steps before an answer; and structured output constraints. Newer reasoning-focused models do much of this internally and can respond poorly to prompting styles designed for earlier generations. The field moves quickly and specific tricks age fast, while the general principle of clear, specific, well-contextualised instruction does not.

## Related

- [[Prompt]]: the thing being engineered
- [[Zero-shot, One-shot and Few-shot]]: the examples-in-prompt technique
- [[Chain of Thought]]: the step-by-step technique
- [[Structured Output]]: asking for a strict machine-readable format
- [[System Prompt]]: where developer-level instructions go

---

Part of [[AI Terminology Index]], section: Building and Using Models.
