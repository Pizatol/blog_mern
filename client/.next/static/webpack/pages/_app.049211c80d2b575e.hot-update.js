/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "../server/Models/model.js":
/*!*********************************!*\
  !*** ../server/Models/model.js ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("const mongoose = __webpack_require__(/*! mongoose */ \"../server/node_modules/mongoose/dist/browser.umd.js\");\r\nconst { Schema } = mongoose;\r\n\r\nconst ArticleSchema = new Schema({\r\n    description: {\r\n        type: String,\r\n        required: true,\r\n    },\r\n    title: {\r\n        type: String,\r\n        required: true,\r\n    },\r\n\r\n    text: {\r\n        type: String,\r\n        required: true,\r\n    },\r\n    date : {\r\n        type : String,\r\n        required: true\r\n    }, \r\n    author : {\r\n        type : String,\r\n        required : true\r\n    },\r\n    image : {\r\n        type : Array,\r\n        required : false\r\n    },\r\n    commentaryID : {\r\n        type : String,\r\n        required : true\r\n    }\r\n});\r\nconst ArticleModel = mongoose.model(\"Articles\", ArticleSchema);\r\nmodule.exports = ArticleModel;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vc2VydmVyL01vZGVscy9tb2RlbC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyxxRUFBVTtBQUNuQyxRQUFRLFNBQVM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi4vc2VydmVyL01vZGVscy9tb2RlbC5qcz8wOGZjIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xyXG5jb25zdCB7IFNjaGVtYSB9ID0gbW9uZ29vc2U7XHJcblxyXG5jb25zdCBBcnRpY2xlU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcblxyXG4gICAgdGV4dDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBkYXRlIDoge1xyXG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sIFxyXG4gICAgYXV0aG9yIDoge1xyXG4gICAgICAgIHR5cGUgOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQgOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgaW1hZ2UgOiB7XHJcbiAgICAgICAgdHlwZSA6IEFycmF5LFxyXG4gICAgICAgIHJlcXVpcmVkIDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBjb21tZW50YXJ5SUQgOiB7XHJcbiAgICAgICAgdHlwZSA6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZCA6IHRydWVcclxuICAgIH1cclxufSk7XHJcbmNvbnN0IEFydGljbGVNb2RlbCA9IG1vbmdvb3NlLm1vZGVsKFwiQXJ0aWNsZXNcIiwgQXJ0aWNsZVNjaGVtYSk7XHJcbm1vZHVsZS5leHBvcnRzID0gQXJ0aWNsZU1vZGVsO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../server/Models/model.js\n"));

/***/ })

});