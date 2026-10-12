---
title: "Application Programming Interface"
aliases:
  - "API"
tags:
  - glossary/ai
  - ai/building
section: "Building and Using Models"
summary: "A defined way for one piece of software to ask another for something and get an answer back."
---

# Application Programming Interface

## Plain View

A defined way for one piece of software to ask another for something and get an answer back. When an app shows the weather, it sends a request to a weather service's interface and receives the forecast. Most businesses use AI models this way: their software sends text to the provider's interface and receives the model's reply, without ever running the model themselves.

## Technical View

A contract specifying the requests a service accepts and the responses it returns, typically HyperText Transfer Protocol ('HTTP') endpoints exchanging JavaScript Object Notation ('JSON'), with authentication by key or token. Model APIs expose parameters such as temperature, token limits, tool definitions and structured output schemas, and meter usage per token. Engineering concerns include rate limits, timeouts, retries with idempotency, versioning and deprecation of models behind a stable endpoint, and the data handling terms attached to each call. Many providers converge on similar request shapes, which eases switching but does not remove behavioural differences between models.

## Related

- [[Serving Endpoint]]: what sits behind the interface
- [[Rate Limits and Quotas]]: how usage is constrained
- [[Tool Use and Function Calling]]: models calling other interfaces
- [[Model Deprecation]]: why versions behind it change
- [[Vendor Lock-in]]: the cost of depending on one provider's interface
- [[Idempotency and Retries]]: making calls safe to repeat

---

Part of [[AI Terminology Index]], section: Building and Using Models.
