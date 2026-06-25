(function () {
  'use strict';

  const MR = window.MR = window.MR || {};

  function list(items) {
    if (!Array.isArray(items) || !items.length) return '';
    return `<ul>${items.map(item => `<li>${MR.escapeHTML(item)}</li>`).join('')}</ul>`;
  }

  function section(title, body) {
    return `
      <section class="bip-section">
        <h2>${MR.escapeHTML(title)}</h2>
        ${body}
      </section>
    `;
  }

  function definitionList(items) {
    if (!Array.isArray(items) || !items.length) return '';
    return `
      <dl class="behavior-basics">
        ${items.map(item => `
          <div>
            <dt>${MR.escapeHTML(item.term)}</dt>
            <dd>${MR.escapeHTML(item.definition)}</dd>
          </div>
        `).join('')}
      </dl>
    `;
  }

  function snapshot(data) {
    const snap = data.studentSnapshot || {};
    return `
      <div class="snapshot-grid">
        <p><strong>Student:</strong> ${MR.escapeHTML(snap.student || 'Student')}</p>
        <p><strong>Target routine:</strong> ${MR.escapeHTML(snap.routine || '')}</p>
        <p><strong>Target behavior:</strong> ${MR.escapeHTML(snap.targetBehavior || '')}</p>
        <p><strong>Hypothesized function:</strong> ${MR.escapeHTML(snap.function || '')}</p>
      </div>
    `;
  }

  MR.resources = {
    render() {
      const data = MR.resourcesData || {};
      const pathway = data.bipPathway || {};
      const root = MR.$('#resources-content');
      const title = MR.$('#resources-title');
      if (!root) return;

      if (title) title.textContent = 'Resources';

      root.innerHTML = [
        section('BIP Overview', `<p>${MR.escapeHTML(data.title || 'Teacher BIP Overview')}</p>`),
        section('Student Snapshot', snapshot(data)),
        section('Target Routine', `<p>${MR.escapeHTML((data.studentSnapshot && data.studentSnapshot.routine) || '')}</p>`),
        section('Target Behavior', `<p>${MR.escapeHTML((data.studentSnapshot && data.studentSnapshot.targetBehavior) || '')}</p>`),
        section('Hypothesized Function', `<p>${MR.escapeHTML((data.studentSnapshot && data.studentSnapshot.function) || '')}</p>`),
        section('Prevention Strategies', list(pathway.prevention)),
        section('Replacement Behavior to Teach/Prompt', list(pathway.replacementBehavior)),
        section('Reinforcement Plan', list(pathway.reinforcement)),
        section('Response Plan if Behavior Occurs', list(pathway.responsePlan)),
        section('Quick Behavior Basics', definitionList(data.behaviorBasics)),
        section('Fidelity Checklist', list(data.fidelityChecklist))
      ].join('');
    }
  };
})();
