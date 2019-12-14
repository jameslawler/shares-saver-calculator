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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(100),
      monthlyDeposit = _useState[0],
      setMonthlyDeposit = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      calculations = _useState2[0],
      setCalculations = _useState2[1];

  return __jsx("div", {
    className: "jsx-1603732271",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-1603732271",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Shares Saver Calculator"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-1603732271",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1603732271" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1603732271" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Shares Saver Calculator"), __jsx("div", {
    className: "jsx-1603732271" + " " + "detailsContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1603732271" + " " + "detailsHeadline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Fund Details"), __jsx("div", {
    className: "jsx-1603732271",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("b", {
    className: "jsx-1603732271",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Name: "), __jsx("span", {
    className: "jsx-1603732271",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_3__["default"].asx.name)), __jsx("div", {
    className: "jsx-1603732271",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("b", {
    className: "jsx-1603732271",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Entry Fee: "), __jsx("span", {
    className: "jsx-1603732271",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_3__["default"].asx.entryFee, "%")), __jsx("div", {
    className: "jsx-1603732271",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("b", {
    className: "jsx-1603732271",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Management Fee: "), __jsx("span", {
    className: "jsx-1603732271",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_3__["default"].asx.totalExpenseRatio, "% p.a"))), __jsx("div", {
    className: "jsx-1603732271" + " " + "calculationSettings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("label", {
    className: "jsx-1603732271",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Monthly Contribution:"), __jsx("input", {
    type: "number",
    value: monthlyDeposit,
    onChange: function onChange(event) {
      return setMonthlyDeposit(event.target.value);
    },
    className: "jsx-1603732271",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("button", {
    onClick: function onClick() {
      return setCalculations(_services_calculatorService__WEBPACK_IMPORTED_MODULE_4__["default"].calculate(_data__WEBPACK_IMPORTED_MODULE_3__["default"].asx, monthlyDeposit));
    },
    className: "jsx-1603732271",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Calculate")), calculations.length > 0 && __jsx("table", {
    className: "jsx-1603732271",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-1603732271",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-1603732271",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Date"), __jsx("th", {
    className: "jsx-1603732271",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Type"), __jsx("th", {
    className: "jsx-1603732271",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Shares Change"), __jsx("th", {
    className: "jsx-1603732271",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Total Shares"), __jsx("th", {
    className: "jsx-1603732271",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Total Deposited"), __jsx("th", {
    className: "jsx-1603732271",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Worth"), __jsx("th", {
    className: "jsx-1603732271",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Growth")), calculations.map(function (calculation) {
    return __jsx("tr", {
      className: "jsx-1603732271" + " " + (calculation.type || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-1603732271",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, calculation.date.toISOString().substr(0, 10)), __jsx("td", {
      className: "jsx-1603732271",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, calculation.type), __jsx("td", {
      className: "jsx-1603732271",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, numberWithCommas(calculation.shareChange.toFixed(2))), __jsx("td", {
      className: "jsx-1603732271",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, numberWithCommas(calculation.totalShares.toFixed(2))), __jsx("td", {
      className: "jsx-1603732271",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, numberWithCommas(calculation.totalDeposited.toFixed(2)), " euros"), __jsx("td", {
      className: "jsx-1603732271",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, numberWithCommas(calculation.worth.toFixed(2)), " euros"), __jsx("td", {
      className: "jsx-1603732271" + " " + ((calculation.growth < 0 ? 'negative' : 'positive') || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, calculation.growth.toFixed(2), "%"));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1603732271",
    __self: this
  }, ".container.jsx-1603732271{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:40px;width:900px;color:#333;}.title.jsx-1603732271{margin:0;width:100%;line-height:1.15;font-size:48px;}.title.jsx-1603732271,.description.jsx-1603732271{text-align:center;}.detailsContainer.jsx-1603732271{-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.detailsHeadline.jsx-1603732271{font-size:20px;font-weight:bold;padding:15px 0;}.calculationSettings.jsx-1603732271{padding:15px 0;}.calculationSettings.jsx-1603732271 label.jsx-1603732271{padding-right:10px;}.calculationSettings.jsx-1603732271 input.jsx-1603732271{padding-right:10px;}tr.jsx-1603732271:nth-child(even){background:#CCC;}tr.jsx-1603732271:nth-child(odd){background:#FFF;}tr.management.jsx-1603732271{background:red;}tr.dividend.jsx-1603732271{background:lightblue;}td.jsx-1603732271{padding:10px;}td.negative.jsx-1603732271{background:red;font-weight:bold;}td.positive.jsx-1603732271{background:green;color:white;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxNeSBQcm9qZWN0c1xcc2hhcmVzLXNhdmVyLWNhbGN1bGF0b3JcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RGtCLEFBR3dCLEFBT0osQUFPUyxBQUdBLEFBS0gsQUFLQSxBQUdJLEFBR0EsQUFFYSxBQUNELEFBRWhCLEFBR00sQUFHUixBQUdFLEFBSUUsU0EzQ04sSUFxQ2IsRUF0Qm1CLEFBS25CLEFBV0EsQUFTbUIsQ0FiZ0IsQUFDRCxDQWdCcEIsQ0FyQ2QsQ0FnQkEsQUFHQSxDQXpCbUIsQ0FpQ25CLFFBV21CLEdBN0JGLEFBeUJqQixLQXZDaUIsU0E0Q2pCLENBN0JBLEtBZEEsc0JBVndCLGVBaUJULCtEQWhCQSxXQWlCUyxFQWhCVixZQUNELFdBQ2IscURBZUEiLCJmaWxlIjoiRDpcXE15IFByb2plY3RzXFxzaGFyZXMtc2F2ZXItY2FsY3VsYXRvclxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YSc7XG5cbmltcG9ydCBjYWxjdWxhdG9yU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9jYWxjdWxhdG9yU2VydmljZSc7XG5cbmNvbnN0IG51bWJlcldpdGhDb21tYXMgPSAobnVtYmVyKSA9PiBudW1iZXIudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFttb250aGx5RGVwb3NpdCwgc2V0TW9udGhseURlcG9zaXRdID0gdXNlU3RhdGUoMTAwKTtcbiAgY29uc3QgW2NhbGN1bGF0aW9ucywgc2V0Q2FsY3VsYXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNoYXJlcyBTYXZlciBDYWxjdWxhdG9yPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5TaGFyZXMgU2F2ZXIgQ2FsY3VsYXRvcjwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc0NvbnRhaW5lclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRldGFpbHNIZWFkbGluZVwiPkZ1bmQgRGV0YWlsczwvc3Bhbj5cbiAgICAgICAgICA8ZGl2PjxiPk5hbWU6IDwvYj48c3Bhbj57ZGF0YS5hc3gubmFtZX08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgPGRpdj48Yj5FbnRyeSBGZWU6IDwvYj48c3Bhbj57ZGF0YS5hc3guZW50cnlGZWV9JTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjxiPk1hbmFnZW1lbnQgRmVlOiA8L2I+PHNwYW4+e2RhdGEuYXN4LnRvdGFsRXhwZW5zZVJhdGlvfSUgcC5hPC9zcGFuPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxjdWxhdGlvblNldHRpbmdzXCI+XG4gICAgICAgICAgPGxhYmVsPk1vbnRobHkgQ29udHJpYnV0aW9uOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17bW9udGhseURlcG9zaXR9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldE1vbnRobHlEZXBvc2l0KGV2ZW50LnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDYWxjdWxhdGlvbnMoY2FsY3VsYXRvclNlcnZpY2UuY2FsY3VsYXRlKGRhdGEuYXN4LCBtb250aGx5RGVwb3NpdCkpfT5cbiAgICAgICAgICAgIENhbGN1bGF0ZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyBjYWxjdWxhdGlvbnMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPkRhdGU8L3RoPlxuICAgICAgICAgICAgICA8dGg+VHlwZTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5TaGFyZXMgQ2hhbmdlPC90aD5cbiAgICAgICAgICAgICAgPHRoPlRvdGFsIFNoYXJlczwvdGg+XG4gICAgICAgICAgICAgIDx0aD5Ub3RhbCBEZXBvc2l0ZWQ8L3RoPlxuICAgICAgICAgICAgICA8dGg+V29ydGg8L3RoPlxuICAgICAgICAgICAgICA8dGg+R3Jvd3RoPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICB7IGNhbGN1bGF0aW9ucy5tYXAoY2FsY3VsYXRpb24gPT5cbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9e2NhbGN1bGF0aW9uLnR5cGV9PlxuICAgICAgICAgICAgICA8dGQ+e2NhbGN1bGF0aW9uLmRhdGUudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgMTApfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57Y2FsY3VsYXRpb24udHlwZX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e251bWJlcldpdGhDb21tYXMoY2FsY3VsYXRpb24uc2hhcmVDaGFuZ2UudG9GaXhlZCgyKSl9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPntudW1iZXJXaXRoQ29tbWFzKGNhbGN1bGF0aW9uLnRvdGFsU2hhcmVzLnRvRml4ZWQoMikpfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57bnVtYmVyV2l0aENvbW1hcyhjYWxjdWxhdGlvbi50b3RhbERlcG9zaXRlZC50b0ZpeGVkKDIpKX0gZXVyb3M8L3RkPlxuICAgICAgICAgICAgICA8dGQ+e251bWJlcldpdGhDb21tYXMoY2FsY3VsYXRpb24ud29ydGgudG9GaXhlZCgyKSl9IGV1cm9zPC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17Y2FsY3VsYXRpb24uZ3Jvd3RoIDwgMCA/ICduZWdhdGl2ZScgOiAncG9zaXRpdmUnfT57Y2FsY3VsYXRpb24uZ3Jvd3RoLnRvRml4ZWQoMil9JTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiA5MDBweDtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlLFxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZGV0YWlsc0NvbnRhaW5lciB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICAuZGV0YWlsc0hlYWRsaW5lIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgcGFkZGluZzogMTVweCAwO1xuICAgICAgICB9XG4gICAgICAgIC5jYWxjdWxhdGlvblNldHRpbmdzIHtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNhbGN1bGF0aW9uU2V0dGluZ3MgbGFiZWwge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhbGN1bGF0aW9uU2V0dGluZ3MgaW5wdXQge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kOiAjQ0NDfVxuICAgICAgICB0cjpudGgtY2hpbGQob2RkKSB7YmFja2dyb3VuZDogI0ZGRn1cbiAgICAgICAgdHIubWFuYWdlbWVudCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICB9XG4gICAgICAgIHRyLmRpdmlkZW5kIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdGQge1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgdGQubmVnYXRpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICB0ZC5wb3NpdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogZ3JlZW47XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=D:\\\\My Projects\\\\shares-saver-calculator\\\\pages\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.803ceda0079b7e801bed.hot-update.js.map