import {h, render, Component} from 'preact';
import Router from 'preact-router';
import 'preact-material-components/Typography/style.css';
import 'preact-material-components/Theme/style.css';
import './app.css';
import LiquidRoute from './Components/LiquidRoute/LiquidRoute.jsx'
import Home from './Components/Home/Home.jsx'
import Profile from './Components/Profile/Profile.jsx'
import Fader from './Components/AnimationDefinations/fade';
import Poper from './Components/AnimationDefinations/pop';
import SlideLeft from './Components/AnimationDefinations/slideLeft';
import ScaleDownFromRight from './Components/AnimationDefinations/scaleDownFromRight';
import Boxey from './Components/AnimationDefinations/boxey';
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
					<LiquidRoute animator={Fader} path="/" component={Home}/>
					<LiquidRoute animator={ScaleDownFromRight} path="/profile" component={Profile}/>
				</Router>
			</div>
		);
	}
}

render(
	<App/>
	,document.querySelector('.app'));