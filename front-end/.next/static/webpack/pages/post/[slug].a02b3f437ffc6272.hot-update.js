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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sanity_nextmedium_sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../sanity-nextmedium/sanity */ \"../sanity-nextmedium/sanity.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var react_portable_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-portable-text */ \"./node_modules/react-portable-text/dist/index.js\");\n/* harmony import */ var react_portable_text__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_portable_text__WEBPACK_IMPORTED_MODULE_4__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction Post(param1) {\n    var post = param1.post;\n    console.log(post);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 16,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-full h-40 object-cover\",\n                src: (0,_sanity_nextmedium_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(post.mainImage).url(),\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 18,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                className: \"max-w-3xl mx-auto p-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl mt-10 mb-3\",\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 21,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-light text-gray-500 mb-2\",\n                        children: post.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 22,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center space-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"rounded-full h-10\",\n                                src: (0,_sanity_nextmedium_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(post.author.image).url(),\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 25,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-extralight text-sm\",\n                                children: [\n                                    \"Blog post by\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-green-600\",\n                                        children: [\n                                            \" \",\n                                            \" \",\n                                            post.author.name,\n                                            \" \",\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 11\n                                    }, this),\n                                    \"- Published at \",\n                                    new Date(post._createdAt).toLocaleString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                                lineNumber: 26,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 24,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_portable_text__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,\n                            projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,\n                            content: post.body,\n                            serializers: {\n                                h1: function(props) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", _objectSpread({\n                                        className: \"text-2xl font-bold my-5\"\n                                    }, props), void 0, false, void 0, void 0);\n                                },\n                                h2: function(props) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", _objectSpread({\n                                        className: \"text-xl font-bold my-5\"\n                                    }, props), void 0, false, void 0, void 0);\n                                },\n                                li: function(param) {\n                                    var children = param.children;\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"ml-4 list-disc\",\n                                        children: [\n                                            \" \",\n                                            children\n                                        ]\n                                    }, void 0, true, void 0, void 0);\n                                },\n                                link: function(param) {\n                                    var href = param.href, children = param.children;\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: href,\n                                        className: \"text-blue-500 hover:underline\",\n                                        children: [\n                                            \" \",\n                                            children\n                                        ]\n                                    }, void 0, true, void 0, void 0);\n                                }\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                            lineNumber: 36,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                        lineNumber: 35,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n                lineNumber: 20,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\osefatul\\\\Downloads\\\\Web Development\\\\Projects\\\\Full Stack Projects\\\\sanity-medium-nextjs\\\\sanity-yt-build\\\\front-end\\\\pages\\\\post\\\\[slug].tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this));\n}\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtzYW5pdHlDbGllbnQsIHVybEZvcn0gZnJvbSBcIi4uLy4uLy4uL3Nhbml0eS1uZXh0bWVkaXVtL3Nhbml0eVwiXHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tICcuLi8uLi8uLi9zYW5pdHktbmV4dG1lZGl1bS90eXBpbmdzJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xyXG5pbXBvcnQgUG9ydGFibGVUZXh0IGZyb20gXCJyZWFjdC1wb3J0YWJsZS10ZXh0XCJcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7IFxyXG4gIHBvc3Q6UG9zdFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gUG9zdCAoe3Bvc3R9OlByb3BzKSB7XHJcbiAgY29uc29sZS5sb2cocG9zdClcclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4+PEhlYWRlciAvPlxyXG4gICAgXHJcbiAgICA8aW1nIGNsYXNzTmFtZT1cInctZnVsbCBoLTQwIG9iamVjdC1jb3ZlclwiIHNyYz17dXJsRm9yKHBvc3QubWFpbkltYWdlKS51cmwoKSF9IGFsdD1cIlwiIC8+XHJcblxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwibWF4LXctM3hsIG14LWF1dG8gcC01XCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtdC0xMCBtYi0zXCI+e3Bvc3QudGl0bGV9PC9oMT5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1saWdodCB0ZXh0LWdyYXktNTAwIG1iLTJcIj57cG9zdC5kZXNjcmlwdGlvbn08L2gyPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTJcIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBoLTEwXCIgc3JjPXt1cmxGb3IocG9zdC5hdXRob3IuaW1hZ2UpLnVybCgpIX0gYWx0PVwiXCIgLz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWV4dHJhbGlnaHQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgQmxvZyBwb3N0IGJ5ICBcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNjAwXCI+IFxyXG4gICAgICAgICAgICB7XCIgXCJ9IHtwb3N0LmF1dGhvci5uYW1lfSB7XCIgXCJ9XHJcbiAgICAgICAgICA8L3NwYW4+IFxyXG4gICAgICAgICAgLSBQdWJsaXNoZWQgYXQge25ldyBEYXRlKHBvc3QuX2NyZWF0ZWRBdCkudG9Mb2NhbGVTdHJpbmcoKX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMFwiPlxyXG4gICAgICAgIDxQb3J0YWJsZVRleHQgXHJcbiAgICAgICAgZGF0YXNldD17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX0RBVEFTRVR9IFxyXG4gICAgICAgIHByb2plY3RJZD17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUR9IFxyXG4gICAgICAgIGNvbnRlbnQ9e3Bvc3QuYm9keX1cclxuICAgICAgICBzZXJpYWxpemVycz17e1xyXG4gICAgICAgICAgaDE6KHByb3BzOiBhbnkpID0+KFxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG15LTVcIiB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgaDI6KHByb3BzOiBhbnkpID0+KFxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbXktNVwiIHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICksXHJcbiAgICAgICAgICBsaTooe2NoaWxkcmVufTogYW55KSA9PihcclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1sLTQgbGlzdC1kaXNjXCIgPiB7Y2hpbGRyZW59PC9saT4gIFxyXG4gICAgICAgICAgKSxcclxuXHJcbiAgICAgICAgICBsaW5rOiAoe2hyZWYsIGNoaWxkcmVufTogYW55KSA9PihcclxuICAgICAgICAgICAgPGEgaHJlZj17aHJlZn0gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMCBob3Zlcjp1bmRlcmxpbmVcIj4ge2NoaWxkcmVufTwvYT4pXHJcbiAgICAgICAgfX1cclxuICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICAgPC9tYWluPlxyXG5cclxuXHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RcclxuXHJcblxyXG5cclxuLy9UaGlzIGlzIGJhc2ljYWxseSB0aGUgZnVuY3Rpb24gd2hlcmUgaXQgd2lsbCB0ZWxscyBuZXh0anMgdG8gZmlndXJlIG91dCB3aGNpaCBwYXRocyB0byBwcmUtcmVuZGVyLiBvciBmaW5kIGFsbCB0aGUgcGFnZXMgdGhhdCBleGlzdCBmb3IgcG9zdHMuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpPT57XHJcblxyXG4gIC8vbGV0cyBwcmUtZmV0Y2ggYWxsIHRoZSBwb3N0c1xyXG4gIGNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJwb3N0XCJde1xyXG4gICAgX2lkLFxyXG4gICAgc2x1Z3tcclxuICAgICAgY3VycmVudFxyXG4gICAgfVxyXG4gIH0gICAgXHJcbiAgYFxyXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgc2FuaXR5Q2xpZW50LmZldGNoKHF1ZXJ5KVxyXG4gIGNvbnN0IHBhdGhzID0gcG9zdHMubWFwKChwb3N0OiBQb3N0KSA9PiAoe1xyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHNsdWc6IHBvc3Quc2x1Zy5jdXJyZW50XHJcbiAgICB9XHJcbiAgfSkpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOlwiYmxvY2tpbmdcIiAvL2Jsb2NrIHRoZSBwYWdlIGZyb20gc2hvd2luZyBvciBpdCB3aWxsIHNob3cgNDA0IGlmIGl0IGRvZXNuJ3QgZXhpc3QnXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFN0YXRpY1BhdGhzIGRvZXNuJ3QgaGVscCBhbG9uZSwgd2UgbmVlZCB0byBnZXQgdGhlIHBhZ2Ugd2l0aCB0aGUgc3BlY2lmIHByb3BzLiB3aGljaCBiYXNpY2FsbHkgcG9wdWxhdGVzIHRoZSBpbmZvcm1hdGlvbiBmb3IgdGhlIHBhZ2UuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoe3BhcmFtc30pID0+e1xyXG4gIGNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXXtcclxuICAgICAgX2lkLFxyXG4gICAgICBfY3JlYXRlZEF0LFxyXG4gICAgICB0aXRsZSxcclxuICAgICAgYXV0aG9yLT4ge1xyXG4gICAgICAgIG5hbWUsIFxyXG4gICAgICAgIGltYWdlXHJcbiAgICAgIH0sXHJcbiAgICAgICdjb21tZW50cyc6ICpbX3R5cGUgPT0gXCJjb21tZW50XCIgJiYgcG9zdC5fcmVmID09IF4uX2lkICYmIGFwcHJvdmVkID09IHRydWVdLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgbWFpbkltYWdlLFxyXG4gICAgICBzbHVnLFxyXG4gICAgICBib2R5W117XHJcbiAgICAgICAgLi4uLFxyXG4gICAgICAgIGFzc2V0LT57XHJcbiAgICAgICAgICAuLi4sXHJcbiAgICAgICAgICBcImtleVwiOiBfaWQsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9YFxyXG5cclxuICBjb25zdCBwb3N0ID0gYXdhaXQgc2FuaXR5Q2xpZW50LmZldGNoKHF1ZXJ5LCB7XHJcbiAgICBzbHVnOiBwYXJhbXM/LnNsdWcsXHJcbiAgfSlcclxuXHJcblxyXG4gIGlmKCFwb3N0KXtcclxuICAgIHJldHVybiB7IG5vdEZvdW5kOnRydWV9XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBcclxuICAgIHByb3BzOiB7cG9zdH0sXHJcbiAgICByZXZhbGlkYXRlOjYwIC8vYWZ0ZXIgNjAgc2Vjb25kcyBpdCB3aWxsIHVwZGF0ZSB0aGUgY2F0Y2ggaW4gY2FzZSBzb21lb25lIGJyb3VnaHQgY2hhbmdlcyB0byB0aGUgcGFnZSwgdGhlbiB0aGUgY2FjaGUgd2lsbCBhbHNvIGJlIHVwZGF0ZWQgd2l0aCBuZXcgdXBkYXRlZCBwYWdlLlxyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVybEZvciIsIkhlYWRlciIsIlBvcnRhYmxlVGV4dCIsIlBvc3QiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJpbWciLCJjbGFzc05hbWUiLCJzcmMiLCJtYWluSW1hZ2UiLCJ1cmwiLCJhbHQiLCJhcnRpY2xlIiwiaDEiLCJ0aXRsZSIsImgyIiwiZGVzY3JpcHRpb24iLCJkaXYiLCJhdXRob3IiLCJpbWFnZSIsInAiLCJzcGFuIiwibmFtZSIsIkRhdGUiLCJfY3JlYXRlZEF0IiwidG9Mb2NhbGVTdHJpbmciLCJkYXRhc2V0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQiLCJjb250ZW50IiwiYm9keSIsInNlcmlhbGl6ZXJzIiwicHJvcHMiLCJsaSIsImNoaWxkcmVuIiwibGluayIsImhyZWYiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[slug].tsx\n");

/***/ })

});