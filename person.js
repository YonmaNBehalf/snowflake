import {FULLSTACK_DOMAIN} from "./constants";

const person = (): SnowflakeAppState => {
	return {
		domain: FULLSTACK_DOMAIN,
		name: 'Cersei Lannister',
		title: 'Intermediate Full Stack Developer',
		targetRole: 'Senior Full Stack Developer',
		milestoneByTrack: {
			'1': 1,
			'2': 2,
			'3': 3,
			'4': 2,
			'5': 4,
			'6': 1,
			'7': 1,
			'8': 4,
			'9': 3,
			'10': 2,
			'11': 0,
			'12': 4,
			'13': 2,
			'14': 2,
			'15': 3,
			'16': 0
		},
		momentsByTrack: {
			'1': [{'moment': ''}],
			'2': [{'moment': ''}],
			'3': [{'moment': ''}],
			'4': [{'moment': ''}],
			'5': [{'moment': ''}],
			'6': [{'moment': ''}],
			'7': [{'moment': ''}],
			'8': [{'moment': ''}],
			'9': [{'moment': ''}],
			'10': [{'moment': ''}],
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