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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DetailledArticle; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var Axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Axios */ \"./node_modules/Axios/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Pages/DetailledArticle.module.scss */ \"./styles/Pages/DetailledArticle.module.scss\");\n/* harmony import */ var _styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\PROG\\\\DEV FICHIERS\\\\Travaux NEW\\\\blog_mern\\\\blog\\\\client\\\\pages\\\\[DetailledArticle].jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction DetailledArticle() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var slugID = Object.values(router.query);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),\n      article = _useState[0],\n      setArticle = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    Axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].put(\"http://localhost:3001/fetchOneArticle\", {\n      id: slugID\n    }).then(function (response) {\n      try {\n        setArticle(response.data);\n      } catch (error) {\n        console.log(error);\n      }\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: (_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_5___default().global_container),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 9\n  }, this);\n} //  author, date , description , text  , title \n\n_s(DetailledArticle, \"YmCZOHKuExIaqcuQF3DGi2dZHWU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = DetailledArticle;\n\nvar _c;\n\n$RefreshReg$(_c, \"DetailledArticle\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bRGV0YWlsbGVkQXJ0aWNsZV0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRWUsU0FBU08sZ0JBQVQsR0FBNEI7RUFBQTs7RUFDdkMsSUFBTUMsTUFBTSxHQUFHTCxzREFBUyxFQUF4QjtFQUVBLElBQU1NLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNILE1BQU0sQ0FBQ0ksS0FBckIsQ0FBZjs7RUFFQSxnQkFBOEJYLCtDQUFRLENBQUMsRUFBRCxDQUF0QztFQUFBLElBQU9ZLE9BQVA7RUFBQSxJQUFnQkMsVUFBaEI7O0VBR0FaLGdEQUFTLENBQUMsWUFBTTtJQUNaRSxpREFBQSxDQUFVLHVDQUFWLEVBQW1EO01BQy9DWSxFQUFFLEVBQUVQO0lBRDJDLENBQW5ELEVBRUdRLElBRkgsQ0FFUSxVQUFDQyxRQUFELEVBQWM7TUFDbEIsSUFBSTtRQUVBSixVQUFVLENBQUNJLFFBQVEsQ0FBQ0MsSUFBVixDQUFWO01BQ0gsQ0FIRCxDQUdFLE9BQU9DLEtBQVAsRUFBYztRQUNaQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtNQUNIO0lBQ0osQ0FURDtFQVVILENBWFEsRUFXTixFQVhNLENBQVQ7RUFhQSxvQkFDSTtJQUFLLFNBQVMsRUFBRWQsb0dBQWhCO0lBQUEsdUJBRUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUZBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFESjtBQVFILEVBR0Q7O0dBaEN3QkM7VUFDTEo7OztLQURLSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bRGV0YWlsbGVkQXJ0aWNsZV0uanN4P2E5MTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiQXhpb3NcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5pbXBvcnQgY3NzIGZyb20gJy4uL3N0eWxlcy9QYWdlcy9EZXRhaWxsZWRBcnRpY2xlLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV0YWlsbGVkQXJ0aWNsZSgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IHNsdWdJRCA9IE9iamVjdC52YWx1ZXMocm91dGVyLnF1ZXJ5KTtcclxuXHJcbiAgICBjb25zdCBbYXJ0aWNsZSwgc2V0QXJ0aWNsZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgIFxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgQXhpb3MucHV0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2ZldGNoT25lQXJ0aWNsZVwiLCB7XHJcbiAgICAgICAgICAgIGlkOiBzbHVnSUQsXHJcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZXRBcnRpY2xlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmdsb2JhbF9jb250YWluZXJ9PlxyXG5cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG5cclxuICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG4vLyAgYXV0aG9yLCBkYXRlICwgZGVzY3JpcHRpb24gLCB0ZXh0ICAsIHRpdGxlICJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiQXhpb3MiLCJJbWFnZSIsImNzcyIsIkRldGFpbGxlZEFydGljbGUiLCJyb3V0ZXIiLCJzbHVnSUQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJxdWVyeSIsImFydGljbGUiLCJzZXRBcnRpY2xlIiwicHV0IiwiaWQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZ2xvYmFsX2NvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[DetailledArticle].jsx\n"));

/***/ })

});