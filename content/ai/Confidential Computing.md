---
title: "Confidential Computing"
tags:
  - glossary/ai
  - ai/security
section: "Security and Privacy"
summary: "Technology that keeps data shielded even while a computer is working on it, not just while it is stored or sent."
---

# Confidential Computing

## Plain View

Technology that keeps data shielded even while a computer is working on it, not just while it is stored or sent. Normally data has to be unlocked in memory to be processed, where whoever controls the machine could in principle see it. Confidential computing runs the work inside a sealed area of the chip that even the machine's owner cannot look into, and can prove to the customer that this is happening.

## Technical View

Defined by the Confidential Computing Consortium, a Linux Foundation project formed in 2019, as protecting data in use by computing in a hardware-based, attested trusted execution environment ('TEE'). The hardware isolates a workload's memory, usually encrypting it as well, and remote attestation produces a signed report of hardware and software state that the data owner verifies before releasing keys. NVIDIA describes its H100 as the first graphics processing unit to support it, extending protection to model weights and prompts on accelerators, with the main overhead in encrypted traffic between processor and accelerator. Limits include trust in the chip vendor, side-channel attacks and complex attestation chains.

## Related

- [[Data Residency and Confidentiality]]: the requirement it helps meet
- [[Tenant Isolation]]: isolation enforced in hardware
- [[Sovereign AI]]: control over where and how models run
- [[Federated Learning]]: another route to computing without pooling data
- [[Differential Privacy]]: a statistical rather than hardware protection
- [[Model Provenance and Signing]]: verification of what is running

---

Part of [[AI Terminology Index]], section: Security and Privacy.
