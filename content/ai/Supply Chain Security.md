---
title: "Supply Chain Security"
aliases:
  - "Software Bill of Materials"
tags:
  - glossary/ai
  - ai/security
section: "Security and Privacy"
summary: "Everything you did not write but depend on: model weights downloaded from a hub, libraries, container images, third-party tool servers."
---

# Supply Chain Security

## Plain View

Everything you did not write but depend on: model weights downloaded from a hub, libraries, container images, third-party tool servers. Any of them can be malicious or compromised, and the model file itself can carry executable content depending on its format.

## Technical View

Risks include backdoored or trojaned weights, malicious code executing on deserialisation of pickle-based checkpoint formats, typosquatted packages, compromised base images and hostile third-party tool servers whose descriptions carry injections. Controls include preferring safetensors, verifying signatures and hashes, pinning versions, scanning dependencies, generating a software bill of materials, and reviewing connector servers before enabling them.

## Related

- [[Model Provenance and Signing]]: verifying what you run
- [[Open Weights]]: downloaded artefacts as a risk
- [[Model Context Protocol]]: third-party servers as dependencies
- [[Data Poisoning]]: the training-data equivalent
- [[Attack Surface]]: inherited exposure

---

Part of [[AI Terminology Index]], section: Security and Privacy.
