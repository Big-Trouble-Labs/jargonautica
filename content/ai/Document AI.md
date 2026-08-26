---
title: "Document AI"
aliases:
  - "Intelligent Document Processing"
tags:
  - glossary/ai
  - ai/modalities
section: "Modalities and Applications"
summary: "Getting structured information out of invoices, forms, contracts, reports and scanned records."
---

# Document AI

## Plain View

Getting structured information out of invoices, forms, contracts, reports and scanned records. It is the least glamorous category and probably the largest source of realised business value, because almost every organisation has a mountain of documents and a team of people retyping them.

## Technical View

Combines layout analysis, optical character recognition, table structure recognition and extraction into a schema, increasingly done end-to-end by multimodal models reading page images. Requirements for production use are confidence scores per field, validation against expected formats and cross-field arithmetic checks, and a human review path for low-confidence extractions. The silent-plausible-value failure of generative extraction is the main risk to design around.

## Related

- [[Document Parsing]]: the extraction step
- [[Optical Character Recognition]]: the text layer
- [[Vision Language Model]]: what now does much of it
- [[Retrieval Augmented Generation]]: where extracted text goes
- [[Model Confidence and Calibration]]: per-field confidence for review

---

Part of [[AI Terminology Index]], section: Modalities and Applications.
