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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DetailledArticle; }\n/* harmony export */ });\n/* harmony import */ var C_PROG_DEV_FICHIERS_Travaux_NEW_blog_mern_blog_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_PROG_DEV_FICHIERS_Travaux_NEW_blog_mern_blog_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_PROG_DEV_FICHIERS_Travaux_NEW_blog_mern_blog_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_PROG_DEV_FICHIERS_Travaux_NEW_blog_mern_blog_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var Axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Axios */ \"./node_modules/Axios/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/Pages/DetailledArticle.module.scss */ \"./styles/Pages/DetailledArticle.module.scss\");\n/* harmony import */ var _styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _context_LoginContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/LoginContext */ \"./context/LoginContext.js\");\n/* harmony import */ var _public_assets_images_img00_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/assets/images/img00.jpg */ \"./public/assets/images/img00.jpg\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"C:\\\\PROG\\\\DEV FICHIERS\\\\Travaux NEW\\\\blog_mern\\\\blog\\\\client\\\\pages\\\\[DetailledArticle].jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction DetailledArticle() {\n  _s();\n\n  var _this = this;\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_LoginContext__WEBPACK_IMPORTED_MODULE_6__.LoginContext),\n      user = _useContext.user,\n      setUser = _useContext.setUser,\n      userName = _useContext.userName,\n      setUserName = _useContext.setUserName;\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  var slugID = Object.values(router.query);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),\n      article = _useState[0],\n      setArticle = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      commentary = _useState2[0],\n      setCommentary = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    Axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].put(\"http://localhost:3001/fetchOneArticle\", {\n      id: slugID\n    }).then(function (response) {\n      try {\n        setArticle(response.data);\n      } catch (error) {\n        console.log(error);\n      }\n    });\n  }, []);\n\n  var addCommentary = /*#__PURE__*/function () {\n    var _ref = (0,C_PROG_DEV_FICHIERS_Travaux_NEW_blog_mern_blog_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_PROG_DEV_FICHIERS_Travaux_NEW_blog_mern_blog_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var time, comID, pseudo;\n      return C_PROG_DEV_FICHIERS_Travaux_NEW_blog_mern_blog_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              time = new Date();\n              console.log(time);\n              comID = (0,uuid__WEBPACK_IMPORTED_MODULE_10__.v4)();\n              pseudo = \"michel\";\n              console.log(\"1\");\n\n              if (user === null && userName === null) {\n                alert('Please Log In or Sign Up before commenting !');\n              }\n\n              console.log(\"2\");\n              console.log(slugID); // Axios.post(\"http://localhost:3001/NewCommentary\", {\n              //     time: time,\n              //     comID: comID,\n              //     commentary: commentary,\n              //     pseudo: pseudo,\n              //     articleID: slugID,\n              // }).then(() => {\n              //     try {\n              //         console.log(\"3\");\n              //         alert(\"Commentaire Added\");\n              //         setCommentary(\"\");\n              //     } catch (error) {\n              //         console.log(error.message);\n              //     }\n              // });\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function addCommentary() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_11___default().global_container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: (_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_11___default().image_container),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n          className: (_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_11___default().image_card),\n          src: _public_assets_images_img00_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n          alt: \"image blog\",\n          fill: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: (_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_11___default().data_container),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h4\", {\n          children: [\" \", article.date]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h1\", {\n          children: [article.title, \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h3\", {\n          children: article.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"p\", {\n          children: article.text\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: (_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_11___default().images_container),\n        children: article.image ? article.image.map(function (img, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n            className: (_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_11___default().image_container_mini),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n              className: (_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_11___default().image),\n              src: img.url,\n              alt: \"image\",\n              fill: true,\n              sizes: \"(max-width: 768px) 100vw,\\r (max-width: 1200px) 50vw,\\r 33vw\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 94,\n              columnNumber: 35\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 31\n          }, _this);\n        }) : \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_11___default().commentary_section),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"label\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"input\", {\n          onChange: function onChange(e) {\n            return setCommentary(e.target.value);\n          },\n          type: \"text\",\n          value: commentary\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"button\", {\n          onClick: addCommentary,\n          type: \"button\",\n          children: \"Commenter\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"button\", {\n          children: \" Retour\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 9\n  }, this);\n} //  author, date , description , text  , title\n\n_s(DetailledArticle, \"B8yRVi7lBz4qFIaTCPc3EsSAQbM=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c = DetailledArticle;\n\nvar _c;\n\n$RefreshReg$(_c, \"DetailledArticle\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXpDSixlQXNESTtNQUFBLHVCQUNJLDhEQUFDLGtEQUFEO1FBQU0sSUFBSSxFQUFFLEdBQVo7UUFBQSx1QkFDSTtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQURKO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFESjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBdERKO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURKO0FBOERILEVBRUQ7O0dBdkh3QnRCO1VBR0xSOzs7S0FIS1EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW0RldGFpbGxlZEFydGljbGVdLmpzeD9hOTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcIkF4aW9zXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4uL3N0eWxlcy9QYWdlcy9EZXRhaWxsZWRBcnRpY2xlLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5pbXBvcnQgeyB2NCB9IGZyb20gXCJ1dWlkXCI7XHJcbmltcG9ydCB7IExvZ2luQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L0xvZ2luQ29udGV4dFwiO1xyXG5pbXBvcnQgaW1nIGZyb20gXCIuLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pbWcwMC5qcGdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERldGFpbGxlZEFydGljbGUoKSB7XHJcbiAgICBjb25zdCB7IHVzZXIsIHNldFVzZXIsIHVzZXJOYW1lLCBzZXRVc2VyTmFtZSB9ID0gdXNlQ29udGV4dChMb2dpbkNvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IHNsdWdJRCA9IE9iamVjdC52YWx1ZXMocm91dGVyLnF1ZXJ5KTtcclxuXHJcbiAgICBjb25zdCBbYXJ0aWNsZSwgc2V0QXJ0aWNsZV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gICAgY29uc3QgW2NvbW1lbnRhcnksIHNldENvbW1lbnRhcnldID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBBeGlvcy5wdXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvZmV0Y2hPbmVBcnRpY2xlXCIsIHtcclxuICAgICAgICAgICAgaWQ6IHNsdWdJRCxcclxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgc2V0QXJ0aWNsZShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGFkZENvbW1lbnRhcnkgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGltZSk7XHJcbiAgICAgICAgY29uc3QgY29tSUQgPSB2NCgpO1xyXG4gICAgICAgIGxldCBwc2V1ZG8gPSBcIm1pY2hlbFwiO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIjFcIik7XHJcblxyXG4gICAgICAgIGlmKHVzZXIgPT09IG51bGwgJiYgdXNlck5hbWUgPT09IG51bGwpe1xyXG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIExvZyBJbiBvciBTaWduIFVwIGJlZm9yZSBjb21tZW50aW5nICEnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCIyXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNsdWdJRCk7XHJcblxyXG4gICAgICAgIC8vIEF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvTmV3Q29tbWVudGFyeVwiLCB7XHJcbiAgICAgICAgLy8gICAgIHRpbWU6IHRpbWUsXHJcbiAgICAgICAgLy8gICAgIGNvbUlEOiBjb21JRCxcclxuICAgICAgICAvLyAgICAgY29tbWVudGFyeTogY29tbWVudGFyeSxcclxuICAgICAgICAvLyAgICAgcHNldWRvOiBwc2V1ZG8sXHJcbiAgICAgICAgLy8gICAgIGFydGljbGVJRDogc2x1Z0lELFxyXG4gICAgICAgIC8vIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0cnkge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCIzXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgYWxlcnQoXCJDb21tZW50YWlyZSBBZGRlZFwiKTtcclxuICAgICAgICAvLyAgICAgICAgIHNldENvbW1lbnRhcnkoXCJcIik7XHJcbiAgICAgICAgLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuZ2xvYmFsX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmltYWdlX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzLmltYWdlX2NhcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZSBibG9nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuZGF0YV9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND4ge2FydGljbGUuZGF0ZX08L2g0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+e2FydGljbGUudGl0bGV9IDwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz57YXJ0aWNsZS5kZXNjcmlwdGlvbn08L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8cD57YXJ0aWNsZS50ZXh0fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5pbWFnZXNfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5pbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGFydGljbGUuaW1hZ2UubWFwKChpbWcsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzLmltYWdlX2NvbnRhaW5lcl9taW5pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3MuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWcudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZXM9XCIobWF4LXdpZHRoOiA3NjhweCkgMTAwdncsXHJcbiAgICAgICAgICAgICAgKG1heC13aWR0aDogMTIwMHB4KSA1MHZ3LFxyXG4gICAgICAgICAgICAgIDMzdndcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5jb21tZW50YXJ5X3NlY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbW1lbnRhcnkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb21tZW50YXJ5fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRDb21tZW50YXJ5fSB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbW1lbnRlclxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24+IFJldG91cjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbi8vICBhdXRob3IsIGRhdGUgLCBkZXNjcmlwdGlvbiAsIHRleHQgICwgdGl0bGVcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwidXNlUm91dGVyIiwiQXhpb3MiLCJJbWFnZSIsIkxpbmsiLCJjc3MiLCJ2NCIsIkxvZ2luQ29udGV4dCIsImltZyIsIkRldGFpbGxlZEFydGljbGUiLCJ1c2VyIiwic2V0VXNlciIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJyb3V0ZXIiLCJzbHVnSUQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJxdWVyeSIsImFydGljbGUiLCJzZXRBcnRpY2xlIiwiY29tbWVudGFyeSIsInNldENvbW1lbnRhcnkiLCJwdXQiLCJpZCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJhZGRDb21tZW50YXJ5IiwidGltZSIsIkRhdGUiLCJjb21JRCIsInBzZXVkbyIsImFsZXJ0IiwiZ2xvYmFsX2NvbnRhaW5lciIsImltYWdlX2NvbnRhaW5lciIsImltYWdlX2NhcmQiLCJkYXRhX2NvbnRhaW5lciIsImRhdGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGV4dCIsImltYWdlc19jb250YWluZXIiLCJpbWFnZSIsIm1hcCIsImluZGV4IiwiaW1hZ2VfY29udGFpbmVyX21pbmkiLCJ1cmwiLCJjb21tZW50YXJ5X3NlY3Rpb24iLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[DetailledArticle].jsx\n"));

/***/ })

});