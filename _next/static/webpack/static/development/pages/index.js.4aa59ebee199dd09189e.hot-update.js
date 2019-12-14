webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./services/calculatorService.js":
/*!***************************************!*\
  !*** ./services/calculatorService.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getDividend = function getDividend(dividends, date) {
  return dividends && dividends.find(function (div) {
    return div[0] === date;
  });
};

var calculate = function calculate(fund, monthlyContribution) {
  var prices = fund.prices,
      dividends = fund.dividends,
      entryFee = fund.entryFee,
      totalExpenseRatio = fund.totalExpenseRatio;
  var monthlyDeposit = monthlyContribution * ((100 - entryFee) / 100);
  var totalDeposited = 0;
  var totalShares = 0;
  var calculations = [];
  prices.forEach(function (price) {
    var date = new Date(price[0]);
    var amount = price[1];
    var sharesToBuy = monthlyDeposit / amount;
    totalDeposited += monthlyDeposit;
    totalShares += sharesToBuy;
    var dividend = getDividend(dividends, price[0]);

    if (dividend) {
      var dividendAmount = dividend[1] * totalShares;
      var dividendShares = dividendAmount / amount;
      totalShares += dividendShares;
      calculations.push({
        type: 'dividend',
        date: date,
        shareChange: dividendShares,
        totalShares: totalShares,
        totalDeposited: totalDeposited,
        worth: totalShares * amount,
        growth: totalShares * amount / totalDeposited * 100 - 100
      });
    }

    if (date.getDate() === 1) {
      calculations.push({
        type: 'shares',
        date: date,
        shareChange: sharesToBuy,
        totalShares: totalShares,
        totalDeposited: totalDeposited,
        worth: totalShares * amount,
        growth: totalShares * amount / totalDeposited * 100 - 100
      });
    }

    if (date.getMonth() === 0) {
      var managementFee = totalShares * (totalExpenseRatio / 100);
      totalShares *= (100 - totalExpenseRatio) / 100;
      calculations.push({
        type: 'management',
        date: date,
        shareChange: managementFee,
        totalShares: totalShares,
        totalDeposited: totalDeposited,
        worth: totalShares * amount,
        growth: totalShares * amount / totalDeposited * 100 - 100
      });
    }
  });
  return calculations;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  calculate: calculate
});

/***/ })

})
//# sourceMappingURL=index.js.4aa59ebee199dd09189e.hot-update.js.map