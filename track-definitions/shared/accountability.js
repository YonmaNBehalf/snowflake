const motivationTrack = {
  "displayName": "Motivation",
  "category": "Accountability",
  "description": "A motivated person has their own reasons for doing something worthwhile",
  "milestones": [{
      "summary": "",
      "signals": [
	      "Uninvolved or uninterested in the day to day work",
	      "Considers certain tasks beneath him",
	      "Cynical attitude towards others' efforts and company intent"
      ],
      "examples": [
	      "",
	      "",
	      "",
      ],
  }, {
      "summary": "",
      "signals": [
	      "Shows up to dailies, updates peers",
	      "Reports progress honestly",
	      "Accepts criticism gracefully"
      ],
      "examples": [
	      "",
	      "",
	      "",
      ],
  }, {
      "summary": "",
      "signals": [
	      "Active and alert during dailies",
	      "Expresses company culture in own conduct, choices and activities",
	      "Accepts critcism and leverages it to learn something new",
	      "Handles difficulties by addressing them directly or by leveraging others' expertise",
	      "Honestly reports on problems and actively attempts to learn from incidents"
      ],
      "examples": [
	      "",
	      "",
	      "",
      ],
  }, {
      "summary": "",
      "signals": [
	      "Consistently involved in personal, team and departmental efforts as an active focal point",
	      "Able to motivate others by expressing the company culture in personal effective behaviors and actions",
	      "Takes on menial tasks with the equal effectiveness expressed in more interesting assignments",
	      "An optimistic & rational approach to process and team effort",
		  "Excitement in the face of adversity",
		  "Honestly attempts to understand and align personal and company goals",
		  "Unafraid of admitting failure and actively stepping up to correct the results and collateral damage"
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

const thoroughnessTrack = {
	"displayName": "Thoroughness",
	"category": "Accountability",
	"description": "God is in the details",
	"milestones": [{
		"summary": "",
		"signals": [
			"Does not consider all aspects of a technological solution",
			"Acts without fully understanding the background or domain of a requirement",
			"Technical debt is piled high and code requires reworking to be future ready",
			"Bugs are only superficially analysed and rarely actually reproduced",
			"Changes and fixes require followup"
		],
		"examples": [
			"",
			"",
			"",
		],
	}, {
		"summary": "",
		"signals": [
			"Requests missing domain details ad-hoc",
			"Looks into basic aspects prior to implementation",
			"Technical debt is rarely avoided due to time constraints but is usually disposed of properly",
			"Bugs are analysed and sometimes reproduced in a basic level that enables fixing them",
			"Changes and fixes sometimes require followup or may cause mild undesired collateral effects"
		],
		"examples": [
			"",
			"",
			"",
		],
	}, {
		"summary": "",
		"signals": [
			"Collects missing domain information to gain a complete picture",
			"Plans implementation and testing prior to actual development. Able to spot \"risky assignments\" for what they are",
			"Technical debt is usually accrued due to surprises and after reasoning about the current and future costs of creating it",
			"Bugs are reproduced and diagnosed prior to implementation",
			"Changes and fixes rarely requires followup"
		],
		"examples": [
			"",
			"",
			"",
		],
	}, {
		"summary": "",
		"signals": [
			"Expands personal knowledge of the domain and then trains others",
			"Able to complete a complicated project, start to finish with all aspects complete and ready for launch",
			"Able to analyse a specced out story and come up with multiple-layer edge cases and repercussions of the implementation",
			"Tries out multiple solutions for implementation",
			"Considers all non-functional aspects of an assignment such as security, performance, ux and accessibility",
			"Extracts value even from non-development activities such as research, test writing and collaboration learning",
			"Technical debt is accrued due to surprises and its long-term effects are reincorporated into the plan",
			"Changes and fixes are thoroughly tested and require no additional work"
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

const ownershipTrack = {
	"displayName": "Ownership",
	"category": "Accountability",
	"description": "Ownership goes hand-in-hand with Responsibility",
	"milestones": [{
		"summary": "",
		"signals": [
			"Assumes responsibility for own changesets",
			"Rarely joins in code reviews",
			"Does not establish or challenge coding conventions"
		],
		"examples": [
			"",
			"",
			"",
		],
	}, {
		"summary": "",
		"signals": [
			"Takes up responsibility for a small or limited domain",
			"Assists in code reviews for own domains",
			"Establishes coding conventions for own domain but rarely enforces them",
			"Responsible for a story's research, implementation and testing"
		],
		"examples": [
			"",
			"",
			"",
		],
	}, {
		"summary": "",
		"signals": [
			"Assists in code reviews for own or others' domains",
			"Collaborates with developers in the domain",
			"Consistently conducts knowledge sharing with others",
			"Enforces coding conventions in a reasonable and flexible manner",
			"Responsible for a small Epic's research, planning, implementation, testing and release",
			"Participates in others' assignments planning"
		],
		"examples": [
			"",
			"",
			"",
		],
	}, {
		"summary": "",
		"signals": [
			"Acts as gatekeeper for a system domain for code reviews and standards",
			"Supports and actively assists others that develop within owned domain",
			"Explores initiatives to promote company activities through the owned domain such as new products and capabilities",
			"Teaches others about domain activities and shares detailed knowledge about the domain",
			"Enforces coding conventions in a reasonable and flexible manner and constantly refines them",
			"Responsible for a large Epic's research, planning, implementation, testing and release",
			"Participates in others' assignments research and planning"
		],
		"examples": [
			"",
			"",
			"",
		],
	}, {
		"summary": "",
		"signals": [
			"Eagerly takes responsibility of code quality, functional completeness and standards within a system domain",
			"Responsible for a project's research, planning, implementation, testing and release",
			"Participates in others' assignments research, planning and release"
		],
		"examples": [
			"",
			"",
			"",
		],
	}],
};

export default {
	"3": motivationTrack,
	"4": thoroughnessTrack,
	"5": ownershipTrack
}