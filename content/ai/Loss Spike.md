---
title: "Loss Spike"
tags:
  - glossary/ai
  - ai/post-training
section: "Training and Post-training"
summary: "A sudden jump in error partway through a long training run."
---

# Loss Spike

## Plain View

A sudden jump in error partway through a long training run. Sometimes it recovers by itself, sometimes it destroys the model and weeks of compute along with it. Watching for these and knowing how to respond is a large part of what running a big training job involves.

## Technical View

Causes include bad data batches, numerical instability in attention logits, learning rate too high for the current curvature, and hardware faults producing silent corruption. Mitigations include gradient clipping, careful initialisation and normalisation placement, skipping offending batches, and reverting to a recent checkpoint with a reduced learning rate. Frequency of spikes tends to increase with scale, making checkpoint cadence a real design decision.

## Related

- [[Training]]: the run it threatens
- [[Gradient Clipping]]: the standard defence
- [[Learning Rate Schedule]]: a common cause when set too high
- [[Data Quality]]: bad batches as a trigger
- [[Data Centre and Interconnect]]: hardware faults at scale

---

Part of [[AI Terminology Index]], section: Training and Post-training.
