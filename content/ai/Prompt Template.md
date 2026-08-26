---
title: "Prompt Template"
tags:
  - glossary/ai
  - ai/runtime
section: "Controlling and Extending Behaviour at Run Time"
summary: "The reusable, parameterised version of a prompt with slots for the variable parts."
---

# Prompt Template

## Plain View

The reusable, parameterised version of a prompt with slots for the variable parts. Treating prompts as artefacts to be versioned, reviewed and tested, rather than strings pasted into code, is the difference between a demonstration and something maintainable.

## Technical View

Should be stored outside application code, versioned, and bound to an evaluation set so changes can be tested. Variable interpolation of untrusted content requires the same discipline as any other injection-prone substitution, including escaping and clear delimitation. Template versions must be recorded against production traffic so behaviour can be attributed, and rollout should follow the same canary discipline as a code change.

## Related

- [[Delimiters and Structure]]: how untrusted content is bounded inside it
- [[Meta-prompting]]: automated optimisation of the template
- [[Prompt Engineering]]: the practice
- [[Versioning]]: prompts as versioned artefacts
- [[Prompt Injection]]: interpolating untrusted content safely
- [[Regression Testing]]: how template changes are validated
- [[Golden Dataset]]: what a change is tested against

---

Part of [[AI Terminology Index]], section: Controlling and Extending Behaviour at Run Time.
