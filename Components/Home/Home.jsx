import { h, Component } from 'preact';
import {Link} from 'preact-router';
export default class Home extends Component {
	render() {
		return (
			<div>
				<h1>Home</h1>
				<p>This is the Home component.</p>
				<Link href='/profile'>profile</Link>
			</div>
		);
	}
}
