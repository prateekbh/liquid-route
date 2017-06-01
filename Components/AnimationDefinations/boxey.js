const boxeyAnimationStart = {
	opacity: 0,
	transform: 'rotateY(-10deg) translateX(100%)',
};

const boxeyAnimationEnd = {
	opacity: 1,
	transform: 'rotateY(0) translateX(0%)',
};


export default {
	getEntryAnimation: () => {
		return {
			animation: [boxeyAnimationStart, boxeyAnimationEnd],
			duration: 400
		};
	},
	getExitAnimation: () => {
		return {
			animation: [boxeyAnimationEnd, boxeyAnimationStart],
			duration: 400
		};
	}
};