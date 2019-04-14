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
      ]
  }, {
      "summary": "",
      "signals": [
	      "Shows up to dailies, updates peers",
	      "Reports progress honestly",
	      "Accepts criticism gracefully"
      ],
      "examples": [
	      "Reported about a setback immediately and without omission",
	      "Accepted personal criticism agreeably and appreciatively",
      ],
  }, {
      "summary": "",
      "signals": [
	      "Active and alert during dailies",
	      "Expresses company culture in own conduct, choices and activities",
	      "Accepts critcism and leverages it to improve an existing behavior",
	      "Handles difficulties by addressing them directly or by leveraging others' expertise",
	      "Honestly reports on problems and actively attempts to learn from incidents"
      ],
      "examples": [
	      "Colleagues know and understand their current effort's progress",
	      "Shared credit for a group effort with peers and team",
	      "Used criticism to change a behaviour",
	      "Learned from a failure",
      ],
  }, {
      "summary": "",
      "signals": [
	      "Consistently involved in personal, team and departmental efforts as an active focal point",
	      "Able to motivate others by expressing the company culture in personal effective behaviors and actions",
	      "Accepts critcism and leverages it to learn something new",
	      "Takes on menial tasks with the equal effectiveness expressed in more interesting assignments",
	      "An optimistic & rational approach to process and team effort",
		  "Excitement in the face of adversity",
		  "Honestly attempts to understand and align personal and company goals",
		  "Unafraid of admitting failure and actively stepping up to correct the results and collateral damage"
      ],
      "examples": [
	      "Lead a habit making change in the department",
	      "Worked on bugs and used the opportunity to improve others' deliveries",
	      "Considered a company policy and challenged it to improve it",
	      "Ran Post-Mortem on own production incident. Grew from the experience in a way which benefited the department",
      ],
  }, {
      "summary": "",
      "signals": [
	      "Promotes a positive attitude towards adversity, change and failure in peers and the department",
	      "Leverages any discussion's results into growth and improvement",
	      "Faces impossible professional challenges with an almost mad glee that sweeps up everyone else",
	      "Inspires others to work hard on becoming the best versions of themselves",
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
	}, {
		"summary": "",
		"signals": [
			"Requests missing domain details ad-hoc",
			"Looks into basic aspects prior to implementation",
			"Technical debt is rarely avoided due to time constraints but is usually disposed of properly",
			"Bugs are analysed and sometimes reproduced in a basic level that enables fixing them",
			"Changes and fixes sometimes require followup or may cause mild undesired collateral effects",
			"Able to find the obscure root cause of an issue through sheer luck"
		],
		"examples": [
			"A one-sentence epic requirements description were elaborated upon",
			"Planning took into account prior efforts in the domain",
			"Properly cleaned up, or at least accounted for deferred cleanup after a complex and tech-debt epic",
			"A difficult non-dev reproducable bug was reproduced elsewhere and resolved",
		],
	}, {
		"summary": "",
		"signals": [
			"Collects missing domain information to gain a complete picture",
			"Plans implementation and testing prior to actual development",
			"Technical debt is usually accrued due to surprises and after reasoning about the current and future costs of creating it",
			"Bugs are reproduced and diagnosed prior to implementation",
			"Changes and fixes rarely requires followup",
			"Able to find the obscure root cause of an issue through intuition and guesswork"
		],
		"examples": [
			"Created a research document and schematics for the implementation aspects of an effort",
			"Quarter's epics were completed with only a few technical debt items or bugs",
			"A Bug's diagnosis included underlying root cause and not only the superficial issue",
		],
	}, {
		"summary": "",
		"signals": [
			"Expands personal knowledge of the domain and then trains others",
			"Able to complete a complicated project, start to finish with all aspects complete and ready for launch",
			"Able to analyse a specced out story and come up with multiple-layer edge cases and repercussions of the implementation",
			"Tries out multiple solutions for implementation",
			"Able to spot \"risky assignments\" for what they are",
			"Considers all non-functional aspects of an assignment such as security, performance, ux and accessibility",
			"Extracts value even from non-development activities such as research, test writing and collaboration learning",
			"Technical debt is accrued due to surprises and its long-term effects are reincorporated into the plan",
			"Changes and fixes are thoroughly tested and require no additional work",
			"Able to find the obscure root cause of an issue through careful analysis of data or code"
		],
		"examples": [
			"Trained colleagues on the domain subject matter",
			"Mapped nuanced edge cases for a large effort",
			"Planned for the non-functional aspects of an epic",
			"Discussed and reasoned about multiple implementation options for a complicated issue"
		],
	}, {
		"summary": "",
		"signals": [
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
		]
	}, {
		"summary": "",
		"signals": [
			"Takes up responsibility for a small or limited domain",
			"Assists in code reviews for own domains",
			"Establishes coding conventions for own domain but rarely enforces them",
			"Responsible for a story's research, implementation and testing"
		],
		"examples": [
			"Took up responsibility for a small system domain or 3rd party system",
			"Regularly did code reviews for peers",
			"Defined as a small scale implementation plan",
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
			"Regularly assisted other developers in development work in owned domain",
			"Trained others in domain concerns and business knowledge",
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
			"Halted sub-par code from being pushed into the domain",
			"Promotes and teaches domain's conventions to others that work within it",
			"Conducted a large epic's research",
		],
	}, {
		"summary": "",
		"signals": [
			"Eagerly takes responsibility of code quality, functional completeness and standards within a system domain",
			"Responsible for a project's research, planning, implementation, testing and release",
			"Participates in others' assignments research, planning and release"
		],
		"examples": [
			"Revamped a domain's set of conventions and standards. Refactored its code to fit the new set.",
			"Guided others in research and is involved as a knowledge focus in research that touches on this domain",
		],
	}],
};

export default {
	"3": motivationTrack,
	"4": thoroughnessTrack,
	"5": ownershipTrack
}