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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sanity_nextmedium_sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../sanity-nextmedium/sanity */ \"../sanity-nextmedium/sanity.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header.tsx\");\n\n\n\n\nfunction Post(param) {\n    var post = param.post;\n    console.log(post);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 16,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-full h-40 object-cover\",\n                src: (0,_sanity_nextmedium_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(post.mainImage).url(),\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 18,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                className: \"max-w-3xl mx-auto p-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl mt-10 mb-3\",\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 21,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-light text-gray-500 mb-2\",\n                        children: post.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 22,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"rounded-full h-10\",\n                                src: (0,_sanity_nextmedium_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(post.author.image).url(),\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 25,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-extralight text-sm\",\n                                children: [\n                                    \"Blog post by \",\n                                    post.author.name,\n                                    \" - Published at \",\n                                    new Date(post._createdAt).toLocaleString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 26,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 24,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 20,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this));\n}\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDeUI7QUFDNkM7QUFFMUI7U0FRbkNHLElBQUksQ0FBRSxLQUFZLEVBQUUsQ0FBQztRQUFkQyxJQUFJLEdBQUwsS0FBWSxDQUFYQSxJQUFJO0lBQ2xCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSTtJQUNoQixNQUFNLDZFQUNIRyxDQUFJOzt3RkFBRUwsMERBQU07Ozs7O3dGQUVaTSxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBMEI7Z0JBQUNDLEdBQUcsRUFBRVQsaUVBQU0sQ0FBQ0csSUFBSSxDQUFDTyxTQUFTLEVBQUVDLEdBQUc7Z0JBQUtDLEdBQUcsRUFBQyxDQUFFOzs7Ozs7d0ZBRW5GQyxDQUFPO2dCQUFDTCxTQUFTLEVBQUMsQ0FBdUI7O2dHQUN2Q00sQ0FBRTt3QkFBQ04sU0FBUyxFQUFDLENBQXFCO2tDQUFFTCxJQUFJLENBQUNZLEtBQUs7Ozs7OztnR0FDOUNDLENBQUU7d0JBQUNSLFNBQVMsRUFBQyxDQUF1QztrQ0FBRUwsSUFBSSxDQUFDYyxXQUFXOzs7Ozs7Z0dBRXRFQyxDQUFHO3dCQUFDVixTQUFTLEVBQUMsQ0FBbUI7O3dHQUMvQkQsQ0FBRztnQ0FBQ0MsU0FBUyxFQUFDLENBQW1CO2dDQUFDQyxHQUFHLEVBQUVULGlFQUFNLENBQUNHLElBQUksQ0FBQ2dCLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFVCxHQUFHO2dDQUFLQyxHQUFHLEVBQUMsQ0FBRTs7Ozs7O3dHQUMvRVMsQ0FBQztnQ0FBQ2IsU0FBUyxFQUFDLENBQXlCOztvQ0FBQyxDQUN4QjtvQ0FBQ0wsSUFBSSxDQUFDZ0IsTUFBTSxDQUFDRyxJQUFJO29DQUFDLENBQWdCO29DQUFDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDcEIsSUFBSSxDQUFDcUIsVUFBVSxFQUFFQyxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2xHLENBQUM7S0F2QlF2QixJQUFJOztBQXdCYiwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0L1tzbHVnXS50c3g/MzAxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtzYW5pdHlDbGllbnQsIHVybEZvcn0gZnJvbSBcIi4uLy4uLy4uL3Nhbml0eS1uZXh0bWVkaXVtL3Nhbml0eVwiXHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tICcuLi8uLi8uLi9zYW5pdHktbmV4dG1lZGl1bS90eXBpbmdzJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xyXG5cclxuXHJcbmludGVyZmFjZSBQcm9wcyB7IFxyXG4gIHBvc3Q6UG9zdFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gUG9zdCAoe3Bvc3R9OlByb3BzKSB7XHJcbiAgY29uc29sZS5sb2cocG9zdClcclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4+PEhlYWRlciAvPlxyXG4gICAgXHJcbiAgICA8aW1nIGNsYXNzTmFtZT1cInctZnVsbCBoLTQwIG9iamVjdC1jb3ZlclwiIHNyYz17dXJsRm9yKHBvc3QubWFpbkltYWdlKS51cmwoKSF9IGFsdD1cIlwiIC8+XHJcblxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwibWF4LXctM3hsIG14LWF1dG8gcC01XCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtdC0xMCBtYi0zXCI+e3Bvc3QudGl0bGV9PC9oMT5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1saWdodCB0ZXh0LWdyYXktNTAwIG1iLTJcIj57cG9zdC5kZXNjcmlwdGlvbn08L2gyPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGgtMTBcIiBzcmM9e3VybEZvcihwb3N0LmF1dGhvci5pbWFnZSkudXJsKCkhfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFsaWdodCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICBCbG9nIHBvc3QgYnkge3Bvc3QuYXV0aG9yLm5hbWV9IC0gUHVibGlzaGVkIGF0IHtuZXcgRGF0ZShwb3N0Ll9jcmVhdGVkQXQpLnRvTG9jYWxlU3RyaW5nKCl9XHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgICA8L21haW4+XHJcblxyXG5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUG9zdFxyXG5cclxuXHJcblxyXG4vL1RoaXMgaXMgYmFzaWNhbGx5IHRoZSBmdW5jdGlvbiB3aGVyZSBpdCB3aWxsIHRlbGxzIG5leHRqcyB0byBmaWd1cmUgb3V0IHdoY2loIHBhdGhzIHRvIHByZS1yZW5kZXIuIG9yIGZpbmQgYWxsIHRoZSBwYWdlcyB0aGF0IGV4aXN0IGZvciBwb3N0cy5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCk9PntcclxuXHJcbiAgLy9sZXRzIHByZS1mZXRjaCBhbGwgdGhlIHBvc3RzXHJcbiAgY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInBvc3RcIl17XHJcbiAgICBfaWQsXHJcbiAgICBzbHVne1xyXG4gICAgICBjdXJyZW50XHJcbiAgICB9XHJcbiAgfSAgICBcclxuICBgXHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2gocXVlcnkpXHJcbiAgY29uc3QgcGF0aHMgPSBwb3N0cy5tYXAoKHBvc3Q6IFBvc3QpID0+ICh7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgc2x1ZzogcG9zdC5zbHVnLmN1cnJlbnRcclxuICAgIH1cclxuICB9KSlcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6XCJibG9ja2luZ1wiIC8vYmxvY2sgdGhlIHBhZ2UgZnJvbSBzaG93aW5nIG9yIGl0IHdpbGwgc2hvdyA0MDQgaWYgaXQgZG9lc24ndCBleGlzdCdcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU3RhdGljUGF0aHMgZG9lc24ndCBoZWxwIGFsb25lLCB3ZSBuZWVkIHRvIGdldCB0aGUgcGFnZSB3aXRoIHRoZSBzcGVjaWYgcHJvcHMuIHdoaWNoIGJhc2ljYWxseSBwb3B1bGF0ZXMgdGhlIGluZm9ybWF0aW9uIGZvciB0aGUgcGFnZS5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7cGFyYW1zfSkgPT57XHJcbiAgY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBde1xyXG4gICAgICBfaWQsXHJcbiAgICAgIF9jcmVhdGVkQXQsXHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBhdXRob3ItPiB7XHJcbiAgICAgICAgbmFtZSwgXHJcbiAgICAgICAgaW1hZ2VcclxuICAgICAgfSxcclxuICAgICAgJ2NvbW1lbnRzJzogKltfdHlwZSA9PSBcImNvbW1lbnRcIiAmJiBwb3N0Ll9yZWYgPT0gXi5faWQgJiYgYXBwcm92ZWQgPT0gdHJ1ZV0sXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBtYWluSW1hZ2UsXHJcbiAgICAgIHNsdWcsXHJcbiAgICAgIGJvZHlcclxuICAgIH1gXHJcblxyXG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2gocXVlcnksIHtcclxuICAgIHNsdWc6IHBhcmFtcz8uc2x1ZyxcclxuICB9KVxyXG5cclxuXHJcbiAgaWYoIXBvc3Qpe1xyXG4gICAgcmV0dXJuIHsgbm90Rm91bmQ6dHJ1ZX1cclxuICB9XHJcblxyXG4gIHJldHVybiB7IFxyXG4gICAgcHJvcHM6IHtwb3N0fSxcclxuICAgIHJldmFsaWRhdGU6NjAgLy9hZnRlciA2MCBzZWNvbmRzIGl0IHdpbGwgdXBkYXRlIHRoZSBjYXRjaCBpbiBjYXNlIHNvbWVvbmUgYnJvdWdodCBjaGFuZ2VzIHRvIHRoZSBwYWdlLCB0aGVuIHRoZSBjYWNoZSB3aWxsIGFsc28gYmUgdXBkYXRlZCB3aXRoIG5ldyB1cGRhdGVkIHBhZ2UuXHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXJsRm9yIiwiSGVhZGVyIiwiUG9zdCIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwibWFpbiIsImltZyIsImNsYXNzTmFtZSIsInNyYyIsIm1haW5JbWFnZSIsInVybCIsImFsdCIsImFydGljbGUiLCJoMSIsInRpdGxlIiwiaDIiLCJkZXNjcmlwdGlvbiIsImRpdiIsImF1dGhvciIsImltYWdlIiwicCIsIm5hbWUiLCJEYXRlIiwiX2NyZWF0ZWRBdCIsInRvTG9jYWxlU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[slug].tsx\n");

/***/ })

});