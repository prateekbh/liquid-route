webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* unused harmony export subscribers */
/* unused harmony export getCurrentUrl */
/* unused harmony export route */
/* unused harmony export Router */
/* unused harmony export Route */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Link; });


var EMPTY$1 = {};

function assign(obj, props) {
	// eslint-disable-next-line guard-for-in
	for (var i in props) {
		obj[i] = props[i];
	}
	return obj;
}

function exec(url, route, opts) {
	if (opts === void 0) opts = EMPTY$1;

	var reg = /(?:\?([^#]*))?(#.*)?$/,
	    c = url.match(reg),
	    matches = {},
	    ret;
	if (c && c[1]) {
		var p = c[1].split('&');
		for (var i = 0; i < p.length; i++) {
			var r = p[i].split('=');
			matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
		}
	}
	url = segmentize(url.replace(reg, ''));
	route = segmentize(route || '');
	var max = Math.max(url.length, route.length);
	for (var i$1 = 0; i$1 < max; i$1++) {
		if (route[i$1] && route[i$1].charAt(0) === ':') {
			var param = route[i$1].replace(/(^\:|[+*?]+$)/g, ''),
			    flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
			    plus = ~flags.indexOf('+'),
			    star = ~flags.indexOf('*'),
			    val = url[i$1] || '';
			if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
				ret = false;
				break;
			}
			matches[param] = decodeURIComponent(val);
			if (plus || star) {
				matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
				break;
			}
		} else if (route[i$1] !== url[i$1]) {
			ret = false;
			break;
		}
	}
	if (opts.default !== true && ret === false) {
		return false;
	}
	return matches;
}

function pathRankSort(a, b) {
	var aAttr = a.attributes || EMPTY$1,
	    bAttr = b.attributes || EMPTY$1;
	if (aAttr.default) {
		return 1;
	}
	if (bAttr.default) {
		return -1;
	}
	var diff = rank(aAttr.path) - rank(bAttr.path);
	return diff || aAttr.path.length - bAttr.path.length;
}

function segmentize(url) {
	return strip(url).split('/');
}

function rank(url) {
	return (strip(url).match(/\/+/g) || '').length;
}

function strip(url) {
	return url.replace(/(^\/+|\/+$)/g, '');
}

var customHistory = null;

var ROUTERS = [];

var subscribers = [];

var EMPTY = {};

function isPreactElement(node) {
	return node.__preactattr_ != null || typeof Symbol !== 'undefined' && node[Symbol.for('preactattr')] != null;
}

function setUrl(url, type) {
	if (type === void 0) type = 'push';

	if (customHistory && customHistory[type]) {
		customHistory[type](url);
	} else if (typeof history !== 'undefined' && history[type + 'State']) {
		history[type + 'State'](null, null, url);
	}
}

function getCurrentUrl() {
	var url;
	if (customHistory && customHistory.location) {
		url = customHistory.location;
	} else if (customHistory && customHistory.getCurrentLocation) {
		url = customHistory.getCurrentLocation();
	} else {
		url = typeof location !== 'undefined' ? location : EMPTY;
	}
	return "" + (url.pathname || '') + (url.search || '');
}

function route(url, replace) {
	if (replace === void 0) replace = false;

	if (typeof url !== 'string' && url.url) {
		replace = url.replace;
		url = url.url;
	}

	// only push URL into history if we can handle it
	if (canRoute(url)) {
		setUrl(url, replace ? 'replace' : 'push');
	}

	return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function canRoute(url) {
	for (var i = ROUTERS.length; i--;) {
		if (ROUTERS[i].canRoute(url)) {
			return true;
		}
	}
	return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
	var didRoute = false;
	for (var i = 0; i < ROUTERS.length; i++) {
		if (ROUTERS[i].routeTo(url) === true) {
			didRoute = true;
		}
	}
	for (var i$1 = subscribers.length; i$1--;) {
		subscribers[i$1](url);
	}
	return didRoute;
}

function routeFromLink(node) {
	// only valid elements
	if (!node || !node.getAttribute) {
		return;
	}

	var href = node.getAttribute('href'),
	    target = node.getAttribute('target');

	// ignore links with targets and non-path URLs
	if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
		return;
	}

	// attempt to route, if no match simply cede control to browser
	return route(href);
}

function handleLinkClick(e) {
	if (e.button == 0) {
		routeFromLink(e.currentTarget || e.target || this);
		return prevent(e);
	}
}

function prevent(e) {
	if (e) {
		if (e.stopImmediatePropagation) {
			e.stopImmediatePropagation();
		}
		if (e.stopPropagation) {
			e.stopPropagation();
		}
		e.preventDefault();
	}
	return false;
}

function delegateLinkHandler(e) {
	// ignore events the browser takes care of already:
	if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
		return;
	}

	var t = e.target;
	do {
		if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href') && isPreactElement(t)) {
			if (t.hasAttribute('native')) {
				return;
			}
			// if link is handled by the router, prevent browser defaults
			if (routeFromLink(t)) {
				return prevent(e);
			}
		}
	} while (t = t.parentNode);
}

