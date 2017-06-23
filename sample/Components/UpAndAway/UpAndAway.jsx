import { h, Component } from 'preact';
import Page from '../Page.jsx';

export default class Fade extends Page {
	render(props) {
		return (
			<div className='page'style='background-color: SALMON'>
				<div>
					<div className="mdc-typography--display2">
						Liquid route
					</div>
				</div>
				<div>
					<div className="mdc-typography--title">
						<div>
							<img style="width:100%; padding: 16px;" src="http://cdn.pet360.com/pet360/Content/Images/CMS/Articles/Happy_Cat_Smiling.jpg" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
