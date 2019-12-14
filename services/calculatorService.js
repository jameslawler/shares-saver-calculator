const getDividend = (dividends, date) =>
  dividends && dividends.find(div => div[0] === date);

const calculate = (fund, monthlyContribution) => {
  const { prices, dividends, entryFee, totalExpenseRatio } = fund;
  const monthlyDeposit = monthlyContribution * ((100 - entryFee) / 100);
  let totalDeposited = 0;
  let totalShares = 0;
  const calculations = [];

  prices.forEach(price => {
    const date = new Date(price[0]);
    const amount = price[1];
    const sharesToBuy = monthlyDeposit / amount;
  
    totalDeposited += monthlyContribution;
    totalShares += sharesToBuy;
  
    const dividend = getDividend(dividends, price[0]);
  
    if (dividend) {
      const dividendAmount = dividend[1] * totalShares;
      const dividendShares = dividendAmount / amount;
      totalShares += dividendShares;
      calculations.push({
        type: 'dividend',
        date,
        shareAmount: amount,
        shareChange: dividendShares,
        totalShares,
        totalDeposited,
        worth: totalShares * amount,
        growth: (totalShares * amount) / totalDeposited * 100 - 100,
      });
    }
  
    if (date.getDate() === 1) {
      calculations.push({
        type: 'shares',
        date,
        shareAmount: amount,
        shareChange: sharesToBuy,
        totalShares,
        totalDeposited,
        worth: totalShares * amount,
        growth: (totalShares * amount) / totalDeposited * 100 - 100,
      });
    }
  
    if (date.getMonth() === 0) {
      const managementFee = totalShares * (totalExpenseRatio / 100);
      totalShares *= ((100 - totalExpenseRatio) / 100);
      calculations.push({
        type: 'management',
        date,
        shareAmount: amount,
        shareChange: 0 - managementFee,
        totalShares,
        totalDeposited,
        worth: totalShares * amount,
        growth: (totalShares * amount) / totalDeposited * 100 - 100,
      });
    }
  });

  return calculations;
}

export default {
  calculate,
};
