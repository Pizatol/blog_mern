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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DetailledArticle; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var Axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Axios */ \"./node_modules/Axios/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Pages/DetailledArticle.module.scss */ \"./styles/Pages/DetailledArticle.module.scss\");\n/* harmony import */ var _styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_assets_images_img00_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/assets/images/img00.jpg */ \"./public/assets/images/img00.jpg\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"C:\\\\PROG\\\\DEV FICHIERS\\\\Travaux NEW\\\\blog_mern\\\\blog\\\\client\\\\pages\\\\[DetailledArticle].jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction DetailledArticle() {\n  _s();\n\n  var _this = this;\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var slugID = Object.values(router.query);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),\n      article = _useState[0],\n      setArticle = _useState[1];\n\n  console.log(\"ARTICLE\", article.image);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    Axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].put(\"http://localhost:3001/fetchOneArticle\", {\n      id: slugID\n    }).then(function (response) {\n      try {\n        setArticle(response.data);\n      } catch (error) {\n        console.log(error);\n      }\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: (_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_7___default().global_container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: (_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_7___default().image_container),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          className: (_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_7___default().image_card),\n          src: _public_assets_images_img00_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n          alt: \"image blog\",\n          fill: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: (_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_7___default().data_container),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h4\", {\n          children: [\" \", article.date]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h1\", {\n          children: [article.title, \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h3\", {\n          children: article.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n          children: article.text\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: (_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_7___default().images_container),\n        children: article.image.map(function (img, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: (_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_7___default().image_container_mini),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n              className: (_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_7___default().image),\n              src: img.url,\n              alt: \"image\",\n              fill: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 29\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 25\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n          children: \" Retour\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 9\n  }, this);\n} //  author, date , description , text  , title\n\n_s(DetailledArticle, \"YmCZOHKuExIaqcuQF3DGi2dZHWU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = DetailledArticle;\n\nvar _c;\n\n$RefreshReg$(_c, \"DetailledArticle\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW0RldGFpbGxlZEFydGljbGVdLmpzeD9hOTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcIkF4aW9zXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4uL3N0eWxlcy9QYWdlcy9EZXRhaWxsZWRBcnRpY2xlLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5pbXBvcnQgaW1nIGZyb20gXCIuLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pbWcwMC5qcGdcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV0YWlsbGVkQXJ0aWNsZSgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IHNsdWdJRCA9IE9iamVjdC52YWx1ZXMocm91dGVyLnF1ZXJ5KTtcclxuXHJcbiAgICBjb25zdCBbYXJ0aWNsZSwgc2V0QXJ0aWNsZV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coIFwiQVJUSUNMRVwiLCAgYXJ0aWNsZS5pbWFnZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBBeGlvcy5wdXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvZmV0Y2hPbmVBcnRpY2xlXCIsIHtcclxuICAgICAgICAgICAgaWQ6IHNsdWdJRCxcclxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgc2V0QXJ0aWNsZShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmdsb2JhbF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5pbWFnZV9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5pbWFnZV9jYXJkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2UgYmxvZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmRhdGFfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aDQ+IHthcnRpY2xlLmRhdGV9PC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPnthcnRpY2xlLnRpdGxlfSA8L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+e2FydGljbGUuZGVzY3JpcHRpb259PC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e2FydGljbGUudGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuaW1hZ2VzX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5pbWFnZS5tYXAoKGltZywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5pbWFnZV9jb250YWluZXJfbWluaX0gIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5pbWFnZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWcudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPiBSZXRvdXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG4vLyAgYXV0aG9yLCBkYXRlICwgZGVzY3JpcHRpb24gLCB0ZXh0ICAsIHRpdGxlXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiQXhpb3MiLCJJbWFnZSIsIkxpbmsiLCJjc3MiLCJpbWciLCJEZXRhaWxsZWRBcnRpY2xlIiwicm91dGVyIiwic2x1Z0lEIiwiT2JqZWN0IiwidmFsdWVzIiwicXVlcnkiLCJhcnRpY2xlIiwic2V0QXJ0aWNsZSIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZSIsInB1dCIsImlkIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImVycm9yIiwiZ2xvYmFsX2NvbnRhaW5lciIsImltYWdlX2NvbnRhaW5lciIsImltYWdlX2NhcmQiLCJkYXRhX2NvbnRhaW5lciIsImRhdGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGV4dCIsImltYWdlc19jb250YWluZXIiLCJtYXAiLCJpbmRleCIsImltYWdlX2NvbnRhaW5lcl9taW5pIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[DetailledArticle].jsx\n"));

/***/ })

});