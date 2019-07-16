const slideRightEntryAnimationStart = {
	transform: 'translateX(-100%)',
	opacity: 0,
};

const slideRightEntryAnimationEnd = {
	transform: 'translateX(0%)',
	opacity: 1,
};

const slideRightExitAnimationStart = {
	transform: 'translateX(0%)',
	opacity: 1,
};

const slideRightExitAnimationEnd = {
	transform: 'translateX(100%)',
	opacity: 0,
};

export default {
	getEntryAnimation: () => {
		return {
			animation: [slideRightEntryAnimationStart, slideRightEntryAnimationEnd],
		}
	},
	getExitAnimation: () => {
		return {
			animation: [slideRightExitAnimationStart, slideRightExitAnimationEnd],
		}
	}

};