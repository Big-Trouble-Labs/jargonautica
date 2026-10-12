---
title: "Paged Attention"
aliases:
  - "PagedAttention"
tags:
  - glossary/ai
  - ai/efficiency
section: "Making Models Smaller, Faster and Cheaper"
summary: "A technique that lets an AI service handle many more conversations at once by managing the model's working memory the way a computer manages its main memory: in small, fixed-size pages rather than large reserved blocks."
---

# Paged Attention

## Plain View

A technique that lets an AI service handle many more conversations at once by managing the model's working memory the way a computer manages its main memory: in small, fixed-size pages rather than large reserved blocks. Without it, much of that memory sits reserved but unused. Packing it tightly means more users per chip and lower costs, with no change to the answers.

## Technical View

Introduced by Kwon and colleagues at the Symposium on Operating Systems Principles ('SOSP') in 2023, with the vLLM serving engine. Instead of reserving a contiguous key-value ('KV') cache region per request sized for the maximum length, the cache is split into fixed-size blocks mapped through a per-sequence block table, borrowing from operating system virtual memory and paging. This removes most fragmentation and over-reservation and lets blocks be shared copy-on-write across parallel samples, beam search and common prefixes. The authors reported two to four times higher throughput at the same latency than earlier systems. Costs are an extra indirection in the attention kernel and allocator complexity.

## Related

- [[Caching]]: the key-value cache it manages
- [[Continuous Batching]]: the scheduling it pairs with
- [[Latency, Throughput and Time to First Token]]: the throughput it improves
- [[Flash Attention]]: a complementary attention optimisation
- [[Serving Endpoint]]: where it runs

---

Part of [[AI Terminology Index]], section: Making Models Smaller, Faster and Cheaper.
