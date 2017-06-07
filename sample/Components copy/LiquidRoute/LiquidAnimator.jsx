import { h, Component } from 'preact';

const defaultOpts = {
	duration: 300 ,
	fill: 'forwards',
	easing: 'ease-out',
};

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
		const animationOptions = Object.assign({},defaultOpts, animation.options);
		this.container.animate(animation.animation, animationOptions).onfinish = () => {
			cb();
		}
	}
	componentWillLeave(cb){
		if(!this.container.animate) {
			return cb();
		}
		const animation = this.props.getExitAnimation();
		const animationOptions = Object.assign({},defaultOpts, animation.options);
		this.container.animate(animation.animation, animationOptions).onfinish = () => {
			const reversedAnimation = animation.animation.reverse();
			this.container.animate(reversedAnimation, {duration: 1, fill: 'forwards'});
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
