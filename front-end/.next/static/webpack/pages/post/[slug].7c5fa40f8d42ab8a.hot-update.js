"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post/[slug]",{

/***/ "./pages/post/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/post/[slug].tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sanity_nextmedium_sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../sanity-nextmedium/sanity */ \"../sanity-nextmedium/sanity.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header.tsx\");\n\n\n\n\nfunction Post(param) {\n    var post = param.post;\n    console.log(post);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 16,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-full h-48 object-cover\",\n                src: (0,_sanity_nextmedium_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(post.mainImage).url(),\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 18,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this));\n}\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDeUI7QUFDNkM7QUFFMUI7U0FRbkNHLElBQUksQ0FBRSxLQUFZLEVBQUUsQ0FBQztRQUFkQyxJQUFJLEdBQUwsS0FBWSxDQUFYQSxJQUFJO0lBQ2xCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSTtJQUNoQixNQUFNLDZFQUNIRyxDQUFJOzt3RkFBRUwsMERBQU07Ozs7O3dGQUVaTSxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBMEI7Z0JBQUNDLEdBQUcsRUFBRVQsaUVBQU0sQ0FBQ0csSUFBSSxDQUFDTyxTQUFTLEVBQUVDLEdBQUc7Z0JBQUtDLEdBQUcsRUFBQyxDQUFFOzs7Ozs7Ozs7Ozs7QUFLeEYsQ0FBQztLQVZRVixJQUFJOztBQVdiLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3QvW3NsdWddLnRzeD8zMDExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge3Nhbml0eUNsaWVudCwgdXJsRm9yfSBmcm9tIFwiLi4vLi4vLi4vc2FuaXR5LW5leHRtZWRpdW0vc2FuaXR5XCJcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gJy4uLy4uLy4uL3Nhbml0eS1uZXh0bWVkaXVtL3R5cGluZ3MnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXInXHJcblxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHsgXHJcbiAgcG9zdDpQb3N0XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBQb3N0ICh7cG9zdH06UHJvcHMpIHtcclxuICBjb25zb2xlLmxvZyhwb3N0KVxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbj48SGVhZGVyIC8+XHJcbiAgICBcclxuICAgIDxpbWcgY2xhc3NOYW1lPVwidy1mdWxsIGgtNDggb2JqZWN0LWNvdmVyXCIgc3JjPXt1cmxGb3IocG9zdC5tYWluSW1hZ2UpLnVybCgpIX0gYWx0PVwiXCIgLz5cclxuICAgIDwvbWFpbj5cclxuXHJcblxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQb3N0XHJcblxyXG5cclxuXHJcbi8vVGhpcyBpcyBiYXNpY2FsbHkgdGhlIGZ1bmN0aW9uIHdoZXJlIGl0IHdpbGwgdGVsbHMgbmV4dGpzIHRvIGZpZ3VyZSBvdXQgd2hjaWggcGF0aHMgdG8gcHJlLXJlbmRlci4gb3IgZmluZCBhbGwgdGhlIHBhZ2VzIHRoYXQgZXhpc3QgZm9yIHBvc3RzLlxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKT0+e1xyXG5cclxuICAvL2xldHMgcHJlLWZldGNoIGFsbCB0aGUgcG9zdHNcclxuICBjb25zdCBxdWVyeSA9IGAqW190eXBlID09IFwicG9zdFwiXXtcclxuICAgIF9pZCxcclxuICAgIHNsdWd7XHJcbiAgICAgIGN1cnJlbnRcclxuICAgIH1cclxuICB9ICAgIFxyXG4gIGBcclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IHNhbml0eUNsaWVudC5mZXRjaChxdWVyeSlcclxuICBjb25zdCBwYXRocyA9IHBvc3RzLm1hcCgocG9zdDogUG9zdCkgPT4gKHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBzbHVnOiBwb3N0LnNsdWcuY3VycmVudFxyXG4gICAgfVxyXG4gIH0pKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazpcImJsb2NraW5nXCIgLy9ibG9jayB0aGUgcGFnZSBmcm9tIHNob3dpbmcgb3IgaXQgd2lsbCBzaG93IDQwNCBpZiBpdCBkb2Vzbid0IGV4aXN0J1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTdGF0aWNQYXRocyBkb2Vzbid0IGhlbHAgYWxvbmUsIHdlIG5lZWQgdG8gZ2V0IHRoZSBwYWdlIHdpdGggdGhlIHNwZWNpZiBwcm9wcy4gd2hpY2ggYmFzaWNhbGx5IHBvcHVsYXRlcyB0aGUgaW5mb3JtYXRpb24gZm9yIHRoZSBwYWdlLlxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHtwYXJhbXN9KSA9PntcclxuICBjb25zdCBxdWVyeSA9IGAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17XHJcbiAgICAgIF9pZCxcclxuICAgICAgX2NyZWF0ZWRBdCxcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGF1dGhvci0+IHtcclxuICAgICAgICBuYW1lLCBcclxuICAgICAgICBpbWFnZVxyXG4gICAgICB9LFxyXG4gICAgICAnY29tbWVudHMnOiAqW190eXBlID09IFwiY29tbWVudFwiICYmIHBvc3QuX3JlZiA9PSBeLl9pZCAmJiBhcHByb3ZlZCA9PSB0cnVlXSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIG1haW5JbWFnZSxcclxuICAgICAgc2x1ZyxcclxuICAgICAgYm9keVxyXG4gICAgfWBcclxuXHJcbiAgY29uc3QgcG9zdCA9IGF3YWl0IHNhbml0eUNsaWVudC5mZXRjaChxdWVyeSwge1xyXG4gICAgc2x1ZzogcGFyYW1zPy5zbHVnLFxyXG4gIH0pXHJcblxyXG5cclxuICBpZighcG9zdCl7XHJcbiAgICByZXR1cm4geyBub3RGb3VuZDp0cnVlfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgXHJcbiAgICBwcm9wczoge3Bvc3R9LFxyXG4gICAgcmV2YWxpZGF0ZTo2MCAvL2FmdGVyIDYwIHNlY29uZHMgaXQgd2lsbCB1cGRhdGUgdGhlIGNhdGNoIGluIGNhc2Ugc29tZW9uZSBicm91Z2h0IGNoYW5nZXMgdG8gdGhlIHBhZ2UsIHRoZW4gdGhlIGNhY2hlIHdpbGwgYWxzbyBiZSB1cGRhdGVkIHdpdGggbmV3IHVwZGF0ZWQgcGFnZS5cclxuICB9XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1cmxGb3IiLCJIZWFkZXIiLCJQb3N0IiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwiaW1nIiwiY2xhc3NOYW1lIiwic3JjIiwibWFpbkltYWdlIiwidXJsIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[slug].tsx\n");

/***/ })

});