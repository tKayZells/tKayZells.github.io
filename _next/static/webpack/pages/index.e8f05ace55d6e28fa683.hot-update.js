webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_html_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/html/navigation */ "./components/html/navigation.jsx");
/* harmony import */ var _components_html_scrollindicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/html/scrollindicator */ "./components/html/scrollindicator.jsx");
/* harmony import */ var _components_sections_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/sections/about */ "./components/sections/about.jsx");
/* harmony import */ var _components_sections_contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/sections/contact */ "./components/sections/contact.jsx");
/* harmony import */ var _components_sections_intro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/sections/intro */ "./components/sections/intro.jsx");
/* harmony import */ var _components_sections_projects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/sections/projects */ "./components/sections/projects.jsx");
/* harmony import */ var _components_sections_skills__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/sections/skills */ "./components/sections/skills.jsx");



var _jsxFileName = "/home/dev/projects/tkayzells/pages/index.jsx",
    _s = $RefreshSig$();










var locomotiveScroll = {};

var ScrollToTarget = function ScrollToTarget(target) {
  return locomotiveScroll.scrollTo(target, {});
};

_c = ScrollToTarget;
function Home() {
  _s();

  var scrollRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! locomotive-scroll */ "./node_modules/locomotive-scroll/dist/locomotive-scroll.esm.js")).then(function (locomotivemodule) {
      locomotiveScroll = new locomotivemodule["default"]({
        el: scrollRef.current,
        smooth: true,
        getDirection: true
      });
      locomotiveScroll.on('scroll', function (instance) {
        document.documentElement.setAttribute('data-direction', instance.direction);
      });
    });
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Miguel Lucena - Web App Developer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "author",
        content: "Miguel Lucena"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Hi, I'm Miguel Lucena a web app developer, currently located in M\xE1laga, Spain."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "keyword",
        content: "App, Web, Developer, Portfolio, M\xE1laga, Madrid, Spain"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: "Miguel Lucena - Web App Developer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: "Hi, I'm Miguel Lucena a web app developer, currently located in M\xE1laga, Spain."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:type",
        content: "website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image",
        content: "/og/portfolio.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_html_navigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
      scrollTargetEvent: ScrollToTarget
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      ref: scrollRef,
      className: "relative",
      "data-scroll-container": true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_sections_intro__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_sections_about__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_sections_skills__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_sections_projects__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_sections_contact__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Home, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c2 = Home;

var _c, _c2;

