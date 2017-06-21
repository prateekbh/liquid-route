import { h, Component } from 'preact';
export default class Page extends Component {
	render(props) {
		return (
			<div className='page'style={'background-color: ' + this.state.bgColor}>
				<div className="mdc-typography--display2">
					I will {this.state.name}
				</div>
			</div>
		);
	}
}
