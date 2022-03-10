"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/createComment";
exports.ids = ["pages/api/createComment"];
exports.modules = {

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "(api)/./pages/api/createComment.ts":
/*!************************************!*\
  !*** ./pages/api/createComment.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ createComment)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n// import { sanityClient } from '../../../sanity-nextmedium/sanity';\n\nconst config = {\n    dataset: \"production\" || 0,\n    projectId: \"wo1mgf3s\" || 0,\n    useCdn: \"development\" === \"production\",\n    token: process.env.SANITY_API_TOKEN\n};\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()(config);\nasync function createComment(req, res) {\n    const { _id , name , email , comment  } = JSON.parse(req.body);\n    try {\n        // we are creating a new type in the conetent.\n        await client.create({\n            _type: \"comment\",\n            post: {\n                _type: \"reference\",\n                _ref: _id // reference the entire object like a relational database\n            },\n            name,\n            email,\n            comment\n        });\n    } catch (err) {\n        console.log(err);\n        return res.status(500).json({\n            message: \"Couldn't submit comment\",\n            err\n        });\n    }\n    console.log(\"Comment Submitted\");\n    res.status(200).json({\n        message: \"Comment submitted\"\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlQ29tbWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsRUFBb0U7QUFDM0I7QUFFbEMsS0FBSyxDQUFDQyxNQUFNLEdBQUcsQ0FBQztJQUNyQkMsT0FBTyxFQUFFQyxZQUFzQyxJQUFJLENBQVk7SUFDL0RHLFNBQVMsRUFBRUgsVUFBeUMsSUFBSSxDQUFVO0lBQ2xFSyxNQUFNLEVBUlIsQ0FBYSxpQkFRc0IsQ0FBWTtJQUM3Q0MsS0FBSyxFQUFFTixPQUFPLENBQUNDLEdBQUcsQ0FBQ00sZ0JBQWdCO0FBQ3JDLENBQUM7QUFFRCxLQUFLLENBQUNDLE1BQU0sR0FBR1gscURBQVksQ0FBQ0MsTUFBTTtBQUduQixlQUFlVyxhQUFhLENBQ3pDQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEIsQ0FBQztJQUVELEtBQUssQ0FBQyxDQUFDQyxDQUFBQSxHQUFHLEdBQUVDLElBQUksR0FBRUMsS0FBSyxHQUFFQyxPQUFPLEdBQUMsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUVQLEdBQUcsQ0FBQ1EsSUFBSTtJQUV4RCxHQUFHLENBQUMsQ0FBQztRQUVILEVBQThDO1FBQzlDLEtBQUssQ0FBQ1YsTUFBTSxDQUFDVyxNQUFNLENBQUMsQ0FBQztZQUNuQkMsS0FBSyxFQUFFLENBQVM7WUFDaEJDLElBQUksRUFBRSxDQUFDO2dCQUNMRCxLQUFLLEVBQUUsQ0FBVztnQkFDbEJFLElBQUksRUFBRVYsR0FBRyxDQUEwRDtZQUNyRSxDQUFDO1lBQ0RDLElBQUk7WUFDSkMsS0FBSztZQUNMQyxPQUFPO1FBQ1QsQ0FBQztJQUNILENBQUMsTUFBSyxFQUFDUSxHQUFHLEVBQUUsQ0FBQztRQUNYQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRztRQUNmLE1BQU0sQ0FBQ1osR0FBRyxDQUFDZSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUUsQ0FBQ0M7WUFBQUEsT0FBTyxFQUFFLENBQXlCO1lBQUVMLEdBQUc7UUFBQSxDQUFDO0lBQ3hFLENBQUM7SUFHREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBbUI7SUFFL0JkLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7UUFBQ0MsT0FBTyxFQUFFLENBQW1CO0lBQUEsQ0FBQztBQUN0RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2NyZWF0ZUNvbW1lbnQudHM/YThlNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG4vLyBpbXBvcnQgeyBzYW5pdHlDbGllbnQgfSBmcm9tICcuLi8uLi8uLi9zYW5pdHktbmV4dG1lZGl1bS9zYW5pdHknO1xyXG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gXCJAc2FuaXR5L2NsaWVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBkYXRhc2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCB8fCBcInByb2R1Y3Rpb25cIixcclxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lEIHx8IFwid28xbWdmM3NcIixcclxuICB1c2VDZG46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcclxuICB0b2tlbjogcHJvY2Vzcy5lbnYuU0FOSVRZX0FQSV9UT0tFTixcclxufTtcclxuXHJcbmNvbnN0IGNsaWVudCA9IHNhbml0eUNsaWVudChjb25maWcpO1xyXG5cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29tbWVudChcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbikge1xyXG5cclxuICBjb25zdCB7X2lkLCBuYW1lLCBlbWFpbCwgY29tbWVudH0gPSBKU09OLnBhcnNlIChyZXEuYm9keSk7XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgLy8gd2UgYXJlIGNyZWF0aW5nIGEgbmV3IHR5cGUgaW4gdGhlIGNvbmV0ZW50LlxyXG4gICAgYXdhaXQgY2xpZW50LmNyZWF0ZSh7XHJcbiAgICAgIF90eXBlOiBcImNvbW1lbnRcIixcclxuICAgICAgcG9zdDoge1xyXG4gICAgICAgIF90eXBlOiBcInJlZmVyZW5jZVwiLFxyXG4gICAgICAgIF9yZWY6IF9pZCAvLyByZWZlcmVuY2UgdGhlIGVudGlyZSBvYmplY3QgbGlrZSBhIHJlbGF0aW9uYWwgZGF0YWJhc2VcclxuICAgICAgfSxcclxuICAgICAgbmFtZSxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIGNvbW1lbnRcclxuICAgIH0pXHJcbiAgfWNhdGNoKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbiAoe21lc3NhZ2U6IFwiQ291bGRuJ3Qgc3VibWl0IGNvbW1lbnRcIiwgZXJyfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc29sZS5sb2coXCJDb21tZW50IFN1Ym1pdHRlZFwiKVxyXG5cclxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiQ29tbWVudCBzdWJtaXR0ZWRcIn0pXHJcbn1cclxuIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsImNvbmZpZyIsImRhdGFzZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU0FOSVRZX0RBVEFTRVQiLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCIsInVzZUNkbiIsInRva2VuIiwiU0FOSVRZX0FQSV9UT0tFTiIsImNsaWVudCIsImNyZWF0ZUNvbW1lbnQiLCJyZXEiLCJyZXMiLCJfaWQiLCJuYW1lIiwiZW1haWwiLCJjb21tZW50IiwiSlNPTiIsInBhcnNlIiwiYm9keSIsImNyZWF0ZSIsIl90eXBlIiwicG9zdCIsIl9yZWYiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/createComment.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/createComment.ts"));
module.exports = __webpack_exports__;

})();