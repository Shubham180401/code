"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Illustration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Illustration */ \"./components/Illustration.jsx\");\n/* harmony import */ var _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/HomePage.module.css */ \"./styles/HomePage.module.css\");\n/* harmony import */ var _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction HomePage() {\n    _s();\n    var wordsArray = [\n        \"Data\",\n        \"Analyst/\",\n        \"Web\",\n        \"Developer\"\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentWordIndex = ref[0], setCurrentWordIndex = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), currentWord = ref1[0], setCurrentWord = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), showCursor = ref2[0], setShowCursor = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var typingInterval = setInterval(function() {\n            if (currentWordIndex < wordsArray.length) {\n                var word = wordsArray[currentWordIndex];\n                setCurrentWord(function(prevWord) {\n                    return prevWord + word.charAt(currentWord.length);\n                });\n                if (currentWord.length === word.length) {\n                    setShowCursor(false);\n                    clearInterval(typingInterval);\n                    setTimeout(function() {\n                        setShowCursor(true);\n                        setCurrentWordIndex(currentWordIndex + 1);\n                    }, 1000); // Adjust the pause time between words (in milliseconds)\n                }\n            }\n        }, 150); // Adjust the typing speed (in milliseconds) as needed\n    }, [\n        currentWordIndex,\n        currentWord\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: (_styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n            __source: {\n                fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\code\\\\pages\\\\index.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: (_styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_4___default().background),\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\code\\\\pages\\\\index.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\code\\\\pages\\\\index.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: \"I LEARN\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\code\\\\pages\\\\index.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: \"EVERDAY\"\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: (_styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_4___default().foreground),\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\code\\\\pages\\\\index.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: (_styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\code\\\\pages\\\\index.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                                    className: (_styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_4___default().name),\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\code\\\\pages\\\\index.jsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: \"#Shubham Negi ;)\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h6\", {\n                                    className: (_styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_4___default().bio),\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\code\\\\pages\\\\index.jsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: [\n                                        currentWord,\n                                        showCursor && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                            className: (_styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_4___default().cursor),\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\code\\\\pages\\\\index.jsx\",\n                                                lineNumber: 43,\n                                                columnNumber: 30\n                                            },\n                                            __self: this,\n                                            children: \"|\"\n                                        })\n                                    ]\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/projects\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\code\\\\pages\\\\index.jsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        className: (_styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\code\\\\pages\\\\index.jsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 15\n                                        },\n                                        __self: this,\n                                        children: \"View Work\"\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/contact\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\code\\\\pages\\\\index.jsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        className: (_styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_4___default().outlined),\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\code\\\\pages\\\\index.jsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 15\n                                        },\n                                        __self: this,\n                                        children: \"Contact Me\"\n                                    })\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Illustration__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: (_styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_4___default().illustration),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\drake\\\\OneDrive\\\\Desktop\\\\code\\\\pages\\\\index.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n};\n_s(HomePage, \"varIOQyPM97z3k4HNesR4hXgTaQ=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q21CLFNBQVMsRUFBRWxCLGlGQUFtQjs7Ozs7Ozs7Ozs7OztBQUt0RCxDQUFDO0dBbkR1QkMsUUFBUTtLQUFSQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBJbGx1c3RyYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9JbGx1c3RyYXRpb24nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZVBhZ2UubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuXG4gIGNvbnN0IHdvcmRzQXJyYXkgPSBbXCJEYXRhXCIsIFwiQW5hbHlzdC9cIiwgXCJXZWJcIiwgXCJEZXZlbG9wZXJcIl07XG4gIGNvbnN0IFtjdXJyZW50V29yZEluZGV4LCBzZXRDdXJyZW50V29yZEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbY3VycmVudFdvcmQsIHNldEN1cnJlbnRXb3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Nob3dDdXJzb3IsIHNldFNob3dDdXJzb3JdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0eXBpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChjdXJyZW50V29yZEluZGV4IDwgd29yZHNBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgY29uc3Qgd29yZCA9IHdvcmRzQXJyYXlbY3VycmVudFdvcmRJbmRleF07XG4gICAgICAgIHNldEN1cnJlbnRXb3JkKHByZXZXb3JkID0+IHByZXZXb3JkICsgd29yZC5jaGFyQXQoY3VycmVudFdvcmQubGVuZ3RoKSk7XG4gICAgICAgIGlmIChjdXJyZW50V29yZC5sZW5ndGggPT09IHdvcmQubGVuZ3RoKSB7XG4gICAgICAgICAgc2V0U2hvd0N1cnNvcihmYWxzZSk7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0eXBpbmdJbnRlcnZhbCk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRTaG93Q3Vyc29yKHRydWUpO1xuICAgICAgICAgICAgc2V0Q3VycmVudFdvcmRJbmRleChjdXJyZW50V29yZEluZGV4ICsgMSk7XG4gICAgICAgICAgfSwgMTAwMCk7IC8vIEFkanVzdCB0aGUgcGF1c2UgdGltZSBiZXR3ZWVuIHdvcmRzIChpbiBtaWxsaXNlY29uZHMpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxNTApOyAvLyBBZGp1c3QgdGhlIHR5cGluZyBzcGVlZCAoaW4gbWlsbGlzZWNvbmRzKSBhcyBuZWVkZWRcbiAgfSwgW2N1cnJlbnRXb3JkSW5kZXgsIGN1cnJlbnRXb3JkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tncm91bmR9PlxuICAgICAgICAgIDxoMT5JIExFQVJOPC9oMT5cbiAgICAgICAgICA8aDE+RVZFUkRBWTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcmVncm91bmR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+I1NodWJoYW0gTmVnaSA7KTwvaDE+XG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPXtzdHlsZXMuYmlvfT5cbiAgICAgICAgICAgICAgey8qIERhdGEgQW5hbHlpc3QvIFdlYiBEZXZlbG9wZXIgKi99XG4gICAgICAgICAgICAgIHtjdXJyZW50V29yZH1cbiAgICAgICAgICAgICAge3Nob3dDdXJzb3IgJiYgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY3Vyc29yfT58PC9zcGFuPn1cbiAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5WaWV3IFdvcms8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLm91dGxpbmVkfT5Db250YWN0IE1lPC9idXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPElsbHVzdHJhdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5pbGx1c3RyYXRpb259IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyB0aXRsZTogJ0hvbWUnIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJJbGx1c3RyYXRpb24iLCJzdHlsZXMiLCJIb21lUGFnZSIsIndvcmRzQXJyYXkiLCJjdXJyZW50V29yZEluZGV4Iiwic2V0Q3VycmVudFdvcmRJbmRleCIsImN1cnJlbnRXb3JkIiwic2V0Q3VycmVudFdvcmQiLCJzaG93Q3Vyc29yIiwic2V0U2hvd0N1cnNvciIsInR5cGluZ0ludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJ3b3JkIiwicHJldldvcmQiLCJjaGFyQXQiLCJjbGVhckludGVydmFsIiwic2V0VGltZW91dCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImJhY2tncm91bmQiLCJoMSIsImZvcmVncm91bmQiLCJjb250ZW50IiwibmFtZSIsImg2IiwiYmlvIiwic3BhbiIsImN1cnNvciIsImhyZWYiLCJidXR0b24iLCJvdXRsaW5lZCIsImlsbHVzdHJhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});