---
title: "Benchmark Saturation"
tags:
  - glossary/ai
  - ai/measurement
section: "Measuring Performance"
summary: "The point at which the best models score so close to full marks on a test that it can no longer tell them apart."
---

# Benchmark Saturation

## Plain View

The point at which the best models score so close to full marks on a test that it can no longer tell them apart. Once that happens, further improvements do not show up, and a test that once separated strong from weak models stops being informative. It is why AI tests are retired and replaced faster than almost any other kind of exam.

## Technical View

A benchmark saturates when top scores approach the ceiling set by label noise and ambiguous items rather than by capability, compressing differences into the margin of error. Causes include genuine progress, contamination of training data with test items, and optimisation towards the benchmark itself. Responses include harder successor sets, private or held-out test items, dynamic benchmarks refreshed over time, and evaluations of open-ended or long-horizon tasks. A caution runs the other way too: a saturated score shows the narrow skill was learned, not that the broader ability the benchmark was meant to proxy is solved.

## Related

- [[Standard Benchmarks]]: the tests that saturate
- [[Benchmark Contamination]]: one cause of inflated scores
- [[Benchmarks and Evals]]: the wider practice
- [[Label Noise]]: what sets the real ceiling
- [[Reward Hacking and Specification Gaming]]: optimising a measure until it breaks

---

Part of [[AI Terminology Index]], section: Measuring Performance.
