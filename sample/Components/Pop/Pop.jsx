import { h, Component } from 'preact';
import Page from '../Page.jsx';

export default class Pop extends Page {
	render(props) {
		return (
			<div className='page' style='background-color: DARKOLIVEGREEN;'>
				<div className="mdc-typography--display2">
					Pop
				</div>
				<div className="mid-conatiner">
					<img className='mid' src="http://samherbert.net/svg-loaders/svg-loaders/audio.svg"/>
				</div>
			</div>
		);
	}
}
