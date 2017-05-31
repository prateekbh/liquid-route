import { h, Component } from 'preact';
export default class LiquidAnimator extends Component {
	constructor() {
		super();
		this.animationStart = null;
		this.animationEnd = null;
	}
	componentWillEnter(cb){
		this.props.onSetCurrentAnimation();
		const animationGroup = this.props.entryAnimations;
		if(!this.container.animate) {
			return cb();
		}
		this.container.animate([animationGroup.animationStart, animationGroup.animationEnd], {
			duration: 240,fill:'forwards', easing: 'ease-in'
		}).onfinish=()=>{
			cb();
		}
	}
	componentWillLeave(cb){
		const animationGroup = this.props.getExitAnimations();
		if(!this.container.animate) {
			return cb();
		}
		this.container.animate([animationGroup.animationStart, animationGroup.animationEnd], {
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
