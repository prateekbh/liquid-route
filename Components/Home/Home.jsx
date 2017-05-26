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
			<div className='page'>
					<h1 onClick={this.toggleBox.bind(this)}>Home</h1>
					<p>This is the Home component.</p>
					<Link href='/profile'>profile</Link>
			</div>
		);
	}
}
