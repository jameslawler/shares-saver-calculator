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
    className: "jsx-1515852834",
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
    className: "jsx-1515852834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Shares Saver Calculator"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-1515852834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1515852834" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1515852834" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Shares Saver Calculator"), __jsx("p", {
    className: "jsx-1515852834" + " " + "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Choose a saver plan and enter your monthly saving contribution."), __jsx("p", {
    className: "jsx-1515852834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_3__["default"].asx.name), __jsx("button", {
    onClick: function onClick() {
      return setCalculations(_services_calculatorService__WEBPACK_IMPORTED_MODULE_4__["default"].calculate(_data__WEBPACK_IMPORTED_MODULE_3__["default"].asx, 100));
    },
    className: "jsx-1515852834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Calculate"), __jsx("table", {
    className: "jsx-1515852834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-1515852834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-1515852834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Date"), __jsx("th", {
    className: "jsx-1515852834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Type"), __jsx("th", {
    className: "jsx-1515852834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Shares Change"), __jsx("th", {
    className: "jsx-1515852834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Total Shares"), __jsx("th", {
    className: "jsx-1515852834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Total Deposited"), __jsx("th", {
    className: "jsx-1515852834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Worth"), __jsx("th", {
    className: "jsx-1515852834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Growth")), calculations.map(function (calculation) {
    return __jsx("tr", {
      className: "jsx-1515852834",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-1515852834",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, calculation.date.toISOString().substr(0, 10)), __jsx("td", {
      className: "jsx-1515852834",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, calculation.type), __jsx("td", {
      className: "jsx-1515852834",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, calculation.shareChange.toFixed(2)), __jsx("td", {
      className: "jsx-1515852834",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, calculation.totalShares.toFixed(2)), __jsx("td", {
      className: "jsx-1515852834",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, calculation.totalDeposited.toFixed(2), " euros"), __jsx("td", {
      className: "jsx-1515852834",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, calculation.worth.toFixed(2), " euros"), __jsx("td", {
      className: "jsx-1515852834",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, calculation.growth.toFixed(2), "%"));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1515852834",
    __self: this
  }, ".container.jsx-1515852834{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;color:#333;}.title.jsx-1515852834{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}.title.jsx-1515852834,.description.jsx-1515852834{text-align:center;}tr.jsx-1515852834:nth-child(even){background:#CCC;}tr.jsx-1515852834:nth-child(odd){background:#FFF;}td.jsx-1515852834{padding:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxNeSBQcm9qZWN0c1xcc2hhcmVzLXNhdmVyLWNhbGN1bGF0b3JcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRGtCLEFBR3dCLEFBS0osQUFRUyxBQUVjLEFBQ0QsQUFFbEIsU0FaRixJQWFiLEdBSm1DLEFBQ0QsRUFGbEMsRUFQbUIsaUJBQ0EsaUJBQ0YsZUFDakIsS0FUYSxXQUNBLFdBQ2IiLCJmaWxlIjoiRDpcXE15IFByb2plY3RzXFxzaGFyZXMtc2F2ZXItY2FsY3VsYXRvclxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YSc7XG5cbmltcG9ydCBjYWxjdWxhdG9yU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9jYWxjdWxhdG9yU2VydmljZSc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtjYWxjdWxhdGlvbnMsIHNldENhbGN1bGF0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TaGFyZXMgU2F2ZXIgQ2FsY3VsYXRvcjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+U2hhcmVzIFNhdmVyIENhbGN1bGF0b3I8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIENob29zZSBhIHNhdmVyIHBsYW4gYW5kIGVudGVyIHlvdXIgbW9udGhseSBzYXZpbmcgY29udHJpYnV0aW9uLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHtkYXRhLmFzeC5uYW1lfVxuICAgICAgICA8L3A+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q2FsY3VsYXRpb25zKGNhbGN1bGF0b3JTZXJ2aWNlLmNhbGN1bGF0ZShkYXRhLmFzeCwgMTAwKSl9PlxuICAgICAgICAgIENhbGN1bGF0ZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5EYXRlPC90aD5cbiAgICAgICAgICAgIDx0aD5UeXBlPC90aD5cbiAgICAgICAgICAgIDx0aD5TaGFyZXMgQ2hhbmdlPC90aD5cbiAgICAgICAgICAgIDx0aD5Ub3RhbCBTaGFyZXM8L3RoPlxuICAgICAgICAgICAgPHRoPlRvdGFsIERlcG9zaXRlZDwvdGg+XG4gICAgICAgICAgICA8dGg+V29ydGg8L3RoPlxuICAgICAgICAgICAgPHRoPkdyb3d0aDwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICB7IGNhbGN1bGF0aW9ucy5tYXAoY2FsY3VsYXRpb24gPT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+e2NhbGN1bGF0aW9uLmRhdGUudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgMTApfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2NhbGN1bGF0aW9uLnR5cGV9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y2FsY3VsYXRpb24uc2hhcmVDaGFuZ2UudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgPHRkPntjYWxjdWxhdGlvbi50b3RhbFNoYXJlcy50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2NhbGN1bGF0aW9uLnRvdGFsRGVwb3NpdGVkLnRvRml4ZWQoMil9IGV1cm9zPC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y2FsY3VsYXRpb24ud29ydGgudG9GaXhlZCgyKX0gZXVyb3M8L3RkPlxuICAgICAgICAgICAgPHRkPntjYWxjdWxhdGlvbi5ncm93dGgudG9GaXhlZCgyKX0lPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICApfVxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlLFxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICB0cjpudGgtY2hpbGQoZXZlbikge2JhY2tncm91bmQ6ICNDQ0N9XG4gICAgICAgIHRyOm50aC1jaGlsZChvZGQpIHtiYWNrZ3JvdW5kOiAjRkZGfVxuICAgICAgICB0ZCB7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=D:\\\\My Projects\\\\shares-saver-calculator\\\\pages\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.5924a32c5044bf3c8024.hot-update.js.map