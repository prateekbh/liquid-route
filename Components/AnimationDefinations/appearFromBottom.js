const slideLeftEntryAnimationStart = {
	transform: 'translateY(40%)',
	opacity: 0,
};

const slideLeftEntryAnimationEnd = {
	transform: 'translateY(0%)',
	opacity: 1,
};

const slideLeftExitAnimationStart = {
	opacity: 1,
};

const slideLeftExitAnimationEnd = {
	opacity: 0.8,
};

export default {
	getEntryAnimation: () => {
		return {
			animation: [slideLeftEntryAnimationStart, slideLeftEntryAnimationEnd],
		}
	},
	getExitAnimation: () => {
		return {
			animation: [slideLeftExitAnimationStart, slideLeftExitAnimationEnd],
		}
	}

};