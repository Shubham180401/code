"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/certificate",{

/***/ "./components/CertificateCard.jsx":
/*!****************************************!*\
  !*** ./components/CertificateCard.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_CertificateCard_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/CertificateCard.module.css */ \"./styles/CertificateCard.module.css\");\n/* harmony import */ var _styles_CertificateCard_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_CertificateCard_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar CertificateCard = function(param) {\n    var certificate = param.certificate;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n        href: certificate.url,\n        target: \"_blank\",\n        rel: \"noopener noreferrer\",\n        className: (_styles_CertificateCard_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),\n        __source: {\n            fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\vscode-theme-main\\\\components\\\\CertificateCard.jsx\",\n            lineNumber: 6,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"iframe\", {\n                src: certificate.cover_image,\n                frameborder: \"0\",\n                allowfullscreen: \"\",\n                title: \"Embedded post\",\n                width: 255,\n                height: 150,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\vscode-theme-main\\\\components\\\\CertificateCard.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                src: certificate.cover_image,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\vscode-theme-main\\\\components\\\\CertificateCard.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_CertificateCard_module_css__WEBPACK_IMPORTED_MODULE_1___default().content),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\vscode-theme-main\\\\components\\\\CertificateCard.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                        className: (_styles_CertificateCard_module_css__WEBPACK_IMPORTED_MODULE_1___default().title),\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\vscode-theme-main\\\\components\\\\CertificateCard.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: certificate.title\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\vscode-theme-main\\\\components\\\\CertificateCard.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: certificate.description\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_c = CertificateCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CertificateCard);\nvar _c;\n$RefreshReg$(_c, \"CertificateCard\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NlcnRpZmljYXRlQ2FyZC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5RDs7QUFHekQsR0FBSyxDQUFDQyxlQUFlLEdBQUcsUUFBUSxRQUFhLENBQUM7UUFBbkJDLFdBQVcsU0FBWEEsV0FBVztJQUNwQyxNQUFNLHVFQUNIQyxDQUFDO1FBQ0FDLElBQUksRUFBRUYsV0FBVyxDQUFDRyxHQUFHO1FBQ3JCQyxNQUFNLEVBQUMsQ0FBUTtRQUNmQyxHQUFHLEVBQUMsQ0FBcUI7UUFDekJDLFNBQVMsRUFBRVIscUZBQWdCOzs7Ozs7OztpRkFFMUJVLENBQU07Z0JBQ1BDLEdBQUcsRUFBRVQsV0FBVyxDQUFDVSxXQUFXO2dCQUM1QkMsV0FBVyxFQUFDLENBQUc7Z0JBQ2ZDLGVBQWUsRUFBQyxDQUFFO2dCQUNsQkMsS0FBSyxFQUFDLENBQWU7Z0JBQ3JCQyxLQUFLLEVBQUUsR0FBRztnQkFDVkMsTUFBTSxFQUFFLEdBQUc7Ozs7Ozs7O2lGQUVWQyxDQUFHO2dCQUNGUCxHQUFHLEVBQUVULFdBQVcsQ0FBQ1UsV0FBVzs7Ozs7Ozs7a0ZBRTdCTyxDQUFHO2dCQUFDWCxTQUFTLEVBQUVSLG1GQUFjOzs7Ozs7Ozt5RkFDM0JxQixDQUFFO3dCQUFDYixTQUFTLEVBQUVSLGlGQUFZOzs7Ozs7O2tDQUFHRSxXQUFXLENBQUNhLEtBQUs7O3lGQUM5Q08sQ0FBQzs7Ozs7OztrQ0FBRXBCLFdBQVcsQ0FBQ3FCLFdBQVc7Ozs7OztBQUluQyxDQUFDO0tBekJLdEIsZUFBZTtBQTJCckIsK0RBQWVBLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NlcnRpZmljYXRlQ2FyZC5qc3g/MDFmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9DZXJ0aWZpY2F0ZUNhcmQubW9kdWxlLmNzcyc7XG5cblxuY29uc3QgQ2VydGlmaWNhdGVDYXJkID0gKHsgY2VydGlmaWNhdGUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxhXG4gICAgICBocmVmPXtjZXJ0aWZpY2F0ZS51cmx9XG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XG4gICAgPlxuICAgICAgPGlmcmFtZSBcbiAgICAgIHNyYz17Y2VydGlmaWNhdGUuY292ZXJfaW1hZ2V9IFxuICAgICAgZnJhbWVib3JkZXI9XCIwXCIgXG4gICAgICBhbGxvd2Z1bGxzY3JlZW49XCJcIiBcbiAgICAgIHRpdGxlPVwiRW1iZWRkZWQgcG9zdFwiXG4gICAgICB3aWR0aD17MjU1fVxuICAgICAgaGVpZ2h0PXsxNTB9XG4gICAgICA+PC9pZnJhbWU+XG4gICAgICA8aW1nIFxuICAgICAgICBzcmM9e2NlcnRpZmljYXRlLmNvdmVyX2ltYWdlfSBcbiAgICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e2NlcnRpZmljYXRlLnRpdGxlfTwvaDM+XG4gICAgICAgIDxwPntjZXJ0aWZpY2F0ZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2E+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDZXJ0aWZpY2F0ZUNhcmQ7XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiQ2VydGlmaWNhdGVDYXJkIiwiY2VydGlmaWNhdGUiLCJhIiwiaHJlZiIsInVybCIsInRhcmdldCIsInJlbCIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImlmcmFtZSIsInNyYyIsImNvdmVyX2ltYWdlIiwiZnJhbWVib3JkZXIiLCJhbGxvd2Z1bGxzY3JlZW4iLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0IiwiaW1nIiwiZGl2IiwiY29udGVudCIsImgzIiwicCIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CertificateCard.jsx\n");

/***/ })

});