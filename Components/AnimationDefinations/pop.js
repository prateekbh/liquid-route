const poperAnimationStart = {
	transform: 'scale(0.5)',
	opacity: 0,
};

const poperAnimationEnd = {
	transform: 'scale(1)',
	opacity: 1,
};

export default {
	getEntryAnimation: () => {
		return {
			animation: [poperAnimationStart, poperAnimationEnd],
			duration: 400
		}
	},
	getExitAnimation: () => {
		return {
			animation: [poperAnimationEnd, poperAnimationStart],
			duration: 400
		}
	},
};