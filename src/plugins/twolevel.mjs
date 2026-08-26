// Plain view stays open. Technical view collapses behind a control.
// Also tags the Related list so it can be styled as cards.
export function remarkTwoLevel() {
  return (tree) => {
    const kids = tree.children;
    const headingText = (n) =>
      n.type === 'heading' && n.depth === 2
        ? n.children.map((c) => c.value ?? '').join('').trim().toLowerCase()
        : null;

    // find the Technical View heading and the next h2 after it
    let start = -1;
    let end = kids.length;
    for (let i = 0; i < kids.length; i++) {
      const t = headingText(kids[i]);
      if (t === 'technical view') { start = i; continue; }
      if (start !== -1 && t !== null) { end = i; break; }
    }

    if (start !== -1) {
      const inner = kids.slice(start + 1, end);
      const block = [
        { type: 'html', value: '<details class="technical"><summary>Technical view</summary><div class="technical-body">' },
        ...inner,
        { type: 'html', value: '</div></details>' },
      ];
      kids.splice(start, end - start, ...block);
    }

    // drop the "Plain View" heading, since the plain view is simply the page
    for (let i = 0; i < kids.length; i++) {
      if (headingText(kids[i]) === 'plain view') { kids.splice(i, 1); break; }
    }

    // tag the Related list
    for (let i = 0; i < kids.length; i++) {
      if (headingText(kids[i]) === 'related' && kids[i + 1]?.type === 'list') {
        kids[i + 1].data = { ...(kids[i + 1].data ?? {}), hProperties: { class: 'related' } };
      }
    }
  };
}
