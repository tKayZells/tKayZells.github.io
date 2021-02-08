(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

/***/ "./node_modules/locomotive-scroll/dist/locomotive-scroll.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/locomotive-scroll/dist/locomotive-scroll.esm.js ***!
  \**********************************************************************/
/*! exports provided: default, Native, Smooth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Native", function() { return Native; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Smooth", function() { return Smooth; });
/* locomotive-scroll v4.0.6 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var defaults = {
  el: document,
  name: 'scroll',
  offset: [0, 0],
  repeat: false,
  smooth: false,
  direction: 'vertical',
  gestureDirection: 'vertical',
  reloadOnContextChange: false,
  lerp: 0.1,
  "class": 'is-inview',
  scrollbarContainer: false,
  scrollbarClass: 'c-scrollbar',
  scrollingClass: 'has-scroll-scrolling',
  draggingClass: 'has-scroll-dragging',
  smoothClass: 'has-scroll-smooth',
  initClass: 'has-scroll-init',
  getSpeed: false,
  getDirection: false,
  scrollFromAnywhere: false,
  multiplier: 1,
  firefoxMultiplier: 50,
  touchMultiplier: 2,
  resetNativeScroll: true,
  tablet: {
    smooth: false,
    direction: 'vertical',
    gestureDirection: 'vertical',
    breakpoint: 1024
  },
  smartphone: {
    smooth: false,
    direction: 'vertical',
    gestureDirection: 'vertical'
  }
};

var _default = /*#__PURE__*/function () {
  function _default() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, _default);

    Object.assign(this, defaults, options);
    this.smartphone = defaults.smartphone;
    if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
    this.tablet = defaults.tablet;
    if (options.tablet) Object.assign(this.tablet, options.tablet);
    this.namespace = 'locomotive';
    this.html = document.documentElement;
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
    this.windowMiddle = {
      x: this.windowWidth / 2,
      y: this.windowHeight / 2
    };
    this.els = {};
    this.currentElements = {};
    this.listeners = {};
    this.hasScrollTicking = false;
    this.hasCallEventSet = false;
    this.checkScroll = this.checkScroll.bind(this);
    this.checkResize = this.checkResize.bind(this);
    this.checkEvent = this.checkEvent.bind(this);
    this.instance = {
      scroll: {
        x: 0,
        y: 0
      },
      limit: {
        x: this.html.offsetHeight,
        y: this.html.offsetHeight
      },
      currentElements: this.currentElements
    };

    if (this.isMobile) {
      if (this.isTablet) {
        this.context = 'tablet';
      } else {
        this.context = 'smartphone';
      }
    } else {
      this.context = 'desktop';
    }

    if (this.isMobile) this.direction = this[this.context].direction;

    if (this.direction === 'horizontal') {
      this.directionAxis = 'x';
    } else {
      this.directionAxis = 'y';
    }

    if (this.getDirection) {
      this.instance.direction = null;
    }

    if (this.getDirection) {
      this.instance.speed = 0;
    }

    this.html.classList.add(this.initClass);
    window.addEventListener('resize', this.checkResize, false);
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      this.initEvents();
    }
  }, {
    key: "checkScroll",
    value: function checkScroll() {
      this.dispatchScroll();
    }
  }, {
    key: "checkResize",
    value: function checkResize() {
      var _this = this;

      if (!this.resizeTick) {
        this.resizeTick = true;
        requestAnimationFrame(function () {
          _this.resize();

          _this.resizeTick = false;
        });
      }
    }
  }, {
    key: "resize",
    value: function resize() {}
  }, {
    key: "checkContext",
    value: function checkContext() {
      if (!this.reloadOnContextChange) return;
      this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint;
      this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
      var oldContext = this.context;

      if (this.isMobile) {
        if (this.isTablet) {
          this.context = 'tablet';
        } else {
          this.context = 'smartphone';
        }
      } else {
        this.context = 'desktop';
      }

      if (oldContext != this.context) {
        var oldSmooth = oldContext == 'desktop' ? this.smooth : this[oldContext].smooth;
        var newSmooth = this.context == 'desktop' ? this.smooth : this[this.context].smooth;
        if (oldSmooth != newSmooth) window.location.reload();
      }
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      var _this2 = this;

      this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]"));
      this.setScrollTo = this.setScrollTo.bind(this);
      this.scrollToEls.forEach(function (el) {
        el.addEventListener('click', _this2.setScrollTo, false);
      });
    }
  }, {
    key: "setScrollTo",
    value: function setScrollTo(event) {
      event.preventDefault();
      this.scrollTo(event.currentTarget.getAttribute("data-".concat(this.name, "-href")) || event.currentTarget.getAttribute('href'), {
        offset: event.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
      });
    }
  }, {
    key: "addElements",
    value: function addElements() {}
  }, {
    key: "detectElements",
    value: function detectElements(hasCallEventSet) {
      var _this3 = this;

      var scrollTop = this.instance.scroll.y;
      var scrollBottom = scrollTop + this.windowHeight;
      var scrollLeft = this.instance.scroll.x;
      var scrollRight = scrollLeft + this.windowWidth;
      Object.entries(this.els).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            i = _ref2[0],
            el = _ref2[1];

        if (el && (!el.inView || hasCallEventSet)) {
          if (_this3.direction === 'horizontal') {
            if (scrollRight >= el.left && scrollLeft < el.right) {
              _this3.setInView(el, i);
            }
          } else {
            if (scrollBottom >= el.top && scrollTop < el.bottom) {
              _this3.setInView(el, i);
            }
          }
        }

        if (el && el.inView) {
          if (_this3.direction === 'horizontal') {
            var width = el.right - el.left;
            el.progress = (_this3.instance.scroll.x - (el.left - _this3.windowWidth)) / (width + _this3.windowWidth);

            if (scrollRight < el.left || scrollLeft > el.right) {
              _this3.setOutOfView(el, i);
            }
          } else {
            var height = el.bottom - el.top;
            el.progress = (_this3.instance.scroll.y - (el.top - _this3.windowHeight)) / (height + _this3.windowHeight);

            if (scrollBottom < el.top || scrollTop > el.bottom) {
              _this3.setOutOfView(el, i);
            }
          }
        }
      }); // this.els = this.els.filter((current, i) => {
      //     return current !== null;
      // });

      this.hasScrollTicking = false;
    }
  }, {
    key: "setInView",
    value: function setInView(current, i) {
      this.els[i].inView = true;
      current.el.classList.add(current["class"]);
      this.currentElements[i] = current;

      if (current.call && this.hasCallEventSet) {
        this.dispatchCall(current, 'enter');

        if (!current.repeat) {
          this.els[i].call = false;
        }
      } // if (!current.repeat && !current.speed && !current.sticky) {
      //     if (!current.call || current.call && this.hasCallEventSet) {
      //        this.els[i] = null
      //     }
      // }

    }
  }, {
    key: "setOutOfView",
    value: function setOutOfView(current, i) {
      var _this4 = this;

      // if (current.repeat || current.speed !== undefined) {
      this.els[i].inView = false; // }

      Object.keys(this.currentElements).forEach(function (el) {
        el === i && delete _this4.currentElements[el];
      });

      if (current.call && this.hasCallEventSet) {
        this.dispatchCall(current, 'exit');
      }

      if (current.repeat) {
        current.el.classList.remove(current["class"]);
      }
    }
  }, {
    key: "dispatchCall",
    value: function dispatchCall(current, way) {
      this.callWay = way;
      this.callValue = current.call.split(',').map(function (item) {
        return item.trim();
      });
      this.callObj = current;
      if (this.callValue.length == 1) this.callValue = this.callValue[0];
      var callEvent = new Event(this.namespace + 'call');
      this.el.dispatchEvent(callEvent);
    }
  }, {
    key: "dispatchScroll",
    value: function dispatchScroll() {
      var scrollEvent = new Event(this.namespace + 'scroll');
      this.el.dispatchEvent(scrollEvent);
    }
  }, {
    key: "setEvents",
    value: function setEvents(event, func) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }

      var list = this.listeners[event];
      list.push(func);

      if (list.length === 1) {
        this.el.addEventListener(this.namespace + event, this.checkEvent, false);
      }

      if (event === 'call') {
        this.hasCallEventSet = true;
        this.detectElements(true);
      }
    }
  }, {
    key: "unsetEvents",
    value: function unsetEvents(event, func) {
      if (!this.listeners[event]) return;
      var list = this.listeners[event];
      var index = list.indexOf(func);
      if (index < 0) return;
      list.splice(index, 1);

      if (list.index === 0) {
        this.el.removeEventListener(this.namespace + event, this.checkEvent, false);
      }
    }
  }, {
    key: "checkEvent",
    value: function checkEvent(event) {
      var _this5 = this;

      var name = event.type.replace(this.namespace, '');
      var list = this.listeners[name];
      if (!list || list.length === 0) return;
      list.forEach(function (func) {
        switch (name) {
          case 'scroll':
            return func(_this5.instance);

          case 'call':
            return func(_this5.callValue, _this5.callWay, _this5.callObj);

          default:
            return func();
        }
      });
    }
  }, {
    key: "startScroll",
    value: function startScroll() {}
  }, {
    key: "stopScroll",
    value: function stopScroll() {}
  }, {
    key: "setScroll",
    value: function setScroll(x, y) {
      this.instance.scroll = {
        x: 0,
        y: 0
      };
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this6 = this;

      window.removeEventListener('resize', this.checkResize, false);
      Object.keys(this.listeners).forEach(function (event) {
        _this6.el.removeEventListener(_this6.namespace + event, _this6.checkEvent, false);
      });
      this.listeners = {};
      this.scrollToEls.forEach(function (el) {
        el.removeEventListener('click', _this6.setScrollTo, false);
      });
      this.html.classList.remove(this.initClass);
    }
  }]);

  return _default;
}();

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var smoothscroll = createCommonjsModule(function (module, exports) {
/* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {

  // polyfill
  function polyfill() {
    // aliases
    var w = window;
    var d = document;

    // return if scroll behavior is supported and polyfill is not forced
    if (
      'scrollBehavior' in d.documentElement.style &&
      w.__forceSmoothScrollPolyfill__ !== true
    ) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now =
      w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;

    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */
    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (
        firstArg === null ||
        typeof firstArg !== 'object' ||
        firstArg.behavior === undefined ||
        firstArg.behavior === 'auto' ||
        firstArg.behavior === 'instant'
      ) {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError(
        'behavior member of ScrollOptions ' +
          firstArg.behavior +
          ' is not a valid value for enumeration ScrollBehavior.'
      );
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }

      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

      return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

      return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      while (el !== d.body && isScrollable(el) === false) {
        el = el.parentNode || el.host;
      }

      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;

      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object'
              ? arguments[0]
              : w.scrollX || w.pageXOffset,
          // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined
              ? arguments[1]
              : w.scrollY || w.pageYOffset
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : w.scrollX || w.pageXOffset,
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : w.scrollY || w.pageYOffset
      );
    };

    // w.scrollBy
    w.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object' ? arguments[0] : 0,
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined ? arguments[1] : 0
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        ~~arguments[0].left + (w.scrollX || w.pageXOffset),
        ~~arguments[0].top + (w.scrollY || w.pageYOffset)
      );
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(
          this,
          // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined
            ? ~~arguments[0].left
            : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
          // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined
            ? ~~arguments[0].top
            : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
        );

        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        this,
        this,
        typeof left === 'undefined' ? this.scrollLeft : ~~left,
        typeof top === 'undefined' ? this.scrollTop : ~~top
      );
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(
          this,
          arguments[0].left !== undefined
            ? ~~arguments[0].left + this.scrollLeft
            : ~~arguments[0] + this.scrollLeft,
          arguments[0].top !== undefined
            ? ~~arguments[0].top + this.scrollTop
            : ~~arguments[1] + this.scrollTop
        );

        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function() {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(
          this,
          arguments[0] === undefined ? true : arguments[0]
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(
          this,
          scrollableParent,
          scrollableParent.scrollLeft + clientRects.left - parentRects.left,
          scrollableParent.scrollTop + clientRects.top - parentRects.top
        );

        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  {
    // commonjs
    module.exports = { polyfill: polyfill };
  }

}());
});
var smoothscroll_1 = smoothscroll.polyfill;

var _default$1 = /*#__PURE__*/function (_Core) {
  _inherits(_default, _Core);

  var _super = _createSuper(_default);

  function _default() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, _default);

    _this = _super.call(this, options);

    if (_this.resetNativeScroll) {
      if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
      }

      window.scrollTo(0, 0);
    }

    window.addEventListener('scroll', _this.checkScroll, false);

    if (window.smoothscrollPolyfill === undefined) {
      window.smoothscrollPolyfill = smoothscroll;
      window.smoothscrollPolyfill.polyfill();
    }

    return _this;
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      this.instance.scroll.y = window.pageYOffset;
      this.addElements();
      this.detectElements();

      _get(_getPrototypeOf(_default.prototype), "init", this).call(this);
    }
  }, {
    key: "checkScroll",
    value: function checkScroll() {
      var _this2 = this;

      _get(_getPrototypeOf(_default.prototype), "checkScroll", this).call(this);

      if (this.getDirection) {
        this.addDirection();
      }

      if (this.getSpeed) {
        this.addSpeed();
        this.speedTs = Date.now();
      }

      this.instance.scroll.y = window.pageYOffset;

      if (Object.entries(this.els).length) {
        if (!this.hasScrollTicking) {
          requestAnimationFrame(function () {
            _this2.detectElements();
          });
          this.hasScrollTicking = true;
        }
      }
    }
  }, {
    key: "addDirection",
    value: function addDirection() {
      if (window.pageYOffset > this.instance.scroll.y) {
        if (this.instance.direction !== 'down') {
          this.instance.direction = 'down';
        }
      } else if (window.pageYOffset < this.instance.scroll.y) {
        if (this.instance.direction !== 'up') {
          this.instance.direction = 'up';
        }
      }
    }
  }, {
    key: "addSpeed",
    value: function addSpeed() {
      if (window.pageYOffset != this.instance.scroll.y) {
        this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs);
      } else {
        this.instance.speed = 0;
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      if (Object.entries(this.els).length) {
        this.windowHeight = window.innerHeight;
        this.updateElements();
      }
    }
  }, {
    key: "addElements",
    value: function addElements() {
      var _this3 = this;

      this.els = {};
      var els = this.el.querySelectorAll('[data-' + this.name + ']');
      els.forEach(function (el, index) {
        var BCR = el.getBoundingClientRect();
        var cl = el.dataset[_this3.name + 'Class'] || _this3["class"];
        var id = typeof el.dataset[_this3.name + 'Id'] === 'string' ? el.dataset[_this3.name + 'Id'] : index;
        var top;
        var left;
        var offset = typeof el.dataset[_this3.name + 'Offset'] === 'string' ? el.dataset[_this3.name + 'Offset'].split(',') : _this3.offset;
        var repeat = el.dataset[_this3.name + 'Repeat'];
        var call = el.dataset[_this3.name + 'Call'];
        var target = el.dataset[_this3.name + 'Target'];
        var targetEl;

        if (target !== undefined) {
          targetEl = document.querySelector("".concat(target));
        } else {
          targetEl = el;
        }

        var targetElBCR = targetEl.getBoundingClientRect();
        top = targetElBCR.top + _this3.instance.scroll.y;
        left = targetElBCR.left + _this3.instance.scroll.x;
        var bottom = top + targetEl.offsetHeight;
        var right = left + targetEl.offsetWidth;

        if (target === '#header') {
          console.log(top, bottom);
        }

        if (repeat == 'false') {
          repeat = false;
        } else if (repeat != undefined) {
          repeat = true;
        } else {
          repeat = _this3.repeat;
        }

        var relativeOffset = _this3.getRelativeOffset(offset);

        top = top + relativeOffset[0];
        bottom = bottom - relativeOffset[1];
        var mappedEl = {
          el: el,
          targetEl: targetEl,
          id: id,
          "class": cl,
          top: top,
          bottom: bottom,
          left: left,
          right: right,
          offset: offset,
          progress: 0,
          repeat: repeat,
          inView: false,
          call: call
        };
        _this3.els[id] = mappedEl;

        if (el.classList.contains(cl)) {
          _this3.setInView(_this3.els[id], id);
        }
      });
    }
  }, {
    key: "updateElements",
    value: function updateElements() {
      var _this4 = this;

      Object.entries(this.els).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            i = _ref2[0],
            el = _ref2[1];

        var top = el.targetEl.getBoundingClientRect().top + _this4.instance.scroll.y;

        var bottom = top + el.targetEl.offsetHeight;

        var relativeOffset = _this4.getRelativeOffset(el.offset);

        _this4.els[i].top = top + relativeOffset[0];
        _this4.els[i].bottom = bottom - relativeOffset[1];
      });
      this.hasScrollTicking = false;
    }
  }, {
    key: "getRelativeOffset",
    value: function getRelativeOffset(offset) {
      var relativeOffset = [0, 0];

      if (offset) {
        for (var i = 0; i < offset.length; i++) {
          if (typeof offset[i] == 'string') {
            if (offset[i].includes('%')) {
              relativeOffset[i] = parseInt(offset[i].replace('%', '') * this.windowHeight / 100);
            } else {
              relativeOffset[i] = parseInt(offset[i]);
            }
          } else {
            relativeOffset[i] = offset[i];
          }
        }
      }

      return relativeOffset;
    }
    /**
     * Scroll to a desired target.
     *
     * @param  Available options :
     *          target {node, string, "top", "bottom", int} - The DOM element we want to scroll to
     *          options {object} - Options object for additionnal settings.
     * @return {void}
     */

  }, {
    key: "scrollTo",
    value: function scrollTo(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // Parse options
      var offset = parseInt(options.offset) || 0; // An offset to apply on top of given `target` or `sourceElem`'s target

      var callback = options.callback ? options.callback : false; // function called when scrollTo completes (note that it won't wait for lerp to stabilize)

      if (typeof target === 'string') {
        // Selector or boundaries
        if (target === 'top') {
          target = this.html;
        } else if (target === 'bottom') {
          target = this.html.offsetHeight - window.innerHeight;
        } else {
          target = document.querySelector(target); // If the query fails, abort

          if (!target) {
            return;
          }
        }
      } else if (typeof target === 'number') {
        // Absolute coordinate
        target = parseInt(target);
      } else if (target && target.tagName) ; else {
        console.warn('`target` parameter is not valid');
        return;
      } // We have a target that is not a coordinate yet, get it


      if (typeof target !== 'number') {
        offset = target.getBoundingClientRect().top + offset + this.instance.scroll.y;
      } else {
        offset = target + offset;
      }

      if (callback) {
        offset = offset.toFixed();

        var onScroll = function onScroll() {
          if (window.pageYOffset.toFixed() === offset) {
            window.removeEventListener('scroll', onScroll);
            callback();
          }
        };

        window.addEventListener('scroll', onScroll);
      }

      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  }, {
    key: "update",
    value: function update() {
      this.addElements();
      this.detectElements();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(_default.prototype), "destroy", this).call(this);

      window.removeEventListener('scroll', this.checkScroll, false);
    }
  }]);

  return _default;
}(_default);

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    }
    listener._ = callback;
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

var tinyEmitter = E;

var lethargy = createCommonjsModule(function (module, exports) {
// Generated by CoffeeScript 1.9.2
(function() {
  var root;

  root =  exports !== null ? exports : this;

  root.Lethargy = (function() {
    function Lethargy(stability, sensitivity, tolerance, delay) {
      this.stability = stability != null ? Math.abs(stability) : 8;
      this.sensitivity = sensitivity != null ? 1 + Math.abs(sensitivity) : 100;
      this.tolerance = tolerance != null ? 1 + Math.abs(tolerance) : 1.1;
      this.delay = delay != null ? delay : 150;
      this.lastUpDeltas = (function() {
        var i, ref, results;
        results = [];
        for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
          results.push(null);
        }
        return results;
      }).call(this);
      this.lastDownDeltas = (function() {
        var i, ref, results;
        results = [];
        for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
          results.push(null);
        }
        return results;
      }).call(this);
      this.deltasTimestamp = (function() {
        var i, ref, results;
        results = [];
        for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
          results.push(null);
        }
        return results;
      }).call(this);
    }

    Lethargy.prototype.check = function(e) {
      var lastDelta;
      e = e.originalEvent || e;
      if (e.wheelDelta != null) {
        lastDelta = e.wheelDelta;
      } else if (e.deltaY != null) {
        lastDelta = e.deltaY * -40;
      } else if ((e.detail != null) || e.detail === 0) {
        lastDelta = e.detail * -40;
      }
      this.deltasTimestamp.push(Date.now());
      this.deltasTimestamp.shift();
      if (lastDelta > 0) {
        this.lastUpDeltas.push(lastDelta);
        this.lastUpDeltas.shift();
        return this.isInertia(1);
      } else {
        this.lastDownDeltas.push(lastDelta);
        this.lastDownDeltas.shift();
        return this.isInertia(-1);
      }
    };

    Lethargy.prototype.isInertia = function(direction) {
      var lastDeltas, lastDeltasNew, lastDeltasOld, newAverage, newSum, oldAverage, oldSum;
      lastDeltas = direction === -1 ? this.lastDownDeltas : this.lastUpDeltas;
      if (lastDeltas[0] === null) {
        return direction;
      }
      if (this.deltasTimestamp[(this.stability * 2) - 2] + this.delay > Date.now() && lastDeltas[0] === lastDeltas[(this.stability * 2) - 1]) {
        return false;
      }
      lastDeltasOld = lastDeltas.slice(0, this.stability);
      lastDeltasNew = lastDeltas.slice(this.stability, this.stability * 2);
      oldSum = lastDeltasOld.reduce(function(t, s) {
        return t + s;
      });
      newSum = lastDeltasNew.reduce(function(t, s) {
        return t + s;
      });
      oldAverage = oldSum / lastDeltasOld.length;
      newAverage = newSum / lastDeltasNew.length;
      if (Math.abs(oldAverage) < Math.abs(newAverage * this.tolerance) && (this.sensitivity < Math.abs(newAverage))) {
        return direction;
      } else {
        return false;
      }
    };

    Lethargy.prototype.showLastUpDeltas = function() {
      return this.lastUpDeltas;
    };

    Lethargy.prototype.showLastDownDeltas = function() {
      return this.lastDownDeltas;
    };

    return Lethargy;

  })();

}).call(commonjsGlobal);
});

var support = (function getSupport() {
    return {
        hasWheelEvent: 'onwheel' in document,
        hasMouseWheelEvent: 'onmousewheel' in document,
        hasTouch: ('ontouchstart' in window) || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
        hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
        hasPointer: !!window.navigator.msPointerEnabled,
        hasKeyDown: 'onkeydown' in document,
        isFirefox: navigator.userAgent.indexOf('Firefox') > -1
    };
})();

var toString = Object.prototype.toString,
    hasOwnProperty$1 = Object.prototype.hasOwnProperty;

var bindallStandalone = function(object) {
    if(!object) return console.warn('bindAll requires at least one argument.');

    var functions = Array.prototype.slice.call(arguments, 1);

    if (functions.length === 0) {

        for (var method in object) {
            if(hasOwnProperty$1.call(object, method)) {
                if(typeof object[method] == 'function' && toString.call(object[method]) == "[object Function]") {
                    functions.push(method);
                }
            }
        }
    }

    for(var i = 0; i < functions.length; i++) {
        var f = functions[i];
        object[f] = bind(object[f], object);
    }
};

/*
    Faster bind without specific-case checking. (see https://coderwall.com/p/oi3j3w).
    bindAll is only needed for events binding so no need to make slow fixes for constructor
    or partial application.
*/
function bind(func, context) {
  return function() {
    return func.apply(context, arguments);
  };
}

var Lethargy = lethargy.Lethargy;



var EVT_ID = 'virtualscroll';

var src = VirtualScroll;

var keyCodes = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32
};

function VirtualScroll(options) {
    bindallStandalone(this, '_onWheel', '_onMouseWheel', '_onTouchStart', '_onTouchMove', '_onKeyDown');

    this.el = window;
    if (options && options.el) {
        this.el = options.el;
        delete options.el;
    }
    this.options = objectAssign({
        mouseMultiplier: 1,
        touchMultiplier: 2,
        firefoxMultiplier: 15,
        keyStep: 120,
        preventTouch: false,
        unpreventTouchClass: 'vs-touchmove-allowed',
        limitInertia: false,
        useKeyboard: true,
        useTouch: true
    }, options);

    if (this.options.limitInertia) this._lethargy = new Lethargy();

    this._emitter = new tinyEmitter();
    this._event = {
        y: 0,
        x: 0,
        deltaX: 0,
        deltaY: 0
    };
    this.touchStartX = null;
    this.touchStartY = null;
    this.bodyTouchAction = null;

    if (this.options.passive !== undefined) {
        this.listenerOptions = {passive: this.options.passive};
    }
}

VirtualScroll.prototype._notify = function(e) {
    var evt = this._event;
    evt.x += evt.deltaX;
    evt.y += evt.deltaY;

   this._emitter.emit(EVT_ID, {
        x: evt.x,
        y: evt.y,
        deltaX: evt.deltaX,
        deltaY: evt.deltaY,
        originalEvent: e
   });
};

VirtualScroll.prototype._onWheel = function(e) {
    var options = this.options;
    if (this._lethargy && this._lethargy.check(e) === false) return;
    var evt = this._event;

    // In Chrome and in Firefox (at least the new one)
    evt.deltaX = e.wheelDeltaX || e.deltaX * -1;
    evt.deltaY = e.wheelDeltaY || e.deltaY * -1;

    // for our purpose deltamode = 1 means user is on a wheel mouse, not touch pad
    // real meaning: https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent#Delta_modes
    if(support.isFirefox && e.deltaMode == 1) {
        evt.deltaX *= options.firefoxMultiplier;
        evt.deltaY *= options.firefoxMultiplier;
    }

    evt.deltaX *= options.mouseMultiplier;
    evt.deltaY *= options.mouseMultiplier;

    this._notify(e);
};

VirtualScroll.prototype._onMouseWheel = function(e) {
    if (this.options.limitInertia && this._lethargy.check(e) === false) return;

    var evt = this._event;

    // In Safari, IE and in Chrome if 'wheel' isn't defined
    evt.deltaX = (e.wheelDeltaX) ? e.wheelDeltaX : 0;
    evt.deltaY = (e.wheelDeltaY) ? e.wheelDeltaY : e.wheelDelta;

    this._notify(e);
};

VirtualScroll.prototype._onTouchStart = function(e) {
    var t = (e.targetTouches) ? e.targetTouches[0] : e;
    this.touchStartX = t.pageX;
    this.touchStartY = t.pageY;
};

VirtualScroll.prototype._onTouchMove = function(e) {
    var options = this.options;
    if(options.preventTouch
        && !e.target.classList.contains(options.unpreventTouchClass)) {
        e.preventDefault();
    }

    var evt = this._event;

    var t = (e.targetTouches) ? e.targetTouches[0] : e;

    evt.deltaX = (t.pageX - this.touchStartX) * options.touchMultiplier;
    evt.deltaY = (t.pageY - this.touchStartY) * options.touchMultiplier;

    this.touchStartX = t.pageX;
    this.touchStartY = t.pageY;

    this._notify(e);
};

VirtualScroll.prototype._onKeyDown = function(e) {
    var evt = this._event;
    evt.deltaX = evt.deltaY = 0;
    var windowHeight = window.innerHeight - 40;

    switch(e.keyCode) {
        case keyCodes.LEFT:
        case keyCodes.UP:
            evt.deltaY = this.options.keyStep;
            break;

        case keyCodes.RIGHT:
        case keyCodes.DOWN:
            evt.deltaY = - this.options.keyStep;
            break;
        case  e.shiftKey:
            evt.deltaY = windowHeight;
            break;
        case keyCodes.SPACE:
            evt.deltaY = - windowHeight;
            break;
        default:
            return;
    }

    this._notify(e);
};

VirtualScroll.prototype._bind = function() {
    if(support.hasWheelEvent) this.el.addEventListener('wheel', this._onWheel, this.listenerOptions);
    if(support.hasMouseWheelEvent) this.el.addEventListener('mousewheel', this._onMouseWheel, this.listenerOptions);

    if(support.hasTouch && this.options.useTouch) {
        this.el.addEventListener('touchstart', this._onTouchStart, this.listenerOptions);
        this.el.addEventListener('touchmove', this._onTouchMove, this.listenerOptions);
    }

    if(support.hasPointer && support.hasTouchWin) {
        this.bodyTouchAction = document.body.style.msTouchAction;
        document.body.style.msTouchAction = 'none';
        this.el.addEventListener('MSPointerDown', this._onTouchStart, true);
        this.el.addEventListener('MSPointerMove', this._onTouchMove, true);
    }

    if(support.hasKeyDown && this.options.useKeyboard) document.addEventListener('keydown', this._onKeyDown);
};

VirtualScroll.prototype._unbind = function() {
    if(support.hasWheelEvent) this.el.removeEventListener('wheel', this._onWheel);
    if(support.hasMouseWheelEvent) this.el.removeEventListener('mousewheel', this._onMouseWheel);

    if(support.hasTouch) {
        this.el.removeEventListener('touchstart', this._onTouchStart);
        this.el.removeEventListener('touchmove', this._onTouchMove);
    }

    if(support.hasPointer && support.hasTouchWin) {
        document.body.style.msTouchAction = this.bodyTouchAction;
        this.el.removeEventListener('MSPointerDown', this._onTouchStart, true);
        this.el.removeEventListener('MSPointerMove', this._onTouchMove, true);
    }

    if(support.hasKeyDown && this.options.useKeyboard) document.removeEventListener('keydown', this._onKeyDown);
};

VirtualScroll.prototype.on = function(cb, ctx) {
  this._emitter.on(EVT_ID, cb, ctx);

  var events = this._emitter.e;
  if (events && events[EVT_ID] && events[EVT_ID].length === 1) this._bind();
};

VirtualScroll.prototype.off = function(cb, ctx) {
  this._emitter.off(EVT_ID, cb, ctx);

  var events = this._emitter.e;
  if (!events[EVT_ID] || events[EVT_ID].length <= 0) this._unbind();
};

