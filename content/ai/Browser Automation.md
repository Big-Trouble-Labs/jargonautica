---
title: "Browser Automation"
tags:
  - glossary/ai
  - ai/agents
section: "Agents and Tools"
summary: "Driving a web page programmatically to fill forms, click through flows and read results."
---

# Browser Automation

## Plain View

Driving a web page programmatically to fill forms, click through flows and read results. It is how an agent reaches systems with no proper interface for machines. It is fragile because pages change, and risky because everything on the page is content the model will read and may follow.

## Technical View

Implemented over a browser control protocol with actions expressed against accessibility trees, document structure or screen coordinates, the first being more robust than the last. Failure modes include layout changes, dynamic content and timing, anti-automation measures, and authentication. The security position is that page content is untrusted input capable of carrying instructions, so session scope, credential handling and confirmation for consequential actions require explicit design.

## Related

- [[Computer Use]]: the broader capability
- [[Indirect Prompt Injection]]: page content as untrusted instructions
- [[Agent]]: what drives the browser
- [[Least Privilege]]: session and credential scoping
- [[Tool Use and Function Calling]]: the cleaner alternative where an interface exists

---

Part of [[AI Terminology Index]], section: Agents and Tools.
