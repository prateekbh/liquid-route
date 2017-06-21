import { h, Component } from 'preact';
import Page from '../Page.jsx';

export default class Pop extends Page {
	constructor(){
		super();
		this.state = {
			name: 'Pop',
			bgColor: 'DARKOLIVEGREEN'
		};
	}
}
