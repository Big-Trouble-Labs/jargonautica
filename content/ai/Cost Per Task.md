---
title: "Cost Per Task"
aliases:
  - "Unit Economics"
tags:
  - glossary/ai
  - ai/cost
section: "Cost, Speed and Service Levels"
summary: "What it actually costs to do one useful unit of work, as opposed to the headline price per million tokens."
---

# Cost Per Task

## Plain View

What it actually costs to do one useful unit of work, as opposed to the headline price per million tokens. A single support ticket resolved might involve retrieval, several model calls, a reranking step and a retry, and the number that matters to whoever signs off the project is the total for that ticket. Working it out early kills a lot of otherwise appealing ideas, which is a service.

## Technical View

Build it up from token counts per stage, including the system prompt and retrieved context that are resent on every call, multiplied by input and output prices, plus embedding, storage and any human review time. Retries, agent loops and long conversations dominate the tail, so measure the distribution rather than the mean. Levers include prompt caching for static prefixes, routing simple traffic to smaller models, tightening retrieval so fewer tokens are sent, and capping iterations. Compare against the cost of the process being replaced rather than against zero.

## Related

- [[Batch Inference]]: the cheapest route for non-interactive work
- [[Inference]]: where the money goes
- [[Caching]]: the biggest single lever
- [[Small Language Model]]: the routing lever
- [[Agent]]: the design that multiplies it fastest
- [[Tokens]]: the unit everything is billed in
- [[Rate Limits and Quotas]]: the other constraint on volume

---

Part of [[AI Terminology Index]], section: Cost, Speed and Service Levels.