var eventListenersInitialized = false;

function initEventListeners() {
	if (eventListenersInitialized) {
		return;
	}

	if (typeof addEventListener === 'function') {
		if (!customHistory) {
			addEventListener('popstate', function () {
				return routeTo(getCurrentUrl());
			});
		}
		addEventListener('click', delegateLinkHandler);
	}
	eventListenersInitialized = true;
}

var Router = function (Component$$1) {
	function Router(props) {
		Component$$1.call(this, props);
		if (props.history) {
			customHistory = props.history;
		}

		this.state = {
			url: props.url || getCurrentUrl()
		};

		initEventListeners();
	}

	if (Component$$1) Router.__proto__ = Component$$1;
	Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
	Router.prototype.constructor = Router;

	Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
		if (props.static !== true) {
			return true;
		}
		return props.url !== this.props.url || props.onChange !== this.props.onChange;
	};

	/** Check if the given URL can be matched against any children */
	Router.prototype.canRoute = function canRoute(url) {
		return this.getMatchingChildren(this.props.children, url, false).length > 0;
	};

	/** Re-render children with a new URL to match against. */
	Router.prototype.routeTo = function routeTo(url) {
		this._didRoute = false;
		this.setState({ url: url });

		// if we're in the middle of an update, don't synchronously re-route.
		if (this.updating) {
			return this.canRoute(url);
		}

		this.forceUpdate();
		return this._didRoute;
	};

	Router.prototype.componentWillMount = function componentWillMount() {
		ROUTERS.push(this);
		this.updating = true;
	};

	Router.prototype.componentDidMount = function componentDidMount() {
		var this$1 = this;

		if (customHistory) {
			this.unlisten = customHistory.listen(function (location) {
				this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
			});
		}
		this.updating = false;
	};

	Router.prototype.componentWillUnmount = function componentWillUnmount() {
		if (typeof this.unlisten === 'function') {
			this.unlisten();
		}
		ROUTERS.splice(ROUTERS.indexOf(this), 1);
	};

	Router.prototype.componentWillUpdate = function componentWillUpdate() {
		this.updating = true;
	};

	Router.prototype.componentDidUpdate = function componentDidUpdate() {
		this.updating = false;
	};

	Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
		return children.slice().sort(pathRankSort).map(function (vnode) {
			var attrs = vnode.attributes || {},
			    path = attrs.path,
			    matches = exec(url, path, attrs);
			if (matches) {
				if (invoke !== false) {
					var newProps = { url: url, matches: matches };
					assign(newProps, matches);
					return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["cloneElement"])(vnode, newProps);
				}
				return vnode;
			}
			return false;
		}).filter(Boolean);
	};

	Router.prototype.render = function render(ref, ref$1) {
		var children = ref.children;
		var onChange = ref.onChange;
		var url = ref$1.url;

		var active = this.getMatchingChildren(children, url, true);

		var current = active[0] || null;
		this._didRoute = !!current;

		var previous = this.previousUrl;
		if (url !== previous) {
			this.previousUrl = url;
			if (typeof onChange === 'function') {
				onChange({
					router: this,
					url: url,
					previous: previous,
					active: active,
					current: current
				});
			}
		}

		return current;
	};

	return Router;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