$RefreshReg$(_c, "ScrollToTarget");
$RefreshReg$(_c2, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbImxvY29tb3RpdmVTY3JvbGwiLCJTY3JvbGxUb1RhcmdldCIsInRhcmdldCIsInNjcm9sbFRvIiwiSG9tZSIsInNjcm9sbFJlZiIsImNyZWF0ZVJlZiIsInVzZUVmZmVjdCIsInRoZW4iLCJsb2NvbW90aXZlbW9kdWxlIiwiZWwiLCJjdXJyZW50Iiwic21vb3RoIiwiZ2V0RGlyZWN0aW9uIiwib24iLCJpbnN0YW5jZSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiZGlyZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBSUEsZ0JBQWdCLEdBQUcsRUFBdkI7O0FBQ0EsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFFQyxNQUFGO0FBQUEsU0FBY0YsZ0JBQWdCLENBQUNHLFFBQWpCLENBQTJCRCxNQUEzQixFQUFtQyxFQUFuQyxDQUFkO0FBQUEsQ0FBdkI7O0tBQU1ELGM7QUFFUyxTQUFTRyxJQUFULEdBQWdCO0FBQUE7O0FBRTdCLE1BQU1DLFNBQVMsZ0JBQUdDLHVEQUFTLEVBQTNCO0FBRUFDLHlEQUFTLENBQUUsWUFBSztBQUVkLDZLQUE0QkMsSUFBNUIsQ0FBa0MsVUFBQUMsZ0JBQWdCLEVBQUk7QUFFcERULHNCQUFnQixHQUFHLElBQUlTLGdCQUFnQixXQUFwQixDQUE2QjtBQUM1Q0MsVUFBRSxFQUFFTCxTQUFTLENBQUNNLE9BRDhCO0FBRTVDQyxjQUFNLEVBQUUsSUFGb0M7QUFHNUNDLG9CQUFZLEVBQUU7QUFIOEIsT0FBN0IsQ0FBbkI7QUFNQWIsc0JBQWdCLENBQUNjLEVBQWpCLENBQW9CLFFBQXBCLEVBQThCLFVBQUNDLFFBQUQsRUFBYztBQUMxQ0MsZ0JBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsWUFBekIsQ0FBc0MsZ0JBQXRDLEVBQXdESCxRQUFRLENBQUNJLFNBQWpFO0FBQ0QsT0FGRDtBQUlELEtBWkQ7QUFjRCxHQWhCUSxDQUFUO0FBa0JBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBTSxZQUFJLEVBQUMsUUFBWDtBQUFvQixlQUFPLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUU7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBS0U7QUFBTSxZQUFJLEVBQUMsU0FBWDtBQUFxQixlQUFPLEVBQUM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBTUU7QUFBTSxnQkFBUSxFQUFDLFVBQWY7QUFBMEIsZUFBTyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQU9FO0FBQU0sZ0JBQVEsRUFBQyxnQkFBZjtBQUFnQyxlQUFPLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBUUU7QUFBTSxnQkFBUSxFQUFDLFNBQWY7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixlQVNFO0FBQU0sZ0JBQVEsRUFBQyxVQUFmO0FBQTBCLGVBQU8sRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFhRSxxRUFBQyxtRUFBRDtBQUFZLHVCQUFpQixFQUFHbEI7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGLGVBZUU7QUFBTSxTQUFHLEVBQUdJLFNBQVo7QUFBd0IsZUFBUyxFQUFDLFVBQWxDO0FBQTZDLG1DQUE3QztBQUFBLDhCQUVFLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUlFLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQU1FLHFFQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQVFFLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixlQVdFLHFFQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmRjtBQUFBLGtCQURGO0FBaUNEOztHQXZEdUJELEk7O01BQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZThmMDVhY2U1NWQ2ZTI4ZmE2ODMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgY3JlYXRlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9odG1sL25hdmlnYXRpb24nO1xuaW1wb3J0IFNjcm9sbEluZGljYXRvciBmcm9tICcuLi9jb21wb25lbnRzL2h0bWwvc2Nyb2xsaW5kaWNhdG9yJztcbmltcG9ydCBBYm91dCBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb25zL2Fib3V0JztcbmltcG9ydCBDb250YWN0IGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbnMvY29udGFjdCc7XG5pbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9pbnRybyc7XG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9wcm9qZWN0cyc7XG5pbXBvcnQgU2tpbGxzIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbnMvc2tpbGxzJztcblxuXG5sZXQgbG9jb21vdGl2ZVNjcm9sbCA9IHt9O1xuY29uc3QgU2Nyb2xsVG9UYXJnZXQgPSAoIHRhcmdldCApID0+IGxvY29tb3RpdmVTY3JvbGwuc2Nyb2xsVG8oIHRhcmdldCwge30gKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgXG4gIGNvbnN0IHNjcm9sbFJlZiA9IGNyZWF0ZVJlZigpO1xuXG4gIHVzZUVmZmVjdCggKCkgPT57XG4gICAgXG4gICAgaW1wb3J0KFwibG9jb21vdGl2ZS1zY3JvbGxcIikudGhlbiggbG9jb21vdGl2ZW1vZHVsZSA9PiB7XG5cbiAgICAgIGxvY29tb3RpdmVTY3JvbGwgPSBuZXcgbG9jb21vdGl2ZW1vZHVsZS5kZWZhdWx0KHtcbiAgICAgICAgICBlbDogc2Nyb2xsUmVmLmN1cnJlbnQsIFxuICAgICAgICAgIHNtb290aDogdHJ1ZSxcbiAgICAgICAgICBnZXREaXJlY3Rpb246IHRydWVcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBsb2NvbW90aXZlU2Nyb2xsLm9uKCdzY3JvbGwnLCAoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1kaXJlY3Rpb24nLCBpbnN0YW5jZS5kaXJlY3Rpb24pXG4gICAgICB9KTtcblxuICAgIH0pO1xuXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TWlndWVsIEx1Y2VuYSAtIFdlYiBBcHAgRGV2ZWxvcGVyPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIk1pZ3VlbCBMdWNlbmFcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSGksIEknbSBNaWd1ZWwgTHVjZW5hIGEgd2ViIGFwcCBkZXZlbG9wZXIsIGN1cnJlbnRseSBsb2NhdGVkIGluIE0mYWFjdXRlO2xhZ2EsIFNwYWluLlwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3JkXCIgY29udGVudD1cIkFwcCwgV2ViLCBEZXZlbG9wZXIsIFBvcnRmb2xpbywgTSZhYWN1dGU7bGFnYSwgTWFkcmlkLCBTcGFpblwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiTWlndWVsIEx1Y2VuYSAtIFdlYiBBcHAgRGV2ZWxvcGVyXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJIaSwgSSdtIE1pZ3VlbCBMdWNlbmEgYSB3ZWIgYXBwIGRldmVsb3BlciwgY3VycmVudGx5IGxvY2F0ZWQgaW4gTSZhYWN1dGU7bGFnYSwgU3BhaW4uXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cIi9vZy9wb3J0Zm9saW8ucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPE5hdmlnYXRpb24gc2Nyb2xsVGFyZ2V0RXZlbnQ9eyBTY3JvbGxUb1RhcmdldCB9IC8+XG5cbiAgICAgIDxtYWluIHJlZj17IHNjcm9sbFJlZiB9IGNsYXNzTmFtZT1cInJlbGF0aXZlXCIgZGF0YS1zY3JvbGwtY29udGFpbmVyID5cbiAgICAgICAgXG4gICAgICAgIDxJbnRybyAvPlxuXG4gICAgICAgIDxBYm91dCAvPlxuXG4gICAgICAgIDxTa2lsbHMgLz5cblxuICAgICAgICA8UHJvamVjdHMgLz5cbiAgICAgICAgXG5cbiAgICAgICAgPENvbnRhY3QgLz5cblxuICAgICAgPC9tYWluPlxuXG4gICAgPC8+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=