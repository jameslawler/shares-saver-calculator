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





var numberWithCommas = function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      calculations = _useState[0],
      setCalculations = _useState[1];

  return __jsx("div", {
    className: "jsx-1558064186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-1558064186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Shares Saver Calculator"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-1558064186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1558064186" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1558064186" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Shares Saver Calculator"), __jsx("p", {
    className: "jsx-1558064186" + " " + "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Choose a saver plan and enter your monthly saving contribution."), __jsx("div", {
    className: "jsx-1558064186" + " " + "detailsContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1558064186" + " " + "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("b", {
    className: "jsx-1558064186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Name: "), __jsx("span", {
    className: "jsx-1558064186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_3__["default"].asx.name)), __jsx("div", {
    className: "jsx-1558064186" + " " + "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("b", {
    className: "jsx-1558064186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Entry Fee: "), __jsx("span", {
    className: "jsx-1558064186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_3__["default"].asx.entryFee, "%")), __jsx("div", {
    className: "jsx-1558064186" + " " + "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("b", {
    className: "jsx-1558064186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Management Fee: "), __jsx("span", {
    className: "jsx-1558064186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_3__["default"].asx.totalExpenseRatio, "% p.a"))), __jsx("button", {
    onClick: function onClick() {
      return setCalculations(_services_calculatorService__WEBPACK_IMPORTED_MODULE_4__["default"].calculate(_data__WEBPACK_IMPORTED_MODULE_3__["default"].asx, 100));
    },
    className: "jsx-1558064186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Calculate"), calculations.length > 0 && __jsx("table", {
    className: "jsx-1558064186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-1558064186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-1558064186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Date"), __jsx("th", {
    className: "jsx-1558064186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Type"), __jsx("th", {
    className: "jsx-1558064186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Shares Change"), __jsx("th", {
    className: "jsx-1558064186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Total Shares"), __jsx("th", {
    className: "jsx-1558064186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Total Deposited"), __jsx("th", {
    className: "jsx-1558064186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Worth"), __jsx("th", {
    className: "jsx-1558064186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Growth")), calculations.map(function (calculation) {
    return __jsx("tr", {
      className: "jsx-1558064186",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-1558064186",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, calculation.date.toISOString().substr(0, 10)), __jsx("td", {
      className: "jsx-1558064186",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, calculation.type), __jsx("td", {
      className: "jsx-1558064186",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, numberWithCommas(calculation.shareChange.toFixed(2))), __jsx("td", {
      className: "jsx-1558064186",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, numberWithCommas(calculation.totalShares.toFixed(2))), __jsx("td", {
      className: "jsx-1558064186",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, numberWithCommas(calculation.totalDeposited.toFixed(2)), " euros"), __jsx("td", {
      className: "jsx-1558064186",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, numberWithCommas(calculation.worth.toFixed(2)), " euros"), __jsx("td", {
      className: "jsx-1558064186" + " " + ((calculation.growth < 0 ? 'negative' : 'positive') || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, calculation.growth.toFixed(2), "%"));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1558064186",
    __self: this
  }, ".container.jsx-1558064186{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:900px;color:#333;}.title.jsx-1558064186{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}.title.jsx-1558064186,.description.jsx-1558064186{text-align:center;}.detailsContainer.jsx-1558064186{-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}tr.jsx-1558064186:nth-child(even){background:#CCC;}tr.jsx-1558064186:nth-child(odd){background:#FFF;}td.jsx-1558064186{padding:10px;}td.negative.jsx-1558064186{background:red;font-weight:bold;}td.positive.jsx-1558064186{background:green;color:white;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxNeSBQcm9qZWN0c1xcc2hhcmVzLXNhdmVyLWNhbGN1bGF0b3JcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RGtCLEFBRzhCLEFBT1YsQUFRUyxBQUdBLEFBSWMsQUFDRCxBQUVsQixBQUdFLEFBSUUsU0F4Qk4sSUFrQmIsRUFHbUIsQ0FQZ0IsQUFDRCxDQVVwQixDQWpCZCxFQVBtQixTQXlCQSxHQUpuQixLQXBCbUIsU0F5Qm5CLFFBeEJpQixlQUNqQixvQkFPZSxJQWxCQSxzRUFtQlMsSUFsQkEsMEVBbUJ4QixJQWxCYyxZQUNELFdBQ2IiLCJmaWxlIjoiRDpcXE15IFByb2plY3RzXFxzaGFyZXMtc2F2ZXItY2FsY3VsYXRvclxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YSc7XG5cbmltcG9ydCBjYWxjdWxhdG9yU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9jYWxjdWxhdG9yU2VydmljZSc7XG5cbmNvbnN0IG51bWJlcldpdGhDb21tYXMgPSAobnVtYmVyKSA9PiBudW1iZXIudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtjYWxjdWxhdGlvbnMsIHNldENhbGN1bGF0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TaGFyZXMgU2F2ZXIgQ2FsY3VsYXRvcjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+U2hhcmVzIFNhdmVyIENhbGN1bGF0b3I8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIENob29zZSBhIHNhdmVyIHBsYW4gYW5kIGVudGVyIHlvdXIgbW9udGhseSBzYXZpbmcgY29udHJpYnV0aW9uLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc0NvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPjxiPk5hbWU6IDwvYj48c3Bhbj57ZGF0YS5hc3gubmFtZX08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+PGI+RW50cnkgRmVlOiA8L2I+PHNwYW4+e2RhdGEuYXN4LmVudHJ5RmVlfSU8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+PGI+TWFuYWdlbWVudCBGZWU6IDwvYj48c3Bhbj57ZGF0YS5hc3gudG90YWxFeHBlbnNlUmF0aW99JSBwLmE8L3NwYW4+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENhbGN1bGF0aW9ucyhjYWxjdWxhdG9yU2VydmljZS5jYWxjdWxhdGUoZGF0YS5hc3gsIDEwMCkpfT5cbiAgICAgICAgICBDYWxjdWxhdGVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIHsgY2FsY3VsYXRpb25zLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5EYXRlPC90aD5cbiAgICAgICAgICAgICAgPHRoPlR5cGU8L3RoPlxuICAgICAgICAgICAgICA8dGg+U2hhcmVzIENoYW5nZTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5Ub3RhbCBTaGFyZXM8L3RoPlxuICAgICAgICAgICAgICA8dGg+VG90YWwgRGVwb3NpdGVkPC90aD5cbiAgICAgICAgICAgICAgPHRoPldvcnRoPC90aD5cbiAgICAgICAgICAgICAgPHRoPkdyb3d0aDwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgeyBjYWxjdWxhdGlvbnMubWFwKGNhbGN1bGF0aW9uID0+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD57Y2FsY3VsYXRpb24uZGF0ZS50b0lTT1N0cmluZygpLnN1YnN0cigwLCAxMCl9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPntjYWxjdWxhdGlvbi50eXBlfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57bnVtYmVyV2l0aENvbW1hcyhjYWxjdWxhdGlvbi5zaGFyZUNoYW5nZS50b0ZpeGVkKDIpKX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e251bWJlcldpdGhDb21tYXMoY2FsY3VsYXRpb24udG90YWxTaGFyZXMudG9GaXhlZCgyKSl9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPntudW1iZXJXaXRoQ29tbWFzKGNhbGN1bGF0aW9uLnRvdGFsRGVwb3NpdGVkLnRvRml4ZWQoMikpfSBldXJvczwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57bnVtYmVyV2l0aENvbW1hcyhjYWxjdWxhdGlvbi53b3J0aC50b0ZpeGVkKDIpKX0gZXVyb3M8L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtjYWxjdWxhdGlvbi5ncm93dGggPCAwID8gJ25lZ2F0aXZlJyA6ICdwb3NpdGl2ZSd9PntjYWxjdWxhdGlvbi5ncm93dGgudG9GaXhlZCgyKX0lPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgd2lkdGg6IDkwMHB4O1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUsXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5kZXRhaWxzQ29udGFpbmVyIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIHRyOm50aC1jaGlsZChldmVuKSB7YmFja2dyb3VuZDogI0NDQ31cbiAgICAgICAgdHI6bnRoLWNoaWxkKG9kZCkge2JhY2tncm91bmQ6ICNGRkZ9XG4gICAgICAgIHRkIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIHRkLm5lZ2F0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgdGQucG9zaXRpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=D:\\\\My Projects\\\\shares-saver-calculator\\\\pages\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.e709743b6cc77757cb3a.hot-update.js.map