VirtualScroll.prototype.reset = function() {
    var evt = this._event;
    evt.x = 0;
    evt.y = 0;
};

VirtualScroll.prototype.destroy = function() {
    this._emitter.off();
    this._unbind();
};

function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}

function getTranslate(el) {
  var translate = {};
  if (!window.getComputedStyle) return;
  var style = getComputedStyle(el);
  var transform = style.transform || style.webkitTransform || style.mozTransform;
  var mat = transform.match(/^matrix3d\((.+)\)$/);

  if (mat) {
    translate.x = mat ? parseFloat(mat[1].split(', ')[12]) : 0;
    translate.y = mat ? parseFloat(mat[1].split(', ')[13]) : 0;
  } else {
    mat = transform.match(/^matrix\((.+)\)$/);
    translate.x = mat ? parseFloat(mat[1].split(', ')[4]) : 0;
    translate.y = mat ? parseFloat(mat[1].split(', ')[5]) : 0;
  }

  return translate;
}

/**
 * Returns an array containing all the parent nodes of the given node
 * @param  {object} node
 * @return {array} parent nodes
 */
function getParents(elem) {
  // Set up a parent array
  var parents = []; // Push each parent element to the array

  for (; elem && elem !== document; elem = elem.parentNode) {
    parents.push(elem);
  } // Return our parent array


  return parents;
} // https://gomakethings.com/how-to-get-the-closest-parent-element-with-a-matching-selector-using-vanilla-javascript/

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;

var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

var float32ArraySupported = typeof Float32Array === 'function';

function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
function C (aA1)      { return 3.0 * aA1; }

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

function binarySubdivide (aX, aA, aB, mX1, mX2) {
  var currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}

function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
 for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
   var currentSlope = getSlope(aGuessT, mX1, mX2);
   if (currentSlope === 0.0) {
     return aGuessT;
   }
   var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
   aGuessT -= currentX / currentSlope;
 }
 return aGuessT;
}

function LinearEasing (x) {
  return x;
}

var src$1 = function bezier (mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }

  // Precompute samples table
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }

  function getTForX (aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;

    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing (x) {
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};

var keyCodes$1 = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  SPACE: 32,
  TAB: 9,
  PAGEUP: 33,
  PAGEDOWN: 34,
  HOME: 36,
  END: 35
};

var _default$2 = /*#__PURE__*/function (_Core) {
  _inherits(_default, _Core);

  var _super = _createSuper(_default);

  function _default() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, _default);

    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
    _this = _super.call(this, options);
    if (_this.inertia) _this.lerp = _this.inertia * 0.1;
    _this.isScrolling = false;
    _this.isDraggingScrollbar = false;
    _this.isTicking = false;
    _this.hasScrollTicking = false;
    _this.parallaxElements = {};
    _this.stop = false;
    _this.scrollbarContainer = options.scrollbarContainer;
    _this.checkKey = _this.checkKey.bind(_assertThisInitialized(_this));
    window.addEventListener('keydown', _this.checkKey, false);
    return _this;
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this.html.classList.add(this.smoothClass);
      this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction);
      this.instance = _objectSpread2({
        delta: {
          x: 0,
          y: 0
        }
      }, this.instance);
      this.vs = new src({
        el: this.scrollFromAnywhere ? document : this.el,
        mouseMultiplier: navigator.platform.indexOf('Win') > -1 ? 1 : 0.4,
        firefoxMultiplier: this.firefoxMultiplier,
        touchMultiplier: this.touchMultiplier,
        useKeyboard: false,
        passive: true
      });
      this.vs.on(function (e) {
        if (_this2.stop) {
          return;
        }

        if (!_this2.isDraggingScrollbar) {
          requestAnimationFrame(function () {
            _this2.updateDelta(e);

            if (!_this2.isScrolling) _this2.startScrolling();
          });
        }
      });
      this.setScrollLimit();
      this.initScrollBar();
      this.addSections();
      this.addElements();
      this.checkScroll(true);
      this.transformElements(true, true);

      _get(_getPrototypeOf(_default.prototype), "init", this).call(this);
    }
  }, {
    key: "setScrollLimit",
    value: function setScrollLimit() {
      this.instance.limit.y = this.el.offsetHeight - this.windowHeight;

      if (this.direction === 'horizontal') {
        var totalWidth = 0;
        var nodes = this.el.children;

        for (var i = 0; i < nodes.length; i++) {
          totalWidth += nodes[i].offsetWidth;
        }

        this.instance.limit.x = totalWidth - this.windowWidth;
      }
    }
  }, {
    key: "startScrolling",
    value: function startScrolling() {
      this.startScrollTs = Date.now(); // Record timestamp

      this.isScrolling = true;
      this.checkScroll();
      this.html.classList.add(this.scrollingClass);
    }
  }, {
    key: "stopScrolling",
    value: function stopScrolling() {
      cancelAnimationFrame(this.checkScrollRaf); // Prevent checkScroll to continue looping

      if (this.scrollToRaf) {
        cancelAnimationFrame(this.scrollToRaf);
        this.scrollToRaf = null;
      }

      this.isScrolling = false;
      this.instance.scroll.y = Math.round(this.instance.scroll.y);
      this.html.classList.remove(this.scrollingClass);
    }
  }, {
    key: "checkKey",
    value: function checkKey(e) {
      var _this3 = this;

      if (this.stop) {
        // If we are stopped, we don't want any scroll to occur because of a keypress
        // Prevent tab to scroll to activeElement
        if (e.keyCode == keyCodes$1.TAB) {
          requestAnimationFrame(function () {
            // Make sure native scroll is always at top of page
            _this3.html.scrollTop = 0;
            document.body.scrollTop = 0;
            _this3.html.scrollLeft = 0;
            document.body.scrollLeft = 0;
          });
        }

        return;
      }

      switch (e.keyCode) {
        case keyCodes$1.TAB:
          // Do not remove the RAF
          // It allows to override the browser's native scrollTo, which is essential
          requestAnimationFrame(function () {
            // Make sure native scroll is always at top of page
            _this3.html.scrollTop = 0;
            document.body.scrollTop = 0;
            _this3.html.scrollLeft = 0;
            document.body.scrollLeft = 0; // Request scrollTo on the focusedElement, putting it at the center of the screen

            _this3.scrollTo(document.activeElement, {
              offset: -window.innerHeight / 2
            });
          });
          break;

        case keyCodes$1.UP:
          this.instance.delta[this.directionAxis] -= 240;
          break;

        case keyCodes$1.DOWN:
          this.instance.delta[this.directionAxis] += 240;
          break;

        case keyCodes$1.PAGEUP:
          this.instance.delta[this.directionAxis] -= window.innerHeight;
          break;

        case keyCodes$1.PAGEDOWN:
          this.instance.delta[this.directionAxis] += window.innerHeight;
          break;

        case keyCodes$1.HOME:
          this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
          break;

        case keyCodes$1.END:
          this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
          break;

        case keyCodes$1.SPACE:
          if (!(document.activeElement instanceof HTMLInputElement) && !(document.activeElement instanceof HTMLTextAreaElement)) {
            if (e.shiftKey) {
              this.instance.delta[this.directionAxis] -= window.innerHeight;
            } else {
              this.instance.delta[this.directionAxis] += window.innerHeight;
            }
          }

          break;

        default:
          return;
      }

      if (this.instance.delta[this.directionAxis] < 0) this.instance.delta[this.directionAxis] = 0;
      if (this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis]) this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis];
      this.stopScrolling(); // Stop any movement, allows to kill any other `scrollTo` still happening

      this.isScrolling = true;
      this.checkScroll();
      this.html.classList.add(this.scrollingClass);
    }
  }, {
    key: "checkScroll",
    value: function checkScroll() {
      var _this4 = this;

      var forced = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (forced || this.isScrolling || this.isDraggingScrollbar) {
        if (!this.hasScrollTicking) {
          this.checkScrollRaf = requestAnimationFrame(function () {
            return _this4.checkScroll();
          });
          this.hasScrollTicking = true;
        }

        this.updateScroll();
        var distance = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]);
        var timeSinceStart = Date.now() - this.startScrollTs; // Get the time since the scroll was started: the scroll can be stopped again only past 100ms

        if (!this.animatingScroll && timeSinceStart > 100 && (distance < 0.5 && this.instance.delta[this.directionAxis] != 0 || distance < 0.5 && this.instance.delta[this.directionAxis] == 0)) {
          this.stopScrolling();
        }

        Object.entries(this.sections).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              i = _ref2[0],
              section = _ref2[1];

          if (section.persistent || _this4.instance.scroll[_this4.directionAxis] > section.offset[_this4.directionAxis] && _this4.instance.scroll[_this4.directionAxis] < section.limit[_this4.directionAxis]) {
            if (_this4.direction === 'horizontal') {
              _this4.transform(section.el, -_this4.instance.scroll[_this4.directionAxis], 0);
            } else {
              _this4.transform(section.el, 0, -_this4.instance.scroll[_this4.directionAxis]);
            }

            if (!section.inView) {
              section.inView = true;
              section.el.style.opacity = 1;
              section.el.style.pointerEvents = 'all';
              section.el.setAttribute("data-".concat(_this4.name, "-section-inview"), '');
            }
          } else {
            if (section.inView) {
              section.inView = false;
              section.el.style.opacity = 0;
              section.el.style.pointerEvents = 'none';
              section.el.removeAttribute("data-".concat(_this4.name, "-section-inview"));
            }

            _this4.transform(section.el, 0, 0);
          }
        });

        if (this.getDirection) {
          this.addDirection();
        }

        if (this.getSpeed) {
          this.addSpeed();
          this.speedTs = Date.now();
        }

        this.detectElements();
        this.transformElements();

        if (this.hasScrollbar) {
          var scrollBarTranslation = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];

          if (this.direction === 'horizontal') {
            this.transform(this.scrollbarThumb, scrollBarTranslation, 0);
          } else {
            this.transform(this.scrollbarThumb, 0, scrollBarTranslation);
          }
        }

        _get(_getPrototypeOf(_default.prototype), "checkScroll", this).call(this);

        this.hasScrollTicking = false;
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
      this.checkContext();
      this.windowMiddle = {
        x: this.windowWidth / 2,
        y: this.windowHeight / 2
      };
      this.update();
    }
  }, {
    key: "updateDelta",
    value: function updateDelta(e) {
      var delta;
      var gestureDirection = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;

      if (gestureDirection === 'both') {
        delta = e.deltaX + e.deltaY;
      } else if (gestureDirection === 'vertical') {
        delta = e.deltaY;
      } else if (gestureDirection === 'horizontal') {
        delta = e.deltaX;
      } else {
        delta = e.deltaY;
      }

      this.instance.delta[this.directionAxis] -= delta * this.multiplier;
      if (this.instance.delta[this.directionAxis] < 0) this.instance.delta[this.directionAxis] = 0;
      if (this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis]) this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis];
    }
  }, {
    key: "updateScroll",
    value: function updateScroll(e) {
      if (this.isScrolling || this.isDraggingScrollbar) {
        this.instance.scroll[this.directionAxis] = lerp(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp);
      } else {
        if (this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis]) {
          this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]);
        } else if (this.instance.scroll.y < 0) {
          this.setScroll(this.instance.scroll[this.directionAxis], 0);
        } else {
          this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis]);
        }
      }
    }
  }, {
    key: "addDirection",
    value: function addDirection() {
      if (this.instance.delta.y > this.instance.scroll.y) {
        if (this.instance.direction !== 'down') {
          this.instance.direction = 'down';
        }
      } else if (this.instance.delta.y < this.instance.scroll.y) {
        if (this.instance.direction !== 'up') {
          this.instance.direction = 'up';
        }
      }

      if (this.instance.delta.x > this.instance.scroll.x) {
        if (this.instance.direction !== 'right') {
          this.instance.direction = 'right';
        }
      } else if (this.instance.delta.x < this.instance.scroll.x) {
        if (this.instance.direction !== 'left') {
          this.instance.direction = 'left';
        }
      }
    }
  }, {
    key: "addSpeed",
    value: function addSpeed() {
      if (this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis]) {
        this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs);
      } else {
        this.instance.speed = 0;
      }
    }
  }, {
    key: "initScrollBar",
    value: function initScrollBar() {
      this.scrollbar = document.createElement('span');
      this.scrollbarThumb = document.createElement('span');
      this.scrollbar.classList.add("".concat(this.scrollbarClass));
      this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb"));
      this.scrollbar.append(this.scrollbarThumb);

      if (this.scrollbarContainer) {
        this.scrollbarContainer.append(this.scrollbar);
      } else {
        document.body.append(this.scrollbar);
      } // Scrollbar Events


      this.getScrollBar = this.getScrollBar.bind(this);
      this.releaseScrollBar = this.releaseScrollBar.bind(this);
      this.moveScrollBar = this.moveScrollBar.bind(this);
      this.scrollbarThumb.addEventListener('mousedown', this.getScrollBar);
      window.addEventListener('mouseup', this.releaseScrollBar);
      window.addEventListener('mousemove', this.moveScrollBar); // Set scrollbar values

      this.hasScrollbar = false;

      if (this.direction == 'horizontal') {
        if (this.instance.limit.x + this.windowWidth <= this.windowWidth) {
          return;
        }
      } else {
        if (this.instance.limit.y + this.windowHeight <= this.windowHeight) {
          return;
        }
      }

      this.hasScrollbar = true;
      this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
      this.scrollbarHeight = this.scrollbarBCR.height;
      this.scrollbarWidth = this.scrollbarBCR.width;

      if (this.direction === 'horizontal') {
        this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px");
      } else {
        this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px");
      }

      this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect();
      this.scrollBarLimit = {
        x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
        y: this.scrollbarHeight - this.scrollbarThumbBCR.height
      };
    }
  }, {
    key: "reinitScrollBar",
    value: function reinitScrollBar() {
      this.hasScrollbar = false;

      if (this.direction == 'horizontal') {
        if (this.instance.limit.x + this.windowWidth <= this.windowWidth) {
          return;
        }
      } else {
        if (this.instance.limit.y + this.windowHeight <= this.windowHeight) {
          return;
        }
      }

      this.hasScrollbar = true;
      this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
      this.scrollbarHeight = this.scrollbarBCR.height;
      this.scrollbarWidth = this.scrollbarBCR.width;

      if (this.direction === 'horizontal') {
        this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px");
      } else {
        this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px");
      }

      this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect();
      this.scrollBarLimit = {
        x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
        y: this.scrollbarHeight - this.scrollbarThumbBCR.height
      };
    }
  }, {
    key: "destroyScrollBar",
    value: function destroyScrollBar() {
      this.scrollbarThumb.removeEventListener('mousedown', this.getScrollBar);
      window.removeEventListener('mouseup', this.releaseScrollBar);
      window.removeEventListener('mousemove', this.moveScrollBar);
      this.scrollbar.remove();
    }
  }, {
    key: "getScrollBar",
    value: function getScrollBar(e) {
      this.isDraggingScrollbar = true;
      this.checkScroll();
      this.html.classList.remove(this.scrollingClass);
      this.html.classList.add(this.draggingClass);
    }
  }, {
    key: "releaseScrollBar",
    value: function releaseScrollBar(e) {
      this.isDraggingScrollbar = false;
      this.html.classList.add(this.scrollingClass);
      this.html.classList.remove(this.draggingClass);
    }
  }, {
    key: "moveScrollBar",
    value: function moveScrollBar(e) {
      var _this5 = this;

      if (this.isDraggingScrollbar) {
        requestAnimationFrame(function () {
          var x = (e.clientX - _this5.scrollbarBCR.left) * 100 / _this5.scrollbarWidth * _this5.instance.limit.x / 100;
          var y = (e.clientY - _this5.scrollbarBCR.top) * 100 / _this5.scrollbarHeight * _this5.instance.limit.y / 100;

          if (y > 0 && y < _this5.instance.limit.y) {
            _this5.instance.delta.y = y;
          }

          if (x > 0 && x < _this5.instance.limit.x) {
            _this5.instance.delta.x = x;
          }
        });
      }
    }
  }, {
    key: "addElements",
    value: function addElements() {
      var _this6 = this;

      this.els = {};
      this.parallaxElements = {}; // this.sections.forEach((section, y) => {

      var els = this.el.querySelectorAll("[data-".concat(this.name, "]"));
      els.forEach(function (el, index) {
        // Try and find the target's parent section
        var targetParents = getParents(el);
        var section = Object.entries(_this6.sections).map(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              key = _ref4[0],
              section = _ref4[1];

          return section;
        }).find(function (section) {
          return targetParents.includes(section.el);
        });
        var cl = el.dataset[_this6.name + 'Class'] || _this6["class"];
        var id = typeof el.dataset[_this6.name + 'Id'] === 'string' ? el.dataset[_this6.name + 'Id'] : 'el' + index;
        var top;
        var left;
        var repeat = el.dataset[_this6.name + 'Repeat'];
        var call = el.dataset[_this6.name + 'Call'];
        var position = el.dataset[_this6.name + 'Position'];
        var delay = el.dataset[_this6.name + 'Delay'];
        var direction = el.dataset[_this6.name + 'Direction'];
        var sticky = typeof el.dataset[_this6.name + 'Sticky'] === 'string';
        var speed = el.dataset[_this6.name + 'Speed'] ? parseFloat(el.dataset[_this6.name + 'Speed']) / 10 : false;
        var offset = typeof el.dataset[_this6.name + 'Offset'] === 'string' ? el.dataset[_this6.name + 'Offset'].split(',') : _this6.offset;
        var target = el.dataset[_this6.name + 'Target'];
        var targetEl;

        if (target !== undefined) {
          targetEl = document.querySelector("".concat(target));
        } else {
          targetEl = el;
        }

        var targetElBCR = targetEl.getBoundingClientRect();

        if (section === null) {
          top = targetElBCR.top + _this6.instance.scroll.y - getTranslate(targetEl).y;
          left = targetElBCR.left + _this6.instance.scroll.x - getTranslate(targetEl).x;
        } else {
          if (!section.inView) {
            top = targetElBCR.top - getTranslate(section.el).y - getTranslate(targetEl).y;
            left = targetElBCR.left - getTranslate(section.el).x - getTranslate(targetEl).x;
          } else {
            top = targetElBCR.top + _this6.instance.scroll.y - getTranslate(targetEl).y;
            left = targetElBCR.left + _this6.instance.scroll.x - getTranslate(targetEl).x;
          }
        }

        var bottom = top + targetEl.offsetHeight;
        var right = left + targetEl.offsetWidth;
        var middle = {
          x: (right - left) / 2 + left,
          y: (bottom - top) / 2 + top
        };

        if (sticky) {
          var elBCR = el.getBoundingClientRect();
          var elTop = elBCR.top;
          var elLeft = elBCR.left;
          var elDistance = {
            x: elLeft - left,
            y: elTop - top
          };
          top += window.innerHeight;
          left += window.innerWidth;
          bottom = elTop + targetEl.offsetHeight - el.offsetHeight - elDistance[_this6.directionAxis];
          right = elLeft + targetEl.offsetWidth - el.offsetWidth - elDistance[_this6.directionAxis];
          middle = {
            x: (right - left) / 2 + left,
            y: (bottom - top) / 2 + top
          };
        }

        if (repeat == 'false') {
          repeat = false;
        } else if (repeat != undefined) {
          repeat = true;
        } else {
          repeat = _this6.repeat;
        }

        var relativeOffset = [0, 0];

        if (offset) {
          if (_this6.direction === 'horizontal') {
            for (var i = 0; i < offset.length; i++) {
              if (typeof offset[i] == 'string') {
                if (offset[i].includes('%')) {
                  relativeOffset[i] = parseInt(offset[i].replace('%', '') * _this6.windowWidth / 100);
                } else {
                  relativeOffset[i] = parseInt(offset[i]);
                }
              } else {
                relativeOffset[i] = offset[i];
              }
            }

            left = left + relativeOffset[0];
            right = right - relativeOffset[1];
          } else {
            for (var i = 0; i < offset.length; i++) {
              if (typeof offset[i] == 'string') {
                if (offset[i].includes('%')) {
                  relativeOffset[i] = parseInt(offset[i].replace('%', '') * _this6.windowHeight / 100);
                } else {
                  relativeOffset[i] = parseInt(offset[i]);
                }
              } else {
                relativeOffset[i] = offset[i];
              }
            }

            top = top + relativeOffset[0];
            bottom = bottom - relativeOffset[1];
          }
        }

        var mappedEl = {
          el: el,
          id: id,
          "class": cl,
          section: section,
          top: top,
          middle: middle,
          bottom: bottom,
          left: left,
          right: right,
          offset: offset,
          progress: 0,
          repeat: repeat,
          inView: false,
          call: call,
          speed: speed,
          delay: delay,
          position: position,
          target: targetEl,
          direction: direction,
          sticky: sticky
        };
        _this6.els[id] = mappedEl;

        if (el.classList.contains(cl)) {
          _this6.setInView(_this6.els[id], id);
        }

        if (speed !== false || sticky) {
          _this6.parallaxElements[id] = mappedEl;
        }
      }); // });
    }
  }, {
    key: "addSections",
    value: function addSections() {
      var _this7 = this;

      this.sections = {};
      var sections = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));

      if (sections.length === 0) {
        sections = [this.el];
      }

      sections.forEach(function (section, index) {
        var id = typeof section.dataset[_this7.name + 'Id'] === 'string' ? section.dataset[_this7.name + 'Id'] : 'section' + index;
        var sectionBCR = section.getBoundingClientRect();
        var offset = {
          x: sectionBCR.left - window.innerWidth * 1.5 - getTranslate(section).x,
          y: sectionBCR.top - window.innerHeight * 1.5 - getTranslate(section).y
        };
        var limit = {
          x: offset.x + sectionBCR.width + window.innerWidth * 2,
          y: offset.y + sectionBCR.height + window.innerHeight * 2
        };
        var persistent = typeof section.dataset[_this7.name + 'Persistent'] === 'string';
        section.setAttribute('data-scroll-section-id', id);
        var mappedSection = {
          el: section,
          offset: offset,
          limit: limit,
          inView: false,
          persistent: persistent,
          id: id
        };
        _this7.sections[id] = mappedSection;
      });
    }
  }, {
    key: "transform",
    value: function transform(element, x, y, delay) {
      var transform;

      if (!delay) {
        transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(x, ",").concat(y, ",0,1)");
      } else {
        var start = getTranslate(element);
        var lerpX = lerp(start.x, x, delay);
        var lerpY = lerp(start.y, y, delay);
        transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(lerpX, ",").concat(lerpY, ",0,1)");
      }

      element.style.webkitTransform = transform;
      element.style.msTransform = transform;
      element.style.transform = transform;
    }
  }, {
    key: "transformElements",
    value: function transformElements(isForced) {
      var _this8 = this;

      var setAllElements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var scrollRight = this.instance.scroll.x + this.windowWidth;
      var scrollBottom = this.instance.scroll.y + this.windowHeight;
      var scrollMiddle = {
        x: this.instance.scroll.x + this.windowMiddle.x,
        y: this.instance.scroll.y + this.windowMiddle.y
      };
      Object.entries(this.parallaxElements).forEach(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            i = _ref6[0],
            current = _ref6[1];

        var transformDistance = false;

        if (isForced) {
          transformDistance = 0;
        }

        if (current.inView || setAllElements) {
          switch (current.position) {
            case 'top':
              transformDistance = _this8.instance.scroll[_this8.directionAxis] * -current.speed;
              break;

            case 'elementTop':
              transformDistance = (scrollBottom - current.top) * -current.speed;
              break;

            case 'bottom':
              transformDistance = (_this8.instance.limit[_this8.directionAxis] - scrollBottom + _this8.windowHeight) * current.speed;
              break;

            case 'left':
              transformDistance = _this8.instance.scroll[_this8.directionAxis] * -current.speed;
              break;

            case 'elementLeft':
              transformDistance = (scrollRight - current.left) * -current.speed;
              break;

            case 'right':
              transformDistance = (_this8.instance.limit[_this8.directionAxis] - scrollRight + _this8.windowHeight) * current.speed;
              break;

            default:
              transformDistance = (scrollMiddle[_this8.directionAxis] - current.middle[_this8.directionAxis]) * -current.speed;
              break;
          }
        }

        if (current.sticky) {
          if (current.inView) {
            if (_this8.direction === 'horizontal') {
              transformDistance = _this8.instance.scroll.x - current.left + window.innerWidth;
            } else {
              transformDistance = _this8.instance.scroll.y - current.top + window.innerHeight;
            }
          } else {
            if (_this8.direction === 'horizontal') {
              if (_this8.instance.scroll.x < current.left - window.innerWidth && _this8.instance.scroll.x < current.left - window.innerWidth / 2) {
                transformDistance = 0;
              } else if (_this8.instance.scroll.x > current.right && _this8.instance.scroll.x > current.right + 100) {
                transformDistance = current.right - current.left + window.innerWidth;
              } else {
                transformDistance = false;
              }
            } else {
              if (_this8.instance.scroll.y < current.top - window.innerHeight && _this8.instance.scroll.y < current.top - window.innerHeight / 2) {
                transformDistance = 0;
              } else if (_this8.instance.scroll.y > current.bottom && _this8.instance.scroll.y > current.bottom + 100) {
                transformDistance = current.bottom - current.top + window.innerHeight;
              } else {
                transformDistance = false;
              }
            }
          }
        }

        if (transformDistance !== false) {
          if (current.direction === 'horizontal' || _this8.direction === 'horizontal' && current.direction !== 'vertical') {
            _this8.transform(current.el, transformDistance, 0, isForced ? false : current.delay);
          } else {
            _this8.transform(current.el, 0, transformDistance, isForced ? false : current.delay);
          }
        }
      });
    }
    /**
     * Scroll to a desired target.
     *
     * @param  Available options :
     *          target {node, string, "top", "bottom", int} - The DOM element we want to scroll to
     *          options {object} - Options object for additionnal settings.
     * @return {void}
     */

  }, {
    key: "scrollTo",
    value: function scrollTo(target) {
      var _this9 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // Parse options
      var offset = parseInt(options.offset) || 0; // An offset to apply on top of given `target` or `sourceElem`'s target

      var duration = options.duration || 1000; // Duration of the scroll animation in milliseconds

      var easing = options.easing || [0.25, 0.0, 0.35, 1.0]; // An array of 4 floats between 0 and 1 defining the bezier curve for the animation's easing. See http://greweb.me/bezier-easing-editor/example/

      var disableLerp = options.disableLerp ? true : false; // Lerp effect won't be applied if set to true

      var callback = options.callback ? options.callback : false; // function called when scrollTo completes (note that it won't wait for lerp to stabilize)

      easing = src$1.apply(void 0, _toConsumableArray(easing));

      if (typeof target === 'string') {
        // Selector or boundaries
        if (target === 'top') {
          target = 0;
        } else if (target === 'bottom') {
          target = this.instance.limit.y;
        } else if (target === 'left') {
          target = 0;
        } else if (target === 'right') {
          target = this.instance.limit.x;
        } else {
          target = document.querySelector(target); // If the query fails, abort

          if (!target) {
            return;
          }
        }
      } else if (typeof target === 'number') {
        // Absolute coordinate
        target = parseInt(target);
      } else if (target && target.tagName) ; else {
        console.warn('`target` parameter is not valid');
        return;
      } // We have a target that is not a coordinate yet, get it


      if (typeof target !== 'number') {
        // Verify the given target belongs to this scroll scope
        var targetInScope = getParents(target).includes(this.el);

        if (!targetInScope) {
          // If the target isn't inside our main element, abort any action
          return;
        } // Get target offset from top


        var targetBCR = target.getBoundingClientRect();
        var offsetTop = targetBCR.top;
        var offsetLeft = targetBCR.left; // Try and find the target's parent section

        var targetParents = getParents(target);
        var parentSection = targetParents.find(function (candidate) {
          return Object.entries(_this9.sections) // Get sections associative array as a regular array
          .map(function (_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2),
                key = _ref8[0],
                section = _ref8[1];

            return section;
          }) // map to section only (we dont need the key here)
          .find(function (section) {
            return section.el == candidate;
          }); // finally find the section that matches the candidate
        });
        var parentSectionOffset = 0;

        if (parentSection) {
          parentSectionOffset = getTranslate(parentSection)[this.directionAxis]; // We got a parent section, store it's current offset to remove it later
        } else {
          // if no parent section is found we need to use instance scroll directly
          parentSectionOffset = -this.instance.scroll[this.directionAxis];
        } // Final value of scroll destination : offsetTop + (optional offset given in options) - (parent's section translate)


        if (this.direction === 'horizontal') {
          offset = offsetLeft + offset - parentSectionOffset;
        } else {
          offset = offsetTop + offset - parentSectionOffset;
        }
      } else {
        offset = target + offset;
      } // Actual scrollto
      // ==========================================================================
      // Setup


      var scrollStart = parseFloat(this.instance.delta[this.directionAxis]);
      var scrollTarget = Math.max(0, Math.min(offset, this.instance.limit[this.directionAxis])); // Make sure our target is in the scroll boundaries

      var scrollDiff = scrollTarget - scrollStart;

      var render = function render(p) {
        if (disableLerp) {
          if (_this9.direction === 'horizontal') {
            _this9.setScroll(scrollStart + scrollDiff * p, _this9.instance.delta.y);
          } else {
            _this9.setScroll(_this9.instance.delta.x, scrollStart + scrollDiff * p);
          }
        } else {
          _this9.instance.delta[_this9.directionAxis] = scrollStart + scrollDiff * p;
        }
      }; // Prepare the scroll


      this.animatingScroll = true; // This boolean allows to prevent `checkScroll()` from calling `stopScrolling` when the animation is slow (i.e. at the beginning of an EaseIn)

      this.stopScrolling(); // Stop any movement, allows to kill any other `scrollTo` still happening

      this.startScrolling(); // Restart the scroll
      // Start the animation loop

      var start = Date.now();

      var loop = function loop() {
        var p = (Date.now() - start) / duration; // Animation progress

        if (p > 1) {
          // Animation ends
          render(1);
          _this9.animatingScroll = false;
          if (duration == 0) _this9.update();
          if (callback) callback();
        } else {
          _this9.scrollToRaf = requestAnimationFrame(loop);
          render(easing(p));
        }
      };

      loop();
    }
  }, {
    key: "update",
    value: function update() {
      this.setScrollLimit();
      this.addSections();
      this.addElements();
      this.detectElements();
      this.updateScroll();
      this.transformElements(true);
      this.reinitScrollBar();
      this.checkScroll(true);
    }
  }, {
    key: "startScroll",
    value: function startScroll() {
      this.stop = false;
    }
  }, {
    key: "stopScroll",
    value: function stopScroll() {
      this.stop = true;
    }
  }, {
    key: "setScroll",
    value: function setScroll(x, y) {
      this.instance = _objectSpread2(_objectSpread2({}, this.instance), {}, {
        scroll: {
          x: x,
          y: y
        },
        delta: {
          x: x,
          y: y
        },
        speed: 0
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(_default.prototype), "destroy", this).call(this);

      this.stopScrolling();
      this.html.classList.remove(this.smoothClass);
      this.vs.destroy();
      this.destroyScrollBar();
      window.removeEventListener('keydown', this.checkKey, false);
    }
  }]);

  return _default;
}(_default);

