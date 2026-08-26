---
title: "Batch Inference"
tags:
  - glossary/ai
  - ai/production
section: "Running It in Production"
summary: "Processing a large pile of work offline rather than one request at a time."
---

# Batch Inference

## Plain View

Processing a large pile of work offline rather than one request at a time. If nobody is waiting, you can group everything together, run it when capacity is cheap, and pay considerably less. Suitable for classification, enrichment, summarisation of archives and periodic scoring.

## Technical View

Provider batch endpoints typically offer a substantial discount against a longer completion window. Self-hosted batch processing achieves high accelerator utilisation through large batch sizes impossible under latency constraints. Design considerations include chunking, checkpointing so a failure does not restart everything, idempotency for retries, and result reconciliation. It is the cheapest way to run large-scale work and is routinely overlooked in favour of the interactive endpoint.

## Related

- [[Inference]]: the interactive counterpart
- [[Cost Per Task]]: the cheapest way to run volume
- [[Continuous Batching]]: the interactive batching technique
- [[Data Pipeline]]: how large jobs are orchestrated

---

Part of [[AI Terminology Index]], section: Running It in Production.
