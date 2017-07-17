import { h, Component } from 'preact';

const defaultOpts = {
  duration: 300,
  fill: 'forwards',
  easing: 'ease-out'
};

export default class LiquidAnimator extends Component {
  constructor() {
    super();
  }
  componentWillEnter(cb) {
    this.props.onSetCurrentAnimation && this.props.onSetCurrentAnimation();
    const animation = this.props.getEntryAnimation();
    if (!this.container.animate || !animation) {
      return cb();
    }
    const animationOptions = Object.assign({}, defaultOpts, animation.options);
    this.container.animate(
      animation.animation,
      animationOptions
    ).onfinish = () => {
      cb();
    };
  }
  componentWillLeave(cb) {
    const animation = this.props.getExitAnimation();
    if (!this.container.animate || !animation) {
      return cb();
    }
    const animationOptions = Object.assign({}, defaultOpts, animation.options);
    this.container.animate(
      animation.animation,
      animationOptions
    ).onfinish = () => {
      cb();
    };
  }
  render() {
    return (
      <div className="liquid-container">
        <div
          className="liquid-pageholder"
          ref={container => {
            this.container = container;
          }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
