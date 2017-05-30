import { h, Component } from 'preact';
import {faderAnimationStart, faderAnimationEnd} from '../AnimationDefinations/fader';
import {popAnimationStart, popAnimationEnd} from '../AnimationDefinations/pop';

export default class LiquidAnimator extends Component {
	constructor() {
		super();
		this.animationStart = null;
		this.animationEnd = null;
	}
	componentWillEnter(cb){
		if(!this.container.animate) {
			return cb();
		}

		this.container.animate([popAnimationStart, popAnimationEnd], {
			duration: 240,fill:'forwards', easing: 'ease-in'
		}).onfinish=()=>{
			cb();
		}
	}
	componentWillLeave(cb){
		if(!this.container.animate) {
			return cb();
		}

		this.container.animate([popAnimationEnd, popAnimationStart], {
			duration: 240,fill:'forwards', easing: 'ease-in'
		}).onfinish=()=>{
			cb();
		}
	}
	render() {
		return (
				<div className='lqd-container'
					ref={container=>{
						this.container = container;
					}}>
					{this.props.children}
				</div>
		);
	}
}
