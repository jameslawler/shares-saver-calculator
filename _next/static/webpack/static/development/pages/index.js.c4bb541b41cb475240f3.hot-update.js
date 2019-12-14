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
    className: "jsx-3910996733",
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
    className: "jsx-3910996733",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Shares Saver Calculator"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-3910996733",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3910996733" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3910996733" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Shares Saver Calculator"), __jsx("p", {
    className: "jsx-3910996733" + " " + "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Choose a saver plan and enter your monthly saving contribution."), __jsx("div", {
    className: "jsx-3910996733" + " " + "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("b", {
    className: "jsx-3910996733",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Name: "), __jsx("span", {
    className: "jsx-3910996733",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_3__["default"].asx.name)), __jsx("div", {
    className: "jsx-3910996733" + " " + "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("b", {
    className: "jsx-3910996733",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Entry Fee: "), __jsx("span", {
    className: "jsx-3910996733",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_3__["default"].asx.entryFee, "%")), __jsx("div", {
    className: "jsx-3910996733" + " " + "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("b", {
    className: "jsx-3910996733",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Management Fee: "), __jsx("span", {
    className: "jsx-3910996733",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_3__["default"].asx.totalExpenseRatio, "% p.a")), __jsx("button", {
    onClick: function onClick() {
      return setCalculations(_services_calculatorService__WEBPACK_IMPORTED_MODULE_4__["default"].calculate(_data__WEBPACK_IMPORTED_MODULE_3__["default"].asx, 100));
    },
    className: "jsx-3910996733",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Calculate"), calculations.length > 0 && __jsx("table", {
    className: "jsx-3910996733",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-3910996733",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-3910996733",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Date"), __jsx("th", {
    className: "jsx-3910996733",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Type"), __jsx("th", {
    className: "jsx-3910996733",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Shares Change"), __jsx("th", {
    className: "jsx-3910996733",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Total Shares"), __jsx("th", {
    className: "jsx-3910996733",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Total Deposited"), __jsx("th", {
    className: "jsx-3910996733",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Worth"), __jsx("th", {
    className: "jsx-3910996733",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Growth")), calculations.map(function (calculation) {
    return __jsx("tr", {
      className: "jsx-3910996733",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-3910996733",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, calculation.date.toISOString().substr(0, 10)), __jsx("td", {
      className: "jsx-3910996733",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, calculation.type), __jsx("td", {
      className: "jsx-3910996733",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, calculation.shareChange.toFixed(2)), __jsx("td", {
      className: "jsx-3910996733",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, calculation.totalShares.toFixed(2)), __jsx("td", {
      className: "jsx-3910996733",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, calculation.totalDeposited.toFixed(2), " euros"), __jsx("td", {
      className: "jsx-3910996733",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, calculation.worth.toFixed(2), " euros"), __jsx("td", {
      className: "jsx-3910996733" + " " + ((calculation.growth < 0 ? 'negative' : 'positive') || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, calculation.growth.toFixed(2), "%"));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3910996733",
    __self: this
  }, ".container.jsx-3910996733{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:900px;color:#333;}.title.jsx-3910996733{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}.title.jsx-3910996733,.description.jsx-3910996733{text-align:center;}tr.jsx-3910996733:nth-child(even){background:#CCC;}tr.jsx-3910996733:nth-child(odd){background:#FFF;}td.jsx-3910996733{padding:10px;}td.negative.jsx-3910996733{background:red;}td.positive.jsx-3910996733{background:green;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxNeSBQcm9qZWN0c1xcc2hhcmVzLXNhdmVyLWNhbGN1bGF0b3JcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRGtCLEFBRzhCLEFBT1YsQUFRUyxBQUtjLEFBQ0QsQUFFbEIsQUFHRSxBQUdFLFNBckJOLElBZ0JiLEVBR0EsQ0FQbUMsQUFDRCxDQVNwQixDQWRkLEVBUG1CLFNBc0JuQixRQXJCbUIsaUJBQ0YsZUFDakIsd0JBWGUsMEVBQ1MsOEVBQ1YsWUFDRCxXQUNiIiwiZmlsZSI6IkQ6XFxNeSBQcm9qZWN0c1xcc2hhcmVzLXNhdmVyLWNhbGN1bGF0b3JcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmltcG9ydCBkYXRhIGZyb20gJy4uL2RhdGEnO1xuXG5pbXBvcnQgY2FsY3VsYXRvclNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvY2FsY3VsYXRvclNlcnZpY2UnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbY2FsY3VsYXRpb25zLCBzZXRDYWxjdWxhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U2hhcmVzIFNhdmVyIENhbGN1bGF0b3I8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlNoYXJlcyBTYXZlciBDYWxjdWxhdG9yPC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICBDaG9vc2UgYSBzYXZlciBwbGFuIGFuZCBlbnRlciB5b3VyIG1vbnRobHkgc2F2aW5nIGNvbnRyaWJ1dGlvbi5cbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj48Yj5OYW1lOiA8L2I+PHNwYW4+e2RhdGEuYXN4Lm5hbWV9PC9zcGFuPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj48Yj5FbnRyeSBGZWU6IDwvYj48c3Bhbj57ZGF0YS5hc3guZW50cnlGZWV9JTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+PGI+TWFuYWdlbWVudCBGZWU6IDwvYj48c3Bhbj57ZGF0YS5hc3gudG90YWxFeHBlbnNlUmF0aW99JSBwLmE8L3NwYW4+PC9kaXY+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q2FsY3VsYXRpb25zKGNhbGN1bGF0b3JTZXJ2aWNlLmNhbGN1bGF0ZShkYXRhLmFzeCwgMTAwKSl9PlxuICAgICAgICAgIENhbGN1bGF0ZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgeyBjYWxjdWxhdGlvbnMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPkRhdGU8L3RoPlxuICAgICAgICAgICAgICA8dGg+VHlwZTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5TaGFyZXMgQ2hhbmdlPC90aD5cbiAgICAgICAgICAgICAgPHRoPlRvdGFsIFNoYXJlczwvdGg+XG4gICAgICAgICAgICAgIDx0aD5Ub3RhbCBEZXBvc2l0ZWQ8L3RoPlxuICAgICAgICAgICAgICA8dGg+V29ydGg8L3RoPlxuICAgICAgICAgICAgICA8dGg+R3Jvd3RoPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICB7IGNhbGN1bGF0aW9ucy5tYXAoY2FsY3VsYXRpb24gPT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPntjYWxjdWxhdGlvbi5kYXRlLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDEwKX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e2NhbGN1bGF0aW9uLnR5cGV9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPntjYWxjdWxhdGlvbi5zaGFyZUNoYW5nZS50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57Y2FsY3VsYXRpb24udG90YWxTaGFyZXMudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e2NhbGN1bGF0aW9uLnRvdGFsRGVwb3NpdGVkLnRvRml4ZWQoMil9IGV1cm9zPC90ZD5cbiAgICAgICAgICAgICAgPHRkPntjYWxjdWxhdGlvbi53b3J0aC50b0ZpeGVkKDIpfSBldXJvczwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2NhbGN1bGF0aW9uLmdyb3d0aCA8IDAgPyAnbmVnYXRpdmUnIDogJ3Bvc2l0aXZlJ30+e2NhbGN1bGF0aW9uLmdyb3d0aC50b0ZpeGVkKDIpfSU8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB3aWR0aDogOTAwcHg7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZSxcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmRldGFpbHMge1xuXG4gICAgICAgIH1cbiAgICAgICAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kOiAjQ0NDfVxuICAgICAgICB0cjpudGgtY2hpbGQob2RkKSB7YmFja2dyb3VuZDogI0ZGRn1cbiAgICAgICAgdGQge1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgdGQubmVnYXRpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgfVxuICAgICAgICB0ZC5wb3NpdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogZ3JlZW47XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=D:\\\\My Projects\\\\shares-saver-calculator\\\\pages\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.c4bb541b41cb475240f3.hot-update.js.map