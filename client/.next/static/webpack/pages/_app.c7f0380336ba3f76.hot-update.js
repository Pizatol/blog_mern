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

eval(__webpack_require__.ts("const mongoose = __webpack_require__(/*! mongoose */ \"../server/node_modules/mongoose/dist/browser.umd.js\");\r\nconst { Schema } = mongoose;\r\n\r\nconst ArticleSchema = new Schema({\r\n    description: {\r\n        type: String,\r\n        required: true,\r\n    },\r\n    title: {\r\n        type: String,\r\n        required: true,\r\n    },\r\n\r\n    text: {\r\n        type: String,\r\n        required: true,\r\n    },\r\n    date: {\r\n        type: String,\r\n        required: true,\r\n    },\r\n    author: {\r\n        type: String,\r\n        required: true,\r\n    },\r\n    image: {\r\n        type: Array,\r\n        required: true,\r\n    },\r\n    // commentaryID: {\r\n    //     type: String,\r\n    //     required: true,\r\n    // },\r\n});\r\n// module.exports = ArticleModel;\r\n\r\nconst CommentaryModel = mongoose.model(\"Commentary\", CommentarySchema);\r\nconst ArticleModel = mongoose.model(\"Articles\", ArticleSchema);\r\n\r\n\r\nmodule.exports = ArticleModel ;\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vc2VydmVyL01vZGVscy9tb2RlbC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyxxRUFBVTtBQUNuQyxRQUFRLFNBQVM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uLi9zZXJ2ZXIvTW9kZWxzL21vZGVsLmpzPzA4ZmMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XHJcbmNvbnN0IHsgU2NoZW1hIH0gPSBtb25nb29zZTtcclxuXHJcbmNvbnN0IEFydGljbGVTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuXHJcbiAgICB0ZXh0OiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGRhdGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgYXV0aG9yOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgLy8gY29tbWVudGFyeUlEOiB7XHJcbiAgICAvLyAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgLy8gfSxcclxufSk7XHJcbi8vIG1vZHVsZS5leHBvcnRzID0gQXJ0aWNsZU1vZGVsO1xyXG5cclxuY29uc3QgQ29tbWVudGFyeU1vZGVsID0gbW9uZ29vc2UubW9kZWwoXCJDb21tZW50YXJ5XCIsIENvbW1lbnRhcnlTY2hlbWEpO1xyXG5jb25zdCBBcnRpY2xlTW9kZWwgPSBtb25nb29zZS5tb2RlbChcIkFydGljbGVzXCIsIEFydGljbGVTY2hlbWEpO1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQXJ0aWNsZU1vZGVsIDtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../server/Models/model.js\n"));

/***/ })

});