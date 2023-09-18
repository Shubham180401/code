"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./components/ProjectCard.jsx":
/*!************************************!*\
  !*** ./components/ProjectCard.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/ProjectCard.module.css */ \"./styles/ProjectCard.module.css\");\n/* harmony import */ var _styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar ProjectCard = function(param) {\n    var project = param.project;\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n        __source: {\n            fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\vscode-theme-main\\\\components\\\\ProjectCard.jsx\",\n            lineNumber: 6,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: project.image,\n                height: 170,\n                width: 200,\n                alt: project.name,\n                className: (_styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().projectImage),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\vscode-theme-main\\\\components\\\\ProjectCard.jsx\",\n                    lineNumber: 7,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                className: (_styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().image),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\vscode-theme-main\\\\components\\\\ProjectCard.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\vscode-theme-main\\\\components\\\\ProjectCard.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\vscode-theme-main\\\\components\\\\ProjectCard.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: project.name\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\vscode-theme-main\\\\components\\\\ProjectCard.jsx\",\n                            lineNumber: 17,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: project.description\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: (_styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().tags),\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\vscode-theme-main\\\\components\\\\ProjectCard.jsx\",\n                            lineNumber: 18,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: project.tags.map(function(tag) {\n                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                className: tag,\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\vscode-theme-main\\\\components\\\\ProjectCard.jsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 13\n                                },\n                                __self: _this1,\n                                children: tag\n                            }, tag);\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: (_styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().cta),\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\vscode-theme-main\\\\components\\\\ProjectCard.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            project.source_code && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                href: project.source_code,\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: (_styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().underline),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\vscode-theme-main\\\\components\\\\ProjectCard.jsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: \"Source Code\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                href: project.demo,\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: (_styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().underline),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\vscode-theme-main\\\\components\\\\ProjectCard.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: \"Live Demo\"\n                            })\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEI7QUFDdUI7O0FBRXJELEdBQUssQ0FBQ0UsV0FBVyxHQUFHLFFBQVEsUUFBUyxDQUFDO1FBQWZDLE9BQU8sU0FBUEEsT0FBTzs7SUFDNUIsTUFBTSx1RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUVKLDRFQUFXOzs7Ozs7OztpRkFDeEJELG1EQUFLO2dCQUNKTyxHQUFHLEVBQUVKLE9BQU8sQ0FBQ0ssS0FBSztnQkFDbEJDLE1BQU0sRUFBRSxHQUFHO2dCQUNYQyxLQUFLLEVBQUUsR0FBRztnQkFDVkMsR0FBRyxFQUFFUixPQUFPLENBQUNTLElBQUk7Z0JBQ2pCUCxTQUFTLEVBQUVKLG9GQUFtQjs7Ozs7Ozs7aUZBRS9CYSxDQUFHO2dCQUFDVCxTQUFTLEVBQUVKLDZFQUFZOzs7Ozs7OztrRkFDM0JHLENBQUc7Z0JBQUNDLFNBQVMsRUFBRUosK0VBQWM7Ozs7Ozs7O3lGQUMzQmUsQ0FBRTs7Ozs7OztrQ0FBRWIsT0FBTyxDQUFDUyxJQUFJOzt5RkFDaEJLLENBQUM7Ozs7Ozs7a0NBQUVkLE9BQU8sQ0FBQ2UsV0FBVzs7eUZBQ3RCZCxDQUFHO3dCQUFDQyxTQUFTLEVBQUVKLDRFQUFXOzs7Ozs7O2tDQUN4QkUsT0FBTyxDQUFDZ0IsSUFBSSxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFQQyxHQUFHOzBDQUNwQixNQUFNQyxDQUFBQSxzREFBQUEsQ0FBTEMsQ0FBSTtnQ0FBV2xCLFNBQVMsRUFBRWdCLEdBQUc7Ozs7Ozs7MENBQzNCQSxHQUFHOytCQURLQSxHQUFHOzs7MEZBS2pCakIsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFFSiwyRUFBVTs7Ozs7Ozs7NEJBQ3ZCRSxPQUFPLENBQUNzQixXQUFXLHlFQUNqQkMsQ0FBQztnQ0FDQUMsSUFBSSxFQUFFeEIsT0FBTyxDQUFDc0IsV0FBVztnQ0FDekJHLE1BQU0sRUFBQyxDQUFRO2dDQUNmQyxHQUFHLEVBQUMsQ0FBcUI7Z0NBQ3pCeEIsU0FBUyxFQUFFSixpRkFBZ0I7Ozs7Ozs7MENBQzVCLENBRUQ7O2lHQUVEeUIsQ0FBQztnQ0FDQUMsSUFBSSxFQUFFeEIsT0FBTyxDQUFDNEIsSUFBSTtnQ0FDbEJILE1BQU0sRUFBQyxDQUFRO2dDQUNmQyxHQUFHLEVBQUMsQ0FBcUI7Z0NBQ3pCeEIsU0FBUyxFQUFFSixpRkFBZ0I7Ozs7Ozs7MENBQzVCLENBRUQ7Ozs7Ozs7O0FBS1YsQ0FBQztLQTVDS0MsV0FBVztBQThDakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2plY3RDYXJkLmpzeD9mMjdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1Byb2plY3RDYXJkLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgUHJvamVjdENhcmQgPSAoeyBwcm9qZWN0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgPEltYWdlIFxuICAgICAgICBzcmM9e3Byb2plY3QuaW1hZ2V9IFxuICAgICAgICBoZWlnaHQ9ezE3MH0gXG4gICAgICAgIHdpZHRoPXsyMDB9IFxuICAgICAgICBhbHQ9e3Byb2plY3QubmFtZX0gXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3RJbWFnZX1cbiAgICAgIC8+ICBcbiAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9Lz4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgPGgzPntwcm9qZWN0Lm5hbWV9PC9oMz5cbiAgICAgICAgPHA+e3Byb2plY3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhZ3N9PlxuICAgICAgICAgIHtwcm9qZWN0LnRhZ3MubWFwKCh0YWcpID0+IChcbiAgICAgICAgICAgIDxzcGFuIGtleT17dGFnfSBjbGFzc05hbWU9e3RhZ30+XG4gICAgICAgICAgICAgIHt0YWd9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmN0YX0+XG4gICAgICAgICAge3Byb2plY3Quc291cmNlX2NvZGUgJiYgKFxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj17cHJvamVjdC5zb3VyY2VfY29kZX1cbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnVuZGVybGluZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU291cmNlIENvZGVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPXtwcm9qZWN0LmRlbW99XG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy51bmRlcmxpbmV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTGl2ZSBEZW1vXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmQ7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJzdHlsZXMiLCJQcm9qZWN0Q2FyZCIsInByb2plY3QiLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJkIiwic3JjIiwiaW1hZ2UiLCJoZWlnaHQiLCJ3aWR0aCIsImFsdCIsIm5hbWUiLCJwcm9qZWN0SW1hZ2UiLCJpbWciLCJjb250ZW50IiwiaDMiLCJwIiwiZGVzY3JpcHRpb24iLCJ0YWdzIiwibWFwIiwidGFnIiwia2V5Iiwic3BhbiIsImN0YSIsInNvdXJjZV9jb2RlIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJ1bmRlcmxpbmUiLCJkZW1vIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProjectCard.jsx\n");

/***/ })

});