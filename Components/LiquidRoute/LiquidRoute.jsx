import { h, Component } from 'preact';
import TransitionGroup from 'preact-transition-group';
import LiquidAnimator from './LiquidAnimator.jsx';
export default class LiquidRoute extends Component {
	render() {
		return (
				<TransitionGroup>
					<LiquidAnimator animation={this.animName} key={this.props.url}>
						{this.props.children}
					</LiquidAnimator>
				</TransitionGroup>
		);
	}
}
