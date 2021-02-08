webpackHotUpdate_N_E("pages/index",{

/***/ "./components/html/social.jsx":
/*!************************************!*\
  !*** ./components/html/social.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Social; });
/* harmony import */ var _home_dev_projects_tkayzells_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_social_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/social.module.scss */ "./styles/social.module.scss");
/* harmony import */ var _styles_social_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_social_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_social_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/social.json */ "./assets/social.json");
var _assets_social_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/social.json */ "./assets/social.json", 1);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");



var _jsxFileName = "/home/dev/projects/tkayzells/components/html/social.jsx",
    _s = $RefreshSig$();





function Social(props) {
  _s();

  var _this = this;

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var data = _assets_social_json__WEBPACK_IMPORTED_MODULE_4__.social;
  var timelineElements = [];
  var socialLinks = data.map(function (el, index) {
    timelineElements.push({
      targets: "li.social_".concat(index),
      translateX: 0,
      opacity: 1
    });
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
      className: "p-2 m-2 text-base md:text-2xl social_" + index + " " + _styles_social_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.fadeInRightBase,
      style: {
        'transform': 'translateX(-80px)',
        'opacity': 0
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
        className: "inline-flex font-thin hover:italic " + _styles_social_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.underline,
        target: "_blank",
        href: el.url,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          className: "mx-4",
          children: [el.text, " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
          alt: "link-image",
          src: "./link.svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 64
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this)
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, _this);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var animTL = animejs__WEBPACK_IMPORTED_MODULE_5__["default"].timeline({
      easing: 'easeInQuad',
      duration: 150,
      autoplay: false
    });
    timelineElements.forEach(function (el) {
      return animTL.add(el);
    });
    var observer = new IntersectionObserver(function (_ref) {
      var _ref2 = Object(_home_dev_projects_tkayzells_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 1),
          entry = _ref2[0];

      if (entry.isIntersecting) {
        animTL.play();
      } else {
        animTL.reset();
      }
    });
    observer.observe(ref.current);
    return function () {
      observer.disconnect();
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
    id: props.id,
    ref: ref,
    className: "text-white flex flex-row " + props.className,
    children: socialLinks
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 9
  }, this);
}

_s(Social, "8uVE59eA/r6b92xF80p7sH8rXLk=");

_c = Social;

var _c;

$RefreshReg$(_c, "Social");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9odG1sL3NvY2lhbC5qc3giXSwibmFtZXMiOlsiU29jaWFsIiwicHJvcHMiLCJyZWYiLCJ1c2VSZWYiLCJkYXRhIiwic29jaWFsSnNvbiIsInNvY2lhbCIsInRpbWVsaW5lRWxlbWVudHMiLCJzb2NpYWxMaW5rcyIsIm1hcCIsImVsIiwiaW5kZXgiLCJwdXNoIiwidGFyZ2V0cyIsInRyYW5zbGF0ZVgiLCJvcGFjaXR5Iiwic3R5bGUiLCJmYWRlSW5SaWdodEJhc2UiLCJ1bmRlcmxpbmUiLCJ1cmwiLCJ0ZXh0IiwidXNlRWZmZWN0IiwiYW5pbVRMIiwiYW5pbWUiLCJ0aW1lbGluZSIsImVhc2luZyIsImR1cmF0aW9uIiwiYXV0b3BsYXkiLCJmb3JFYWNoIiwiYWRkIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJwbGF5IiwicmVzZXQiLCJvYnNlcnZlIiwiY3VycmVudCIsImRpc2Nvbm5lY3QiLCJpZCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBc0I7QUFBQTs7QUFBQTs7QUFFakMsTUFBTUMsR0FBRyxHQUFHQyxvREFBTSxFQUFsQjtBQUNBLE1BQU1DLElBQUksR0FBR0MsZ0RBQVUsQ0FBQ0MsTUFBeEI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxFQUF6QjtBQUVBLE1BQU1DLFdBQVcsR0FBR0osSUFBSSxDQUFDSyxHQUFMLENBQVUsVUFBQ0MsRUFBRCxFQUFLQyxLQUFMLEVBQWU7QUFFekNKLG9CQUFnQixDQUFDSyxJQUFqQixDQUFzQjtBQUNsQkMsYUFBTyxzQkFBZUYsS0FBZixDQURXO0FBRWxCRyxnQkFBVSxFQUFFLENBRk07QUFHbEJDLGFBQU8sRUFBRztBQUhRLEtBQXRCO0FBTUEsd0JBQ0k7QUFBa0IsZUFBUyxFQUFFLDBDQUE0Q0osS0FBNUMsR0FBc0QsR0FBdEQsR0FBNERLLGlFQUFLLENBQUNDLGVBQS9GO0FBQWlILFdBQUssRUFBRTtBQUFFLHFCQUFjLG1CQUFoQjtBQUFxQyxtQkFBWTtBQUFqRCxPQUF4SDtBQUFBLDZCQUNJO0FBQUcsaUJBQVMsRUFBRyx3Q0FBd0NELGlFQUFLLENBQUNFLFNBQTdEO0FBQXlFLGNBQU0sRUFBQyxRQUFoRjtBQUF5RixZQUFJLEVBQUdSLEVBQUUsQ0FBQ1MsR0FBbkc7QUFBQSxnQ0FDSTtBQUFNLG1CQUFTLEVBQUMsTUFBaEI7QUFBQSxxQkFBeUJULEVBQUUsQ0FBQ1UsSUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLG9CQUMrQztBQUFLLGFBQUcsRUFBQyxZQUFUO0FBQXNCLGFBQUcsRUFBQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUQvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixPQUFVVCxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQU9ILEdBZm1CLENBQXBCO0FBaUJBVSx5REFBUyxDQUFFLFlBQU07QUFFYixRQUFJQyxNQUFNLEdBQUdDLCtDQUFLLENBQUNDLFFBQU4sQ0FBZTtBQUN4QkMsWUFBTSxFQUFFLFlBRGdCO0FBRXhCQyxjQUFRLEVBQUUsR0FGYztBQUd4QkMsY0FBUSxFQUFFO0FBSGMsS0FBZixDQUFiO0FBTUFwQixvQkFBZ0IsQ0FBQ3FCLE9BQWpCLENBQTBCLFVBQUFsQixFQUFFO0FBQUEsYUFBSVksTUFBTSxDQUFDTyxHQUFQLENBQVduQixFQUFYLENBQUo7QUFBQSxLQUE1QjtBQUVBLFFBQU1vQixRQUFRLEdBQUcsSUFBSUMsb0JBQUosQ0FDYixnQkFBZTtBQUFBO0FBQUEsVUFBWkMsS0FBWTs7QUFDWCxVQUFJQSxLQUFLLENBQUNDLGNBQVYsRUFDQTtBQUNJWCxjQUFNLENBQUNZLElBQVA7QUFDSCxPQUhELE1BS0E7QUFDSVosY0FBTSxDQUFDYSxLQUFQO0FBQ0g7QUFDSixLQVZZLENBQWpCO0FBWUFMLFlBQVEsQ0FBQ00sT0FBVCxDQUFpQmxDLEdBQUcsQ0FBQ21DLE9BQXJCO0FBRUEsV0FBTyxZQUFNO0FBQUVQLGNBQVEsQ0FBQ1EsVUFBVDtBQUF1QixLQUF0QztBQUNILEdBekJRLEVBeUJOLEVBekJNLENBQVQ7QUE0QkEsc0JBQ0k7QUFBSSxNQUFFLEVBQUdyQyxLQUFLLENBQUNzQyxFQUFmO0FBQW9CLE9BQUcsRUFBR3JDLEdBQTFCO0FBQWdDLGFBQVMsRUFBRyw4QkFBOEJELEtBQUssQ0FBQ3VDLFNBQWhGO0FBQUEsY0FFUWhDO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBT0g7O0dBMUR1QlIsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NjExY2I1NGEwNDY3NmFhN2E4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3QsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL3NvY2lhbC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgc29jaWFsSnNvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL3NvY2lhbC5qc29uXCJcbmltcG9ydCBhbmltZSBmcm9tICdhbmltZWpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU29jaWFsKHByb3BzKXtcblxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZigpXG4gICAgY29uc3QgZGF0YSA9IHNvY2lhbEpzb24uc29jaWFsO1xuICAgIGNvbnN0IHRpbWVsaW5lRWxlbWVudHMgPSBbXTtcblxuICAgIGNvbnN0IHNvY2lhbExpbmtzID0gZGF0YS5tYXAoIChlbCwgaW5kZXgpID0+IHtcblxuICAgICAgICB0aW1lbGluZUVsZW1lbnRzLnB1c2goe1xuICAgICAgICAgICAgdGFyZ2V0czogYGxpLnNvY2lhbF8ke2luZGV4fWAsIFxuICAgICAgICAgICAgdHJhbnNsYXRlWDogMCxcbiAgICAgICAgICAgIG9wYWNpdHkgOiAxXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXsgaW5kZXggfSBjbGFzc05hbWU9e1wicC0yIG0tMiB0ZXh0LWJhc2UgbWQ6dGV4dC0yeGwgc29jaWFsX1wiICsgKCBpbmRleCApICsgXCIgXCIgKyBzdHlsZS5mYWRlSW5SaWdodEJhc2UgfSBzdHlsZT17eyAndHJhbnNmb3JtJyA6ICd0cmFuc2xhdGVYKC04MHB4KScsICdvcGFjaXR5JyA6IDAgfX0gID5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9eyBgaW5saW5lLWZsZXggZm9udC10aGluIGhvdmVyOml0YWxpYyBgICsgc3R5bGUudW5kZXJsaW5lIH0gdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17IGVsLnVybCB9PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC00XCI+eyBlbC50ZXh0IH0gPC9zcGFuPiA8aW1nIGFsdD1cImxpbmstaW1hZ2VcIiBzcmM9XCIuL2xpbmsuc3ZnXCIgLz4gXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKVxuICAgIH0pXG5cbiAgICB1c2VFZmZlY3QoICgpID0+IHtcblxuICAgICAgICB2YXIgYW5pbVRMID0gYW5pbWUudGltZWxpbmUoeyBcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VJblF1YWQnLFxuICAgICAgICAgICAgZHVyYXRpb246IDE1MCxcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRpbWVsaW5lRWxlbWVudHMuZm9yRWFjaCggZWwgPT4gYW5pbVRMLmFkZChlbCkgKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgICAgICAgKCBbZW50cnldICkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCBlbnRyeS5pc0ludGVyc2VjdGluZyApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhbmltVEwucGxheSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVRMLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShyZWYuY3VycmVudCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKCkgPT4geyBvYnNlcnZlci5kaXNjb25uZWN0KCkgfVxuICAgIH0sIFtdKTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHVsIGlkPXsgcHJvcHMuaWQgfSByZWY9eyByZWYgfSBjbGFzc05hbWU9eyBcInRleHQtd2hpdGUgZmxleCBmbGV4LXJvdyBcIiArIHByb3BzLmNsYXNzTmFtZSB9PlxuICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICBzb2NpYWxMaW5rcyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=