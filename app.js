import {h, render, Component} from 'preact';
import Router from 'preact-router';
import 'preact-material-components/Typography/style.css';
import 'preact-material-components/Theme/style.css';
import './app.css';
import LiquidRoute from './Components/LiquidRoute/LiquidRoute.jsx'
import Home from './Components/Home/Home.jsx'
import Profile from './Components/Profile/Profile.jsx'


class App extends Component{
	constructor(){
		super();
		this.state = {
			url: 'Home'
		};
	}
	rendera() {
		return(
			<div>
				<button onClick={()=>{
					this.setState({
						url: 'Home'
					});
				}}>
					Home
				</button>
				<button onClick={()=>{
					this.setState({
						url: 'Profile'
					});
				}}>
					Profile
				</button>
				<div className="app-page">
					{this.state.url==='Home' && <LiquidRoute keys='home'><Home/></LiquidRoute>}
					{this.state.url==='Profile' && <LiquidRoute keys='profile'><Profile /></LiquidRoute>}
				</div>

			</div>
		);
	}
	render() {
		return(
			<Router>
				<LiquidRoute path="/">
					<Home/>
				</LiquidRoute>
				<LiquidRoute path="/profile">
					<Profile/>
				</LiquidRoute>
			</Router>
		);
	}
}

render(
	<App/>
	,document.querySelector('.app'));