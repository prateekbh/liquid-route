const entryAnimationStart = {
	transform: 'rotateY(180deg)',
	opacity: 0
};

const entryAnimationEnd = {
	transform: 'rotateY(0deg)',
	opacity: 1,
};


const exitAnimationStart = {
	transform: 'rotateY(0deg)',
	opacity: 1,
};

const exitAnimationEnd = {
	transform: 'rotateY(180deg)',
	opacity: 0,
};

export default {
	getEntryAnimation: () => {
		return {
			animation: [entryAnimationStart, entryAnimationEnd],
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