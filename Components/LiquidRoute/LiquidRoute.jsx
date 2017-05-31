import { h, Component, cloneElement } from 'preact';
import TransitionGroup from 'preact-transition-group';
import LiquidAnimator from './LiquidAnimator.jsx';
import {faderAnimationStart, faderAnimationEnd} from '../AnimationDefinations/fade';
import {poperAnimationStart, poperAnimationEnd} from '../AnimationDefinations/pop';
import * as slideLeftAnimations from '../AnimationDefinations/slideLeft';

const Animations = {
	Fade: 'Fade',
	SlideLeft: 'SlideLeft',
	Pop: 'Pop',
	None: 'None',
}

let currentAnimation = Animations.None;

export default class LiquidRoute extends Component {
	constructor() {
		super();
	}
	makeEntryAnimationGroup(props) {
		if (props.animation === Animations.Fade) {
			return {
				animationStart: faderAnimationStart,
				animationEnd: faderAnimationEnd
			};
		} else if (props.animation === Animations.Pop) {
			return {
				animationStart: poperAnimationStart,
				animationEnd: poperAnimationEnd
			};
		} else if (props.animation === Animations.SlideLeft) {
			return {
				animationStart: slideLeftAnimations.slideLeftEntryAnimationStart,
				animationEnd: slideLeftAnimations.slideLeftEntryAnimationEnd
			};
		}
	}
	getExitAnimationGroup(props) {
		if (currentAnimation === Animations.Fade) {
			return {
				animationStart: faderAnimationEnd,
				animationEnd: faderAnimationStart,
			};
		} else if (currentAnimation === Animations.Pop) {
			return {
				animationStart: poperAnimationEnd,
				animationEnd: poperAnimationStart,
			};
		} else if (currentAnimation === Animations.SlideLeft) {
			return {
				animationStart: slideLeftAnimations.slideLeftExitAnimationStart,
				animationEnd: slideLeftAnimations.slideLeftExitAnimationEnd
			};
		}
	}
	setCurrentAnimation() {
		currentAnimation = this.props.animation;
	}
	render(props) {
		const entryAnimations = this.makeEntryAnimationGroup(props);
		return (
				<TransitionGroup>
					<LiquidAnimator
						entryAnimations={entryAnimations}
						getExitAnimations={()=>{return this.getExitAnimationGroup()}}
						key={props.url}
						onSetCurrentAnimation={()=>{this.setCurrentAnimation()}}>
						{h(props.component, props)}
					</LiquidAnimator>
				</TransitionGroup>
		);
	}
}

export {
	Animations
};