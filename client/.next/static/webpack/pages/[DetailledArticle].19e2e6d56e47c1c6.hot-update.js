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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DetailledArticle; }\n/* harmony export */ });\n/* harmony import */ var C_PROG_DEV_FICHIERS_Travaux_NEW_blog_mern_blog_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_PROG_DEV_FICHIERS_Travaux_NEW_blog_mern_blog_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_PROG_DEV_FICHIERS_Travaux_NEW_blog_mern_blog_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_PROG_DEV_FICHIERS_Travaux_NEW_blog_mern_blog_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var Axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Axios */ \"./node_modules/Axios/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/Pages/DetailledArticle.module.scss */ \"./styles/Pages/DetailledArticle.module.scss\");\n/* harmony import */ var _styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _context_LoginContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/LoginContext */ \"./context/LoginContext.js\");\n/* harmony import */ var _public_assets_images_img00_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/assets/images/img00.jpg */ \"./public/assets/images/img00.jpg\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"C:\\\\PROG\\\\DEV FICHIERS\\\\Travaux NEW\\\\blog_mern\\\\blog\\\\client\\\\pages\\\\[DetailledArticle].jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction DetailledArticle() {\n  _s();\n\n  var _this = this;\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_LoginContext__WEBPACK_IMPORTED_MODULE_6__.LoginContext),\n      user = _useContext.user,\n      setUser = _useContext.setUser,\n      userName = _useContext.userName,\n      setUserName = _useContext.setUserName;\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  var slugID = Object.values(router.query);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),\n      article = _useState[0],\n      setArticle = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      commentary = _useState2[0],\n      setCommentary = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    Axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].put(\"http://localhost:3001/fetchOneArticle\", {\n      id: slugID\n    }).then(function (response) {\n      try {\n        setArticle(response.data);\n      } catch (error) {\n        console.log(error);\n      }\n    });\n  }, []);\n\n  var addCommentary = /*#__PURE__*/function () {\n    var _ref = (0,C_PROG_DEV_FICHIERS_Travaux_NEW_blog_mern_blog_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_PROG_DEV_FICHIERS_Travaux_NEW_blog_mern_blog_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var time, comID, pseudo;\n      return C_PROG_DEV_FICHIERS_Travaux_NEW_blog_mern_blog_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              time = new Date();\n              console.log(time);\n              comID = (0,uuid__WEBPACK_IMPORTED_MODULE_10__.v4)();\n              pseudo = \"michel\";\n              console.log(\"1\");\n\n              if (user === null && userName === null) {\n                alert('Please Log In or Sign Up before commenting !');\n              }\n\n              console.log(\"2\");\n              Axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].post(\"http://localhost:3001/NewCommentary\", {\n                time: time,\n                comID: comID,\n                commentary: commentary,\n                pseudo: pseudo,\n                articleID: articleID\n              }).then(function () {\n                try {\n                  console.log(\"3\");\n                  alert(\"Commentaire Added\");\n                  setCommentary(\"\");\n                } catch (error) {\n                  console.log(error.message);\n                }\n              });\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function addCommentary() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_11___default().global_container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: (_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_11___default().image_container),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n          className: (_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_11___default().image_card),\n          src: _public_assets_images_img00_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n          alt: \"image blog\",\n          fill: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: (_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_11___default().data_container),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h4\", {\n          children: [\" \", article.date]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h1\", {\n          children: [article.title, \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h3\", {\n          children: article.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"p\", {\n          children: article.text\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: (_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_11___default().images_container),\n        children: article.image ? article.image.map(function (img, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n            className: (_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_11___default().image_container_mini),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n              className: (_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_11___default().image),\n              src: img.url,\n              alt: \"image\",\n              fill: true,\n              sizes: \"(max-width: 768px) 100vw,\\r (max-width: 1200px) 50vw,\\r 33vw\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 94,\n              columnNumber: 35\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 31\n          }, _this);\n        }) : \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: (_styles_Pages_DetailledArticle_module_scss__WEBPACK_IMPORTED_MODULE_11___default().commentary_section),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"label\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"input\", {\n          onChange: function onChange(e) {\n            return setCommentary(e.target.value);\n          },\n          type: \"text\",\n          value: commentary\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"button\", {\n          onClick: addCommentary,\n          type: \"button\",\n          children: \"Commenter\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"button\", {\n          children: \" Retour\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 9\n  }, this);\n} //  author, date , description , text  , title\n\n_s(DetailledArticle, \"B8yRVi7lBz4qFIaTCPc3EsSAQbM=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c = DetailledArticle;\n\nvar _c;\n\n$RefreshReg$(_c, \"DetailledArticle\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxhQUFhLENBQUNpQyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFwQjtVQUFBLENBRGQ7VUFFSSxJQUFJLEVBQUMsTUFGVDtVQUdJLEtBQUssRUFBRXBDO1FBSFg7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQURKLGVBTUk7VUFBUSxPQUFPLEVBQUVVLGFBQWpCO1VBQWdDLElBQUksRUFBQyxRQUFyQztVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQU5KO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURKO01BQUE7TUFBQTtNQUFBO0lBQUEsUUF6Q0osZUFzREk7TUFBQSx1QkFDSSw4REFBQyxrREFBRDtRQUFNLElBQUksRUFBRSxHQUFaO1FBQUEsdUJBQ0k7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFESjtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREo7TUFBQTtNQUFBO01BQUE7SUFBQSxRQXRESjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFESjtBQThESCxFQUVEOztHQXZId0J0QjtVQUdMUjs7O0tBSEtRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1tEZXRhaWxsZWRBcnRpY2xlXS5qc3g/YTkxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJBeGlvc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuLi9zdHlsZXMvUGFnZXMvRGV0YWlsbGVkQXJ0aWNsZS5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuaW1wb3J0IHsgdjQgfSBmcm9tIFwidXVpZFwiO1xyXG5pbXBvcnQgeyBMb2dpbkNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9Mb2dpbkNvbnRleHRcIjtcclxuaW1wb3J0IGltZyBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaW1nMDAuanBnXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWxsZWRBcnRpY2xlKCkge1xyXG4gICAgY29uc3QgeyB1c2VyLCBzZXRVc2VyLCB1c2VyTmFtZSwgc2V0VXNlck5hbWUgfSA9IHVzZUNvbnRleHQoTG9naW5Db250ZXh0KTtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBzbHVnSUQgPSBPYmplY3QudmFsdWVzKHJvdXRlci5xdWVyeSk7XHJcblxyXG4gICAgY29uc3QgW2FydGljbGUsIHNldEFydGljbGVdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICAgIGNvbnN0IFtjb21tZW50YXJ5LCBzZXRDb21tZW50YXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgQXhpb3MucHV0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2ZldGNoT25lQXJ0aWNsZVwiLCB7XHJcbiAgICAgICAgICAgIGlkOiBzbHVnSUQsXHJcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHNldEFydGljbGUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBhZGRDb21tZW50YXJ5ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRpbWUpO1xyXG4gICAgICAgIGNvbnN0IGNvbUlEID0gdjQoKTtcclxuICAgICAgICBsZXQgcHNldWRvID0gXCJtaWNoZWxcIjtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIjFcIik7XHJcblxyXG4gICAgICAgIGlmKHVzZXIgPT09IG51bGwgJiYgdXNlck5hbWUgPT09IG51bGwpe1xyXG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIExvZyBJbiBvciBTaWduIFVwIGJlZm9yZSBjb21tZW50aW5nICEnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCIyXCIpO1xyXG4gICAgICBcclxuXHJcbiAgICAgICAgQXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9OZXdDb21tZW50YXJ5XCIsIHtcclxuICAgICAgICAgICAgdGltZTogdGltZSxcclxuICAgICAgICAgICAgY29tSUQ6IGNvbUlELFxyXG4gICAgICAgICAgICBjb21tZW50YXJ5OiBjb21tZW50YXJ5LFxyXG4gICAgICAgICAgICBwc2V1ZG86IHBzZXVkbyxcclxuICAgICAgICAgICAgYXJ0aWNsZUlEOiBhcnRpY2xlSUQsXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjNcIik7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkNvbW1lbnRhaXJlIEFkZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgc2V0Q29tbWVudGFyeShcIlwiKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5nbG9iYWxfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuaW1hZ2VfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3MuaW1hZ2VfY2FyZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlIGJsb2dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5kYXRhX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PiB7YXJ0aWNsZS5kYXRlfTwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT57YXJ0aWNsZS50aXRsZX0gPC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPnthcnRpY2xlLmRlc2NyaXB0aW9ufTwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnthcnRpY2xlLnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmltYWdlc19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLmltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYXJ0aWNsZS5pbWFnZS5tYXAoKGltZywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3MuaW1hZ2VfY29udGFpbmVyX21pbml9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltZy51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplcz1cIihtYXgtd2lkdGg6IDc2OHB4KSAxMDB2dyxcclxuICAgICAgICAgICAgICAobWF4LXdpZHRoOiAxMjAwcHgpIDUwdncsXHJcbiAgICAgICAgICAgICAgMzN2d1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmNvbW1lbnRhcnlfc2VjdGlvbn0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tbWVudGFyeShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRhcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZENvbW1lbnRhcnl9IHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29tbWVudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj4gUmV0b3VyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuLy8gIGF1dGhvciwgZGF0ZSAsIGRlc2NyaXB0aW9uICwgdGV4dCAgLCB0aXRsZVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJBeGlvcyIsIkltYWdlIiwiTGluayIsImNzcyIsInY0IiwiTG9naW5Db250ZXh0IiwiaW1nIiwiRGV0YWlsbGVkQXJ0aWNsZSIsInVzZXIiLCJzZXRVc2VyIiwidXNlck5hbWUiLCJzZXRVc2VyTmFtZSIsInJvdXRlciIsInNsdWdJRCIsIk9iamVjdCIsInZhbHVlcyIsInF1ZXJ5IiwiYXJ0aWNsZSIsInNldEFydGljbGUiLCJjb21tZW50YXJ5Iiwic2V0Q29tbWVudGFyeSIsInB1dCIsImlkIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImFkZENvbW1lbnRhcnkiLCJ0aW1lIiwiRGF0ZSIsImNvbUlEIiwicHNldWRvIiwiYWxlcnQiLCJwb3N0IiwiYXJ0aWNsZUlEIiwibWVzc2FnZSIsImdsb2JhbF9jb250YWluZXIiLCJpbWFnZV9jb250YWluZXIiLCJpbWFnZV9jYXJkIiwiZGF0YV9jb250YWluZXIiLCJkYXRlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRleHQiLCJpbWFnZXNfY29udGFpbmVyIiwiaW1hZ2UiLCJtYXAiLCJpbmRleCIsImltYWdlX2NvbnRhaW5lcl9taW5pIiwidXJsIiwiY29tbWVudGFyeV9zZWN0aW9uIiwiZSIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[DetailledArticle].jsx\n"));

/***/ })

});