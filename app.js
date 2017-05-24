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
	render() {
		return(
			<div>
				<span onClick={()=>{
					this.setState({
						url: 'Home'
					});
				}}>
					Home
				</span>
				<span onClick={()=>{
					this.setState({
						url: 'Profile'
					});
				}}>
					Profile
				</span>
				<div className="app-page">
					{this.state.url==='Home' && <LiquidRoute keys='home'><Home/></LiquidRoute>}
					{this.state.url==='Profile' && <LiquidRoute keys='profile'><Profile /></LiquidRoute>}
				</div>

			</div>
		);
	}
}

render(
	<App/>
	,document.querySelector('.app'));