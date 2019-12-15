webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data */ "./data/index.js");
/* harmony import */ var _services_calculatorService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/calculatorService */ "./services/calculatorService.js");


var _jsxFileName = "D:\\My Projects\\shares-saver-calculator\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var getFundsList = function getFundsList() {
  return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(_data__WEBPACK_IMPORTED_MODULE_5__["default"]).map(function (key) {
    return {
      key: key,
      name: _data__WEBPACK_IMPORTED_MODULE_5__["default"][key].name
    };
  });
};

var numberWithCommas = function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(100),
      monthlyDeposit = _useState[0],
      setMonthlyDeposit = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      calculations = _useState2[0],
      setCalculations = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(_data__WEBPACK_IMPORTED_MODULE_5__["default"])[0]),
      fund = _useState3[0],
      setFund = _useState3[1];

  var funds = getFundsList();
  return __jsx("div", {
    className: "jsx-1517020032",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-1517020032",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "ETF Saving Plan Historical Simulator"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-1517020032",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1517020032" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1517020032" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "ETF Saving Plan Historical Simulator"), __jsx("div", {
    className: "jsx-1517020032" + " " + "detailsContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1517020032" + " " + "detailsHeadline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Fund"), __jsx("select", {
    value: fund,
    onChange: function onChange(event) {
      return setFund(event.target.value);
    },
    className: "jsx-1517020032",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, funds.map(function (fund) {
    return __jsx("option", {
      value: fund.key,
      className: "jsx-1517020032",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, fund.name);
  })), __jsx("div", {
    className: "jsx-1517020032",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("b", {
    className: "jsx-1517020032",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Name: "), __jsx("span", {
    className: "jsx-1517020032",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_5__["default"].asx.name)), __jsx("div", {
    className: "jsx-1517020032",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("b", {
    className: "jsx-1517020032",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Entry Fee: "), __jsx("span", {
    className: "jsx-1517020032",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_5__["default"].asx.entryFee, "%")), __jsx("div", {
    className: "jsx-1517020032",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("b", {
    className: "jsx-1517020032",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Management Fee: "), __jsx("span", {
    className: "jsx-1517020032",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_5__["default"].asx.totalExpenseRatio, "% p.a"))), __jsx("div", {
    className: "jsx-1517020032" + " " + "calculationSettings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("label", {
    className: "jsx-1517020032",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Monthly Contribution:"), __jsx("input", {
    type: "number",
    value: monthlyDeposit,
    onChange: function onChange(event) {
      return setMonthlyDeposit(event.target.value);
    },
    className: "jsx-1517020032",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("button", {
    onClick: function onClick() {
      return setCalculations(_services_calculatorService__WEBPACK_IMPORTED_MODULE_6__["default"].calculate(_data__WEBPACK_IMPORTED_MODULE_5__["default"].asx, _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(monthlyDeposit, 10)));
    },
    className: "jsx-1517020032",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Calculate")), calculations.length > 0 && __jsx("table", {
    className: "jsx-1517020032",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-1517020032",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-1517020032",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Date"), __jsx("th", {
    className: "jsx-1517020032",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Type"), __jsx("th", {
    className: "jsx-1517020032",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Shares Change"), __jsx("th", {
    className: "jsx-1517020032",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Total Shares"), __jsx("th", {
    className: "jsx-1517020032",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Total Deposited"), __jsx("th", {
    className: "jsx-1517020032",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Worth"), __jsx("th", {
    className: "jsx-1517020032",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Growth")), calculations.map(function (calculation) {
    return __jsx("tr", {
      className: "jsx-1517020032" + " " + (calculation.type || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-1517020032",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, calculation.date.toISOString().substr(0, 10)), __jsx("td", {
      className: "jsx-1517020032",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, calculation.type, calculation.type === 'shares' ? " @ ".concat(calculation.shareAmount, " euros") : ''), __jsx("td", {
      className: "jsx-1517020032",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, calculation.shareChange > 0 ? '+' : '', numberWithCommas(calculation.shareChange.toFixed(2))), __jsx("td", {
      className: "jsx-1517020032",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, numberWithCommas(calculation.totalShares.toFixed(2))), __jsx("td", {
      className: "jsx-1517020032",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, numberWithCommas(calculation.totalDeposited.toFixed(2)), " euros"), __jsx("td", {
      className: "jsx-1517020032",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, numberWithCommas(calculation.worth.toFixed(2)), " euros"), __jsx("td", {
      className: "jsx-1517020032" + " " + ((calculation.growth < 0 ? 'negative' : 'positive') || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, calculation.growth.toFixed(2), "%"));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1517020032",
    __self: this
  }, ".container.jsx-1517020032{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:40px;width:900px;color:#333;}.title.jsx-1517020032{margin:0;width:100%;line-height:1.15;font-size:48px;}.title.jsx-1517020032,.description.jsx-1517020032{text-align:center;}.detailsContainer.jsx-1517020032{-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.detailsHeadline.jsx-1517020032{font-size:20px;font-weight:bold;padding:15px 0;}.calculationSettings.jsx-1517020032{padding:15px 0;}.calculationSettings.jsx-1517020032 label.jsx-1517020032{padding-right:10px;}.calculationSettings.jsx-1517020032 input.jsx-1517020032{margin-right:10px;}tr.jsx-1517020032:nth-child(even){background:#CCC;}tr.jsx-1517020032:nth-child(odd){background:#FFF;}tr.management.jsx-1517020032{background:red;}tr.dividend.jsx-1517020032{background:lightblue;}td.jsx-1517020032{padding:10px;}td.negative.jsx-1517020032{background:red;font-weight:bold;}td.positive.jsx-1517020032{background:green;color:white;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxNeSBQcm9qZWN0c1xcc2hhcmVzLXNhdmVyLWNhbGN1bGF0b3JcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RWtCLEFBR3dCLEFBT0osQUFPUyxBQUdBLEFBS0gsQUFLQSxBQUdJLEFBR0QsQUFFYyxBQUNELEFBRWhCLEFBR00sQUFHUixBQUdFLEFBSUUsU0EzQ04sSUFxQ2IsRUF0Qm1CLEFBS25CLEFBV0EsQUFTbUIsQ0FiZ0IsQUFDRCxDQWdCcEIsQ0FyQ2QsQUFtQkEsQ0FIQSxDQXRCbUIsQ0FpQ25CLFFBV21CLEdBN0JGLEFBeUJqQixLQXZDaUIsU0E0Q2pCLENBN0JBLEtBZEEsc0JBVndCLGVBaUJULCtEQWhCQSxXQWlCUyxFQWhCVixZQUNELFdBQ2IscURBZUEiLCJmaWxlIjoiRDpcXE15IFByb2plY3RzXFxzaGFyZXMtc2F2ZXItY2FsY3VsYXRvclxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YSc7XG5cbmltcG9ydCBjYWxjdWxhdG9yU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9jYWxjdWxhdG9yU2VydmljZSc7XG5cbmNvbnN0IGdldEZ1bmRzTGlzdCA9ICgpID0+IE9iamVjdC5rZXlzKGRhdGEpLm1hcChrZXkgPT4gKHtcbiAga2V5LFxuICBuYW1lOiBkYXRhW2tleV0ubmFtZSxcbn0pKTtcblxuY29uc3QgbnVtYmVyV2l0aENvbW1hcyA9IChudW1iZXIpID0+IG51bWJlci50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW21vbnRobHlEZXBvc2l0LCBzZXRNb250aGx5RGVwb3NpdF0gPSB1c2VTdGF0ZSgxMDApO1xuICBjb25zdCBbY2FsY3VsYXRpb25zLCBzZXRDYWxjdWxhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZnVuZCwgc2V0RnVuZF0gPSB1c2VTdGF0ZShPYmplY3Qua2V5cyhkYXRhKVswXSk7XG4gIGNvbnN0IGZ1bmRzID0gZ2V0RnVuZHNMaXN0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5FVEYgU2F2aW5nIFBsYW4gSGlzdG9yaWNhbCBTaW11bGF0b3I8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkVURiBTYXZpbmcgUGxhbiBIaXN0b3JpY2FsIFNpbXVsYXRvcjwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc0NvbnRhaW5lclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRldGFpbHNIZWFkbGluZVwiPkZ1bmQ8L3NwYW4+XG4gICAgICAgICAgPHNlbGVjdCB2YWx1ZT17ZnVuZH0gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0RnVuZChldmVudC50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgIHsgZnVuZHMubWFwKGZ1bmQgPT4gKFxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtmdW5kLmtleX0+e2Z1bmQubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDxkaXY+PGI+TmFtZTogPC9iPjxzcGFuPntkYXRhLmFzeC5uYW1lfTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjxiPkVudHJ5IEZlZTogPC9iPjxzcGFuPntkYXRhLmFzeC5lbnRyeUZlZX0lPC9zcGFuPjwvZGl2PlxuICAgICAgICAgIDxkaXY+PGI+TWFuYWdlbWVudCBGZWU6IDwvYj48c3Bhbj57ZGF0YS5hc3gudG90YWxFeHBlbnNlUmF0aW99JSBwLmE8L3NwYW4+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGN1bGF0aW9uU2V0dGluZ3NcIj5cbiAgICAgICAgICA8bGFiZWw+TW9udGhseSBDb250cmlidXRpb246PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXttb250aGx5RGVwb3NpdH0gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0TW9udGhseURlcG9zaXQoZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENhbGN1bGF0aW9ucyhjYWxjdWxhdG9yU2VydmljZS5jYWxjdWxhdGUoZGF0YS5hc3gsIHBhcnNlSW50KG1vbnRobHlEZXBvc2l0LCAxMCkpKX0+XG4gICAgICAgICAgICBDYWxjdWxhdGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsgY2FsY3VsYXRpb25zLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5EYXRlPC90aD5cbiAgICAgICAgICAgICAgPHRoPlR5cGU8L3RoPlxuICAgICAgICAgICAgICA8dGg+U2hhcmVzIENoYW5nZTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5Ub3RhbCBTaGFyZXM8L3RoPlxuICAgICAgICAgICAgICA8dGg+VG90YWwgRGVwb3NpdGVkPC90aD5cbiAgICAgICAgICAgICAgPHRoPldvcnRoPC90aD5cbiAgICAgICAgICAgICAgPHRoPkdyb3d0aDwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgeyBjYWxjdWxhdGlvbnMubWFwKGNhbGN1bGF0aW9uID0+XG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPXtjYWxjdWxhdGlvbi50eXBlfT5cbiAgICAgICAgICAgICAgPHRkPntjYWxjdWxhdGlvbi5kYXRlLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDEwKX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e2NhbGN1bGF0aW9uLnR5cGV9e2NhbGN1bGF0aW9uLnR5cGUgPT09ICdzaGFyZXMnID8gYCBAICR7Y2FsY3VsYXRpb24uc2hhcmVBbW91bnR9IGV1cm9zYCA6ICcnfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57Y2FsY3VsYXRpb24uc2hhcmVDaGFuZ2UgPiAwID8gJysnIDogJyd9e251bWJlcldpdGhDb21tYXMoY2FsY3VsYXRpb24uc2hhcmVDaGFuZ2UudG9GaXhlZCgyKSl9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPntudW1iZXJXaXRoQ29tbWFzKGNhbGN1bGF0aW9uLnRvdGFsU2hhcmVzLnRvRml4ZWQoMikpfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57bnVtYmVyV2l0aENvbW1hcyhjYWxjdWxhdGlvbi50b3RhbERlcG9zaXRlZC50b0ZpeGVkKDIpKX0gZXVyb3M8L3RkPlxuICAgICAgICAgICAgICA8dGQ+e251bWJlcldpdGhDb21tYXMoY2FsY3VsYXRpb24ud29ydGgudG9GaXhlZCgyKSl9IGV1cm9zPC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17Y2FsY3VsYXRpb24uZ3Jvd3RoIDwgMCA/ICduZWdhdGl2ZScgOiAncG9zaXRpdmUnfT57Y2FsY3VsYXRpb24uZ3Jvd3RoLnRvRml4ZWQoMil9JTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiA5MDBweDtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlLFxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZGV0YWlsc0NvbnRhaW5lciB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICAuZGV0YWlsc0hlYWRsaW5lIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgcGFkZGluZzogMTVweCAwO1xuICAgICAgICB9XG4gICAgICAgIC5jYWxjdWxhdGlvblNldHRpbmdzIHtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNhbGN1bGF0aW9uU2V0dGluZ3MgbGFiZWwge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhbGN1bGF0aW9uU2V0dGluZ3MgaW5wdXQge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICB0cjpudGgtY2hpbGQoZXZlbikge2JhY2tncm91bmQ6ICNDQ0N9XG4gICAgICAgIHRyOm50aC1jaGlsZChvZGQpIHtiYWNrZ3JvdW5kOiAjRkZGfVxuICAgICAgICB0ci5tYW5hZ2VtZW50IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdHIuZGl2aWRlbmQge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0ZCB7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgfVxuICAgICAgICB0ZC5uZWdhdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIHRkLnBvc2l0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=D:\\\\My Projects\\\\shares-saver-calculator\\\\pages\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.058f85f19938f792cce2.hot-update.js.map