

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
			"Chosen implementation plan is naive or completely ignores underlying assumptions"
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
			"Implementation plan addresses some hidden assumptions in advance",
			"Isolates risk into general or unclear definitions that still have blocking dependencies. The risk is vaguely defined"
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
			"Implementation exposes hidden assumptions and attempts to work them out or challenge them",
			"Planned execution generates unexpected technical debt that can be generally be postponed",
			"Isolates risk into clear parts of the effort. Some of these parts can be provided for. The risk is defined up to a point"

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
			"Hidden assumptions are challenged or mitigated in such a way as to pave the road for simplified implementation",
			"Risk is isolated into clear work packages that can be worked around. The risk is defined comprehensively with additional mitigations"

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
			"Estimates are perfect to the minute and account for bathroom breaks and long lunches in cookie",
			"There are no hidden assumptions down the electric charge of an electron",
			"Risk? What is Risk?"

		],
	}],
};

export default {
	"9": researchTrack,
}
