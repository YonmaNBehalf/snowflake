const independenceTrack = {
  "displayName": "Independence",
  "category": "Agility",
  "description": "Freedom without limits is chaos",
  "milestones": [{
      "summary": "",
      "signals": [
	      "Able to follow an implementation plan",
	      "Requires guidance on basic implementation choices",
	      "Does not handle surprises",
	      "Does not take on any extra-curricular responsibilities",
	      "Requires frontal teaching in order to advance",
	      "Unfocused and easily sidetracked"
      ],
      "examples": [
	      "",
	      "",
	      "",
      ],
  }, {
      "summary": "",
      "signals": [
	      "Able to follow an implementation plan",
	      "Able to resolve basic surprises and problems on the fly",
	      "Seeks guidance to expand on the existing plan",
	      "Uses the team's goals as a meter for personal progress",
	      "Given course materials needs a study group to get any value",
	      "Learns superficial business domain considerations",
	      "Stories tend to inflate or a few stories are worked on in parallel"
      ],
      "examples": [
	      "",
	      "",
	      "",
      ],
  }, {
      "summary": "",
      "signals": [
	      "Able to follow an implementation plan and adapt it on the fly",
	      "Able to resolve minor surprises and problems during implementation",
	      "Seeks guidance to expand on the existing plan and improve its end results",
	      "Sets personal goals to measure progress",
	      "Invests an hour a week at a single activity or project",
	      "Able to source study materials and study them independently",
	      "Learns basic business domain considerations and is able to generally identify obviously important aspects of an assignment",
	      "Stories rarely inflate and epics keep their focus during work"
      ],
      "examples": [
	      "",
	      "",
	      "",
      ],
  }, {
      "summary": "",
      "signals": [
	      "Able to use a rudimentry implementation plan, complete its details and adapt it on the fly",
	      "Able to resolve major surprises and problems during implementation",
	      "Seeks guidance to expand on the existing plan and optimizes its end results",
	      "Uses SMART personal goals to measure progress",
	      "Invests an hour a week at a single activity or project",
	      "Able to plan and organise study components for training in various topics and then able to make value out of studying alone or lead a study group",
	      "Learns business domain nuanced considerations and is able to identify and focus on important aspects of an assignment",
		  "Stories shrink in size and epics are completed with a minimum of changes"
      ],
      "examples": [
	      "",
	      "",
	      "",
      ],
  }, {
      "summary": "",
      "signals": [
	      "",
	      "",
	      "",
      ],
      "examples": [
	      "",
	      "",
	      "",
      ],
  }],
};

const codingTrack = {
	"displayName": "Coding",
	"category": "Agility",
	"description": "The master of the sword does not need one to fight",
	"milestones": [{
		"summary": "",
		"signals": [
			"Writes mechanically correct code",
			"Thrashing commits with no evolution path",
			"Solutions generally are not built to be extended",
			"Inconsistent with coding conventions",
			"Unable to coordinate changes to avoid conflicts and merge issues"
		],
		"examples": [
			"",
			"",
			"",
		],
	}, {
		"summary": "",
		"signals": [
			"Writes correct code",
			"Some thrashing commits, usually for a final rewrite before merging",
			"Solutions are sometimes written with extensibility in mind",
			"Generally consistent coding conventions, though usually without a deep understanding",
			"Able to merge with foreign code conflicts so that properly covered code does not break",
			"Knows basic IDE usage",
			"Able to leverage existing personal automation",
		],
		"examples": [
			"",
			"",
			"",
		],
	}, {
		"summary": "",
		"signals": [
			"Writes correct, proven code that is covered by tests and logically sound",
			"Some thrashing commits, mostly used for administrative work such as squashing",
			"Solutions are generally human readable and maintainable",
			"Able to keep local coding conventions. Different standards can be discussed and reasoned about",
			"Able to merge and overcome foreign code conflicts in a safe way without breaking uncovered code",
			"Knows IDE usage at a high level",
			"Able to leverage existing dev automation and also introduces new automation as needed",
			"Number of assignments"
		],
		"examples": [
			"",
			"",
			"",
		],
	}, {
		"summary": "",
		"signals": [
			"Writes Clean, Correct, Proven code that is covered by layers of tests and is inline with domain logic",
			"Commits usually contribute value to the product. Peripheral changes are usually about refactoring",
			"Solutions are generally human readable and future proofed",
			"Local coding conventions are kept, understood and reasoned about",
			"Capable of performing complex CVS operations that involve multiple people and keep history and code safe",
			"Mastered his IDE",
			"Leverages existing dev automation, proactively introduces new dev automation as part of her routine",
			"Number of assignments"
		],
		"examples": [
			"",
			"",
			"",
		],
	}, {
		"summary": "",
		"signals": [
			"Wrote his own IDE",
			"Built dev automation from the ground up while providing for future requirements"
		],
		"examples": [
			"",
			"",
			"",
		],
	}],
};

export default {
	"6": independenceTrack,
	"7": codingTrack
}