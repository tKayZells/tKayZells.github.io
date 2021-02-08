webpackHotUpdate_N_E("pages/index",{

/***/ "./components/html/card.jsx":
/*!**********************************!*\
  !*** ./components/html/card.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_card_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/card.module.scss */ "./styles/card.module.scss");
/* harmony import */ var _styles_card_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_card_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/dev/projects/tkayzells/components/html/card.jsx";

function Card(props) {
  var demoLink;

  if (props.demo_url) {
    demoLink = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "font-thin text-base ml-6",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "inline-flex " + _styles_card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.underline,
        href: props.demo_url,
        target: "_blank",
        children: ["Demo ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "ml-1 w-4",
          alt: "link-image",
          src: "./link_2.svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 121
        }, this), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 25
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 22
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "p-4 bg-gray-800 rounded-lg " + _styles_card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.fadeInRightBase,
    "data-scroll": true,
    "data-scroll-class": _styles_card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.fadeInRightScroll,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "relative max-h-80 overflow-hidden rounded-l",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: props.image,
        alt: props.title,
        className: "w-full object-cover object-center rounded-lg shadow-md"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "relative px-4 -mt-16",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "bg-gray-200 p-6 rounded-lg shadow-xl",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex items-baseline",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-gray-600 uppercase text-xs font-semibold tracking-wider",
            dangerouslySetInnerHTML: {
              __html: props.tags.join(" &bull; ")
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          className: "mt-1 text-xl font-semibold uppercase leading-tight truncate",
          children: [" ", props.title, " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "my-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-sm md:text-base",
            children: props.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mt-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "font-thin text-base",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "inline-flex " + _styles_card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.underline,
              href: props.source_url,
              target: "_blank",
              children: ["Source ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "ml-1 w-4",
                alt: "link-image",
                src: "./link_2.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 129
              }, this), " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, this), demoLink]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, this);
}
_c = Card;

var _c;

$RefreshReg$(_c, "Card");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9odG1sL2NhcmQuanN4Il0sIm5hbWVzIjpbIkNhcmQiLCJwcm9wcyIsImRlbW9MaW5rIiwiZGVtb191cmwiLCJzdHlsZSIsInVuZGVybGluZSIsImZhZGVJblJpZ2h0QmFzZSIsImZhZGVJblJpZ2h0U2Nyb2xsIiwiaW1hZ2UiLCJ0aXRsZSIsIl9faHRtbCIsInRhZ3MiLCJqb2luIiwiZGVzY3JpcHRpb24iLCJzb3VyY2VfdXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFvQjtBQUUvQixNQUFJQyxRQUFKOztBQUNBLE1BQUtELEtBQUssQ0FBQ0UsUUFBWCxFQUNBO0FBQ0lELFlBQVEsZ0JBQUs7QUFBTSxlQUFTLEVBQUMsMEJBQWhCO0FBQUEsNkJBQ0c7QUFBRyxpQkFBUyxFQUFHLGlCQUFpQkUsK0RBQUssQ0FBQ0MsU0FBdEM7QUFBa0QsWUFBSSxFQUFHSixLQUFLLENBQUNFLFFBQS9EO0FBQTBFLGNBQU0sRUFBQyxRQUFqRjtBQUFBLHlDQUFnRztBQUFLLG1CQUFTLEVBQUMsVUFBZjtBQUEwQixhQUFHLEVBQUMsWUFBOUI7QUFBMkMsYUFBRyxFQUFDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQWhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBYjtBQUdIOztBQUVELHNCQUNJO0FBQUssYUFBUyxFQUFHLGdDQUFnQ0MsK0RBQUssQ0FBQ0UsZUFBdkQ7QUFBeUUsdUJBQXpFO0FBQXFGLHlCQUFvQkYsK0RBQUssQ0FBQ0csaUJBQS9HO0FBQUEsNEJBRUk7QUFBSyxlQUFTLEVBQUMsNkNBQWY7QUFBQSw2QkFDSTtBQUFLLFdBQUcsRUFBR04sS0FBSyxDQUFDTyxLQUFqQjtBQUF5QixXQUFHLEVBQUdQLEtBQUssQ0FBQ1EsS0FBckM7QUFBOEMsaUJBQVMsRUFBQztBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBT0k7QUFBSyxlQUFTLEVBQUMsc0JBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsc0NBQWY7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUMscUJBQWY7QUFBQSxpQ0FDSTtBQUFNLHFCQUFTLEVBQUMsOERBQWhCO0FBQStFLG1DQUF1QixFQUFFO0FBQUVDLG9CQUFNLEVBQUNULEtBQUssQ0FBQ1UsSUFBTixDQUFXQyxJQUFYLENBQWdCLFVBQWhCO0FBQVQ7QUFBeEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFNSTtBQUFJLG1CQUFTLEVBQUMsNkRBQWQ7QUFBQSwwQkFBK0VYLEtBQUssQ0FBQ1EsS0FBckY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KLGVBUUk7QUFBSyxtQkFBUyxFQUFDLE1BQWY7QUFBQSxpQ0FDSTtBQUFNLHFCQUFTLEVBQUMsc0JBQWhCO0FBQUEsc0JBQ01SLEtBQUssQ0FBQ1k7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSSixlQWNJO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUEsa0NBRUk7QUFBTSxxQkFBUyxFQUFDLHFCQUFoQjtBQUFBLG1DQUNJO0FBQUcsdUJBQVMsRUFBRyxpQkFBaUJULCtEQUFLLENBQUNDLFNBQXRDO0FBQWtELGtCQUFJLEVBQUdKLEtBQUssQ0FBQ2EsVUFBL0Q7QUFBNEUsb0JBQU0sRUFBQyxRQUFuRjtBQUFBLGlEQUFvRztBQUFLLHlCQUFTLEVBQUMsVUFBZjtBQUEwQixtQkFBRyxFQUFDLFlBQTlCO0FBQTJDLG1CQUFHLEVBQUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBcEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixFQU1NWixRQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFxQ0g7S0EvQ3VCRixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVjOGY5NzY1ZGU4ZjFiODNhMDI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL2NhcmQubW9kdWxlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkKHByb3BzKXtcblxuICAgIGxldCBkZW1vTGluaztcbiAgICBpZiAoIHByb3BzLmRlbW9fdXJsIClcbiAgICB7XG4gICAgICAgIGRlbW9MaW5rID0gKCA8c3BhbiBjbGFzc05hbWU9XCJmb250LXRoaW4gdGV4dC1iYXNlIG1sLTZcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9eyBcImlubGluZS1mbGV4IFwiICsgc3R5bGUudW5kZXJsaW5lIH0gaHJlZj17IHByb3BzLmRlbW9fdXJsIH0gdGFyZ2V0PVwiX2JsYW5rXCIgPkRlbW8gPGltZyBjbGFzc05hbWU9XCJtbC0xIHctNFwiIGFsdD1cImxpbmstaW1hZ2VcIiBzcmM9XCIuL2xpbmtfMi5zdmdcIiAvPiA8L2E+XG4gICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBcInAtNCBiZy1ncmF5LTgwMCByb3VuZGVkLWxnIFwiICsgc3R5bGUuZmFkZUluUmlnaHRCYXNlIH0gZGF0YS1zY3JvbGwgZGF0YS1zY3JvbGwtY2xhc3M9eyBzdHlsZS5mYWRlSW5SaWdodFNjcm9sbCB9PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1heC1oLTgwIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17IHByb3BzLmltYWdlIH0gYWx0PXsgcHJvcHMudGl0bGUgfSAgY2xhc3NOYW1lPVwidy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIHJvdW5kZWQtbGcgc2hhZG93LW1kXCIgLz4gICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBweC00IC1tdC0xNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgcC02IHJvdW5kZWQtbGcgc2hhZG93LXhsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1iYXNlbGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCB1cHBlcmNhc2UgdGV4dC14cyBmb250LXNlbWlib2xkIHRyYWNraW5nLXdpZGVyXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOnByb3BzLnRhZ3Muam9pbihcIiAmYnVsbDsgXCIpIH19PiAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm10LTEgdGV4dC14bCBmb250LXNlbWlib2xkIHVwcGVyY2FzZSBsZWFkaW5nLXRpZ2h0IHRydW5jYXRlXCI+IHsgcHJvcHMudGl0bGUgfSA8L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBtZDp0ZXh0LWJhc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmRlc2NyaXB0aW9uIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtdGhpbiB0ZXh0LWJhc2VcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXsgXCJpbmxpbmUtZmxleCBcIiArIHN0eWxlLnVuZGVybGluZSB9IGhyZWY9eyBwcm9wcy5zb3VyY2VfdXJsIH0gdGFyZ2V0PVwiX2JsYW5rXCIgPlNvdXJjZSA8aW1nIGNsYXNzTmFtZT1cIm1sLTEgdy00XCIgYWx0PVwibGluay1pbWFnZVwiIHNyYz1cIi4vbGlua18yLnN2Z1wiIC8+IDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgeyBkZW1vTGluayB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==