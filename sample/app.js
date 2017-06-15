import {h, render, Component} from 'preact';
import Router from 'preact-router';
import 'preact-material-components/Typography/style.css';
import 'preact-material-components/Theme/style.css';
import './app.css';
import LiquidRoute, {FadeAnimation, PopAnimation} from '../';
import AsyncRoute from 'preact-async-route';
class App extends Component{
	constructor(){
		super();
		this.state = {
			url: 'Home'
		};
	}
	render() {
		return(
			<div style="position:relative">
				<Router>
					<LiquidRoute animator={FadeAnimation} path="/" component={(url, cb)=>{
						return System.import('./Components/Home/Home.jsx').then(module => module.default);
					}}/>
					<LiquidRoute animator={PopAnimation} path="/profile" component={(url, cb)=>{
						return System.import('./Components/Profile/Profile.jsx').then(module => module.default);
					}}/>
				</Router>
			</div>
		);
	}
}

render(
	<App/>
	,document.querySelector('.app'));