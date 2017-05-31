import { h, Component } from 'preact';
export default class LiquidAnimator extends Component {
	constructor() {
		super();
		this.animationStart = null;
		this.animationEnd = null;
	}
	componentWillEnter(cb){
		const animationGroup = this.props.routeAnimations;
		if(!this.container.animate) {
			return cb();
		}
		console.log(animationGroup.enterAnimationStart);
		this.container.animate([animationGroup.enterAnimationStart, animationGroup.enterAnimationEnd], {
			duration: 240,fill:'forwards', easing: 'ease-in'
		}).onfinish=()=>{
			cb();
		}
	}
	componentWillLeave(cb){
		const animationGroup = this.props.routeAnimations;
		if(!this.container.animate) {
			return cb();
		}
		this.container.animate([animationGroup.leaveAnimationStart, animationGroup.leaveAnimationEnd], {
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
