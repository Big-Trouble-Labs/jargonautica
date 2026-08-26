---
title: "Schema and Metadata"
tags:
  - glossary/ai
  - ai/data
section: "Data"
summary: "The description of what your data looks like and what it means."
---

# Schema and Metadata

## Plain View

The description of what your data looks like and what it means. Field names, types, allowed values, units, and the plain English explanation of what each one actually records. The last of these is the one people skip and the one that costs the most later.

## Technical View

Schemas define structure and constraints, enforced at write time in a database or validation time in a pipeline, with formats such as JSON Schema, Avro or Protobuf. Schema evolution rules determine whether a change is backwards compatible. Metadata extends to semantics, ownership, sensitivity classification and refresh cadence, and a catalogue makes it discoverable. Undocumented units and ambiguous nulls are a recurring source of silent modelling errors.

## Related

- [[Data Quality]]: validity checked against the schema
- [[Data Pipeline]]: where schemas are enforced
- [[Structured Output]]: the same idea applied to model responses
- [[Data Lineage]]: metadata as the basis for tracing

---

Part of [[AI Terminology Index]], section: Data.
