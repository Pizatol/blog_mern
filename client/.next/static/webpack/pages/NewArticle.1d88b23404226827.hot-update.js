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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewArticle; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_LoginContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/LoginContext */ \"./context/LoginContext.js\");\n/* harmony import */ var _Firebase_FirebaseAuthService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Firebase/FirebaseAuthService */ \"./Firebase/FirebaseAuthService.js\");\n/* harmony import */ var _Components_AddArticle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/AddArticle */ \"./Components/AddArticle.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"C:\\\\PROG\\\\DEV FICHIERS\\\\Travaux NEW\\\\blog_mern\\\\blog\\\\client\\\\pages\\\\NewArticle.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction NewArticle() {\n  _s();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_LoginContext__WEBPACK_IMPORTED_MODULE_2__.LoginContext),\n      user = _useContext.user,\n      setUser = _useContext.setUser,\n      formOn = _useContext.formOn,\n      setFormOn = _useContext.setFormOn,\n      userName = _useContext.userName,\n      setUserName = _useContext.setUserName;\n\n  _Firebase_FirebaseAuthService__WEBPACK_IMPORTED_MODULE_3__[\"default\"].subscribeToAuthChanges(setUser);\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    user ? \"\" : router.push('/');\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 4\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 3\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Components_AddArticle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 3\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 2\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 3\n  }, this);\n}\n\n_s(NewArticle, \"3Il75Zt7IvJbJPq1a6nF4xIjV9Y=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = NewArticle;\n\nvar _c;\n\n$RefreshReg$(_c, \"NewArticle\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9OZXdBcnRpY2xlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTVSxVQUFULEdBQXNCO0VBQUE7O0VBRXBDLGtCQUNBUixpREFBVSxDQUFDSSwrREFBRCxDQURWO0VBQUEsSUFBUUssSUFBUixlQUFRQSxJQUFSO0VBQUEsSUFBY0MsT0FBZCxlQUFjQSxPQUFkO0VBQUEsSUFBdUJDLE1BQXZCLGVBQXVCQSxNQUF2QjtFQUFBLElBQStCQyxTQUEvQixlQUErQkEsU0FBL0I7RUFBQSxJQUEwQ0MsUUFBMUMsZUFBMENBLFFBQTFDO0VBQUEsSUFBb0RDLFdBQXBELGVBQW9EQSxXQUFwRDs7RUFFQVQsNEZBQUEsQ0FBMkNLLE9BQTNDO0VBRUEsSUFBTU0sTUFBTSxHQUFHYixzREFBUyxFQUF4QjtFQUVBRixnREFBUyxDQUFDLFlBQU07SUFDZlEsSUFBSSxHQUFHLEVBQUgsR0FBU08sTUFBTSxDQUFDQyxJQUFQLENBQVksR0FBWixDQUFiO0VBQ0EsQ0FGUSxFQUVOLEVBRk0sQ0FBVDtFQUlDLG9CQUNBO0lBQUEsd0JBQ0E7TUFBQSx1QkFDQyw4REFBQyxrREFBRDtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREQ7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURBLGVBSUQ7TUFBQSx1QkFFQyw4REFBQyw4REFBRDtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBRkQ7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUpDO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURBO0FBV0Q7O0dBdkJ1QlQ7VUFNUkw7OztLQU5RSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9OZXdBcnRpY2xlLmpzeD9jMjdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjc3MgZnJvbSAnLi4vc3R5bGVzL1BhZ2VzL05ld0FydGljbGUubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBMb2dpbkNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9Mb2dpbkNvbnRleHRcIjtcclxuaW1wb3J0IEZpcmViYXNlQXV0aFNlcnZpY2UgZnJvbSBcIi4uL0ZpcmViYXNlL0ZpcmViYXNlQXV0aFNlcnZpY2VcIjtcclxuaW1wb3J0IEFkZEFydGljbGUgZnJvbSAnLi4vQ29tcG9uZW50cy9BZGRBcnRpY2xlJ1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdBcnRpY2xlKCkge1xyXG5cclxuXHRjb25zdCB7IHVzZXIsIHNldFVzZXIsIGZvcm1Pbiwgc2V0Rm9ybU9uLCB1c2VyTmFtZSwgc2V0VXNlck5hbWUgfSA9XHJcblx0dXNlQ29udGV4dChMb2dpbkNvbnRleHQpO1xyXG5cdEZpcmViYXNlQXV0aFNlcnZpY2Uuc3Vic2NyaWJlVG9BdXRoQ2hhbmdlcyhzZXRVc2VyKTtcclxuXHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHVzZXIgPyBcIlwiIDogKHJvdXRlci5wdXNoKCcvJykpXHJcblx0fSwgW10gKVxyXG5cclxuICByZXR1cm4gKFxyXG5cdCA8ZGl2PlxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PExpbmsvPlxyXG5cdFx0PC9kaXY+XHJcblx0PGRpdj5cclxuXHJcblx0XHQ8QWRkQXJ0aWNsZS8+XHJcblx0PC9kaXY+XHJcblx0IDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJjc3MiLCJ1c2VSb3V0ZXIiLCJMb2dpbkNvbnRleHQiLCJGaXJlYmFzZUF1dGhTZXJ2aWNlIiwiQWRkQXJ0aWNsZSIsIkxpbmsiLCJOZXdBcnRpY2xlIiwidXNlciIsInNldFVzZXIiLCJmb3JtT24iLCJzZXRGb3JtT24iLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwic3Vic2NyaWJlVG9BdXRoQ2hhbmdlcyIsInJvdXRlciIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/NewArticle.jsx\n"));

/***/ })

});