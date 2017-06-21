const slideLeftExitAnimationStart = {
	transform: 'scale(1) translateX(0%)',
};

const slideLeftExitAnimationPush = {
	transform: 'scale(0.5) translateX(0%)',
};

const slideLeftExitAnimationEnd = {
	transform: 'scale(0.5) translateX(-200%)',
};


const slideLeftExitAnimationPlacebo = {
	transform: 'scale(0.5) translateX(200%)',
};

const slideLeftEntryAnimationStart = {
	transform: 'scale(0.5) translateX(200%)',
	offset: 0.6,
};

const slideLeftEntryAnimationZoom = {
	transform: 'scale(0.5) translateX(0%)',
};

const slideLeftEntryAnimationEnd = {
	transform: 'scale(1) translateX(0%)',
};

export default {
	getEntryAnimation: () => {
		return {
			animation: [slideLeftExitAnimationPlacebo, slideLeftEntryAnimationStart, slideLeftEntryAnimationZoom, slideLeftEntryAnimationEnd],
			options:{
				duration: 1400
			}
		}
	},
	getExitAnimation: () => {
		return {
			animation: [slideLeftExitAnimationStart, slideLeftExitAnimationPush, slideLeftExitAnimationEnd],
			options:{
				duration: 900
			}
		}
	}

};