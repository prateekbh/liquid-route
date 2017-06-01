const scaleDownFromRightEntryAnimationStart = {
	transform: 'translateX(100%)',
	opacity: 0,
};

const scaleDownFromRightEntryAnimationEnd = {
	transform: 'translateX(0%)',
	opacity: 1,
};

const scaleDownFromRightExitAnimationStart = {
	transform: 'scale(1)',
	opacity: 1,
};

const scaleDownFromRightExitAnimationEnd = {
	transform: 'scale(0.5)',
	opacity: 0,
};

export default {
	getEntryAnimation: () => {
		return {
			animation: [scaleDownFromRightEntryAnimationStart, scaleDownFromRightEntryAnimationEnd],
			duration: 500,
		}
	},
	getExitAnimation: () => {
		return {
			animation: [scaleDownFromRightExitAnimationStart, scaleDownFromRightExitAnimationEnd],
			duration: 700,
		}
	}

};