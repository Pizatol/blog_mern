"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[DetailledArticle]",{

/***/ "./pages/[DetailledArticle].jsx":
/*!**************************************!*\
  !*** ./pages/[DetailledArticle].jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DetailledArticle; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var Axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Axios */ \"./node_modules/Axios/index.js\");\n/* harmony import */ var _styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Pages/DetailledArticle.module.scss */ \"./styles/Pages/DetailledArticle.module.scss\");\n/* harmony import */ var _styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\PROG\\\\DEV FICHIERS\\\\Travaux NEW\\\\blog_mern\\\\blog\\\\client\\\\pages\\\\[DetailledArticle].jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction DetailledArticle() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var slugID = Object.values(router.query);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),\n      article = _useState[0],\n      setArticle = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    Axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].put(\"http://localhost:3001/fetchOneArticle\", {\n      id: slugID\n    }).then(function (response) {\n      try {\n        setArticle(response.data);\n      } catch (error) {\n        console.log(error);\n      }\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: (_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_4___default().global_container)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, this);\n} //  author, date , description , text  , title \n\n_s(DetailledArticle, \"YmCZOHKuExIaqcuQF3DGi2dZHWU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = DetailledArticle;\n\nvar _c;\n\n$RefreshReg$(_c, \"DetailledArticle\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bRGV0YWlsbGVkQXJ0aWNsZV0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFZSxTQUFTTSxnQkFBVCxHQUE0QjtFQUFBOztFQUN2QyxJQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQXhCO0VBRUEsSUFBTUssTUFBTSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0gsTUFBTSxDQUFDSSxLQUFyQixDQUFmOztFQUVBLGdCQUE4QlYsK0NBQVEsQ0FBQyxFQUFELENBQXRDO0VBQUEsSUFBT1csT0FBUDtFQUFBLElBQWdCQyxVQUFoQjs7RUFHQVgsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1pFLGlEQUFBLENBQVUsdUNBQVYsRUFBbUQ7TUFDL0NXLEVBQUUsRUFBRVA7SUFEMkMsQ0FBbkQsRUFFR1EsSUFGSCxDQUVRLFVBQUNDLFFBQUQsRUFBYztNQUNsQixJQUFJO1FBRUFKLFVBQVUsQ0FBQ0ksUUFBUSxDQUFDQyxJQUFWLENBQVY7TUFDSCxDQUhELENBR0UsT0FBT0MsS0FBUCxFQUFjO1FBQ1pDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO01BQ0g7SUFDSixDQVREO0VBVUgsQ0FYUSxFQVdOLEVBWE0sQ0FBVDtFQWFBLG9CQUNJO0lBQUssU0FBUyxFQUFFZCxvR0FBb0JpQjtFQUFwQztJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREo7QUFRSCxFQUdEOztHQWhDd0JoQjtVQUNMSDs7O0tBREtHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1tEZXRhaWxsZWRBcnRpY2xlXS5qc3g/YTkxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJBeGlvc1wiO1xyXG5cclxuaW1wb3J0IGNzcyBmcm9tICcuLi9zdHlsZXMvUGFnZXMvRGV0YWlsbGVkQXJ0aWNsZS5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERldGFpbGxlZEFydGljbGUoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBzbHVnSUQgPSBPYmplY3QudmFsdWVzKHJvdXRlci5xdWVyeSk7XHJcblxyXG4gICAgY29uc3QgW2FydGljbGUsIHNldEFydGljbGVdID0gdXNlU3RhdGUoe30pO1xyXG4gICBcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIEF4aW9zLnB1dChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9mZXRjaE9uZUFydGljbGVcIiwge1xyXG4gICAgICAgICAgICBpZDogc2x1Z0lELFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0QXJ0aWNsZShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5nbG9iYWxfY29udGFpbmVyfT5cclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG4vLyAgYXV0aG9yLCBkYXRlICwgZGVzY3JpcHRpb24gLCB0ZXh0ICAsIHRpdGxlICJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiQXhpb3MiLCJjc3MiLCJEZXRhaWxsZWRBcnRpY2xlIiwicm91dGVyIiwic2x1Z0lEIiwiT2JqZWN0IiwidmFsdWVzIiwicXVlcnkiLCJhcnRpY2xlIiwic2V0QXJ0aWNsZSIsInB1dCIsImlkIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImdsb2JhbF9jb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[DetailledArticle].jsx\n"));

/***/ })

});