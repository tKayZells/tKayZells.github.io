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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        charset: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Miguel Lucena - Web App Developer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "author",
        content: "Miguel Lucena"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Hi, I'm Miguel Lucena a web app developer, currently located in M\xE1laga, Spain."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "keyword",
        content: "App, Web, Developer, Portfolio, M\xE1laga, Madrid, Spain"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: "Miguel Lucena - Web App Developer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: "Hi, I'm Miguel Lucena a web app developer, currently located in M\xE1laga, Spain."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:type",
        content: "website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image",
        content: "/og/portfolio.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
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
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      ref: scrollRef,
      className: "relative",
      "data-scroll-container": true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_sections_intro__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_sections_about__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_sections_skills__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_sections_projects__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_sections_contact__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbImxvY29tb3RpdmVTY3JvbGwiLCJTY3JvbGxUb1RhcmdldCIsInRhcmdldCIsInNjcm9sbFRvIiwiSG9tZSIsInNjcm9sbFJlZiIsImNyZWF0ZVJlZiIsInVzZUVmZmVjdCIsInRoZW4iLCJsb2NvbW90aXZlbW9kdWxlIiwiZWwiLCJjdXJyZW50Iiwic21vb3RoIiwiZ2V0RGlyZWN0aW9uIiwib24iLCJpbnN0YW5jZSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiZGlyZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBSUEsZ0JBQWdCLEdBQUcsRUFBdkI7O0FBQ0EsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFFQyxNQUFGO0FBQUEsU0FBY0YsZ0JBQWdCLENBQUNHLFFBQWpCLENBQTJCRCxNQUEzQixFQUFtQyxFQUFuQyxDQUFkO0FBQUEsQ0FBdkI7O0tBQU1ELGM7QUFFUyxTQUFTRyxJQUFULEdBQWdCO0FBQUE7O0FBRTdCLE1BQU1DLFNBQVMsZ0JBQUdDLHVEQUFTLEVBQTNCO0FBRUFDLHlEQUFTLENBQUUsWUFBSztBQUVkLDZLQUE0QkMsSUFBNUIsQ0FBa0MsVUFBQUMsZ0JBQWdCLEVBQUk7QUFFcERULHNCQUFnQixHQUFHLElBQUlTLGdCQUFnQixXQUFwQixDQUE2QjtBQUM1Q0MsVUFBRSxFQUFFTCxTQUFTLENBQUNNLE9BRDhCO0FBRTVDQyxjQUFNLEVBQUUsSUFGb0M7QUFHNUNDLG9CQUFZLEVBQUU7QUFIOEIsT0FBN0IsQ0FBbkI7QUFNQWIsc0JBQWdCLENBQUNjLEVBQWpCLENBQW9CLFFBQXBCLEVBQThCLFVBQUNDLFFBQUQsRUFBYztBQUMxQ0MsZ0JBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsWUFBekIsQ0FBc0MsZ0JBQXRDLEVBQXdESCxRQUFRLENBQUNJLFNBQWpFO0FBQ0QsT0FGRDtBQUlELEtBWkQ7QUFjRCxHQWhCUSxDQUFUO0FBa0JBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFNLGVBQU8sRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRTtBQUFNLFlBQUksRUFBQyxRQUFYO0FBQW9CLGVBQU8sRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFLRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFNRTtBQUFNLFlBQUksRUFBQyxTQUFYO0FBQXFCLGVBQU8sRUFBQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFPRTtBQUFNLGdCQUFRLEVBQUMsVUFBZjtBQUEwQixlQUFPLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBUUU7QUFBTSxnQkFBUSxFQUFDLGdCQUFmO0FBQWdDLGVBQU8sRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkYsZUFTRTtBQUFNLGdCQUFRLEVBQUMsU0FBZjtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGLGVBVUU7QUFBTSxnQkFBUSxFQUFDLFVBQWY7QUFBMEIsZUFBTyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQWNFLHFFQUFDLG1FQUFEO0FBQVksdUJBQWlCLEVBQUdsQjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEYsZUFnQkU7QUFBTSxTQUFHLEVBQUdJLFNBQVo7QUFBd0IsZUFBUyxFQUFDLFVBQWxDO0FBQTZDLG1DQUE3QztBQUFBLDhCQUVFLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUlFLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQU1FLHFFQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQVFFLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixlQVdFLHFFQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkY7QUFBQSxrQkFERjtBQWtDRDs7R0F4RHVCRCxJOztNQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE5NWQ5OGYzOWUwYjMzZmU5YWIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUsIGNyZWF0ZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvaHRtbC9uYXZpZ2F0aW9uJztcbmltcG9ydCBTY3JvbGxJbmRpY2F0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9odG1sL3Njcm9sbGluZGljYXRvcic7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9hYm91dCc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb25zL2NvbnRhY3QnO1xuaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbnMvaW50cm8nO1xuaW1wb3J0IFByb2plY3RzIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbnMvcHJvamVjdHMnO1xuaW1wb3J0IFNraWxscyBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb25zL3NraWxscyc7XG5cblxubGV0IGxvY29tb3RpdmVTY3JvbGwgPSB7fTtcbmNvbnN0IFNjcm9sbFRvVGFyZ2V0ID0gKCB0YXJnZXQgKSA9PiBsb2NvbW90aXZlU2Nyb2xsLnNjcm9sbFRvKCB0YXJnZXQsIHt9ICk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIFxuICBjb25zdCBzY3JvbGxSZWYgPSBjcmVhdGVSZWYoKTtcblxuICB1c2VFZmZlY3QoICgpID0+e1xuICAgIFxuICAgIGltcG9ydChcImxvY29tb3RpdmUtc2Nyb2xsXCIpLnRoZW4oIGxvY29tb3RpdmVtb2R1bGUgPT4ge1xuXG4gICAgICBsb2NvbW90aXZlU2Nyb2xsID0gbmV3IGxvY29tb3RpdmVtb2R1bGUuZGVmYXVsdCh7XG4gICAgICAgICAgZWw6IHNjcm9sbFJlZi5jdXJyZW50LCBcbiAgICAgICAgICBzbW9vdGg6IHRydWUsXG4gICAgICAgICAgZ2V0RGlyZWN0aW9uOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgbG9jb21vdGl2ZVNjcm9sbC5vbignc2Nyb2xsJywgKGluc3RhbmNlKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGlyZWN0aW9uJywgaW5zdGFuY2UuZGlyZWN0aW9uKVxuICAgICAgfSk7XG5cbiAgICB9KTtcblxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCIgLz5cbiAgICAgICAgPHRpdGxlPk1pZ3VlbCBMdWNlbmEgLSBXZWIgQXBwIERldmVsb3BlcjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJNaWd1ZWwgTHVjZW5hXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkhpLCBJJ20gTWlndWVsIEx1Y2VuYSBhIHdlYiBhcHAgZGV2ZWxvcGVyLCBjdXJyZW50bHkgbG9jYXRlZCBpbiBNJmFhY3V0ZTtsYWdhLCBTcGFpbi5cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZFwiIGNvbnRlbnQ9XCJBcHAsIFdlYiwgRGV2ZWxvcGVyLCBQb3J0Zm9saW8sIE0mYWFjdXRlO2xhZ2EsIE1hZHJpZCwgU3BhaW5cIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIk1pZ3VlbCBMdWNlbmEgLSBXZWIgQXBwIERldmVsb3BlclwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSGksIEknbSBNaWd1ZWwgTHVjZW5hIGEgd2ViIGFwcCBkZXZlbG9wZXIsIGN1cnJlbnRseSBsb2NhdGVkIGluIE0mYWFjdXRlO2xhZ2EsIFNwYWluLlwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCIvb2cvcG9ydGZvbGlvLnBuZ1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxOYXZpZ2F0aW9uIHNjcm9sbFRhcmdldEV2ZW50PXsgU2Nyb2xsVG9UYXJnZXQgfSAvPlxuXG4gICAgICA8bWFpbiByZWY9eyBzY3JvbGxSZWYgfSBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiIGRhdGEtc2Nyb2xsLWNvbnRhaW5lciA+XG4gICAgICAgIFxuICAgICAgICA8SW50cm8gLz5cblxuICAgICAgICA8QWJvdXQgLz5cblxuICAgICAgICA8U2tpbGxzIC8+XG5cbiAgICAgICAgPFByb2plY3RzIC8+XG4gICAgICAgIFxuXG4gICAgICAgIDxDb250YWN0IC8+XG5cbiAgICAgIDwvbWFpbj5cblxuICAgIDwvPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9