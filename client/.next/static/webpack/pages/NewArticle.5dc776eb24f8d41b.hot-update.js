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

/***/ "./Components/AddArticle.jsx":
/*!***********************************!*\
  !*** ./Components/AddArticle.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddArticle; }\n/* harmony export */ });\n/* harmony import */ var C_PROG_DEV_FICHIERS_Travaux_NEW_blog_mern_blog_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_PROG_DEV_FICHIERS_Travaux_NEW_blog_mern_blog_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_PROG_DEV_FICHIERS_Travaux_NEW_blog_mern_blog_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_PROG_DEV_FICHIERS_Travaux_NEW_blog_mern_blog_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Components_AddArticle_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/Components/AddArticle.module.scss */ \"./styles/Components/AddArticle.module.scss\");\n/* harmony import */ var _styles_Components_AddArticle_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_Components_AddArticle_module_scss__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var Axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Axios */ \"./node_modules/Axios/index.js\");\n/* harmony import */ var _Buttons_Button_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Buttons/Button_main */ \"./Components/Buttons/Button_main.jsx\");\n/* harmony import */ var _Input_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Input_image */ \"./Components/Input_image.jsx\");\n/* harmony import */ var _formattedDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formattedDate */ \"./Components/formattedDate.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _formatted_precise_date__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./formatted_precise_date */ \"./Components/formatted_precise_date.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);\n\n\nvar _jsxFileName = \"C:\\\\PROG\\\\DEV FICHIERS\\\\Travaux NEW\\\\blog_mern\\\\blog\\\\client\\\\Components\\\\AddArticle.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction AddArticle() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      title = _useState[0],\n      setTitle = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      description = _useState2[0],\n      setDescription = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      text = _useState3[0],\n      setText = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined),\n      date = _useState4[0],\n      setDate = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      author = _useState5[0],\n      setAuthor = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      articlesList = _useState6[0],\n      setArticlesList = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      imageUpload = _useState7[0],\n      setImageUpload = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      imageUrls = _useState8[0],\n      setImageUrls = _useState8[1]; // const [tempoDisplayImages, setTempoDisplayImages] = useState([]);\n  // **********************\n  // console.log(\"IMG URL\", imageUrls);\n\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n\n  var addArticle = /*#__PURE__*/function () {\n    var _ref = (0,C_PROG_DEV_FICHIERS_Travaux_NEW_blog_mern_blog_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_PROG_DEV_FICHIERS_Travaux_NEW_blog_mern_blog_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {\n      var dateFormated, time, commentaryID;\n      return C_PROG_DEV_FICHIERS_Travaux_NEW_blog_mern_blog_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              dateFormated = (0,_formattedDate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n              time = (0,_formatted_precise_date__WEBPACK_IMPORTED_MODULE_9__.formattedDateWithSeconds)();\n              commentaryID = (0,uuid__WEBPACK_IMPORTED_MODULE_11__.v4)();\n\n              if (!(title !== \"\" && description !== \"\" && text !== \"\" && author !== \"\")) {\n                _context.next = 8;\n                break;\n              }\n\n              Axios__WEBPACK_IMPORTED_MODULE_12__[\"default\"].post(\"http://localhost:3001/addArticle\", {\n                title: title,\n                description: description,\n                text: text,\n                author: author,\n                date: time,\n                image: imageUrls,\n                commentaryID: commentaryID\n              }).then(function () {\n                try {\n                  react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success(\"Article uploaded ! \", {\n                    autoClose: 2000,\n                    theme: \"colored\",\n                    closeOnClick: true,\n                    pauseOnHover: false\n                  });\n                  setTitle(\"\");\n                  setAuthor(\"\");\n                  setDescription(\"\");\n                  setText(\"\");\n                  setDate(undefined);\n                  setTempoDisplayImages([]);\n                  setImageUrls([]);\n                  setImageUpload([]);\n                } catch (error) {\n                  console.log(error);\n                }\n              }).then(function () {\n                router.push(\"/AllArticles\");\n              }); // .then((response) => {\n              //     try {\n              //         setArticlesList([\n              //             ...articlesList,\n              //             {\n              //                 title: title,\n              //                 description: description,\n              //                 text: text,\n              //                 author: author,\n              //                 date: dateFormated,\n              //                 image: imageUrls,\n              //             },\n              //         ]);\n              //     } catch (error) {\n              //         console.log(error);\n              //     }\n              // });\n\n              _context.next = 10;\n              break;\n\n            case 8:\n              alert(\"Please complete the form\");\n              return _context.abrupt(\"return\");\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function addArticle(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var countLetters = function countLetters(cnt) {\n    if (cnt.length > -1) {\n      var value = 170 - cnt.length;\n      return value;\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"form\", {\n      className: (_styles_Components_AddArticle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().form_container),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"h2\", {\n        className: (_styles_Components_AddArticle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().title_form),\n        children: \"New Article\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n        className: (_styles_Components_AddArticle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().input),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"label\", {\n          children: \"Author\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"input\", {\n          onChange: function onChange(e) {\n            return setAuthor(e.target.value);\n          },\n          type: \"text\",\n          value: author\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n        className: (_styles_Components_AddArticle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().input),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"label\", {\n          children: \"Title\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"input\", {\n          onChange: function onChange(e) {\n            return setTitle(e.target.value);\n          },\n          type: \"text\",\n          value: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Components_AddArticle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().input), \" \").concat((_styles_Components_AddArticle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().description_textarea)),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"label\", {\n          children: [\" Description (\", countLetters(description), \") \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 129,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"textarea\", {\n          maxlength: \"170\",\n          onChange: function onChange(e) {\n            return setDescription(e.target.value);\n          },\n          value: description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Components_AddArticle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().input), \" \").concat((_styles_Components_AddArticle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().text_textarea)),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"label\", {\n          children: \" Text\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 137,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"textarea\", {\n          onChange: function onChange(e) {\n            return setText(e.target.value);\n          },\n          value: text\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 138,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_Input_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          imageUrls: imageUrls,\n          setImageUrls: setImageUrls,\n          imageUpload: imageUpload,\n          setImageUpload: setImageUpload\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 145,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 144,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_Buttons_Button_main__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        name: \"Submit\",\n        color: \"blue\",\n        foo: function foo(e) {\n          return addArticle(e);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 153,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 109,\n    columnNumber: 9\n  }, this);\n} // Lorem ipsum dolor sit amet.\n// Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa dolorem facilis sapiente maxime dolore repudiandae pariatur quisquam sunt animi et nulla aliquam atque perspiciatis, laudantium quae nisi omnis deserunt.\n// Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, repellendus!\n\n_s(AddArticle, \"yq/+KS4piWWg4QZKe0DaiWkRXCU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter];\n});\n\n_c = AddArticle;\n\nvar _c;\n\n$RefreshReg$(_c, \"AddArticle\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SnBCO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFESjtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBbENKLGVBMkNJLCtEQUFDLDREQUFEO1FBQ0ksSUFBSSxFQUFFLFFBRFY7UUFFSSxLQUFLLEVBQUUsTUFGWDtRQUdJLEdBQUcsRUFBRSxhQUFDSyxDQUFEO1VBQUEsT0FBT0QsVUFBVSxDQUFDQyxDQUFELENBQWpCO1FBQUE7TUFIVDtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBM0NKO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURKO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFESjtBQXFESCxFQUVEO0FBRUE7QUFFQTs7R0F6SndCcEI7VUFlTEY7OztLQWZLRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL0FkZEFydGljbGUuanN4PzcyMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3R5bGVzL0NvbXBvbmVudHMvQWRkQXJ0aWNsZS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcIkF4aW9zXCI7XHJcbmltcG9ydCBCdXR0b25fbWFpbiBmcm9tIFwiLi9CdXR0b25zL0J1dHRvbl9tYWluXCI7XHJcbmltcG9ydCBJbnB1dF9pbWFnZSBmcm9tIFwiLi9JbnB1dF9pbWFnZVwiO1xyXG5pbXBvcnQgZm9ybWF0dGVkRGF0ZSBmcm9tIFwiLi9mb3JtYXR0ZWREYXRlXCI7XHJcbmltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XHJcbmltcG9ydCB7IHY0IH0gZnJvbSBcInV1aWRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGZvcm1hdHRlZERhdGVXaXRoU2Vjb25kcyB9IGZyb20gXCIuL2Zvcm1hdHRlZF9wcmVjaXNlX2RhdGVcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRBcnRpY2xlKCkge1xyXG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgICBjb25zdCBbYXV0aG9yLCBzZXRBdXRob3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbYXJ0aWNsZXNMaXN0LCBzZXRBcnRpY2xlc0xpc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IFtpbWFnZVVwbG9hZCwgc2V0SW1hZ2VVcGxvYWRdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2ltYWdlVXJscywgc2V0SW1hZ2VVcmxzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIC8vIGNvbnN0IFt0ZW1wb0Rpc3BsYXlJbWFnZXMsIHNldFRlbXBvRGlzcGxheUltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgLy8gKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgLy8gY29uc29sZS5sb2coXCJJTUcgVVJMXCIsIGltYWdlVXJscyk7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgYWRkQXJ0aWNsZSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRlRm9ybWF0ZWQgPSBmb3JtYXR0ZWREYXRlKCk7XHJcbiAgICAgICAgY29uc3QgdGltZSA9IGZvcm1hdHRlZERhdGVXaXRoU2Vjb25kcygpXHJcblxyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRhcnlJRCA9IHY0KCk7XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGl0bGUgIT09IFwiXCIgJiZcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24gIT09IFwiXCIgJiZcclxuICAgICAgICAgICAgdGV4dCAhPT0gXCJcIiAmJlxyXG4gICAgICAgICAgICBhdXRob3IgIT09IFwiXCJcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgQXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hZGRBcnRpY2xlXCIsIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIHRleHQ6IHRleHQsXHJcbiAgICAgICAgICAgICAgICBhdXRob3I6IGF1dGhvcixcclxuICAgICAgICAgICAgICAgIGRhdGU6IHRpbWUsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogaW1hZ2VVcmxzLFxyXG4gICAgICAgICAgICAgICAgY29tbWVudGFyeUlEOiBjb21tZW50YXJ5SUQsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhgQXJ0aWNsZSB1cGxvYWRlZCAhIGAsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogMjAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiBcImNvbG9yZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaXRsZShcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXV0aG9yKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXREZXNjcmlwdGlvbihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGV4dChcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0ZSh1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUZW1wb0Rpc3BsYXlJbWFnZXMoW10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJbWFnZVVybHMoW10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJbWFnZVVwbG9hZChbXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvQWxsQXJ0aWNsZXNcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHNldEFydGljbGVzTGlzdChbXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIC4uLmFydGljbGVzTGlzdCxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGV4dDogdGV4dCxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGF1dGhvcjogYXV0aG9yLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgZGF0ZTogZGF0ZUZvcm1hdGVkLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgaW1hZ2U6IGltYWdlVXJscyxcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIC8vICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgY29tcGxldGUgdGhlIGZvcm1cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNvdW50TGV0dGVycyA9IChjbnQpID0+IHtcclxuICAgICAgICBpZiAoY250Lmxlbmd0aCA+IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gMTcwIC0gY250Lmxlbmd0aDtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2Nzcy5mb3JtX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtjc3MudGl0bGVfZm9ybX0+TmV3IEFydGljbGU8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5pbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkF1dGhvcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QXV0aG9yKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YXV0aG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuaW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y3NzLmlucHV0fSAke2Nzcy5kZXNjcmlwdGlvbl90ZXh0YXJlYX1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+IERlc2NyaXB0aW9uICh7Y291bnRMZXR0ZXJzKGRlc2NyaXB0aW9uKX0pIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aD1cIjE3MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjc3MuaW5wdXR9ICR7Y3NzLnRleHRfdGV4dGFyZWF9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiBUZXh0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dF9pbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybHM9e2ltYWdlVXJsc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW1hZ2VVcmxzPXtzZXRJbWFnZVVybHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXBsb2FkPXtpbWFnZVVwbG9hZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW1hZ2VVcGxvYWQ9e3NldEltYWdlVXBsb2FkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uX21haW5cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIlN1Ym1pdFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtcImJsdWVcIn1cclxuICAgICAgICAgICAgICAgICAgICBmb289eyhlKSA9PiBhZGRBcnRpY2xlKGUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuLy8gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQuXHJcblxyXG4vLyBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBc3Blcm5hdHVyIGlwc2EgZG9sb3JlbSBmYWNpbGlzIHNhcGllbnRlIG1heGltZSBkb2xvcmUgcmVwdWRpYW5kYWUgcGFyaWF0dXIgcXVpc3F1YW0gc3VudCBhbmltaSBldCBudWxsYSBhbGlxdWFtIGF0cXVlIHBlcnNwaWNpYXRpcywgbGF1ZGFudGl1bSBxdWFlIG5pc2kgb21uaXMgZGVzZXJ1bnQuXHJcblxyXG4vLyBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBc3N1bWVuZGEsIHJlcGVsbGVuZHVzIVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNzcyIsIkF4aW9zIiwiQnV0dG9uX21haW4iLCJJbnB1dF9pbWFnZSIsImZvcm1hdHRlZERhdGUiLCJ0b2FzdCIsIlRvYXN0Q29udGFpbmVyIiwidjQiLCJ1c2VSb3V0ZXIiLCJmb3JtYXR0ZWREYXRlV2l0aFNlY29uZHMiLCJBZGRBcnRpY2xlIiwidGl0bGUiLCJzZXRUaXRsZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJ0ZXh0Iiwic2V0VGV4dCIsInVuZGVmaW5lZCIsImRhdGUiLCJzZXREYXRlIiwiYXV0aG9yIiwic2V0QXV0aG9yIiwiYXJ0aWNsZXNMaXN0Iiwic2V0QXJ0aWNsZXNMaXN0IiwiaW1hZ2VVcGxvYWQiLCJzZXRJbWFnZVVwbG9hZCIsImltYWdlVXJscyIsInNldEltYWdlVXJscyIsInJvdXRlciIsImFkZEFydGljbGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRlRm9ybWF0ZWQiLCJ0aW1lIiwiY29tbWVudGFyeUlEIiwicG9zdCIsImltYWdlIiwidGhlbiIsInN1Y2Nlc3MiLCJhdXRvQ2xvc2UiLCJ0aGVtZSIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsInNldFRlbXBvRGlzcGxheUltYWdlcyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJhbGVydCIsImNvdW50TGV0dGVycyIsImNudCIsImxlbmd0aCIsInZhbHVlIiwiZm9ybV9jb250YWluZXIiLCJ0aXRsZV9mb3JtIiwiaW5wdXQiLCJ0YXJnZXQiLCJkZXNjcmlwdGlvbl90ZXh0YXJlYSIsInRleHRfdGV4dGFyZWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/AddArticle.jsx\n"));

/***/ })

});