import { h, Component } from 'preact';
import LiquidRoute from '../LiquidRoute/LiquidRoute.jsx';

const faderAnimationStart = {
	opacity: 0,
};

const faderAnimationEnd = {
	opacity: 1,
};

export default class FaderRoute extends LiquidRoute {
	constructor(){
		super();

		this.routeAnimations = {
			enterAnimationStart: faderAnimationStart,
			enterAnimationEnd: faderAnimationEnd,
			leaveAnimationStart: faderAnimationEnd,
			leaveAnimationEnd: faderAnimationStart,
		};
	}
}

