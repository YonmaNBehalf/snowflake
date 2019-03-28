const teamworkTrack = {
	"displayName": "Teamwork",
	"category": "Collaboration",
	"description": "Teamwork measures a person's ability to work with others towards a greater common goal",
	"milestones": [
		{
			"summary": "A person unable to collaborate detracts from the team's achievements",
			"signals": [
				"Finds it hard to collaborate with others",
				"Can generally hand off assignments for others to continue",
				"Unaware of other people's assignments and efforts",
				"Does not share knowledge and expertise",
			],
		}, {
			"summary": "Teamwork starts with communication",
			"signals": [
				"Able to generally collaborate on an assignment by splitting tasks and later reintegrating",
				"Capable of pair programming with few, specific people or only from a specific position",
				"Creates basic professional relationships with others around him",
				"Can generally explain collaborators' work and assignments",
				"Shares knowledge and expertise with others through guild activities",
			],
			"examples": [
				"An owned Epic has stories for consumption",
				"Pair Program on an issue with a domain expert",
				"Participates in knowledge sharing",
			],
		}, {
			"summary": "A collaborator is able to become an integral part of the organisation they are part of",
			"signals": [
				"Able to actively collaborate on an assignment by contract or other synchronized mechanism",
				"Capable of pair programming with anyone for a short time",
				"Prioritizes team's concerns and goals over more interesting (though relevant) objectives",
				"Builds meaningful professional relationships with peers and supervisors",
				"Able to describe in detail bordering assignments that will need integration to own code",
				"Shares knowledge and expertise proactively with peers and other teams"
			],
			"examples": [
				"Stories can be used by peers as a clear reference to collaboration",
				"Effectively brainstorm a great solution to a problem with colleagues",
				"Able to broach personal issues with peers and resolve them",
				"Initiates knowledge transfers with remote peers and colleagues",
				"Grants feedback to peers"
			],
		}, {
			"summary": "A great teamplayer is able to act as a force multiplier for those around him, promoting the team's efforts so that the whole is greater than the sum of its parts",
			"signals": [
				"Able to actively collaborate on an assignment by working with others and galvanizing the team to greater productivity",
				"Capable of pair programming with anyone for extended period of time, producing noticeably greater quality work",
				"Able to extract value and promote the team's greater goals from assignments and personal efforts",
				"Forges strong professional and personal relationships with peers and supervisors",
				"Knows and understands implementation intimate details of other team members' work",
				"Shares knowledge and expertise proactively and initiates a continuous dialog with peers and other teams",
			],
			"examples": [
				"Personal hour invested into tools that will improve the team's day-to-day",
				"Actively works with peers to promote them professionally and learn from the experience",
				"Shares the burden of urgent assignments with the assignee in unusual circumstances",
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
		}
	]
};

const mentoringTrack = {
	"displayName": "Mentoring",
	"category": "Collaboration",
	"description": "Teaching others is a way of making your next assignments easier for yourself",
	"milestones": [
		{
			"summary": "An excellent programmer is not necessarily an excellent teacher",
			"signals": [
				"Incapable or unwilling of teaching others",
				"Able to write an informative email",
				"Does not provide peers and superiors with feedback"
			],
		}, {
			"summary": "In learning you will teach, and in teaching you will learn",
			"signals": [
				"Able to deliver basic instructions and guidance to a coworker",
				"Capable of summarizing a topic for knowledge sharing",
				"Able to independently guide a new colleague through his first days at Behalf and answer basic process and procedure questions",
				"Feedback to peers and superiors is provided upon request"
			],
			"examples": [
				"Granted basic feedback to a peer that asked specific questions",
				"Prepared and delivered a basic presentation about a technical topic",
			],
		}, {
			"summary": "",
			"signals": [
				"Able to instruct coworkers in technological topics on the fly",
				"Capable of going into details on an intimate and well known topic in knowledge sharing",
				"Able to instruct a group of people on an intimate technological topic using a prepared & rehearsed presentation",
				"Able to independently guide a new colleague through his first month at Behalf and answer most questions",
				"Provides feeback to peers and superiors willingly"
			],
			"examples": [
			],
		}, {
			"summary": "A great teamplayer is able to act as a force multiplier for those around him, promoting the team's efforts so that the whole is greater than the sum of its parts",
			"signals": [
				"Able to instruct coworkers in technological & theoretical topics on the fly to minute detail",
				"Able to create a basic lesson plan for teaching others",
				"Capable of going into details on a random topic in knowledge sharing without specific preparation",
				"Able to instruct a group of people using on any prepared topic",
				"Able to independently guide a new colleague through his first quarter at Behalf and boost him quickly to productivity",
				"Actively seeks to provide feeback to peers and superiors"
			],
			"examples": [
			],
		}, {
			"summary": "",
			"signals": [
				"Able to instruct coworkers in technological & theoretical topics on the fly to minute detail",
				"Capable of planning a complete training program for other employees",
				"Able to create a detailed lesson plan for others to teach others",
				"Capable of going into details on a random topic in knowledge sharing without specific preparation",
				"Able to instruct a group of people using on any topic on the fly",
				"Able to independently guide an entire team of new recruits through their first quarter at Behalf and boost them noticeably more quickly to productivity",
				"Eagerly teaches peers and superiors and provides insights into behavior and actions"
			],
			"examples": [
				"",
				"",
				"",
			],
		}
	]
};

export default {
	"1": teamworkTrack,
	"2": mentoringTrack,
}