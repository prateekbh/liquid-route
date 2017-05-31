import { h, Component } from 'preact';
import LiquidRoute from '../LiquidRoute/LiquidRoute.jsx';

const popAnimationStart = {
	transform: 'scale(0.5)',
	opacity: 0,
};

const popAnimationEnd = {
	transform: 'scale(1)',
	opacity: 1,
};

export default class PopRoute extends LiquidRoute {
	constructor(){
		super();

		this.routeAnimations = {
			enterAnimationStart: popAnimationStart,
			enterAnimationEnd: popAnimationEnd,
			leaveAnimationStart: popAnimationEnd,
			leaveAnimationEnd: popAnimationStart,
		};
	}
}

