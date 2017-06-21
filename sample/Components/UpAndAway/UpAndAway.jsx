import { h, Component } from 'preact';
import Page from '../Page.jsx';

export default class UpAndAway extends Page {
	constructor(){
		super();
		this.state = {
			name: 'UpAndAway',
			bgColor: 'PURPLE'
		};
	}
}
