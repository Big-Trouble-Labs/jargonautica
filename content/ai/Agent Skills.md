---
title: "Agent Skills"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "Packaged instructions, reference material and scripts that an AI agent can load when a task calls for them, rather than carrying all of it all the time."
---

# Agent Skills

## Plain View

Packaged instructions, reference material and scripts that an AI agent can load when a task calls for them, rather than carrying all of it all the time. A skill might teach an agent how to fill in a particular form, follow a house style or run a company's expenses process. The agent sees only a short description of each skill until it needs one, then reads the full instructions, which keeps it focused while giving it a large library of know-how.

## Technical View

Introduced by Anthropic in October 2025 and published as an open standard in December 2025. A skill is a folder containing a SKILL.md file whose header gives a name and a description, plus optional reference files and executable scripts. Loading uses progressive disclosure: only names and descriptions sit in the system prompt, the full instructions are read when a description matches the task, and linked files or scripts are pulled in only as needed, so a script can run without its code entering the context window. Because skills carry instructions and code, an untrusted skill is a supply chain and prompt injection risk to audit before installation.

## Related

- [[Context Engineering]]: the discipline it packages
- [[System Prompt]]: where skill descriptions are listed
- [[Context Window]]: the budget progressive loading protects
- [[Model Context Protocol]]: connections to systems rather than know-how
- [[Supply Chain Security]]: the risk of installing someone else's skill
- [[Prompt Template]]: a simpler form of reusable instruction

---

Part of [[AI Terminology Index]], section: Agents and Tools.
