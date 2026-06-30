(function () {
  'use strict';

  const MR = window.MR = window.MR || {};

  const RESOURCE_SECTIONS = {
    prevention: {
      title: 'Prevention Palace',
      body: ['Prevention strategies are the supports you use before behavior escalates. Look for ways to make the task clearer, smaller, more predictable, or more accessible.']
    },
    replacement: {
      title: 'Replacement Reservoir',
      body: ['Replacement behaviors are what the student can do instead. Prompt the skill you want to see, such as asking for help, requesting a break, using a sentence starter, or starting with one small step.']
    },
    reinforcement: {
      title: 'Reinforcement Ridge',
      body: ['Reinforcement strengthens the behavior you want to see again. Notice and reinforce the replacement behavior, task engagement, calm participation, and return to routine.']
    },
    errorCorrection: {
      title: 'Error Correction Canyon',
      body: ['Error correction should be calm, brief, and plan-aligned. Restate the expectation, prompt the replacement behavior, and reinforce the next right step.']
    },
    library: {
      title: 'The BSP Library',
      body: ['Use this area for plan details, definitions, examples, and quick reminders. This can hold the full behavior support plan or links to reference materials later.']
    },
    function: {
      title: 'Function Forest',
      body: ['Function helps explain why the behavior is happening. Ask: What is the student getting, avoiding, communicating, or needing in this moment?']
    },
    coaching: {
      title: 'Coaching Cottage',
      body: ['Coaching reminders help translate the plan into real classroom moves. Keep language brief, stay neutral, and focus on the next teachable step.']
    },
    fidelity: {
      title: 'Fidelity Fortress',
      body: ['Fidelity means using the important parts of the plan as intended. Check whether you used the prevention support, prompted the replacement behavior, reinforced the desired response, and followed the plan’s error-correction steps.']
    }
  };

  function list(items) {
    const clean = (items || []).filter(Boolean);
    if (!clean.length) return '';
    return `<ul>${clean.map(item => `<li>${MR.escapeHTML(item)}</li>`).join('')}</ul>`;
  }

  function section(title, body) {
    return `
      <section class="bip-section">
        <h2>${MR.escapeHTML(title)}</h2>
        ${body}
      </section>
    `;
  }

  function definitionsByTerm(items, term) {
    if (!Array.isArray(items) || !items.length) return [];
    return items
      .filter(item => item && item.term === term)
      .map(item => item.definition)
      .filter(Boolean);
  }

  function defaultOverviewHTML() {
    const data = MR.resourcesData || {};
    const pathway = data.bipPathway || {};
    const snap = data.studentSnapshot || {};
    const reminder = definitionsByTerm(data.behaviorBasics, 'Remember');
    const functionText = snap.function || 'Look for what the behavior may be communicating or helping the student access or avoid.';

    return [
      section('Function', `<p>${MR.escapeHTML(functionText)}</p>`),
      section('Prevention', list(pathway.prevention && pathway.prevention.length ? pathway.prevention : [
        'Make the task smaller, clearer, more predictable, or easier to start.'
      ])),
      section('Replacement Behavior', list(pathway.replacementBehavior && pathway.replacementBehavior.length ? pathway.replacementBehavior : [
        'Prompt the student to ask for help, request a break, use a sentence starter, or begin with one small step.'
      ])),
      section('Reinforcement', list(pathway.reinforcement && pathway.reinforcement.length ? pathway.reinforcement : [
        'Reinforce the replacement behavior, calm participation, task engagement, and return to routine.'
      ])),
      section('Error Correction', list(pathway.responsePlan && pathway.responsePlan.length ? pathway.responsePlan : [
        'Keep language calm and brief, prompt the next plan-aligned step, and reinforce follow-through.'
      ])),
      section('Key Reminder', [
        reminder.map(item => `<p>${MR.escapeHTML(item)}</p>`).join(''),
        list(data.fidelityChecklist && data.fidelityChecklist.length ? data.fidelityChecklist : [
          'Prevent, prompt, reinforce, and return to the routine calmly.'
        ])
      ].join(''))
    ].join('');
  }

  function contentHTML(sectionKey) {
    if (!sectionKey || sectionKey === 'overview') return defaultOverviewHTML();
    const item = RESOURCE_SECTIONS[sectionKey];
    if (!item) return defaultOverviewHTML();
    return item.body.map(paragraph => `<p>${MR.escapeHTML(paragraph)}</p>`).join('');
  }

  function setActiveHotspot(sectionKey) {
    MR.$$('.map-hotspot').forEach(button => {
      const active = button.dataset.resourceSection === sectionKey;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function renderResourceSection(sectionKey = 'overview') {
    const title = MR.$('#resources-title');
    const root = MR.$('#resources-content');
    if (!title || !root) return;

    const item = RESOURCE_SECTIONS[sectionKey];
    title.textContent = item ? item.title : 'BIP at a Glance';
    root.innerHTML = contentHTML(sectionKey);
    setActiveHotspot(item ? sectionKey : '');
    root.scrollTop = 0;
  }

  function wireMap() {
    MR.$$('.map-hotspot').forEach(button => {
      if (button.dataset.resourceWired === 'true') return;
      button.dataset.resourceWired = 'true';
      button.setAttribute('aria-pressed', 'false');
      button.addEventListener('click', () => {
        if (MR.audio && typeof MR.audio.playSfx === 'function') {
          MR.audio.playSfx('click', 0.24);
        }
        renderResourceSection(button.dataset.resourceSection);
      });
    });
  }

  MR.resources = {
    render() {
      wireMap();
      renderResourceSection('overview');
    },
    renderResourceSection
  };
})();
