"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/NewArticle",{

/***/ "./pages/NewArticle.jsx":
/*!******************************!*\
  !*** ./pages/NewArticle.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewArticle; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_LoginContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/LoginContext */ \"./context/LoginContext.js\");\n/* harmony import */ var _Firebase_FirebaseAuthService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Firebase/FirebaseAuthService */ \"./Firebase/FirebaseAuthService.js\");\n/* harmony import */ var _Components_AddArticle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/AddArticle */ \"./Components/AddArticle.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"C:\\\\PROG\\\\DEV FICHIERS\\\\Travaux NEW\\\\blog_mern\\\\blog\\\\client\\\\pages\\\\NewArticle.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction NewArticle() {\n  _s();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_LoginContext__WEBPACK_IMPORTED_MODULE_2__.LoginContext),\n      user = _useContext.user,\n      setUser = _useContext.setUser,\n      formOn = _useContext.formOn,\n      setFormOn = _useContext.setFormOn,\n      userName = _useContext.userName,\n      setUserName = _useContext.setUserName;\n\n  _Firebase_FirebaseAuthService__WEBPACK_IMPORTED_MODULE_3__[\"default\"].subscribeToAuthChanges(setUser);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Components_AddArticle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 3\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 3\n  }, this);\n}\n\n_s(NewArticle, \"02PY4Zvt6Z7Yn39mTGYJXQ7WguQ=\");\n\n_c = NewArticle;\n\nvar _c;\n\n$RefreshReg$(_c, \"NewArticle\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9OZXdBcnRpY2xlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNRLFVBQVQsR0FBc0I7RUFBQTs7RUFFcEMsa0JBQ0FOLGlEQUFVLENBQUNHLCtEQUFELENBRFY7RUFBQSxJQUFRSSxJQUFSLGVBQVFBLElBQVI7RUFBQSxJQUFjQyxPQUFkLGVBQWNBLE9BQWQ7RUFBQSxJQUF1QkMsTUFBdkIsZUFBdUJBLE1BQXZCO0VBQUEsSUFBK0JDLFNBQS9CLGVBQStCQSxTQUEvQjtFQUFBLElBQTBDQyxRQUExQyxlQUEwQ0EsUUFBMUM7RUFBQSxJQUFvREMsV0FBcEQsZUFBb0RBLFdBQXBEOztFQUVBUiw0RkFBQSxDQUEyQ0ksT0FBM0M7RUFJQyxvQkFDQTtJQUFBLHVCQUNBLDhEQUFDLDhEQUFEO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFEQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREE7QUFLRDs7R0FidUJGOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9OZXdBcnRpY2xlLmpzeD9jMjdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gJy4uL3N0eWxlcy9QYWdlcy9OZXdBcnRpY2xlLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTG9naW5Db250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvTG9naW5Db250ZXh0XCI7XHJcbmltcG9ydCBGaXJlYmFzZUF1dGhTZXJ2aWNlIGZyb20gXCIuLi9GaXJlYmFzZS9GaXJlYmFzZUF1dGhTZXJ2aWNlXCI7XHJcbmltcG9ydCBBZGRBcnRpY2xlIGZyb20gJy4uL0NvbXBvbmVudHMvQWRkQXJ0aWNsZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld0FydGljbGUoKSB7XHJcblxyXG5cdGNvbnN0IHsgdXNlciwgc2V0VXNlciwgZm9ybU9uLCBzZXRGb3JtT24sIHVzZXJOYW1lLCBzZXRVc2VyTmFtZSB9ID1cclxuXHR1c2VDb250ZXh0KExvZ2luQ29udGV4dCk7XHJcblx0RmlyZWJhc2VBdXRoU2VydmljZS5zdWJzY3JpYmVUb0F1dGhDaGFuZ2VzKHNldFVzZXIpO1xyXG5cclxuXHJcblx0XHJcbiAgcmV0dXJuIChcclxuXHQgPGRpdj5cclxuXHRcdDxBZGRBcnRpY2xlLz5cclxuXHQgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsImNzcyIsInVzZVJvdXRlciIsIkxvZ2luQ29udGV4dCIsIkZpcmViYXNlQXV0aFNlcnZpY2UiLCJBZGRBcnRpY2xlIiwiTmV3QXJ0aWNsZSIsInVzZXIiLCJzZXRVc2VyIiwiZm9ybU9uIiwic2V0Rm9ybU9uIiwidXNlck5hbWUiLCJzZXRVc2VyTmFtZSIsInN1YnNjcmliZVRvQXV0aENoYW5nZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/NewArticle.jsx\n"));

/***/ })

});