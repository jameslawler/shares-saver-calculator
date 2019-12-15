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
      fundKey = _useState3[0],
      setFundKey = _useState3[1];

  var funds = getFundsList();
  return __jsx("div", {
    className: "jsx-2807402063",
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
    className: "jsx-2807402063",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "ETF Saving Plan Historical Simulator"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-2807402063",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2807402063" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2807402063" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "ETF Saving Plan Historical Simulator"), __jsx("div", {
    className: "jsx-2807402063" + " " + "fundSelector",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("select", {
    value: fundKey,
    onChange: function onChange(event) {
      return setFundKey(event.target.value);
    },
    className: "jsx-2807402063",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, funds.map(function (f) {
    return __jsx("option", {
      value: f.key,
      className: "jsx-2807402063",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, f.name);
  }))), __jsx("div", {
    className: "jsx-2807402063" + " " + "detailsContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2807402063" + " " + "detailsHeadline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Fund"), __jsx("div", {
    className: "jsx-2807402063",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("b", {
    className: "jsx-2807402063",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Name: "), __jsx("span", {
    className: "jsx-2807402063",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_5__["default"][fundKey].name)), __jsx("div", {
    className: "jsx-2807402063",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("b", {
    className: "jsx-2807402063",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Entry Fee: "), __jsx("span", {
    className: "jsx-2807402063",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_5__["default"][fundKey].entryFee, "%")), __jsx("div", {
    className: "jsx-2807402063",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("b", {
    className: "jsx-2807402063",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Management Fee: "), __jsx("span", {
    className: "jsx-2807402063",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_5__["default"][fundKey].totalExpenseRatio, "% p.a"))), __jsx("div", {
    className: "jsx-2807402063" + " " + "calculationSettings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("label", {
    className: "jsx-2807402063",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Monthly Contribution:"), __jsx("input", {
    type: "number",
    value: monthlyDeposit,
    onChange: function onChange(event) {
      return setMonthlyDeposit(event.target.value);
    },
    className: "jsx-2807402063",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("button", {
    onClick: function onClick() {
      return setCalculations(_services_calculatorService__WEBPACK_IMPORTED_MODULE_6__["default"].calculate(_data__WEBPACK_IMPORTED_MODULE_5__["default"][fundKey], _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(monthlyDeposit, 10)));
    },
    className: "jsx-2807402063",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Calculate")), calculations.length > 0 && __jsx("table", {
    className: "jsx-2807402063",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-2807402063",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-2807402063",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Date"), __jsx("th", {
    className: "jsx-2807402063",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Type"), __jsx("th", {
    className: "jsx-2807402063",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Shares Change"), __jsx("th", {
    className: "jsx-2807402063",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Total Shares"), __jsx("th", {
    className: "jsx-2807402063",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Total Deposited"), __jsx("th", {
    className: "jsx-2807402063",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Worth"), __jsx("th", {
    className: "jsx-2807402063",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Growth")), calculations.map(function (calculation) {
    return __jsx("tr", {
      className: "jsx-2807402063" + " " + (calculation.type || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-2807402063",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, calculation.date.toISOString().substr(0, 10)), __jsx("td", {
      className: "jsx-2807402063",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, calculation.type, calculation.type === 'shares' ? " @ ".concat(calculation.shareAmount, " euros") : ''), __jsx("td", {
      className: "jsx-2807402063",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, calculation.shareChange > 0 ? '+' : '', numberWithCommas(calculation.shareChange.toFixed(2))), __jsx("td", {
      className: "jsx-2807402063",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, numberWithCommas(calculation.totalShares.toFixed(2))), __jsx("td", {
      className: "jsx-2807402063",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, numberWithCommas(calculation.totalDeposited.toFixed(2)), " euros"), __jsx("td", {
      className: "jsx-2807402063",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, numberWithCommas(calculation.worth.toFixed(2)), " euros"), __jsx("td", {
      className: "jsx-2807402063" + " " + ((calculation.growth < 0 ? 'negative' : 'positive') || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, calculation.growth.toFixed(2), "%"));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2807402063",
    __self: this
  }, ".container.jsx-2807402063{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:40px;width:900px;color:#333;}.title.jsx-2807402063{margin:0;width:100%;line-height:1.15;font-size:48px;}.title.jsx-2807402063,.description.jsx-2807402063{text-align:center;}.fundSelector.jsx-2807402063{padding:20px 0;}.detailsContainer.jsx-2807402063{-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.detailsHeadline.jsx-2807402063{font-size:20px;font-weight:bold;padding:15px 0;}.calculationSettings.jsx-2807402063{padding:15px 0;}.calculationSettings.jsx-2807402063 label.jsx-2807402063{padding-right:10px;}.calculationSettings.jsx-2807402063 input.jsx-2807402063{margin-right:10px;}tr.jsx-2807402063:nth-child(even){background:#CCC;}tr.jsx-2807402063:nth-child(odd){background:#FFF;}tr.management.jsx-2807402063{background:red;}tr.dividend.jsx-2807402063{background:lightblue;}td.jsx-2807402063{padding:10px;}td.negative.jsx-2807402063{background:red;font-weight:bold;}td.positive.jsx-2807402063{background:green;color:white;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxNeSBQcm9qZWN0c1xcc2hhcmVzLXNhdmVyLWNhbGN1bGF0b3JcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRWtCLEFBR3dCLEFBT0osQUFPUyxBQUdILEFBR0csQUFLSCxBQUtBLEFBR0ksQUFHRCxBQUVjLEFBQ0QsQUFFaEIsQUFHTSxBQUdSLEFBR0UsQUFJRSxTQTlDTixJQXdDYixFQTlCQSxBQVFtQixBQUtuQixBQVdBLEFBU21CLENBYmdCLEFBQ0QsQ0FnQnBCLENBeENkLEFBc0JBLENBSEEsQ0F6Qm1CLENBb0NuQixRQVdtQixHQTdCRixBQXlCakIsS0ExQ2lCLFNBK0NqQixDQTdCQSxLQWpCQSxzQkFWd0IsZUFvQlQsK0RBbkJBLFdBb0JTLEVBbkJWLFlBQ0QsV0FDYixxREFrQkEiLCJmaWxlIjoiRDpcXE15IFByb2plY3RzXFxzaGFyZXMtc2F2ZXItY2FsY3VsYXRvclxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YSc7XG5cbmltcG9ydCBjYWxjdWxhdG9yU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9jYWxjdWxhdG9yU2VydmljZSc7XG5cbmNvbnN0IGdldEZ1bmRzTGlzdCA9ICgpID0+IE9iamVjdC5rZXlzKGRhdGEpLm1hcChrZXkgPT4gKHtcbiAga2V5LFxuICBuYW1lOiBkYXRhW2tleV0ubmFtZSxcbn0pKTtcblxuY29uc3QgbnVtYmVyV2l0aENvbW1hcyA9IChudW1iZXIpID0+IG51bWJlci50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW21vbnRobHlEZXBvc2l0LCBzZXRNb250aGx5RGVwb3NpdF0gPSB1c2VTdGF0ZSgxMDApO1xuICBjb25zdCBbY2FsY3VsYXRpb25zLCBzZXRDYWxjdWxhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZnVuZEtleSwgc2V0RnVuZEtleV0gPSB1c2VTdGF0ZShPYmplY3Qua2V5cyhkYXRhKVswXSk7XG4gIGNvbnN0IGZ1bmRzID0gZ2V0RnVuZHNMaXN0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5FVEYgU2F2aW5nIFBsYW4gSGlzdG9yaWNhbCBTaW11bGF0b3I8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkVURiBTYXZpbmcgUGxhbiBIaXN0b3JpY2FsIFNpbXVsYXRvcjwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVuZFNlbGVjdG9yXCI+XG4gICAgICAgICAgPHNlbGVjdCB2YWx1ZT17ZnVuZEtleX0gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0RnVuZEtleShldmVudC50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgIHsgZnVuZHMubWFwKGYgPT4gKFxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtmLmtleX0+e2YubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzQ29udGFpbmVyXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGV0YWlsc0hlYWRsaW5lXCI+RnVuZDwvc3Bhbj5cbiAgICAgICAgICA8ZGl2PjxiPk5hbWU6IDwvYj48c3Bhbj57ZGF0YVtmdW5kS2V5XS5uYW1lfTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjxiPkVudHJ5IEZlZTogPC9iPjxzcGFuPntkYXRhW2Z1bmRLZXldLmVudHJ5RmVlfSU8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgPGRpdj48Yj5NYW5hZ2VtZW50IEZlZTogPC9iPjxzcGFuPntkYXRhW2Z1bmRLZXldLnRvdGFsRXhwZW5zZVJhdGlvfSUgcC5hPC9zcGFuPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxjdWxhdGlvblNldHRpbmdzXCI+XG4gICAgICAgICAgPGxhYmVsPk1vbnRobHkgQ29udHJpYnV0aW9uOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17bW9udGhseURlcG9zaXR9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldE1vbnRobHlEZXBvc2l0KGV2ZW50LnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDYWxjdWxhdGlvbnMoY2FsY3VsYXRvclNlcnZpY2UuY2FsY3VsYXRlKGRhdGFbZnVuZEtleV0sIHBhcnNlSW50KG1vbnRobHlEZXBvc2l0LCAxMCkpKX0+XG4gICAgICAgICAgICBDYWxjdWxhdGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsgY2FsY3VsYXRpb25zLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5EYXRlPC90aD5cbiAgICAgICAgICAgICAgPHRoPlR5cGU8L3RoPlxuICAgICAgICAgICAgICA8dGg+U2hhcmVzIENoYW5nZTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5Ub3RhbCBTaGFyZXM8L3RoPlxuICAgICAgICAgICAgICA8dGg+VG90YWwgRGVwb3NpdGVkPC90aD5cbiAgICAgICAgICAgICAgPHRoPldvcnRoPC90aD5cbiAgICAgICAgICAgICAgPHRoPkdyb3d0aDwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgeyBjYWxjdWxhdGlvbnMubWFwKGNhbGN1bGF0aW9uID0+XG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPXtjYWxjdWxhdGlvbi50eXBlfT5cbiAgICAgICAgICAgICAgPHRkPntjYWxjdWxhdGlvbi5kYXRlLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDEwKX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e2NhbGN1bGF0aW9uLnR5cGV9e2NhbGN1bGF0aW9uLnR5cGUgPT09ICdzaGFyZXMnID8gYCBAICR7Y2FsY3VsYXRpb24uc2hhcmVBbW91bnR9IGV1cm9zYCA6ICcnfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57Y2FsY3VsYXRpb24uc2hhcmVDaGFuZ2UgPiAwID8gJysnIDogJyd9e251bWJlcldpdGhDb21tYXMoY2FsY3VsYXRpb24uc2hhcmVDaGFuZ2UudG9GaXhlZCgyKSl9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPntudW1iZXJXaXRoQ29tbWFzKGNhbGN1bGF0aW9uLnRvdGFsU2hhcmVzLnRvRml4ZWQoMikpfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57bnVtYmVyV2l0aENvbW1hcyhjYWxjdWxhdGlvbi50b3RhbERlcG9zaXRlZC50b0ZpeGVkKDIpKX0gZXVyb3M8L3RkPlxuICAgICAgICAgICAgICA8dGQ+e251bWJlcldpdGhDb21tYXMoY2FsY3VsYXRpb24ud29ydGgudG9GaXhlZCgyKSl9IGV1cm9zPC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17Y2FsY3VsYXRpb24uZ3Jvd3RoIDwgMCA/ICduZWdhdGl2ZScgOiAncG9zaXRpdmUnfT57Y2FsY3VsYXRpb24uZ3Jvd3RoLnRvRml4ZWQoMil9JTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiA5MDBweDtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlLFxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZnVuZFNlbGVjdG9yIHtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmRldGFpbHNDb250YWluZXIge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgLmRldGFpbHNIZWFkbGluZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICAgICAgfVxuICAgICAgICAuY2FsY3VsYXRpb25TZXR0aW5ncyB7XG4gICAgICAgICAgcGFkZGluZzogMTVweCAwO1xuICAgICAgICB9XG4gICAgICAgIC5jYWxjdWxhdGlvblNldHRpbmdzIGxhYmVsIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYWxjdWxhdGlvblNldHRpbmdzIGlucHV0IHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kOiAjQ0NDfVxuICAgICAgICB0cjpudGgtY2hpbGQob2RkKSB7YmFja2dyb3VuZDogI0ZGRn1cbiAgICAgICAgdHIubWFuYWdlbWVudCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICB9XG4gICAgICAgIHRyLmRpdmlkZW5kIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdGQge1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgdGQubmVnYXRpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICB0ZC5wb3NpdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogZ3JlZW47XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=D:\\\\My Projects\\\\shares-saver-calculator\\\\pages\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.53b37f99cc07a807f6f2.hot-update.js.map