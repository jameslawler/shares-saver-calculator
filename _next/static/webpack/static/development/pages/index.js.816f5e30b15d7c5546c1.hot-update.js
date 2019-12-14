webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data */ "./data/index.js");
/* harmony import */ var _services_calculatorService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/calculatorService */ "./services/calculatorService.js");
var _jsxFileName = "D:\\My Projects\\shares-saver-calculator\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      calculations = _useState[0],
      setCalculations = _useState[1];

  return __jsx("div", {
    className: "jsx-2449189580",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-2449189580",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Shares Saver Calculator"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-2449189580",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2449189580" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2449189580" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Shares Saver Calculator"), __jsx("p", {
    className: "jsx-2449189580" + " " + "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Choose a saver plan and enter your monthly saving contribution."), __jsx("p", {
    className: "jsx-2449189580",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_3__["default"].asx.name), __jsx("button", {
    onClick: function onClick() {
      return setCalculations(_services_calculatorService__WEBPACK_IMPORTED_MODULE_4__["default"].calculate(_data__WEBPACK_IMPORTED_MODULE_3__["default"].asx, 100));
    },
    className: "jsx-2449189580",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Calculate"), __jsx("table", {
    className: "jsx-2449189580",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-2449189580",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-2449189580",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Date"), __jsx("th", {
    className: "jsx-2449189580",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Type"), __jsx("th", {
    className: "jsx-2449189580",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Shares Change"), __jsx("th", {
    className: "jsx-2449189580",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Total Shares"), __jsx("th", {
    className: "jsx-2449189580",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Total Deposited"), __jsx("th", {
    className: "jsx-2449189580",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Worth"), __jsx("th", {
    className: "jsx-2449189580",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Growth")), calculations.map(function (calculation) {
    return __jsx("tr", {
      className: "jsx-2449189580",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-2449189580",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, calculation.date.toISOString().substr(0, 10)), __jsx("td", {
      className: "jsx-2449189580",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, calculation.type), __jsx("td", {
      className: "jsx-2449189580",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, calculation.shareChange.toFixed(2)), __jsx("td", {
      className: "jsx-2449189580",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, calculation.totalShares.toFixed(2)), __jsx("td", {
      className: "jsx-2449189580",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, calculation.totalDeposited.toFixed(2), " euros"), __jsx("td", {
      className: "jsx-2449189580",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, calculation.worth.toFixed(2), " euros"), __jsx("td", {
      className: "jsx-2449189580",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, calculation.growth.toFixed(2), "%"));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2449189580",
    __self: this
  }, ".container.jsx-2449189580{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:900px;color:#333;}.title.jsx-2449189580{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}.title.jsx-2449189580,.description.jsx-2449189580{text-align:center;}tr.jsx-2449189580:nth-child(even){background:#CCC;}tr.jsx-2449189580:nth-child(odd){background:#FFF;}td.jsx-2449189580{padding:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxNeSBQcm9qZWN0c1xcc2hhcmVzLXNhdmVyLWNhbGN1bGF0b3JcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRGtCLEFBR3dCLEFBTUosQUFRUyxBQUVjLEFBQ0QsQUFFbEIsU0FaRixJQWFiLEdBSm1DLEFBQ0QsRUFGbEMsRUFQbUIsaUJBQ0EsaUJBQ0YsZUFDakIsS0FWd0IsOEVBQ1YsWUFDRCxXQUNiIiwiZmlsZSI6IkQ6XFxNeSBQcm9qZWN0c1xcc2hhcmVzLXNhdmVyLWNhbGN1bGF0b3JcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmltcG9ydCBkYXRhIGZyb20gJy4uL2RhdGEnO1xuXG5pbXBvcnQgY2FsY3VsYXRvclNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvY2FsY3VsYXRvclNlcnZpY2UnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbY2FsY3VsYXRpb25zLCBzZXRDYWxjdWxhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U2hhcmVzIFNhdmVyIENhbGN1bGF0b3I8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlNoYXJlcyBTYXZlciBDYWxjdWxhdG9yPC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICBDaG9vc2UgYSBzYXZlciBwbGFuIGFuZCBlbnRlciB5b3VyIG1vbnRobHkgc2F2aW5nIGNvbnRyaWJ1dGlvbi5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7ZGF0YS5hc3gubmFtZX1cbiAgICAgICAgPC9wPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENhbGN1bGF0aW9ucyhjYWxjdWxhdG9yU2VydmljZS5jYWxjdWxhdGUoZGF0YS5hc3gsIDEwMCkpfT5cbiAgICAgICAgICBDYWxjdWxhdGVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XG4gICAgICAgICAgICA8dGg+VHlwZTwvdGg+XG4gICAgICAgICAgICA8dGg+U2hhcmVzIENoYW5nZTwvdGg+XG4gICAgICAgICAgICA8dGg+VG90YWwgU2hhcmVzPC90aD5cbiAgICAgICAgICAgIDx0aD5Ub3RhbCBEZXBvc2l0ZWQ8L3RoPlxuICAgICAgICAgICAgPHRoPldvcnRoPC90aD5cbiAgICAgICAgICAgIDx0aD5Hcm93dGg8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgeyBjYWxjdWxhdGlvbnMubWFwKGNhbGN1bGF0aW9uID0+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPntjYWxjdWxhdGlvbi5kYXRlLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDEwKX08L3RkPlxuICAgICAgICAgICAgPHRkPntjYWxjdWxhdGlvbi50eXBlfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2NhbGN1bGF0aW9uLnNoYXJlQ2hhbmdlLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y2FsY3VsYXRpb24udG90YWxTaGFyZXMudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgPHRkPntjYWxjdWxhdGlvbi50b3RhbERlcG9zaXRlZC50b0ZpeGVkKDIpfSBldXJvczwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2NhbGN1bGF0aW9uLndvcnRoLnRvRml4ZWQoMil9IGV1cm9zPC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y2FsY3VsYXRpb24uZ3Jvd3RoLnRvRml4ZWQoMil9JTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgKX1cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB3aWR0aDogOTAwcHg7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZSxcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kOiAjQ0NDfVxuICAgICAgICB0cjpudGgtY2hpbGQob2RkKSB7YmFja2dyb3VuZDogI0ZGRn1cbiAgICAgICAgdGQge1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=D:\\\\My Projects\\\\shares-saver-calculator\\\\pages\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.816f5e30b15d7c5546c1.hot-update.js.map