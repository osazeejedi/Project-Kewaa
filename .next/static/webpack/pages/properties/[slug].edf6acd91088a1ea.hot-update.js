"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/properties/[slug]",{

/***/ "./pages/properties/[slug].js":
/*!************************************!*\
  !*** ./pages/properties/[slug].js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Property; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ui_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/ui/common */ \"./components/ui/common/index.js\");\n/* harmony import */ var _components_ui_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/ui/property */ \"./components/ui/property/index.js\");\n/* harmony import */ var _components_ui_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/ui/layout */ \"./components/ui/layout/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar __N_SSG = true;\nfunction Property(param) {\n    var property = param.property;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_property__WEBPACK_IMPORTED_MODULE_2__.PropertyHero, {\n                    title: property.title,\n                    description: property.description,\n                    image: property.coverImage\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Zia\\\\Documents\\\\Blockchain\\\\polygon_real_estate\\\\pages\\\\properties\\\\[slug].js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Zia\\\\Documents\\\\Blockchain\\\\polygon_real_estate\\\\pages\\\\properties\\\\[slug].js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_property__WEBPACK_IMPORTED_MODULE_2__.Keypoints, {\n                points: property.wsl\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Zia\\\\Documents\\\\Blockchain\\\\polygon_real_estate\\\\pages\\\\properties\\\\[slug].js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_common__WEBPACK_IMPORTED_MODULE_1__.Modal, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Zia\\\\Documents\\\\Blockchain\\\\polygon_real_estate\\\\pages\\\\properties\\\\[slug].js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_c = Property;\nProperty.Layout = _components_ui_layout__WEBPACK_IMPORTED_MODULE_3__.BaseLayout;\nvar _c;\n$RefreshReg$(_c, \"Property\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9wZXJ0aWVzL1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkM7QUFDb0I7QUFDZjs7QUFHbkMsUUFBUSxDQUFDSSxRQUFRLENBQUMsS0FBWSxFQUFFLENBQUM7UUFBYkMsUUFBUSxHQUFWLEtBQVksQ0FBVkEsUUFBUTtJQUN6QyxNQUFNOzt3RkFFREMsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQU07c0dBQ2xCTixpRUFBWTtvQkFDWE8sS0FBSyxFQUFFSCxRQUFRLENBQUNHLEtBQUs7b0JBQ3JCQyxXQUFXLEVBQUVKLFFBQVEsQ0FBQ0ksV0FBVztvQkFDakNDLEtBQUssRUFBRUwsUUFBUSxDQUFDTSxVQUFVOzs7Ozs7Ozs7Ozt3RkFHN0JULDhEQUFTO2dCQUFDVSxNQUFNLEVBQUVQLFFBQVEsQ0FBQ1EsR0FBRzs7Ozs7O3dGQUM5QmIsd0RBQUs7Ozs7Ozs7QUFHWixDQUFDO0tBZHVCSSxRQUFRO0FBeUNoQ0EsUUFBUSxDQUFDVSxNQUFNLEdBQUdYLDZEQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb3BlcnRpZXMvW3NsdWddLmpzP2Q2NzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiQGNvbXBvbmVudHMvdWkvY29tbW9uXCI7XHJcbmltcG9ydCB7IFByb3BlcnR5SGVybywgS2V5cG9pbnRzIH0gZnJvbSBcIkBjb21wb25lbnRzL3VpL3Byb3BlcnR5XCI7XHJcbmltcG9ydCB7IEJhc2VMYXlvdXQgfSBmcm9tIFwiQGNvbXBvbmVudHMvdWkvbGF5b3V0XCI7XHJcbmltcG9ydCB7IGdldEFsbFByb3BlcnRpZXMgfSBmcm9tIFwiQGNvbnRlbnQvcHJvcGVydGllcy9mZXRjaGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9wZXJ0eSh7IHByb3BlcnR5IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00XCI+XHJcbiAgICAgICAgPFByb3BlcnR5SGVyb1xyXG4gICAgICAgICAgdGl0bGU9e3Byb3BlcnR5LnRpdGxlfVxyXG4gICAgICAgICAgZGVzY3JpcHRpb249e3Byb3BlcnR5LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgaW1hZ2U9e3Byb3BlcnR5LmNvdmVySW1hZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxLZXlwb2ludHMgcG9pbnRzPXtwcm9wZXJ0eS53c2x9IC8+XHJcbiAgICAgIDxNb2RhbCAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gZ2V0QWxsUHJvcGVydGllcygpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IGRhdGEubWFwKChjKSA9PiAoe1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBzbHVnOiBjLnNsdWcsXHJcbiAgICAgIH0sXHJcbiAgICB9KSksXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCB7IGRhdGEgfSA9IGdldEFsbFByb3BlcnRpZXMoKTtcclxuXHJcbiAgY29uc3QgcHJvcGVydHkgPSBkYXRhLmZpbHRlcigoYykgPT4gYy5zbHVnID09PSBwYXJhbXMuc2x1ZylbMF07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwcm9wZXJ0eSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuUHJvcGVydHkuTGF5b3V0ID0gQmFzZUxheW91dDtcclxuIl0sIm5hbWVzIjpbIk1vZGFsIiwiUHJvcGVydHlIZXJvIiwiS2V5cG9pbnRzIiwiQmFzZUxheW91dCIsIlByb3BlcnR5IiwicHJvcGVydHkiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJjb3ZlckltYWdlIiwicG9pbnRzIiwid3NsIiwiTGF5b3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/properties/[slug].js\n");

/***/ })

});