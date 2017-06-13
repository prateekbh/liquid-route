webpackJsonp([2],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_css_transition_group__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_preact_css_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Home_css__ = __webpack_require__(8);
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
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(15);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(17)(content, options);
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

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, ".page-home{\n\ttext-align: center;\n\ttransform: translateZ(0);\n\twill-change: transform, opacity;\n}", ""]);

// exports


/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(12);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);

	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ })
]);