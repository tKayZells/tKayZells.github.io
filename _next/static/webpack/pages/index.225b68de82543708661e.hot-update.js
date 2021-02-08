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
    document.documentElement.lang = "en";
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
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Miguel Lucena - Web App Developer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0,  minimum-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "author",
        content: "Miguel Lucena"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Hi, I'm Miguel Lucena a web app developer, currently located in M\xE1laga, Spain."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "keyword",
        content: "App, Web, Developer, Portfolio, M\xE1laga, Madrid, Spain"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: "Miguel Lucena - Web App Developer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: "Hi, I'm Miguel Lucena a web app developer, currently located in M\xE1laga, Spain."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:type",
        content: "website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image",
        content: "/og/portfolio.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_html_navigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
      scrollTargetEvent: ScrollToTarget
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      ref: scrollRef,
      className: "relative",
      "data-scroll-container": true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_sections_intro__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_sections_about__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_sections_skills__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_sections_projects__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_sections_contact__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbImxvY29tb3RpdmVTY3JvbGwiLCJTY3JvbGxUb1RhcmdldCIsInRhcmdldCIsInNjcm9sbFRvIiwiSG9tZSIsInNjcm9sbFJlZiIsImNyZWF0ZVJlZiIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwibGFuZyIsInRoZW4iLCJsb2NvbW90aXZlbW9kdWxlIiwiZWwiLCJjdXJyZW50Iiwic21vb3RoIiwiZ2V0RGlyZWN0aW9uIiwib24iLCJpbnN0YW5jZSIsInNldEF0dHJpYnV0ZSIsImRpcmVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQUlBLGdCQUFnQixHQUFHLEVBQXZCOztBQUNBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBRUMsTUFBRjtBQUFBLFNBQWNGLGdCQUFnQixDQUFDRyxRQUFqQixDQUEyQkQsTUFBM0IsRUFBbUMsRUFBbkMsQ0FBZDtBQUFBLENBQXZCOztLQUFNRCxjO0FBRVMsU0FBU0csSUFBVCxHQUFnQjtBQUFBOztBQUU3QixNQUFNQyxTQUFTLGdCQUFHQyx1REFBUyxFQUEzQjtBQUVBQyx5REFBUyxDQUFFLFlBQUs7QUFDZEMsWUFBUSxDQUFDQyxlQUFULENBQXlCQyxJQUF6QixHQUFnQyxJQUFoQztBQUVBLDZLQUE0QkMsSUFBNUIsQ0FBa0MsVUFBQUMsZ0JBQWdCLEVBQUk7QUFFcERaLHNCQUFnQixHQUFHLElBQUlZLGdCQUFnQixXQUFwQixDQUE2QjtBQUM1Q0MsVUFBRSxFQUFFUixTQUFTLENBQUNTLE9BRDhCO0FBRTVDQyxjQUFNLEVBQUUsSUFGb0M7QUFHNUNDLG9CQUFZLEVBQUU7QUFIOEIsT0FBN0IsQ0FBbkI7QUFNQWhCLHNCQUFnQixDQUFDaUIsRUFBakIsQ0FBb0IsUUFBcEIsRUFBOEIsVUFBQ0MsUUFBRCxFQUFjO0FBQzFDVixnQkFBUSxDQUFDQyxlQUFULENBQXlCVSxZQUF6QixDQUFzQyxnQkFBdEMsRUFBd0RELFFBQVEsQ0FBQ0UsU0FBakU7QUFDRCxPQUZEO0FBSUQsS0FaRDtBQWNELEdBakJRLEVBaUJOLEVBakJNLENBQVQ7QUFtQkEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQXNCLGVBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRTtBQUFNLFlBQUksRUFBQyxRQUFYO0FBQW9CLGVBQU8sRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFLRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFNRTtBQUFNLFlBQUksRUFBQyxTQUFYO0FBQXFCLGVBQU8sRUFBQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFPRTtBQUFNLGdCQUFRLEVBQUMsVUFBZjtBQUEwQixlQUFPLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBUUU7QUFBTSxnQkFBUSxFQUFDLGdCQUFmO0FBQWdDLGVBQU8sRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkYsZUFTRTtBQUFNLGdCQUFRLEVBQUMsU0FBZjtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGLGVBVUU7QUFBTSxnQkFBUSxFQUFDLFVBQWY7QUFBMEIsZUFBTyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQWNFLHFFQUFDLG1FQUFEO0FBQVksdUJBQWlCLEVBQUduQjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEYsZUFnQkU7QUFBTSxTQUFHLEVBQUdJLFNBQVo7QUFBd0IsZUFBUyxFQUFDLFVBQWxDO0FBQTZDLG1DQUE3QztBQUFBLDhCQUVFLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUlFLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQU1FLHFFQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQVFFLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixlQVdFLHFFQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkY7QUFBQSxrQkFERjtBQWtDRDs7R0F6RHVCRCxJOztNQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIyNWI2OGRlODI1NDM3MDg2NjFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUsIGNyZWF0ZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvaHRtbC9uYXZpZ2F0aW9uJztcbmltcG9ydCBTY3JvbGxJbmRpY2F0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9odG1sL3Njcm9sbGluZGljYXRvcic7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9hYm91dCc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb25zL2NvbnRhY3QnO1xuaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbnMvaW50cm8nO1xuaW1wb3J0IFByb2plY3RzIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbnMvcHJvamVjdHMnO1xuaW1wb3J0IFNraWxscyBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb25zL3NraWxscyc7XG5cblxubGV0IGxvY29tb3RpdmVTY3JvbGwgPSB7fTtcbmNvbnN0IFNjcm9sbFRvVGFyZ2V0ID0gKCB0YXJnZXQgKSA9PiBsb2NvbW90aXZlU2Nyb2xsLnNjcm9sbFRvKCB0YXJnZXQsIHt9ICk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIFxuICBjb25zdCBzY3JvbGxSZWYgPSBjcmVhdGVSZWYoKTtcblxuICB1c2VFZmZlY3QoICgpID0+e1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gXCJlblwiO1xuXG4gICAgaW1wb3J0KFwibG9jb21vdGl2ZS1zY3JvbGxcIikudGhlbiggbG9jb21vdGl2ZW1vZHVsZSA9PiB7XG5cbiAgICAgIGxvY29tb3RpdmVTY3JvbGwgPSBuZXcgbG9jb21vdGl2ZW1vZHVsZS5kZWZhdWx0KHtcbiAgICAgICAgICBlbDogc2Nyb2xsUmVmLmN1cnJlbnQsIFxuICAgICAgICAgIHNtb290aDogdHJ1ZSxcbiAgICAgICAgICBnZXREaXJlY3Rpb246IHRydWVcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBsb2NvbW90aXZlU2Nyb2xsLm9uKCdzY3JvbGwnLCAoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1kaXJlY3Rpb24nLCBpbnN0YW5jZS5kaXJlY3Rpb24pXG4gICAgICB9KTtcblxuICAgIH0pO1xuXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk1pZ3VlbCBMdWNlbmEgLSBXZWIgQXBwIERldmVsb3BlcjwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCAgbWluaW11bS1zY2FsZT0xLjBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiTWlndWVsIEx1Y2VuYVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJIaSwgSSdtIE1pZ3VlbCBMdWNlbmEgYSB3ZWIgYXBwIGRldmVsb3BlciwgY3VycmVudGx5IGxvY2F0ZWQgaW4gTSZhYWN1dGU7bGFnYSwgU3BhaW4uXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRcIiBjb250ZW50PVwiQXBwLCBXZWIsIERldmVsb3BlciwgUG9ydGZvbGlvLCBNJmFhY3V0ZTtsYWdhLCBNYWRyaWQsIFNwYWluXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJNaWd1ZWwgTHVjZW5hIC0gV2ViIEFwcCBEZXZlbG9wZXJcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkhpLCBJJ20gTWlndWVsIEx1Y2VuYSBhIHdlYiBhcHAgZGV2ZWxvcGVyLCBjdXJyZW50bHkgbG9jYXRlZCBpbiBNJmFhY3V0ZTtsYWdhLCBTcGFpbi5cIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiL29nL3BvcnRmb2xpby5wbmdcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8TmF2aWdhdGlvbiBzY3JvbGxUYXJnZXRFdmVudD17IFNjcm9sbFRvVGFyZ2V0IH0gLz5cblxuICAgICAgPG1haW4gcmVmPXsgc2Nyb2xsUmVmIH0gY2xhc3NOYW1lPVwicmVsYXRpdmVcIiBkYXRhLXNjcm9sbC1jb250YWluZXIgPlxuICAgICAgICBcbiAgICAgICAgPEludHJvIC8+XG5cbiAgICAgICAgPEFib3V0IC8+XG5cbiAgICAgICAgPFNraWxscyAvPlxuXG4gICAgICAgIDxQcm9qZWN0cyAvPlxuICAgICAgICBcblxuICAgICAgICA8Q29udGFjdCAvPlxuXG4gICAgICA8L21haW4+XG5cbiAgICA8Lz5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==