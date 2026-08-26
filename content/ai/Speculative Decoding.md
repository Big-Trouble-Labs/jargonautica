---
title: "Speculative Decoding"
tags:
  - glossary/ai
  - ai/efficiency
section: "Making Models Smaller, Faster and Cheaper"
summary: "A trick that makes generation faster without changing the answer."
---

# Speculative Decoding

## Plain View

A trick that makes generation faster without changing the answer. A small quick model drafts several tokens ahead, and the large model checks them all in a single pass, accepting the ones it agrees with. Because checking in parallel is much cheaper than generating one at a time, the result is the same text produced noticeably sooner.

## Technical View

The draft model proposes k tokens; the target model computes their probabilities in one forward pass and accepts the longest prefix consistent with its own distribution under a rejection sampling scheme that preserves that distribution exactly. Speedups of roughly two to three times are typical and depend on the draft acceptance rate, so the draft model must be well matched to the target. Variants avoid a separate draft model using additional prediction heads or n-gram lookup. The output distribution is unchanged, which is what distinguishes this from quantisation or distillation.

## Related

- [[Autoregressive Generation]]: the bottleneck this addresses
- [[Inference]]: the stage it speeds up
- [[Latency, Throughput and Time to First Token]]: what improves as a result
- [[Distillation]]: where the draft model usually comes from
- [[Caching]]: the other standard inference optimisation

---

Part of [[AI Terminology Index]], section: Making Models Smaller, Faster and Cheaper.
