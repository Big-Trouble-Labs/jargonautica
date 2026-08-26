---
title: "Learning Rate Schedule"
aliases:
  - "Warm-up"
  - "Cosine Decay"
tags:
  - glossary/ai
  - ai/machinery
section: "How the Machinery Works"
summary: "Changing the step size as training progresses."
---

# Learning Rate Schedule

## Plain View

Changing the step size as training progresses. Start too fast and the model lurches around; stay fast at the end and it never settles. The standard shape is a short ramp up followed by a long decay, and getting it wrong is one of the most common causes of a training run failing.

## Technical View

Typical schedules combine linear warm-up over the first fraction of steps with cosine or linear decay to a small final value. Warm-up matters because early gradients are large and adaptive optimiser statistics are unreliable. The peak learning rate is the single most sensitive hyperparameter, scaling with batch size, and schedules must be planned against the total step count in advance, which complicates deciding to train for longer partway through.

## Related

- [[Epoch, Batch and Learning Rate]]: the base settings
- [[Optimiser]]: what applies the step
- [[Loss Spike]]: a schedule set too high is a common cause
- [[Compute-optimal Training]]: schedules must be planned against total steps

---

Part of [[AI Terminology Index]], section: How the Machinery Works.
