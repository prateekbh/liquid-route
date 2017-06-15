import { h, Component } from 'preact';
import {Link} from 'preact-router';
export default class Profile extends Component {
	render(props) {
		return (
			<div className='page profile' key={this.url}>
				<h1>Profile</h1>
				<p>This is the Profile component.</p>
				<Link href='/profile/someone'>profile</Link>
			</div>
		);
	}
}
