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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewArticle; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_LoginContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/LoginContext */ \"./context/LoginContext.js\");\n/* harmony import */ var _Firebase_FirebaseAuthService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Firebase/FirebaseAuthService */ \"./Firebase/FirebaseAuthService.js\");\n/* harmony import */ var _Components_AddArticle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/AddArticle */ \"./Components/AddArticle.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"C:\\\\PROG\\\\DEV FICHIERS\\\\Travaux NEW\\\\blog_mern\\\\blog\\\\client\\\\pages\\\\NewArticle.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction NewArticle() {\n  _s();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_LoginContext__WEBPACK_IMPORTED_MODULE_2__.LoginContext),\n      user = _useContext.user,\n      setUser = _useContext.setUser,\n      formOn = _useContext.formOn,\n      setFormOn = _useContext.setFormOn,\n      userName = _useContext.userName,\n      setUserName = _useContext.setUserName;\n\n  _Firebase_FirebaseAuthService__WEBPACK_IMPORTED_MODULE_3__[\"default\"].subscribeToAuthChanges(setUser);\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    user ? \"\" : router.push();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Components_AddArticle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 3\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 3\n  }, this);\n}\n\n_s(NewArticle, \"3Il75Zt7IvJbJPq1a6nF4xIjV9Y=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = NewArticle;\n\nvar _c;\n\n$RefreshReg$(_c, \"NewArticle\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9OZXdBcnRpY2xlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNTLFVBQVQsR0FBc0I7RUFBQTs7RUFFcEMsa0JBQ0FQLGlEQUFVLENBQUNJLCtEQUFELENBRFY7RUFBQSxJQUFRSSxJQUFSLGVBQVFBLElBQVI7RUFBQSxJQUFjQyxPQUFkLGVBQWNBLE9BQWQ7RUFBQSxJQUF1QkMsTUFBdkIsZUFBdUJBLE1BQXZCO0VBQUEsSUFBK0JDLFNBQS9CLGVBQStCQSxTQUEvQjtFQUFBLElBQTBDQyxRQUExQyxlQUEwQ0EsUUFBMUM7RUFBQSxJQUFvREMsV0FBcEQsZUFBb0RBLFdBQXBEOztFQUVBUiw0RkFBQSxDQUEyQ0ksT0FBM0M7RUFFQSxJQUFNTSxNQUFNLEdBQUdaLHNEQUFTLEVBQXhCO0VBRUFGLGdEQUFTLENBQUMsWUFBTTtJQUNmTyxJQUFJLEdBQUcsRUFBSCxHQUFTTyxNQUFNLENBQUNDLElBQVAsRUFBYjtFQUNBLENBRlEsRUFFTixFQUZNLENBQVQ7RUFJQyxvQkFDQTtJQUFBLHVCQUNBLDhEQUFDLDhEQUFEO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFEQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREE7QUFLRDs7R0FqQnVCVDtVQU1SSjs7O0tBTlFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL05ld0FydGljbGUuanN4P2MyN2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tICcuLi9zdHlsZXMvUGFnZXMvTmV3QXJ0aWNsZS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IExvZ2luQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L0xvZ2luQ29udGV4dFwiO1xyXG5pbXBvcnQgRmlyZWJhc2VBdXRoU2VydmljZSBmcm9tIFwiLi4vRmlyZWJhc2UvRmlyZWJhc2VBdXRoU2VydmljZVwiO1xyXG5pbXBvcnQgQWRkQXJ0aWNsZSBmcm9tICcuLi9Db21wb25lbnRzL0FkZEFydGljbGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdBcnRpY2xlKCkge1xyXG5cclxuXHRjb25zdCB7IHVzZXIsIHNldFVzZXIsIGZvcm1Pbiwgc2V0Rm9ybU9uLCB1c2VyTmFtZSwgc2V0VXNlck5hbWUgfSA9XHJcblx0dXNlQ29udGV4dChMb2dpbkNvbnRleHQpO1xyXG5cdEZpcmViYXNlQXV0aFNlcnZpY2Uuc3Vic2NyaWJlVG9BdXRoQ2hhbmdlcyhzZXRVc2VyKTtcclxuXHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHVzZXIgPyBcIlwiIDogKHJvdXRlci5wdXNoKCkpXHJcblx0fSwgW10gKVxyXG5cclxuICByZXR1cm4gKFxyXG5cdCA8ZGl2PlxyXG5cdFx0PEFkZEFydGljbGUvPlxyXG5cdCA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiY3NzIiwidXNlUm91dGVyIiwiTG9naW5Db250ZXh0IiwiRmlyZWJhc2VBdXRoU2VydmljZSIsIkFkZEFydGljbGUiLCJOZXdBcnRpY2xlIiwidXNlciIsInNldFVzZXIiLCJmb3JtT24iLCJzZXRGb3JtT24iLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwic3Vic2NyaWJlVG9BdXRoQ2hhbmdlcyIsInJvdXRlciIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/NewArticle.jsx\n"));

/***/ })

});