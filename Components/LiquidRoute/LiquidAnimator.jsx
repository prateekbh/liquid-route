import { h, Component } from 'preact';
export default class LiquidAnimator extends Component {
	constructor() {
		super();
		this.animationStart = null;
		this.animationEnd = null;
	}
	componentWillEnter(cb){
		this.props.onSetCurrentAnimation();
		if(!this.container.animate) {
			return cb();
		}
		const animation = this.props.getEntryAnimation();
		this.container.animate(animation.animation, {
			duration: animation.duration || 300 ,
			fill: 'forwards',
			easing: animation.easing || 'ease-out',
		}).onfinish=()=>{
			cb();
		}
	}
	componentWillLeave(cb){
		if(!this.container.animate) {
			return cb();
		}
		const animation = this.props.getExitAnimation();
		this.container.animate(animation.animation, {
			duration: animation.duration || 300 ,
			easing: animation.easing || 'ease-out',
		}).onfinish=()=>{
			cb();
			this.container.animate(this.props.getExitAnimation().animation.reverse(), { duration: 1});
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
