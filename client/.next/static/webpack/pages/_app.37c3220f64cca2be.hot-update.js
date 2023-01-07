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

eval(__webpack_require__.ts("const mongoose = __webpack_require__(/*! mongoose */ \"../server/node_modules/mongoose/dist/browser.umd.js\");\r\nconst { Schema } = mongoose;\r\n\r\nconst ArticleSchema = new Schema({\r\n    description: {\r\n        type: String,\r\n        required: true,\r\n    },\r\n    title: {\r\n        type: String,\r\n        required: true,\r\n    },\r\n\r\n    text: {\r\n        type: String,\r\n        required: true,\r\n    },\r\n    date : {\r\n        type : String,\r\n        required: true\r\n    }, \r\n    author : {\r\n        type : String,\r\n        required : true\r\n    },\r\n    image : {\r\n        type : Array,\r\n        required : false\r\n    },\r\n    commentaryID : {\r\n        type : String\r\n    }\r\n});\r\nconst ArticleModel = mongoose.model(\"Articles\", ArticleSchema);\r\nmodule.exports = ArticleModel;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vc2VydmVyL01vZGVscy9tb2RlbC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyxxRUFBVTtBQUNuQyxRQUFRLFNBQVM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL3NlcnZlci9Nb2RlbHMvbW9kZWwuanM/MDhmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcclxuY29uc3QgeyBTY2hlbWEgfSA9IG1vbmdvb3NlO1xyXG5cclxuY29uc3QgQXJ0aWNsZVNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG5cclxuICAgIHRleHQ6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgZGF0ZSA6IHtcclxuICAgICAgICB0eXBlIDogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LCBcclxuICAgIGF1dGhvciA6IHtcclxuICAgICAgICB0eXBlIDogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkIDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGltYWdlIDoge1xyXG4gICAgICAgIHR5cGUgOiBBcnJheSxcclxuICAgICAgICByZXF1aXJlZCA6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgY29tbWVudGFyeUlEIDoge1xyXG4gICAgICAgIHR5cGUgOiBTdHJpbmdcclxuICAgIH1cclxufSk7XHJcbmNvbnN0IEFydGljbGVNb2RlbCA9IG1vbmdvb3NlLm1vZGVsKFwiQXJ0aWNsZXNcIiwgQXJ0aWNsZVNjaGVtYSk7XHJcbm1vZHVsZS5leHBvcnRzID0gQXJ0aWNsZU1vZGVsO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../server/Models/model.js\n"));

/***/ })

});