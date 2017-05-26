import { h, Component } from 'preact';
export default class LiquidContainer extends Component {
	componentWillEnter(cb){
		if(!this.container.animate) {
			return cb();
		}

		this.container.animate([
			{
				transform: 'translateX(100%)',
				opacity: 0
			},
			{
				transform: 'translateX(0%)',
				opacity: 1
			}
			], {
			duration: 240,fill:'forwards', easing: 'ease-in'
		}).onfinish=()=>{
			cb();
		}
	}
	componentWillLeave(cb){
		if(!this.container.animate) {
			return cb();
		}

		this.container.animate([
				{
					transform: 'translateX(0%)',
					opacity: 1
				},
				{
					transform: 'translateX(-100%)',
					opacity: 0
				}
				], {
				duration: 240,fill:'forwards', easing: 'ease-out'
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
