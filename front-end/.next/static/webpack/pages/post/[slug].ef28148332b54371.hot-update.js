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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sanity_nextmedium_sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../sanity-nextmedium/sanity */ \"../sanity-nextmedium/sanity.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var react_portable_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-portable-text */ \"./node_modules/react-portable-text/dist/index.js\");\n/* harmony import */ var react_portable_text__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_portable_text__WEBPACK_IMPORTED_MODULE_4__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction Post(param1) {\n    var post = param1.post;\n    console.log(post);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 16,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-full h-40 object-cover\",\n                src: (0,_sanity_nextmedium_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(post.mainImage).url(),\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 18,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                className: \"max-w-3xl mx-auto p-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl mt-10 mb-3\",\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 21,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-light text-gray-500 mb-2\",\n                        children: post.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 22,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center space-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"rounded-full h-10\",\n                                src: (0,_sanity_nextmedium_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(post.author.image).url(),\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 25,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-extralight text-sm\",\n                                children: [\n                                    \"Blog post by\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-green-600\",\n                                        children: [\n                                            \" \",\n                                            \" \",\n                                            post.author.name,\n                                            \" \",\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 11\n                                    }, this),\n                                    \"- Published at \",\n                                    new Date(post._createdAt).toLocaleString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 26,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 24,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_portable_text__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,\n                            projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,\n                            content: post.body,\n                            serializers: {\n                                h1: function(props) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", _objectSpread({\n                                        className: \"text-2xl font-bold my-5\"\n                                    }, props), void 0, false, void 0, void 0);\n                                },\n                                h2: function(props) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", _objectSpread({\n                                        className: \"text-xl font-bold my-5\"\n                                    }, props), void 0, false, void 0, void 0);\n                                },\n                                li: function(param) {\n                                    var children = param.children;\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"ml-4 list-disc\",\n                                        children: [\n                                            \" \",\n                                            children\n                                        ]\n                                    }, void 0, true, void 0, void 0);\n                                },\n                                link: function(param) {\n                                    var href = param.href, children = param.children;\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: href,\n                                        className: \"text-blue-500 hover:underline\",\n                                        children: [\n                                            \" \",\n                                            children\n                                        ]\n                                    }, void 0, true, void 0, void 0);\n                                }\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                            lineNumber: 36,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 35,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 20,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"max-w-lg my-5 mx-auto border border-yellow-500 \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 58,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"grid p-5 max-w-2xl mb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 64,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"Ex - Mike\",\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 65,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 63,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 68,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"Ex - Mike@gmial.com\",\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 69,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 67,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Comment\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 72,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                placeholder: \"Write your comments or feedbacks\",\n                                rows: 8\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 73,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 71,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 62,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this));\n}\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozt3R0FDZHZCLENBQUk7MENBQUMsQ0FBSTs7Ozs7O3dHQUNUd0IsQ0FBSztnQ0FBQ0MsV0FBVyxFQUFDLENBQVc7Z0NBQUNDLElBQUksRUFBQyxDQUFNOzs7Ozs7Ozs7Ozs7Z0dBRTNDSixDQUFLO3dCQUFDQyxPQUFPLEVBQUMsQ0FBRTs7d0dBQ2R2QixDQUFJOzBDQUFDLENBQUs7Ozs7Ozt3R0FDVndCLENBQUs7Z0NBQUNDLFdBQVcsRUFBQyxDQUFxQjtnQ0FBQ0MsSUFBSSxFQUFDLENBQU07Ozs7Ozs7Ozs7OztnR0FFckRKLENBQUs7d0JBQUNDLE9BQU8sRUFBQyxDQUFFOzt3R0FDZHZCLENBQUk7MENBQUMsQ0FBTzs7Ozs7O3dHQUNaMkIsQ0FBUTtnQ0FBQ0YsV0FBVyxFQUFDLENBQWtDO2dDQUFDRyxJQUFJLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3RFLENBQUM7S0FyRVFoRCxJQUFJOztBQXNFYiwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0L1tzbHVnXS50c3g/MzAxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtzYW5pdHlDbGllbnQsIHVybEZvcn0gZnJvbSBcIi4uLy4uLy4uL3Nhbml0eS1uZXh0bWVkaXVtL3Nhbml0eVwiXHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tICcuLi8uLi8uLi9zYW5pdHktbmV4dG1lZGl1bS90eXBpbmdzJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xyXG5pbXBvcnQgUG9ydGFibGVUZXh0IGZyb20gXCJyZWFjdC1wb3J0YWJsZS10ZXh0XCJcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7IFxyXG4gIHBvc3Q6UG9zdFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gUG9zdCAoe3Bvc3R9OlByb3BzKSB7XHJcbiAgY29uc29sZS5sb2cocG9zdClcclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4+PEhlYWRlciAvPlxyXG4gICAgXHJcbiAgICA8aW1nIGNsYXNzTmFtZT1cInctZnVsbCBoLTQwIG9iamVjdC1jb3ZlclwiIHNyYz17dXJsRm9yKHBvc3QubWFpbkltYWdlKS51cmwoKSF9IGFsdD1cIlwiIC8+XHJcblxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwibWF4LXctM3hsIG14LWF1dG8gcC01XCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtdC0xMCBtYi0zXCI+e3Bvc3QudGl0bGV9PC9oMT5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1saWdodCB0ZXh0LWdyYXktNTAwIG1iLTJcIj57cG9zdC5kZXNjcmlwdGlvbn08L2gyPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTJcIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBoLTEwXCIgc3JjPXt1cmxGb3IocG9zdC5hdXRob3IuaW1hZ2UpLnVybCgpIX0gYWx0PVwiXCIgLz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWV4dHJhbGlnaHQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgQmxvZyBwb3N0IGJ5ICBcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNjAwXCI+IFxyXG4gICAgICAgICAgICB7XCIgXCJ9IHtwb3N0LmF1dGhvci5uYW1lfSB7XCIgXCJ9XHJcbiAgICAgICAgICA8L3NwYW4+IFxyXG4gICAgICAgICAgLSBQdWJsaXNoZWQgYXQge25ldyBEYXRlKHBvc3QuX2NyZWF0ZWRBdCkudG9Mb2NhbGVTdHJpbmcoKX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMFwiPlxyXG4gICAgICAgIDxQb3J0YWJsZVRleHQgXHJcbiAgICAgICAgZGF0YXNldD17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX0RBVEFTRVR9IFxyXG4gICAgICAgIHByb2plY3RJZD17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUR9IFxyXG4gICAgICAgIGNvbnRlbnQ9e3Bvc3QuYm9keX1cclxuICAgICAgICBzZXJpYWxpemVycz17e1xyXG4gICAgICAgICAgaDE6KHByb3BzOiBhbnkpID0+KFxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG15LTVcIiB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgaDI6KHByb3BzOiBhbnkpID0+KFxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbXktNVwiIHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICksXHJcbiAgICAgICAgICBsaTooe2NoaWxkcmVufTogYW55KSA9PihcclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1sLTQgbGlzdC1kaXNjXCIgPiB7Y2hpbGRyZW59PC9saT4gIFxyXG4gICAgICAgICAgKSxcclxuXHJcbiAgICAgICAgICBsaW5rOiAoe2hyZWYsIGNoaWxkcmVufTogYW55KSA9PihcclxuICAgICAgICAgICAgPGEgaHJlZj17aHJlZn0gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMCBob3Zlcjp1bmRlcmxpbmVcIj4ge2NoaWxkcmVufTwvYT4pXHJcbiAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXJ0aWNsZT5cclxuXHJcbiAgICA8aHIgY2xhc3NOYW1lPVwibWF4LXctbGcgbXktNSBteC1hdXRvIGJvcmRlciBib3JkZXIteWVsbG93LTUwMCBcIiAvPlxyXG5cclxuXHJcblxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPVwiZ3JpZCBwLTUgbWF4LXctMnhsICBtYi0xMFwiPlxyXG4gICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5cclxuICAgICAgPHNwYW4+TmFtZTwvc3Bhbj5cclxuICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiRXggLSBNaWtlXCIgdHlwZT1cInRleHRcIiAvPiAgXHJcbiAgICA8L2xhYmVsPiAgXHJcbiAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPlxyXG4gICAgICA8c3Bhbj5FbWFpbDwvc3Bhbj5cclxuICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiRXggLSBNaWtlQGdtaWFsLmNvbVwiIHR5cGU9XCJ0ZXh0XCIgLz4gIFxyXG4gICAgPC9sYWJlbD4gIFxyXG4gICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5cclxuICAgICAgPHNwYW4+Q29tbWVudDwvc3Bhbj5cclxuICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPVwiV3JpdGUgeW91ciBjb21tZW50cyBvciBmZWVkYmFja3NcIiByb3dzPXs4fSAvPiAgXHJcbiAgICA8L2xhYmVsPiAgXHJcbiAgIFxyXG4gICAgICBcclxuICAgIDwvZm9ybT5cclxuICAgIDwvbWFpbj5cclxuXHJcblxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQb3N0XHJcblxyXG5cclxuXHJcbi8vVGhpcyBpcyBiYXNpY2FsbHkgdGhlIGZ1bmN0aW9uIHdoZXJlIGl0IHdpbGwgdGVsbHMgbmV4dGpzIHRvIGZpZ3VyZSBvdXQgd2hjaWggcGF0aHMgdG8gcHJlLXJlbmRlci4gb3IgZmluZCBhbGwgdGhlIHBhZ2VzIHRoYXQgZXhpc3QgZm9yIHBvc3RzLlxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKT0+e1xyXG5cclxuICAvL2xldHMgcHJlLWZldGNoIGFsbCB0aGUgcG9zdHNcclxuICBjb25zdCBxdWVyeSA9IGAqW190eXBlID09IFwicG9zdFwiXXtcclxuICAgIF9pZCxcclxuICAgIHNsdWd7XHJcbiAgICAgIGN1cnJlbnRcclxuICAgIH1cclxuICB9ICAgIFxyXG4gIGBcclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IHNhbml0eUNsaWVudC5mZXRjaChxdWVyeSlcclxuICBjb25zdCBwYXRocyA9IHBvc3RzLm1hcCgocG9zdDogUG9zdCkgPT4gKHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBzbHVnOiBwb3N0LnNsdWcuY3VycmVudFxyXG4gICAgfVxyXG4gIH0pKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazpcImJsb2NraW5nXCIgLy9ibG9jayB0aGUgcGFnZSBmcm9tIHNob3dpbmcgb3IgaXQgd2lsbCBzaG93IDQwNCBpZiBpdCBkb2Vzbid0IGV4aXN0J1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBTdGF0aWNQYXRocyBkb2Vzbid0IGhlbHAgYWxvbmUsIHdlIG5lZWQgdG8gZ2V0IHRoZSBwYWdlIHdpdGggdGhlIHNwZWNpZiBwcm9wcy4gd2hpY2ggYmFzaWNhbGx5IHBvcHVsYXRlcyB0aGUgaW5mb3JtYXRpb24gZm9yIHRoZSBwYWdlLlxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHtwYXJhbXN9KSA9PntcclxuICBjb25zdCBxdWVyeSA9IGAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17XHJcbiAgICAgIF9pZCxcclxuICAgICAgX2NyZWF0ZWRBdCxcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGF1dGhvci0+IHtcclxuICAgICAgICBuYW1lLCBcclxuICAgICAgICBpbWFnZVxyXG4gICAgICB9LFxyXG4gICAgICAnY29tbWVudHMnOiAqW190eXBlID09IFwiY29tbWVudFwiICYmIHBvc3QuX3JlZiA9PSBeLl9pZCAmJiBhcHByb3ZlZCA9PSB0cnVlXSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIG1haW5JbWFnZSxcclxuICAgICAgc2x1ZyxcclxuICAgICAgYm9keVtde1xyXG4gICAgICAgIC4uLixcclxuICAgICAgICBhc3NldC0+e1xyXG4gICAgICAgICAgLi4uLFxyXG4gICAgICAgICAgXCJrZXlcIjogX2lkLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfWBcclxuXHJcbiAgY29uc3QgcG9zdCA9IGF3YWl0IHNhbml0eUNsaWVudC5mZXRjaChxdWVyeSwge1xyXG4gICAgc2x1ZzogcGFyYW1zPy5zbHVnLFxyXG4gIH0pXHJcblxyXG5cclxuICBpZighcG9zdCl7XHJcbiAgICByZXR1cm4geyBub3RGb3VuZDp0cnVlfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgXHJcbiAgICBwcm9wczoge3Bvc3R9LFxyXG4gICAgcmV2YWxpZGF0ZTo2MCAvL2FmdGVyIDYwIHNlY29uZHMgaXQgd2lsbCB1cGRhdGUgdGhlIGNhdGNoIGluIGNhc2Ugc29tZW9uZSBicm91Z2h0IGNoYW5nZXMgdG8gdGhlIHBhZ2UsIHRoZW4gdGhlIGNhY2hlIHdpbGwgYWxzbyBiZSB1cGRhdGVkIHdpdGggbmV3IHVwZGF0ZWQgcGFnZS5cclxuICB9XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1cmxGb3IiLCJIZWFkZXIiLCJQb3J0YWJsZVRleHQiLCJQb3N0IiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwiaW1nIiwiY2xhc3NOYW1lIiwic3JjIiwibWFpbkltYWdlIiwidXJsIiwiYWx0IiwiYXJ0aWNsZSIsImgxIiwidGl0bGUiLCJoMiIsImRlc2NyaXB0aW9uIiwiZGl2IiwiYXV0aG9yIiwiaW1hZ2UiLCJwIiwic3BhbiIsIm5hbWUiLCJEYXRlIiwiX2NyZWF0ZWRBdCIsInRvTG9jYWxlU3RyaW5nIiwiZGF0YXNldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCIsInByb2plY3RJZCIsIk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lEIiwiY29udGVudCIsImJvZHkiLCJzZXJpYWxpemVycyIsInByb3BzIiwibGkiLCJjaGlsZHJlbiIsImxpbmsiLCJocmVmIiwiYSIsImhyIiwiZm9ybSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwidGV4dGFyZWEiLCJyb3dzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[slug].tsx\n");

/***/ })

});