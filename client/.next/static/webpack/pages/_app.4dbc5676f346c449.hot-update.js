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

eval(__webpack_require__.ts("const mongoose = __webpack_require__(/*! mongoose */ \"../server/node_modules/mongoose/dist/browser.umd.js\");\r\nconst { Schema } = mongoose;\r\n\r\nconst ArticleSchema = new Schema({\r\n    description: {\r\n        type: String,\r\n        required: true,\r\n    },\r\n    title: {\r\n        type: String,\r\n        required: true,\r\n    },\r\n\r\n    text: {\r\n        type: String,\r\n        required: true,\r\n    },\r\n    date: {\r\n        type: String,\r\n        required: true,\r\n    },\r\n    author: {\r\n        type: String,\r\n        required: true,\r\n    },\r\n    image: {\r\n        type: Array,\r\n        required: true,\r\n    },\r\n});\r\n// module.exports = ArticleModel;\r\n\r\nconst CommentarySchema = new Schema({\r\n    time: {\r\n        type: String,\r\n        required: true,\r\n    },\r\n    comID: {\r\n        type: String,\r\n        required: true,\r\n    },\r\n    commentary: {\r\n        type: String,\r\n        required: true,\r\n    },\r\n    pseudo: {\r\n        type: String,\r\n        required: true,\r\n    },\r\n    articleID: {\r\n        type: String,\r\n        required: true,\r\n    },\r\n});\r\n\r\nconst ArticleModel = mongoose.model(\"Articles\", ArticleSchema);\r\nconst CommentaryModel = mongoose.model(\"Commentaires\", CommentarySchema);\r\n\r\nmodule.exports = {\r\n    ArticleModel,\r\n    CommentaryModel,\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vc2VydmVyL01vZGVscy9tb2RlbC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyxxRUFBVTtBQUNuQyxRQUFRLFNBQVM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL3NlcnZlci9Nb2RlbHMvbW9kZWwuanM/MDhmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcclxuY29uc3QgeyBTY2hlbWEgfSA9IG1vbmdvb3NlO1xyXG5cclxuY29uc3QgQXJ0aWNsZVNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG5cclxuICAgIHRleHQ6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgZGF0ZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBhdXRob3I6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IHtcclxuICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbn0pO1xyXG4vLyBtb2R1bGUuZXhwb3J0cyA9IEFydGljbGVNb2RlbDtcclxuXHJcbmNvbnN0IENvbW1lbnRhcnlTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICAgIHRpbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgY29tSUQ6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgY29tbWVudGFyeToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBwc2V1ZG86IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgYXJ0aWNsZUlEOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5jb25zdCBBcnRpY2xlTW9kZWwgPSBtb25nb29zZS5tb2RlbChcIkFydGljbGVzXCIsIEFydGljbGVTY2hlbWEpO1xyXG5jb25zdCBDb21tZW50YXJ5TW9kZWwgPSBtb25nb29zZS5tb2RlbChcIkNvbW1lbnRhaXJlc1wiLCBDb21tZW50YXJ5U2NoZW1hKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgQXJ0aWNsZU1vZGVsLFxyXG4gICAgQ29tbWVudGFyeU1vZGVsLFxyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../server/Models/model.js\n"));

/***/ })

});