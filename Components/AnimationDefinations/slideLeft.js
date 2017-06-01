const slideLeftEntryAnimationStart = {
	transform: 'translateX(100%)',
	opacity: 0,
};

const slideLeftEntryAnimationEnd = {
	transform: 'translateX(0%)',
	opacity: 1,
};

const slideLeftExitAnimationStart = {
	transform: 'translateX(0%)',
	opacity: 1,
};

const slideLeftExitAnimationEnd = {
	transform: 'translateX(-100%)',
	opacity: 0,
};

export default {
	getEntryAnimation: () => {
		return {
			animation: [slideLeftEntryAnimationStart, slideLeftEntryAnimationEnd],
			duration: 400
		}
	},
	getExitAnimation: () => {
		return {
			animation: [slideLeftExitAnimationStart, slideLeftExitAnimationEnd],
			duration: 400
		}
	}

};