const entryAnimationStart = {
	transform: 'scale(0.8)',
	opacity: 0,
};


const entryAnimationPlacebo2 = {
	transform: 'scale(0.8)',
	opacity: 0.,
	offset: 0.8
};

const entryAnimationEnd = {
	transform: 'scale(1)',
	opacity: 1,
};


const exitAnimationStart = {
	transform: 'scale(1)',
	opacity: 1,
};

const exitAnimationEnd = {
	transform: 'scale(2)',
	opacity: 0.7,
};

export default {
	getEntryAnimation: () => {
		return {
			animation: [entryAnimationStart, entryAnimationPlacebo2, entryAnimationEnd],
			options: {
				duration: 700,
			}
		}
	},
	getExitAnimation: () => {
		return {
			animation: [exitAnimationStart, exitAnimationEnd],
			options: {
				duration: 700,
			}
		}
	}

};