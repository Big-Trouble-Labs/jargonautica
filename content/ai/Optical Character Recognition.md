---
title: "Optical Character Recognition"
aliases:
  - "OCR"
tags:
  - glossary/ai
  - ai/adjacent
section: "Adjacent Fields"
summary: "Reading text out of images and scanned documents."
---

# Optical Character Recognition

## Plain View

Reading text out of images and scanned documents. Mature technology for clean printed text, still awkward for handwriting, poor scans, tables and forms. It matters because a great deal of the information organisations want to use is trapped in PDFs and photographs, and getting it out reliably is usually the first and largest part of any such project.

## Technical View

Traditional engines detect and recognise characters then reconstruct reading order, which is where structured documents break down. Layout-aware models and multimodal language models handle tables, multi-column text and forms considerably better, at higher cost per page and with a new failure mode: a language model may silently produce a plausible value rather than reporting that a cell was unreadable. For anything consequential, confidence scores, spot checking and validation rules against expected formats remain necessary.

## Related

- [[Computer Vision]]: the field this belongs to
- [[Multimodal]]: what now does it better, at a price
- [[Hallucination]]: the new failure mode when a language model reads a page
- [[Chunking]]: extraction is the first step of most retrieval projects
- [[Retrieval Augmented Generation]]: what the extracted text usually feeds

---

Part of [[AI Terminology Index]], section: Adjacent Fields.
