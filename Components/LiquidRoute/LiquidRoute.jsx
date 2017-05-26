import { h, Component } from 'preact';
import TransitionGroup from 'preact-transition-group';
import LiquidContainer from './LiquidContainer.jsx';
export default class LiquidRoute extends Component {
	render() {
		return (
				<TransitionGroup>
					<LiquidContainer key={this.props.url}>
						{this.props.children}
					</LiquidContainer>
				</TransitionGroup>
		);
	}
}
