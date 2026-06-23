/* crisis-mission-2.js */
(function registerCrisisMission2() {
  if (typeof POOL === "undefined") throw new Error("POOL must be defined before loading crisis-mission-2.js");
  POOL.crisis = POOL.crisis || [];
  POOL.crisis.push({
    id: "crisis_2_throwing_materials",
    title: "Crisis Drill: Materials Thrown",
    start: "step1",
    focus: "Escalation with thrown materials; protect safety, reduce attention, and reinforce safe hands/re-entry.",
    routine: "materials escalation",
    functionPressure: ["escape", "adult attention", "safety risk"],
    bipTargets: ["Crisis Respond", "Respond", "Reinforce"],
    steps: {
      step1: {
        text: `BIP Briefing: When Student throws materials, the first goal is safety and reduced stimulation. The plan is to clear nearby peers, use minimal language, avoid lectures, and reinforce safe hands or safe placement as soon as possible. Teaching comes after regulation.\n\nScene: During math, Student snaps a pencil and tosses the pieces toward the center of the table. A peer gasps. Student reaches for the card bin next.\n\nWhat do you do first?`,
        choices: {
          A: { text: `Move peers back, lower your voice, and say, "Cards stay down. Hands safe."`, score: 10, feedback: `High fidelity. You protected safety and reduced language.`, wizard: `The Wizard clears the splash zone. The words are short enough to land, and the card bin is no longer the audience's show.`, next: "step2_supported", meta: { bipComponent: "Crisis Respond", mechanism: "Prompting", errorType: "none", function: "safety risk" } },
          B: { text: `Ask why he threw the pencil so you can understand what happened.`, score: 5, feedback: `Developing fidelity. Understanding matters, but questioning during escalation may add attention.`, wizard: `The Wizard wants the story, but Student's hand is still near the bin. Safety has to come before processing.`, next: "step2_wobble", meta: { bipComponent: "Crisis Respond", mechanism: "Adaptation", errorType: "processing too early", function: "adult attention" } },
          C: { text: `Tell him throwing is unacceptable and he needs to clean it up now.`, score: 0, feedback: `Low fidelity. Demands during escalation may increase throwing or refusal.`, wizard: `The Wizard hears cleanup become the next battle while the bin is still within reach.`, next: "step2_risk", meta: { bipComponent: "Respond", mechanism: "Performance feedback", errorType: "demand during crisis", function: "escape" } }
        }
      },
      step2_supported: {
        text: `Student stops reaching for the bin but breathes hard and stares at the math page.`,
        choices: {
          A: { text: `Reinforce safe hands and offer two low-demand regulated choices: sit with space or walk to calm spot.`, score: 10, feedback: `High fidelity. You reinforced safety and gave recovery choices.`, wizard: `The Wizard marks the exact moment the hands became safe. Both paths keep people safe and lower pressure.`, ending: "success", meta: { bipComponent: "Reinforce", mechanism: "Performance feedback", errorType: "none", function: "safety risk" } },
          B: { text: `Wait silently until he looks calmer.`, score: 5, feedback: `Developing fidelity. Space helps, but safe behavior is not reinforced or shaped.`, wizard: `The Wizard keeps the room quiet, but the safe-hands moment passes unnamed.`, ending: "mixed", meta: { bipComponent: "Respond", mechanism: "Adaptation", errorType: "missed reinforcement", function: "escape" } },
          C: { text: `Use the pause to explain that pencils are tools, not toys.`, score: 0, feedback: `Low fidelity. Teaching too soon can restart escalation.`, wizard: `The Wizard sees the lesson arrive before regulation. Student's body is not ready for that lecture.`, ending: "fail", meta: { bipComponent: "Respond", mechanism: "Performance feedback", errorType: "lecture too early", function: "adult attention" } }
        }
      },
      step2_wobble: {
        text: `Student says, "Because math is stupid," and lifts the card bin an inch off the table.`,
        choices: {
          A: { text: `Reduce language, remove nearby materials if safe, and restate "Bin down. Hands safe."`, score: 10, feedback: `High fidelity repair. You returned to safety and minimal language.`, wizard: `The Wizard moves from story mode back to safety mode. The bin has one clear job: down.`, ending: "mixed", meta: { bipComponent: "Crisis Respond", mechanism: "Adaptation", errorType: "repair", function: "safety risk" } },
          B: { text: `Validate that math is hard and ask him to tell you more.`, score: 5, feedback: `Developing fidelity. Validation is supportive, but the material risk is still active.`, wizard: `The Wizard hears kindness, but the bin is still floating. The support has to match the safety moment.`, ending: "mixed", meta: { bipComponent: "Respond", mechanism: "Adaptation", errorType: "risk still active", function: "adult attention" } },
          C: { text: `Tell him if he throws the bin he will lose recess.`, score: 0, feedback: `Low fidelity. Threats can raise pressure during active risk.`, wizard: `The Wizard sees the bin become the center of a bigger storm.`, ending: "fail", meta: { bipComponent: "Respond", mechanism: "Performance feedback", errorType: "threat during crisis", function: "escape" } }
        }
      },
      step2_risk: {
        text: `Student sweeps several cards onto the floor. The peer group is silent and watching.`,
        choices: {
          A: { text: `Clear peers, remove the audience, signal support, and use one safety direction.`, score: 10, feedback: `High fidelity repair. You protected safety and reduced attention.`, wizard: `The Wizard moves the audience away so the behavior has less fuel. Support can enter calmly.`, ending: "mixed", meta: { bipComponent: "Crisis Respond", mechanism: "Adaptation", errorType: "repair", function: "peer attention" } },
          B: { text: `Stand nearby and wait for him to finish before addressing it.`, score: 5, feedback: `Developing fidelity. You avoid a power struggle, but safety and attention need active management.`, wizard: `The Wizard waits, but the audience remains and materials are still available.`, ending: "mixed", meta: { bipComponent: "Crisis Respond", mechanism: "Adaptation", errorType: "passive response", function: "attention" } },
          C: { text: `Insist he pick up every card immediately.`, score: 0, feedback: `Low fidelity. Cleanup demand during active escalation may worsen the episode.`, wizard: `The Wizard sees cleanup become another pile of pressure. Regulation has not returned yet.`, ending: "fail", meta: { bipComponent: "Respond", mechanism: "Performance feedback", errorType: "cleanup demand too soon", function: "escape" } }
        }
      }
    },
    endings: {
      success: { title: `Crisis Managed - Safe Hands Reinforced`, text: `Student contacted reinforcement for safe hands and moved toward regulation.` },
      mixed: { title: `Crisis Stabilized - Teaching Still Pending`, text: `Safety improved, but reinforcement or re-entry needs to be tighter.` },
      fail: { title: `Crisis Escalated - Materials Became the Focus`, text: `The response pattern increased pressure, attention, or unsafe material use.` }
    }
  });
})();
