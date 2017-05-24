import { h, Component } from 'preact';
import {Link} from 'preact-router';
import Box from '../Box.jsx';
import CSSTransitionGroup from 'preact-css-transition-group';
import './Home.css';
export default class Home extends Component {
	constructor(){
		super();
		this.state = {
			showBox:false
		};
	}
	toggleBox(){
		this.setState({
			showBox: !this.state.showBox
		});
	}
	render() {
		return (
			<div>
				<div>
					<h1 onClick={this.toggleBox.bind(this)}>Home</h1>
					<p>This is the Home component.</p>
					<Link href='/profile'>profile</Link>
				</div>
				<div>
					 <CSSTransitionGroup
							transitionName="example"
							transitionEnterTimeout={500}
							transitionLeaveTimeout={300}>
					   {this.state.showBox && <Box key='a'/>}
					 </CSSTransitionGroup>
				</div>
			</div>
		);
	}
}