var Smooth = /*#__PURE__*/function () {
  function Smooth() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Smooth);

    this.options = options; // Override default options with given ones

    Object.assign(this, defaults, options);
    this.smartphone = defaults.smartphone;
    if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
    this.tablet = defaults.tablet;
    if (options.tablet) Object.assign(this.tablet, options.tablet);
    if (!this.smooth && this.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible');
    if (!this.tablet.smooth && this.tablet.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)');
    if (!this.smartphone.smooth && this.smartphone.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)');
    this.init();
  }

  _createClass(Smooth, [{
    key: "init",
    value: function init() {
      this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint;
      this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint;

      if (this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet) {
        this.scroll = new _default$2(this.options);
      } else {
        this.scroll = new _default$1(this.options);
      }

      this.scroll.init();

      if (window.location.hash) {
        // Get the hash without the '#' and find the matching element
        var id = window.location.hash.slice(1, window.location.hash.length);
        var target = document.getElementById(id); // If found, scroll to the element

        if (target) this.scroll.scrollTo(target);
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.scroll.update();
    }
  }, {
    key: "start",
    value: function start() {
      this.scroll.startScroll();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.scroll.stopScroll();
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(target, options) {
      this.scroll.scrollTo(target, options);
    }
  }, {
    key: "setScroll",
    value: function setScroll(x, y) {
      this.scroll.setScroll(x, y);
    }
  }, {
    key: "on",
    value: function on(event, func) {
      this.scroll.setEvents(event, func);
    }
  }, {
    key: "off",
    value: function off(event, func) {
      this.scroll.unsetEvents(event, func);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.scroll.destroy();
    }
  }]);

  return Smooth;
}();

var Native = /*#__PURE__*/function () {
  function Native() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Native);

    this.options = options; // Override default options with given ones

    Object.assign(this, defaults, options);
    this.smartphone = defaults.smartphone;
    if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
    this.tablet = defaults.tablet;
    if (options.tablet) Object.assign(this.tablet, options.tablet);
    this.init();
  }

  _createClass(Native, [{
    key: "init",
    value: function init() {
      this.scroll = new _default$1(this.options);
      this.scroll.init();

      if (window.location.hash) {
        // Get the hash without the '#' and find the matching element
        var id = window.location.hash.slice(1, window.location.hash.length);
        var target = document.getElementById(id); // If found, scroll to the element

        if (target) this.scroll.scrollTo(target);
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.scroll.update();
    }
  }, {
    key: "start",
    value: function start() {
      this.scroll.startScroll();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.scroll.stopScroll();
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(target, options) {
      this.scroll.scrollTo(target, options);
    }
  }, {
    key: "setScroll",
    value: function setScroll(x, y) {
      this.scroll.setScroll(x, y);
    }
  }, {
    key: "on",
    value: function on(event, func) {
      this.scroll.setEvents(event, func);
    }
  }, {
    key: "off",
    value: function off(event, func) {
      this.scroll.unsetEvents(event, func);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.scroll.destroy();
    }
  }]);

  return Native;
}();

/* harmony default export */ __webpack_exports__["default"] = (Smooth);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../next/dist/compiled/webpack/global.js */ "./node_modules/next/dist/compiled/webpack/global.js")))

