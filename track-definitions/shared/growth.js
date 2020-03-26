

const researchTrack = {
	"displayName": "Research and Analysis",
	"category": "Professional Growth",
	"description": "סוף מעשה במחשבה תחילה",
	"milestones": [{
		"summary": "",
		"signals": [
			"Research uses only basic concepts and general ideas",
			"Research scope is very small and does not extend to an entire effort",
			"Documents are short, basic, vague or lack sufficient context",
			"Chosen implementation plan is naive or completely ignores underlying assumptions",
			"Estimates are very rough generalizations or completely wrong"
		],
		"examples": [
			"Plans implementation for a story",
			"Research document only makes sense to the author",
			"The research document will make sense only in the next few minutes. Future us will not make any sense of it",
			"Plan only details a few vague code changes and fails to take into account an external dependency is missing"
		]
	}, {
		"summary": "",
		"signals": [
			"A new focused technology or narrow concept is studied and applied in a week",
			"Research products are detailed enough to provide a plan for a small, simple feature",
			"Implementation plan is understandable when provided in context",
			"T-shirt estimates are generally correct",
			"Planned execution sometimes generates unexpected technical debt that can be handled later",
			"Implementation plan addresses some hidden assumptions in advance",
			"Isolates risk into general or unclear definitions that still have blocking dependencies. The risk is vaguely defined"
		],
		"examples": [
			"Wrote a basic implementation plan for a small single layer epic",
			"Participated regularly in code reviews for peers",
			"Studied a technological topic for use or training",
			"Correctly estimate that a simple task is actually short to implement",
			"A seemingly short implementation actually requires we write a new service and triples the original estimate. Luckily we can postpone most of the work to cleanup",
			"Research correctly identified beforehand that a complicated persistence solution will be needed to meet the full requirement"
		],
	}, {
		"summary": "",
		"signals": [
			"Implementation uses newly acquired skills or concepts",
			"Research products are in-depth and detailed for the implementation of a large feature or a non-trivial change",
			"Correctly estimates the planned work for a large feature to within one week",
			"Implementation exposes hidden assumptions and attempts to work them out or challenge them",
			"Planned execution generates unexpected technical debt that can be generally be postponed",
			"Applies basic domain knowledge concepts to make reasonable research assumptions",
			"Isolates risk into clear parts of the effort. Some of these parts can be provided for. The risk is defined up to a point"
		],
		"examples": [
			"Master a new business domain in a few weeks",
			"Implemented a feature for the first time in a new technical domain",
			"Prepared the Model and implementation of a new Domain Service within a new Business domain",
			"Correctly estimated an epic's efforts",
			"Created a detailed implementation plan for a large epic",
			"Completed partial research goal based on domain assumptions"
		],
	}, {
		"summary": "",
		"signals": [
			"Implementation uses new skills, technology or abstract concepts",
			"Research a project made up of several epics and its integration points",
			"Implementation plan details are updated during the project and provide clear insight into changes and surprises",
			"Effort was correctly estimated beforehand and provided for surprises and changes",
			"Planned execution rarely generates unexpected technical debt",
			"Hidden assumptions are challenged or mitigated in such a way as to pave the road for simplified implementation",
			"Risk is isolated into clear work packages that can be worked around. The risk is defined comprehensively with additional mitigation"

		],
		"examples": [
			"Master a technical domain in a week",
			"Implementation plan is updated and kept correct for future reference",
			"Researched non-functional considerations of an epic that affected implementation decisions",
			"Epic implementation did not generate any technical debt",
		],
	}, {
		"summary": "",
		"signals": [
			"Research materials are detailed, correct, insightful and are useful as white papers for customers",
			"Implementation plan is simple, accounts for everything and includes contingencies for the eventual imperfections of the human condition",
			"Estimates are perfect to the minute and account for bathroom breaks and long lunches in cookie",
			"There are no hidden assumptions down the electric charge of an electron",
			"Risk? What is Risk?"

		],
	}],
};

export default {
	"9": researchTrack,
}
