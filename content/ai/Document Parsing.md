---
title: "Document Parsing"
tags:
  - glossary/ai
  - ai/retrieval
section: "Retrieval and Knowledge"
summary: "Getting usable text and structure out of PDFs, spreadsheets, slide decks and scans."
---

# Document Parsing

## Plain View

Getting usable text and structure out of PDFs, spreadsheets, slide decks and scans. It is dull, it is where most retrieval projects actually lose their quality, and it is almost always underestimated. A table flattened into a wall of numbers is worse than useless downstream.

## Technical View

Requires layout analysis to establish reading order, table structure recognition, handling of multi-column text, headers, footnotes and figures, and optical character recognition for scans. Options range from rule-based extractors through layout-aware models to multimodal models reading page images, with the last handling complex layouts best while introducing the risk of plausible invention where text is unclear. Preserving heading hierarchy is what makes structure-aware chunking possible.

## Related

- [[Optical Character Recognition]]: the text extraction step
- [[Chunking]]: what parsing feeds
- [[Document AI]]: the wider application
- [[Data Quality]]: where retrieval quality is usually lost
- [[Hallucination]]: the risk when a model reads an unclear page

---

Part of [[AI Terminology Index]], section: Retrieval and Knowledge.
