---
title: "Ontology"
aliases:
  - "Ontologies"
tags:
  - glossary/ai
  - ai/retrieval
section: "Retrieval and Knowledge"
summary: "A formal description of the things in a subject area and how they relate to one another."
---

# Ontology

## Plain View

A formal description of the things in a subject area and how they relate to one another. A medical ontology might say that pneumonia is a kind of lung disease, that lungs are part of the respiratory system, and that a disease has symptoms. Writing this down precisely lets computers share a vocabulary and draw simple conclusions, such as knowing that a patient with pneumonia has a lung disease.

## Technical View

A specification of classes, properties, relations and constraints for a domain, often expressed in the Web Ontology Language ('OWL') on top of the Resource Description Framework ('RDF'), which supports logical reasoning such as inferring class membership. It provides the schema layer for knowledge graphs and for data integration across systems that name things differently. Well-known examples include SNOMED CT in healthcare and the Gene Ontology. The costs are expert effort to build and maintain, brittleness when the world changes, and disputes over how to carve up a domain. Language models are increasingly used to draft or populate ontologies, with human review for consistency.

## Related

- [[Knowledge Graph]]: the data an ontology structures
- [[Schema and Metadata]]: a lighter cousin for describing data
- [[Symbolic AI and Expert Systems]]: the tradition it comes from
- [[GraphRAG]]: retrieval that benefits from a clear ontology
- [[Named Entity Recognition]]: extracting the things it describes

---

Part of [[AI Terminology Index]], section: Retrieval and Knowledge.
