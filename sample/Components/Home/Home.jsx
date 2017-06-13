import { h, Component } from 'preact';
import {Link} from 'preact-router';
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
	render(props) {
		return (
			<div className='page' key={this.url}>
					<h1 onClick={this.toggleBox.bind(this)}>Home</h1>
					<p>This is the Home component.</p>
					<Link href='/profile'>profile</Link>
			</div>
		);
	}
}
