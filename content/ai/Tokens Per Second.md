---
title: "Tokens Per Second"
tags:
  - glossary/ai
  - ai/cost
section: "Cost, Speed and Service Levels"
summary: "The common measure of how fast a model produces text."
---

# Tokens Per Second

## Plain View

The common measure of how fast a model produces text. Useful mainly for comparison: reading speed is roughly ten tokens a second, so anything above that feels acceptable for text a person is reading, while output feeding another program wants to be far quicker. Quoted figures usually assume ideal conditions and a short prompt.

## Technical View

Should be reported separately for prefill, processing the prompt, and decode, generating output, since the two differ by orders of magnitude. Per-user throughput falls as batch size rises even while aggregate throughput improves, so a single number without stated batch size, sequence length, quantisation and hardware is close to meaningless. Speculative decoding, quantisation and attention optimisations such as paged and flash attention are the standard levers.

## Related

- [[Latency, Throughput and Time to First Token]]: the fuller picture this single number flattens
- [[Inference]]: what is being measured
- [[Quantisation]]: a standard way of raising it
- [[Speculative Decoding]]: another standard way
- [[Graphics Processing Unit]]: the hardware it depends on

---

Part of [[AI Terminology Index]], section: Cost, Speed and Service Levels.
