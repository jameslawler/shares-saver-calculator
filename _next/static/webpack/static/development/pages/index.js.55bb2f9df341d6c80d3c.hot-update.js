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
    className: "jsx-3170664004",
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
    className: "jsx-3170664004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Shares Saver Calculator"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-3170664004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3170664004" + " " + "hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3170664004" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Shares Saver Calculator"), __jsx("p", {
    className: "jsx-3170664004" + " " + "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Choose a saver plan and enter your monthly saving contribution."), __jsx("p", {
    className: "jsx-3170664004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_3__["default"].asx.name), __jsx("button", {
    onClick: function onClick() {
      return setCalculations(_services_calculatorService__WEBPACK_IMPORTED_MODULE_4__["default"].calculate(_data__WEBPACK_IMPORTED_MODULE_3__["default"].asx, 100));
    },
    className: "jsx-3170664004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Calculate"), __jsx("table", {
    className: "jsx-3170664004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-3170664004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-3170664004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Date"), __jsx("th", {
    className: "jsx-3170664004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Type"), __jsx("th", {
    className: "jsx-3170664004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Shares Change"), __jsx("th", {
    className: "jsx-3170664004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Total Shares"), __jsx("th", {
    className: "jsx-3170664004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Total Deposited"), __jsx("th", {
    className: "jsx-3170664004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Worth"), __jsx("th", {
    className: "jsx-3170664004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Growth")), calculations.map(function (calculation) {
    return __jsx("tr", {
      className: "jsx-3170664004",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-3170664004",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Date"), __jsx("td", {
      className: "jsx-3170664004",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Type"), __jsx("td", {
      className: "jsx-3170664004",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Shares Change"), __jsx("td", {
      className: "jsx-3170664004",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Total Shares"), __jsx("td", {
      className: "jsx-3170664004",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Total Deposited"), __jsx("td", {
      className: "jsx-3170664004",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Worth"), __jsx("td", {
      className: "jsx-3170664004",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Growth"));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3170664004",
    __self: this
  }, ".hero.jsx-3170664004{width:100%;color:#333;}.title.jsx-3170664004{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}.title.jsx-3170664004,.description.jsx-3170664004{text-align:center;}.row.jsx-3170664004{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.card.jsx-3170664004{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card.jsx-3170664004:hover{border-color:#067df7;}.card.jsx-3170664004 h3.jsx-3170664004{margin:0;color:#067df7;font-size:18px;}.card.jsx-3170664004 p.jsx-3170664004{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxNeSBQcm9qZWN0c1xcc2hhcmVzLXNhdmVyLWNhbGN1bGF0b3JcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRGtCLEFBR3NCLEFBSUYsQUFRUyxBQUdGLEFBT08sQUFRRixBQUdaLEFBS0EsU0FqQ0UsQUE2QkcsQUFLRyxFQXRDTixLQWVXLEVBSHhCLEVBUG1CLENBeUJuQixDQTdCQSxDQXFCYyxBQVlHLEdBS0EsU0FoQkMsRUFqQkMsQ0FVSixBQW1CZixHQUthLFVBaEJVLENBaUJ2QixFQWxDaUIsZUFDakIsZ0NBaUJnQixXQVJLLEdBU00seUJBQzNCLHlDQVQrQiwySEFDL0IiLCJmaWxlIjoiRDpcXE15IFByb2plY3RzXFxzaGFyZXMtc2F2ZXItY2FsY3VsYXRvclxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YSc7XG5cbmltcG9ydCBjYWxjdWxhdG9yU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9jYWxjdWxhdG9yU2VydmljZSc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtjYWxjdWxhdGlvbnMsIHNldENhbGN1bGF0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TaGFyZXMgU2F2ZXIgQ2FsY3VsYXRvcjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlNoYXJlcyBTYXZlciBDYWxjdWxhdG9yPC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICBDaG9vc2UgYSBzYXZlciBwbGFuIGFuZCBlbnRlciB5b3VyIG1vbnRobHkgc2F2aW5nIGNvbnRyaWJ1dGlvbi5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7ZGF0YS5hc3gubmFtZX1cbiAgICAgICAgPC9wPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENhbGN1bGF0aW9ucyhjYWxjdWxhdG9yU2VydmljZS5jYWxjdWxhdGUoZGF0YS5hc3gsIDEwMCkpfT5cbiAgICAgICAgICBDYWxjdWxhdGVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XG4gICAgICAgICAgICA8dGg+VHlwZTwvdGg+XG4gICAgICAgICAgICA8dGg+U2hhcmVzIENoYW5nZTwvdGg+XG4gICAgICAgICAgICA8dGg+VG90YWwgU2hhcmVzPC90aD5cbiAgICAgICAgICAgIDx0aD5Ub3RhbCBEZXBvc2l0ZWQ8L3RoPlxuICAgICAgICAgICAgPHRoPldvcnRoPC90aD5cbiAgICAgICAgICAgIDx0aD5Hcm93dGg8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgeyBjYWxjdWxhdGlvbnMubWFwKGNhbGN1bGF0aW9uID0+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPkRhdGU8L3RkPlxuICAgICAgICAgICAgPHRkPlR5cGU8L3RkPlxuICAgICAgICAgICAgPHRkPlNoYXJlcyBDaGFuZ2U8L3RkPlxuICAgICAgICAgICAgPHRkPlRvdGFsIFNoYXJlczwvdGQ+XG4gICAgICAgICAgICA8dGQ+VG90YWwgRGVwb3NpdGVkPC90ZD5cbiAgICAgICAgICAgIDx0ZD5Xb3J0aDwvdGQ+XG4gICAgICAgICAgICA8dGQ+R3Jvd3RoPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICApfVxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhlcm8ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUsXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5yb3cge1xuICAgICAgICAgIG1heC13aWR0aDogODgwcHg7XG4gICAgICAgICAgbWFyZ2luOiA4MHB4IGF1dG8gNDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIHBhZGRpbmc6IDE4cHggMThweCAyNHB4O1xuICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogIzQzNDM0MztcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5YjliO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkOmhvdmVyIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwNjdkZjc7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQgaDMge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjb2xvcjogIzA2N2RmNztcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDEycHggMCAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=D:\\\\My Projects\\\\shares-saver-calculator\\\\pages\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.55bb2f9df341d6c80d3c.hot-update.js.map