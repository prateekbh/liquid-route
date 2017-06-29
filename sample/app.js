import { h, render, Component } from 'preact';
import Tabs from 'preact-material-components/Tabs';
import 'preact-material-components/Tabs/style.css';
import 'preact-material-components/Typography/style.css';
import 'preact-material-components/Theme/style.css';
import './app.css';
import Router, { route } from 'preact-router';
import LiquidRoute, {
  FadeAnimation,
  PopAnimation,
  SlideLeft,
  PushAndSlide,
  AppearFromBottomAnimation,
  AppearFromRightAnimation
} from '../';
import Fade from './Components/Fade/Fade.jsx';
import Pop from './Components/Pop/Pop.jsx';
import Slide from './Components/Slide/Slide.jsx';
import PushRoute from './Components/PushAndSlide/PushAndSlide.jsx';
import AppearFromRightPage from './Components/AppearFromRight/AppearFromRight.jsx';
import AppearFromBottomPage from './Components/AppearFromBottom/AppearFromBottom.jsx';
import AsyncRoute from 'preact-async-route';
import '../style.css';
class App extends Component {
  constructor() {
    super();
  }
  closeDrawer() {
    this.drawer.MDComponent.open = false;
  }
  render() {
    return (
      <div>
        <Router>
          <LiquidRoute animator={FadeAnimation} path="/" component={Fade} />
          <LiquidRoute animator={PopAnimation} path="/pop" component={Pop} />
          <LiquidRoute animator={SlideLeft} path="/slide" component={Slide} />
          <LiquidRoute
            animator={PushAndSlide}
            path="/pushaway"
            component={PushRoute}
          />
          <LiquidRoute
            animator={AppearFromRightAnimation}
            path="/appearright"
            component={AppearFromRightPage}
          />
          <LiquidRoute
            animator={AppearFromBottomAnimation}
            path="/appearbottom"
            component={AppearFromBottomPage}
          />
        </Router>
        <Tabs className="demo-tabs" indicator-accent={true}>
          <Tabs.Tab
            onClick={() => {
              route('/');
            }}
          >
            Fade
          </Tabs.Tab>
          <Tabs.Tab
            onClick={() => {
              route('/pop');
            }}
          >
            Pop
          </Tabs.Tab>
          <Tabs.Tab
            onClick={() => {
              route('/slide');
            }}
          >
            SlideLeft
          </Tabs.Tab>
          <Tabs.Tab
            onClick={() => {
              route('/pushaway');
            }}
          >
            Push Side
          </Tabs.Tab>
          <Tabs.Tab
            onClick={() => {
              route('/appearright');
            }}
          >
            SlideFromRight
          </Tabs.Tab>
          <Tabs.Tab
            onClick={() => {
              route('/appearbottom');
            }}
          >
            SlideFromBottom
          </Tabs.Tab>
        </Tabs>
      </div>
    );
  }
}

render(<App />, document.querySelector('.app'));
