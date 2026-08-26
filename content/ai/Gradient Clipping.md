---
title: "Gradient Clipping"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "Putting a ceiling on how large a single update can be."
---

# Gradient Clipping

## Plain View

Putting a ceiling on how large a single update can be. It stops one unusual batch from wrecking a model that has been training for weeks. Cheap insurance, and standard practice in large training runs.

## Technical View

Rescales the gradient when its global norm exceeds a threshold, preserving direction while bounding magnitude. Distinguish from element-wise value clipping, which distorts direction. It is a routine defence against loss spikes and divergence, particularly in recurrent networks and large transformer runs, and the clipping frequency is a useful diagnostic signal that something is wrong upstream.

## Related

- [[Vanishing and Exploding Gradients]]: the failure it bounds
- [[Loss Spike]]: the event it protects against
- [[Gradient]]: what is being rescaled
- [[Training]]: standard practice in large runs

---

Part of [[AI Terminology Index]], section: How the Machinery Works.
