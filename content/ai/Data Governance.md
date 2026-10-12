---
title: "Data Governance"
tags:
  - glossary/ai
  - ai/data
section: "Data"
summary: "The rules and responsibilities that decide who may collect, use, share and keep an organisation's data, and for what."
---

# Data Governance

## Plain View

The rules and responsibilities that decide who may collect, use, share and keep an organisation's data, and for what. It covers who owns each dataset, who can see it, how good it must be, and when it must be deleted. For AI it matters twice: models are only as trustworthy as the data they learn from, and using data carelessly can break the law.

## Technical View

An organisational framework of policies, roles (owners, stewards, custodians), standards and controls governing data across its life cycle. Core elements are cataloguing and classification, access control, quality standards, lineage, retention and deletion, and legal basis for processing. AI adds demands: tracking which data trained which model version, honouring consent and licence terms in training sets, handling personal data under data protection law, and controlling what flows into third-party model providers. A common failure is governance that exists on paper but is not enforced in pipelines, which tooling such as data catalogues and policy-as-code tries to close.

## Related

- [[Data Lineage]]: tracing where data came from
- [[Retention Policy]]: how long data is kept
- [[Data Protection Impact Assessment]]: a formal check before risky processing
- [[Data Licensing]]: the terms that govern reuse
- [[Shadow AI]]: what weak governance tends to allow
- [[General Data Protection Regulation]]: the law much of it serves

---

Part of [[AI Terminology Index]], section: Data.
