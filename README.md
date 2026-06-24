# Mission: Reinforceable — Clean Rebuild Starter

This is a GitHub Pages-ready rebuild of Mission: Reinforceable using one shared base game and separate teacher folders.

## How it is organized

```text
mission-reinforceable/
├── index.html                 # One shared app shell
├── css/styles.css             # Shared pixel-game styling
├── js/                        # Shared base game systems
│   ├── app.js                 # App startup and navigation
│   ├── dashboard.js           # Progress page / streaks / saved runs
│   ├── engine.js              # Mission play, branching, scoring, hearts, feedback
│   ├── reminders.js           # Browser reminder settings
│   ├── storage.js             # Local save data
│   ├── teacher-loader.js      # Loads teacher-specific folders
│   └── utils.js
├── assets/skin-v2/            # Shared visual assets
├── teachers/
│   ├── olson/                 # Example teacher game
│   │   ├── config.js          # Teacher-specific settings
│   │   └── content/           # Teacher-specific missions
│   └── _template/             # Copy this when making a new teacher
└── docs/                      # Mockups used as visual references
```

## How to open it

Open `index.html` directly, or deploy the folder to GitHub Pages.

Default teacher:

```text
index.html
```

Specific teacher:

```text
index.html?teacher=olson
```

## How to make a new teacher game

1. Duplicate `teachers/olson` or `teachers/_template`.
2. Rename the copied folder with a simple lowercase ID, such as `teacher-a`.
3. Edit the copied folder’s `config.js`.
4. Replace or edit the mission files in that teacher’s `content` folder.
5. Open the game with:

```text
index.html?teacher=teacher-a
```

## Teacher-specific settings live here

Each teacher folder has a `config.js` file. This controls:

- teacher name / classroom label
- student pseudonym
- classroom image
- number of hearts
- mission files to load
- Google Apps Script logging endpoint
- overall feedback language
- dashboard growth focus

## Mission files

Mission content files push missions into one of these pools:

```js
POOL.daily.push({...})
POOL.wild.push({...})
POOL.crisis.push({...})
```

Each mission can branch by setting a choice’s `next` field:

```js
next: "step2_supported"
```

If a choice has no valid `next`, the mission ends and the results screen appears.

## Scoring and hearts

This rebuild uses the 0 / 5 / 10 scoring structure.

- Correct = 10 points; if hearts have been lost, restores 1/2 heart.
- Neutral = 5 points; loses 1/4 heart.
- Incorrect = 0 points; loses 1/2 heart.

The visual heart system supports fractional hearts, but displays them simply.

## Same-day return logic

When a Daily Mission has already been completed today in the same browser, the landing page switches to the same-day return version and still allows the teacher to play again, try Mystery Mission, try Crisis Mission, or view Progress.

## Progress dashboard

Runs are saved in browser `localStorage` by teacher ID. The Progress page calculates:

- overall accuracy
- day streak
- missions completed
- best score
- list of recent missions

## Logging

The game always saves locally first. If `resultEndpoint` in `teachers/<teacher-id>/config.js` is filled in, the game also tries to POST the run result to that endpoint.

For dissertation/privacy use, keep the repo free of real student names, real teacher names if not appropriate, and identifiable classroom details.