var Link = function Link(props) {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('a', assign({ onClick: handleLinkClick }, props));
};

var Route = function Route(props) {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(props.component, props);
};

Router.subscribers = subscribers;
Router.getCurrentUrl = getCurrentUrl;
Router.route = route;
Router.Router = Router;
Router.Route = Route;
Router.Link = Link;

/* harmony default export */ __webpack_exports__["a"] = Router;
//# sourceMappingURL=preact-router.es.js.map

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Typography_style_css__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Typography_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Typography_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_Theme_style_css__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_Theme_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Theme_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__app_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5____ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_preact_async_route__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_preact_async_route___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_preact_async_route__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var App = function (_Component) {
	_inherits(App, _Component);

	function App() {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

		_this.state = {
			url: 'Home'
		};
		return _this;
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ style: 'position:relative' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_router__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_6_preact_async_route___default.a, { animator: __WEBPACK_IMPORTED_MODULE_5____["a" /* FadeAnimation */], path: '/', component: function component(url, cb) {
							__webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 2)).then(function (module) {
								cb(null, module.default);
							});
						} }),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_6_preact_async_route___default.a, { animator: __WEBPACK_IMPORTED_MODULE_5____["b" /* PopAnimation */], path: '/profile', component: function component(url, cb) {
							__webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 3)).then(function (module) {
								cb(null, module.default);
							});
						} })
				)
			);
		}
	}]);

	return App;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["render"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(App, null), document.querySelector('.app'));

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Components_LiquidRoute_LiquidRoute_jsx__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Components_AnimationDefinations_fade__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Components_AnimationDefinations_pop__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Components_AnimationDefinations_fade__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__Components_AnimationDefinations_pop__["a"]; });




/* unused harmony default export */ var _unused_webpack_default_export = __WEBPACK_IMPORTED_MODULE_0__Components_LiquidRoute_LiquidRoute_jsx__["a" /* default */];


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var faderAnimationStart = {
	opacity: 0
};

var faderAnimationEnd = {
	opacity: 1
};

