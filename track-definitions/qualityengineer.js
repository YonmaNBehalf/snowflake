import commonTracks from './shared';

//
// const qualityEngineerTracks = {
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
  ...commonTracks,
}
