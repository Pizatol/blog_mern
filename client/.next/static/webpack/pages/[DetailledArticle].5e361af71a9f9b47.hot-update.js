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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DetailledArticle; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var Axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Axios */ \"./node_modules/Axios/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Pages/DetailledArticle.module.scss */ \"./styles/Pages/DetailledArticle.module.scss\");\n/* harmony import */ var _styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_assets_images_img00_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/assets/images/img00.jpg */ \"./public/assets/images/img00.jpg\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"C:\\\\PROG\\\\DEV FICHIERS\\\\Travaux NEW\\\\blog_mern\\\\blog\\\\client\\\\pages\\\\[DetailledArticle].jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction DetailledArticle() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var slugID = Object.values(router.query);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),\n      article = _useState[0],\n      setArticle = _useState[1];\n\n  console.log(\"ARTICLE\", typeof article.image);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    Axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].put(\"http://localhost:3001/fetchOneArticle\", {\n      id: slugID\n    }).then(function (response) {\n      try {\n        setArticle(response.data);\n      } catch (error) {\n        console.log(error);\n      }\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: (_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_7___default().global_container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: (_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_7___default().image_container),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          className: (_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_7___default().image_card),\n          src: _public_assets_images_img00_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n          alt: \"image blog\",\n          fill: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: (_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_7___default().data_container),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h4\", {\n          children: [\" \", article.date]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h1\", {\n          children: [article.title, \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h3\", {\n          children: article.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n          children: article.text\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n          children: \" Retour\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 9\n  }, this);\n} //  author, date , description , text  , title\n\n_s(DetailledArticle, \"YmCZOHKuExIaqcuQF3DGi2dZHWU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = DetailledArticle;\n\nvar _c;\n\n$RefreshReg$(_c, \"DetailledArticle\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bRGV0YWlsbGVkQXJ0aWNsZV0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNlLFNBQVNTLGdCQUFULEdBQTRCO0VBQUE7O0VBQ3ZDLElBQU1DLE1BQU0sR0FBR1Asc0RBQVMsRUFBeEI7RUFFQSxJQUFNUSxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxNQUFNLENBQUNJLEtBQXJCLENBQWY7O0VBRUEsZ0JBQThCYiwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7RUFBQSxJQUFPYyxPQUFQO0VBQUEsSUFBZ0JDLFVBQWhCOztFQUVBQyxPQUFPLENBQUNDLEdBQVIsQ0FBYSxTQUFiLEVBQXlCLE9BQU9ILE9BQU8sQ0FBQ0ksS0FBeEM7RUFFQWpCLGdEQUFTLENBQUMsWUFBTTtJQUNaRSxpREFBQSxDQUFVLHVDQUFWLEVBQW1EO01BQy9DaUIsRUFBRSxFQUFFVjtJQUQyQyxDQUFuRCxFQUVHVyxJQUZILENBRVEsVUFBQ0MsUUFBRCxFQUFjO01BQ2xCLElBQUk7UUFDQVAsVUFBVSxDQUFDTyxRQUFRLENBQUNDLElBQVYsQ0FBVjtNQUNILENBRkQsQ0FFRSxPQUFPQyxLQUFQLEVBQWM7UUFDWlIsT0FBTyxDQUFDQyxHQUFSLENBQVlPLEtBQVo7TUFDSDtJQUNKLENBUkQ7RUFTSCxDQVZRLEVBVU4sRUFWTSxDQUFUO0VBY0Esb0JBQ0k7SUFBQSx3QkFDSTtNQUFLLFNBQVMsRUFBRWxCLG9HQUFoQjtNQUFBLHdCQUNJO1FBQUssU0FBUyxFQUFFQSxtR0FBaEI7UUFBQSx1QkFDSSw4REFBQyxtREFBRDtVQUNJLFNBQVMsRUFBRUEsOEZBRGY7VUFFSSxHQUFHLEVBQUVDLHVFQUZUO1VBR0ksR0FBRyxFQUFDLFlBSFI7VUFJSSxJQUFJO1FBSlI7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQURKO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFESixlQVNJO1FBQUssU0FBUyxFQUFFRCxrR0FBaEI7UUFBQSx3QkFDSTtVQUFBLGdCQUFNUSxPQUFPLENBQUNlLElBQWQ7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBREosZUFHSTtVQUFBLFdBQUtmLE9BQU8sQ0FBQ2dCLEtBQWI7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBSEosZUFLSTtVQUFBLFVBQUtoQixPQUFPLENBQUNpQjtRQUFiO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFMSixlQU9JO1VBQUEsVUFBSWpCLE9BQU8sQ0FBQ2tCO1FBQVo7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQVBKO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQVRKO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURKLGVBb0NJO01BQUEsdUJBQ0ksOERBQUMsa0RBQUQ7UUFBTSxJQUFJLEVBQUUsR0FBWjtRQUFBLHVCQUNJO1VBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BREo7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURKO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFwQ0o7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREo7QUE0Q0gsRUFFRDs7R0FyRXdCeEI7VUFDTE47OztLQURLTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bRGV0YWlsbGVkQXJ0aWNsZV0uanN4P2E5MTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiQXhpb3NcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3R5bGVzL1BhZ2VzL0RldGFpbGxlZEFydGljbGUubW9kdWxlLnNjc3NcIjtcclxuXHJcbmltcG9ydCBpbWcgZnJvbSBcIi4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ltZzAwLmpwZ1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWxsZWRBcnRpY2xlKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3Qgc2x1Z0lEID0gT2JqZWN0LnZhbHVlcyhyb3V0ZXIucXVlcnkpO1xyXG5cclxuICAgIGNvbnN0IFthcnRpY2xlLCBzZXRBcnRpY2xlXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyggXCJBUlRJQ0xFXCIsICB0eXBlb2YoYXJ0aWNsZS5pbWFnZSkpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgQXhpb3MucHV0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2ZldGNoT25lQXJ0aWNsZVwiLCB7XHJcbiAgICAgICAgICAgIGlkOiBzbHVnSUQsXHJcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHNldEFydGljbGUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5nbG9iYWxfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuaW1hZ2VfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3MuaW1hZ2VfY2FyZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlIGJsb2dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5kYXRhX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PiB7YXJ0aWNsZS5kYXRlfTwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT57YXJ0aWNsZS50aXRsZX0gPC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPnthcnRpY2xlLmRlc2NyaXB0aW9ufTwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnthcnRpY2xlLnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e2Nzcy5pbWFnZXNfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuaW1hZ2UubWFwKChpbWcsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuaW1hZ2VfY29udGFpbmVyX21pbml9ICBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3MuaW1hZ2V9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1nLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKSBcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj4gUmV0b3VyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuLy8gIGF1dGhvciwgZGF0ZSAsIGRlc2NyaXB0aW9uICwgdGV4dCAgLCB0aXRsZVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkF4aW9zIiwiSW1hZ2UiLCJMaW5rIiwiY3NzIiwiaW1nIiwiRGV0YWlsbGVkQXJ0aWNsZSIsInJvdXRlciIsInNsdWdJRCIsIk9iamVjdCIsInZhbHVlcyIsInF1ZXJ5IiwiYXJ0aWNsZSIsInNldEFydGljbGUiLCJjb25zb2xlIiwibG9nIiwiaW1hZ2UiLCJwdXQiLCJpZCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJlcnJvciIsImdsb2JhbF9jb250YWluZXIiLCJpbWFnZV9jb250YWluZXIiLCJpbWFnZV9jYXJkIiwiZGF0YV9jb250YWluZXIiLCJkYXRlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[DetailledArticle].jsx\n"));

/***/ })

});