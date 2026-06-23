/* wildcard-mission-3.js */
(function registerWildcardMission3() {
  if (typeof POOL === "undefined") throw new Error("POOL must be defined before loading wildcard-mission-3.js");
  POOL.wild = POOL.wild || [];
  POOL.wild.push({
    id: "wild_3_substitute_arrival",
    title: "Wildcard Mission: Substitute Arrival",
    start: "step1",
    focus: "Unexpected adult change; use preview, role clarity, and reinforcement for routine following.",
    routine: "substitute teacher transition",
    functionPressure: ["uncertainty", "adult attention", "escape"],
    bipTargets: ["Prevent", "Teach", "Reinforce", "Respond"],
    steps: {
      step1: {
        text: `BIP Briefing: A new adult can trigger testing, questions, or task refusal. The plan is to preview what stays the same, assign a familiar role, prompt the replacement request, and reinforce following the known routine. Avoid public warnings about behavior for the substitute.\n\nScene: You are called to a quick meeting and a substitute arrives for the next 20 minutes. Student looks at the substitute, grins at peers, and says, "She doesn't know our rules."\n\nWhat do you do first?`,
        choices: {
          A: { text: `Privately preview, "Same math routine. Your job is materials helper. Ask for help card if needed."`, score: 10, feedback: `High fidelity. You anchored the change in familiar structure and replacement communication.`, wizard: `The Wizard keeps the map while the adult changes. Student has a role and a request path.`, next: "step2_supported", meta: { bipComponent: "Prevent", mechanism: "Prompting", errorType: "none", function: "uncertainty" } },
          B: { text: `Tell the substitute to watch Student closely because he may test limits.`, score: 0, feedback: `Low fidelity. This spotlights Student and may invite attention-maintained behavior.`, wizard: `The Wizard sees a label land on Student before the task starts. The audience is ready now.`, next: "step2_risk", meta: { bipComponent: "Prevent", mechanism: "Performance feedback", errorType: "public warning", function: "adult attention" } },
          C: { text: `Tell Student you expect him to be a leader while you are gone.`, score: 5, feedback: `Developing fidelity. Positive framing helps, but the first action is vague.`, wizard: `The Wizard likes the tone, but leadership is a cloud unless it becomes one observable move.`, next: "step2_wobble", meta: { bipComponent: "Prevent", mechanism: "Prompting", errorType: "vague expectation", function: "uncertainty" } }
        }
      },
      step2_supported: {
        text: `Student hands out materials but then asks the substitute three questions about whether he has to finish all problems.`,
        choices: {
          A: { text: `Prompt the help card once, then reinforce when he uses it instead of repeated questions.`, score: 10, feedback: `High fidelity. You shifted attention seeking into the replacement request.`, wizard: `The Wizard turns repeated questions into one useful signal. The substitute can respond consistently.`, ending: "success", meta: { bipComponent: "Teach", mechanism: "Prompting", errorType: "none", function: "adult attention" } },
          B: { text: `Have the substitute answer each question so Student feels secure.`, score: 5, feedback: `Developing fidelity. Supportive, but repeated questions may be reinforced.`, wizard: `The Wizard hears the questions become a path to adult attention.`, ending: "mixed", meta: { bipComponent: "Respond", mechanism: "Adaptation", errorType: "question loop", function: "adult attention" } },
          C: { text: `Tell Student he already knows what to do and needs to stop asking.`, score: 0, feedback: `Low fidelity. This may escalate attention and uncertainty.`, wizard: `The Wizard watches the substitute become part of the contest.`, ending: "fail", meta: { bipComponent: "Respond", mechanism: "Performance feedback", errorType: "dismissed request", function: "adult attention" } }
        }
      },
      step2_wobble: {
        text: `Student announces to peers that he is "in charge" and starts correcting how they use materials.`,
        choices: {
          A: { text: `Privately define one helper job and reinforce when he returns to it.`, score: 10, feedback: `High fidelity repair. You narrowed leadership into a plan-aligned role.`, wizard: `The Wizard trims the crown into a job card. Student can lead by doing one useful thing.`, ending: "mixed", meta: { bipComponent: "Teach", mechanism: "Prompting", errorType: "repair", function: "peer attention" } },
          B: { text: `Let him help manage peers because he is engaged.`, score: 5, feedback: `Developing fidelity. Engagement helps, but peer attention may grow.`, wizard: `The Wizard sees helpfulness and spotlight mixing together. The role needs tighter edges.`, ending: "mixed", meta: { bipComponent: "Prevent", mechanism: "Adaptation", errorType: "loose role", function: "peer attention" } },
          C: { text: `Remove the helper role because he is being bossy.`, score: 0, feedback: `Low fidelity. Removing the role without a replacement step may restart refusal.`, wizard: `The Wizard watches the bridge disappear. Student loses structure and gains a new grievance.`, ending: "fail", meta: { bipComponent: "Respond", mechanism: "Performance feedback", errorType: "removed support", function: "escape" } }
        }
      },
      step2_risk: {
        text: `Student leans back and performs for peers while the substitute tries to begin math.`,
        choices: {
          A: { text: `Reduce audience, give the substitute a brief script, and prompt Student's first math action.`, score: 10, feedback: `High fidelity repair. You restored consistency without feeding the performance.`, wizard: `The Wizard passes the substitute the same map. The show loses oxygen, and the first math step returns.`, ending: "mixed", meta: { bipComponent: "Respond", mechanism: "Adaptation", errorType: "repair", function: "peer attention" } },
          B: { text: `Let the substitute handle it independently.`, score: 5, feedback: `Developing fidelity. Independence may be appropriate, but plan consistency is uncertain.`, wizard: `The Wizard hopes the map is clear enough, but the substitute may not know the replacement path.`, ending: "mixed", meta: { bipComponent: "Prevent", mechanism: "Prompting", errorType: "inconsistent support", function: "adult attention" } },
          C: { text: `Return and publicly remind Student that you warned him.`, score: 0, feedback: `Low fidelity. Public follow-up can strengthen attention and shame.`, wizard: `The Wizard sees the spotlight return brighter than before. The behavior got the main stage.`, ending: "fail", meta: { bipComponent: "Respond", mechanism: "Performance feedback", errorType: "public reprimand", function: "peer attention" } }
        }
      }
    },
    endings: {
      success: { title: `Success - Routine Survived Adult Change`, text: `Student used familiar structure and replacement communication with a new adult present.` },
      mixed: { title: `Mixed - Substitute Routine Stabilized`, text: `The change was managed, but role clarity or reinforcement could be stronger.` },
      fail: { title: `Fail - New Adult Became Attention`, text: `The response pattern made the substitute change a source of escape or attention.` }
    }
  });
})();
