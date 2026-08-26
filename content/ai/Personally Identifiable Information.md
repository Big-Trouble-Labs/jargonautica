---
title: "Personally Identifiable Information"
aliases:
  - "PII"
  - "Personal Data"
tags:
  - glossary/ai
  - ai/data
section: "Data"
summary: "Data that identifies a person, which is a wider category than most people assume."
---

# Personally Identifiable Information

## Plain View

Data that identifies a person, which is a wider category than most people assume. Not just names and addresses, but also combinations that become identifying together: a postcode, a date of birth and a job title will usually pin down one individual. Free text fields are where it hides.

## Technical View

Direct identifiers name a person; quasi-identifiers identify in combination, which is why k-anonymity and related measures reason about combinations rather than fields. Detection in unstructured text relies on named entity recognition and pattern matching, both imperfect, so recall is never complete. Special categories under data protection law, including health, biometrics and beliefs, carry additional restrictions and can be inferred from apparently innocuous data.

## Related

- [[Anonymisation and Pseudonymisation]]: the two ways of reducing identifiability
- [[Data Minimisation]]: collecting less of it
- [[Data Subject Rights]]: the rights attached to it
- [[Secrets Management]]: the same discipline for credentials
- [[Model Extraction and Membership Inference]]: how models can leak it

---

Part of [[AI Terminology Index]], section: Data.
