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

eval(__webpack_require__.ts("const mongoose = __webpack_require__(/*! mongoose */ \"../server/node_modules/mongoose/dist/browser.umd.js\");\r\nconst { Schema } = mongoose;\r\n\r\nconst ArticleSchema = new Schema({\r\n    description: {\r\n        type: String,\r\n        // required: true,\r\n    },\r\n    title: {\r\n        type: String,\r\n        // required: true,\r\n    },\r\n\r\n    text: {\r\n        type: String,\r\n        // required: true,\r\n    },\r\n    date: {\r\n        type: Date,\r\n        default: Date.now,\r\n        // required: true,\r\n    },\r\n    author: {\r\n        type: String,\r\n        // required: true,\r\n    },\r\n    image: {\r\n        type: Array,\r\n        // required: true,\r\n    },\r\n    commentaryID: {\r\n        type: String,\r\n    },\r\n});\r\n\r\nconst CommentarySchema = new Schema({\r\n    time: {\r\n        type: String,\r\n      \r\n        // required: true,\r\n    },\r\n    comID: {\r\n        type: String,\r\n        // required: true,\r\n    },\r\n    commentaryText: {\r\n        type: String,\r\n        // required: true,\r\n    },\r\n    pseudo: {\r\n        type: String,\r\n        // required: true,\r\n    },\r\n    articleID: {\r\n        type: String,\r\n        // required: true,\r\n    },\r\n    commentaryIndex : {\r\n        type : Number\r\n    }\r\n});\r\n\r\nconst ArticleModel = mongoose.model(\"Articles\", ArticleSchema);\r\nconst CommentaryModel = mongoose.model(\"Commentaires\", CommentarySchema);\r\n\r\nmodule.exports = {\r\n    ArticleModel,\r\n    CommentaryModel,\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vc2VydmVyL01vZGVscy9tb2RlbC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyxxRUFBVTtBQUNuQyxRQUFRLFNBQVM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uLi9zZXJ2ZXIvTW9kZWxzL21vZGVsLmpzPzA4ZmMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XHJcbmNvbnN0IHsgU2NoZW1hIH0gPSBtb25nb29zZTtcclxuXHJcbmNvbnN0IEFydGljbGVTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIC8vIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIC8vIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuXHJcbiAgICB0ZXh0OiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIC8vIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGRhdGU6IHtcclxuICAgICAgICB0eXBlOiBEYXRlLFxyXG4gICAgICAgIGRlZmF1bHQ6IERhdGUubm93LFxyXG4gICAgICAgIC8vIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGF1dGhvcjoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAvLyByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBpbWFnZToge1xyXG4gICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgIC8vIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGNvbW1lbnRhcnlJRDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgQ29tbWVudGFyeVNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gICAgdGltZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgXHJcbiAgICAgICAgLy8gcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgY29tSUQ6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgLy8gcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgY29tbWVudGFyeVRleHQ6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgLy8gcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgcHNldWRvOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIC8vIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGFydGljbGVJRDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAvLyByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBjb21tZW50YXJ5SW5kZXggOiB7XHJcbiAgICAgICAgdHlwZSA6IE51bWJlclxyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbnN0IEFydGljbGVNb2RlbCA9IG1vbmdvb3NlLm1vZGVsKFwiQXJ0aWNsZXNcIiwgQXJ0aWNsZVNjaGVtYSk7XHJcbmNvbnN0IENvbW1lbnRhcnlNb2RlbCA9IG1vbmdvb3NlLm1vZGVsKFwiQ29tbWVudGFpcmVzXCIsIENvbW1lbnRhcnlTY2hlbWEpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBBcnRpY2xlTW9kZWwsXHJcbiAgICBDb21tZW50YXJ5TW9kZWwsXHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../server/Models/model.js\n"));

/***/ })

});