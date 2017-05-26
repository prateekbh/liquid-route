import { h, Component } from 'preact';
export default class LiquidContainer extends Component {
	componentWillEnter(cb){
		var anim = this.container.animate([
				{
					transform: 'translateX(100%)'
				},
				{
					transform: 'translateX(0%)'
				}
				], {
				duration: 300,fill:'forwards'
		});
		anim.onfinish=()=>{
			cb();
		}
	}
	componentWillLeave(cb){
		var anim = this.container.animate([
				{
					transform: 'translateX(0%)'
				},
				{
					transform: 'translateX(-100%)'
				}
				], {
				duration: 300,fill:'forwards'
		});
		anim.onfinish=()=>{
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