/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/global.js":
/*!***********************************!*\
  !*** (webpack)/webpack/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 149:
/***/ (function(module) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(149);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvY29tb3RpdmUtc2Nyb2xsL2Rpc3QvbG9jb21vdGl2ZS1zY3JvbGwuZXNtLmpzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL3dlYnBhY2svZ2xvYmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsK0JBQStCO0FBQzVFOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3Q0FBd0MsU0FBUzs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLEVBQUU7QUFDVDtBQUNBLFVBQVU7O0FBRVY7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFD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WTtBQUMzQixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBLENBQUM7QUFDRCxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFF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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE1BQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1COztBQUVuQixRQUFRLDJCQUEyQjtBQUNuQztBQUNBLEdBQUc7OztBQUdIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStEOztBQUUvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLG1CQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWCwyQkFBMkIsbUJBQW1CO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLEVBQUUsS0FBSztBQUNkO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUNBQW1DO0FBQzNELHlCQUF5QixPQUFPO0FBQ2hDLGdCQUFnQjtBQUNoQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQ7O0FBRWpELDhDQUE4Qzs7QUFFOUMsNERBQTREOztBQUU1RCwyREFBMkQ7O0FBRTNELGlFQUFpRTs7QUFFakU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Qsa0RBQWtEOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTyxxQ0FBcUM7QUFDNUM7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0Esd0NBQXdDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0EsZ0ZBQWdGO0FBQ2hGLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7OztBQUdBO0FBQ0EsZ0dBQWdHOztBQUVoRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxRQUFROzs7QUFHUixrQ0FBa0M7O0FBRWxDLDJCQUEyQjs7QUFFM0IsNEJBQTRCO0FBQzVCOztBQUVBOztBQUVBO0FBQ0EsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxzREFBc0Qsb0JBQW9CO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDs7QUFFakQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVjLHFFQUFNLEVBQUM7QUFDSTs7Ozs7Ozs7Ozs7OztBQ3puRzFCO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7QUFHQSxPQUFPOztBQUVQLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixDIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGxvY29tb3RpdmUtc2Nyb2xsIHY0LjAuNiB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL2xvY29tb3RpdmVtdGwvbG9jb21vdGl2ZS1zY3JvbGwgKi9cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KTtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkge1xuICB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTtcblxuICByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7XG4gICAgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLFxuICAgICAgICByZXN1bHQ7XG5cbiAgICBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkge1xuICAgICAgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtcblxuICAgICAgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IF9nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBfZ2V0ID0gUmVmbGVjdC5nZXQ7XG4gIH0gZWxzZSB7XG4gICAgX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gX3N1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyIHx8IHRhcmdldCk7XG59XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gIHJldHVybiBhcnIyO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGVsOiBkb2N1bWVudCxcbiAgbmFtZTogJ3Njcm9sbCcsXG4gIG9mZnNldDogWzAsIDBdLFxuICByZXBlYXQ6IGZhbHNlLFxuICBzbW9vdGg6IGZhbHNlLFxuICBkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXG4gIGdlc3R1cmVEaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXG4gIHJlbG9hZE9uQ29udGV4dENoYW5nZTogZmFsc2UsXG4gIGxlcnA6IDAuMSxcbiAgXCJjbGFzc1wiOiAnaXMtaW52aWV3JyxcbiAgc2Nyb2xsYmFyQ29udGFpbmVyOiBmYWxzZSxcbiAgc2Nyb2xsYmFyQ2xhc3M6ICdjLXNjcm9sbGJhcicsXG4gIHNjcm9sbGluZ0NsYXNzOiAnaGFzLXNjcm9sbC1zY3JvbGxpbmcnLFxuICBkcmFnZ2luZ0NsYXNzOiAnaGFzLXNjcm9sbC1kcmFnZ2luZycsXG4gIHNtb290aENsYXNzOiAnaGFzLXNjcm9sbC1zbW9vdGgnLFxuICBpbml0Q2xhc3M6ICdoYXMtc2Nyb2xsLWluaXQnLFxuICBnZXRTcGVlZDogZmFsc2UsXG4gIGdldERpcmVjdGlvbjogZmFsc2UsXG4gIHNjcm9sbEZyb21Bbnl3aGVyZTogZmFsc2UsXG4gIG11bHRpcGxpZXI6IDEsXG4gIGZpcmVmb3hNdWx0aXBsaWVyOiA1MCxcbiAgdG91Y2hNdWx0aXBsaWVyOiAyLFxuICByZXNldE5hdGl2ZVNjcm9sbDogdHJ1ZSxcbiAgdGFibGV0OiB7XG4gICAgc21vb3RoOiBmYWxzZSxcbiAgICBkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXG4gICAgZ2VzdHVyZURpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICBicmVha3BvaW50OiAxMDI0XG4gIH0sXG4gIHNtYXJ0cGhvbmU6IHtcbiAgICBzbW9vdGg6IGZhbHNlLFxuICAgIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICBnZXN0dXJlRGlyZWN0aW9uOiAndmVydGljYWwnXG4gIH1cbn07XG5cbnZhciBfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfZGVmYXVsdCk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB0aGlzLnNtYXJ0cGhvbmUgPSBkZWZhdWx0cy5zbWFydHBob25lO1xuICAgIGlmIChvcHRpb25zLnNtYXJ0cGhvbmUpIE9iamVjdC5hc3NpZ24odGhpcy5zbWFydHBob25lLCBvcHRpb25zLnNtYXJ0cGhvbmUpO1xuICAgIHRoaXMudGFibGV0ID0gZGVmYXVsdHMudGFibGV0O1xuICAgIGlmIChvcHRpb25zLnRhYmxldCkgT2JqZWN0LmFzc2lnbih0aGlzLnRhYmxldCwgb3B0aW9ucy50YWJsZXQpO1xuICAgIHRoaXMubmFtZXNwYWNlID0gJ2xvY29tb3RpdmUnO1xuICAgIHRoaXMuaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB0aGlzLndpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB0aGlzLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy53aW5kb3dNaWRkbGUgPSB7XG4gICAgICB4OiB0aGlzLndpbmRvd1dpZHRoIC8gMixcbiAgICAgIHk6IHRoaXMud2luZG93SGVpZ2h0IC8gMlxuICAgIH07XG4gICAgdGhpcy5lbHMgPSB7fTtcbiAgICB0aGlzLmN1cnJlbnRFbGVtZW50cyA9IHt9O1xuICAgIHRoaXMubGlzdGVuZXJzID0ge307XG4gICAgdGhpcy5oYXNTY3JvbGxUaWNraW5nID0gZmFsc2U7XG4gICAgdGhpcy5oYXNDYWxsRXZlbnRTZXQgPSBmYWxzZTtcbiAgICB0aGlzLmNoZWNrU2Nyb2xsID0gdGhpcy5jaGVja1Njcm9sbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hlY2tSZXNpemUgPSB0aGlzLmNoZWNrUmVzaXplLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGVja0V2ZW50ID0gdGhpcy5jaGVja0V2ZW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IHtcbiAgICAgIHNjcm9sbDoge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwXG4gICAgICB9LFxuICAgICAgbGltaXQ6IHtcbiAgICAgICAgeDogdGhpcy5odG1sLm9mZnNldEhlaWdodCxcbiAgICAgICAgeTogdGhpcy5odG1sLm9mZnNldEhlaWdodFxuICAgICAgfSxcbiAgICAgIGN1cnJlbnRFbGVtZW50czogdGhpcy5jdXJyZW50RWxlbWVudHNcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuaXNNb2JpbGUpIHtcbiAgICAgIGlmICh0aGlzLmlzVGFibGV0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9ICd0YWJsZXQnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gJ3NtYXJ0cGhvbmUnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRleHQgPSAnZGVza3RvcCc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNNb2JpbGUpIHRoaXMuZGlyZWN0aW9uID0gdGhpc1t0aGlzLmNvbnRleHRdLmRpcmVjdGlvbjtcblxuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICB0aGlzLmRpcmVjdGlvbkF4aXMgPSAneCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uQXhpcyA9ICd5JztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5nZXREaXJlY3Rpb24pIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuZGlyZWN0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5nZXREaXJlY3Rpb24pIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc3BlZWQgPSAwO1xuICAgIH1cblxuICAgIHRoaXMuaHRtbC5jbGFzc0xpc3QuYWRkKHRoaXMuaW5pdENsYXNzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5jaGVja1Jlc2l6ZSwgZmFsc2UpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKF9kZWZhdWx0LCBbe1xuICAgIGtleTogXCJpbml0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICB0aGlzLmluaXRFdmVudHMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2hlY2tTY3JvbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2hlY2tTY3JvbGwoKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoU2Nyb2xsKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNoZWNrUmVzaXplXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNoZWNrUmVzaXplKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKCF0aGlzLnJlc2l6ZVRpY2spIHtcbiAgICAgICAgdGhpcy5yZXNpemVUaWNrID0gdHJ1ZTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5yZXNpemUoKTtcblxuICAgICAgICAgIF90aGlzLnJlc2l6ZVRpY2sgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlc2l6ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNpemUoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImNoZWNrQ29udGV4dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjaGVja0NvbnRleHQoKSB7XG4gICAgICBpZiAoIXRoaXMucmVsb2FkT25Db250ZXh0Q2hhbmdlKSByZXR1cm47XG4gICAgICB0aGlzLmlzTW9iaWxlID0gL0FuZHJvaWR8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpIHx8IG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ01hY0ludGVsJyAmJiBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAxIHx8IHRoaXMud2luZG93V2lkdGggPCB0aGlzLnRhYmxldC5icmVha3BvaW50O1xuICAgICAgdGhpcy5pc1RhYmxldCA9IHRoaXMuaXNNb2JpbGUgJiYgdGhpcy53aW5kb3dXaWR0aCA+PSB0aGlzLnRhYmxldC5icmVha3BvaW50O1xuICAgICAgdmFyIG9sZENvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgIGlmICh0aGlzLmlzTW9iaWxlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVGFibGV0KSB7XG4gICAgICAgICAgdGhpcy5jb250ZXh0ID0gJ3RhYmxldCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jb250ZXh0ID0gJ3NtYXJ0cGhvbmUnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSAnZGVza3RvcCc7XG4gICAgICB9XG5cbiAgICAgIGlmIChvbGRDb250ZXh0ICE9IHRoaXMuY29udGV4dCkge1xuICAgICAgICB2YXIgb2xkU21vb3RoID0gb2xkQ29udGV4dCA9PSAnZGVza3RvcCcgPyB0aGlzLnNtb290aCA6IHRoaXNbb2xkQ29udGV4dF0uc21vb3RoO1xuICAgICAgICB2YXIgbmV3U21vb3RoID0gdGhpcy5jb250ZXh0ID09ICdkZXNrdG9wJyA/IHRoaXMuc21vb3RoIDogdGhpc1t0aGlzLmNvbnRleHRdLnNtb290aDtcbiAgICAgICAgaWYgKG9sZFNtb290aCAhPSBuZXdTbW9vdGgpIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaW5pdEV2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0RXZlbnRzKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuc2Nyb2xsVG9FbHMgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1cIi5jb25jYXQodGhpcy5uYW1lLCBcIi10b11cIikpO1xuICAgICAgdGhpcy5zZXRTY3JvbGxUbyA9IHRoaXMuc2V0U2Nyb2xsVG8uYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuc2Nyb2xsVG9FbHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfdGhpczIuc2V0U2Nyb2xsVG8sIGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRTY3JvbGxUb1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRTY3JvbGxUbyhldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuc2Nyb2xsVG8oZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLVwiLmNvbmNhdCh0aGlzLm5hbWUsIFwiLWhyZWZcIikpIHx8IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJyksIHtcbiAgICAgICAgb2Zmc2V0OiBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtXCIuY29uY2F0KHRoaXMubmFtZSwgXCItb2Zmc2V0XCIpKVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFkZEVsZW1lbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEVsZW1lbnRzKCkge31cbiAgfSwge1xuICAgIGtleTogXCJkZXRlY3RFbGVtZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXRlY3RFbGVtZW50cyhoYXNDYWxsRXZlbnRTZXQpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgc2Nyb2xsVG9wID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueTtcbiAgICAgIHZhciBzY3JvbGxCb3R0b20gPSBzY3JvbGxUb3AgKyB0aGlzLndpbmRvd0hlaWdodDtcbiAgICAgIHZhciBzY3JvbGxMZWZ0ID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueDtcbiAgICAgIHZhciBzY3JvbGxSaWdodCA9IHNjcm9sbExlZnQgKyB0aGlzLndpbmRvd1dpZHRoO1xuICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5lbHMpLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG4gICAgICAgICAgICBpID0gX3JlZjJbMF0sXG4gICAgICAgICAgICBlbCA9IF9yZWYyWzFdO1xuXG4gICAgICAgIGlmIChlbCAmJiAoIWVsLmluVmlldyB8fCBoYXNDYWxsRXZlbnRTZXQpKSB7XG4gICAgICAgICAgaWYgKF90aGlzMy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgaWYgKHNjcm9sbFJpZ2h0ID49IGVsLmxlZnQgJiYgc2Nyb2xsTGVmdCA8IGVsLnJpZ2h0KSB7XG4gICAgICAgICAgICAgIF90aGlzMy5zZXRJblZpZXcoZWwsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsQm90dG9tID49IGVsLnRvcCAmJiBzY3JvbGxUb3AgPCBlbC5ib3R0b20pIHtcbiAgICAgICAgICAgICAgX3RoaXMzLnNldEluVmlldyhlbCwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsICYmIGVsLmluVmlldykge1xuICAgICAgICAgIGlmIChfdGhpczMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IGVsLnJpZ2h0IC0gZWwubGVmdDtcbiAgICAgICAgICAgIGVsLnByb2dyZXNzID0gKF90aGlzMy5pbnN0YW5jZS5zY3JvbGwueCAtIChlbC5sZWZ0IC0gX3RoaXMzLndpbmRvd1dpZHRoKSkgLyAod2lkdGggKyBfdGhpczMud2luZG93V2lkdGgpO1xuXG4gICAgICAgICAgICBpZiAoc2Nyb2xsUmlnaHQgPCBlbC5sZWZ0IHx8IHNjcm9sbExlZnQgPiBlbC5yaWdodCkge1xuICAgICAgICAgICAgICBfdGhpczMuc2V0T3V0T2ZWaWV3KGVsLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGhlaWdodCA9IGVsLmJvdHRvbSAtIGVsLnRvcDtcbiAgICAgICAgICAgIGVsLnByb2dyZXNzID0gKF90aGlzMy5pbnN0YW5jZS5zY3JvbGwueSAtIChlbC50b3AgLSBfdGhpczMud2luZG93SGVpZ2h0KSkgLyAoaGVpZ2h0ICsgX3RoaXMzLndpbmRvd0hlaWdodCk7XG5cbiAgICAgICAgICAgIGlmIChzY3JvbGxCb3R0b20gPCBlbC50b3AgfHwgc2Nyb2xsVG9wID4gZWwuYm90dG9tKSB7XG4gICAgICAgICAgICAgIF90aGlzMy5zZXRPdXRPZlZpZXcoZWwsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7IC8vIHRoaXMuZWxzID0gdGhpcy5lbHMuZmlsdGVyKChjdXJyZW50LCBpKSA9PiB7XG4gICAgICAvLyAgICAgcmV0dXJuIGN1cnJlbnQgIT09IG51bGw7XG4gICAgICAvLyB9KTtcblxuICAgICAgdGhpcy5oYXNTY3JvbGxUaWNraW5nID0gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldEluVmlld1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRJblZpZXcoY3VycmVudCwgaSkge1xuICAgICAgdGhpcy5lbHNbaV0uaW5WaWV3ID0gdHJ1ZTtcbiAgICAgIGN1cnJlbnQuZWwuY2xhc3NMaXN0LmFkZChjdXJyZW50W1wiY2xhc3NcIl0pO1xuICAgICAgdGhpcy5jdXJyZW50RWxlbWVudHNbaV0gPSBjdXJyZW50O1xuXG4gICAgICBpZiAoY3VycmVudC5jYWxsICYmIHRoaXMuaGFzQ2FsbEV2ZW50U2V0KSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDYWxsKGN1cnJlbnQsICdlbnRlcicpO1xuXG4gICAgICAgIGlmICghY3VycmVudC5yZXBlYXQpIHtcbiAgICAgICAgICB0aGlzLmVsc1tpXS5jYWxsID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gaWYgKCFjdXJyZW50LnJlcGVhdCAmJiAhY3VycmVudC5zcGVlZCAmJiAhY3VycmVudC5zdGlja3kpIHtcbiAgICAgIC8vICAgICBpZiAoIWN1cnJlbnQuY2FsbCB8fCBjdXJyZW50LmNhbGwgJiYgdGhpcy5oYXNDYWxsRXZlbnRTZXQpIHtcbiAgICAgIC8vICAgICAgICB0aGlzLmVsc1tpXSA9IG51bGxcbiAgICAgIC8vICAgICB9XG4gICAgICAvLyB9XG5cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0T3V0T2ZWaWV3XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldE91dE9mVmlldyhjdXJyZW50LCBpKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgLy8gaWYgKGN1cnJlbnQucmVwZWF0IHx8IGN1cnJlbnQuc3BlZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5lbHNbaV0uaW5WaWV3ID0gZmFsc2U7IC8vIH1cblxuICAgICAgT2JqZWN0LmtleXModGhpcy5jdXJyZW50RWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGVsID09PSBpICYmIGRlbGV0ZSBfdGhpczQuY3VycmVudEVsZW1lbnRzW2VsXTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoY3VycmVudC5jYWxsICYmIHRoaXMuaGFzQ2FsbEV2ZW50U2V0KSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDYWxsKGN1cnJlbnQsICdleGl0Jyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50LnJlcGVhdCkge1xuICAgICAgICBjdXJyZW50LmVsLmNsYXNzTGlzdC5yZW1vdmUoY3VycmVudFtcImNsYXNzXCJdKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGlzcGF0Y2hDYWxsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc3BhdGNoQ2FsbChjdXJyZW50LCB3YXkpIHtcbiAgICAgIHRoaXMuY2FsbFdheSA9IHdheTtcbiAgICAgIHRoaXMuY2FsbFZhbHVlID0gY3VycmVudC5jYWxsLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLnRyaW0oKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jYWxsT2JqID0gY3VycmVudDtcbiAgICAgIGlmICh0aGlzLmNhbGxWYWx1ZS5sZW5ndGggPT0gMSkgdGhpcy5jYWxsVmFsdWUgPSB0aGlzLmNhbGxWYWx1ZVswXTtcbiAgICAgIHZhciBjYWxsRXZlbnQgPSBuZXcgRXZlbnQodGhpcy5uYW1lc3BhY2UgKyAnY2FsbCcpO1xuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KGNhbGxFdmVudCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRpc3BhdGNoU2Nyb2xsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc3BhdGNoU2Nyb2xsKCkge1xuICAgICAgdmFyIHNjcm9sbEV2ZW50ID0gbmV3IEV2ZW50KHRoaXMubmFtZXNwYWNlICsgJ3Njcm9sbCcpO1xuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KHNjcm9sbEV2ZW50KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0RXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEV2ZW50cyhldmVudCwgZnVuYykge1xuICAgICAgaWYgKCF0aGlzLmxpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgICB9XG5cbiAgICAgIHZhciBsaXN0ID0gdGhpcy5saXN0ZW5lcnNbZXZlbnRdO1xuICAgICAgbGlzdC5wdXNoKGZ1bmMpO1xuXG4gICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKHRoaXMubmFtZXNwYWNlICsgZXZlbnQsIHRoaXMuY2hlY2tFdmVudCwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQgPT09ICdjYWxsJykge1xuICAgICAgICB0aGlzLmhhc0NhbGxFdmVudFNldCA9IHRydWU7XG4gICAgICAgIHRoaXMuZGV0ZWN0RWxlbWVudHModHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVuc2V0RXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuc2V0RXZlbnRzKGV2ZW50LCBmdW5jKSB7XG4gICAgICBpZiAoIXRoaXMubGlzdGVuZXJzW2V2ZW50XSkgcmV0dXJuO1xuICAgICAgdmFyIGxpc3QgPSB0aGlzLmxpc3RlbmVyc1tldmVudF07XG4gICAgICB2YXIgaW5kZXggPSBsaXN0LmluZGV4T2YoZnVuYyk7XG4gICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm47XG4gICAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgIGlmIChsaXN0LmluZGV4ID09PSAwKSB7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWVzcGFjZSArIGV2ZW50LCB0aGlzLmNoZWNrRXZlbnQsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2hlY2tFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjaGVja0V2ZW50KGV2ZW50KSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgdmFyIG5hbWUgPSBldmVudC50eXBlLnJlcGxhY2UodGhpcy5uYW1lc3BhY2UsICcnKTtcbiAgICAgIHZhciBsaXN0ID0gdGhpcy5saXN0ZW5lcnNbbmFtZV07XG4gICAgICBpZiAoIWxpc3QgfHwgbGlzdC5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbiAoZnVuYykge1xuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICBjYXNlICdzY3JvbGwnOlxuICAgICAgICAgICAgcmV0dXJuIGZ1bmMoX3RoaXM1Lmluc3RhbmNlKTtcblxuICAgICAgICAgIGNhc2UgJ2NhbGwnOlxuICAgICAgICAgICAgcmV0dXJuIGZ1bmMoX3RoaXM1LmNhbGxWYWx1ZSwgX3RoaXM1LmNhbGxXYXksIF90aGlzNS5jYWxsT2JqKTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gZnVuYygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhcnRTY3JvbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnRTY3JvbGwoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BTY3JvbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcFNjcm9sbCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0U2Nyb2xsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFNjcm9sbCh4LCB5KSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbCA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVzdHJveVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmNoZWNrUmVzaXplLCBmYWxzZSk7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmxpc3RlbmVycykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgX3RoaXM2LmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoX3RoaXM2Lm5hbWVzcGFjZSArIGV2ZW50LCBfdGhpczYuY2hlY2tFdmVudCwgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmxpc3RlbmVycyA9IHt9O1xuICAgICAgdGhpcy5zY3JvbGxUb0Vscy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIF90aGlzNi5zZXRTY3JvbGxUbywgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmh0bWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmluaXRDbGFzcyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIF9kZWZhdWx0O1xufSgpO1xuXG52YXIgY29tbW9uanNHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fTtcblxuZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuXHRyZXR1cm4gbW9kdWxlID0geyBleHBvcnRzOiB7fSB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG59XG5cbnZhciBzbW9vdGhzY3JvbGwgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4vKiBzbW9vdGhzY3JvbGwgdjAuNC40IC0gMjAxOSAtIER1c3RhbiBLYXN0ZW4sIEplcmVtaWFzIE1lbmljaGVsbGkgLSBNSVQgTGljZW5zZSAqL1xuKGZ1bmN0aW9uICgpIHtcblxuICAvLyBwb2x5ZmlsbFxuICBmdW5jdGlvbiBwb2x5ZmlsbCgpIHtcbiAgICAvLyBhbGlhc2VzXG4gICAgdmFyIHcgPSB3aW5kb3c7XG4gICAgdmFyIGQgPSBkb2N1bWVudDtcblxuICAgIC8vIHJldHVybiBpZiBzY3JvbGwgYmVoYXZpb3IgaXMgc3VwcG9ydGVkIGFuZCBwb2x5ZmlsbCBpcyBub3QgZm9yY2VkXG4gICAgaWYgKFxuICAgICAgJ3Njcm9sbEJlaGF2aW9yJyBpbiBkLmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJlxuICAgICAgdy5fX2ZvcmNlU21vb3RoU2Nyb2xsUG9seWZpbGxfXyAhPT0gdHJ1ZVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGdsb2JhbHNcbiAgICB2YXIgRWxlbWVudCA9IHcuSFRNTEVsZW1lbnQgfHwgdy5FbGVtZW50O1xuICAgIHZhciBTQ1JPTExfVElNRSA9IDQ2ODtcblxuICAgIC8vIG9iamVjdCBnYXRoZXJpbmcgb3JpZ2luYWwgc2Nyb2xsIG1ldGhvZHNcbiAgICB2YXIgb3JpZ2luYWwgPSB7XG4gICAgICBzY3JvbGw6IHcuc2Nyb2xsIHx8IHcuc2Nyb2xsVG8sXG4gICAgICBzY3JvbGxCeTogdy5zY3JvbGxCeSxcbiAgICAgIGVsZW1lbnRTY3JvbGw6IEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbCB8fCBzY3JvbGxFbGVtZW50LFxuICAgICAgc2Nyb2xsSW50b1ZpZXc6IEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEludG9WaWV3XG4gICAgfTtcblxuICAgIC8vIGRlZmluZSB0aW1pbmcgbWV0aG9kXG4gICAgdmFyIG5vdyA9XG4gICAgICB3LnBlcmZvcm1hbmNlICYmIHcucGVyZm9ybWFuY2Uubm93XG4gICAgICAgID8gdy5wZXJmb3JtYW5jZS5ub3cuYmluZCh3LnBlcmZvcm1hbmNlKVxuICAgICAgICA6IERhdGUubm93O1xuXG4gICAgLyoqXG4gICAgICogaW5kaWNhdGVzIGlmIGEgdGhlIGN1cnJlbnQgYnJvd3NlciBpcyBtYWRlIGJ5IE1pY3Jvc29mdFxuICAgICAqIEBtZXRob2QgaXNNaWNyb3NvZnRCcm93c2VyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHVzZXJBZ2VudFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzTWljcm9zb2Z0QnJvd3Nlcih1c2VyQWdlbnQpIHtcbiAgICAgIHZhciB1c2VyQWdlbnRQYXR0ZXJucyA9IFsnTVNJRSAnLCAnVHJpZGVudC8nLCAnRWRnZS8nXTtcblxuICAgICAgcmV0dXJuIG5ldyBSZWdFeHAodXNlckFnZW50UGF0dGVybnMuam9pbignfCcpKS50ZXN0KHVzZXJBZ2VudCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBJRSBoYXMgcm91bmRpbmcgYnVnIHJvdW5kaW5nIGRvd24gY2xpZW50SGVpZ2h0IGFuZCBjbGllbnRXaWR0aCBhbmRcbiAgICAgKiByb3VuZGluZyB1cCBzY3JvbGxIZWlnaHQgYW5kIHNjcm9sbFdpZHRoIGNhdXNpbmcgZmFsc2UgcG9zaXRpdmVzXG4gICAgICogb24gaGFzU2Nyb2xsYWJsZVNwYWNlXG4gICAgICovXG4gICAgdmFyIFJPVU5ESU5HX1RPTEVSQU5DRSA9IGlzTWljcm9zb2Z0QnJvd3Nlcih3Lm5hdmlnYXRvci51c2VyQWdlbnQpID8gMSA6IDA7XG5cbiAgICAvKipcbiAgICAgKiBjaGFuZ2VzIHNjcm9sbCBwb3NpdGlvbiBpbnNpZGUgYW4gZWxlbWVudFxuICAgICAqIEBtZXRob2Qgc2Nyb2xsRWxlbWVudFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNjcm9sbEVsZW1lbnQoeCwgeSkge1xuICAgICAgdGhpcy5zY3JvbGxMZWZ0ID0geDtcbiAgICAgIHRoaXMuc2Nyb2xsVG9wID0geTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXR1cm5zIHJlc3VsdCBvZiBhcHBseWluZyBlYXNlIG1hdGggZnVuY3Rpb24gdG8gYSBudW1iZXJcbiAgICAgKiBAbWV0aG9kIGVhc2VcbiAgICAgKiBAcGFyYW0ge051bWJlcn0ga1xuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZnVuY3Rpb24gZWFzZShrKSB7XG4gICAgICByZXR1cm4gMC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogaykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGluZGljYXRlcyBpZiBhIHNtb290aCBiZWhhdmlvciBzaG91bGQgYmUgYXBwbGllZFxuICAgICAqIEBtZXRob2Qgc2hvdWxkQmFpbE91dFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfE9iamVjdH0gZmlyc3RBcmdcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzaG91bGRCYWlsT3V0KGZpcnN0QXJnKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGZpcnN0QXJnID09PSBudWxsIHx8XG4gICAgICAgIHR5cGVvZiBmaXJzdEFyZyAhPT0gJ29iamVjdCcgfHxcbiAgICAgICAgZmlyc3RBcmcuYmVoYXZpb3IgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICBmaXJzdEFyZy5iZWhhdmlvciA9PT0gJ2F1dG8nIHx8XG4gICAgICAgIGZpcnN0QXJnLmJlaGF2aW9yID09PSAnaW5zdGFudCdcbiAgICAgICkge1xuICAgICAgICAvLyBmaXJzdCBhcmd1bWVudCBpcyBub3QgYW4gb2JqZWN0L251bGxcbiAgICAgICAgLy8gb3IgYmVoYXZpb3IgaXMgYXV0bywgaW5zdGFudCBvciB1bmRlZmluZWRcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZmlyc3RBcmcgPT09ICdvYmplY3QnICYmIGZpcnN0QXJnLmJlaGF2aW9yID09PSAnc21vb3RoJykge1xuICAgICAgICAvLyBmaXJzdCBhcmd1bWVudCBpcyBhbiBvYmplY3QgYW5kIGJlaGF2aW9yIGlzIHNtb290aFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIHRocm93IGVycm9yIHdoZW4gYmVoYXZpb3IgaXMgbm90IHN1cHBvcnRlZFxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgJ2JlaGF2aW9yIG1lbWJlciBvZiBTY3JvbGxPcHRpb25zICcgK1xuICAgICAgICAgIGZpcnN0QXJnLmJlaGF2aW9yICtcbiAgICAgICAgICAnIGlzIG5vdCBhIHZhbGlkIHZhbHVlIGZvciBlbnVtZXJhdGlvbiBTY3JvbGxCZWhhdmlvci4nXG4gICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGluZGljYXRlcyBpZiBhbiBlbGVtZW50IGhhcyBzY3JvbGxhYmxlIHNwYWNlIGluIHRoZSBwcm92aWRlZCBheGlzXG4gICAgICogQG1ldGhvZCBoYXNTY3JvbGxhYmxlU3BhY2VcbiAgICAgKiBAcGFyYW0ge05vZGV9IGVsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGF4aXNcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBoYXNTY3JvbGxhYmxlU3BhY2UoZWwsIGF4aXMpIHtcbiAgICAgIGlmIChheGlzID09PSAnWScpIHtcbiAgICAgICAgcmV0dXJuIGVsLmNsaWVudEhlaWdodCArIFJPVU5ESU5HX1RPTEVSQU5DRSA8IGVsLnNjcm9sbEhlaWdodDtcbiAgICAgIH1cblxuICAgICAgaWYgKGF4aXMgPT09ICdYJykge1xuICAgICAgICByZXR1cm4gZWwuY2xpZW50V2lkdGggKyBST1VORElOR19UT0xFUkFOQ0UgPCBlbC5zY3JvbGxXaWR0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYW4gZWxlbWVudCBoYXMgYSBzY3JvbGxhYmxlIG92ZXJmbG93IHByb3BlcnR5IGluIHRoZSBheGlzXG4gICAgICogQG1ldGhvZCBjYW5PdmVyZmxvd1xuICAgICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYXhpc1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNhbk92ZXJmbG93KGVsLCBheGlzKSB7XG4gICAgICB2YXIgb3ZlcmZsb3dWYWx1ZSA9IHcuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbClbJ292ZXJmbG93JyArIGF4aXNdO1xuXG4gICAgICByZXR1cm4gb3ZlcmZsb3dWYWx1ZSA9PT0gJ2F1dG8nIHx8IG92ZXJmbG93VmFsdWUgPT09ICdzY3JvbGwnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGluZGljYXRlcyBpZiBhbiBlbGVtZW50IGNhbiBiZSBzY3JvbGxlZCBpbiBlaXRoZXIgYXhpc1xuICAgICAqIEBtZXRob2QgaXNTY3JvbGxhYmxlXG4gICAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBheGlzXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNTY3JvbGxhYmxlKGVsKSB7XG4gICAgICB2YXIgaXNTY3JvbGxhYmxlWSA9IGhhc1Njcm9sbGFibGVTcGFjZShlbCwgJ1knKSAmJiBjYW5PdmVyZmxvdyhlbCwgJ1knKTtcbiAgICAgIHZhciBpc1Njcm9sbGFibGVYID0gaGFzU2Nyb2xsYWJsZVNwYWNlKGVsLCAnWCcpICYmIGNhbk92ZXJmbG93KGVsLCAnWCcpO1xuXG4gICAgICByZXR1cm4gaXNTY3JvbGxhYmxlWSB8fCBpc1Njcm9sbGFibGVYO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGZpbmRzIHNjcm9sbGFibGUgcGFyZW50IG9mIGFuIGVsZW1lbnRcbiAgICAgKiBAbWV0aG9kIGZpbmRTY3JvbGxhYmxlUGFyZW50XG4gICAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgICAqIEByZXR1cm5zIHtOb2RlfSBlbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZpbmRTY3JvbGxhYmxlUGFyZW50KGVsKSB7XG4gICAgICB3aGlsZSAoZWwgIT09IGQuYm9keSAmJiBpc1Njcm9sbGFibGUoZWwpID09PSBmYWxzZSkge1xuICAgICAgICBlbCA9IGVsLnBhcmVudE5vZGUgfHwgZWwuaG9zdDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNlbGYgaW52b2tlZCBmdW5jdGlvbiB0aGF0LCBnaXZlbiBhIGNvbnRleHQsIHN0ZXBzIHRocm91Z2ggc2Nyb2xsaW5nXG4gICAgICogQG1ldGhvZCBzdGVwXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHRcbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHN0ZXAoY29udGV4dCkge1xuICAgICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICAgIHZhciB2YWx1ZTtcbiAgICAgIHZhciBjdXJyZW50WDtcbiAgICAgIHZhciBjdXJyZW50WTtcbiAgICAgIHZhciBlbGFwc2VkID0gKHRpbWUgLSBjb250ZXh0LnN0YXJ0VGltZSkgLyBTQ1JPTExfVElNRTtcblxuICAgICAgLy8gYXZvaWQgZWxhcHNlZCB0aW1lcyBoaWdoZXIgdGhhbiBvbmVcbiAgICAgIGVsYXBzZWQgPSBlbGFwc2VkID4gMSA/IDEgOiBlbGFwc2VkO1xuXG4gICAgICAvLyBhcHBseSBlYXNpbmcgdG8gZWxhcHNlZCB0aW1lXG4gICAgICB2YWx1ZSA9IGVhc2UoZWxhcHNlZCk7XG5cbiAgICAgIGN1cnJlbnRYID0gY29udGV4dC5zdGFydFggKyAoY29udGV4dC54IC0gY29udGV4dC5zdGFydFgpICogdmFsdWU7XG4gICAgICBjdXJyZW50WSA9IGNvbnRleHQuc3RhcnRZICsgKGNvbnRleHQueSAtIGNvbnRleHQuc3RhcnRZKSAqIHZhbHVlO1xuXG4gICAgICBjb250ZXh0Lm1ldGhvZC5jYWxsKGNvbnRleHQuc2Nyb2xsYWJsZSwgY3VycmVudFgsIGN1cnJlbnRZKTtcblxuICAgICAgLy8gc2Nyb2xsIG1vcmUgaWYgd2UgaGF2ZSBub3QgcmVhY2hlZCBvdXIgZGVzdGluYXRpb25cbiAgICAgIGlmIChjdXJyZW50WCAhPT0gY29udGV4dC54IHx8IGN1cnJlbnRZICE9PSBjb250ZXh0LnkpIHtcbiAgICAgICAgdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcC5iaW5kKHcsIGNvbnRleHQpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzY3JvbGxzIHdpbmRvdyBvciBlbGVtZW50IHdpdGggYSBzbW9vdGggYmVoYXZpb3JcbiAgICAgKiBAbWV0aG9kIHNtb290aFNjcm9sbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fE5vZGV9IGVsXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geVxuICAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAgICovXG4gICAgZnVuY3Rpb24gc21vb3RoU2Nyb2xsKGVsLCB4LCB5KSB7XG4gICAgICB2YXIgc2Nyb2xsYWJsZTtcbiAgICAgIHZhciBzdGFydFg7XG4gICAgICB2YXIgc3RhcnRZO1xuICAgICAgdmFyIG1ldGhvZDtcbiAgICAgIHZhciBzdGFydFRpbWUgPSBub3coKTtcblxuICAgICAgLy8gZGVmaW5lIHNjcm9sbCBjb250ZXh0XG4gICAgICBpZiAoZWwgPT09IGQuYm9keSkge1xuICAgICAgICBzY3JvbGxhYmxlID0gdztcbiAgICAgICAgc3RhcnRYID0gdy5zY3JvbGxYIHx8IHcucGFnZVhPZmZzZXQ7XG4gICAgICAgIHN0YXJ0WSA9IHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0O1xuICAgICAgICBtZXRob2QgPSBvcmlnaW5hbC5zY3JvbGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY3JvbGxhYmxlID0gZWw7XG4gICAgICAgIHN0YXJ0WCA9IGVsLnNjcm9sbExlZnQ7XG4gICAgICAgIHN0YXJ0WSA9IGVsLnNjcm9sbFRvcDtcbiAgICAgICAgbWV0aG9kID0gc2Nyb2xsRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgLy8gc2Nyb2xsIGxvb3Bpbmcgb3ZlciBhIGZyYW1lXG4gICAgICBzdGVwKHtcbiAgICAgICAgc2Nyb2xsYWJsZTogc2Nyb2xsYWJsZSxcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgIHN0YXJ0VGltZTogc3RhcnRUaW1lLFxuICAgICAgICBzdGFydFg6IHN0YXJ0WCxcbiAgICAgICAgc3RhcnRZOiBzdGFydFksXG4gICAgICAgIHg6IHgsXG4gICAgICAgIHk6IHlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE9SSUdJTkFMIE1FVEhPRFMgT1ZFUlJJREVTXG4gICAgLy8gdy5zY3JvbGwgYW5kIHcuc2Nyb2xsVG9cbiAgICB3LnNjcm9sbCA9IHcuc2Nyb2xsVG8gPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGF2b2lkIGFjdGlvbiB3aGVuIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkXG4gICAgICBpZiAoYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG4gICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pID09PSB0cnVlKSB7XG4gICAgICAgIG9yaWdpbmFsLnNjcm9sbC5jYWxsKFxuICAgICAgICAgIHcsXG4gICAgICAgICAgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBhcmd1bWVudHNbMF0ubGVmdFxuICAgICAgICAgICAgOiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnb2JqZWN0J1xuICAgICAgICAgICAgICA/IGFyZ3VtZW50c1swXVxuICAgICAgICAgICAgICA6IHcuc2Nyb2xsWCB8fCB3LnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgIC8vIHVzZSB0b3AgcHJvcCwgc2Vjb25kIGFyZ3VtZW50IGlmIHByZXNlbnQgb3IgZmFsbGJhY2sgdG8gc2Nyb2xsWVxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBhcmd1bWVudHNbMF0udG9wXG4gICAgICAgICAgICA6IGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgID8gYXJndW1lbnRzWzFdXG4gICAgICAgICAgICAgIDogdy5zY3JvbGxZIHx8IHcucGFnZVlPZmZzZXRcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcbiAgICAgIHNtb290aFNjcm9sbC5jYWxsKFxuICAgICAgICB3LFxuICAgICAgICBkLmJvZHksXG4gICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IH5+YXJndW1lbnRzWzBdLmxlZnRcbiAgICAgICAgICA6IHcuc2Nyb2xsWCB8fCB3LnBhZ2VYT2Zmc2V0LFxuICAgICAgICBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IH5+YXJndW1lbnRzWzBdLnRvcFxuICAgICAgICAgIDogdy5zY3JvbGxZIHx8IHcucGFnZVlPZmZzZXRcbiAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIHcuc2Nyb2xsQnlcbiAgICB3LnNjcm9sbEJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhdm9pZCBhY3Rpb24gd2hlbiBubyBhcmd1bWVudHMgYXJlIHBhc3NlZFxuICAgICAgaWYgKGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSkge1xuICAgICAgICBvcmlnaW5hbC5zY3JvbGxCeS5jYWxsKFxuICAgICAgICAgIHcsXG4gICAgICAgICAgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBhcmd1bWVudHNbMF0ubGVmdFxuICAgICAgICAgICAgOiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnb2JqZWN0JyA/IGFyZ3VtZW50c1swXSA6IDAsXG4gICAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGFyZ3VtZW50c1swXS50b3BcbiAgICAgICAgICAgIDogYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBMRVQgVEhFIFNNT09USE5FU1MgQkVHSU4hXG4gICAgICBzbW9vdGhTY3JvbGwuY2FsbChcbiAgICAgICAgdyxcbiAgICAgICAgZC5ib2R5LFxuICAgICAgICB+fmFyZ3VtZW50c1swXS5sZWZ0ICsgKHcuc2Nyb2xsWCB8fCB3LnBhZ2VYT2Zmc2V0KSxcbiAgICAgICAgfn5hcmd1bWVudHNbMF0udG9wICsgKHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0KVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy8gRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsIGFuZCBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxUb1xuICAgIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbCA9IEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbFRvID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhdm9pZCBhY3Rpb24gd2hlbiBubyBhcmd1bWVudHMgYXJlIHBhc3NlZFxuICAgICAgaWYgKGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSA9PT0gdHJ1ZSkge1xuICAgICAgICAvLyBpZiBvbmUgbnVtYmVyIGlzIHBhc3NlZCwgdGhyb3cgZXJyb3IgdG8gbWF0Y2ggRmlyZWZveCBpbXBsZW1lbnRhdGlvblxuICAgICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ251bWJlcicgJiYgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1ZhbHVlIGNvdWxkIG5vdCBiZSBjb252ZXJ0ZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9yaWdpbmFsLmVsZW1lbnRTY3JvbGwuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIC8vIHVzZSBsZWZ0IHByb3AsIGZpcnN0IG51bWJlciBhcmd1bWVudCBvciBmYWxsYmFjayB0byBzY3JvbGxMZWZ0XG4gICAgICAgICAgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS5sZWZ0XG4gICAgICAgICAgICA6IHR5cGVvZiBhcmd1bWVudHNbMF0gIT09ICdvYmplY3QnID8gfn5hcmd1bWVudHNbMF0gOiB0aGlzLnNjcm9sbExlZnQsXG4gICAgICAgICAgLy8gdXNlIHRvcCBwcm9wLCBzZWNvbmQgYXJndW1lbnQgb3IgZmFsbGJhY2sgdG8gc2Nyb2xsVG9wXG4gICAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IH5+YXJndW1lbnRzWzBdLnRvcFxuICAgICAgICAgICAgOiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IH5+YXJndW1lbnRzWzFdIDogdGhpcy5zY3JvbGxUb3BcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBsZWZ0ID0gYXJndW1lbnRzWzBdLmxlZnQ7XG4gICAgICB2YXIgdG9wID0gYXJndW1lbnRzWzBdLnRvcDtcblxuICAgICAgLy8gTEVUIFRIRSBTTU9PVEhORVNTIEJFR0lOIVxuICAgICAgc21vb3RoU2Nyb2xsLmNhbGwoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHR5cGVvZiBsZWZ0ID09PSAndW5kZWZpbmVkJyA/IHRoaXMuc2Nyb2xsTGVmdCA6IH5+bGVmdCxcbiAgICAgICAgdHlwZW9mIHRvcCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnNjcm9sbFRvcCA6IH5+dG9wXG4gICAgICApO1xuICAgIH07XG5cbiAgICAvLyBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxCeVxuICAgIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhdm9pZCBhY3Rpb24gd2hlbiBubyBhcmd1bWVudHMgYXJlIHBhc3NlZFxuICAgICAgaWYgKGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSA9PT0gdHJ1ZSkge1xuICAgICAgICBvcmlnaW5hbC5lbGVtZW50U2Nyb2xsLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IH5+YXJndW1lbnRzWzBdLmxlZnQgKyB0aGlzLnNjcm9sbExlZnRcbiAgICAgICAgICAgIDogfn5hcmd1bWVudHNbMF0gKyB0aGlzLnNjcm9sbExlZnQsXG4gICAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IH5+YXJndW1lbnRzWzBdLnRvcCArIHRoaXMuc2Nyb2xsVG9wXG4gICAgICAgICAgICA6IH5+YXJndW1lbnRzWzFdICsgdGhpcy5zY3JvbGxUb3BcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2Nyb2xsKHtcbiAgICAgICAgbGVmdDogfn5hcmd1bWVudHNbMF0ubGVmdCArIHRoaXMuc2Nyb2xsTGVmdCxcbiAgICAgICAgdG9wOiB+fmFyZ3VtZW50c1swXS50b3AgKyB0aGlzLnNjcm9sbFRvcCxcbiAgICAgICAgYmVoYXZpb3I6IGFyZ3VtZW50c1swXS5iZWhhdmlvclxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEludG9WaWV3XG4gICAgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsSW50b1ZpZXcgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcbiAgICAgICAgb3JpZ2luYWwuc2Nyb2xsSW50b1ZpZXcuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGFyZ3VtZW50c1swXVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gTEVUIFRIRSBTTU9PVEhORVNTIEJFR0lOIVxuICAgICAgdmFyIHNjcm9sbGFibGVQYXJlbnQgPSBmaW5kU2Nyb2xsYWJsZVBhcmVudCh0aGlzKTtcbiAgICAgIHZhciBwYXJlbnRSZWN0cyA9IHNjcm9sbGFibGVQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgY2xpZW50UmVjdHMgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBpZiAoc2Nyb2xsYWJsZVBhcmVudCAhPT0gZC5ib2R5KSB7XG4gICAgICAgIC8vIHJldmVhbCBlbGVtZW50IGluc2lkZSBwYXJlbnRcbiAgICAgICAgc21vb3RoU2Nyb2xsLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBzY3JvbGxhYmxlUGFyZW50LFxuICAgICAgICAgIHNjcm9sbGFibGVQYXJlbnQuc2Nyb2xsTGVmdCArIGNsaWVudFJlY3RzLmxlZnQgLSBwYXJlbnRSZWN0cy5sZWZ0LFxuICAgICAgICAgIHNjcm9sbGFibGVQYXJlbnQuc2Nyb2xsVG9wICsgY2xpZW50UmVjdHMudG9wIC0gcGFyZW50UmVjdHMudG9wXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gcmV2ZWFsIHBhcmVudCBpbiB2aWV3cG9ydCB1bmxlc3MgaXMgZml4ZWRcbiAgICAgICAgaWYgKHcuZ2V0Q29tcHV0ZWRTdHlsZShzY3JvbGxhYmxlUGFyZW50KS5wb3NpdGlvbiAhPT0gJ2ZpeGVkJykge1xuICAgICAgICAgIHcuc2Nyb2xsQnkoe1xuICAgICAgICAgICAgbGVmdDogcGFyZW50UmVjdHMubGVmdCxcbiAgICAgICAgICAgIHRvcDogcGFyZW50UmVjdHMudG9wLFxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJldmVhbCBlbGVtZW50IGluIHZpZXdwb3J0XG4gICAgICAgIHcuc2Nyb2xsQnkoe1xuICAgICAgICAgIGxlZnQ6IGNsaWVudFJlY3RzLmxlZnQsXG4gICAgICAgICAgdG9wOiBjbGllbnRSZWN0cy50b3AsXG4gICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICB7XG4gICAgLy8gY29tbW9uanNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHsgcG9seWZpbGw6IHBvbHlmaWxsIH07XG4gIH1cblxufSgpKTtcbn0pO1xudmFyIHNtb290aHNjcm9sbF8xID0gc21vb3Roc2Nyb2xsLnBvbHlmaWxsO1xuXG52YXIgX2RlZmF1bHQkMSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvcmUpIHtcbiAgX2luaGVyaXRzKF9kZWZhdWx0LCBfQ29yZSk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihfZGVmYXVsdCk7XG5cbiAgZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIF9kZWZhdWx0KTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG5cbiAgICBpZiAoX3RoaXMucmVzZXROYXRpdmVTY3JvbGwpIHtcbiAgICAgIGlmIChoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcbiAgICAgIH1cblxuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBfdGhpcy5jaGVja1Njcm9sbCwgZmFsc2UpO1xuXG4gICAgaWYgKHdpbmRvdy5zbW9vdGhzY3JvbGxQb2x5ZmlsbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB3aW5kb3cuc21vb3Roc2Nyb2xsUG9seWZpbGwgPSBzbW9vdGhzY3JvbGw7XG4gICAgICB3aW5kb3cuc21vb3Roc2Nyb2xsUG9seWZpbGwucG9seWZpbGwoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoX2RlZmF1bHQsIFt7XG4gICAga2V5OiBcImluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICB0aGlzLmFkZEVsZW1lbnRzKCk7XG4gICAgICB0aGlzLmRldGVjdEVsZW1lbnRzKCk7XG5cbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKF9kZWZhdWx0LnByb3RvdHlwZSksIFwiaW5pdFwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjaGVja1Njcm9sbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjaGVja1Njcm9sbCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihfZGVmYXVsdC5wcm90b3R5cGUpLCBcImNoZWNrU2Nyb2xsXCIsIHRoaXMpLmNhbGwodGhpcyk7XG5cbiAgICAgIGlmICh0aGlzLmdldERpcmVjdGlvbikge1xuICAgICAgICB0aGlzLmFkZERpcmVjdGlvbigpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5nZXRTcGVlZCkge1xuICAgICAgICB0aGlzLmFkZFNwZWVkKCk7XG4gICAgICAgIHRoaXMuc3BlZWRUcyA9IERhdGUubm93KCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cbiAgICAgIGlmIChPYmplY3QuZW50cmllcyh0aGlzLmVscykubGVuZ3RoKSB7XG4gICAgICAgIGlmICghdGhpcy5oYXNTY3JvbGxUaWNraW5nKSB7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzMi5kZXRlY3RFbGVtZW50cygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkRGlyZWN0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZERpcmVjdGlvbigpIHtcbiAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiB0aGlzLmluc3RhbmNlLnNjcm9sbC55KSB7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRpcmVjdGlvbiAhPT0gJ2Rvd24nKSB7XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5kaXJlY3Rpb24gPSAnZG93bic7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAod2luZG93LnBhZ2VZT2Zmc2V0IDwgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXJlY3Rpb24gIT09ICd1cCcpIHtcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLmRpcmVjdGlvbiA9ICd1cCc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkU3BlZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkU3BlZWQoKSB7XG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ICE9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zcGVlZCA9ICh3aW5kb3cucGFnZVlPZmZzZXQgLSB0aGlzLmluc3RhbmNlLnNjcm9sbC55KSAvIE1hdGgubWF4KDEsIERhdGUubm93KCkgLSB0aGlzLnNwZWVkVHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zcGVlZCA9IDA7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlc2l6ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNpemUoKSB7XG4gICAgICBpZiAoT2JqZWN0LmVudHJpZXModGhpcy5lbHMpLmxlbmd0aCkge1xuICAgICAgICB0aGlzLndpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdGhpcy51cGRhdGVFbGVtZW50cygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhZGRFbGVtZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRFbGVtZW50cygpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB0aGlzLmVscyA9IHt9O1xuICAgICAgdmFyIGVscyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtJyArIHRoaXMubmFtZSArICddJyk7XG4gICAgICBlbHMuZm9yRWFjaChmdW5jdGlvbiAoZWwsIGluZGV4KSB7XG4gICAgICAgIHZhciBCQ1IgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIGNsID0gZWwuZGF0YXNldFtfdGhpczMubmFtZSArICdDbGFzcyddIHx8IF90aGlzM1tcImNsYXNzXCJdO1xuICAgICAgICB2YXIgaWQgPSB0eXBlb2YgZWwuZGF0YXNldFtfdGhpczMubmFtZSArICdJZCddID09PSAnc3RyaW5nJyA/IGVsLmRhdGFzZXRbX3RoaXMzLm5hbWUgKyAnSWQnXSA6IGluZGV4O1xuICAgICAgICB2YXIgdG9wO1xuICAgICAgICB2YXIgbGVmdDtcbiAgICAgICAgdmFyIG9mZnNldCA9IHR5cGVvZiBlbC5kYXRhc2V0W190aGlzMy5uYW1lICsgJ09mZnNldCddID09PSAnc3RyaW5nJyA/IGVsLmRhdGFzZXRbX3RoaXMzLm5hbWUgKyAnT2Zmc2V0J10uc3BsaXQoJywnKSA6IF90aGlzMy5vZmZzZXQ7XG4gICAgICAgIHZhciByZXBlYXQgPSBlbC5kYXRhc2V0W190aGlzMy5uYW1lICsgJ1JlcGVhdCddO1xuICAgICAgICB2YXIgY2FsbCA9IGVsLmRhdGFzZXRbX3RoaXMzLm5hbWUgKyAnQ2FsbCddO1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZWwuZGF0YXNldFtfdGhpczMubmFtZSArICdUYXJnZXQnXTtcbiAgICAgICAgdmFyIHRhcmdldEVsO1xuXG4gICAgICAgIGlmICh0YXJnZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRhcmdldEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIlwiLmNvbmNhdCh0YXJnZXQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRFbCA9IGVsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhcmdldEVsQkNSID0gdGFyZ2V0RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHRvcCA9IHRhcmdldEVsQkNSLnRvcCArIF90aGlzMy5pbnN0YW5jZS5zY3JvbGwueTtcbiAgICAgICAgbGVmdCA9IHRhcmdldEVsQkNSLmxlZnQgKyBfdGhpczMuaW5zdGFuY2Uuc2Nyb2xsLng7XG4gICAgICAgIHZhciBib3R0b20gPSB0b3AgKyB0YXJnZXRFbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHZhciByaWdodCA9IGxlZnQgKyB0YXJnZXRFbC5vZmZzZXRXaWR0aDtcblxuICAgICAgICBpZiAodGFyZ2V0ID09PSAnI2hlYWRlcicpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0b3AsIGJvdHRvbSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVwZWF0ID09ICdmYWxzZScpIHtcbiAgICAgICAgICByZXBlYXQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXBlYXQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmVwZWF0ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXBlYXQgPSBfdGhpczMucmVwZWF0O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlbGF0aXZlT2Zmc2V0ID0gX3RoaXMzLmdldFJlbGF0aXZlT2Zmc2V0KG9mZnNldCk7XG5cbiAgICAgICAgdG9wID0gdG9wICsgcmVsYXRpdmVPZmZzZXRbMF07XG4gICAgICAgIGJvdHRvbSA9IGJvdHRvbSAtIHJlbGF0aXZlT2Zmc2V0WzFdO1xuICAgICAgICB2YXIgbWFwcGVkRWwgPSB7XG4gICAgICAgICAgZWw6IGVsLFxuICAgICAgICAgIHRhcmdldEVsOiB0YXJnZXRFbCxcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgXCJjbGFzc1wiOiBjbCxcbiAgICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgICBib3R0b206IGJvdHRvbSxcbiAgICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICAgIHJpZ2h0OiByaWdodCxcbiAgICAgICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgICBwcm9ncmVzczogMCxcbiAgICAgICAgICByZXBlYXQ6IHJlcGVhdCxcbiAgICAgICAgICBpblZpZXc6IGZhbHNlLFxuICAgICAgICAgIGNhbGw6IGNhbGxcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMzLmVsc1tpZF0gPSBtYXBwZWRFbDtcblxuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsKSkge1xuICAgICAgICAgIF90aGlzMy5zZXRJblZpZXcoX3RoaXMzLmVsc1tpZF0sIGlkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZUVsZW1lbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnRzKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuZWxzKS5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDIpLFxuICAgICAgICAgICAgaSA9IF9yZWYyWzBdLFxuICAgICAgICAgICAgZWwgPSBfcmVmMlsxXTtcblxuICAgICAgICB2YXIgdG9wID0gZWwudGFyZ2V0RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgX3RoaXM0Lmluc3RhbmNlLnNjcm9sbC55O1xuXG4gICAgICAgIHZhciBib3R0b20gPSB0b3AgKyBlbC50YXJnZXRFbC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgdmFyIHJlbGF0aXZlT2Zmc2V0ID0gX3RoaXM0LmdldFJlbGF0aXZlT2Zmc2V0KGVsLm9mZnNldCk7XG5cbiAgICAgICAgX3RoaXM0LmVsc1tpXS50b3AgPSB0b3AgKyByZWxhdGl2ZU9mZnNldFswXTtcbiAgICAgICAgX3RoaXM0LmVsc1tpXS5ib3R0b20gPSBib3R0b20gLSByZWxhdGl2ZU9mZnNldFsxXTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5oYXNTY3JvbGxUaWNraW5nID0gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFJlbGF0aXZlT2Zmc2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJlbGF0aXZlT2Zmc2V0KG9mZnNldCkge1xuICAgICAgdmFyIHJlbGF0aXZlT2Zmc2V0ID0gWzAsIDBdO1xuXG4gICAgICBpZiAob2Zmc2V0KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2Zmc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBvZmZzZXRbaV0gPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChvZmZzZXRbaV0uaW5jbHVkZXMoJyUnKSkge1xuICAgICAgICAgICAgICByZWxhdGl2ZU9mZnNldFtpXSA9IHBhcnNlSW50KG9mZnNldFtpXS5yZXBsYWNlKCclJywgJycpICogdGhpcy53aW5kb3dIZWlnaHQgLyAxMDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVsYXRpdmVPZmZzZXRbaV0gPSBwYXJzZUludChvZmZzZXRbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWxhdGl2ZU9mZnNldFtpXSA9IG9mZnNldFtpXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlbGF0aXZlT2Zmc2V0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgdG8gYSBkZXNpcmVkIHRhcmdldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgQXZhaWxhYmxlIG9wdGlvbnMgOlxuICAgICAqICAgICAgICAgIHRhcmdldCB7bm9kZSwgc3RyaW5nLCBcInRvcFwiLCBcImJvdHRvbVwiLCBpbnR9IC0gVGhlIERPTSBlbGVtZW50IHdlIHdhbnQgdG8gc2Nyb2xsIHRvXG4gICAgICogICAgICAgICAgb3B0aW9ucyB7b2JqZWN0fSAtIE9wdGlvbnMgb2JqZWN0IGZvciBhZGRpdGlvbm5hbCBzZXR0aW5ncy5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2Nyb2xsVG9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2Nyb2xsVG8odGFyZ2V0KSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICAvLyBQYXJzZSBvcHRpb25zXG4gICAgICB2YXIgb2Zmc2V0ID0gcGFyc2VJbnQob3B0aW9ucy5vZmZzZXQpIHx8IDA7IC8vIEFuIG9mZnNldCB0byBhcHBseSBvbiB0b3Agb2YgZ2l2ZW4gYHRhcmdldGAgb3IgYHNvdXJjZUVsZW1gJ3MgdGFyZ2V0XG5cbiAgICAgIHZhciBjYWxsYmFjayA9IG9wdGlvbnMuY2FsbGJhY2sgPyBvcHRpb25zLmNhbGxiYWNrIDogZmFsc2U7IC8vIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHNjcm9sbFRvIGNvbXBsZXRlcyAobm90ZSB0aGF0IGl0IHdvbid0IHdhaXQgZm9yIGxlcnAgdG8gc3RhYmlsaXplKVxuXG4gICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy8gU2VsZWN0b3Igb3IgYm91bmRhcmllc1xuICAgICAgICBpZiAodGFyZ2V0ID09PSAndG9wJykge1xuICAgICAgICAgIHRhcmdldCA9IHRoaXMuaHRtbDtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgdGFyZ2V0ID0gdGhpcy5odG1sLm9mZnNldEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIElmIHRoZSBxdWVyeSBmYWlscywgYWJvcnRcblxuICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdudW1iZXInKSB7XG4gICAgICAgIC8vIEFic29sdXRlIGNvb3JkaW5hdGVcbiAgICAgICAgdGFyZ2V0ID0gcGFyc2VJbnQodGFyZ2V0KTtcbiAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ICYmIHRhcmdldC50YWdOYW1lKSA7IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oJ2B0YXJnZXRgIHBhcmFtZXRlciBpcyBub3QgdmFsaWQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBXZSBoYXZlIGEgdGFyZ2V0IHRoYXQgaXMgbm90IGEgY29vcmRpbmF0ZSB5ZXQsIGdldCBpdFxuXG5cbiAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSAnbnVtYmVyJykge1xuICAgICAgICBvZmZzZXQgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgb2Zmc2V0ICsgdGhpcy5pbnN0YW5jZS5zY3JvbGwueTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9mZnNldCA9IHRhcmdldCArIG9mZnNldDtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIG9mZnNldCA9IG9mZnNldC50b0ZpeGVkKCk7XG5cbiAgICAgICAgdmFyIG9uU2Nyb2xsID0gZnVuY3Rpb24gb25TY3JvbGwoKSB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldC50b0ZpeGVkKCkgPT09IG9mZnNldCkge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogb2Zmc2V0LFxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgdGhpcy5hZGRFbGVtZW50cygpO1xuICAgICAgdGhpcy5kZXRlY3RFbGVtZW50cygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkZXN0cm95XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihfZGVmYXVsdC5wcm90b3R5cGUpLCBcImRlc3Ryb3lcIiwgdGhpcykuY2FsbCh0aGlzKTtcblxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuY2hlY2tTY3JvbGwsIGZhbHNlKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gX2RlZmF1bHQ7XG59KF9kZWZhdWx0KTtcblxuLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG52YXIgb2JqZWN0QXNzaWduID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxuZnVuY3Rpb24gRSAoKSB7XG4gIC8vIEtlZXAgdGhpcyBlbXB0eSBzbyBpdCdzIGVhc2llciB0byBpbmhlcml0IGZyb21cbiAgLy8gKHZpYSBodHRwczovL2dpdGh1Yi5jb20vbGlwc21hY2sgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2lzc3Vlcy8zKVxufVxuXG5FLnByb3RvdHlwZSA9IHtcbiAgb246IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIGUgPSB0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KTtcblxuICAgIChlW25hbWVdIHx8IChlW25hbWVdID0gW10pKS5wdXNoKHtcbiAgICAgIGZuOiBjYWxsYmFjayxcbiAgICAgIGN0eDogY3R4XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvbmNlOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGN0eCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBmdW5jdGlvbiBsaXN0ZW5lciAoKSB7XG4gICAgICBzZWxmLm9mZihuYW1lLCBsaXN0ZW5lcik7XG4gICAgICBjYWxsYmFjay5hcHBseShjdHgsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIGxpc3RlbmVyLl8gPSBjYWxsYmFjaztcbiAgICByZXR1cm4gdGhpcy5vbihuYW1lLCBsaXN0ZW5lciwgY3R4KTtcbiAgfSxcblxuICBlbWl0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBkYXRhID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHZhciBldnRBcnIgPSAoKHRoaXMuZSB8fCAodGhpcy5lID0ge30pKVtuYW1lXSB8fCBbXSkuc2xpY2UoKTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbiA9IGV2dEFyci5sZW5ndGg7XG5cbiAgICBmb3IgKGk7IGkgPCBsZW47IGkrKykge1xuICAgICAgZXZ0QXJyW2ldLmZuLmFwcGx5KGV2dEFycltpXS5jdHgsIGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9mZjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGUgPSB0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KTtcbiAgICB2YXIgZXZ0cyA9IGVbbmFtZV07XG4gICAgdmFyIGxpdmVFdmVudHMgPSBbXTtcblxuICAgIGlmIChldnRzICYmIGNhbGxiYWNrKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZXZ0cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoZXZ0c1tpXS5mbiAhPT0gY2FsbGJhY2sgJiYgZXZ0c1tpXS5mbi5fICE9PSBjYWxsYmFjaylcbiAgICAgICAgICBsaXZlRXZlbnRzLnB1c2goZXZ0c1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGV2ZW50IGZyb20gcXVldWUgdG8gcHJldmVudCBtZW1vcnkgbGVha1xuICAgIC8vIFN1Z2dlc3RlZCBieSBodHRwczovL2dpdGh1Yi5jb20vbGF6ZFxuICAgIC8vIFJlZjogaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9jb21taXQvYzZlYmZhYTliYzk3M2IzM2QxMTBhODRhMzA3NzQyYjdjZjk0Yzk1MyNjb21taXRjb21tZW50LTUwMjQ5MTBcblxuICAgIChsaXZlRXZlbnRzLmxlbmd0aClcbiAgICAgID8gZVtuYW1lXSA9IGxpdmVFdmVudHNcbiAgICAgIDogZGVsZXRlIGVbbmFtZV07XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufTtcblxudmFyIHRpbnlFbWl0dGVyID0gRTtcblxudmFyIGxldGhhcmd5ID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjkuMlxuKGZ1bmN0aW9uKCkge1xuICB2YXIgcm9vdDtcblxuICByb290ID0gIGV4cG9ydHMgIT09IG51bGwgPyBleHBvcnRzIDogdGhpcztcblxuICByb290LkxldGhhcmd5ID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIExldGhhcmd5KHN0YWJpbGl0eSwgc2Vuc2l0aXZpdHksIHRvbGVyYW5jZSwgZGVsYXkpIHtcbiAgICAgIHRoaXMuc3RhYmlsaXR5ID0gc3RhYmlsaXR5ICE9IG51bGwgPyBNYXRoLmFicyhzdGFiaWxpdHkpIDogODtcbiAgICAgIHRoaXMuc2Vuc2l0aXZpdHkgPSBzZW5zaXRpdml0eSAhPSBudWxsID8gMSArIE1hdGguYWJzKHNlbnNpdGl2aXR5KSA6IDEwMDtcbiAgICAgIHRoaXMudG9sZXJhbmNlID0gdG9sZXJhbmNlICE9IG51bGwgPyAxICsgTWF0aC5hYnModG9sZXJhbmNlKSA6IDEuMTtcbiAgICAgIHRoaXMuZGVsYXkgPSBkZWxheSAhPSBudWxsID8gZGVsYXkgOiAxNTA7XG4gICAgICB0aGlzLmxhc3RVcERlbHRhcyA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGksIHJlZiwgcmVzdWx0cztcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAxLCByZWYgPSB0aGlzLnN0YWJpbGl0eSAqIDI7IDEgPD0gcmVmID8gaSA8PSByZWYgOiBpID49IHJlZjsgMSA8PSByZWYgPyBpKysgOiBpLS0pIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9KS5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5sYXN0RG93bkRlbHRhcyA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGksIHJlZiwgcmVzdWx0cztcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAxLCByZWYgPSB0aGlzLnN0YWJpbGl0eSAqIDI7IDEgPD0gcmVmID8gaSA8PSByZWYgOiBpID49IHJlZjsgMSA8PSByZWYgPyBpKysgOiBpLS0pIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9KS5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5kZWx0YXNUaW1lc3RhbXAgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpLCByZWYsIHJlc3VsdHM7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMSwgcmVmID0gdGhpcy5zdGFiaWxpdHkgKiAyOyAxIDw9IHJlZiA/IGkgPD0gcmVmIDogaSA+PSByZWY7IDEgPD0gcmVmID8gaSsrIDogaS0tKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBMZXRoYXJneS5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgbGFzdERlbHRhO1xuICAgICAgZSA9IGUub3JpZ2luYWxFdmVudCB8fCBlO1xuICAgICAgaWYgKGUud2hlZWxEZWx0YSAhPSBudWxsKSB7XG4gICAgICAgIGxhc3REZWx0YSA9IGUud2hlZWxEZWx0YTtcbiAgICAgIH0gZWxzZSBpZiAoZS5kZWx0YVkgIT0gbnVsbCkge1xuICAgICAgICBsYXN0RGVsdGEgPSBlLmRlbHRhWSAqIC00MDtcbiAgICAgIH0gZWxzZSBpZiAoKGUuZGV0YWlsICE9IG51bGwpIHx8IGUuZGV0YWlsID09PSAwKSB7XG4gICAgICAgIGxhc3REZWx0YSA9IGUuZGV0YWlsICogLTQwO1xuICAgICAgfVxuICAgICAgdGhpcy5kZWx0YXNUaW1lc3RhbXAucHVzaChEYXRlLm5vdygpKTtcbiAgICAgIHRoaXMuZGVsdGFzVGltZXN0YW1wLnNoaWZ0KCk7XG4gICAgICBpZiAobGFzdERlbHRhID4gMCkge1xuICAgICAgICB0aGlzLmxhc3RVcERlbHRhcy5wdXNoKGxhc3REZWx0YSk7XG4gICAgICAgIHRoaXMubGFzdFVwRGVsdGFzLnNoaWZ0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLmlzSW5lcnRpYSgxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGFzdERvd25EZWx0YXMucHVzaChsYXN0RGVsdGEpO1xuICAgICAgICB0aGlzLmxhc3REb3duRGVsdGFzLnNoaWZ0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLmlzSW5lcnRpYSgtMSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIExldGhhcmd5LnByb3RvdHlwZS5pc0luZXJ0aWEgPSBmdW5jdGlvbihkaXJlY3Rpb24pIHtcbiAgICAgIHZhciBsYXN0RGVsdGFzLCBsYXN0RGVsdGFzTmV3LCBsYXN0RGVsdGFzT2xkLCBuZXdBdmVyYWdlLCBuZXdTdW0sIG9sZEF2ZXJhZ2UsIG9sZFN1bTtcbiAgICAgIGxhc3REZWx0YXMgPSBkaXJlY3Rpb24gPT09IC0xID8gdGhpcy5sYXN0RG93bkRlbHRhcyA6IHRoaXMubGFzdFVwRGVsdGFzO1xuICAgICAgaWYgKGxhc3REZWx0YXNbMF0gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRlbHRhc1RpbWVzdGFtcFsodGhpcy5zdGFiaWxpdHkgKiAyKSAtIDJdICsgdGhpcy5kZWxheSA+IERhdGUubm93KCkgJiYgbGFzdERlbHRhc1swXSA9PT0gbGFzdERlbHRhc1sodGhpcy5zdGFiaWxpdHkgKiAyKSAtIDFdKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGxhc3REZWx0YXNPbGQgPSBsYXN0RGVsdGFzLnNsaWNlKDAsIHRoaXMuc3RhYmlsaXR5KTtcbiAgICAgIGxhc3REZWx0YXNOZXcgPSBsYXN0RGVsdGFzLnNsaWNlKHRoaXMuc3RhYmlsaXR5LCB0aGlzLnN0YWJpbGl0eSAqIDIpO1xuICAgICAgb2xkU3VtID0gbGFzdERlbHRhc09sZC5yZWR1Y2UoZnVuY3Rpb24odCwgcykge1xuICAgICAgICByZXR1cm4gdCArIHM7XG4gICAgICB9KTtcbiAgICAgIG5ld1N1bSA9IGxhc3REZWx0YXNOZXcucmVkdWNlKGZ1bmN0aW9uKHQsIHMpIHtcbiAgICAgICAgcmV0dXJuIHQgKyBzO1xuICAgICAgfSk7XG4gICAgICBvbGRBdmVyYWdlID0gb2xkU3VtIC8gbGFzdERlbHRhc09sZC5sZW5ndGg7XG4gICAgICBuZXdBdmVyYWdlID0gbmV3U3VtIC8gbGFzdERlbHRhc05ldy5sZW5ndGg7XG4gICAgICBpZiAoTWF0aC5hYnMob2xkQXZlcmFnZSkgPCBNYXRoLmFicyhuZXdBdmVyYWdlICogdGhpcy50b2xlcmFuY2UpICYmICh0aGlzLnNlbnNpdGl2aXR5IDwgTWF0aC5hYnMobmV3QXZlcmFnZSkpKSB7XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIExldGhhcmd5LnByb3RvdHlwZS5zaG93TGFzdFVwRGVsdGFzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYXN0VXBEZWx0YXM7XG4gICAgfTtcblxuICAgIExldGhhcmd5LnByb3RvdHlwZS5zaG93TGFzdERvd25EZWx0YXMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmxhc3REb3duRGVsdGFzO1xuICAgIH07XG5cbiAgICByZXR1cm4gTGV0aGFyZ3k7XG5cbiAgfSkoKTtcblxufSkuY2FsbChjb21tb25qc0dsb2JhbCk7XG59KTtcblxudmFyIHN1cHBvcnQgPSAoZnVuY3Rpb24gZ2V0U3VwcG9ydCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBoYXNXaGVlbEV2ZW50OiAnb253aGVlbCcgaW4gZG9jdW1lbnQsXG4gICAgICAgIGhhc01vdXNlV2hlZWxFdmVudDogJ29ubW91c2V3aGVlbCcgaW4gZG9jdW1lbnQsXG4gICAgICAgIGhhc1RvdWNoOiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB8fCB3aW5kb3cuVG91Y2hFdmVudCB8fCB3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2gsXG4gICAgICAgIGhhc1RvdWNoV2luOiBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyAmJiBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyA+IDEsXG4gICAgICAgIGhhc1BvaW50ZXI6ICEhd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkLFxuICAgICAgICBoYXNLZXlEb3duOiAnb25rZXlkb3duJyBpbiBkb2N1bWVudCxcbiAgICAgICAgaXNGaXJlZm94OiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSA+IC0xXG4gICAgfTtcbn0pKCk7XG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsXG4gICAgaGFzT3duUHJvcGVydHkkMSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBiaW5kYWxsU3RhbmRhbG9uZSA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIGlmKCFvYmplY3QpIHJldHVybiBjb25zb2xlLndhcm4oJ2JpbmRBbGwgcmVxdWlyZXMgYXQgbGVhc3Qgb25lIGFyZ3VtZW50LicpO1xuXG4gICAgdmFyIGZ1bmN0aW9ucyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICBpZiAoZnVuY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuXG4gICAgICAgIGZvciAodmFyIG1ldGhvZCBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgIGlmKGhhc093blByb3BlcnR5JDEuY2FsbChvYmplY3QsIG1ldGhvZCkpIHtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2Ygb2JqZWN0W21ldGhvZF0gPT0gJ2Z1bmN0aW9uJyAmJiB0b1N0cmluZy5jYWxsKG9iamVjdFttZXRob2RdKSA9PSBcIltvYmplY3QgRnVuY3Rpb25dXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25zLnB1c2gobWV0aG9kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgZnVuY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBmID0gZnVuY3Rpb25zW2ldO1xuICAgICAgICBvYmplY3RbZl0gPSBiaW5kKG9iamVjdFtmXSwgb2JqZWN0KTtcbiAgICB9XG59O1xuXG4vKlxuICAgIEZhc3RlciBiaW5kIHdpdGhvdXQgc3BlY2lmaWMtY2FzZSBjaGVja2luZy4gKHNlZSBodHRwczovL2NvZGVyd2FsbC5jb20vcC9vaTNqM3cpLlxuICAgIGJpbmRBbGwgaXMgb25seSBuZWVkZWQgZm9yIGV2ZW50cyBiaW5kaW5nIHNvIG5vIG5lZWQgdG8gbWFrZSBzbG93IGZpeGVzIGZvciBjb25zdHJ1Y3RvclxuICAgIG9yIHBhcnRpYWwgYXBwbGljYXRpb24uXG4qL1xuZnVuY3Rpb24gYmluZChmdW5jLCBjb250ZXh0KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG52YXIgTGV0aGFyZ3kgPSBsZXRoYXJneS5MZXRoYXJneTtcblxuXG5cbnZhciBFVlRfSUQgPSAndmlydHVhbHNjcm9sbCc7XG5cbnZhciBzcmMgPSBWaXJ0dWFsU2Nyb2xsO1xuXG52YXIga2V5Q29kZXMgPSB7XG4gICAgTEVGVDogMzcsXG4gICAgVVA6IDM4LFxuICAgIFJJR0hUOiAzOSxcbiAgICBET1dOOiA0MCxcbiAgICBTUEFDRTogMzJcbn07XG5cbmZ1bmN0aW9uIFZpcnR1YWxTY3JvbGwob3B0aW9ucykge1xuICAgIGJpbmRhbGxTdGFuZGFsb25lKHRoaXMsICdfb25XaGVlbCcsICdfb25Nb3VzZVdoZWVsJywgJ19vblRvdWNoU3RhcnQnLCAnX29uVG91Y2hNb3ZlJywgJ19vbktleURvd24nKTtcblxuICAgIHRoaXMuZWwgPSB3aW5kb3c7XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5lbCkge1xuICAgICAgICB0aGlzLmVsID0gb3B0aW9ucy5lbDtcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMuZWw7XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucyA9IG9iamVjdEFzc2lnbih7XG4gICAgICAgIG1vdXNlTXVsdGlwbGllcjogMSxcbiAgICAgICAgdG91Y2hNdWx0aXBsaWVyOiAyLFxuICAgICAgICBmaXJlZm94TXVsdGlwbGllcjogMTUsXG4gICAgICAgIGtleVN0ZXA6IDEyMCxcbiAgICAgICAgcHJldmVudFRvdWNoOiBmYWxzZSxcbiAgICAgICAgdW5wcmV2ZW50VG91Y2hDbGFzczogJ3ZzLXRvdWNobW92ZS1hbGxvd2VkJyxcbiAgICAgICAgbGltaXRJbmVydGlhOiBmYWxzZSxcbiAgICAgICAgdXNlS2V5Ym9hcmQ6IHRydWUsXG4gICAgICAgIHVzZVRvdWNoOiB0cnVlXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmxpbWl0SW5lcnRpYSkgdGhpcy5fbGV0aGFyZ3kgPSBuZXcgTGV0aGFyZ3koKTtcblxuICAgIHRoaXMuX2VtaXR0ZXIgPSBuZXcgdGlueUVtaXR0ZXIoKTtcbiAgICB0aGlzLl9ldmVudCA9IHtcbiAgICAgICAgeTogMCxcbiAgICAgICAgeDogMCxcbiAgICAgICAgZGVsdGFYOiAwLFxuICAgICAgICBkZWx0YVk6IDBcbiAgICB9O1xuICAgIHRoaXMudG91Y2hTdGFydFggPSBudWxsO1xuICAgIHRoaXMudG91Y2hTdGFydFkgPSBudWxsO1xuICAgIHRoaXMuYm9keVRvdWNoQWN0aW9uID0gbnVsbDtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMucGFzc2l2ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJPcHRpb25zID0ge3Bhc3NpdmU6IHRoaXMub3B0aW9ucy5wYXNzaXZlfTtcbiAgICB9XG59XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9ub3RpZnkgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuICAgIGV2dC54ICs9IGV2dC5kZWx0YVg7XG4gICAgZXZ0LnkgKz0gZXZ0LmRlbHRhWTtcblxuICAgdGhpcy5fZW1pdHRlci5lbWl0KEVWVF9JRCwge1xuICAgICAgICB4OiBldnQueCxcbiAgICAgICAgeTogZXZ0LnksXG4gICAgICAgIGRlbHRhWDogZXZ0LmRlbHRhWCxcbiAgICAgICAgZGVsdGFZOiBldnQuZGVsdGFZLFxuICAgICAgICBvcmlnaW5hbEV2ZW50OiBlXG4gICB9KTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vbldoZWVsID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGlmICh0aGlzLl9sZXRoYXJneSAmJiB0aGlzLl9sZXRoYXJneS5jaGVjayhlKSA9PT0gZmFsc2UpIHJldHVybjtcbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG5cbiAgICAvLyBJbiBDaHJvbWUgYW5kIGluIEZpcmVmb3ggKGF0IGxlYXN0IHRoZSBuZXcgb25lKVxuICAgIGV2dC5kZWx0YVggPSBlLndoZWVsRGVsdGFYIHx8IGUuZGVsdGFYICogLTE7XG4gICAgZXZ0LmRlbHRhWSA9IGUud2hlZWxEZWx0YVkgfHwgZS5kZWx0YVkgKiAtMTtcblxuICAgIC8vIGZvciBvdXIgcHVycG9zZSBkZWx0YW1vZGUgPSAxIG1lYW5zIHVzZXIgaXMgb24gYSB3aGVlbCBtb3VzZSwgbm90IHRvdWNoIHBhZFxuICAgIC8vIHJlYWwgbWVhbmluZzogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1doZWVsRXZlbnQjRGVsdGFfbW9kZXNcbiAgICBpZihzdXBwb3J0LmlzRmlyZWZveCAmJiBlLmRlbHRhTW9kZSA9PSAxKSB7XG4gICAgICAgIGV2dC5kZWx0YVggKj0gb3B0aW9ucy5maXJlZm94TXVsdGlwbGllcjtcbiAgICAgICAgZXZ0LmRlbHRhWSAqPSBvcHRpb25zLmZpcmVmb3hNdWx0aXBsaWVyO1xuICAgIH1cblxuICAgIGV2dC5kZWx0YVggKj0gb3B0aW9ucy5tb3VzZU11bHRpcGxpZXI7XG4gICAgZXZ0LmRlbHRhWSAqPSBvcHRpb25zLm1vdXNlTXVsdGlwbGllcjtcblxuICAgIHRoaXMuX25vdGlmeShlKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vbk1vdXNlV2hlZWwgPSBmdW5jdGlvbihlKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5saW1pdEluZXJ0aWEgJiYgdGhpcy5fbGV0aGFyZ3kuY2hlY2soZSkgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG5cbiAgICAvLyBJbiBTYWZhcmksIElFIGFuZCBpbiBDaHJvbWUgaWYgJ3doZWVsJyBpc24ndCBkZWZpbmVkXG4gICAgZXZ0LmRlbHRhWCA9IChlLndoZWVsRGVsdGFYKSA/IGUud2hlZWxEZWx0YVggOiAwO1xuICAgIGV2dC5kZWx0YVkgPSAoZS53aGVlbERlbHRhWSkgPyBlLndoZWVsRGVsdGFZIDogZS53aGVlbERlbHRhO1xuXG4gICAgdGhpcy5fbm90aWZ5KGUpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX29uVG91Y2hTdGFydCA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgdCA9IChlLnRhcmdldFRvdWNoZXMpID8gZS50YXJnZXRUb3VjaGVzWzBdIDogZTtcbiAgICB0aGlzLnRvdWNoU3RhcnRYID0gdC5wYWdlWDtcbiAgICB0aGlzLnRvdWNoU3RhcnRZID0gdC5wYWdlWTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vblRvdWNoTW92ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBpZihvcHRpb25zLnByZXZlbnRUb3VjaFxuICAgICAgICAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKG9wdGlvbnMudW5wcmV2ZW50VG91Y2hDbGFzcykpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcblxuICAgIHZhciB0ID0gKGUudGFyZ2V0VG91Y2hlcykgPyBlLnRhcmdldFRvdWNoZXNbMF0gOiBlO1xuXG4gICAgZXZ0LmRlbHRhWCA9ICh0LnBhZ2VYIC0gdGhpcy50b3VjaFN0YXJ0WCkgKiBvcHRpb25zLnRvdWNoTXVsdGlwbGllcjtcbiAgICBldnQuZGVsdGFZID0gKHQucGFnZVkgLSB0aGlzLnRvdWNoU3RhcnRZKSAqIG9wdGlvbnMudG91Y2hNdWx0aXBsaWVyO1xuXG4gICAgdGhpcy50b3VjaFN0YXJ0WCA9IHQucGFnZVg7XG4gICAgdGhpcy50b3VjaFN0YXJ0WSA9IHQucGFnZVk7XG5cbiAgICB0aGlzLl9ub3RpZnkoZSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25LZXlEb3duID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcbiAgICBldnQuZGVsdGFYID0gZXZ0LmRlbHRhWSA9IDA7XG4gICAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDQwO1xuXG4gICAgc3dpdGNoKGUua2V5Q29kZSkge1xuICAgICAgICBjYXNlIGtleUNvZGVzLkxFRlQ6XG4gICAgICAgIGNhc2Uga2V5Q29kZXMuVVA6XG4gICAgICAgICAgICBldnQuZGVsdGFZID0gdGhpcy5vcHRpb25zLmtleVN0ZXA7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGtleUNvZGVzLlJJR0hUOlxuICAgICAgICBjYXNlIGtleUNvZGVzLkRPV046XG4gICAgICAgICAgICBldnQuZGVsdGFZID0gLSB0aGlzLm9wdGlvbnMua2V5U3RlcDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICBlLnNoaWZ0S2V5OlxuICAgICAgICAgICAgZXZ0LmRlbHRhWSA9IHdpbmRvd0hlaWdodDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGtleUNvZGVzLlNQQUNFOlxuICAgICAgICAgICAgZXZ0LmRlbHRhWSA9IC0gd2luZG93SGVpZ2h0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbm90aWZ5KGUpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX2JpbmQgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzdXBwb3J0Lmhhc1doZWVsRXZlbnQpIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLl9vbldoZWVsLCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG4gICAgaWYoc3VwcG9ydC5oYXNNb3VzZVdoZWVsRXZlbnQpIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMuX29uTW91c2VXaGVlbCwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuXG4gICAgaWYoc3VwcG9ydC5oYXNUb3VjaCAmJiB0aGlzLm9wdGlvbnMudXNlVG91Y2gpIHtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5fb25Ub3VjaFN0YXJ0LCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZihzdXBwb3J0Lmhhc1BvaW50ZXIgJiYgc3VwcG9ydC5oYXNUb3VjaFdpbikge1xuICAgICAgICB0aGlzLmJvZHlUb3VjaEFjdGlvbiA9IGRvY3VtZW50LmJvZHkuc3R5bGUubXNUb3VjaEFjdGlvbjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tc1RvdWNoQWN0aW9uID0gJ25vbmUnO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ01TUG9pbnRlckRvd24nLCB0aGlzLl9vblRvdWNoU3RhcnQsIHRydWUpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ01TUG9pbnRlck1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYoc3VwcG9ydC5oYXNLZXlEb3duICYmIHRoaXMub3B0aW9ucy51c2VLZXlib2FyZCkgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5RG93bik7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fdW5iaW5kID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc3VwcG9ydC5oYXNXaGVlbEV2ZW50KSB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5fb25XaGVlbCk7XG4gICAgaWYoc3VwcG9ydC5oYXNNb3VzZVdoZWVsRXZlbnQpIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMuX29uTW91c2VXaGVlbCk7XG5cbiAgICBpZihzdXBwb3J0Lmhhc1RvdWNoKSB7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX29uVG91Y2hTdGFydCk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuICAgIH1cblxuICAgIGlmKHN1cHBvcnQuaGFzUG9pbnRlciAmJiBzdXBwb3J0Lmhhc1RvdWNoV2luKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubXNUb3VjaEFjdGlvbiA9IHRoaXMuYm9keVRvdWNoQWN0aW9uO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ01TUG9pbnRlckRvd24nLCB0aGlzLl9vblRvdWNoU3RhcnQsIHRydWUpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ01TUG9pbnRlck1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYoc3VwcG9ydC5oYXNLZXlEb3duICYmIHRoaXMub3B0aW9ucy51c2VLZXlib2FyZCkgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5RG93bik7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGNiLCBjdHgpIHtcbiAgdGhpcy5fZW1pdHRlci5vbihFVlRfSUQsIGNiLCBjdHgpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9lbWl0dGVyLmU7XG4gIGlmIChldmVudHMgJiYgZXZlbnRzW0VWVF9JRF0gJiYgZXZlbnRzW0VWVF9JRF0ubGVuZ3RoID09PSAxKSB0aGlzLl9iaW5kKCk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbihjYiwgY3R4KSB7XG4gIHRoaXMuX2VtaXR0ZXIub2ZmKEVWVF9JRCwgY2IsIGN0eCk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2VtaXR0ZXIuZTtcbiAgaWYgKCFldmVudHNbRVZUX0lEXSB8fCBldmVudHNbRVZUX0lEXS5sZW5ndGggPD0gMCkgdGhpcy5fdW5iaW5kKCk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcbiAgICBldnQueCA9IDA7XG4gICAgZXZ0LnkgPSAwO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2VtaXR0ZXIub2ZmKCk7XG4gICAgdGhpcy5fdW5iaW5kKCk7XG59O1xuXG5mdW5jdGlvbiBsZXJwKHN0YXJ0LCBlbmQsIGFtdCkge1xuICByZXR1cm4gKDEgLSBhbXQpICogc3RhcnQgKyBhbXQgKiBlbmQ7XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zbGF0ZShlbCkge1xuICB2YXIgdHJhbnNsYXRlID0ge307XG4gIGlmICghd2luZG93LmdldENvbXB1dGVkU3R5bGUpIHJldHVybjtcbiAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gIHZhciB0cmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gfHwgc3R5bGUud2Via2l0VHJhbnNmb3JtIHx8IHN0eWxlLm1velRyYW5zZm9ybTtcbiAgdmFyIG1hdCA9IHRyYW5zZm9ybS5tYXRjaCgvXm1hdHJpeDNkXFwoKC4rKVxcKSQvKTtcblxuICBpZiAobWF0KSB7XG4gICAgdHJhbnNsYXRlLnggPSBtYXQgPyBwYXJzZUZsb2F0KG1hdFsxXS5zcGxpdCgnLCAnKVsxMl0pIDogMDtcbiAgICB0cmFuc2xhdGUueSA9IG1hdCA/IHBhcnNlRmxvYXQobWF0WzFdLnNwbGl0KCcsICcpWzEzXSkgOiAwO1xuICB9IGVsc2Uge1xuICAgIG1hdCA9IHRyYW5zZm9ybS5tYXRjaCgvXm1hdHJpeFxcKCguKylcXCkkLyk7XG4gICAgdHJhbnNsYXRlLnggPSBtYXQgPyBwYXJzZUZsb2F0KG1hdFsxXS5zcGxpdCgnLCAnKVs0XSkgOiAwO1xuICAgIHRyYW5zbGF0ZS55ID0gbWF0ID8gcGFyc2VGbG9hdChtYXRbMV0uc3BsaXQoJywgJylbNV0pIDogMDtcbiAgfVxuXG4gIHJldHVybiB0cmFuc2xhdGU7XG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIGFsbCB0aGUgcGFyZW50IG5vZGVzIG9mIHRoZSBnaXZlbiBub2RlXG4gKiBAcGFyYW0gIHtvYmplY3R9IG5vZGVcbiAqIEByZXR1cm4ge2FycmF5fSBwYXJlbnQgbm9kZXNcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyZW50cyhlbGVtKSB7XG4gIC8vIFNldCB1cCBhIHBhcmVudCBhcnJheVxuICB2YXIgcGFyZW50cyA9IFtdOyAvLyBQdXNoIGVhY2ggcGFyZW50IGVsZW1lbnQgdG8gdGhlIGFycmF5XG5cbiAgZm9yICg7IGVsZW0gJiYgZWxlbSAhPT0gZG9jdW1lbnQ7IGVsZW0gPSBlbGVtLnBhcmVudE5vZGUpIHtcbiAgICBwYXJlbnRzLnB1c2goZWxlbSk7XG4gIH0gLy8gUmV0dXJuIG91ciBwYXJlbnQgYXJyYXlcblxuXG4gIHJldHVybiBwYXJlbnRzO1xufSAvLyBodHRwczovL2dvbWFrZXRoaW5ncy5jb20vaG93LXRvLWdldC10aGUtY2xvc2VzdC1wYXJlbnQtZWxlbWVudC13aXRoLWEtbWF0Y2hpbmctc2VsZWN0b3ItdXNpbmctdmFuaWxsYS1qYXZhc2NyaXB0L1xuXG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZ1xuICogQmV6aWVyRWFzaW5nIC0gdXNlIGJlemllciBjdXJ2ZSBmb3IgdHJhbnNpdGlvbiBlYXNpbmcgZnVuY3Rpb25cbiAqIGJ5IEdhw6t0YW4gUmVuYXVkZWF1IDIwMTQgLSAyMDE1IOKAkyBNSVQgTGljZW5zZVxuICovXG5cbi8vIFRoZXNlIHZhbHVlcyBhcmUgZXN0YWJsaXNoZWQgYnkgZW1waXJpY2lzbSB3aXRoIHRlc3RzICh0cmFkZW9mZjogcGVyZm9ybWFuY2UgVlMgcHJlY2lzaW9uKVxudmFyIE5FV1RPTl9JVEVSQVRJT05TID0gNDtcbnZhciBORVdUT05fTUlOX1NMT1BFID0gMC4wMDE7XG52YXIgU1VCRElWSVNJT05fUFJFQ0lTSU9OID0gMC4wMDAwMDAxO1xudmFyIFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TID0gMTA7XG5cbnZhciBrU3BsaW5lVGFibGVTaXplID0gMTE7XG52YXIga1NhbXBsZVN0ZXBTaXplID0gMS4wIC8gKGtTcGxpbmVUYWJsZVNpemUgLSAxLjApO1xuXG52YXIgZmxvYXQzMkFycmF5U3VwcG9ydGVkID0gdHlwZW9mIEZsb2F0MzJBcnJheSA9PT0gJ2Z1bmN0aW9uJztcblxuZnVuY3Rpb24gQSAoYUExLCBhQTIpIHsgcmV0dXJuIDEuMCAtIDMuMCAqIGFBMiArIDMuMCAqIGFBMTsgfVxuZnVuY3Rpb24gQiAoYUExLCBhQTIpIHsgcmV0dXJuIDMuMCAqIGFBMiAtIDYuMCAqIGFBMTsgfVxuZnVuY3Rpb24gQyAoYUExKSAgICAgIHsgcmV0dXJuIDMuMCAqIGFBMTsgfVxuXG4vLyBSZXR1cm5zIHgodCkgZ2l2ZW4gdCwgeDEsIGFuZCB4Miwgb3IgeSh0KSBnaXZlbiB0LCB5MSwgYW5kIHkyLlxuZnVuY3Rpb24gY2FsY0JlemllciAoYVQsIGFBMSwgYUEyKSB7IHJldHVybiAoKEEoYUExLCBhQTIpICogYVQgKyBCKGFBMSwgYUEyKSkgKiBhVCArIEMoYUExKSkgKiBhVDsgfVxuXG4vLyBSZXR1cm5zIGR4L2R0IGdpdmVuIHQsIHgxLCBhbmQgeDIsIG9yIGR5L2R0IGdpdmVuIHQsIHkxLCBhbmQgeTIuXG5mdW5jdGlvbiBnZXRTbG9wZSAoYVQsIGFBMSwgYUEyKSB7IHJldHVybiAzLjAgKiBBKGFBMSwgYUEyKSAqIGFUICogYVQgKyAyLjAgKiBCKGFBMSwgYUEyKSAqIGFUICsgQyhhQTEpOyB9XG5cbmZ1bmN0aW9uIGJpbmFyeVN1YmRpdmlkZSAoYVgsIGFBLCBhQiwgbVgxLCBtWDIpIHtcbiAgdmFyIGN1cnJlbnRYLCBjdXJyZW50VCwgaSA9IDA7XG4gIGRvIHtcbiAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xuICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7XG4gICAgICBhQiA9IGN1cnJlbnRUO1xuICAgIH0gZWxzZSB7XG4gICAgICBhQSA9IGN1cnJlbnRUO1xuICAgIH1cbiAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gU1VCRElWSVNJT05fUFJFQ0lTSU9OICYmICsraSA8IFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TKTtcbiAgcmV0dXJuIGN1cnJlbnRUO1xufVxuXG5mdW5jdGlvbiBuZXd0b25SYXBoc29uSXRlcmF0ZSAoYVgsIGFHdWVzc1QsIG1YMSwgbVgyKSB7XG4gZm9yICh2YXIgaSA9IDA7IGkgPCBORVdUT05fSVRFUkFUSU9OUzsgKytpKSB7XG4gICB2YXIgY3VycmVudFNsb3BlID0gZ2V0U2xvcGUoYUd1ZXNzVCwgbVgxLCBtWDIpO1xuICAgaWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7XG4gICAgIHJldHVybiBhR3Vlc3NUO1xuICAgfVxuICAgdmFyIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcbiAgIGFHdWVzc1QgLT0gY3VycmVudFggLyBjdXJyZW50U2xvcGU7XG4gfVxuIHJldHVybiBhR3Vlc3NUO1xufVxuXG5mdW5jdGlvbiBMaW5lYXJFYXNpbmcgKHgpIHtcbiAgcmV0dXJuIHg7XG59XG5cbnZhciBzcmMkMSA9IGZ1bmN0aW9uIGJlemllciAobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG4gIGlmICghKDAgPD0gbVgxICYmIG1YMSA8PSAxICYmIDAgPD0gbVgyICYmIG1YMiA8PSAxKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignYmV6aWVyIHggdmFsdWVzIG11c3QgYmUgaW4gWzAsIDFdIHJhbmdlJyk7XG4gIH1cblxuICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcbiAgICByZXR1cm4gTGluZWFyRWFzaW5nO1xuICB9XG5cbiAgLy8gUHJlY29tcHV0ZSBzYW1wbGVzIHRhYmxlXG4gIHZhciBzYW1wbGVWYWx1ZXMgPSBmbG9hdDMyQXJyYXlTdXBwb3J0ZWQgPyBuZXcgRmxvYXQzMkFycmF5KGtTcGxpbmVUYWJsZVNpemUpIDogbmV3IEFycmF5KGtTcGxpbmVUYWJsZVNpemUpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtTcGxpbmVUYWJsZVNpemU7ICsraSkge1xuICAgIHNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VEZvclggKGFYKSB7XG4gICAgdmFyIGludGVydmFsU3RhcnQgPSAwLjA7XG4gICAgdmFyIGN1cnJlbnRTYW1wbGUgPSAxO1xuICAgIHZhciBsYXN0U2FtcGxlID0ga1NwbGluZVRhYmxlU2l6ZSAtIDE7XG5cbiAgICBmb3IgKDsgY3VycmVudFNhbXBsZSAhPT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgaW50ZXJ2YWxTdGFydCArPSBrU2FtcGxlU3RlcFNpemU7XG4gICAgfVxuICAgIC0tY3VycmVudFNhbXBsZTtcblxuICAgIC8vIEludGVycG9sYXRlIHRvIHByb3ZpZGUgYW4gaW5pdGlhbCBndWVzcyBmb3IgdFxuICAgIHZhciBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSArIDFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICB2YXIgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBrU2FtcGxlU3RlcFNpemU7XG5cbiAgICB2YXIgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG4gICAgaWYgKGluaXRpYWxTbG9wZSA+PSBORVdUT05fTUlOX1NMT1BFKSB7XG4gICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuICAgIH0gZWxzZSBpZiAoaW5pdGlhbFNsb3BlID09PSAwLjApIHtcbiAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gQmV6aWVyRWFzaW5nICh4KSB7XG4gICAgLy8gQmVjYXVzZSBKYXZhU2NyaXB0IG51bWJlciBhcmUgaW1wcmVjaXNlLCB3ZSBzaG91bGQgZ3VhcmFudGVlIHRoZSBleHRyZW1lcyBhcmUgcmlnaHQuXG4gICAgaWYgKHggPT09IDApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAoeCA9PT0gMSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiBjYWxjQmV6aWVyKGdldFRGb3JYKHgpLCBtWTEsIG1ZMik7XG4gIH07XG59O1xuXG52YXIga2V5Q29kZXMkMSA9IHtcbiAgTEVGVDogMzcsXG4gIFVQOiAzOCxcbiAgUklHSFQ6IDM5LFxuICBET1dOOiA0MCxcbiAgU1BBQ0U6IDMyLFxuICBUQUI6IDksXG4gIFBBR0VVUDogMzMsXG4gIFBBR0VET1dOOiAzNCxcbiAgSE9NRTogMzYsXG4gIEVORDogMzVcbn07XG5cbnZhciBfZGVmYXVsdCQyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29yZSkge1xuICBfaW5oZXJpdHMoX2RlZmF1bHQsIF9Db3JlKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKF9kZWZhdWx0KTtcblxuICBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgX2RlZmF1bHQpO1xuXG4gICAgaWYgKGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgIGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcbiAgICB9XG5cbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICBpZiAoX3RoaXMuaW5lcnRpYSkgX3RoaXMubGVycCA9IF90aGlzLmluZXJ0aWEgKiAwLjE7XG4gICAgX3RoaXMuaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICBfdGhpcy5pc0RyYWdnaW5nU2Nyb2xsYmFyID0gZmFsc2U7XG4gICAgX3RoaXMuaXNUaWNraW5nID0gZmFsc2U7XG4gICAgX3RoaXMuaGFzU2Nyb2xsVGlja2luZyA9IGZhbHNlO1xuICAgIF90aGlzLnBhcmFsbGF4RWxlbWVudHMgPSB7fTtcbiAgICBfdGhpcy5zdG9wID0gZmFsc2U7XG4gICAgX3RoaXMuc2Nyb2xsYmFyQ29udGFpbmVyID0gb3B0aW9ucy5zY3JvbGxiYXJDb250YWluZXI7XG4gICAgX3RoaXMuY2hlY2tLZXkgPSBfdGhpcy5jaGVja0tleS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIF90aGlzLmNoZWNrS2V5LCBmYWxzZSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKF9kZWZhdWx0LCBbe1xuICAgIGtleTogXCJpbml0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdGhpcy5odG1sLmNsYXNzTGlzdC5hZGQodGhpcy5zbW9vdGhDbGFzcyk7XG4gICAgICB0aGlzLmh0bWwuc2V0QXR0cmlidXRlKFwiZGF0YS1cIi5jb25jYXQodGhpcy5uYW1lLCBcIi1kaXJlY3Rpb25cIiksIHRoaXMuZGlyZWN0aW9uKTtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBfb2JqZWN0U3ByZWFkMih7XG4gICAgICAgIGRlbHRhOiB7XG4gICAgICAgICAgeDogMCxcbiAgICAgICAgICB5OiAwXG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMuaW5zdGFuY2UpO1xuICAgICAgdGhpcy52cyA9IG5ldyBzcmMoe1xuICAgICAgICBlbDogdGhpcy5zY3JvbGxGcm9tQW55d2hlcmUgPyBkb2N1bWVudCA6IHRoaXMuZWwsXG4gICAgICAgIG1vdXNlTXVsdGlwbGllcjogbmF2aWdhdG9yLnBsYXRmb3JtLmluZGV4T2YoJ1dpbicpID4gLTEgPyAxIDogMC40LFxuICAgICAgICBmaXJlZm94TXVsdGlwbGllcjogdGhpcy5maXJlZm94TXVsdGlwbGllcixcbiAgICAgICAgdG91Y2hNdWx0aXBsaWVyOiB0aGlzLnRvdWNoTXVsdGlwbGllcixcbiAgICAgICAgdXNlS2V5Ym9hcmQ6IGZhbHNlLFxuICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMudnMub24oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKF90aGlzMi5zdG9wKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFfdGhpczIuaXNEcmFnZ2luZ1Njcm9sbGJhcikge1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpczIudXBkYXRlRGVsdGEoZSk7XG5cbiAgICAgICAgICAgIGlmICghX3RoaXMyLmlzU2Nyb2xsaW5nKSBfdGhpczIuc3RhcnRTY3JvbGxpbmcoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLnNldFNjcm9sbExpbWl0KCk7XG4gICAgICB0aGlzLmluaXRTY3JvbGxCYXIoKTtcbiAgICAgIHRoaXMuYWRkU2VjdGlvbnMoKTtcbiAgICAgIHRoaXMuYWRkRWxlbWVudHMoKTtcbiAgICAgIHRoaXMuY2hlY2tTY3JvbGwodHJ1ZSk7XG4gICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnRzKHRydWUsIHRydWUpO1xuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihfZGVmYXVsdC5wcm90b3R5cGUpLCBcImluaXRcIiwgdGhpcykuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0U2Nyb2xsTGltaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U2Nyb2xsTGltaXQoKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmxpbWl0LnkgPSB0aGlzLmVsLm9mZnNldEhlaWdodCAtIHRoaXMud2luZG93SGVpZ2h0O1xuXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICB2YXIgdG90YWxXaWR0aCA9IDA7XG4gICAgICAgIHZhciBub2RlcyA9IHRoaXMuZWwuY2hpbGRyZW47XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRvdGFsV2lkdGggKz0gbm9kZXNbaV0ub2Zmc2V0V2lkdGg7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluc3RhbmNlLmxpbWl0LnggPSB0b3RhbFdpZHRoIC0gdGhpcy53aW5kb3dXaWR0aDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhcnRTY3JvbGxpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnRTY3JvbGxpbmcoKSB7XG4gICAgICB0aGlzLnN0YXJ0U2Nyb2xsVHMgPSBEYXRlLm5vdygpOyAvLyBSZWNvcmQgdGltZXN0YW1wXG5cbiAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5jaGVja1Njcm9sbCgpO1xuICAgICAgdGhpcy5odG1sLmNsYXNzTGlzdC5hZGQodGhpcy5zY3JvbGxpbmdDbGFzcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BTY3JvbGxpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcFNjcm9sbGluZygpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuY2hlY2tTY3JvbGxSYWYpOyAvLyBQcmV2ZW50IGNoZWNrU2Nyb2xsIHRvIGNvbnRpbnVlIGxvb3BpbmdcblxuICAgICAgaWYgKHRoaXMuc2Nyb2xsVG9SYWYpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5zY3JvbGxUb1JhZik7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9SYWYgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmlzU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gTWF0aC5yb3VuZCh0aGlzLmluc3RhbmNlLnNjcm9sbC55KTtcbiAgICAgIHRoaXMuaHRtbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc2Nyb2xsaW5nQ2xhc3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjaGVja0tleVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjaGVja0tleShlKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuc3RvcCkge1xuICAgICAgICAvLyBJZiB3ZSBhcmUgc3RvcHBlZCwgd2UgZG9uJ3Qgd2FudCBhbnkgc2Nyb2xsIHRvIG9jY3VyIGJlY2F1c2Ugb2YgYSBrZXlwcmVzc1xuICAgICAgICAvLyBQcmV2ZW50IHRhYiB0byBzY3JvbGwgdG8gYWN0aXZlRWxlbWVudFxuICAgICAgICBpZiAoZS5rZXlDb2RlID09IGtleUNvZGVzJDEuVEFCKSB7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBuYXRpdmUgc2Nyb2xsIGlzIGFsd2F5cyBhdCB0b3Agb2YgcGFnZVxuICAgICAgICAgICAgX3RoaXMzLmh0bWwuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIF90aGlzMy5odG1sLnNjcm9sbExlZnQgPSAwO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ID0gMDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSBrZXlDb2RlcyQxLlRBQjpcbiAgICAgICAgICAvLyBEbyBub3QgcmVtb3ZlIHRoZSBSQUZcbiAgICAgICAgICAvLyBJdCBhbGxvd3MgdG8gb3ZlcnJpZGUgdGhlIGJyb3dzZXIncyBuYXRpdmUgc2Nyb2xsVG8sIHdoaWNoIGlzIGVzc2VudGlhbFxuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgbmF0aXZlIHNjcm9sbCBpcyBhbHdheXMgYXQgdG9wIG9mIHBhZ2VcbiAgICAgICAgICAgIF90aGlzMy5odG1sLnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgICBfdGhpczMuaHRtbC5zY3JvbGxMZWZ0ID0gMDtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCA9IDA7IC8vIFJlcXVlc3Qgc2Nyb2xsVG8gb24gdGhlIGZvY3VzZWRFbGVtZW50LCBwdXR0aW5nIGl0IGF0IHRoZSBjZW50ZXIgb2YgdGhlIHNjcmVlblxuXG4gICAgICAgICAgICBfdGhpczMuc2Nyb2xsVG8oZG9jdW1lbnQuYWN0aXZlRWxlbWVudCwge1xuICAgICAgICAgICAgICBvZmZzZXQ6IC13aW5kb3cuaW5uZXJIZWlnaHQgLyAyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGtleUNvZGVzJDEuVVA6XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdIC09IDI0MDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGtleUNvZGVzJDEuRE9XTjpcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10gKz0gMjQwO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2Uga2V5Q29kZXMkMS5QQUdFVVA6XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdIC09IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGtleUNvZGVzJDEuUEFHRURPV046XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdICs9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGtleUNvZGVzJDEuSE9NRTpcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10gLT0gdGhpcy5pbnN0YW5jZS5saW1pdFt0aGlzLmRpcmVjdGlvbkF4aXNdO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2Uga2V5Q29kZXMkMS5FTkQ6XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdICs9IHRoaXMuaW5zdGFuY2UubGltaXRbdGhpcy5kaXJlY3Rpb25BeGlzXTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGtleUNvZGVzJDEuU1BBQ0U6XG4gICAgICAgICAgaWYgKCEoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpICYmICEoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQpKSB7XG4gICAgICAgICAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10gLT0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdICs9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGVsdGFbdGhpcy5kaXJlY3Rpb25BeGlzXSA8IDApIHRoaXMuaW5zdGFuY2UuZGVsdGFbdGhpcy5kaXJlY3Rpb25BeGlzXSA9IDA7XG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdID4gdGhpcy5pbnN0YW5jZS5saW1pdFt0aGlzLmRpcmVjdGlvbkF4aXNdKSB0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10gPSB0aGlzLmluc3RhbmNlLmxpbWl0W3RoaXMuZGlyZWN0aW9uQXhpc107XG4gICAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTsgLy8gU3RvcCBhbnkgbW92ZW1lbnQsIGFsbG93cyB0byBraWxsIGFueSBvdGhlciBgc2Nyb2xsVG9gIHN0aWxsIGhhcHBlbmluZ1xuXG4gICAgICB0aGlzLmlzU2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2hlY2tTY3JvbGwoKTtcbiAgICAgIHRoaXMuaHRtbC5jbGFzc0xpc3QuYWRkKHRoaXMuc2Nyb2xsaW5nQ2xhc3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjaGVja1Njcm9sbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjaGVja1Njcm9sbCgpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgZm9yY2VkID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcblxuICAgICAgaWYgKGZvcmNlZCB8fCB0aGlzLmlzU2Nyb2xsaW5nIHx8IHRoaXMuaXNEcmFnZ2luZ1Njcm9sbGJhcikge1xuICAgICAgICBpZiAoIXRoaXMuaGFzU2Nyb2xsVGlja2luZykge1xuICAgICAgICAgIHRoaXMuY2hlY2tTY3JvbGxSYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5jaGVja1Njcm9sbCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbCgpO1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLmFicyh0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10gLSB0aGlzLmluc3RhbmNlLnNjcm9sbFt0aGlzLmRpcmVjdGlvbkF4aXNdKTtcbiAgICAgICAgdmFyIHRpbWVTaW5jZVN0YXJ0ID0gRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnRTY3JvbGxUczsgLy8gR2V0IHRoZSB0aW1lIHNpbmNlIHRoZSBzY3JvbGwgd2FzIHN0YXJ0ZWQ6IHRoZSBzY3JvbGwgY2FuIGJlIHN0b3BwZWQgYWdhaW4gb25seSBwYXN0IDEwMG1zXG5cbiAgICAgICAgaWYgKCF0aGlzLmFuaW1hdGluZ1Njcm9sbCAmJiB0aW1lU2luY2VTdGFydCA+IDEwMCAmJiAoZGlzdGFuY2UgPCAwLjUgJiYgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdICE9IDAgfHwgZGlzdGFuY2UgPCAwLjUgJiYgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdID09IDApKSB7XG4gICAgICAgICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnNlY3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG4gICAgICAgICAgICAgIGkgPSBfcmVmMlswXSxcbiAgICAgICAgICAgICAgc2VjdGlvbiA9IF9yZWYyWzFdO1xuXG4gICAgICAgICAgaWYgKHNlY3Rpb24ucGVyc2lzdGVudCB8fCBfdGhpczQuaW5zdGFuY2Uuc2Nyb2xsW190aGlzNC5kaXJlY3Rpb25BeGlzXSA+IHNlY3Rpb24ub2Zmc2V0W190aGlzNC5kaXJlY3Rpb25BeGlzXSAmJiBfdGhpczQuaW5zdGFuY2Uuc2Nyb2xsW190aGlzNC5kaXJlY3Rpb25BeGlzXSA8IHNlY3Rpb24ubGltaXRbX3RoaXM0LmRpcmVjdGlvbkF4aXNdKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXM0LmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgIF90aGlzNC50cmFuc2Zvcm0oc2VjdGlvbi5lbCwgLV90aGlzNC5pbnN0YW5jZS5zY3JvbGxbX3RoaXM0LmRpcmVjdGlvbkF4aXNdLCAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF90aGlzNC50cmFuc2Zvcm0oc2VjdGlvbi5lbCwgMCwgLV90aGlzNC5pbnN0YW5jZS5zY3JvbGxbX3RoaXM0LmRpcmVjdGlvbkF4aXNdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFzZWN0aW9uLmluVmlldykge1xuICAgICAgICAgICAgICBzZWN0aW9uLmluVmlldyA9IHRydWU7XG4gICAgICAgICAgICAgIHNlY3Rpb24uZWwuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgIHNlY3Rpb24uZWwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xuICAgICAgICAgICAgICBzZWN0aW9uLmVsLnNldEF0dHJpYnV0ZShcImRhdGEtXCIuY29uY2F0KF90aGlzNC5uYW1lLCBcIi1zZWN0aW9uLWludmlld1wiKSwgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc2VjdGlvbi5pblZpZXcpIHtcbiAgICAgICAgICAgICAgc2VjdGlvbi5pblZpZXcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgc2VjdGlvbi5lbC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgc2VjdGlvbi5lbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICAgICAgICBzZWN0aW9uLmVsLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtXCIuY29uY2F0KF90aGlzNC5uYW1lLCBcIi1zZWN0aW9uLWludmlld1wiKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF90aGlzNC50cmFuc2Zvcm0oc2VjdGlvbi5lbCwgMCwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5nZXREaXJlY3Rpb24pIHtcbiAgICAgICAgICB0aGlzLmFkZERpcmVjdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0U3BlZWQpIHtcbiAgICAgICAgICB0aGlzLmFkZFNwZWVkKCk7XG4gICAgICAgICAgdGhpcy5zcGVlZFRzID0gRGF0ZS5ub3coKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGV0ZWN0RWxlbWVudHMoKTtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1FbGVtZW50cygpO1xuXG4gICAgICAgIGlmICh0aGlzLmhhc1Njcm9sbGJhcikge1xuICAgICAgICAgIHZhciBzY3JvbGxCYXJUcmFuc2xhdGlvbiA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsW3RoaXMuZGlyZWN0aW9uQXhpc10gLyB0aGlzLmluc3RhbmNlLmxpbWl0W3RoaXMuZGlyZWN0aW9uQXhpc10gKiB0aGlzLnNjcm9sbEJhckxpbWl0W3RoaXMuZGlyZWN0aW9uQXhpc107XG5cbiAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0odGhpcy5zY3JvbGxiYXJUaHVtYiwgc2Nyb2xsQmFyVHJhbnNsYXRpb24sIDApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybSh0aGlzLnNjcm9sbGJhclRodW1iLCAwLCBzY3JvbGxCYXJUcmFuc2xhdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoX2RlZmF1bHQucHJvdG90eXBlKSwgXCJjaGVja1Njcm9sbFwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXNpemVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzaXplKCkge1xuICAgICAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB0aGlzLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICB0aGlzLmNoZWNrQ29udGV4dCgpO1xuICAgICAgdGhpcy53aW5kb3dNaWRkbGUgPSB7XG4gICAgICAgIHg6IHRoaXMud2luZG93V2lkdGggLyAyLFxuICAgICAgICB5OiB0aGlzLndpbmRvd0hlaWdodCAvIDJcbiAgICAgIH07XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVEZWx0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVEZWx0YShlKSB7XG4gICAgICB2YXIgZGVsdGE7XG4gICAgICB2YXIgZ2VzdHVyZURpcmVjdGlvbiA9IHRoaXNbdGhpcy5jb250ZXh0XSAmJiB0aGlzW3RoaXMuY29udGV4dF0uZ2VzdHVyZURpcmVjdGlvbiA/IHRoaXNbdGhpcy5jb250ZXh0XS5nZXN0dXJlRGlyZWN0aW9uIDogdGhpcy5nZXN0dXJlRGlyZWN0aW9uO1xuXG4gICAgICBpZiAoZ2VzdHVyZURpcmVjdGlvbiA9PT0gJ2JvdGgnKSB7XG4gICAgICAgIGRlbHRhID0gZS5kZWx0YVggKyBlLmRlbHRhWTtcbiAgICAgIH0gZWxzZSBpZiAoZ2VzdHVyZURpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICBkZWx0YSA9IGUuZGVsdGFZO1xuICAgICAgfSBlbHNlIGlmIChnZXN0dXJlRGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgZGVsdGEgPSBlLmRlbHRhWDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbHRhID0gZS5kZWx0YVk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5zdGFuY2UuZGVsdGFbdGhpcy5kaXJlY3Rpb25BeGlzXSAtPSBkZWx0YSAqIHRoaXMubXVsdGlwbGllcjtcbiAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10gPCAwKSB0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10gPSAwO1xuICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGVsdGFbdGhpcy5kaXJlY3Rpb25BeGlzXSA+IHRoaXMuaW5zdGFuY2UubGltaXRbdGhpcy5kaXJlY3Rpb25BeGlzXSkgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdID0gdGhpcy5pbnN0YW5jZS5saW1pdFt0aGlzLmRpcmVjdGlvbkF4aXNdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVTY3JvbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlU2Nyb2xsKGUpIHtcbiAgICAgIGlmICh0aGlzLmlzU2Nyb2xsaW5nIHx8IHRoaXMuaXNEcmFnZ2luZ1Njcm9sbGJhcikge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbFt0aGlzLmRpcmVjdGlvbkF4aXNdID0gbGVycCh0aGlzLmluc3RhbmNlLnNjcm9sbFt0aGlzLmRpcmVjdGlvbkF4aXNdLCB0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10sIHRoaXMubGVycCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5zY3JvbGxbdGhpcy5kaXJlY3Rpb25BeGlzXSA+IHRoaXMuaW5zdGFuY2UubGltaXRbdGhpcy5kaXJlY3Rpb25BeGlzXSkge1xuICAgICAgICAgIHRoaXMuc2V0U2Nyb2xsKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsW3RoaXMuZGlyZWN0aW9uQXhpc10sIHRoaXMuaW5zdGFuY2UubGltaXRbdGhpcy5kaXJlY3Rpb25BeGlzXSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbnN0YW5jZS5zY3JvbGwueSA8IDApIHtcbiAgICAgICAgICB0aGlzLnNldFNjcm9sbCh0aGlzLmluc3RhbmNlLnNjcm9sbFt0aGlzLmRpcmVjdGlvbkF4aXNdLCAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFNjcm9sbCh0aGlzLmluc3RhbmNlLnNjcm9sbFt0aGlzLmRpcmVjdGlvbkF4aXNdLCB0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFkZERpcmVjdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGREaXJlY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YS55ID4gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXJlY3Rpb24gIT09ICdkb3duJykge1xuICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGlyZWN0aW9uID0gJ2Rvd24nO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaW5zdGFuY2UuZGVsdGEueSA8IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGlyZWN0aW9uICE9PSAndXAnKSB7XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5kaXJlY3Rpb24gPSAndXAnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhLnggPiB0aGlzLmluc3RhbmNlLnNjcm9sbC54KSB7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRpcmVjdGlvbiAhPT0gJ3JpZ2h0Jykge1xuICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGlyZWN0aW9uID0gJ3JpZ2h0JztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhLnggPCB0aGlzLmluc3RhbmNlLnNjcm9sbC54KSB7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRpcmVjdGlvbiAhPT0gJ2xlZnQnKSB7XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5kaXJlY3Rpb24gPSAnbGVmdCc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkU3BlZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkU3BlZWQoKSB7XG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdICE9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsW3RoaXMuZGlyZWN0aW9uQXhpc10pIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zcGVlZCA9ICh0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10gLSB0aGlzLmluc3RhbmNlLnNjcm9sbFt0aGlzLmRpcmVjdGlvbkF4aXNdKSAvIE1hdGgubWF4KDEsIERhdGUubm93KCkgLSB0aGlzLnNwZWVkVHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zcGVlZCA9IDA7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImluaXRTY3JvbGxCYXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdFNjcm9sbEJhcigpIHtcbiAgICAgIHRoaXMuc2Nyb2xsYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgdGhpcy5zY3JvbGxiYXJUaHVtYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHRoaXMuc2Nyb2xsYmFyLmNsYXNzTGlzdC5hZGQoXCJcIi5jb25jYXQodGhpcy5zY3JvbGxiYXJDbGFzcykpO1xuICAgICAgdGhpcy5zY3JvbGxiYXJUaHVtYi5jbGFzc0xpc3QuYWRkKFwiXCIuY29uY2F0KHRoaXMuc2Nyb2xsYmFyQ2xhc3MsIFwiX3RodW1iXCIpKTtcbiAgICAgIHRoaXMuc2Nyb2xsYmFyLmFwcGVuZCh0aGlzLnNjcm9sbGJhclRodW1iKTtcblxuICAgICAgaWYgKHRoaXMuc2Nyb2xsYmFyQ29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyQ29udGFpbmVyLmFwcGVuZCh0aGlzLnNjcm9sbGJhcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLnNjcm9sbGJhcik7XG4gICAgICB9IC8vIFNjcm9sbGJhciBFdmVudHNcblxuXG4gICAgICB0aGlzLmdldFNjcm9sbEJhciA9IHRoaXMuZ2V0U2Nyb2xsQmFyLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLnJlbGVhc2VTY3JvbGxCYXIgPSB0aGlzLnJlbGVhc2VTY3JvbGxCYXIuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMubW92ZVNjcm9sbEJhciA9IHRoaXMubW92ZVNjcm9sbEJhci5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5zY3JvbGxiYXJUaHVtYi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmdldFNjcm9sbEJhcik7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMucmVsZWFzZVNjcm9sbEJhcik7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3ZlU2Nyb2xsQmFyKTsgLy8gU2V0IHNjcm9sbGJhciB2YWx1ZXNcblxuICAgICAgdGhpcy5oYXNTY3JvbGxiYXIgPSBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09ICdob3Jpem9udGFsJykge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5saW1pdC54ICsgdGhpcy53aW5kb3dXaWR0aCA8PSB0aGlzLndpbmRvd1dpZHRoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5saW1pdC55ICsgdGhpcy53aW5kb3dIZWlnaHQgPD0gdGhpcy53aW5kb3dIZWlnaHQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5oYXNTY3JvbGxiYXIgPSB0cnVlO1xuICAgICAgdGhpcy5zY3JvbGxiYXJCQ1IgPSB0aGlzLnNjcm9sbGJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHRoaXMuc2Nyb2xsYmFySGVpZ2h0ID0gdGhpcy5zY3JvbGxiYXJCQ1IuaGVpZ2h0O1xuICAgICAgdGhpcy5zY3JvbGxiYXJXaWR0aCA9IHRoaXMuc2Nyb2xsYmFyQkNSLndpZHRoO1xuXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICB0aGlzLnNjcm9sbGJhclRodW1iLnN0eWxlLndpZHRoID0gXCJcIi5jb25jYXQodGhpcy5zY3JvbGxiYXJXaWR0aCAqIHRoaXMuc2Nyb2xsYmFyV2lkdGggLyAodGhpcy5pbnN0YW5jZS5saW1pdC54ICsgdGhpcy5zY3JvbGxiYXJXaWR0aCksIFwicHhcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNjcm9sbGJhclRodW1iLnN0eWxlLmhlaWdodCA9IFwiXCIuY29uY2F0KHRoaXMuc2Nyb2xsYmFySGVpZ2h0ICogdGhpcy5zY3JvbGxiYXJIZWlnaHQgLyAodGhpcy5pbnN0YW5jZS5saW1pdC55ICsgdGhpcy5zY3JvbGxiYXJIZWlnaHQpLCBcInB4XCIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNjcm9sbGJhclRodW1iQkNSID0gdGhpcy5zY3JvbGxiYXJUaHVtYi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHRoaXMuc2Nyb2xsQmFyTGltaXQgPSB7XG4gICAgICAgIHg6IHRoaXMuc2Nyb2xsYmFyV2lkdGggLSB0aGlzLnNjcm9sbGJhclRodW1iQkNSLndpZHRoLFxuICAgICAgICB5OiB0aGlzLnNjcm9sbGJhckhlaWdodCAtIHRoaXMuc2Nyb2xsYmFyVGh1bWJCQ1IuaGVpZ2h0XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWluaXRTY3JvbGxCYXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVpbml0U2Nyb2xsQmFyKCkge1xuICAgICAgdGhpcy5oYXNTY3JvbGxiYXIgPSBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09ICdob3Jpem9udGFsJykge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5saW1pdC54ICsgdGhpcy53aW5kb3dXaWR0aCA8PSB0aGlzLndpbmRvd1dpZHRoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5saW1pdC55ICsgdGhpcy53aW5kb3dIZWlnaHQgPD0gdGhpcy53aW5kb3dIZWlnaHQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5oYXNTY3JvbGxiYXIgPSB0cnVlO1xuICAgICAgdGhpcy5zY3JvbGxiYXJCQ1IgPSB0aGlzLnNjcm9sbGJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHRoaXMuc2Nyb2xsYmFySGVpZ2h0ID0gdGhpcy5zY3JvbGxiYXJCQ1IuaGVpZ2h0O1xuICAgICAgdGhpcy5zY3JvbGxiYXJXaWR0aCA9IHRoaXMuc2Nyb2xsYmFyQkNSLndpZHRoO1xuXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICB0aGlzLnNjcm9sbGJhclRodW1iLnN0eWxlLndpZHRoID0gXCJcIi5jb25jYXQodGhpcy5zY3JvbGxiYXJXaWR0aCAqIHRoaXMuc2Nyb2xsYmFyV2lkdGggLyAodGhpcy5pbnN0YW5jZS5saW1pdC54ICsgdGhpcy5zY3JvbGxiYXJXaWR0aCksIFwicHhcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNjcm9sbGJhclRodW1iLnN0eWxlLmhlaWdodCA9IFwiXCIuY29uY2F0KHRoaXMuc2Nyb2xsYmFySGVpZ2h0ICogdGhpcy5zY3JvbGxiYXJIZWlnaHQgLyAodGhpcy5pbnN0YW5jZS5saW1pdC55ICsgdGhpcy5zY3JvbGxiYXJIZWlnaHQpLCBcInB4XCIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNjcm9sbGJhclRodW1iQkNSID0gdGhpcy5zY3JvbGxiYXJUaHVtYi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHRoaXMuc2Nyb2xsQmFyTGltaXQgPSB7XG4gICAgICAgIHg6IHRoaXMuc2Nyb2xsYmFyV2lkdGggLSB0aGlzLnNjcm9sbGJhclRodW1iQkNSLndpZHRoLFxuICAgICAgICB5OiB0aGlzLnNjcm9sbGJhckhlaWdodCAtIHRoaXMuc2Nyb2xsYmFyVGh1bWJCQ1IuaGVpZ2h0XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkZXN0cm95U2Nyb2xsQmFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3lTY3JvbGxCYXIoKSB7XG4gICAgICB0aGlzLnNjcm9sbGJhclRodW1iLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuZ2V0U2Nyb2xsQmFyKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5yZWxlYXNlU2Nyb2xsQmFyKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdmVTY3JvbGxCYXIpO1xuICAgICAgdGhpcy5zY3JvbGxiYXIucmVtb3ZlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFNjcm9sbEJhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTY3JvbGxCYXIoZSkge1xuICAgICAgdGhpcy5pc0RyYWdnaW5nU2Nyb2xsYmFyID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2hlY2tTY3JvbGwoKTtcbiAgICAgIHRoaXMuaHRtbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc2Nyb2xsaW5nQ2xhc3MpO1xuICAgICAgdGhpcy5odG1sLmNsYXNzTGlzdC5hZGQodGhpcy5kcmFnZ2luZ0NsYXNzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVsZWFzZVNjcm9sbEJhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWxlYXNlU2Nyb2xsQmFyKGUpIHtcbiAgICAgIHRoaXMuaXNEcmFnZ2luZ1Njcm9sbGJhciA9IGZhbHNlO1xuICAgICAgdGhpcy5odG1sLmNsYXNzTGlzdC5hZGQodGhpcy5zY3JvbGxpbmdDbGFzcyk7XG4gICAgICB0aGlzLmh0bWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmRyYWdnaW5nQ2xhc3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtb3ZlU2Nyb2xsQmFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1vdmVTY3JvbGxCYXIoZSkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLmlzRHJhZ2dpbmdTY3JvbGxiYXIpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgeCA9IChlLmNsaWVudFggLSBfdGhpczUuc2Nyb2xsYmFyQkNSLmxlZnQpICogMTAwIC8gX3RoaXM1LnNjcm9sbGJhcldpZHRoICogX3RoaXM1Lmluc3RhbmNlLmxpbWl0LnggLyAxMDA7XG4gICAgICAgICAgdmFyIHkgPSAoZS5jbGllbnRZIC0gX3RoaXM1LnNjcm9sbGJhckJDUi50b3ApICogMTAwIC8gX3RoaXM1LnNjcm9sbGJhckhlaWdodCAqIF90aGlzNS5pbnN0YW5jZS5saW1pdC55IC8gMTAwO1xuXG4gICAgICAgICAgaWYgKHkgPiAwICYmIHkgPCBfdGhpczUuaW5zdGFuY2UubGltaXQueSkge1xuICAgICAgICAgICAgX3RoaXM1Lmluc3RhbmNlLmRlbHRhLnkgPSB5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh4ID4gMCAmJiB4IDwgX3RoaXM1Lmluc3RhbmNlLmxpbWl0LngpIHtcbiAgICAgICAgICAgIF90aGlzNS5pbnN0YW5jZS5kZWx0YS54ID0geDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhZGRFbGVtZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRFbGVtZW50cygpIHtcbiAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICB0aGlzLmVscyA9IHt9O1xuICAgICAgdGhpcy5wYXJhbGxheEVsZW1lbnRzID0ge307IC8vIHRoaXMuc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbiwgeSkgPT4ge1xuXG4gICAgICB2YXIgZWxzID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtXCIuY29uY2F0KHRoaXMubmFtZSwgXCJdXCIpKTtcbiAgICAgIGVscy5mb3JFYWNoKGZ1bmN0aW9uIChlbCwgaW5kZXgpIHtcbiAgICAgICAgLy8gVHJ5IGFuZCBmaW5kIHRoZSB0YXJnZXQncyBwYXJlbnQgc2VjdGlvblxuICAgICAgICB2YXIgdGFyZ2V0UGFyZW50cyA9IGdldFBhcmVudHMoZWwpO1xuICAgICAgICB2YXIgc2VjdGlvbiA9IE9iamVjdC5lbnRyaWVzKF90aGlzNi5zZWN0aW9ucykubWFwKGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgICAgIHZhciBfcmVmNCA9IF9zbGljZWRUb0FycmF5KF9yZWYzLCAyKSxcbiAgICAgICAgICAgICAga2V5ID0gX3JlZjRbMF0sXG4gICAgICAgICAgICAgIHNlY3Rpb24gPSBfcmVmNFsxXTtcblxuICAgICAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgICAgICB9KS5maW5kKGZ1bmN0aW9uIChzZWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFBhcmVudHMuaW5jbHVkZXMoc2VjdGlvbi5lbCk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgY2wgPSBlbC5kYXRhc2V0W190aGlzNi5uYW1lICsgJ0NsYXNzJ10gfHwgX3RoaXM2W1wiY2xhc3NcIl07XG4gICAgICAgIHZhciBpZCA9IHR5cGVvZiBlbC5kYXRhc2V0W190aGlzNi5uYW1lICsgJ0lkJ10gPT09ICdzdHJpbmcnID8gZWwuZGF0YXNldFtfdGhpczYubmFtZSArICdJZCddIDogJ2VsJyArIGluZGV4O1xuICAgICAgICB2YXIgdG9wO1xuICAgICAgICB2YXIgbGVmdDtcbiAgICAgICAgdmFyIHJlcGVhdCA9IGVsLmRhdGFzZXRbX3RoaXM2Lm5hbWUgKyAnUmVwZWF0J107XG4gICAgICAgIHZhciBjYWxsID0gZWwuZGF0YXNldFtfdGhpczYubmFtZSArICdDYWxsJ107XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IGVsLmRhdGFzZXRbX3RoaXM2Lm5hbWUgKyAnUG9zaXRpb24nXTtcbiAgICAgICAgdmFyIGRlbGF5ID0gZWwuZGF0YXNldFtfdGhpczYubmFtZSArICdEZWxheSddO1xuICAgICAgICB2YXIgZGlyZWN0aW9uID0gZWwuZGF0YXNldFtfdGhpczYubmFtZSArICdEaXJlY3Rpb24nXTtcbiAgICAgICAgdmFyIHN0aWNreSA9IHR5cGVvZiBlbC5kYXRhc2V0W190aGlzNi5uYW1lICsgJ1N0aWNreSddID09PSAnc3RyaW5nJztcbiAgICAgICAgdmFyIHNwZWVkID0gZWwuZGF0YXNldFtfdGhpczYubmFtZSArICdTcGVlZCddID8gcGFyc2VGbG9hdChlbC5kYXRhc2V0W190aGlzNi5uYW1lICsgJ1NwZWVkJ10pIC8gMTAgOiBmYWxzZTtcbiAgICAgICAgdmFyIG9mZnNldCA9IHR5cGVvZiBlbC5kYXRhc2V0W190aGlzNi5uYW1lICsgJ09mZnNldCddID09PSAnc3RyaW5nJyA/IGVsLmRhdGFzZXRbX3RoaXM2Lm5hbWUgKyAnT2Zmc2V0J10uc3BsaXQoJywnKSA6IF90aGlzNi5vZmZzZXQ7XG4gICAgICAgIHZhciB0YXJnZXQgPSBlbC5kYXRhc2V0W190aGlzNi5uYW1lICsgJ1RhcmdldCddO1xuICAgICAgICB2YXIgdGFyZ2V0RWw7XG5cbiAgICAgICAgaWYgKHRhcmdldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGFyZ2V0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiXCIuY29uY2F0KHRhcmdldCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldEVsID0gZWw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGFyZ2V0RWxCQ1IgPSB0YXJnZXRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBpZiAoc2VjdGlvbiA9PT0gbnVsbCkge1xuICAgICAgICAgIHRvcCA9IHRhcmdldEVsQkNSLnRvcCArIF90aGlzNi5pbnN0YW5jZS5zY3JvbGwueSAtIGdldFRyYW5zbGF0ZSh0YXJnZXRFbCkueTtcbiAgICAgICAgICBsZWZ0ID0gdGFyZ2V0RWxCQ1IubGVmdCArIF90aGlzNi5pbnN0YW5jZS5zY3JvbGwueCAtIGdldFRyYW5zbGF0ZSh0YXJnZXRFbCkueDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIXNlY3Rpb24uaW5WaWV3KSB7XG4gICAgICAgICAgICB0b3AgPSB0YXJnZXRFbEJDUi50b3AgLSBnZXRUcmFuc2xhdGUoc2VjdGlvbi5lbCkueSAtIGdldFRyYW5zbGF0ZSh0YXJnZXRFbCkueTtcbiAgICAgICAgICAgIGxlZnQgPSB0YXJnZXRFbEJDUi5sZWZ0IC0gZ2V0VHJhbnNsYXRlKHNlY3Rpb24uZWwpLnggLSBnZXRUcmFuc2xhdGUodGFyZ2V0RWwpLng7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvcCA9IHRhcmdldEVsQkNSLnRvcCArIF90aGlzNi5pbnN0YW5jZS5zY3JvbGwueSAtIGdldFRyYW5zbGF0ZSh0YXJnZXRFbCkueTtcbiAgICAgICAgICAgIGxlZnQgPSB0YXJnZXRFbEJDUi5sZWZ0ICsgX3RoaXM2Lmluc3RhbmNlLnNjcm9sbC54IC0gZ2V0VHJhbnNsYXRlKHRhcmdldEVsKS54O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBib3R0b20gPSB0b3AgKyB0YXJnZXRFbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHZhciByaWdodCA9IGxlZnQgKyB0YXJnZXRFbC5vZmZzZXRXaWR0aDtcbiAgICAgICAgdmFyIG1pZGRsZSA9IHtcbiAgICAgICAgICB4OiAocmlnaHQgLSBsZWZ0KSAvIDIgKyBsZWZ0LFxuICAgICAgICAgIHk6IChib3R0b20gLSB0b3ApIC8gMiArIHRvcFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChzdGlja3kpIHtcbiAgICAgICAgICB2YXIgZWxCQ1IgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICB2YXIgZWxUb3AgPSBlbEJDUi50b3A7XG4gICAgICAgICAgdmFyIGVsTGVmdCA9IGVsQkNSLmxlZnQ7XG4gICAgICAgICAgdmFyIGVsRGlzdGFuY2UgPSB7XG4gICAgICAgICAgICB4OiBlbExlZnQgLSBsZWZ0LFxuICAgICAgICAgICAgeTogZWxUb3AgLSB0b3BcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRvcCArPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgbGVmdCArPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICBib3R0b20gPSBlbFRvcCArIHRhcmdldEVsLm9mZnNldEhlaWdodCAtIGVsLm9mZnNldEhlaWdodCAtIGVsRGlzdGFuY2VbX3RoaXM2LmRpcmVjdGlvbkF4aXNdO1xuICAgICAgICAgIHJpZ2h0ID0gZWxMZWZ0ICsgdGFyZ2V0RWwub2Zmc2V0V2lkdGggLSBlbC5vZmZzZXRXaWR0aCAtIGVsRGlzdGFuY2VbX3RoaXM2LmRpcmVjdGlvbkF4aXNdO1xuICAgICAgICAgIG1pZGRsZSA9IHtcbiAgICAgICAgICAgIHg6IChyaWdodCAtIGxlZnQpIC8gMiArIGxlZnQsXG4gICAgICAgICAgICB5OiAoYm90dG9tIC0gdG9wKSAvIDIgKyB0b3BcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlcGVhdCA9PSAnZmFsc2UnKSB7XG4gICAgICAgICAgcmVwZWF0ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAocmVwZWF0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJlcGVhdCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVwZWF0ID0gX3RoaXM2LnJlcGVhdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZWxhdGl2ZU9mZnNldCA9IFswLCAwXTtcblxuICAgICAgICBpZiAob2Zmc2V0KSB7XG4gICAgICAgICAgaWYgKF90aGlzNi5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvZmZzZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvZmZzZXRbaV0gPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0W2ldLmluY2x1ZGVzKCclJykpIHtcbiAgICAgICAgICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0W2ldID0gcGFyc2VJbnQob2Zmc2V0W2ldLnJlcGxhY2UoJyUnLCAnJykgKiBfdGhpczYud2luZG93V2lkdGggLyAxMDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZWxhdGl2ZU9mZnNldFtpXSA9IHBhcnNlSW50KG9mZnNldFtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0W2ldID0gb2Zmc2V0W2ldO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxlZnQgPSBsZWZ0ICsgcmVsYXRpdmVPZmZzZXRbMF07XG4gICAgICAgICAgICByaWdodCA9IHJpZ2h0IC0gcmVsYXRpdmVPZmZzZXRbMV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2Zmc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0W2ldID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldFtpXS5pbmNsdWRlcygnJScpKSB7XG4gICAgICAgICAgICAgICAgICByZWxhdGl2ZU9mZnNldFtpXSA9IHBhcnNlSW50KG9mZnNldFtpXS5yZXBsYWNlKCclJywgJycpICogX3RoaXM2LndpbmRvd0hlaWdodCAvIDEwMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0W2ldID0gcGFyc2VJbnQob2Zmc2V0W2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVsYXRpdmVPZmZzZXRbaV0gPSBvZmZzZXRbaV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdG9wID0gdG9wICsgcmVsYXRpdmVPZmZzZXRbMF07XG4gICAgICAgICAgICBib3R0b20gPSBib3R0b20gLSByZWxhdGl2ZU9mZnNldFsxXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbWFwcGVkRWwgPSB7XG4gICAgICAgICAgZWw6IGVsLFxuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBcImNsYXNzXCI6IGNsLFxuICAgICAgICAgIHNlY3Rpb246IHNlY3Rpb24sXG4gICAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgICAgbWlkZGxlOiBtaWRkbGUsXG4gICAgICAgICAgYm90dG9tOiBib3R0b20sXG4gICAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgICByaWdodDogcmlnaHQsXG4gICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICAgICAgcmVwZWF0OiByZXBlYXQsXG4gICAgICAgICAgaW5WaWV3OiBmYWxzZSxcbiAgICAgICAgICBjYWxsOiBjYWxsLFxuICAgICAgICAgIHNwZWVkOiBzcGVlZCxcbiAgICAgICAgICBkZWxheTogZGVsYXksXG4gICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgICAgIHRhcmdldDogdGFyZ2V0RWwsXG4gICAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgICAgICAgc3RpY2t5OiBzdGlja3lcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXM2LmVsc1tpZF0gPSBtYXBwZWRFbDtcblxuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsKSkge1xuICAgICAgICAgIF90aGlzNi5zZXRJblZpZXcoX3RoaXM2LmVsc1tpZF0sIGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzcGVlZCAhPT0gZmFsc2UgfHwgc3RpY2t5KSB7XG4gICAgICAgICAgX3RoaXM2LnBhcmFsbGF4RWxlbWVudHNbaWRdID0gbWFwcGVkRWw7XG4gICAgICAgIH1cbiAgICAgIH0pOyAvLyB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkU2VjdGlvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkU2VjdGlvbnMoKSB7XG4gICAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgICAgdGhpcy5zZWN0aW9ucyA9IHt9O1xuICAgICAgdmFyIHNlY3Rpb25zID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtXCIuY29uY2F0KHRoaXMubmFtZSwgXCItc2VjdGlvbl1cIikpO1xuXG4gICAgICBpZiAoc2VjdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHNlY3Rpb25zID0gW3RoaXMuZWxdO1xuICAgICAgfVxuXG4gICAgICBzZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChzZWN0aW9uLCBpbmRleCkge1xuICAgICAgICB2YXIgaWQgPSB0eXBlb2Ygc2VjdGlvbi5kYXRhc2V0W190aGlzNy5uYW1lICsgJ0lkJ10gPT09ICdzdHJpbmcnID8gc2VjdGlvbi5kYXRhc2V0W190aGlzNy5uYW1lICsgJ0lkJ10gOiAnc2VjdGlvbicgKyBpbmRleDtcbiAgICAgICAgdmFyIHNlY3Rpb25CQ1IgPSBzZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgb2Zmc2V0ID0ge1xuICAgICAgICAgIHg6IHNlY3Rpb25CQ1IubGVmdCAtIHdpbmRvdy5pbm5lcldpZHRoICogMS41IC0gZ2V0VHJhbnNsYXRlKHNlY3Rpb24pLngsXG4gICAgICAgICAgeTogc2VjdGlvbkJDUi50b3AgLSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAxLjUgLSBnZXRUcmFuc2xhdGUoc2VjdGlvbikueVxuICAgICAgICB9O1xuICAgICAgICB2YXIgbGltaXQgPSB7XG4gICAgICAgICAgeDogb2Zmc2V0LnggKyBzZWN0aW9uQkNSLndpZHRoICsgd2luZG93LmlubmVyV2lkdGggKiAyLFxuICAgICAgICAgIHk6IG9mZnNldC55ICsgc2VjdGlvbkJDUi5oZWlnaHQgKyB3aW5kb3cuaW5uZXJIZWlnaHQgKiAyXG4gICAgICAgIH07XG4gICAgICAgIHZhciBwZXJzaXN0ZW50ID0gdHlwZW9mIHNlY3Rpb24uZGF0YXNldFtfdGhpczcubmFtZSArICdQZXJzaXN0ZW50J10gPT09ICdzdHJpbmcnO1xuICAgICAgICBzZWN0aW9uLnNldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtc2VjdGlvbi1pZCcsIGlkKTtcbiAgICAgICAgdmFyIG1hcHBlZFNlY3Rpb24gPSB7XG4gICAgICAgICAgZWw6IHNlY3Rpb24sXG4gICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgbGltaXQ6IGxpbWl0LFxuICAgICAgICAgIGluVmlldzogZmFsc2UsXG4gICAgICAgICAgcGVyc2lzdGVudDogcGVyc2lzdGVudCxcbiAgICAgICAgICBpZDogaWRcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXM3LnNlY3Rpb25zW2lkXSA9IG1hcHBlZFNlY3Rpb247XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidHJhbnNmb3JtXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRyYW5zZm9ybShlbGVtZW50LCB4LCB5LCBkZWxheSkge1xuICAgICAgdmFyIHRyYW5zZm9ybTtcblxuICAgICAgaWYgKCFkZWxheSkge1xuICAgICAgICB0cmFuc2Zvcm0gPSBcIm1hdHJpeDNkKDEsMCwwLjAwLDAsMC4wMCwxLDAuMDAsMCwwLDAsMSwwLFwiLmNvbmNhdCh4LCBcIixcIikuY29uY2F0KHksIFwiLDAsMSlcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgc3RhcnQgPSBnZXRUcmFuc2xhdGUoZWxlbWVudCk7XG4gICAgICAgIHZhciBsZXJwWCA9IGxlcnAoc3RhcnQueCwgeCwgZGVsYXkpO1xuICAgICAgICB2YXIgbGVycFkgPSBsZXJwKHN0YXJ0LnksIHksIGRlbGF5KTtcbiAgICAgICAgdHJhbnNmb3JtID0gXCJtYXRyaXgzZCgxLDAsMC4wMCwwLDAuMDAsMSwwLjAwLDAsMCwwLDEsMCxcIi5jb25jYXQobGVycFgsIFwiLFwiKS5jb25jYXQobGVycFksIFwiLDAsMSlcIik7XG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgZWxlbWVudC5zdHlsZS5tc1RyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0cmFuc2Zvcm1FbGVtZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0cmFuc2Zvcm1FbGVtZW50cyhpc0ZvcmNlZCkge1xuICAgICAgdmFyIF90aGlzOCA9IHRoaXM7XG5cbiAgICAgIHZhciBzZXRBbGxFbGVtZW50cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgICB2YXIgc2Nyb2xsUmlnaHQgPSB0aGlzLmluc3RhbmNlLnNjcm9sbC54ICsgdGhpcy53aW5kb3dXaWR0aDtcbiAgICAgIHZhciBzY3JvbGxCb3R0b20gPSB0aGlzLmluc3RhbmNlLnNjcm9sbC55ICsgdGhpcy53aW5kb3dIZWlnaHQ7XG4gICAgICB2YXIgc2Nyb2xsTWlkZGxlID0ge1xuICAgICAgICB4OiB0aGlzLmluc3RhbmNlLnNjcm9sbC54ICsgdGhpcy53aW5kb3dNaWRkbGUueCxcbiAgICAgICAgeTogdGhpcy5pbnN0YW5jZS5zY3JvbGwueSArIHRoaXMud2luZG93TWlkZGxlLnlcbiAgICAgIH07XG4gICAgICBPYmplY3QuZW50cmllcyh0aGlzLnBhcmFsbGF4RWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24gKF9yZWY1KSB7XG4gICAgICAgIHZhciBfcmVmNiA9IF9zbGljZWRUb0FycmF5KF9yZWY1LCAyKSxcbiAgICAgICAgICAgIGkgPSBfcmVmNlswXSxcbiAgICAgICAgICAgIGN1cnJlbnQgPSBfcmVmNlsxXTtcblxuICAgICAgICB2YXIgdHJhbnNmb3JtRGlzdGFuY2UgPSBmYWxzZTtcblxuICAgICAgICBpZiAoaXNGb3JjZWQpIHtcbiAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudC5pblZpZXcgfHwgc2V0QWxsRWxlbWVudHMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGN1cnJlbnQucG9zaXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gX3RoaXM4Lmluc3RhbmNlLnNjcm9sbFtfdGhpczguZGlyZWN0aW9uQXhpc10gKiAtY3VycmVudC5zcGVlZDtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2VsZW1lbnRUb3AnOlxuICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IChzY3JvbGxCb3R0b20gLSBjdXJyZW50LnRvcCkgKiAtY3VycmVudC5zcGVlZDtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gKF90aGlzOC5pbnN0YW5jZS5saW1pdFtfdGhpczguZGlyZWN0aW9uQXhpc10gLSBzY3JvbGxCb3R0b20gKyBfdGhpczgud2luZG93SGVpZ2h0KSAqIGN1cnJlbnQuc3BlZWQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSBfdGhpczguaW5zdGFuY2Uuc2Nyb2xsW190aGlzOC5kaXJlY3Rpb25BeGlzXSAqIC1jdXJyZW50LnNwZWVkO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnZWxlbWVudExlZnQnOlxuICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IChzY3JvbGxSaWdodCAtIGN1cnJlbnQubGVmdCkgKiAtY3VycmVudC5zcGVlZDtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSAoX3RoaXM4Lmluc3RhbmNlLmxpbWl0W190aGlzOC5kaXJlY3Rpb25BeGlzXSAtIHNjcm9sbFJpZ2h0ICsgX3RoaXM4LndpbmRvd0hlaWdodCkgKiBjdXJyZW50LnNwZWVkO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSAoc2Nyb2xsTWlkZGxlW190aGlzOC5kaXJlY3Rpb25BeGlzXSAtIGN1cnJlbnQubWlkZGxlW190aGlzOC5kaXJlY3Rpb25BeGlzXSkgKiAtY3VycmVudC5zcGVlZDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnQuc3RpY2t5KSB7XG4gICAgICAgICAgaWYgKGN1cnJlbnQuaW5WaWV3KSB7XG4gICAgICAgICAgICBpZiAoX3RoaXM4LmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gX3RoaXM4Lmluc3RhbmNlLnNjcm9sbC54IC0gY3VycmVudC5sZWZ0ICsgd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IF90aGlzOC5pbnN0YW5jZS5zY3JvbGwueSAtIGN1cnJlbnQudG9wICsgd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoX3RoaXM4LmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgIGlmIChfdGhpczguaW5zdGFuY2Uuc2Nyb2xsLnggPCBjdXJyZW50LmxlZnQgLSB3aW5kb3cuaW5uZXJXaWR0aCAmJiBfdGhpczguaW5zdGFuY2Uuc2Nyb2xsLnggPCBjdXJyZW50LmxlZnQgLSB3aW5kb3cuaW5uZXJXaWR0aCAvIDIpIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IDA7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoX3RoaXM4Lmluc3RhbmNlLnNjcm9sbC54ID4gY3VycmVudC5yaWdodCAmJiBfdGhpczguaW5zdGFuY2Uuc2Nyb2xsLnggPiBjdXJyZW50LnJpZ2h0ICsgMTAwKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSBjdXJyZW50LnJpZ2h0IC0gY3VycmVudC5sZWZ0ICsgd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKF90aGlzOC5pbnN0YW5jZS5zY3JvbGwueSA8IGN1cnJlbnQudG9wIC0gd2luZG93LmlubmVySGVpZ2h0ICYmIF90aGlzOC5pbnN0YW5jZS5zY3JvbGwueSA8IGN1cnJlbnQudG9wIC0gd2luZG93LmlubmVySGVpZ2h0IC8gMikge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gMDtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChfdGhpczguaW5zdGFuY2Uuc2Nyb2xsLnkgPiBjdXJyZW50LmJvdHRvbSAmJiBfdGhpczguaW5zdGFuY2Uuc2Nyb2xsLnkgPiBjdXJyZW50LmJvdHRvbSArIDEwMCkge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gY3VycmVudC5ib3R0b20gLSBjdXJyZW50LnRvcCArIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyYW5zZm9ybURpc3RhbmNlICE9PSBmYWxzZSkge1xuICAgICAgICAgIGlmIChjdXJyZW50LmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnIHx8IF90aGlzOC5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyAmJiBjdXJyZW50LmRpcmVjdGlvbiAhPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgX3RoaXM4LnRyYW5zZm9ybShjdXJyZW50LmVsLCB0cmFuc2Zvcm1EaXN0YW5jZSwgMCwgaXNGb3JjZWQgPyBmYWxzZSA6IGN1cnJlbnQuZGVsYXkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpczgudHJhbnNmb3JtKGN1cnJlbnQuZWwsIDAsIHRyYW5zZm9ybURpc3RhbmNlLCBpc0ZvcmNlZCA/IGZhbHNlIDogY3VycmVudC5kZWxheSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHRvIGEgZGVzaXJlZCB0YXJnZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIEF2YWlsYWJsZSBvcHRpb25zIDpcbiAgICAgKiAgICAgICAgICB0YXJnZXQge25vZGUsIHN0cmluZywgXCJ0b3BcIiwgXCJib3R0b21cIiwgaW50fSAtIFRoZSBET00gZWxlbWVudCB3ZSB3YW50IHRvIHNjcm9sbCB0b1xuICAgICAqICAgICAgICAgIG9wdGlvbnMge29iamVjdH0gLSBPcHRpb25zIG9iamVjdCBmb3IgYWRkaXRpb25uYWwgc2V0dGluZ3MuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNjcm9sbFRvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNjcm9sbFRvKHRhcmdldCkge1xuICAgICAgdmFyIF90aGlzOSA9IHRoaXM7XG5cbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIC8vIFBhcnNlIG9wdGlvbnNcbiAgICAgIHZhciBvZmZzZXQgPSBwYXJzZUludChvcHRpb25zLm9mZnNldCkgfHwgMDsgLy8gQW4gb2Zmc2V0IHRvIGFwcGx5IG9uIHRvcCBvZiBnaXZlbiBgdGFyZ2V0YCBvciBgc291cmNlRWxlbWAncyB0YXJnZXRcblxuICAgICAgdmFyIGR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbiB8fCAxMDAwOyAvLyBEdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBpbiBtaWxsaXNlY29uZHNcblxuICAgICAgdmFyIGVhc2luZyA9IG9wdGlvbnMuZWFzaW5nIHx8IFswLjI1LCAwLjAsIDAuMzUsIDEuMF07IC8vIEFuIGFycmF5IG9mIDQgZmxvYXRzIGJldHdlZW4gMCBhbmQgMSBkZWZpbmluZyB0aGUgYmV6aWVyIGN1cnZlIGZvciB0aGUgYW5pbWF0aW9uJ3MgZWFzaW5nLiBTZWUgaHR0cDovL2dyZXdlYi5tZS9iZXppZXItZWFzaW5nLWVkaXRvci9leGFtcGxlL1xuXG4gICAgICB2YXIgZGlzYWJsZUxlcnAgPSBvcHRpb25zLmRpc2FibGVMZXJwID8gdHJ1ZSA6IGZhbHNlOyAvLyBMZXJwIGVmZmVjdCB3b24ndCBiZSBhcHBsaWVkIGlmIHNldCB0byB0cnVlXG5cbiAgICAgIHZhciBjYWxsYmFjayA9IG9wdGlvbnMuY2FsbGJhY2sgPyBvcHRpb25zLmNhbGxiYWNrIDogZmFsc2U7IC8vIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHNjcm9sbFRvIGNvbXBsZXRlcyAobm90ZSB0aGF0IGl0IHdvbid0IHdhaXQgZm9yIGxlcnAgdG8gc3RhYmlsaXplKVxuXG4gICAgICBlYXNpbmcgPSBzcmMkMS5hcHBseSh2b2lkIDAsIF90b0NvbnN1bWFibGVBcnJheShlYXNpbmcpKTtcblxuICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIFNlbGVjdG9yIG9yIGJvdW5kYXJpZXNcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICB0YXJnZXQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICB0YXJnZXQgPSB0aGlzLmluc3RhbmNlLmxpbWl0Lnk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSAnbGVmdCcpIHtcbiAgICAgICAgICB0YXJnZXQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgIHRhcmdldCA9IHRoaXMuaW5zdGFuY2UubGltaXQueDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIElmIHRoZSBxdWVyeSBmYWlscywgYWJvcnRcblxuICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdudW1iZXInKSB7XG4gICAgICAgIC8vIEFic29sdXRlIGNvb3JkaW5hdGVcbiAgICAgICAgdGFyZ2V0ID0gcGFyc2VJbnQodGFyZ2V0KTtcbiAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ICYmIHRhcmdldC50YWdOYW1lKSA7IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oJ2B0YXJnZXRgIHBhcmFtZXRlciBpcyBub3QgdmFsaWQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBXZSBoYXZlIGEgdGFyZ2V0IHRoYXQgaXMgbm90IGEgY29vcmRpbmF0ZSB5ZXQsIGdldCBpdFxuXG5cbiAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSAnbnVtYmVyJykge1xuICAgICAgICAvLyBWZXJpZnkgdGhlIGdpdmVuIHRhcmdldCBiZWxvbmdzIHRvIHRoaXMgc2Nyb2xsIHNjb3BlXG4gICAgICAgIHZhciB0YXJnZXRJblNjb3BlID0gZ2V0UGFyZW50cyh0YXJnZXQpLmluY2x1ZGVzKHRoaXMuZWwpO1xuXG4gICAgICAgIGlmICghdGFyZ2V0SW5TY29wZSkge1xuICAgICAgICAgIC8vIElmIHRoZSB0YXJnZXQgaXNuJ3QgaW5zaWRlIG91ciBtYWluIGVsZW1lbnQsIGFib3J0IGFueSBhY3Rpb25cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gR2V0IHRhcmdldCBvZmZzZXQgZnJvbSB0b3BcblxuXG4gICAgICAgIHZhciB0YXJnZXRCQ1IgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBvZmZzZXRUb3AgPSB0YXJnZXRCQ1IudG9wO1xuICAgICAgICB2YXIgb2Zmc2V0TGVmdCA9IHRhcmdldEJDUi5sZWZ0OyAvLyBUcnkgYW5kIGZpbmQgdGhlIHRhcmdldCdzIHBhcmVudCBzZWN0aW9uXG5cbiAgICAgICAgdmFyIHRhcmdldFBhcmVudHMgPSBnZXRQYXJlbnRzKHRhcmdldCk7XG4gICAgICAgIHZhciBwYXJlbnRTZWN0aW9uID0gdGFyZ2V0UGFyZW50cy5maW5kKGZ1bmN0aW9uIChjYW5kaWRhdGUpIHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoX3RoaXM5LnNlY3Rpb25zKSAvLyBHZXQgc2VjdGlvbnMgYXNzb2NpYXRpdmUgYXJyYXkgYXMgYSByZWd1bGFyIGFycmF5XG4gICAgICAgICAgLm1hcChmdW5jdGlvbiAoX3JlZjcpIHtcbiAgICAgICAgICAgIHZhciBfcmVmOCA9IF9zbGljZWRUb0FycmF5KF9yZWY3LCAyKSxcbiAgICAgICAgICAgICAgICBrZXkgPSBfcmVmOFswXSxcbiAgICAgICAgICAgICAgICBzZWN0aW9uID0gX3JlZjhbMV07XG5cbiAgICAgICAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgICAgICAgIH0pIC8vIG1hcCB0byBzZWN0aW9uIG9ubHkgKHdlIGRvbnQgbmVlZCB0aGUga2V5IGhlcmUpXG4gICAgICAgICAgLmZpbmQoZnVuY3Rpb24gKHNlY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBzZWN0aW9uLmVsID09IGNhbmRpZGF0ZTtcbiAgICAgICAgICB9KTsgLy8gZmluYWxseSBmaW5kIHRoZSBzZWN0aW9uIHRoYXQgbWF0Y2hlcyB0aGUgY2FuZGlkYXRlXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgcGFyZW50U2VjdGlvbk9mZnNldCA9IDA7XG5cbiAgICAgICAgaWYgKHBhcmVudFNlY3Rpb24pIHtcbiAgICAgICAgICBwYXJlbnRTZWN0aW9uT2Zmc2V0ID0gZ2V0VHJhbnNsYXRlKHBhcmVudFNlY3Rpb24pW3RoaXMuZGlyZWN0aW9uQXhpc107IC8vIFdlIGdvdCBhIHBhcmVudCBzZWN0aW9uLCBzdG9yZSBpdCdzIGN1cnJlbnQgb2Zmc2V0IHRvIHJlbW92ZSBpdCBsYXRlclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGlmIG5vIHBhcmVudCBzZWN0aW9uIGlzIGZvdW5kIHdlIG5lZWQgdG8gdXNlIGluc3RhbmNlIHNjcm9sbCBkaXJlY3RseVxuICAgICAgICAgIHBhcmVudFNlY3Rpb25PZmZzZXQgPSAtdGhpcy5pbnN0YW5jZS5zY3JvbGxbdGhpcy5kaXJlY3Rpb25BeGlzXTtcbiAgICAgICAgfSAvLyBGaW5hbCB2YWx1ZSBvZiBzY3JvbGwgZGVzdGluYXRpb24gOiBvZmZzZXRUb3AgKyAob3B0aW9uYWwgb2Zmc2V0IGdpdmVuIGluIG9wdGlvbnMpIC0gKHBhcmVudCdzIHNlY3Rpb24gdHJhbnNsYXRlKVxuXG5cbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICBvZmZzZXQgPSBvZmZzZXRMZWZ0ICsgb2Zmc2V0IC0gcGFyZW50U2VjdGlvbk9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvZmZzZXQgPSBvZmZzZXRUb3AgKyBvZmZzZXQgLSBwYXJlbnRTZWN0aW9uT2Zmc2V0O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvZmZzZXQgPSB0YXJnZXQgKyBvZmZzZXQ7XG4gICAgICB9IC8vIEFjdHVhbCBzY3JvbGx0b1xuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgIC8vIFNldHVwXG5cblxuICAgICAgdmFyIHNjcm9sbFN0YXJ0ID0gcGFyc2VGbG9hdCh0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10pO1xuICAgICAgdmFyIHNjcm9sbFRhcmdldCA9IE1hdGgubWF4KDAsIE1hdGgubWluKG9mZnNldCwgdGhpcy5pbnN0YW5jZS5saW1pdFt0aGlzLmRpcmVjdGlvbkF4aXNdKSk7IC8vIE1ha2Ugc3VyZSBvdXIgdGFyZ2V0IGlzIGluIHRoZSBzY3JvbGwgYm91bmRhcmllc1xuXG4gICAgICB2YXIgc2Nyb2xsRGlmZiA9IHNjcm9sbFRhcmdldCAtIHNjcm9sbFN0YXJ0O1xuXG4gICAgICB2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHApIHtcbiAgICAgICAgaWYgKGRpc2FibGVMZXJwKSB7XG4gICAgICAgICAgaWYgKF90aGlzOS5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgX3RoaXM5LnNldFNjcm9sbChzY3JvbGxTdGFydCArIHNjcm9sbERpZmYgKiBwLCBfdGhpczkuaW5zdGFuY2UuZGVsdGEueSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzOS5zZXRTY3JvbGwoX3RoaXM5Lmluc3RhbmNlLmRlbHRhLngsIHNjcm9sbFN0YXJ0ICsgc2Nyb2xsRGlmZiAqIHApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpczkuaW5zdGFuY2UuZGVsdGFbX3RoaXM5LmRpcmVjdGlvbkF4aXNdID0gc2Nyb2xsU3RhcnQgKyBzY3JvbGxEaWZmICogcDtcbiAgICAgICAgfVxuICAgICAgfTsgLy8gUHJlcGFyZSB0aGUgc2Nyb2xsXG5cblxuICAgICAgdGhpcy5hbmltYXRpbmdTY3JvbGwgPSB0cnVlOyAvLyBUaGlzIGJvb2xlYW4gYWxsb3dzIHRvIHByZXZlbnQgYGNoZWNrU2Nyb2xsKClgIGZyb20gY2FsbGluZyBgc3RvcFNjcm9sbGluZ2Agd2hlbiB0aGUgYW5pbWF0aW9uIGlzIHNsb3cgKGkuZS4gYXQgdGhlIGJlZ2lubmluZyBvZiBhbiBFYXNlSW4pXG5cbiAgICAgIHRoaXMuc3RvcFNjcm9sbGluZygpOyAvLyBTdG9wIGFueSBtb3ZlbWVudCwgYWxsb3dzIHRvIGtpbGwgYW55IG90aGVyIGBzY3JvbGxUb2Agc3RpbGwgaGFwcGVuaW5nXG5cbiAgICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoKTsgLy8gUmVzdGFydCB0aGUgc2Nyb2xsXG4gICAgICAvLyBTdGFydCB0aGUgYW5pbWF0aW9uIGxvb3BcblxuICAgICAgdmFyIHN0YXJ0ID0gRGF0ZS5ub3coKTtcblxuICAgICAgdmFyIGxvb3AgPSBmdW5jdGlvbiBsb29wKCkge1xuICAgICAgICB2YXIgcCA9IChEYXRlLm5vdygpIC0gc3RhcnQpIC8gZHVyYXRpb247IC8vIEFuaW1hdGlvbiBwcm9ncmVzc1xuXG4gICAgICAgIGlmIChwID4gMSkge1xuICAgICAgICAgIC8vIEFuaW1hdGlvbiBlbmRzXG4gICAgICAgICAgcmVuZGVyKDEpO1xuICAgICAgICAgIF90aGlzOS5hbmltYXRpbmdTY3JvbGwgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoZHVyYXRpb24gPT0gMCkgX3RoaXM5LnVwZGF0ZSgpO1xuICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpczkuc2Nyb2xsVG9SYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgICAgICAgcmVuZGVyKGVhc2luZyhwKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGxvb3AoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuc2V0U2Nyb2xsTGltaXQoKTtcbiAgICAgIHRoaXMuYWRkU2VjdGlvbnMoKTtcbiAgICAgIHRoaXMuYWRkRWxlbWVudHMoKTtcbiAgICAgIHRoaXMuZGV0ZWN0RWxlbWVudHMoKTtcbiAgICAgIHRoaXMudXBkYXRlU2Nyb2xsKCk7XG4gICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnRzKHRydWUpO1xuICAgICAgdGhpcy5yZWluaXRTY3JvbGxCYXIoKTtcbiAgICAgIHRoaXMuY2hlY2tTY3JvbGwodHJ1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0YXJ0U2Nyb2xsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0U2Nyb2xsKCkge1xuICAgICAgdGhpcy5zdG9wID0gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BTY3JvbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcFNjcm9sbCgpIHtcbiAgICAgIHRoaXMuc3RvcCA9IHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFNjcm9sbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRTY3JvbGwoeCwgeSkge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCB0aGlzLmluc3RhbmNlKSwge30sIHtcbiAgICAgICAgc2Nyb2xsOiB7XG4gICAgICAgICAgeDogeCxcbiAgICAgICAgICB5OiB5XG4gICAgICAgIH0sXG4gICAgICAgIGRlbHRhOiB7XG4gICAgICAgICAgeDogeCxcbiAgICAgICAgICB5OiB5XG4gICAgICAgIH0sXG4gICAgICAgIHNwZWVkOiAwXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVzdHJveVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoX2RlZmF1bHQucHJvdG90eXBlKSwgXCJkZXN0cm95XCIsIHRoaXMpLmNhbGwodGhpcyk7XG5cbiAgICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuICAgICAgdGhpcy5odG1sLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zbW9vdGhDbGFzcyk7XG4gICAgICB0aGlzLnZzLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuZGVzdHJveVNjcm9sbEJhcigpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmNoZWNrS2V5LCBmYWxzZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIF9kZWZhdWx0O1xufShfZGVmYXVsdCk7XG5cbnZhciBTbW9vdGggPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTbW9vdGgoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNtb290aCk7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zOyAvLyBPdmVycmlkZSBkZWZhdWx0IG9wdGlvbnMgd2l0aCBnaXZlbiBvbmVzXG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB0aGlzLnNtYXJ0cGhvbmUgPSBkZWZhdWx0cy5zbWFydHBob25lO1xuICAgIGlmIChvcHRpb25zLnNtYXJ0cGhvbmUpIE9iamVjdC5hc3NpZ24odGhpcy5zbWFydHBob25lLCBvcHRpb25zLnNtYXJ0cGhvbmUpO1xuICAgIHRoaXMudGFibGV0ID0gZGVmYXVsdHMudGFibGV0O1xuICAgIGlmIChvcHRpb25zLnRhYmxldCkgT2JqZWN0LmFzc2lnbih0aGlzLnRhYmxldCwgb3B0aW9ucy50YWJsZXQpO1xuICAgIGlmICghdGhpcy5zbW9vdGggJiYgdGhpcy5kaXJlY3Rpb24gPT0gJ2hvcml6b250YWwnKSBjb25zb2xlLndhcm4oJ/CfmqggYHNtb290aDpmYWxzZWAgJiBgaG9yaXpvbnRhbGAgZGlyZWN0aW9uIGFyZSBub3QgeWV0IGNvbXBhdGlibGUnKTtcbiAgICBpZiAoIXRoaXMudGFibGV0LnNtb290aCAmJiB0aGlzLnRhYmxldC5kaXJlY3Rpb24gPT0gJ2hvcml6b250YWwnKSBjb25zb2xlLndhcm4oJ/CfmqggYHNtb290aDpmYWxzZWAgJiBgaG9yaXpvbnRhbGAgZGlyZWN0aW9uIGFyZSBub3QgeWV0IGNvbXBhdGlibGUgKHRhYmxldCknKTtcbiAgICBpZiAoIXRoaXMuc21hcnRwaG9uZS5zbW9vdGggJiYgdGhpcy5zbWFydHBob25lLmRpcmVjdGlvbiA9PSAnaG9yaXpvbnRhbCcpIGNvbnNvbGUud2Fybign8J+aqCBgc21vb3RoOmZhbHNlYCAmIGBob3Jpem9udGFsYCBkaXJlY3Rpb24gYXJlIG5vdCB5ZXQgY29tcGF0aWJsZSAoc21hcnRwaG9uZSknKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTbW9vdGgsIFt7XG4gICAga2V5OiBcImluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5pc01vYmlsZSA9IC9BbmRyb2lkfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSB8fCBuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdNYWNJbnRlbCcgJiYgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMSB8fCB3aW5kb3cuaW5uZXJXaWR0aCA8IHRoaXMudGFibGV0LmJyZWFrcG9pbnQ7XG4gICAgICB0aGlzLm9wdGlvbnMuaXNUYWJsZXQgPSB0aGlzLm9wdGlvbnMuaXNNb2JpbGUgJiYgd2luZG93LmlubmVyV2lkdGggPj0gdGhpcy50YWJsZXQuYnJlYWtwb2ludDtcblxuICAgICAgaWYgKHRoaXMuc21vb3RoICYmICF0aGlzLm9wdGlvbnMuaXNNb2JpbGUgfHwgdGhpcy50YWJsZXQuc21vb3RoICYmIHRoaXMub3B0aW9ucy5pc1RhYmxldCB8fCB0aGlzLnNtYXJ0cGhvbmUuc21vb3RoICYmIHRoaXMub3B0aW9ucy5pc01vYmlsZSAmJiAhdGhpcy5vcHRpb25zLmlzVGFibGV0KSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsID0gbmV3IF9kZWZhdWx0JDIodGhpcy5vcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsID0gbmV3IF9kZWZhdWx0JDEodGhpcy5vcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zY3JvbGwuaW5pdCgpO1xuXG4gICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcbiAgICAgICAgLy8gR2V0IHRoZSBoYXNoIHdpdGhvdXQgdGhlICcjJyBhbmQgZmluZCB0aGUgbWF0Y2hpbmcgZWxlbWVudFxuICAgICAgICB2YXIgaWQgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxLCB3aW5kb3cubG9jYXRpb24uaGFzaC5sZW5ndGgpO1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpOyAvLyBJZiBmb3VuZCwgc2Nyb2xsIHRvIHRoZSBlbGVtZW50XG5cbiAgICAgICAgaWYgKHRhcmdldCkgdGhpcy5zY3JvbGwuc2Nyb2xsVG8odGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLnVwZGF0ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdGFydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLnN0YXJ0U2Nyb2xsKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLnN0b3BTY3JvbGwoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2Nyb2xsVG9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2Nyb2xsVG8odGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICB0aGlzLnNjcm9sbC5zY3JvbGxUbyh0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRTY3JvbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U2Nyb2xsKHgsIHkpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLnNldFNjcm9sbCh4LCB5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXZlbnQsIGZ1bmMpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLnNldEV2ZW50cyhldmVudCwgZnVuYyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9mZlwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvZmYoZXZlbnQsIGZ1bmMpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLnVuc2V0RXZlbnRzKGV2ZW50LCBmdW5jKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVzdHJveVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdGhpcy5zY3JvbGwuZGVzdHJveSgpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTbW9vdGg7XG59KCk7XG5cbnZhciBOYXRpdmUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBOYXRpdmUoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5hdGl2ZSk7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zOyAvLyBPdmVycmlkZSBkZWZhdWx0IG9wdGlvbnMgd2l0aCBnaXZlbiBvbmVzXG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB0aGlzLnNtYXJ0cGhvbmUgPSBkZWZhdWx0cy5zbWFydHBob25lO1xuICAgIGlmIChvcHRpb25zLnNtYXJ0cGhvbmUpIE9iamVjdC5hc3NpZ24odGhpcy5zbWFydHBob25lLCBvcHRpb25zLnNtYXJ0cGhvbmUpO1xuICAgIHRoaXMudGFibGV0ID0gZGVmYXVsdHMudGFibGV0O1xuICAgIGlmIChvcHRpb25zLnRhYmxldCkgT2JqZWN0LmFzc2lnbih0aGlzLnRhYmxldCwgb3B0aW9ucy50YWJsZXQpO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE5hdGl2ZSwgW3tcbiAgICBrZXk6IFwiaW5pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdGhpcy5zY3JvbGwgPSBuZXcgX2RlZmF1bHQkMSh0aGlzLm9wdGlvbnMpO1xuICAgICAgdGhpcy5zY3JvbGwuaW5pdCgpO1xuXG4gICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcbiAgICAgICAgLy8gR2V0IHRoZSBoYXNoIHdpdGhvdXQgdGhlICcjJyBhbmQgZmluZCB0aGUgbWF0Y2hpbmcgZWxlbWVudFxuICAgICAgICB2YXIgaWQgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxLCB3aW5kb3cubG9jYXRpb24uaGFzaC5sZW5ndGgpO1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpOyAvLyBJZiBmb3VuZCwgc2Nyb2xsIHRvIHRoZSBlbGVtZW50XG5cbiAgICAgICAgaWYgKHRhcmdldCkgdGhpcy5zY3JvbGwuc2Nyb2xsVG8odGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLnVwZGF0ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdGFydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLnN0YXJ0U2Nyb2xsKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLnN0b3BTY3JvbGwoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2Nyb2xsVG9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2Nyb2xsVG8odGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICB0aGlzLnNjcm9sbC5zY3JvbGxUbyh0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRTY3JvbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U2Nyb2xsKHgsIHkpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLnNldFNjcm9sbCh4LCB5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXZlbnQsIGZ1bmMpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLnNldEV2ZW50cyhldmVudCwgZnVuYyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9mZlwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvZmYoZXZlbnQsIGZ1bmMpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLnVuc2V0RXZlbnRzKGV2ZW50LCBmdW5jKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVzdHJveVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdGhpcy5zY3JvbGwuZGVzdHJveSgpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOYXRpdmU7XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNtb290aDtcbmV4cG9ydCB7IE5hdGl2ZSwgU21vb3RoIH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9XG4vKioqKioqLyAoZnVuY3Rpb24oKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVzX18gPSAoe1xuXG4vKioqLyAxNDk6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlKSB7XG5cbnZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyBcdH0pO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdHZhciB0aHJldyA9IHRydWU7XG4vKioqKioqLyBcdFx0dHJ5IHtcbi8qKioqKiovIFx0XHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fbmNjd3Bja19yZXF1aXJlX18pO1xuLyoqKioqKi8gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbi8qKioqKiovIFx0XHR9IGZpbmFsbHkge1xuLyoqKioqKi8gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvY29tcGF0ICovXG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRfX25jY3dwY2tfcmVxdWlyZV9fLmFiID0gX19kaXJuYW1lICsgXCIvXCI7LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8qKioqKiovIFx0Ly8gc3RhcnR1cFxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oMTQ5KTtcbi8qKioqKiovIH0pKClcbjsiXSwic291cmNlUm9vdCI6IiJ9