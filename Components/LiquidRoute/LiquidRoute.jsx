import { h, Component } from 'preact';
import CSSTransitionGroup from 'preact-css-transition-group';
export default class LiquidRoute extends Component {
	render() {
		console.log(this.props.keys);
		return (
				<CSSTransitionGroup
					transitionName="example"
					transitionEnterTimeout={300}
					transitionLeaveTimeout={100}>
					<div key={this.props.keys} class='page'>
						{this.props.children}
					</div>
				</CSSTransitionGroup>
		);
	}
}
