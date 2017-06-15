webpackJsonp([0],{

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_css_transition_group__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_preact_css_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Home_css__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Home_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Home = function (_Component) {
	_inherits(Home, _Component);

	function Home() {
		_classCallCheck(this, Home);

		var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

		_this.state = {
			showBox: false
		};
		return _this;
	}

	_createClass(Home, [{
		key: 'toggleBox',
		value: function toggleBox() {
			this.setState({
				showBox: !this.state.showBox
			});
		}
	}, {
		key: 'render',
		value: function render(props) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'page', key: this.url },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'h1',
					{ onClick: this.toggleBox.bind(this) },
					'Home'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'p',
					null,
					'This is the Home component.'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_router__["b" /* Link */],
					{ href: '/profile' },
					'profile'
				)
			);
		}
	}]);

	return Home;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = Home;

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(__webpack_require__(0)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.PreactCSSTransitionGroup = factory(global.preact);
})(this, function (preact) {
	'use strict';

	function getKey(vnode) {
		return vnode.attributes && vnode.attributes.key;
	}

	function getComponentBase(component) {
		return component.base;
	}

	function onlyChild(children) {
		return children && children[0];
	}

	function filterNullChildren(children) {
		return children && children.filter(function (i) {
			return i !== null;
		});
	}

	function find(arr, iter) {
		for (var i = arr.length; i--;) {
			if (iter(arr[i])) return true;
		}
		return false;
	}

	function inChildrenByKey(children, key) {
		return find(children, function (c) {
			return getKey(c) === key;
		});
	}

	function inChildren(children, child) {
		return inChildrenByKey(children, getKey(child));
	}

	function isShownInChildrenByKey(children, key, showProp) {
		return find(children, function (c) {
			return getKey(c) === key && c.props[showProp];
		});
	}

	function isShownInChildren(children, child, showProp) {
		return isShownInChildrenByKey(children, getKey(child), showProp);
	}

	function mergeChildMappings(prev, next) {
		var ret = [];

		var nextChildrenPending = {},
		    pendingChildren = [];
		prev.forEach(function (c) {
			var key = getKey(c);
			if (inChildrenByKey(next, key)) {
				if (pendingChildren.length) {
					nextChildrenPending[key] = pendingChildren;
					pendingChildren = [];
				}
			} else {
				pendingChildren.push(c);
			}
		});

		next.forEach(function (c) {
			var key = getKey(c);
			if (nextChildrenPending.hasOwnProperty(key)) {
				ret = ret.concat(nextChildrenPending[key]);
			}
			ret.push(c);
		});

		return ret.concat(pendingChildren);
	}

	var SPACE = ' ';
	var RE_CLASS = /[\n\t\r]+/g;

	var norm = function norm(elemClass) {
		return (SPACE + elemClass + SPACE).replace(RE_CLASS, SPACE);
	};

	function addClass(elem, className) {
		if (elem.classList) {
			var _elem$classList;

			(_elem$classList = elem.classList).add.apply(_elem$classList, className.split(' '));
		} else {
			elem.className += ' ' + className;
		}
	}

	function removeClass(elem, needle) {
		needle = needle.trim();
		if (elem.classList) {
			var _elem$classList2;

			(_elem$classList2 = elem.classList).remove.apply(_elem$classList2, needle.split(' '));
		} else {
			var elemClass = elem.className.trim();
			var className = norm(elemClass);
			needle = SPACE + needle + SPACE;
			while (className.indexOf(needle) >= 0) {
				className = className.replace(needle, SPACE);
			}
			elem.className = className.trim();
		}
	}

	var EVENT_NAME_MAP = {
		transitionend: {
			transition: 'transitionend',
			WebkitTransition: 'webkitTransitionEnd',
			MozTransition: 'mozTransitionEnd',
			OTransition: 'oTransitionEnd',
			msTransition: 'MSTransitionEnd'
		},

		animationend: {
			animation: 'animationend',
			WebkitAnimation: 'webkitAnimationEnd',
			MozAnimation: 'mozAnimationEnd',
			OAnimation: 'oAnimationEnd',
			msAnimation: 'MSAnimationEnd'
		}
	};

	var endEvents = [];

	function detectEvents() {
		var testEl = document.createElement('div'),
		    style = testEl.style;

		if (!('AnimationEvent' in window)) {
			delete EVENT_NAME_MAP.animationend.animation;
		}

		if (!('TransitionEvent' in window)) {
			delete EVENT_NAME_MAP.transitionend.transition;
		}

		for (var baseEventName in EVENT_NAME_MAP) {
			var baseEvents = EVENT_NAME_MAP[baseEventName];
			for (var styleName in baseEvents) {
				if (styleName in style) {
					endEvents.push(baseEvents[styleName]);
					break;
				}
			}
		}
	}

	if (typeof window !== 'undefined') {
		detectEvents();
	}

	function addEndEventListener(node, eventListener) {
		if (!endEvents.length) {
			return window.setTimeout(eventListener, 0);
		}
		endEvents.forEach(function (endEvent) {
			node.addEventListener(endEvent, eventListener, false);
		});
	}

	function removeEndEventListener(node, eventListener) {
		if (!endEvents.length) return;
		endEvents.forEach(function (endEvent) {
			node.removeEventListener(endEvent, eventListener, false);
		});
	}

	var classCallCheck = function classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	};

	var inherits = function inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	var objectWithoutProperties = function objectWithoutProperties(obj, keys) {
		var target = {};

		for (var i in obj) {
			if (keys.indexOf(i) >= 0) continue;
			if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
			target[i] = obj[i];
		}

		return target;
	};

	var possibleConstructorReturn = function possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	};

	var TICK = 17;

	var CSSTransitionGroupChild = function (_Component) {
		inherits(CSSTransitionGroupChild, _Component);

		function CSSTransitionGroupChild() {
			var _temp, _this, _ret;

			classCallCheck(this, CSSTransitionGroupChild);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.flushClassNameQueue = function () {
				if (getComponentBase(_this)) {
					addClass(getComponentBase(_this), _this.classNameQueue.join(' '));
				}
				_this.classNameQueue.length = 0;
				_this.timeout = null;
			}, _temp), possibleConstructorReturn(_this, _ret);
		}

		CSSTransitionGroupChild.prototype.transition = function transition(animationType, finishCallback) {
			var _this2 = this;

			var node = getComponentBase(this),
			    className = this.props.name[animationType] || this.props.name + '-' + animationType,
			    activeClassName = this.props.name[animationType + 'Active'] || className + '-active';

			if (this.endListener) {
				this.endListener();
			}

			this.endListener = function (e) {
				if (e && e.target !== node) return;

				removeClass(node, className);
				removeClass(node, activeClassName);

				removeEndEventListener(node, _this2.endListener);
				_this2.endListener = null;

				if (finishCallback) {
					finishCallback();
				}
			};

			addEndEventListener(node, this.endListener);

			addClass(node, className);

			this.queueClass(activeClassName);
		};

		CSSTransitionGroupChild.prototype.queueClass = function queueClass(className) {
			this.classNameQueue.push(className);

			if (!this.timeout) {
				this.timeout = setTimeout(this.flushClassNameQueue, TICK);
			}
		};

		CSSTransitionGroupChild.prototype.stop = function stop() {
			if (this.timeout) {
				clearTimeout(this.timeout);
				this.classNameQueue.length = 0;
				this.timeout = null;
			}
			if (this.endListener) {
				this.endListener();
			}
		};

		CSSTransitionGroupChild.prototype.componentWillMount = function componentWillMount() {
			this.classNameQueue = [];
		};

		CSSTransitionGroupChild.prototype.componentWillUnmount = function componentWillUnmount() {
			if (this.timeout) {
				clearTimeout(this.timeout);
			}
		};

		CSSTransitionGroupChild.prototype.componentWillEnter = function componentWillEnter(done) {
			if (this.props.enter) {
				this.transition('enter', done);
			} else {
				done();
			}
		};

		CSSTransitionGroupChild.prototype.componentWillLeave = function componentWillLeave(done) {
			if (this.props.leave) {
				this.transition('leave', done);
			} else {
				done();
			}
		};

		CSSTransitionGroupChild.prototype.render = function render() {
			return onlyChild(this.props.children);
		};

		return CSSTransitionGroupChild;
	}(preact.Component);

	var CSSTransitionGroup = function (_Component) {
		inherits(CSSTransitionGroup, _Component);

		function CSSTransitionGroup(props) {
			classCallCheck(this, CSSTransitionGroup);

			var _this = possibleConstructorReturn(this, _Component.call(this));

			_this.renderChild = function (child) {
				var _this$props = _this.props;
				var transitionName = _this$props.transitionName;
				var transitionEnter = _this$props.transitionEnter;
				var transitionLeave = _this$props.transitionLeave;
				var key = getKey(child);
				return preact.h(CSSTransitionGroupChild, {
					key: key,
					ref: function ref(c) {
						if (!(_this.refs[key] = c)) child = null;
					},
					name: transitionName,
					enter: transitionEnter,
					leave: transitionLeave }, child);
			};

			_this.refs = {};
			_this.state = {
				children: (props.children || []).slice()
			};
			return _this;
		}

		CSSTransitionGroup.prototype.shouldComponentUpdate = function shouldComponentUpdate(_, _ref) {
			var children = _ref.children;

			return children !== this.state.children;
		};

		CSSTransitionGroup.prototype.componentWillMount = function componentWillMount() {
			this.currentlyTransitioningKeys = {};
			this.keysToEnter = [];
			this.keysToLeave = [];
		};

		CSSTransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref2) {
			var _this2 = this;

			var children = _ref2.children;
			var exclusive = _ref2.exclusive;
			var showProp = _ref2.showProp;

			var nextChildMapping = filterNullChildren(children || []).slice();

			var prevChildMapping = filterNullChildren(exclusive ? this.props.children : this.state.children);

			var newChildren = mergeChildMappings(prevChildMapping, nextChildMapping);

			if (showProp) {
				newChildren = newChildren.map(function (c) {
					if (!c.props[showProp] && isShownInChildren(prevChildMapping, c, showProp)) {
						var _cloneElement;

						c = preact.cloneElement(c, (_cloneElement = {}, _cloneElement[showProp] = true, _cloneElement));
					}
					return c;
				});
			}

			if (exclusive) {
				newChildren.forEach(function (c) {
					return _this2.stop(getKey(c));
				});
			}

			this.setState({ children: newChildren });
			this.forceUpdate();

			nextChildMapping.forEach(function (c) {
				var key = c.key;
				var hasPrev = prevChildMapping && inChildren(prevChildMapping, c);
				if (showProp) {
					if (hasPrev) {
						var showInPrev = isShownInChildren(prevChildMapping, c, showProp),
						    showInNow = c.props[showProp];
						if (!showInPrev && showInNow && !_this2.currentlyTransitioningKeys[key]) {
							_this2.keysToEnter.push(key);
						}
					}
				} else if (!hasPrev && !_this2.currentlyTransitioningKeys[key]) {
					_this2.keysToEnter.push(key);
				}
			});

			prevChildMapping.forEach(function (c) {
				var key = c.key;
				var hasNext = nextChildMapping && inChildren(nextChildMapping, c);
				if (showProp) {
					if (hasNext) {
						var showInNext = isShownInChildren(nextChildMapping, c, showProp);
						var showInNow = c.props[showProp];
						if (!showInNext && showInNow && !_this2.currentlyTransitioningKeys[key]) {
							_this2.keysToLeave.push(key);
						}
					}
				} else if (!hasNext && !_this2.currentlyTransitioningKeys[key]) {
					_this2.keysToLeave.push(key);
				}
			});
		};

		CSSTransitionGroup.prototype.performEnter = function performEnter(key) {
			var _this3 = this;

			this.currentlyTransitioningKeys[key] = true;
			var component = this.refs[key];
			if (component.componentWillEnter) {
				component.componentWillEnter(function () {
					return _this3._handleDoneEntering(key);
				});
			} else {
				this._handleDoneEntering(key);
			}
		};

		CSSTransitionGroup.prototype._handleDoneEntering = function _handleDoneEntering(key) {
			delete this.currentlyTransitioningKeys[key];
			var currentChildMapping = filterNullChildren(this.props.children),
			    showProp = this.props.showProp;
			if (!currentChildMapping || !showProp && !inChildrenByKey(currentChildMapping, key) || showProp && !isShownInChildrenByKey(currentChildMapping, key, showProp)) {
				this.performLeave(key);
			} else {
				this.setState({ children: currentChildMapping });
			}
		};

		CSSTransitionGroup.prototype.stop = function stop(key) {
			delete this.currentlyTransitioningKeys[key];
			var component = this.refs[key];
			if (component) component.stop();
		};

		CSSTransitionGroup.prototype.performLeave = function performLeave(key) {
			var _this4 = this;

			this.currentlyTransitioningKeys[key] = true;
			var component = this.refs[key];
			if (component && component.componentWillLeave) {
				component.componentWillLeave(function () {
					return _this4._handleDoneLeaving(key);
				});
			} else {
				this._handleDoneLeaving(key);
			}
		};

		CSSTransitionGroup.prototype._handleDoneLeaving = function _handleDoneLeaving(key) {
			delete this.currentlyTransitioningKeys[key];
			var showProp = this.props.showProp,
			    currentChildMapping = filterNullChildren(this.props.children);
			if (showProp && currentChildMapping && isShownInChildrenByKey(currentChildMapping, key, showProp)) {
				this.performEnter(key);
			} else if (!showProp && currentChildMapping && inChildrenByKey(currentChildMapping, key)) {
				this.performEnter(key);
			} else {
				this.setState({ children: currentChildMapping });
			}
		};

		CSSTransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
			var _this5 = this;

			var keysToEnter = this.keysToEnter;
			var keysToLeave = this.keysToLeave;

			this.keysToEnter = [];
			keysToEnter.forEach(function (k) {
				return _this5.performEnter(k);
			});
			this.keysToLeave = [];
			keysToLeave.forEach(function (k) {
				return _this5.performLeave(k);
			});
		};

		CSSTransitionGroup.prototype.render = function render(_ref3, _ref4) {
			var Component = _ref3.component;
			var transitionName = _ref3.transitionName;
			var transitionEnter = _ref3.transitionEnter;
			var transitionLeave = _ref3.transitionLeave;
			var c = _ref3.children;
			var props = objectWithoutProperties(_ref3, ['component', 'transitionName', 'transitionEnter', 'transitionLeave', 'children']);
			var children = _ref4.children;

			return preact.h(Component, props, filterNullChildren(children).map(this.renderChild));
		};

		return CSSTransitionGroup;
	}(preact.Component);
	CSSTransitionGroup.defaultProps = {
		component: 'span',
		transitionEnter: true,
		transitionLeave: true
	};

	return CSSTransitionGroup;
});
//# sourceMappingURL=preact-css-transition-group.js.map

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(undefined);
// imports


// module
exports.push([module.i, ".page-home{\n\ttext-align: center;\n\ttransform: translateZ(0);\n\twill-change: transform, opacity;\n}", ""]);

// exports


/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(18)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./Home.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./Home.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});