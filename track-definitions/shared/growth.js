const engineeringTrack = {
  "displayName": "Engineering",
  "category": "Professional Growth",
  "description": "Engineering is the ability to apply the minimum amount of force to the weakest point of the problem to create a sustainable solution",
  "milestones": [{
      "summary": "",
      "signals": [
	      "Can independently implement simple single tier applications",
	      "Can understand basic quick start guides"
      ],
  }, {
      "summary": "",
      "signals": [
	      "Able to study an existing system and become productive in reasonable time",
	      "Can independently implement a simple application and integrate it to an external service",
	      "Can carry a basic technical discussion or understand basic technological articles",
	      "Has written a few applications in at least one business domain",
	      "Aware of security or performance concerns"
      ],
      "examples": [
	      "Became productive in an unfamiliar legacy application in two weeks",
	      "Studied, Integrated a 3rd party application and configured it for use",
	      "Spotted an obvious security concern in own code",
      ],
  }, {
      "summary": "",
      "signals": [
	      "Is able to solve a complex optimization issue",
	      "Successully add or modify a minor feature on an unfamiliar application in reasonable time",
	      "Can defend technological choices and understands sub-academic articles",
	      "Can research and introduce a new technology or sub-system",
	      "Has written numerous applications of multiple business domains",
	      "Aware of security & performance concerns in applications",
	      "Able to implement code that has a low cost of introducing future changes"
      ],
      "examples": [
	      "Profiled and solved a challenging performance issue",
	      "Implemented a new feature in an unfamiliar domain within two weeks",
	      "Independently implemented an n-tier application",
	      "Reasoned and prepared for a performance issue in own code"
      ],
  }, {
      "summary": "",
      "signals": [
	      "Is able to research and optimize a legacy code application.",
	      "Successully add or modify a major feature on an unfamiliar legacy application in two weeks",
	      "Is capable of correctly abstracting and designing an OOP project.",
	      "Can independently implement a complex application and basic infrastructure to support it",
	      "Can defend technological choices using complexity analysis and contrast comparison",
	      "Can research and introduce a new technology stack",
	      "Has written numerous applications of multiple business domains and is knowledgable in technological considerations of each domain",
	      "Capable of specifying technical requirements for security and performance concerns",
		  "Able to implement code and upgrade existing code so that it has a low cost of introducing future changes",
		  "Epics do not generate any after-bugs"
      ],
      "examples": [
	      "Completed a large effort without generating any bugs after release",
	      "Defined clear implementation guidelines to mitigate a non-functional concern",
      ],
  }, {
      "summary": "",
      "signals": [
	      "Is able to research and optimize and improve a legacy code application.",
	      "Successully add or modify a feature on an unfamiliar legacy application with no repercussions or unexpected results in two weeks.",
	      "Is capable of correctly abstracting and designing an OOP project.",
	      "Can independently implement a complex application and an enterprise-ready infrastructure to support it",
	      "Can defend technological choices and can write academic-level articles and theorems",
	      "Can research, develop and introduce a new technology stack",
	      "Has written numerous applications of multiple business domains and is knowledgable in technological considerations of each domain",
	      "Capable of specifying technical requirements for security and performance concerns - which won't be needed because his code will already have been optimized and hardened",
	      "Able to implement code, upgrade existing code and teach other developers so that applications in the department have a low cost of introducing future changes"
      ],
  }],
};

const researchTrack = {
	"displayName": "Research and Analysis",
	"category": "Professional Growth",
	"description": "סוף מעשה במחשבה תחילה",
	"milestones": [{
		"summary": "",
		"signals": [
			"Able to research basic concepts and simple technologies in a few days",
			"Capable of planning implementation for a story",
			"Able to write basic documents",
			"Code reviews usually focus on trivial details or rarely raises any concerns",
		],
	}, {
		"summary": "",
		"signals": [
			"Can study a new technology or concept in a week with clearly predefined criterias",
			"Able to create an implementation plan for a simple 3-story epic with a few integration points",
			"Can create a general plan that is understandable at the moment of presentation",
			"Can write a quickstart document for others to use",
			"Can correctly estimate a single aspect of personal work",
			"Planned execution sometimes generates unexpected technical debt that can be handled later",
			"Code reviews raise legitimate basic concerns"
		],
		"examples": [
			"Wrote a basic implementation plan for an epic",
			"Participated regularly in code reviews for peers",
			"Studied a technological topic for use or training",
		],
	}, {
		"summary": "",
		"signals": [
			"Can study a new technology or concept in a few days with a generally defined objective",
			"Able to study and master a new business domain in a few weeks",
			"Can plan own research goals and criteria, given a clear technical objective",
			"Able to create an implementation plan for a complex 8-story epic with some integration points",
			"Can create a general plan that will be relevant and updated during the project",
			"Can write a detailed instructions document for others to use",
			"Can correctly estimate all aspects of an assignment of personal work or some aspects for others",
			"Planned execution generates unexpected technical debt that can be generally be postponed",
			"Code reviews are in depth and concerns are raised for standards and cleanliness."
		],
		"examples": [
			"Researched and mastered a new business domain's workflows in a few days",
			"Correctly estimated an epic's efforts",
			"Created a detailed implementation plan for a large epic",
		],
	}, {
		"summary": "",
		"signals": [
			"Can study a new technology, concept and become productive within a day or two",
			"Able to study and master a new business domain in a few days",
			"Can plan own research goals and criteria, given a clear business objectives",
			"Able to create an implementation plan for a set of epics with many integration points",
			"Can create a general plan that will be relevant and updated during the project, providing clear insight into the project's planning process",
			"Can write a detailed instructions document for others to use",
			"Can correctly estimate all aspects of an assignment or to guide others in this process",
			"Planned execution rarely generates unexpected technical debt",
			"Code reviews are detailed and concerns are raised for standards and edge cases."
		],
		"examples": [
			"Implementation plan is updated and kept correct for future reference",
			"Researched non-functional considerations of an epic that affected implementation decisions",
			"Epic implementation did not generate any technical debt",
		],
	}, {
		"summary": "",
		"signals": [
			"Research materials are detailed, correct, insightful and are useful as white papers for customers",
			"Implementation plan is simple, accounts for everything and includes contingencies for the eventual imperfections of the human condition",
			"Code review comments demonstrate deep insight into the code base, its developers and their state of mind at the time",
			"Estimates are perfect to the minute and account for bathroom breaks and long lunches in cookie"
		],
	}],
};

export default {
	"8": engineeringTrack,
	"9": researchTrack,
}