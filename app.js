import {h, render} from 'preact';
import Router from 'preact-router';
import 'preact-material-components/Typography/style.css';
import 'preact-material-components/Theme/style.css';
import './app.css';
import Home from './Components/Home/Home.jsx'
import Profile from './Components/Profile/Profile.jsx'
render(
	<Router>
		<Home path="/" />
		<Profile path="/profile" />
	</Router>
	,document.querySelector('.app'));