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
    className: "jsx-3680424676",
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
    className: "jsx-3680424676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "ETF Saving Plan Historical Simulator"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-3680424676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3680424676" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3680424676" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "ETF Saving Plan Historical Simulator"), __jsx("div", {
    className: "jsx-3680424676" + " " + "detailsContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3680424676" + " " + "detailsHeadline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Fund"), __jsx("div", {
    className: "jsx-3680424676" + " " + "fundSelector",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("select", {
    value: fundKey,
    onChange: function onChange(event) {
      return setFundKey(event.target.value);
    },
    className: "jsx-3680424676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, funds.map(function (f) {
    return __jsx("option", {
      value: f.key,
      className: "jsx-3680424676",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, f.name);
  }))), __jsx("div", {
    className: "jsx-3680424676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("b", {
    className: "jsx-3680424676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Name: "), __jsx("span", {
    className: "jsx-3680424676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_5__["default"][fundKey].name)), __jsx("div", {
    className: "jsx-3680424676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("b", {
    className: "jsx-3680424676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Entry Fee: "), __jsx("span", {
    className: "jsx-3680424676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_5__["default"][fundKey].entryFee, "%")), __jsx("div", {
    className: "jsx-3680424676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("b", {
    className: "jsx-3680424676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Management Fee: "), __jsx("span", {
    className: "jsx-3680424676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_5__["default"][fundKey].totalExpenseRatio, "% p.a"))), __jsx("div", {
    className: "jsx-3680424676" + " " + "calculationSettings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("label", {
    className: "jsx-3680424676",
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
    className: "jsx-3680424676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("button", {
    onClick: function onClick() {
      return setCalculations(_services_calculatorService__WEBPACK_IMPORTED_MODULE_6__["default"].calculate(_data__WEBPACK_IMPORTED_MODULE_5__["default"][fundKey], _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(monthlyDeposit, 10)));
    },
    className: "jsx-3680424676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Calculate")), calculations.length > 0 && __jsx("table", {
    className: "jsx-3680424676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-3680424676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-3680424676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Date"), __jsx("th", {
    className: "jsx-3680424676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Type"), __jsx("th", {
    className: "jsx-3680424676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Shares Change"), __jsx("th", {
    className: "jsx-3680424676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Total Shares"), __jsx("th", {
    className: "jsx-3680424676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Total Deposited"), __jsx("th", {
    className: "jsx-3680424676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Worth"), __jsx("th", {
    className: "jsx-3680424676",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Growth")), calculations.map(function (calculation) {
    return __jsx("tr", {
      className: "jsx-3680424676" + " " + (calculation.type || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-3680424676",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, calculation.date.toISOString().substr(0, 10)), __jsx("td", {
      className: "jsx-3680424676",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, calculation.type, calculation.type === 'shares' ? " @ ".concat(calculation.shareAmount, " euros") : ''), __jsx("td", {
      className: "jsx-3680424676",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, calculation.shareChange > 0 ? '+' : '', numberWithCommas(calculation.shareChange.toFixed(2))), __jsx("td", {
      className: "jsx-3680424676",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, numberWithCommas(calculation.totalShares.toFixed(2))), __jsx("td", {
      className: "jsx-3680424676",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, numberWithCommas(calculation.totalDeposited.toFixed(2)), " euros"), __jsx("td", {
      className: "jsx-3680424676",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, numberWithCommas(calculation.worth.toFixed(2)), " euros"), __jsx("td", {
      className: "jsx-3680424676" + " " + ((calculation.growth < 0 ? 'negative' : 'positive') || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, calculation.growth.toFixed(2), "%"));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3680424676",
    __self: this
  }, ".container.jsx-3680424676{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:40px;width:900px;color:#333;}.title.jsx-3680424676{margin:0;width:100%;line-height:1.15;font-size:48px;}.title.jsx-3680424676,.description.jsx-3680424676{text-align:center;}.fundSelector.jsx-3680424676{padding:10px 0 20px 0;}.detailsContainer.jsx-3680424676{-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.detailsHeadline.jsx-3680424676{font-size:20px;font-weight:bold;padding:15px 0;}.calculationSettings.jsx-3680424676{padding:15px 0;}.calculationSettings.jsx-3680424676 label.jsx-3680424676{padding-right:10px;}.calculationSettings.jsx-3680424676 input.jsx-3680424676{margin-right:10px;}tr.jsx-3680424676:nth-child(even){background:#CCC;}tr.jsx-3680424676:nth-child(odd){background:#FFF;}tr.management.jsx-3680424676{background:red;}tr.dividend.jsx-3680424676{background:lightblue;}td.jsx-3680424676{padding:10px;}td.negative.jsx-3680424676{background:red;font-weight:bold;}td.positive.jsx-3680424676{background:green;color:white;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxNeSBQcm9qZWN0c1xcc2hhcmVzLXNhdmVyLWNhbGN1bGF0b3JcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRWtCLEFBR3dCLEFBT0osQUFPUyxBQUdJLEFBR0osQUFLSCxBQUtBLEFBR0ksQUFHRCxBQUVjLEFBQ0QsQUFFaEIsQUFHTSxBQUdSLEFBR0UsQUFJRSxTQTlDTixJQXdDYixFQXRCbUIsQUFLbkIsQUFXQSxBQVNtQixDQWJnQixBQUNELENBZ0JwQixDQXhDZCxBQXNCQSxDQUhBLENBekJtQixDQW9DbkIsQ0EzQkEsT0FzQ21CLEdBN0JGLEFBeUJqQixLQTFDaUIsU0ErQ2pCLENBN0JBLEtBakJBLHNCQVZ3QixlQW9CVCwrREFuQkEsV0FvQlMsRUFuQlYsWUFDRCxXQUNiLHFEQWtCQSIsImZpbGUiOiJEOlxcTXkgUHJvamVjdHNcXHNoYXJlcy1zYXZlci1jYWxjdWxhdG9yXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5pbXBvcnQgZGF0YSBmcm9tICcuLi9kYXRhJztcblxuaW1wb3J0IGNhbGN1bGF0b3JTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL2NhbGN1bGF0b3JTZXJ2aWNlJztcblxuY29uc3QgZ2V0RnVuZHNMaXN0ID0gKCkgPT4gT2JqZWN0LmtleXMoZGF0YSkubWFwKGtleSA9PiAoe1xuICBrZXksXG4gIG5hbWU6IGRhdGFba2V5XS5uYW1lLFxufSkpO1xuXG5jb25zdCBudW1iZXJXaXRoQ29tbWFzID0gKG51bWJlcikgPT4gbnVtYmVyLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbbW9udGhseURlcG9zaXQsIHNldE1vbnRobHlEZXBvc2l0XSA9IHVzZVN0YXRlKDEwMCk7XG4gIGNvbnN0IFtjYWxjdWxhdGlvbnMsIHNldENhbGN1bGF0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmdW5kS2V5LCBzZXRGdW5kS2V5XSA9IHVzZVN0YXRlKE9iamVjdC5rZXlzKGRhdGEpWzBdKTtcbiAgY29uc3QgZnVuZHMgPSBnZXRGdW5kc0xpc3QoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkVURiBTYXZpbmcgUGxhbiBIaXN0b3JpY2FsIFNpbXVsYXRvcjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+RVRGIFNhdmluZyBQbGFuIEhpc3RvcmljYWwgU2ltdWxhdG9yPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzQ29udGFpbmVyXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGV0YWlsc0hlYWRsaW5lXCI+RnVuZDwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bmRTZWxlY3RvclwiPlxuICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17ZnVuZEtleX0gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0RnVuZEtleShldmVudC50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgICAgeyBmdW5kcy5tYXAoZiA9PiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Zi5rZXl9PntmLm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj48Yj5OYW1lOiA8L2I+PHNwYW4+e2RhdGFbZnVuZEtleV0ubmFtZX08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgPGRpdj48Yj5FbnRyeSBGZWU6IDwvYj48c3Bhbj57ZGF0YVtmdW5kS2V5XS5lbnRyeUZlZX0lPC9zcGFuPjwvZGl2PlxuICAgICAgICAgIDxkaXY+PGI+TWFuYWdlbWVudCBGZWU6IDwvYj48c3Bhbj57ZGF0YVtmdW5kS2V5XS50b3RhbEV4cGVuc2VSYXRpb30lIHAuYTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsY3VsYXRpb25TZXR0aW5nc1wiPlxuICAgICAgICAgIDxsYWJlbD5Nb250aGx5IENvbnRyaWJ1dGlvbjo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e21vbnRobHlEZXBvc2l0fSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRNb250aGx5RGVwb3NpdChldmVudC50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q2FsY3VsYXRpb25zKGNhbGN1bGF0b3JTZXJ2aWNlLmNhbGN1bGF0ZShkYXRhW2Z1bmRLZXldLCBwYXJzZUludChtb250aGx5RGVwb3NpdCwgMTApKSl9PlxuICAgICAgICAgICAgQ2FsY3VsYXRlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7IGNhbGN1bGF0aW9ucy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5UeXBlPC90aD5cbiAgICAgICAgICAgICAgPHRoPlNoYXJlcyBDaGFuZ2U8L3RoPlxuICAgICAgICAgICAgICA8dGg+VG90YWwgU2hhcmVzPC90aD5cbiAgICAgICAgICAgICAgPHRoPlRvdGFsIERlcG9zaXRlZDwvdGg+XG4gICAgICAgICAgICAgIDx0aD5Xb3J0aDwvdGg+XG4gICAgICAgICAgICAgIDx0aD5Hcm93dGg8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIHsgY2FsY3VsYXRpb25zLm1hcChjYWxjdWxhdGlvbiA9PlxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT17Y2FsY3VsYXRpb24udHlwZX0+XG4gICAgICAgICAgICAgIDx0ZD57Y2FsY3VsYXRpb24uZGF0ZS50b0lTT1N0cmluZygpLnN1YnN0cigwLCAxMCl9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPntjYWxjdWxhdGlvbi50eXBlfXtjYWxjdWxhdGlvbi50eXBlID09PSAnc2hhcmVzJyA/IGAgQCAke2NhbGN1bGF0aW9uLnNoYXJlQW1vdW50fSBldXJvc2AgOiAnJ308L3RkPlxuICAgICAgICAgICAgICA8dGQ+e2NhbGN1bGF0aW9uLnNoYXJlQ2hhbmdlID4gMCA/ICcrJyA6ICcnfXtudW1iZXJXaXRoQ29tbWFzKGNhbGN1bGF0aW9uLnNoYXJlQ2hhbmdlLnRvRml4ZWQoMikpfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57bnVtYmVyV2l0aENvbW1hcyhjYWxjdWxhdGlvbi50b3RhbFNoYXJlcy50b0ZpeGVkKDIpKX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e251bWJlcldpdGhDb21tYXMoY2FsY3VsYXRpb24udG90YWxEZXBvc2l0ZWQudG9GaXhlZCgyKSl9IGV1cm9zPC90ZD5cbiAgICAgICAgICAgICAgPHRkPntudW1iZXJXaXRoQ29tbWFzKGNhbGN1bGF0aW9uLndvcnRoLnRvRml4ZWQoMikpfSBldXJvczwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2NhbGN1bGF0aW9uLmdyb3d0aCA8IDAgPyAnbmVnYXRpdmUnIDogJ3Bvc2l0aXZlJ30+e2NhbGN1bGF0aW9uLmdyb3d0aC50b0ZpeGVkKDIpfSU8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgICAgICB3aWR0aDogOTAwcHg7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZSxcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmZ1bmRTZWxlY3RvciB7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAwIDIwcHggMDtcbiAgICAgICAgfVxuICAgICAgICAuZGV0YWlsc0NvbnRhaW5lciB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICAuZGV0YWlsc0hlYWRsaW5lIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgcGFkZGluZzogMTVweCAwO1xuICAgICAgICB9XG4gICAgICAgIC5jYWxjdWxhdGlvblNldHRpbmdzIHtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNhbGN1bGF0aW9uU2V0dGluZ3MgbGFiZWwge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhbGN1bGF0aW9uU2V0dGluZ3MgaW5wdXQge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICB0cjpudGgtY2hpbGQoZXZlbikge2JhY2tncm91bmQ6ICNDQ0N9XG4gICAgICAgIHRyOm50aC1jaGlsZChvZGQpIHtiYWNrZ3JvdW5kOiAjRkZGfVxuICAgICAgICB0ci5tYW5hZ2VtZW50IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdHIuZGl2aWRlbmQge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0ZCB7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgfVxuICAgICAgICB0ZC5uZWdhdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIHRkLnBvc2l0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=D:\\\\My Projects\\\\shares-saver-calculator\\\\pages\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.8317919cfd41a0e82909.hot-update.js.map