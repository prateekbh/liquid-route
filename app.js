import {h, render, Component} from 'preact';
import Router from 'preact-router';
import 'preact-material-components/Typography/style.css';
import 'preact-material-components/Theme/style.css';
import './app.css';
import LiquidRoute, {Animations} from './Components/LiquidRoute/LiquidRoute.jsx'
import Home from './Components/Home/Home.jsx'
import Profile from './Components/Profile/Profile.jsx'

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
					<LiquidRoute path="/" component={Home}/>
					<LiquidRoute animation={Animations.Pop} path="/profile" component={Profile}/>
				</Router>
			</div>
		);
	}
}

render(
	<App/>
	,document.querySelector('.app'));