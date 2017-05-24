webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Box_jsx__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_css_transition_group__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_preact_css_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Home_css__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Home_css__);
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
		value: function render() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					null,
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
						__WEBPACK_IMPORTED_MODULE_1_preact_router__["a" /* Link */],
						{ href: '/profile' },
						'profile'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_3_preact_css_transition_group___default.a,
						{
							transitionName: 'example',
							transitionEnterTimeout: 500,
							transitionLeaveTimeout: 300 },
						this.state.showBox && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__Box_jsx__["a" /* default */], { key: 'a' })
					)
				)
			);
		}
	}]);

	return Home;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Profile = function (_Component) {
	_inherits(Profile, _Component);

	function Profile() {
		_classCallCheck(this, Profile);

		return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
	}

	_createClass(Profile, [{
		key: 'render',
		value: function render() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'h1',
					null,
					'Profile'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'p',
					null,
					'This is the Profile component.'
				)
			);
		}
	}]);

	return Profile;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Profile);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export subscribers */
/* unused harmony export getCurrentUrl */
/* unused harmony export route */
/* unused harmony export Router */
/* unused harmony export Route */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Link; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);


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

/* unused harmony default export */ var _unused_webpack_default_export = (Router);
//# sourceMappingURL=preact-router.es.js.map

/***/ }),
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Typography_style_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Typography_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Typography_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_Theme_style_css__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_Theme_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Theme_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_css__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__app_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_LiquidRoute_LiquidRoute_jsx__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_Home_Home_jsx__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_Profile_Profile_jsx__ = __webpack_require__(2);
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
			var _this2 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'span',
					{ onClick: function onClick() {
							_this2.setState({
								url: 'Home'
							});
						} },
					'Home'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'span',
					{ onClick: function onClick() {
							_this2.setState({
								url: 'Profile'
							});
						} },
					'Profile'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'app-page' },
					this.state.url === 'Home' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_5__Components_LiquidRoute_LiquidRoute_jsx__["a" /* default */],
						{ keys: 'home' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_6__Components_Home_Home_jsx__["a" /* default */], null)
					),
					this.state.url === 'Profile' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_5__Components_LiquidRoute_LiquidRoute_jsx__["a" /* default */],
						{ keys: 'profile' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_7__Components_Profile_Profile_jsx__["a" /* default */], null)
					)
				)
			);
		}
	}]);

	return App;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["render"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(App, null), document.querySelector('.app'));

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Box = function (_Component) {
	_inherits(Box, _Component);

	function Box() {
		_classCallCheck(this, Box);

		return _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).apply(this, arguments));
	}

	_createClass(Box, [{
		key: 'componentWillEnter',
		value: function componentWillEnter(callback) {
			console.log('will enter');
			callback();
		}
	}, {
		key: 'componentWillLeave',
		value: function componentWillLeave(callback) {
			console.log('will Leave');
			callback();
		}
	}, {
		key: 'render',
		value: function render() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div', { key: 'a', className: 'box' });
		}
	}]);

	return Box;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Box);

/***/ }),
/* 19 */
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_css_transition_group__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_css_transition_group__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var LiquidRoute = function (_Component) {
	_inherits(LiquidRoute, _Component);

	function LiquidRoute() {
		_classCallCheck(this, LiquidRoute);

		return _possibleConstructorReturn(this, (LiquidRoute.__proto__ || Object.getPrototypeOf(LiquidRoute)).apply(this, arguments));
	}

	_createClass(LiquidRoute, [{
		key: 'render',
		value: function render() {
			console.log(this.props.keys);
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				__WEBPACK_IMPORTED_MODULE_1_preact_css_transition_group___default.a,
				{
					transitionName: 'example',
					transitionEnterTimeout: 300,
					transitionLeaveTimeout: 100 },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ key: this.props.keys, 'class': 'page' },
					this.props.children
				)
			);
		}
	}]);

	return LiquidRoute;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (LiquidRoute);

/***/ })
],[7]);