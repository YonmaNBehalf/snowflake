import {FULLSTACK_DOMAIN} from "./constants";

const person = (): SnowflakeAppState => {
	return {
		domain: FULLSTACK_DOMAIN,
		name: 'Cersei Lannister',
		title: 'Intermediate Full Stack Developer',
		targetRole: 'Senior Full Stack Developer',
		milestoneByTrack: {
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
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