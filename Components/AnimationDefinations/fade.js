const faderAnimationStart = {
	opacity: 0
};

const faderAnimationEnd = {
	opacity: 1
};


export default {
	getEntryAnimation: () => {
		return {
			animation: [faderAnimationStart, faderAnimationEnd],
			duration: 400
		};
	},
	getExitAnimation: () => {
		return {
			animation: [faderAnimationEnd, faderAnimationStart],
			duration: 400
		};
	}
};