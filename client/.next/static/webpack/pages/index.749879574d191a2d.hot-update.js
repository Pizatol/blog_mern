"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Pages_Index_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Pages/Index.module.scss */ \"./styles/Pages/Index.module.scss\");\n/* harmony import */ var _styles_Pages_Index_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Pages_Index_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _Components_AddArticle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/AddArticle */ \"./Components/AddArticle.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_LoginContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/LoginContext */ \"./context/LoginContext.js\");\n/* harmony import */ var _Firebase_FirebaseAuthService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Firebase/FirebaseAuthService */ \"./Firebase/FirebaseAuthService.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"C:\\\\PROG\\\\DEV FICHIERS\\\\Travaux NEW\\\\blog_mern\\\\blog\\\\client\\\\pages\\\\index.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_context_LoginContext__WEBPACK_IMPORTED_MODULE_5__.LoginContext),\n      user = _useContext.user,\n      setUser = _useContext.setUser,\n      formOn = _useContext.formOn,\n      setFormOn = _useContext.setFormOn,\n      userName = _useContext.userName,\n      setUserName = _useContext.setUserName;\n\n  var toggleForm = function toggleForm() {\n    setFormOn(!formOn);\n  };\n\n  var logOut = function logOut() {\n    _Firebase_FirebaseAuthService__WEBPACK_IMPORTED_MODULE_6__[\"default\"].logoutUser();\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n    className: (_styles_Pages_Index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"title\", {\n        children: \"Create Next App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Generated by create next app\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, this), user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"button\", {\n        children: \" \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 19\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }, this) : \"\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n      href: \"/AllArticles\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"button\", {\n        children: \" All Articles\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Home, \"02PY4Zvt6Z7Yn39mTGYJXQ7WguQ=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU1MsSUFBVCxHQUFnQjtFQUFBOztFQUMzQixrQkFDSUosaURBQVUsQ0FBQ0UsK0RBQUQsQ0FEZDtFQUFBLElBQVFHLElBQVIsZUFBUUEsSUFBUjtFQUFBLElBQWNDLE9BQWQsZUFBY0EsT0FBZDtFQUFBLElBQXVCQyxNQUF2QixlQUF1QkEsTUFBdkI7RUFBQSxJQUErQkMsU0FBL0IsZUFBK0JBLFNBQS9CO0VBQUEsSUFBMENDLFFBQTFDLGVBQTBDQSxRQUExQztFQUFBLElBQW9EQyxXQUFwRCxlQUFvREEsV0FBcEQ7O0VBR0ksSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtJQUN2QkgsU0FBUyxDQUFDLENBQUNELE1BQUYsQ0FBVDtFQUNELENBRkQ7O0VBSUEsSUFBTUssTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtJQUNuQlQsZ0ZBQUE7RUFDRCxDQUZEOztFQUlKLG9CQUNJO0lBQUssU0FBUyxFQUFFTixrRkFBaEI7SUFBQSx3QkFDSSw4REFBQyxrREFBRDtNQUFBLHdCQUNJO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBREosZUFFSTtRQUNJLElBQUksRUFBQyxhQURUO1FBRUksT0FBTyxFQUFDO01BRlo7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQUZKLGVBTUk7UUFBTSxHQUFHLEVBQUMsTUFBVjtRQUFpQixJQUFJLEVBQUM7TUFBdEI7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQU5KO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURKLGVBVUk7TUFBQTtNQUFBO01BQUE7SUFBQSxRQVZKLEVBZU1RLElBQUksZ0JBQ0YsOERBQUMsa0RBQUQ7TUFBQSx1QkFDRTtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERSxHQUlELEVBbkJULGVBdUJJLDhEQUFDLGtEQUFEO01BQU0sSUFBSSxFQUFFLGNBQVo7TUFBQSx1QkFDSTtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURKO01BQUE7TUFBQTtNQUFBO0lBQUEsUUF2Qko7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREo7QUE2Qkg7O0dBekN1QkQ7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4uL3N0eWxlcy9QYWdlcy9JbmRleC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgQWRkQXJ0aWNsZSBmcm9tIFwiLi4vQ29tcG9uZW50cy9BZGRBcnRpY2xlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTG9naW5Db250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvTG9naW5Db250ZXh0XCI7XHJcbmltcG9ydCBGaXJlYmFzZUF1dGhTZXJ2aWNlIGZyb20gXCIuLi9GaXJlYmFzZS9GaXJlYmFzZUF1dGhTZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gICAgY29uc3QgeyB1c2VyLCBzZXRVc2VyLCBmb3JtT24sIHNldEZvcm1PbiwgdXNlck5hbWUsIHNldFVzZXJOYW1lIH0gPVxyXG4gICAgICAgIHVzZUNvbnRleHQoTG9naW5Db250ZXh0KTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcclxuICAgICAgICAgIHNldEZvcm1PbighZm9ybU9uKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbG9nT3V0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgRmlyZWJhc2VBdXRoU2VydmljZS5sb2dvdXRVc2VyKClcclxuICAgICAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdXNlciA/IChcclxuICAgICAgICAgICAgICAgIDxMaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uPiA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICApIDpcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL0FsbEFydGljbGVzXCJ9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj4gQWxsIEFydGljbGVzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsImNzcyIsIkFkZEFydGljbGUiLCJMaW5rIiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiTG9naW5Db250ZXh0IiwiRmlyZWJhc2VBdXRoU2VydmljZSIsIkhvbWUiLCJ1c2VyIiwic2V0VXNlciIsImZvcm1PbiIsInNldEZvcm1PbiIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJ0b2dnbGVGb3JtIiwibG9nT3V0IiwibG9nb3V0VXNlciIsImNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});