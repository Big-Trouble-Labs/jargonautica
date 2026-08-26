---
title: "Caching"
aliases:
  - "Prompt Caching"
  - "KV Cache"
tags:
  - glossary/ai
  - ai/efficiency
section: "Making Models Smaller, Faster and Cheaper"
summary: "Storing intermediate results so they do not have to be recalculated."
---

# Caching

## Plain View

Storing intermediate results so they do not have to be recalculated. If you send the same long set of instructions with every request, the system can remember the work it already did on that portion and skip straight to the new part. This cuts both cost and waiting time, often substantially.

## Technical View

Key-value caching stores the attention keys and values for tokens already processed so that generating each new token does not require recomputing attention over the entire sequence. Prompt caching extends this across separate requests that share a common prefix, which is why placing static content such as system instructions and reference documents at the start of a prompt, with variable content at the end, materially reduces cost.

## Related

- [[Inference]]: the stage it makes cheaper
- [[Attention]]: the keys and values being cached
- [[System Prompt]]: the static prefix worth caching
- [[Context Window]]: repeated context is what gets reused
- [[Prompt]]: prompt order matters because of caching

---

Part of [[AI Terminology Index]], section: Making Models Smaller, Faster and Cheaper.
