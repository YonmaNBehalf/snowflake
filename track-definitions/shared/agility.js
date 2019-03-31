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
      ]
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
	      "Contributed in a meaningful way to an epic",
	      "Had stories that started out as 'simple' and ended up taking much more effort",
	      "Delved into an epic's research documents to work on its stories",
	      "Learned about the business context of the current effort to better understand the goal for a story",
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
	      "Contributed to an epic and was able to adapt it on their own to overcome a technical difficulty without impacting others around them",
	      "As an epic owner they were able to adapt the general plan to dynamic product circumstances",
	      "Manages own career path using measurable goals",
	      "Adapted technical implementation according to new understanding of business domain",
	      "Epic effort was continuous and little context switching was done"
      ],
  }, {
      "summary": "",
      "signals": [
	      "Able to use a rudimentry implementation plan, complete its details and adapt it on the fly",
	      "Able to resolve major surprises and problems during implementation",
	      "Seeks guidance to expand on the existing plan and optimizes its end results",
	      "Tracks personal goals to completion",
	      "Invests an hour a week at a single activity or project that promotes the department goals",
	      "Able to plan and organise study components for training in various topics and then able to make value out of studying alone or lead a study group",
	      "Learns business domain nuanced considerations and is able to identify and focus on important aspects of an assignment",
		  "Stories shrink in size and epics are completed with a minimum of changes"
      ],
      "examples": [
	      "Completed an epic with minimum Product Research",
	      "Kept project timeline and ETA despite a major change in requirements",
	      "Used a weekly hour to implement a better automation solution for a department process",
	      "Mastered a knowledge domain"
      ],
  }, {
      "summary": "",
      "signals": [
	      "Able to drive department and personal goals without disrupting others' work",
	      "Is not surprised by anything. Very Zen",
	      "Career path is planned in detail with target dates for outrageous yet somehow sensible goals",
	      "Product objectives are achieved with no code changes",
	      "Contributes to business domain understanding of the company through keen insight and analysis"
      ],
      "examples": [
	      "Like, wow.",
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
		]
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
			"Wrote code that adheres to standards and does not require future revisits to clean up",
			"Code is written with the current iteration in mind but little extensibility is possible",
			"Has operation issues and needs to resolve personal environment issues some times",
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
		],
		"examples": [
			"Written code is adequately covered by unit & integration tests",
			"Successfully merged a large foreign code change with local conflicts",
			"Reasoned about coding conventions in guild meetings",
			"Uses the existing automation fully",
		],
	}, {
		"summary": "",
		"signals": [
			"Writes Clean, Correct, Proven code that is covered by layers of tests and is inline with domain logic",
			"Commits usually contribute value to the product. Peripheral changes are usually about refactoring",
			"Solutions are generally human readable and future proofed",
			"Local coding conventions are kept, understood and reasoned about",
			"Capable of performing complex CVS operations that involve multiple people and keep history and code safe",
			"Mastered their IDE",
			"Leverages existing dev automation, proactively introduces new dev automation as part of her routine",
		],
		"examples": [
			"Wrote a feature solution that is extensible and open to changes",
			"Created IDE and personal automation which helps others in the department",
			"Rebased and merged a complex set of conflicting changes",
		],
	}, {
		"summary": "",
		"signals": [
			"Writes extremely high quality code which is elegant, simple and readable while at the same time keeps standards",
			"Writes interlaced test coverage for own and others' code",
			"Revolutionises coding conventions",
			"Knows IDE usage inside and out",
			"Demonstrates an appreciation for automation and its implementation"
		],
		"examples": [
			"Wrote their own damn IDE",
			"Built dev automation from the ground up while providing for future requirements",
		],
	}],
};

export default {
	"6": independenceTrack,
	"7": codingTrack
}