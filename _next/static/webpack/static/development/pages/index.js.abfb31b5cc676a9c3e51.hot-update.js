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
    className: "jsx-3976674154",
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
    className: "jsx-3976674154",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Shares Saver Calculator"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-3976674154",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3976674154" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3976674154" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Shares Saver Calculator"), __jsx("p", {
    className: "jsx-3976674154" + " " + "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Choose a saver plan and enter your monthly saving contribution."), __jsx("div", {
    className: "jsx-3976674154" + " " + "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("b", {
    className: "jsx-3976674154",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Name: "), __jsx("span", {
    className: "jsx-3976674154",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_3__["default"].asx.name)), __jsx("div", {
    className: "jsx-3976674154" + " " + "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("b", {
    className: "jsx-3976674154",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Entry Fee: "), __jsx("span", {
    className: "jsx-3976674154",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_3__["default"].asx.entryFee, "%")), __jsx("div", {
    className: "jsx-3976674154" + " " + "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("b", {
    className: "jsx-3976674154",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Management Fee: "), __jsx("span", {
    className: "jsx-3976674154",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_3__["default"].asx.totalExpenseRatio, "% p.a")), __jsx("button", {
    onClick: function onClick() {
      return setCalculations(_services_calculatorService__WEBPACK_IMPORTED_MODULE_4__["default"].calculate(_data__WEBPACK_IMPORTED_MODULE_3__["default"].asx, 100));
    },
    className: "jsx-3976674154",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Calculate"), calculations.length > 0 && __jsx("table", {
    className: "jsx-3976674154",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-3976674154",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-3976674154",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Date"), __jsx("th", {
    className: "jsx-3976674154",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Type"), __jsx("th", {
    className: "jsx-3976674154",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Shares Change"), __jsx("th", {
    className: "jsx-3976674154",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Total Shares"), __jsx("th", {
    className: "jsx-3976674154",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Total Deposited"), __jsx("th", {
    className: "jsx-3976674154",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Worth"), __jsx("th", {
    className: "jsx-3976674154",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Growth")), calculations.map(function (calculation) {
    return __jsx("tr", {
      className: "jsx-3976674154",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-3976674154",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, calculation.date.toISOString().substr(0, 10)), __jsx("td", {
      className: "jsx-3976674154",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, calculation.type), __jsx("td", {
      className: "jsx-3976674154",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, numberWithCommas(calculation.shareChange.toFixed(2))), __jsx("td", {
      className: "jsx-3976674154",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, numberWithCommas(calculation.totalShares.toFixed(2))), __jsx("td", {
      className: "jsx-3976674154",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, numberWithCommas(calculation.totalDeposited.toFixed(2)), " euros"), __jsx("td", {
      className: "jsx-3976674154",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, numberWithCommas(calculation.worth.toFixed(2)), " euros"), __jsx("td", {
      className: "jsx-3976674154" + " " + ((calculation.growth < 0 ? 'negative' : 'positive') || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, calculation.growth.toFixed(2), "%"));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3976674154",
    __self: this
  }, ".container.jsx-3976674154{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:900px;color:#333;}.title.jsx-3976674154{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}.title.jsx-3976674154,.description.jsx-3976674154{text-align:center;}tr.jsx-3976674154:nth-child(even){background:#CCC;}tr.jsx-3976674154:nth-child(odd){background:#FFF;}td.jsx-3976674154{padding:10px;}td.negative.jsx-3976674154{background:red;font-weight:bold;}td.positive.jsx-3976674154{background:green;color:white;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxNeSBQcm9qZWN0c1xcc2hhcmVzLXNhdmVyLWNhbGN1bGF0b3JcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RGtCLEFBRzhCLEFBT1YsQUFRUyxBQUtjLEFBQ0QsQUFFbEIsQUFHRSxBQUlFLFNBdEJOLElBZ0JiLEVBR21CLENBUGdCLEFBQ0QsQ0FVcEIsQ0FmZCxFQVBtQixTQXVCQSxHQUpuQixLQWxCbUIsU0F1Qm5CLFFBdEJpQixlQUNqQix3QkFYZSwwRUFDUyw4RUFDVixZQUNELFdBQ2IiLCJmaWxlIjoiRDpcXE15IFByb2plY3RzXFxzaGFyZXMtc2F2ZXItY2FsY3VsYXRvclxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YSc7XG5cbmltcG9ydCBjYWxjdWxhdG9yU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9jYWxjdWxhdG9yU2VydmljZSc7XG5cbmNvbnN0IG51bWJlcldpdGhDb21tYXMgPSAobnVtYmVyKSA9PiBudW1iZXIudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtjYWxjdWxhdGlvbnMsIHNldENhbGN1bGF0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TaGFyZXMgU2F2ZXIgQ2FsY3VsYXRvcjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+U2hhcmVzIFNhdmVyIENhbGN1bGF0b3I8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIENob29zZSBhIHNhdmVyIHBsYW4gYW5kIGVudGVyIHlvdXIgbW9udGhseSBzYXZpbmcgY29udHJpYnV0aW9uLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPjxiPk5hbWU6IDwvYj48c3Bhbj57ZGF0YS5hc3gubmFtZX08L3NwYW4+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPjxiPkVudHJ5IEZlZTogPC9iPjxzcGFuPntkYXRhLmFzeC5lbnRyeUZlZX0lPC9zcGFuPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj48Yj5NYW5hZ2VtZW50IEZlZTogPC9iPjxzcGFuPntkYXRhLmFzeC50b3RhbEV4cGVuc2VSYXRpb30lIHAuYTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDYWxjdWxhdGlvbnMoY2FsY3VsYXRvclNlcnZpY2UuY2FsY3VsYXRlKGRhdGEuYXN4LCAxMDApKX0+XG4gICAgICAgICAgQ2FsY3VsYXRlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7IGNhbGN1bGF0aW9ucy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5UeXBlPC90aD5cbiAgICAgICAgICAgICAgPHRoPlNoYXJlcyBDaGFuZ2U8L3RoPlxuICAgICAgICAgICAgICA8dGg+VG90YWwgU2hhcmVzPC90aD5cbiAgICAgICAgICAgICAgPHRoPlRvdGFsIERlcG9zaXRlZDwvdGg+XG4gICAgICAgICAgICAgIDx0aD5Xb3J0aDwvdGg+XG4gICAgICAgICAgICAgIDx0aD5Hcm93dGg8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIHsgY2FsY3VsYXRpb25zLm1hcChjYWxjdWxhdGlvbiA9PlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+e2NhbGN1bGF0aW9uLmRhdGUudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgMTApfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57Y2FsY3VsYXRpb24udHlwZX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e251bWJlcldpdGhDb21tYXMoY2FsY3VsYXRpb24uc2hhcmVDaGFuZ2UudG9GaXhlZCgyKSl9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPntudW1iZXJXaXRoQ29tbWFzKGNhbGN1bGF0aW9uLnRvdGFsU2hhcmVzLnRvRml4ZWQoMikpfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57bnVtYmVyV2l0aENvbW1hcyhjYWxjdWxhdGlvbi50b3RhbERlcG9zaXRlZC50b0ZpeGVkKDIpKX0gZXVyb3M8L3RkPlxuICAgICAgICAgICAgICA8dGQ+e251bWJlcldpdGhDb21tYXMoY2FsY3VsYXRpb24ud29ydGgudG9GaXhlZCgyKSl9IGV1cm9zPC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17Y2FsY3VsYXRpb24uZ3Jvd3RoIDwgMCA/ICduZWdhdGl2ZScgOiAncG9zaXRpdmUnfT57Y2FsY3VsYXRpb24uZ3Jvd3RoLnRvRml4ZWQoMil9JTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHdpZHRoOiA5MDBweDtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlLFxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZGV0YWlscyB7XG5cbiAgICAgICAgfVxuICAgICAgICB0cjpudGgtY2hpbGQoZXZlbikge2JhY2tncm91bmQ6ICNDQ0N9XG4gICAgICAgIHRyOm50aC1jaGlsZChvZGQpIHtiYWNrZ3JvdW5kOiAjRkZGfVxuICAgICAgICB0ZCB7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgfVxuICAgICAgICB0ZC5uZWdhdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIHRkLnBvc2l0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=D:\\\\My Projects\\\\shares-saver-calculator\\\\pages\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.abfb31b5cc676a9c3e51.hot-update.js.map