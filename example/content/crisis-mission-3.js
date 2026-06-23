/* crisis-mission-3.js */
(function registerCrisisMission3() {
  if (typeof POOL === "undefined") throw new Error("POOL must be defined before loading crisis-mission-3.js");
  POOL.crisis = POOL.crisis || [];
  POOL.crisis.push({
    id: "crisis_3_under_table_shutdown",
    title: "Crisis Drill: Under-Table Shutdown",
    start: "step1",
    focus: "Shutdown under furniture; maintain safety, reduce language, and reinforce safe re-entry.",
    routine: "shutdown / refusal under furniture",
    functionPressure: ["escape", "adult attention", "safety risk"],
    bipTargets: ["Crisis Respond", "Respond", "Reinforce"],
    steps: {
      step1: {
        text: `BIP Briefing: When Student moves under furniture, the plan is to maintain safety and visibility, reduce verbal pressure, clear unnecessary attention, and offer a safe low-demand return path. Avoid pulling, crowding, or processing while Student is under the table.\n\nScene: After a difficult correction during centers, Student crawls under the kidney table and curls up with his backpack. His feet are visible, and a few students are leaning over to look.\n\nWhat do you do first?`,
        choices: {
          A: { text: `Move peers away, keep line of sight, and say calmly, "You are safe. I am giving space."`, score: 10, feedback: `High fidelity. You reduced audience and protected safety without crowding.`, wizard: `The Wizard lowers the room volume. Student is visible, peers are gone, and the adult presence is steady instead of pressing.`, next: "step2_supported", meta: { bipComponent: "Crisis Respond", mechanism: "Adaptation", errorType: "none", function: "escape" } },
          B: { text: `Ask what is wrong and promise he is not in trouble.`, score: 5, feedback: `Developing fidelity. Kind intent, but questions may be too much while he is hidden.`, wizard: `The Wizard speaks softly, but the table is still a cave. Questions can keep the adult attention loop alive.`, next: "step2_wobble", meta: { bipComponent: "Crisis Respond", mechanism: "Adaptation", errorType: "questions during shutdown", function: "adult attention" } },
          C: { text: `Tell him he needs to come out immediately because under the table is unsafe.`, score: 0, feedback: `Low fidelity. Immediate demands can deepen shutdown or create a power struggle.`, wizard: `The Wizard hears the table become a fortress. The demand makes coming out feel harder.`, next: "step2_risk", meta: { bipComponent: "Respond", mechanism: "Performance feedback", errorType: "demand during shutdown", function: "escape" } }
        }
      },
      step2_supported: {
        text: `Student stops kicking the backpack strap and looks toward you. He is not ready for work, but his body is quieter.`,
        choices: {
          A: { text: `Offer two safe re-entry choices: sit beside the table or walk to the calm spot with the backpack.`, score: 10, feedback: `High fidelity. You gave low-demand choices that both increase safety.`, wizard: `The Wizard opens two exits from the cave. Neither one requires a lecture or instant work.`, ending: "success", meta: { bipComponent: "Crisis Respond", mechanism: "Prompting", errorType: "none", function: "escape" } },
          B: { text: `Wait until he comes out on his own.`, score: 5, feedback: `Developing fidelity. Space helps, but the return criteria are vague.`, wizard: `The Wizard waits gently. Safety is stable, but the bridge back has not been built yet.`, ending: "mixed", meta: { bipComponent: "Respond", mechanism: "Adaptation", errorType: "vague return", function: "escape" } },
          C: { text: `Use the calmer moment to discuss the original correction.`, score: 0, feedback: `Low fidelity. Processing too soon can restart shutdown.`, wizard: `The Wizard sees the old problem crawl under the table too. Regulation needs to come first.`, ending: "fail", meta: { bipComponent: "Respond", mechanism: "Performance feedback", errorType: "processing too early", function: "adult attention" } }
        }
      },
      step2_wobble: {
        text: `Student pulls the backpack closer and says, "Go away." The peers are still curious.`,
        choices: {
          A: { text: `Clear peers fully, reduce language, and repeat the safety-space message.`, score: 10, feedback: `High fidelity repair. You reduced attention and pressure.`, wizard: `The Wizard closes the audience door. The shutdown has less to push against now.`, ending: "mixed", meta: { bipComponent: "Crisis Respond", mechanism: "Adaptation", errorType: "repair", function: "adult attention" } },
          B: { text: `Stay close so he knows you care.`, score: 5, feedback: `Developing fidelity. Proximity may help, but it can also feel like pressure.`, wizard: `The Wizard stays nearby, but the cave feels smaller. Space may be the stronger support.`, ending: "mixed", meta: { bipComponent: "Respond", mechanism: "Adaptation", errorType: "too much proximity", function: "adult attention" } },
          C: { text: `Tell him saying "go away" is disrespectful.`, score: 0, feedback: `Low fidelity. Correcting language during shutdown can escalate.`, wizard: `The Wizard sees the shutdown turn into a manners lesson. The exit gets farther away.`, ending: "fail", meta: { bipComponent: "Respond", mechanism: "Performance feedback", errorType: "correction during shutdown", function: "escape" } }
        }
      },
      step2_risk: {
        text: `Student scoots farther under the table and grips the backpack. The table legs make it harder to see his hands.`,
        choices: {
          A: { text: `Back up, maintain sight as safely as possible, clear the area, and signal support.`, score: 10, feedback: `High fidelity repair. You reduced pressure and improved safety monitoring.`, wizard: `The Wizard steps back so the cave does not shrink. Support is coming, and the audience is gone.`, ending: "mixed", meta: { bipComponent: "Crisis Respond", mechanism: "Adaptation", errorType: "repair", function: "safety risk" } },
          B: { text: `Keep talking from nearby so he does not feel abandoned.`, score: 5, feedback: `Developing fidelity. Connection matters, but repeated talking may keep pressure high.`, wizard: `The Wizard's voice fills the table space. The intention is kind; the timing is fragile.`, ending: "mixed", meta: { bipComponent: "Respond", mechanism: "Prompting", errorType: "too much language", function: "adult attention" } },
          C: { text: `Reach for the backpack so he cannot hide behind it.`, score: 0, feedback: `Low fidelity. Taking items during shutdown can increase panic or aggression.`, wizard: `The Wizard's alarm flashes. The backpack was a shield, and grabbing it may turn shutdown into crisis.`, ending: "fail", meta: { bipComponent: "Crisis Respond", mechanism: "Adaptation", errorType: "physical intrusion", function: "safety risk" } }
        }
      }
    },
    endings: {
      success: { title: `Crisis Managed - Safe Re-Entry Offered`, text: `Student had a low-pressure path out of shutdown while safety and dignity were protected.` },
      mixed: { title: `Crisis Stabilized - Re-Entry Still Fragile`, text: `The shutdown cooled, but the return path needs clearer reinforcement.` },
      fail: { title: `Crisis Escalated - Shutdown Deepened`, text: `The response pattern increased pressure, attention, or physical intrusion during shutdown.` }
    }
  });
})();
