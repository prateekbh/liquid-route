const slideLeftEntryAnimationStart = {
	transform: 'translateX(40%)',
	opacity: 0,
};

const slideLeftEntryAnimationEnd = {
	transform: 'translateX(0%)',
	opacity: 1,
};

const slideLeftExitAnimationStart = {
	opacity: 1,
};

const slideLeftExitAnimationEnd = {
	opacity: 0,
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