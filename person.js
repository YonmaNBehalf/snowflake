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
		focusedTrackId: '1'
	}
}

export default person();