/* wildcard-mission-2.js */
(function registerWildcardMission2() {
  if (typeof POOL === "undefined") throw new Error("POOL must be defined before loading wildcard-mission-2.js");
  POOL.wild = POOL.wild || [];
  POOL.wild.push({
    id: "wild_2_assembly_surprise",
    title: "Wildcard Mission: Surprise Assembly",
    start: "step1",
    focus: "Unexpected schedule shift; use a short preview, safe job choice, and quick reinforcement for flexible movement.",
    routine: "surprise assembly",
    functionPressure: ["escape", "uncertainty", "adult attention"],
    bipTargets: ["Prevent", "Teach", "Reinforce", "Respond"],
    steps: {
      step1: {
        text: `BIP Briefing: Surprise assemblies can overload Student because the location, sound level, and wait time are uncertain. The plan is to preview first-then, offer a safe job or seating choice, and reinforce flexible movement. Avoid long explanations or public debate.\n\nScene: The intercom announces a surprise assembly in five minutes. Students cheer and start lining up. Student covers his ears and says, "Nope. Too loud." He backs toward his cubby.\n\nWhat do you do first?`,
        choices: {
          A: { text: `Say quietly, "First line spot, then back-row seat. Carry the hall pass or hold the checklist?"`, score: 10, feedback: `High fidelity. You made the change predictable and gave control within the routine.`, wizard: `The Wizard makes a two-step map. Student can move with a job instead of negotiating the whole assembly.`, next: "step2_supported", meta: { bipComponent: "Prevent", mechanism: "Prompting", errorType: "none", function: "uncertainty" } },
          B: { text: `Explain that assemblies are fun and everyone has to attend.`, score: 5, feedback: `Developing fidelity. Reassurance is kind, but it may be too much language during uncertainty.`, wizard: `The Wizard's scroll gets long while Student's body stays backed up. The first step is still missing.`, next: "step2_wobble", meta: { bipComponent: "Prevent", mechanism: "Prompting", errorType: "over-explaining", function: "escape" } },
          C: { text: `Tell Student he cannot skip school events just because he dislikes noise.`, score: 0, feedback: `Low fidelity. Public pressure may intensify escape and attention.`, wizard: `The Wizard hears the hallway quiet. The assembly is now a public contest.`, next: "step2_risk", meta: { bipComponent: "Respond", mechanism: "Performance feedback", errorType: "public pressure", function: "adult attention" } }
        }
      },
      step2_supported: {
        text: `Student chooses the checklist and walks to the line, but he keeps his hands near his ears.`,
        choices: {
          A: { text: `Privately reinforce flexible movement and preview the back-row seat plus ear strategy.`, score: 10, feedback: `High fidelity. You reinforced movement and supported sensory predictability.`, wizard: `The Wizard lights the back row. Student knows where his body goes and what to do with the noise.`, ending: "success", meta: { bipComponent: "Reinforce", mechanism: "Performance feedback", errorType: "none", function: "uncertainty" } },
          B: { text: `Keep walking and wait to see if the noise becomes a problem.`, score: 5, feedback: `Developing fidelity. The transition is moving, but the support may arrive late.`, wizard: `The Wizard sees progress, but the sound wave is still ahead. Prevention works best before the hard part.`, ending: "mixed", meta: { bipComponent: "Prevent", mechanism: "Adaptation", errorType: "late support", function: "escape" } },
          C: { text: `Tell him hands down because the class needs to look respectful.`, score: 0, feedback: `Low fidelity. Correcting coping behavior may increase distress.`, wizard: `The Wizard watches a coping tool get taken away before the loud room even arrives.`, ending: "fail", meta: { bipComponent: "Respond", mechanism: "Performance feedback", errorType: "blocked coping", function: "escape" } }
        }
      },
      step2_wobble: {
        text: `Student asks repeated questions about how long it will last. The line is moving without him.`,
        choices: {
          A: { text: `Stop the question loop and point to a first-then card: line, back row, checklist.`, score: 10, feedback: `High fidelity repair. You shifted from debate to predictable action.`, wizard: `The Wizard closes the question scroll and opens the map again.`, ending: "mixed", meta: { bipComponent: "Prevent", mechanism: "Prompting", errorType: "repair", function: "uncertainty" } },
          B: { text: `Answer one more question so he feels heard.`, score: 5, feedback: `Developing fidelity. It is warm, but questions may keep delaying the transition.`, wizard: `The Wizard answers kindly, but the line gets farther away.`, ending: "mixed", meta: { bipComponent: "Respond", mechanism: "Adaptation", errorType: "question loop", function: "escape" } },
          C: { text: `Tell him the questions need to stop right now.`, score: 0, feedback: `Low fidelity. Abrupt pressure can increase refusal.`, wizard: `The Wizard hears the map tear. Student gets pressure instead of predictability.`, ending: "fail", meta: { bipComponent: "Respond", mechanism: "Performance feedback", errorType: "verbal pressure", function: "adult attention" } }
        }
      },
      step2_risk: {
        text: `Student sits by the cubby and says, "Make me." Several students are watching.`,
        choices: {
          A: { text: `Reduce language, move the audience along, and offer walk with you or walk with support.`, score: 10, feedback: `High fidelity repair. You reduced the contest and preserved safety.`, wizard: `The Wizard clears the hallway audience. Both choices move toward the assembly without a battle.`, ending: "mixed", meta: { bipComponent: "Respond", mechanism: "Adaptation", errorType: "repair", function: "peer attention" } },
          B: { text: `Let him stay in class with another adult to avoid escalation.`, score: 5, feedback: `Developing fidelity. Safety may improve, but escape from the event is reinforced.`, wizard: `The Wizard keeps things calm, but the surprise routine disappeared.`, ending: "mixed", meta: { bipComponent: "Respond", mechanism: "Adaptation", errorType: "routine removed", function: "escape" } },
          C: { text: `Tell the class to wait until Student makes the right choice.`, score: 0, feedback: `Low fidelity. This maximizes peer attention and pressure.`, wizard: `The Wizard sees the whole line become an audience. The escape path gets stronger.`, ending: "fail", meta: { bipComponent: "Respond", mechanism: "Performance feedback", errorType: "peer spotlight", function: "peer attention" } }
        }
      }
    },
    endings: {
      success: { title: `Success - Flexible Movement Reinforced`, text: `Student used predictability and a job to enter an unexpected school event.` },
      mixed: { title: `Mixed - Transition Repaired`, text: `The assembly routine stabilized, but prevention or reinforcement could be earlier.` },
      fail: { title: `Fail - Surprise Became a Contest`, text: `The response pattern strengthened escape, attention, or uncertainty during the schedule change.` }
    }
  });
})();
