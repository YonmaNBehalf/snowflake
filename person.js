import {FULLSTACK_DOMAIN} from "./constants";

const person = (): SnowflakeAppState => {
	return {
		domain: FULLSTACK_DOMAIN,
		name: 'Cersei Lannister',
		title: 'Intermediate Full Stack Developer',
		targetRole: 'Senior Full Stack Developer',
		milestoneByTrack: {
			'1': 0,//	"1": teamworkTrack,
			'2': 0,// 	"2": mentoringTrack,
			'3': 0,// "3": motivationTrack,
			'4': 0,// "4": thoroughnessTrack,
			'5': 0,// "5": ownershipTrack
			'6': 0,// "6": independenceTrack,
			'7': 0,// "7": codingTrack
			'8': 0,// "8": engineeringTrack,
			'9': 0,// "9": researchTrack,
			'10': 0,// "10": initiativeTrack,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0
		},
		momentsByTrack: {
			'1': [{'moment': ''}],//	"1": teamworkTrack,
			'2': [{'moment': ''}],// 	"2": mentoringTrack,
			'3': [{'moment': ''}],// "3": motivationTrack,
			'4': [{'moment': ''}],// "4": thoroughnessTrack,
			'5': [{'moment': ''}],// "5": ownershipTrack
			'6': [{'moment': ''}],// "6": independenceTrack,
			'7': [{'moment': ''}],// "7": codingTrack
			'8': [{'moment': ''}],// "8": engineeringTrack,
			'9': [{'moment': ''}],// "9": researchTrack,
			'10': [{'moment': ''}],// "10": initiativeTrack,
			'11': [{'moment': ''}],
			'12': [{'moment': ''}],
			'13': [{'moment': ''}],
			'14': [{'moment': ''}],
			'15': [{'moment': ''}],
			'16': [{'moment': ''}],
		},
		focusedTrackId: '1'
	}
}

export default person();
