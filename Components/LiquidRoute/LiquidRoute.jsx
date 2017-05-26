import { h, Component } from 'preact';
import TransitionGroup from 'preact-transition-group';
import LiquidContainer from './LiquidContainer.jsx';
export default class LiquidRoute extends Component {
	render() {
		console.log(this.props.keys);
		return (
				<TransitionGroup>
					<LiquidContainer key={this.props.keys}>
						{this.props.children}
					</LiquidContainer>
				</TransitionGroup>
		);
	}
}
