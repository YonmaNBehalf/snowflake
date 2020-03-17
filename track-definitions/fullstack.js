import commonTracks from './shared';

//
// const fullstackTracks = {
//   "1": frontendTrack,
//   "2": backendTrack,
//   "3": foundationsTrack,
//   "4": programmingTrack,
// }

const ownershipTrack = {
  "displayName": "Ownership",
  "category": "Accountability",
  "description": "Ownership goes hand-in-hand with Responsibility",
  "milestones": [{
    "summary": "",
    "signals": [
      "Assumes responsibility for own changesets",
      "Rarely joins in code reviews",
      "Does not establish or challenge coding conventions",
      "Requires external guidance to sort through own priorities"
    ]
  }, {
    "summary": "",
    "signals": [
      "Takes up responsibility for a small or limited domain",
      "Assists in code reviews for own domains",
      "Establishes coding conventions for own domain but rarely enforces them",
      "Responsible for a story's research, implementation and testing",
      "Knows enough about an epic's considerations to make soft choices",
      "Tells apart urgent assignments from day-to-day priorities and acts on them first",
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
      "Participates in others' assignments planning",
      "Knows about an epic's context to lead decision making process",
      "Uses a priorities ladder of assignments to make good choices about work plans",
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
      "Participates in others' assignments research and planning",
      "Makes strategic decisions based on an intimate awareness of an epic's considerations and business case",
      "Uses priorities to effectively allocate time and attention to assignments",
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
      "Unable to coordinate changes to avoid conflicts and merge issues",
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
      "Is able to research and optimize a legacy code application.",
      "Successully add or modify a major feature on an unfamiliar legacy application in two weeks",

    ],
  }, {
    "summary": "",
    "signals": [
      "Is capable of correctly abstracting and designing an OOP project.",
      "Can independently implement a complex application and an enterprise-ready infrastructure to support it",
      "Can defend technological choices and can write academic-level articles and theorems",
      "Can research, develop and introduce a new technology stack",
      "Has written numerous applications of multiple business domains and is knowledgable in technological considerations of each domain",
      "Capable of specifying technical requirements for security and performance concerns - which won't be needed because his code will already have been optimized and hardened",
      "Able to implement code, upgrade existing code and teach other developers so that applications in the department have a low cost of introducing future changes",
    ],
    "examples": [
      "Is able to research and optimize and improve a legacy code application.",
      "Successully add or modify a feature on an unfamiliar legacy application with no repercussions or unexpected results in two weeks.",
    ]
  }],
};

export default {
  ...commonTracks,
  "5": ownershipTrack,
  "7": codingTrack,
  "8": engineeringTrack
}
