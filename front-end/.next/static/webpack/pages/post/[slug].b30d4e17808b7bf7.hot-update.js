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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sanity_nextmedium_sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../sanity-nextmedium/sanity */ \"../sanity-nextmedium/sanity.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var react_portable_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-portable-text */ \"./node_modules/react-portable-text/dist/index.js\");\n/* harmony import */ var react_portable_text__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_portable_text__WEBPACK_IMPORTED_MODULE_4__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction Post(param1) {\n    var post = param1.post;\n    console.log(post);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 16,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-full h-40 object-cover\",\n                src: (0,_sanity_nextmedium_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(post.mainImage).url(),\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 18,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                className: \"max-w-3xl mx-auto p-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl mt-10 mb-3\",\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 21,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-light text-gray-500 mb-2\",\n                        children: post.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 22,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center space-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"rounded-full h-10\",\n                                src: (0,_sanity_nextmedium_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(post.author.image).url(),\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 25,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-extralight text-sm\",\n                                children: [\n                                    \"Blog post by\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-green-600\",\n                                        children: [\n                                            \" \",\n                                            \" \",\n                                            post.author.name,\n                                            \" \",\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 11\n                                    }, this),\n                                    \"- Published at \",\n                                    new Date(post._createdAt).toLocaleString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 26,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 24,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_portable_text__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,\n                            projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,\n                            content: post.body,\n                            serializers: {\n                                h1: function(props) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", _objectSpread({\n                                        className: \"text-2xl font-bold my-5\"\n                                    }, props), void 0, false, void 0, void 0);\n                                },\n                                h2: function(props) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", _objectSpread({\n                                        className: \"text-xl font-bold my-5\"\n                                    }, props), void 0, false, void 0, void 0);\n                                },\n                                li: function(param) {\n                                    var children = param.children;\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"ml-4 list-disc\",\n                                        children: [\n                                            \" \",\n                                            children\n                                        ]\n                                    }, void 0, true, void 0, void 0);\n                                },\n                                link: function(param) {\n                                    var href = param.href, children = param.children;\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: href,\n                                        className: \"text-blue-500 hover:underline\",\n                                        children: [\n                                            \" \",\n                                            children\n                                        ]\n                                    }, void 0, true, void 0, void 0);\n                                }\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                            lineNumber: 36,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 35,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 20,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"max-w-lg my-5 mx-auto border border-yellow-500 \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 58,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"grid p-5 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 64,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"Ex - Mike\",\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 65,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 63,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 68,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"Ex - Mike@gmial.com\",\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 69,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 67,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Comment\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 72,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                placeholder: \"Write your comments or feedbacks\",\n                                rows: 8\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 73,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 71,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 62,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this));\n}\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3dHQUNkdkIsQ0FBSTswQ0FBQyxDQUFJOzs7Ozs7d0dBQ1R3QixDQUFLO2dDQUFDQyxXQUFXLEVBQUMsQ0FBVztnQ0FBQ0MsSUFBSSxFQUFDLENBQU07Ozs7Ozs7Ozs7OztnR0FFM0NKLENBQUs7d0JBQUNDLE9BQU8sRUFBQyxDQUFFOzt3R0FDZHZCLENBQUk7MENBQUMsQ0FBSzs7Ozs7O3dHQUNWd0IsQ0FBSztnQ0FBQ0MsV0FBVyxFQUFDLENBQXFCO2dDQUFDQyxJQUFJLEVBQUMsQ0FBTTs7Ozs7Ozs7Ozs7O2dHQUVyREosQ0FBSzt3QkFBQ0MsT0FBTyxFQUFDLENBQUU7O3dHQUNkdkIsQ0FBSTswQ0FBQyxDQUFPOzs7Ozs7d0dBQ1oyQixDQUFRO2dDQUFDRixXQUFXLEVBQUMsQ0FBa0M7Z0NBQUNHLElBQUksRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTdEUsQ0FBQztLQXJFUWhELElBQUk7O0FBc0ViLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3QvW3NsdWddLnRzeD8zMDExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge3Nhbml0eUNsaWVudCwgdXJsRm9yfSBmcm9tIFwiLi4vLi4vLi4vc2FuaXR5LW5leHRtZWRpdW0vc2FuaXR5XCJcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gJy4uLy4uLy4uL3Nhbml0eS1uZXh0bWVkaXVtL3R5cGluZ3MnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXInXHJcbmltcG9ydCBQb3J0YWJsZVRleHQgZnJvbSBcInJlYWN0LXBvcnRhYmxlLXRleHRcIlxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHsgXHJcbiAgcG9zdDpQb3N0XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBQb3N0ICh7cG9zdH06UHJvcHMpIHtcclxuICBjb25zb2xlLmxvZyhwb3N0KVxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbj48SGVhZGVyIC8+XHJcbiAgICBcclxuICAgIDxpbWcgY2xhc3NOYW1lPVwidy1mdWxsIGgtNDAgb2JqZWN0LWNvdmVyXCIgc3JjPXt1cmxGb3IocG9zdC5tYWluSW1hZ2UpLnVybCgpIX0gYWx0PVwiXCIgLz5cclxuXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJtYXgtdy0zeGwgbXgtYXV0byBwLTVcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIG10LTEwIG1iLTNcIj57cG9zdC50aXRsZX08L2gxPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWxpZ2h0IHRleHQtZ3JheS01MDAgbWItMlwiPntwb3N0LmRlc2NyaXB0aW9ufTwvaDI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGgtMTBcIiBzcmM9e3VybEZvcihwb3N0LmF1dGhvci5pbWFnZSkudXJsKCkhfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFsaWdodCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICBCbG9nIHBvc3QgYnkgIFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmVlbi02MDBcIj4gXHJcbiAgICAgICAgICAgIHtcIiBcIn0ge3Bvc3QuYXV0aG9yLm5hbWV9IHtcIiBcIn1cclxuICAgICAgICAgIDwvc3Bhbj4gXHJcbiAgICAgICAgICAtIFB1Ymxpc2hlZCBhdCB7bmV3IERhdGUocG9zdC5fY3JlYXRlZEF0KS50b0xvY2FsZVN0cmluZygpfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwXCI+XHJcbiAgICAgICAgPFBvcnRhYmxlVGV4dCBcclxuICAgICAgICBkYXRhc2V0PXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVH0gXHJcbiAgICAgICAgcHJvamVjdElkPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRH0gXHJcbiAgICAgICAgY29udGVudD17cG9zdC5ib2R5fVxyXG4gICAgICAgIHNlcmlhbGl6ZXJzPXt7XHJcbiAgICAgICAgICBoMToocHJvcHM6IGFueSkgPT4oXHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbXktNVwiIHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICksXHJcbiAgICAgICAgICBoMjoocHJvcHM6IGFueSkgPT4oXHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBteS01XCIgey4uLnByb3BzfSAvPlxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIGxpOih7Y2hpbGRyZW59OiBhbnkpID0+KFxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWwtNCBsaXN0LWRpc2NcIiA+IHtjaGlsZHJlbn08L2xpPiAgXHJcbiAgICAgICAgICApLFxyXG5cclxuICAgICAgICAgIGxpbms6ICh7aHJlZiwgY2hpbGRyZW59OiBhbnkpID0+KFxyXG4gICAgICAgICAgICA8YSBocmVmPXtocmVmfSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwIGhvdmVyOnVuZGVybGluZVwiPiB7Y2hpbGRyZW59PC9hPilcclxuICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPlxyXG5cclxuICAgIDxociBjbGFzc05hbWU9XCJtYXgtdy1sZyBteS01IG14LWF1dG8gYm9yZGVyIGJvcmRlci15ZWxsb3ctNTAwIFwiIC8+XHJcblxyXG5cclxuXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJncmlkIHAtNSBcIj5cclxuICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+XHJcbiAgICAgIDxzcGFuPk5hbWU8L3NwYW4+XHJcbiAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIkV4IC0gTWlrZVwiIHR5cGU9XCJ0ZXh0XCIgLz4gIFxyXG4gICAgPC9sYWJlbD4gIFxyXG4gICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5cclxuICAgICAgPHNwYW4+RW1haWw8L3NwYW4+XHJcbiAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIkV4IC0gTWlrZUBnbWlhbC5jb21cIiB0eXBlPVwidGV4dFwiIC8+ICBcclxuICAgIDwvbGFiZWw+ICBcclxuICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+XHJcbiAgICAgIDxzcGFuPkNvbW1lbnQ8L3NwYW4+XHJcbiAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj1cIldyaXRlIHlvdXIgY29tbWVudHMgb3IgZmVlZGJhY2tzXCIgcm93cz17OH0gLz4gIFxyXG4gICAgPC9sYWJlbD4gIFxyXG4gICBcclxuICAgICAgXHJcbiAgICA8L2Zvcm0+XHJcbiAgICA8L21haW4+XHJcblxyXG5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUG9zdFxyXG5cclxuXHJcblxyXG4vL1RoaXMgaXMgYmFzaWNhbGx5IHRoZSBmdW5jdGlvbiB3aGVyZSBpdCB3aWxsIHRlbGxzIG5leHRqcyB0byBmaWd1cmUgb3V0IHdoY2loIHBhdGhzIHRvIHByZS1yZW5kZXIuIG9yIGZpbmQgYWxsIHRoZSBwYWdlcyB0aGF0IGV4aXN0IGZvciBwb3N0cy5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCk9PntcclxuXHJcbiAgLy9sZXRzIHByZS1mZXRjaCBhbGwgdGhlIHBvc3RzXHJcbiAgY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInBvc3RcIl17XHJcbiAgICBfaWQsXHJcbiAgICBzbHVne1xyXG4gICAgICBjdXJyZW50XHJcbiAgICB9XHJcbiAgfSAgICBcclxuICBgXHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2gocXVlcnkpXHJcbiAgY29uc3QgcGF0aHMgPSBwb3N0cy5tYXAoKHBvc3Q6IFBvc3QpID0+ICh7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgc2x1ZzogcG9zdC5zbHVnLmN1cnJlbnRcclxuICAgIH1cclxuICB9KSlcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6XCJibG9ja2luZ1wiIC8vYmxvY2sgdGhlIHBhZ2UgZnJvbSBzaG93aW5nIG9yIGl0IHdpbGwgc2hvdyA0MDQgaWYgaXQgZG9lc24ndCBleGlzdCdcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU3RhdGljUGF0aHMgZG9lc24ndCBoZWxwIGFsb25lLCB3ZSBuZWVkIHRvIGdldCB0aGUgcGFnZSB3aXRoIHRoZSBzcGVjaWYgcHJvcHMuIHdoaWNoIGJhc2ljYWxseSBwb3B1bGF0ZXMgdGhlIGluZm9ybWF0aW9uIGZvciB0aGUgcGFnZS5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7cGFyYW1zfSkgPT57XHJcbiAgY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBde1xyXG4gICAgICBfaWQsXHJcbiAgICAgIF9jcmVhdGVkQXQsXHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBhdXRob3ItPiB7XHJcbiAgICAgICAgbmFtZSwgXHJcbiAgICAgICAgaW1hZ2VcclxuICAgICAgfSxcclxuICAgICAgJ2NvbW1lbnRzJzogKltfdHlwZSA9PSBcImNvbW1lbnRcIiAmJiBwb3N0Ll9yZWYgPT0gXi5faWQgJiYgYXBwcm92ZWQgPT0gdHJ1ZV0sXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBtYWluSW1hZ2UsXHJcbiAgICAgIHNsdWcsXHJcbiAgICAgIGJvZHlbXXtcclxuICAgICAgICAuLi4sXHJcbiAgICAgICAgYXNzZXQtPntcclxuICAgICAgICAgIC4uLixcclxuICAgICAgICAgIFwia2V5XCI6IF9pZCxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1gXHJcblxyXG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2gocXVlcnksIHtcclxuICAgIHNsdWc6IHBhcmFtcz8uc2x1ZyxcclxuICB9KVxyXG5cclxuXHJcbiAgaWYoIXBvc3Qpe1xyXG4gICAgcmV0dXJuIHsgbm90Rm91bmQ6dHJ1ZX1cclxuICB9XHJcblxyXG4gIHJldHVybiB7IFxyXG4gICAgcHJvcHM6IHtwb3N0fSxcclxuICAgIHJldmFsaWRhdGU6NjAgLy9hZnRlciA2MCBzZWNvbmRzIGl0IHdpbGwgdXBkYXRlIHRoZSBjYXRjaCBpbiBjYXNlIHNvbWVvbmUgYnJvdWdodCBjaGFuZ2VzIHRvIHRoZSBwYWdlLCB0aGVuIHRoZSBjYWNoZSB3aWxsIGFsc28gYmUgdXBkYXRlZCB3aXRoIG5ldyB1cGRhdGVkIHBhZ2UuXHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXJsRm9yIiwiSGVhZGVyIiwiUG9ydGFibGVUZXh0IiwiUG9zdCIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwibWFpbiIsImltZyIsImNsYXNzTmFtZSIsInNyYyIsIm1haW5JbWFnZSIsInVybCIsImFsdCIsImFydGljbGUiLCJoMSIsInRpdGxlIiwiaDIiLCJkZXNjcmlwdGlvbiIsImRpdiIsImF1dGhvciIsImltYWdlIiwicCIsInNwYW4iLCJuYW1lIiwiRGF0ZSIsIl9jcmVhdGVkQXQiLCJ0b0xvY2FsZVN0cmluZyIsImRhdGFzZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU0FOSVRZX0RBVEFTRVQiLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCIsImNvbnRlbnQiLCJib2R5Iiwic2VyaWFsaXplcnMiLCJwcm9wcyIsImxpIiwiY2hpbGRyZW4iLCJsaW5rIiwiaHJlZiIsImEiLCJociIsImZvcm0iLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidHlwZSIsInRleHRhcmVhIiwicm93cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[slug].tsx\n");

/***/ })

});