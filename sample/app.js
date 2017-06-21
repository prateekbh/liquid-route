import {h, render, Component} from 'preact';
import Tabs from 'preact-material-components/Tabs'
import 'preact-material-components/Tabs/style.css';
import 'preact-material-components/Typography/style.css';
import 'preact-material-components/Theme/style.css';
import './app.css';
import Router, {route} from 'preact-router';
import LiquidRoute, {FadeAnimation, PopAnimation, SlideLeft} from '../';
import Fade from './Components/Fade/Fade.jsx';
import Pop from './Components/Pop/Pop.jsx';
import AsyncRoute from 'preact-async-route';
import '../style.css';
class App extends Component{
	constructor(){
		super();
	}
	closeDrawer(){
		this.drawer.MDComponent.open = false;
	}
	render() {
		return(
			<div>
				<Router>
					<LiquidRoute animator={FadeAnimation} path="/" component={(url, cb)=>{
						cb({
							component: Fade,
						});
					}}/>
					<LiquidRoute animator={PopAnimation} path="/pop" component={(url, cb)=>{
						cb({
							component: Pop,
						});
					}}/>
					<LiquidRoute animator={SlideLeft} path="/slide" component={(url, cb)=>{
						cb({
							component: Pop,
						});
					}}/>
				</Router>
				<Tabs className='demo-tabs' indicator-accent={true}>
          <Tabs.Tab onClick={()=>{
						route('/');
					}}>
						Fade
					</Tabs.Tab>
          <Tabs.Tab onClick={()=>{
						route('/pop');
					}}>
						Pop
					</Tabs.Tab>
          <Tabs.Tab onClick={()=>{
						route('/slide');
					}}>
						SlideLeft
					</Tabs.Tab>
					<Tabs.Tab onClick={()=>{
						route('/up');
					}}>
						Gone Up
					</Tabs.Tab>
					<Tabs.Tab onClick={()=>{
						route('/push');
					}}>
						Push and Swipe
					</Tabs.Tab>
        </Tabs>
			</div>
		);
	}
}

render(
	<App/>
	,document.querySelector('.app'));