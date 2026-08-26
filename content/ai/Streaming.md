---
title: "Streaming"
tags:
  - glossary/ai
  - ai/runtime
section: "Controlling and Extending Behaviour at Run Time"
summary: "Sending each word to the screen as it is produced rather than waiting for the whole answer."
---

# Streaming

## Plain View

Sending each word to the screen as it is produced rather than waiting for the whole answer. It does not make anything faster; it makes the wait visible and tolerable, which for a long response is the difference between a product that feels responsive and one that feels broken. The trade-off is that anything you wanted to check before the user saw it now has to be checked after they have seen it, or not at all.

## Technical View

Implemented over server-sent events or websockets, with tokens emitted as generated. It reduces perceived latency and makes time to first token the number users actually feel. Complications include output-side guardrails, which either need the full response, defeating the purpose, or must operate on a delay over partial output; structured output, which is not valid until complete; and error handling once a response has partially arrived. Clients must also handle partial multi-byte characters and cancellation.

## Related

- [[Latency, Throughput and Time to First Token]]: the numbers this changes and does not change
- [[Autoregressive Generation]]: why output can be sent as it appears
- [[Guardrails]]: the thing streaming complicates most
- [[Structured Output]]: not valid until complete
- [[Inference]]: the stage this is a delivery mode for

---

Part of [[AI Terminology Index]], section: Controlling and Extending Behaviour at Run Time.
