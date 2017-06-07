import { h, Component } from 'preact';

export default class Box extends Component {
	componentWillEnter (callback) {
		console.log('will enter');
		callback();
	}
	componentWillLeave (callback) {
		console.log('will Leave');
		callback();
	}
	render() {
		return (<div key='a' className='box'/>);
	}
}