/* harmony default export */ __webpack_exports__["a"] = {
	getEntryAnimation: function getEntryAnimation() {
		return {
			animation: [faderAnimationStart, faderAnimationEnd]
		};
	},
	getExitAnimation: function getExitAnimation() {
		return {
			animation: [faderAnimationEnd, faderAnimationStart]
		};
	}
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var poperAnimationStart = {
	transform: 'scale(0.5)',
	opacity: 0
};

var poperAnimationEnd = {
	transform: 'scale(1)',
	opacity: 1
};

/* harmony default export */ __webpack_exports__["a"] = {
	getEntryAnimation: function getEntryAnimation() {
		return {
			animation: [poperAnimationStart, poperAnimationEnd]
		};
	},
	getExitAnimation: function getExitAnimation() {
		return {
			animation: [poperAnimationEnd, poperAnimationStart]
		};
	}
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var defaultOpts = {
	duration: 300,
	fill: 'forwards',
	easing: 'ease-out'
};

var LiquidAnimator = function (_Component) {
	_inherits(LiquidAnimator, _Component);

	function LiquidAnimator() {
		_classCallCheck(this, LiquidAnimator);

		var _this = _possibleConstructorReturn(this, (LiquidAnimator.__proto__ || Object.getPrototypeOf(LiquidAnimator)).call(this));

		_this.animationStart = null;
		_this.animationEnd = null;
		return _this;
	}

	_createClass(LiquidAnimator, [{
		key: 'componentWillEnter',
		value: function componentWillEnter(cb) {
			this.props.onSetCurrentAnimation();
			if (!this.container.animate) {
				return cb();
			}
			var animation = this.props.getEntryAnimation();
			var animationOptions = Object.assign({}, defaultOpts, animation.options);
			this.container.animate(animation.animation, animationOptions).onfinish = function () {
				cb();
			};
		}
	}, {
		key: 'componentWillLeave',
		value: function componentWillLeave(cb) {
			var _this2 = this;

			if (!this.container.animate) {
				return cb();
			}
			var animation = this.props.getExitAnimation();
			var animationOptions = Object.assign({}, defaultOpts, animation.options);
			this.container.animate(animation.animation, animationOptions).onfinish = function () {
				var reversedAnimation = animation.animation.reverse();
				_this2.container.animate(reversedAnimation, { duration: 1, fill: 'forwards' });
				cb();
			};
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'lqd-container',
					ref: function ref(container) {
						_this3.container = container;
					} },
				this.props.children
			);
		}
	}]);

	return LiquidAnimator;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = LiquidAnimator;

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_transition_group__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LiquidAnimator_jsx__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_async_route__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_async_route___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_preact_async_route__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var currentAnimation = null;

var LiquidRoute = function (_Component) {
	_inherits(LiquidRoute, _Component);

	function LiquidRoute() {
		_classCallCheck(this, LiquidRoute);

		return _possibleConstructorReturn(this, (LiquidRoute.__proto__ || Object.getPrototypeOf(LiquidRoute)).call(this));
	}

	_createClass(LiquidRoute, [{
		key: 'getEntryAnimation',
		value: function getEntryAnimation() {
			return currentAnimation.getEntryAnimation();
		}
	}, {
		key: 'getExitAnimation',
		value: function getExitAnimation() {
			return currentAnimation.getExitAnimation();
		}
	}, {
		key: 'setCurrentAnimation',
		value: function setCurrentAnimation() {
			currentAnimation = this.props.animator;
		}
	}, {
		key: 'render',
		value: function render(props) {
			var _this2 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				__WEBPACK_IMPORTED_MODULE_1_preact_transition_group___default.a,
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_2__LiquidAnimator_jsx__["a" /* default */],
					_extends({
						getEntryAnimation: function getEntryAnimation() {
							return _this2.getEntryAnimation();
						},
						getExitAnimation: function getExitAnimation() {
							return _this2.getExitAnimation();
						},
						key: props.url,
						onSetCurrentAnimation: function onSetCurrentAnimation() {
							_this2.setCurrentAnimation();
						} }, props),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3_preact_async_route___default.a, props)
				)
			);
		}
	}]);

	return LiquidRoute;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = LiquidRoute;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(__webpack_require__(0)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.PreactTransitionGroup = factory(global.preact);
})(this, function (preact) {

	function assign(obj, props) {
		for (var i in props) {
			if (props.hasOwnProperty(i)) obj[i] = props[i];
		}return obj;
	}

	function getKey(vnode, fallback) {
		var key = vnode.attributes && vnode.attributes.key;
		return key === null || key === undefined ? fallback : key;
	}

	function linkRef(component, name) {
		var cache = component._ptgLinkedRefs || (component._ptgLinkedRefs = {});
		return cache[name] || (cache[name] = function (c) {
			component.refs[name] = c;
		});
	}

	function getChildMapping(children) {
		var out = {};
		for (var i = 0; i < children.length; i++) {
			if (children[i] != null) {
				var key = getKey(children[i], i.toString(36));
				out[key] = children[i];
			}
		}
		return out;
	}

	function mergeChildMappings(prev, next) {
		prev = prev || {};
		next = next || {};

		var getValueForKey = function getValueForKey(key) {
			return next.hasOwnProperty(key) ? next[key] : prev[key];
		};

		var nextKeysPending = {};

		var pendingKeys = [];
		for (var prevKey in prev) {
			if (next.hasOwnProperty(prevKey)) {
				if (pendingKeys.length) {
					nextKeysPending[prevKey] = pendingKeys;
					pendingKeys = [];
				}
			} else {
				pendingKeys.push(prevKey);
			}
		}

		var childMapping = {};
		for (var nextKey in next) {
			if (nextKeysPending.hasOwnProperty(nextKey)) {
				for (var i = 0; i < nextKeysPending[nextKey].length; i++) {
					var pendingNextKey = nextKeysPending[nextKey][i];
					childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
				}
			}
			childMapping[nextKey] = getValueForKey(nextKey);
		}

		for (var _i = 0; _i < pendingKeys.length; _i++) {
			childMapping[pendingKeys[_i]] = getValueForKey(pendingKeys[_i]);
		}

		return childMapping;
	}

	var classCallCheck = function classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	};

	var get = function get(object, property, receiver) {
		if (object === null) object = Function.prototype;
		var desc = Object.getOwnPropertyDescriptor(object, property);

		if (desc === undefined) {
			var parent = Object.getPrototypeOf(object);

			if (parent === null) {
				return undefined;
			} else {
				return get(parent, property, receiver);
			}
		} else if ("value" in desc) {
			return desc.value;
		} else {
			var getter = desc.get;

			if (getter === undefined) {
				return undefined;
			}

			return getter.call(receiver);
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

	var set = function set(object, property, value, receiver) {
		var desc = Object.getOwnPropertyDescriptor(object, property);

		if (desc === undefined) {
			var parent = Object.getPrototypeOf(object);

			if (parent !== null) {
				set(parent, property, value, receiver);
			}
		} else if ("value" in desc && desc.writable) {
			desc.value = value;
		} else {
			var setter = desc.set;

			if (setter !== undefined) {
				setter.call(receiver, value);
			}
		}

		return value;
	};

	var identity = function identity(i) {
		return i;
	};

	var TransitionGroup$1 = function (_Component) {
		inherits(TransitionGroup, _Component);

		function TransitionGroup() {
			var _temp, _this, _ret;

			classCallCheck(this, TransitionGroup);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.refs = {}, _this.state = {
				children: getChildMapping(_this.props.children || [])
			}, _this.performEnter = function (key) {
				_this.currentlyTransitioningKeys[key] = true;

				var component = _this.refs[key];

				if (component.componentWillEnter) {
					component.componentWillEnter(_this._handleDoneEntering.bind(_this, key));
				} else {
					_this._handleDoneEntering(key);
				}
			}, _this.performLeave = function (key) {
				_this.currentlyTransitioningKeys[key] = true;

				var component = _this.refs[key];
				if (component.componentWillLeave) {
					component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key));
				} else {
					_this._handleDoneLeaving(key);
				}
			}, _temp), possibleConstructorReturn(_this, _ret);
		}

		TransitionGroup.prototype.componentWillMount = function componentWillMount() {
			this.currentlyTransitioningKeys = {};
			this.keysToEnter = [];
			this.keysToLeave = [];
		};

		TransitionGroup.prototype.componentDidMount = function componentDidMount() {
			var initialChildMapping = this.state.children;
			for (var key in initialChildMapping) {
				if (initialChildMapping[key]) {
					this.performAppear(key);
				}
			}
		};

		TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
			var nextChildMapping = getChildMapping(nextProps.children || []);
			var prevChildMapping = this.state.children;

			this.setState({
				children: mergeChildMappings(prevChildMapping, nextChildMapping)
			});

			var key = void 0;

			for (key in nextChildMapping) {
				if (nextChildMapping.hasOwnProperty(key)) {
					var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
					if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
						this.keysToEnter.push(key);
					}
				}
			}for (key in prevChildMapping) {
				if (prevChildMapping.hasOwnProperty(key)) {
					var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
					if (prevChildMapping[key] && !hasNext && !this.currentlyTransitioningKeys[key]) {
						this.keysToLeave.push(key);
					}
				}
			}
		};

		TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
			var keysToEnter = this.keysToEnter;
			this.keysToEnter = [];
			keysToEnter.forEach(this.performEnter);

			var keysToLeave = this.keysToLeave;
			this.keysToLeave = [];
			keysToLeave.forEach(this.performLeave);
		};

		TransitionGroup.prototype.performAppear = function performAppear(key) {
			this.currentlyTransitioningKeys[key] = true;

			var component = this.refs[key];

			if (component.componentWillAppear) {
				component.componentWillAppear(this._handleDoneAppearing.bind(this, key));
			} else {
				this._handleDoneAppearing(key);
			}
		};

		TransitionGroup.prototype._handleDoneAppearing = function _handleDoneAppearing(key) {
			var component = this.refs[key];
			if (component.componentDidAppear) {
				component.componentDidAppear();
			}

			delete this.currentlyTransitioningKeys[key];

			var currentChildMapping = getChildMapping(this.props.children || []);

			if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
				this.performLeave(key);
			}
		};

		TransitionGroup.prototype._handleDoneEntering = function _handleDoneEntering(key) {
			var component = this.refs[key];
			if (component.componentDidEnter) {
				component.componentDidEnter();
			}

			delete this.currentlyTransitioningKeys[key];

			var currentChildMapping = getChildMapping(this.props.children || []);

			if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
				this.performLeave(key);
			}
		};

		TransitionGroup.prototype._handleDoneLeaving = function _handleDoneLeaving(key) {
			var component = this.refs[key];

			if (component.componentDidLeave) {
				component.componentDidLeave();
			}

			delete this.currentlyTransitioningKeys[key];

			var currentChildMapping = getChildMapping(this.props.children || []);

			if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
				this.performEnter(key);
			} else {
				var children = assign({}, this.state.children);
				delete children[key];
				this.setState({ children: children });
			}
		};

		TransitionGroup.prototype.render = function render(_ref, _ref2) {
			var childFactory = _ref.childFactory;
			var transitionLeave = _ref.transitionLeave;
			var transitionName = _ref.transitionName;
			var transitionAppear = _ref.transitionAppear;
			var transitionEnter = _ref.transitionEnter;
			var transitionLeaveTimeout = _ref.transitionLeaveTimeout;
			var transitionEnterTimeout = _ref.transitionEnterTimeout;
			var transitionAppearTimeout = _ref.transitionAppearTimeout;
			var component = _ref.component;
			var props = objectWithoutProperties(_ref, ['childFactory', 'transitionLeave', 'transitionName', 'transitionAppear', 'transitionEnter', 'transitionLeaveTimeout', 'transitionEnterTimeout', 'transitionAppearTimeout', 'component']);
			var children = _ref2.children;

			var childrenToRender = [];
			for (var key in children) {
				if (children.hasOwnProperty(key)) {
					var child = children[key];
					if (child) {
						var ref = linkRef(this, key),
						    el = preact.cloneElement(childFactory(child), { ref: ref, key: key });
						childrenToRender.push(el);
					}
				}
			}return preact.h(component, props, childrenToRender);
		};

		return TransitionGroup;
	}(preact.Component);
	TransitionGroup$1.defaultProps = {
		component: 'span',
		childFactory: identity
	};

	return TransitionGroup$1;
});
//# sourceMappingURL=preact-transition-group.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(__webpack_require__(0)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global['preact-async-route'] = factory(global.preact);
})(this, function (preact) {
	'use strict';

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
		}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var AsyncRoute = function (_Component) {
		_inherits(AsyncRoute, _Component);

		function AsyncRoute() {
			_classCallCheck(this, AsyncRoute);

			var _this = _possibleConstructorReturn(this, _Component.call(this));

			_this.state = {
				componentData: null
			};
			return _this;
		}

		AsyncRoute.prototype.loadComponent = function loadComponent() {
			var _this2 = this;

			var componentData = this.props.component(this.props.url, function (_ref) {
				var component = _ref.component;

				// Named param for making callback future proof
				if (component) {
					_this2.setState({
						componentData: component
					});
				}
			});

			// In case returned value was a promise
			if (componentData && componentData.then) {
				(function (url) {
					componentData.then(function (component) {
						if (url === _this2.props.url) {
							_this2.setState({
								componentData: component
							});
						}
					});
				})(this.props.url);
			}
		};

		AsyncRoute.prototype.componentDidMount = function componentDidMount() {
			this.loadComponent();
		};

		AsyncRoute.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
			var _this3 = this;

			if (this.props.url && this.props.url !== nextProps.url) {
				this.setState({
					componentData: null
				}, function () {
					_this3.loadComponent();
				});
			}
		};

		AsyncRoute.prototype.render = function render() {

			if (this.state.componentData) {
				return preact.h(this.state.componentData, this.props);
			} else if (this.props.loading) {
				var loadingComponent = this.props.loading();
				return loadingComponent;
			}
			return null;
		};

		return AsyncRoute;
	}(preact.Component);

	return AsyncRoute;
});
//# sourceMappingURL=index.js.map

/***/ })
],[9]);