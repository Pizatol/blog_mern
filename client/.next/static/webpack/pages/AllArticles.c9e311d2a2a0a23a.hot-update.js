"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/AllArticles",{

/***/ "./pages/AllArticles.jsx":
/*!*******************************!*\
  !*** ./pages/AllArticles.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AllArticles; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var Axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Axios */ \"./node_modules/Axios/index.js\");\n/* harmony import */ var _Components_Article_mini__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Article_mini */ \"./Components/Article_mini.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\PROG\\\\DEV FICHIERS\\\\Travaux NEW\\\\blog_mern\\\\blog\\\\client\\\\pages\\\\AllArticles.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction AllArticles() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      allArticles = _useState[0],\n      setAllArticles = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    Axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get('http://localhost:3001/fetchArticles').then(function (response) {\n      try {\n        setAllArticles(response.data);\n      } catch (error) {\n        console.log(error);\n      }\n    });\n  }, []);\n  console.log(allArticles);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n      children: \"All articles\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 3\n    }, this), allArticles.map(function (item, index) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_Components_Article_mini__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 5\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 3\n  }, this);\n}\n\n_s(AllArticles, \"pkLDZMbep0UNjdVqMcySRL00PW4=\");\n\n_c = AllArticles;\n\nvar _c;\n\n$RefreshReg$(_c, \"AllArticles\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9BbGxBcnRpY2xlcy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVlLFNBQVNNLFdBQVQsR0FBdUI7RUFBQTs7RUFBQTs7RUFFckMsZ0JBQXNDTCwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUM7RUFBQSxJQUFPTSxXQUFQO0VBQUEsSUFBb0JDLGNBQXBCOztFQUVBTixnREFBUyxDQUFDLFlBQU07SUFDZkUsaURBQUEsQ0FBVSxxQ0FBVixFQUNDTSxJQURELENBQ00sVUFBQ0MsUUFBRCxFQUFjO01BQ25CLElBQUk7UUFDSEgsY0FBYyxDQUFDRyxRQUFRLENBQUNDLElBQVYsQ0FBZDtNQUNBLENBRkQsQ0FFRSxPQUFPQyxLQUFQLEVBQWM7UUFDZkMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7TUFDQTtJQUNELENBUEQ7RUFRQSxDQVRRLEVBU04sRUFUTSxDQUFUO0VBV0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUixXQUFaO0VBRUMsb0JBS0E7SUFBQSx3QkFFQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUZBLEVBS0NBLFdBQVcsQ0FBQ1MsR0FBWixDQUFnQixVQUFDQyxJQUFELEVBQU9DLEtBQVA7TUFBQSxvQkFDZiw4REFBQyxnRUFBRCxNQUNNQSxLQUROO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FEZTtJQUFBLENBQWhCLENBTEQ7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBTEE7QUFtQkQ7O0dBcEN1Qlo7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0FsbEFydGljbGVzLmpzeD9hMzMwIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjc3MgZnJvbSAnLi4vc3R5bGVzL1BhZ2VzL0FsbEFydGljbGVzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgQXhpb3MgZnJvbSAnQXhpb3MnXHJcblxyXG5pbXBvcnQgQXJ0aWNsZV9taW5pIGZyb20gJy4uL0NvbXBvbmVudHMvQXJ0aWNsZV9taW5pJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxsQXJ0aWNsZXMoKSB7XHJcblxyXG5cdGNvbnN0IFthbGxBcnRpY2xlcywgc2V0QWxsQXJ0aWNsZXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRBeGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9mZXRjaEFydGljbGVzJylcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHNldEFsbEFydGljbGVzKHJlc3BvbnNlLmRhdGEpXHJcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH0sIFtdIClcclxuXHJcblx0Y29uc29sZS5sb2coYWxsQXJ0aWNsZXMpO1xyXG5cclxuICByZXR1cm4gKFxyXG5cclxuXHJcblxyXG5cclxuXHQgPGRpdj5cclxuXHJcblx0XHQ8aDE+QWxsIGFydGljbGVzPC9oMT5cclxuXHJcblx0XHR7XHJcblx0XHRcdGFsbEFydGljbGVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHQ8QXJ0aWNsZV9taW5pXHJcblx0XHRcdFx0XHRrZXk9e2luZGV4fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdCkpXHJcblx0XHR9XHJcblxyXG5cdCA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjc3MiLCJBeGlvcyIsIkFydGljbGVfbWluaSIsIkFsbEFydGljbGVzIiwiYWxsQXJ0aWNsZXMiLCJzZXRBbGxBcnRpY2xlcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/AllArticles.jsx\n"));

/***/ })

});