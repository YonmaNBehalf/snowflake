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
      "Explores initiatives to promote company activities through the owned domain capabilities",
      "Teaches others about domain activities ",
      "Enforces coding conventions in a reasonable ",
      "Responsible for a large Epic's research, planning, implementation, testing and release",
      "Participates in others' assignments research and planning",
      "Makes tactical decisions based on an awareness of an epic's considerations",
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
      "Acts as gatekeeper for a business domain",
      "Trains and inspires others that develop within owned domain to take good practices to other domains",
      "Explores initiatives to promote company activities through the owned domain such as new products and capabilities",
      "Teaches others about domain activities and shares detailed knowledge about the domain",
      "Enforces coding conventions in a reasonable and flexible manner and constantly refines them",
      "Responsible for a project's research, planning, implementation, testing and release",
      "Promotes others' research and planning abilities",
      "Makes strategic decisions based on an intimate awareness of an epic's considerations and business case",
      "Uses priorities to effectively allocate time and attention to assignments",
    ],
    "examples": [
      "Involved in an external change within the business domain (maybe not in the technical domain)",
      "Revamped a domain's set of conventions and standards. Refactored its code to fit the new set.",
      "Guide others in research and is involved as a knowledge focus in research that touches on this domain",
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
      "Merge foreign code with conflicts so that properly covered code does not break",
      "Knows basic IDE usage",
      "Leverages existing personal automation",
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
      "Keeps local coding conventions. Different standards can be discussed and reasoned about",
      "Merges and overcomes foreign code conflicts in a safe way without breaking others' features and efforts",
      "Knows IDE usage at a high level",
      "Leverages existing dev automation and also introduces new automation as needed",
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
      "Built dev automation from the ground up and packaged it some anyone can easily use it",

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
      "Independently implements simple single tier applications",
      "Understands basic quick start guides"
    ],
  }, {
    "summary": "",
    "signals": [
      "Study an existing system and become productive in a few days",
      "Independently implement a simple application and integrate it to an external service",
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
      "Solves non-functional application issues",
      "Reasons about existing code and legacy",
      "Technological choices are made through realization of needs and environment",
      "Written numerous applications of multiple business domains",
      "Code demonstrates awareness of security & performance concerns",
      "Implementations are future proofed"
    ],
    "examples": [
      "Successfully add or modify a minor feature on an unfamiliar application in reasonable time",
      "Implement code that has a low cost of introducing future changes, as those are currently understood",
      "Research and introduce a new technology or sub-system",
      "Profiled and solved a challenging performance issue",
      "Implemented a new feature in an unfamiliar domain within two weeks",
      "Independently implemented an n-tier application",
      "Reasoned and prepared for a performance issue in own code"
    ],
  }, {
    "summary": "",
    "signals": [
      "Implementation provides for abstraction and business domain considerations",
      "Technological choices are made through requirements and a consideration of costs, future maintenance and technological trade-offs",
      "Written numerous applications of multiple business domains and technical domains",
      "Implementation actively handles non-functional requirements such as security or performance",
      "Implementations are future proofed so that changes are easily introduced",
      "Epics do not generate any after-bugs"
    ],
    "examples": [
      "Research and introduce a new technology stack",
      "Completed a large effort without generating any bugs after release",
      "Defined clear implementation guidelines to mitigate a non-functional concern",
      "Is able to research and optimize a legacy code application.",
      "Successfully add or modify a major feature on an unfamiliar legacy application in two weeks",
      "Large epic delivered without any bugs created during Monitoring stage",
      "Hand over of a complicated feature went without a hitch"
    ],
  }, {
    "summary": "",
    "signals": [
      "Implementation is abstracted just right for a business domain which turns out to fit *another* business domain",
      "Technological choices are made through requirements, a consideration of trade-offs and an uncanny understanding of the future",
      "Written numerous applications of multiple industries",
      "Implementation provides dynamic controls for non-functional requirements such as security or performance",
      "Implementations are future proofed so that changes are easily introduced by anyone on the team",
      "Epics do not generate any after-bugs and actually solved a few outstanding issues in the existing system"
    ],
    "examples": [
      "Research and optimize and improve a legacy code application.",
      "New feature implementation delivered on requirements and actually provided on an unplanned requirement later on",
      "Application can shift its emphasis on security, performance or functionality with configuration changes or a simple set of access controls",
      "Done is really, actually, done",
      "Hand over of a complicated system was unnecessary - the other team didn't need any hand holding"
    ]
  }],
};

export default {
  ...commonTracks,
  "5": ownershipTrack,
  "7": codingTrack,
  "8": engineeringTrack
}
