import { h, Component, cloneElement } from 'preact';
import TransitionGroup from 'preact-transition-group';
import LiquidAnimator from './LiquidAnimator.jsx';
import {faderAnimationStart, faderAnimationEnd} from '../AnimationDefinations/fade';
import {poperAnimationStart, poperAnimationEnd} from '../AnimationDefinations/pop';

export default class LiquidRoute extends Component {
	constructor() {
		super();
	}
	makeAnimationGroup(props) {
		if (!props.animation) {
			return {
				enterAnimationStart: faderAnimationStart,
				enterAnimationEnd: faderAnimationEnd,
				leaveAnimationStart: faderAnimationEnd,
				leaveAnimationEnd: faderAnimationStart,
			};
		} else if (props.animation === Animations.Pop) {
			return {
				enterAnimationStart: poperAnimationStart,
				enterAnimationEnd: poperAnimationEnd,
				leaveAnimationStart: poperAnimationEnd,
				leaveAnimationEnd: poperAnimationStart,
			};
		}
	}
	render(props) {
		const routeAnimations = this.makeAnimationGroup(props);
		return (
				<TransitionGroup>
					<LiquidAnimator routeAnimations={routeAnimations} key={props.url}>
						{h(props.component, props)}
					</LiquidAnimator>
				</TransitionGroup>
		);
	}
}

const Animations = {
	Fade: 'Fade',
	Slide: 'Slide',
	Pop: 'Pop',
}

export {
	Animations
};