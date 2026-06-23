/* daily-mission-2.js */
(function registerDailyMission2() {
  if (typeof POOL === "undefined") throw new Error("POOL must be defined before loading daily-mission-2.js");
  POOL.daily = POOL.daily || [];
  POOL.daily.push({
    id: "daily_2_group_carpet_return",
    title: "Daily Mission: Return to the Carpet",
    start: "step1",
    focus: "Escape-maintained group refusal; prompt a small re-entry step and reinforce participation.",
    routine: "whole-group lesson",
    functionPressure: ["escape", "peer attention"],
    bipTargets: ["Prevent", "Teach", "Reinforce", "Respond"],
    steps: {
      step1: {
        text: `BIP Briefing: Student often avoids whole-group instruction when the carpet feels crowded or the first response is unclear. The plan is to preview the first action, offer a quiet participation choice, and reinforce re-entry quickly. Avoid public reminders that make peers part of the moment.\n\nScene: The class is moving from tables to the carpet for a mini-lesson. Student stops beside his chair, pulls his hoodie over his forehead, and says, "I'm not sitting there." Two peers glance over and whisper.\n\nWhat do you do first?`,
        choices: {
          A: { text: `Quietly offer, "Front corner or back square. Bring your pencil and show me seated feet."`, score: 10, feedback: `High fidelity. You made re-entry concrete and gave control inside the routine.`, wizard: `The Wizard points to two safe squares. Student has a small action instead of a public standoff, and both choices keep him in the lesson.`, next: "step2_supported", meta: { bipComponent: "Prevent", mechanism: "Prompting", errorType: "none", function: "escape" } },
          B: { text: `Tell him, "Everyone is waiting. Please join the carpet now."`, score: 0, feedback: `Low fidelity. Public pressure may increase peer attention and refusal.`, wizard: `The Wizard sees the carpet turn into a stage. Student now has an audience and a bigger reason to resist.`, next: "step2_risk", meta: { bipComponent: "Respond", mechanism: "Performance feedback", errorType: "public pressure", function: "peer attention" } },
          C: { text: `Say, "You can listen from your desk until you feel ready."`, score: 5, feedback: `Developing fidelity. It reduces conflict, but the return step is unclear.`, wizard: `The Wizard keeps the lesson calm, but the desk becomes an easier path than re-entry. The bridge back needs a timer or first action.`, next: "step2_wobble", meta: { bipComponent: "Respond", mechanism: "Adaptation", errorType: "vague re-entry", function: "escape" } }
        }
      },
      step2_supported: {
        text: `Student walks to the back square but stays half turned away. He is close to participating, but not yet connected to the lesson.`,
        choices: {
          A: { text: `Privately mark the re-entry and prompt one low-risk response: thumbs up when he hears the keyword.`, score: 10, feedback: `High fidelity. You reinforced re-entry and shaped participation.`, wizard: `The Wizard catches the re-entry while it is fresh. The next response is small enough to succeed and visible enough to reinforce.`, ending: "success", meta: { bipComponent: "Reinforce", mechanism: "Fluency building", errorType: "none", function: "escape" } },
          B: { text: `Start the lesson and hope he joins when he settles.`, score: 5, feedback: `Developing fidelity. Calm helps, but the replacement response is not strengthened.`, wizard: `The Wizard watches the moment drift. Student is present, but the plan has not named what worked or what to do next.`, ending: "mixed", meta: { bipComponent: "Reinforce", mechanism: "Performance feedback", errorType: "missed reinforcement", function: "escape" } },
          C: { text: `Remind him that sitting turned away is still not following directions.`, score: 0, feedback: `Low fidelity. Correcting too soon may undo the re-entry.`, wizard: `The Wizard winces as the small success gets buried under correction. Student may learn that coming back still leads to pressure.`, ending: "fail", meta: { bipComponent: "Respond", mechanism: "Performance feedback", errorType: "correction after re-entry", function: "escape" } }
        }
      },
      step2_wobble: {
        text: `Student stays at the desk. He is quiet, but the lesson is starting without him and peers know he opted out.`,
        choices: {
          A: { text: `Set a one-minute return cue and offer two carpet spots tied to a tiny response.`, score: 10, feedback: `High fidelity repair. You converted opt-out into planned re-entry.`, wizard: `The Wizard turns the desk into a bridge. There is now a time, a spot, and a first response.`, ending: "mixed", meta: { bipComponent: "Respond", mechanism: "Adaptation", errorType: "repair", function: "escape" } },
          B: { text: `Let him remain there for the whole mini-lesson because he is quiet.`, score: 0, feedback: `Low fidelity. Quiet escape can strengthen future refusal.`, wizard: `The Wizard sees the routine disappear. The behavior worked because the hard part went away.`, ending: "fail", meta: { bipComponent: "Respond", mechanism: "Adaptation", errorType: "escape allowed", function: "escape" } },
          C: { text: `Check back after the lesson and ask why he would not join.`, score: 5, feedback: `Developing fidelity. Processing later may help, but the participation skill was missed.`, wizard: `The Wizard saves the conversation for later, but the current lesson never got repaired.`, ending: "mixed", meta: { bipComponent: "Teach", mechanism: "Prompting", errorType: "delayed teaching", function: "escape" } }
        }
      },
      step2_risk: {
        text: `Student drops into the chair and says louder, "I said no." More students are watching now.`,
        choices: {
          A: { text: `Reduce language, block the audience with your position, and return to one quiet carpet choice.`, score: 10, feedback: `High fidelity repair. You reduced attention and rebuilt the first step.`, wizard: `The Wizard dims the spotlight. The audience shrinks, and Student gets a doable path back.`, ending: "mixed", meta: { bipComponent: "Respond", mechanism: "Adaptation", errorType: "repair", function: "peer attention" } },
          B: { text: `Repeat the direction in a firmer voice so he knows it is not optional.`, score: 0, feedback: `Low fidelity. Escalating the demand can strengthen the public refusal.`, wizard: `The Wizard hears the contest grow. The routine is now about winning, not re-entry.`, ending: "fail", meta: { bipComponent: "Respond", mechanism: "Performance feedback", errorType: "power struggle", function: "adult attention" } },
          C: { text: `Ignore the comment and continue teaching while he sits out.`, score: 5, feedback: `Developing fidelity. This may reduce attention, but escape remains available.`, wizard: `The Wizard appreciates the reduced attention, but the carpet routine still slipped away.`, ending: "mixed", meta: { bipComponent: "Respond", mechanism: "Adaptation", errorType: "missed re-entry", function: "escape" } }
        }
      }
    },
    endings: {
      success: { title: `Success - Re-Entry Reinforced`, text: `Student contacted reinforcement for returning and participating in a small, observable way.` },
      mixed: { title: `Mixed - Routine Partially Repaired`, text: `The routine stabilized, but re-entry or reinforcement was delayed or incomplete.` },
      fail: { title: `Fail - Refusal Strengthened`, text: `The response pattern made escape, peer attention, or adult attention more powerful than re-entry.` }
    }
  });
})();
