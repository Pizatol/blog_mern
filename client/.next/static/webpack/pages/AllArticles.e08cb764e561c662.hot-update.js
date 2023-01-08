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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AllArticles; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Pages_AllArticles_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Pages/AllArticles.module.scss */ \"./styles/Pages/AllArticles.module.scss\");\n/* harmony import */ var _styles_Pages_AllArticles_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Pages_AllArticles_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var Axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Axios */ \"./node_modules/Axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_Article_mini__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Article_mini */ \"./Components/Article_mini.jsx\");\n/* harmony import */ var _context_LoginContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/LoginContext */ \"./context/LoginContext.js\");\n/* harmony import */ var _Components_formattedDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/formattedDate */ \"./Components/formattedDate.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"C:\\\\PROG\\\\DEV FICHIERS\\\\Travaux NEW\\\\blog_mern\\\\blog\\\\client\\\\pages\\\\AllArticles.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction AllArticles() {\n  _s();\n\n  var _this = this;\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_LoginContext__WEBPACK_IMPORTED_MODULE_3__.LoginContext),\n      user = _useContext.user,\n      setUser = _useContext.setUser,\n      formOn = _useContext.formOn,\n      setFormOn = _useContext.setFormOn,\n      userName = _useContext.userName,\n      setUserName = _useContext.setUserName;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      allArticles = _useState[0],\n      setAllArticles = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined),\n      date = _useState2[0],\n      setDate = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    Axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:3001/fetchArticles\").then(function (response) {\n      try {\n        setAllArticles(response.data);\n      } catch (error) {\n        console.log(error);\n      }\n    });\n  }, []); // DELETE\n\n  var handleDelete = function handleDelete(id) {\n    Axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"][\"delete\"](\"http://localhost:3001/delete/\".concat(id)).then(function () {\n      setAllArticles(allArticles.filter(function (val) {\n        return val._id !== id;\n      }));\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: (_styles_Pages_AllArticles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().global_container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n      href: \"/\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n        children: \"Retour\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, this), user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n      href: \"/NewArticle\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n        children: \" New article\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 25\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 21\n    }, this) : \"\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: (_styles_Pages_AllArticles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().articles_container),\n      children: allArticles.map(function (item, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Components_Article_mini__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          title: item.title,\n          description: item.description,\n          text: item.text,\n          id: item._id,\n          author: item.author,\n          date: item.date,\n          image: item.image,\n          allArticles: allArticles,\n          setAllArticles: setAllArticles\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 9\n  }, this);\n}\n\n_s(AllArticles, \"Xyh30ALPA26yz7Dx5VuwpjLnsjk=\");\n\n_c = AllArticles;\n\nvar _c;\n\n$RefreshReg$(_c, \"AllArticles\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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azovL19OX0UvLi9wYWdlcy9BbGxBcnRpY2xlcy5qc3g/YTMzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuLi9zdHlsZXMvUGFnZXMvQWxsQXJ0aWNsZXMubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJBeGlvc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBBcnRpY2xlX21pbmkgZnJvbSBcIi4uL0NvbXBvbmVudHMvQXJ0aWNsZV9taW5pXCI7XHJcbmltcG9ydCB7IExvZ2luQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L0xvZ2luQ29udGV4dFwiO1xyXG5cclxuaW1wb3J0IGZvcm1hdHRlZERhdGUgZnJvbSBcIi4uL0NvbXBvbmVudHMvZm9ybWF0dGVkRGF0ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxsQXJ0aWNsZXMoKSB7XHJcblxyXG4gICAgY29uc3QgeyB1c2VyLCBzZXRVc2VyLCBmb3JtT24sIHNldEZvcm1PbiwgdXNlck5hbWUsIHNldFVzZXJOYW1lIH0gPVxyXG4gICAgdXNlQ29udGV4dChMb2dpbkNvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IFthbGxBcnRpY2xlcywgc2V0QWxsQXJ0aWNsZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBBeGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvZmV0Y2hBcnRpY2xlc1wiKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgc2V0QWxsQXJ0aWNsZXMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyBERUxFVEVcclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChpZCkgPT4ge1xyXG4gICAgICAgIEF4aW9zLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDozMDAxL2RlbGV0ZS8ke2lkfWApLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRBbGxBcnRpY2xlcyhhbGxBcnRpY2xlcy5maWx0ZXIoKHZhbCkgPT4gdmFsLl9pZCAhPT0gaWQpKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmdsb2JhbF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPlJldG91cjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIHt1c2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL05ld0FydGljbGVcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+IE5ldyBhcnRpY2xlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5hcnRpY2xlc19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAge2FsbEFydGljbGVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZV9taW5pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17aXRlbS5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17aXRlbS5hdXRob3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0uZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2UgPSB7aXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsQXJ0aWNsZXMgPSB7YWxsQXJ0aWNsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFsbEFydGljbGVzID0ge3NldEFsbEFydGljbGVzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsImNzcyIsIkF4aW9zIiwiTGluayIsIkFydGljbGVfbWluaSIsIkxvZ2luQ29udGV4dCIsImZvcm1hdHRlZERhdGUiLCJBbGxBcnRpY2xlcyIsInVzZXIiLCJzZXRVc2VyIiwiZm9ybU9uIiwic2V0Rm9ybU9uIiwidXNlck5hbWUiLCJzZXRVc2VyTmFtZSIsImFsbEFydGljbGVzIiwic2V0QWxsQXJ0aWNsZXMiLCJ1bmRlZmluZWQiLCJkYXRlIiwic2V0RGF0ZSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVEZWxldGUiLCJpZCIsImZpbHRlciIsInZhbCIsIl9pZCIsImdsb2JhbF9jb250YWluZXIiLCJhcnRpY2xlc19jb250YWluZXIiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGV4dCIsImF1dGhvciIsImltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/AllArticles.jsx\n"));

/***/ })

});