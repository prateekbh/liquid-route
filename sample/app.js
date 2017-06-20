import {h, render, Component} from 'preact';
import Toolbar from 'preact-material-components/Toolbar';
import Drawer from 'preact-material-components/Drawer';
import List from 'preact-material-components/List';
import 'preact-material-components/Toolbar/style.css';
import 'preact-material-components/Typography/style.css';
import 'preact-material-components/Theme/style.css';
import 'preact-material-components/Drawer/style.css';
import 'preact-material-components/List/style.css';
import './app.css';
import Router, {route} from 'preact-router';
import LiquidRoute, {FadeAnimation, PopAnimation, Slideleft} from '../';
import Home from './Components/Home/Home.jsx';
import Profile from './Components/Profile/Profile.jsx';
import AsyncRoute from 'preact-async-route';
class App extends Component{
	constructor(){
		super();
		this.state = {
			url: 'Home'
		};
	}
	closeDrawer(){
		this.drawer.MDComponent.open = false;
	}
	render() {
		return(
			<div>
				<Drawer.TemporaryDrawer ref={drawer=>{this.drawer = drawer;}} >
					<Drawer.TemporaryDrawerHeader className="mdc-theme--primary-bg">
						Components
					</Drawer.TemporaryDrawerHeader>
					<Drawer.TemporaryDrawerContent>
							<Drawer.DrawerItem onClick={()=>{
									route('/');
									this.closeDrawer();
								}}>
									Home
							</Drawer.DrawerItem>
							<Drawer.DrawerItem onClick={()=>{
									route('/profile');
									this.closeDrawer();
								}}>
									Profile
							</Drawer.DrawerItem>
							<Drawer.DrawerItem onClick={()=>{
									route('/profile/me');
									this.closeDrawer();
								}}>
									Me
							</Drawer.DrawerItem>
					</Drawer.TemporaryDrawerContent>
				</Drawer.TemporaryDrawer>
				<Toolbar>
					<Toolbar.Row>
						<Toolbar.Section align-start={true}>
							<Toolbar.Icon href="#" onClick={(e)=>{
											e.preventDefault();
											this.drawer.MDComponent.open = true;
							}}>menu</Toolbar.Icon>
							<Toolbar.Title>
								Liquid routes demo
							</Toolbar.Title>
						</Toolbar.Section>
					</Toolbar.Row>
				</Toolbar>
				<Router>
					<LiquidRoute animator={FadeAnimation} path="/" component={(url, cb)=>{
						cb({
							component: Home,
						});
					}}/>
					<LiquidRoute animator={PopAnimation} path="/profile" component={(url, cb)=>{
						cb({
							component: Profile,
						});
					}}/>
					<LiquidRoute animator={Slideleft} path="/profile/:pid" component={(url, cb)=>{
						cb({
							component: Profile,
						});
					}}/>
				</Router>
			</div>
		);
	}
}

render(
	<App/>
	,document.querySelector('.app'));