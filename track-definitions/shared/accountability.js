const motivationTrack = {
  "displayName": "Motivation",
  "category": "Accountability",
  "description": "A motivated person has their own reasons for doing something worthwhile",
  "milestones": [{
      "summary": "",
      "signals": [
	      "Uninvolved or uninterested in the day to day work",
	      "Considers certain tasks beneath him",
	      "Cynical attitude towards others' efforts and company intent",
	      "Silent in meetings"
      ]
  }, {
      "summary": "",
      "signals": [
	      "Shows up to dailies, updates peers",
	      "Aware of general department priorities and plans",
	      "Reports progress honestly",
	      "Keeps with team processes",
	      "Accepts criticism gracefully",
	      "Occasionally participates in meetings"
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
	      "Generally understands the company goals and how those affect the department",
	      "Accepts critcism and leverages it to improve an existing behavior",
	      "Actively supports & participates in team processes",
	      "Active participant in most meetings. Offers opinions and options"
      ],
      "examples": [
      	  "Epic done before leaving on vacation",
	      "Handles difficulties by addressing them directly or by leveraging others' expertise",
	      "Honestly reports on problems and actively attempts to learn from incidents",
	      "Colleagues know and understand their current effort's progress",
	      "Shared credit for a group effort with peers and team",
	      "Used criticism to change a behaviour",
	      "Learned from a failure",
      ],
  }, {
      "summary": "",
      "signals": [
	      "Participates in meetings, contributes knowledge and promotes department efforts",
	      "Knows company goals and reflects them in day-to-day choices",
	      "Demonstrates company culture and values",
	      "Motivates others by expressing the company culture in personal effective behaviors and actions",
	      "Accepts critcism and leverages it to learn something new",
	      "Takes on menial tasks with the equal effectiveness expressed in more interesting assignments",
	      "Accepts and promotes the team process",
      ],
      "examples": [
	      "Meets challenges head-on and with an eager attitude",
	      "Approaches failure as an opportunity to learn and improve",
	      "Initiated process creation in the team",
	      "Performed scheduled cleanup and introduced other underlying improvements to code and application",
	      "Inspired an empathic approach in others when handling conflict",
	      "Lead Post-Mortem on own production incident. Grew from the experience in a way which benefited the department",
	      "Reasons about assignment's contribution to the company's high-level goal",
	      "Aligned personal and company goals",
      ],
  }, {
      "summary": "",
	  "signals": [
		  "Consistently involved in personal, team and departmental efforts as an active focal point",
		  "Intimately understands the company's set of priorities, their cascade to department goals and team priorities",
		  "Sets a cultural example to the others around him by expressing those values in all aspects of professional life",
		  "Accepts critcism and honestly leverages it to improve and also to promote team process",
		  "An optimistic & rational approach to process and team effort",
		  "Excitement in the face of adversity",
		  "Eager meeting participant that shares thoughts, opinions and ideas"
	  ],
	  "examples": [
		  "Honestly attempts to understand and align personal and company goals",
		  "Unafraid of admitting failure and actively stepping up to correct the results and collateral damage",
		  "Takes on menial tasks with the equal effectiveness expressed in more interesting assignments",
		  "Lead a habit making change in the department",
		  "Worked on bugs and used the opportunity to improve others' deliveries",
		  "Considered a company policy and challenged it to improve it",
		  "Changed behavior and team norms to fit feedback",
		  "Ran Post-Mortem on own production incident. Grew from the experience in a way which benefited the department",
		  "Can explain how the current assignment specifically contributes to the company's high-level goal"
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
			"Changes and fixes require followup",
			"Code reviews usually focus on trivial details or rarely raises any concerns",
			"Unfocused efforts provide inconsistent and ineffective outcomes",
			"Unforeseen collateral regressions are common after changes",
			"Writes complex jargon which is unclear to anyone but themselves at the moment of writing",
			"Effort results are not expressed in any kind of effective communication"
		],
	}, {
		"summary": "",
		"signals": [
			"Requests missing domain details ad-hoc",
			"Looks into basic aspects prior to implementation",
			"Technical debt is rarely avoided due to time constraints but is usually disposed of properly",
			"Bugs are analysed and sometimes reproduced in a basic level that enables fixing them",
			"Changes and fixes sometimes require followup or may cause mild undesired collateral effects",
			"Pursues objectives to completion, even if not in a timely manner",
			"Unforeseen collateral regressions are rare after changes",
			"Code reviews raise legitimate basic concerns",
			"Writes documentation which will be understandable by peers that know and understand the current context",
			"Generally describes current status of efforts when completed",
			"Effort status is communicated in a single medium"
		],
		"examples": [
			"Gave me clear agenda items for effort with another team",
			"A one-sentence epic requirements description were elaborated upon",
			"Planning took into account prior efforts in the domain",
			"Properly cleaned up, or at least accounted for deferred cleanup after a complex and tech-debt epic",
			"A difficult non-dev reproducable bug was reproduced elsewhere and resolved",
			"Able to deploy a hotfix in production without damaging other systems"
		],
	}, {
		"summary": "",
		"signals": [
			"Collects missing domain information to gain a complete picture",
			"Plans implementation and testing prior to actual development",
			"Implementation plans are kept up to date during the project",
			"Technical debt is usually accrued due to surprises and after reasoning about the current and future costs of creating it",
			"Bugs are reproduced and diagnosed prior to implementation",
			"Changes and fixes rarely requires followup",
			"Root cause analysis is based on intuition",
			"Code reviews are in depth and concerns are raised for standards, edge cases and cleanliness.",
			"Focuses on selected priorities with minimal slack time",
			"Collateral effects for changes are rare and otherwise usually mitigated",
			"Documents use a clear and concise form that any peer with some domain understanding can follow",
			"Provides updates in a predefined cadence about efforts",
			"Effort updates use one appropriate medium such as verbal, messages, issue tickets or others"
		],
		"examples": [
			"Provided for testing issues in advance and set up monitoring to manage the situation",
			"Created a research document and schematics for the implementation aspects of an effort",
			"Quarter's epics were completed with only a few technical debt items or bugs",
			"A Bug's diagnosis included underlying root cause and not only the superficial issue",
			"A hotfix had adverse effects but these were acknowledged and provided for prior to deployment"
		],
	}, {
		"summary": "",
		"signals": [
			"Expands personal knowledge of the domain and shares with others",
			"Implementation plan includes some edge cases and describes limitations, considers non-functional implications",
			"Spots \"risky assignments\" for what they are",
			"Plan has a contingency for road bumps",
			"Changes and fixes are thoroughly tested in production",
			"Root cause analysis is based on dry code read-through",
			"Priorities are reflected in choices and assignments",
			"Collateral effects are rare and mitigated",
			"Code review comments demonstrate insight into conventions and technical considerations",
			"Documents are written in an accessible way so that a new team member can gain value from",
			"Updates for efforts are delivered in a cadence that demonstrates the value to the owner",
			"Effort updates use multiple mediums such as verbal, messages, issue tickets to boost general awareness"
		],
		"examples": [
			"Thinks up two solutions for implementation",
			"Trained colleagues on the domain subject matter",
			"Considers a non-functional aspects of an assignment such as security, performance, ux and accessibility",
			"Technical debt is accrued due to surprises and its long-term effects are reincorporated into the plan",
			"Mapped nuanced edge cases for a large effort",
			"Planned for the non-functional aspects of an epic",
			"Discussed and reasoned about multiple implementation options for a complicated issue",
			"Worked on multiple efforts and properly compartmentalised them for maximum efficiency",
			"An emphasis on client needs and requirements is part of proposed solutions at the expense of other priorities"
		],
	}, {
		"summary": "",
		"signals": [
			"Expands personal knowledge of the domain and then trains others",
			"Able to analyse a specced out story and come up with multiple-layer edge cases and repercussions of the implementation",
			"Able to spot \"risky assignments\" for what they are",
			"Plans have multiple contingencies and can be adapted for surprises",
			"Implementation plans are improved on to contain decision making notes and alternatives considered in the project",
			"Changes and fixes are thoroughly tested and require no additional work",
			"Root cause analysis is based on careful analysis of data, debugging and trials",
			"Focused and driven efforts by priority and value",
			"Collateral effects are extremely rare and never surprising",
			"Code review comments demonstrate deep insight into the code base, its developers and their state of mind at the time",
			"Documents are written in an accessible way that even someone with no prior knowledge can gain some value",
			"Updates for efforts are delivered in an adaptive cadence that reflects priority and value to the team",
			"Effort updates use multiple channels that allow a company-wide awareness"
		],
		"examples": [
			"Considered all non-functional aspects of an assignment such as security, performance, ux and accessibility",
			"Tries out multiple solutions for implementation",
			"Trained colleagues on the domain subject matter",
			"Technical debt is accrued due to surprises and its long-term effects are reincorporated into the plan",
			"Mapped nuanced edge cases for a large effort",
			"Planned for the non-functional aspects of an epic",
			"Discussed and reasoned about multiple implementation options for a complicated issue",
			"Worked on multiple efforts and properly compartmentalised them for maximum efficiency"
		],
	}],
};

export default {
	"3": motivationTrack,
	"4": thoroughnessTrack
}
