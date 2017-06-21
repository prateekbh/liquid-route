import { h, Component } from 'preact';
import Page from '../Page.jsx';

export default class Fade extends Page {
	constructor(){
		super();
		this.state = {
			name: 'Fade',
			bgColor: 'DARKORCHID'
		};
	}
}
