/* daily-mission-3.js */
(function registerDailyMission3() {
  if (typeof POOL === "undefined") throw new Error("POOL must be defined before loading daily-mission-3.js");
  POOL.daily = POOL.daily || [];
  POOL.daily.push({
    id: "daily_3_partner_work_start",
    title: "Daily Mission: Partner Work Start",
    start: "step1",
    focus: "Adult-attention and escape pressure during partner work; prompt a replacement request and reinforce cooperative start.",
    routine: "partner activity",
    functionPressure: ["adult attention", "escape", "peer attention"],
    bipTargets: ["Prevent", "Teach", "Reinforce", "Respond"],
    steps: {
      step1: {
        text: `BIP Briefing: Partner work can trigger refusal when Student does not know how to enter the task or repair a peer mismatch. The plan is to preview the first partner job, prompt a help or swap request, and reinforce the first cooperative start. Avoid solving everything for him or turning the partner issue into a public discussion.\n\nScene: Students are pairing up to sort vocabulary cards. Student looks at his assigned partner, folds his arms, and says, "I'm not working with him." The partner shrugs and starts touching the cards.\n\nWhat is your first move?`,
        choices: {
          A: { text: `Quietly say, "Ask for help or ask for a card job. Which one?"`, score: 10, feedback: `High fidelity. You prompted replacement communication and a concrete start.`, wizard: `The Wizard hands Student two keys. Both unlock participation without handing him escape.`, next: "step2_supported", meta: { bipComponent: "Teach", mechanism: "Prompting", errorType: "none", function: "escape" } },
          B: { text: `Switch partners immediately so the group can get started.`, score: 5, feedback: `Developing fidelity. The task may continue, but the replacement request was not taught.`, wizard: `The Wizard sees the room move on, but Student did not practice entering partner work. The adult solved the problem for him.`, next: "step2_wobble", meta: { bipComponent: "Respond", mechanism: "Adaptation", errorType: "adult solved", function: "escape" } },
          C: { text: `Tell him everyone has to work with assigned partners and refusing is not respectful.`, score: 0, feedback: `Low fidelity. This adds public pressure and may increase peer attention.`, wizard: `The Wizard watches the partner task become a character trial. The cards are no longer the focus.`, next: "step2_risk", meta: { bipComponent: "Respond", mechanism: "Performance feedback", errorType: "public correction", function: "peer attention" } }
        }
      },
      step2_supported: {
        text: `Student mutters, "Fine, I will do cards," and pulls three cards toward himself. The partner is still moving quickly.`,
        choices: {
          A: { text: `Mark the cooperative start and assign clear roles: Student reads, partner places.`, score: 10, feedback: `High fidelity. You reinforced entry and reduced partner friction.`, wizard: `The Wizard separates the jobs like puzzle pieces. The first cooperative move gets named and strengthened.`, ending: "success", meta: { bipComponent: "Reinforce", mechanism: "Fluency building", errorType: "none", function: "adult attention" } },
          B: { text: `Let them figure it out because he has started.`, score: 5, feedback: `Developing fidelity. Independence is good, but the fragile start needs support.`, wizard: `The Wizard watches the first spark without shielding it. The partner speed could still knock the routine off course.`, ending: "mixed", meta: { bipComponent: "Reinforce", mechanism: "Performance feedback", errorType: "delayed structure", function: "escape" } },
          C: { text: `Tell Student not to mutter if he wants partner privileges.`, score: 0, feedback: `Low fidelity. This corrects tone instead of reinforcing task entry.`, wizard: `The Wizard sees the doorway close. Student entered the task, but the first consequence was correction.`, ending: "fail", meta: { bipComponent: "Respond", mechanism: "Performance feedback", errorType: "corrected replacement attempt", function: "adult attention" } }
        }
      },
      step2_wobble: {
        text: `After the switch, Student waits for the new partner to do most of the work. He avoided the hard social entry, but the skill has not been practiced.`,
        choices: {
          A: { text: `Prompt one role request: "Tell your partner, I can read first." Then reinforce it.`, score: 10, feedback: `High fidelity repair. You brought replacement communication back into the task.`, wizard: `The Wizard brings the missing skill back to the table. Student practices a phrase that can work next time too.`, ending: "mixed", meta: { bipComponent: "Teach", mechanism: "Prompting", errorType: "repair", function: "escape" } },
          B: { text: `Allow the partner to lead so Student stays calm.`, score: 5, feedback: `Developing fidelity. Calm is preserved, but active participation is thin.`, wizard: `The Wizard sees quiet cooperation, but not much skill growth.`, ending: "mixed", meta: { bipComponent: "Respond", mechanism: "Adaptation", errorType: "passive participation", function: "escape" } },
          C: { text: `Tell Student he lost his chance to choose because he refused the first partner.`, score: 0, feedback: `Low fidelity. Delayed consequences may renew refusal.`, wizard: `The Wizard hears yesterday's thunder in today's task. The replacement path gets harder to find.`, ending: "fail", meta: { bipComponent: "Respond", mechanism: "Performance feedback", errorType: "punitive consequence", function: "adult attention" } }
        }
      },
      step2_risk: {
        text: `Student says, "Then I just won't do it," and the partner pushes the cards away.`,
        choices: {
          A: { text: `Reduce attention, reset roles privately, and prompt one help request.`, score: 10, feedback: `High fidelity repair. You lowered the audience and returned to the replacement behavior.`, wizard: `The Wizard clears the table noise. One private request can reopen the task.`, ending: "mixed", meta: { bipComponent: "Respond", mechanism: "Adaptation", errorType: "repair", function: "peer attention" } },
          B: { text: `Separate Student to finish alone.`, score: 5, feedback: `Developing fidelity. It may reduce conflict, but partner-work avoidance remains likely.`, wizard: `The Wizard moves the cards apart. The crisis cools, but the partner routine was escaped.`, ending: "mixed", meta: { bipComponent: "Respond", mechanism: "Adaptation", errorType: "removed routine", function: "escape" } },
          C: { text: `Have both students explain what happened before anyone continues.`, score: 0, feedback: `Low fidelity. Processing now can amplify attention and delay work.`, wizard: `The Wizard sees the vocabulary task turn into a courtroom. The cards can wait forever if the discussion grows.`, ending: "fail", meta: { bipComponent: "Respond", mechanism: "Performance feedback", errorType: "processing too early", function: "adult attention" } }
        }
      }
    },
    endings: {
      success: { title: `Success - Cooperation Strengthened`, text: `Student practiced a replacement request and contacted reinforcement for starting partner work.` },
      mixed: { title: `Mixed - Partner Routine Stabilized`, text: `The task continued, but replacement communication or reinforcement could be tighter.` },
      fail: { title: `Fail - Partner Refusal Strengthened`, text: `The response pattern made escape or attention more powerful than cooperative entry.` }
    }
  });
})();
