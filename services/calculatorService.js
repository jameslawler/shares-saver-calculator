const createItems = (fund) => {
  const { prices, dividends, totalExpenseRatio } = fund;
  const managementFeePaymentDate = new Date(prices[0].date);
  managementFeePaymentDate.setMonth(managementFeePaymentDate.getMonth() - 1);

  const managementFees = prices.reduce((acc, item) => {
    const itemDate = new Date(item.date);

    return itemDate.getMonth() === managementFeePaymentDate.getMonth()
      ? [
          ...acc,
          {
            date: item.date,
            price: item.price,
            totalExpenseRatio,
          },
        ]
      : acc;
  }, []);

  return [
    ...prices.map((item) => ({
      ...item,
      type: "shares",
    })),
    ...dividends.map((item) => ({
      ...item,
      type: "dividend",
    })),
    ...managementFees.map((item) => ({
      ...item,
      type: "management",
    })),
  ].sort((a, b) => (a.date < b.date ? -1 : 1));
};

const calculate = (fund, monthlyContribution) =>
  createItems(fund).reduce(
    (arr, item) => {
      switch (item.type) {
        case "shares": {
          const { entryFee } = fund;
          const monthlyDeposit = monthlyContribution * ((100 - entryFee) / 100);
          const sharesToBuy = monthlyDeposit / item.price;
          const totalDeposited = arr.totalDeposited + monthlyContribution;
          const totalShares = arr.totalShares + sharesToBuy;

          return {
            totalDeposited,
            totalShares,
            lastSharePrice: item.price,
            items: [
              ...arr.items,
              {
                type: "shares",
                date: new Date(item.date),
                shareAmount: item.price,
                shareChange: sharesToBuy,
                totalShares,
                totalDeposited,
                worth: totalShares * item.price,
                growth:
                  ((totalShares * item.price) / totalDeposited) * 100 - 100,
              },
            ],
          };
        }
        case "dividend": {
          const dividendAmount = item.price * arr.totalShares;
          const dividendShares = dividendAmount / arr.lastSharePrice;
          const totalDeposited = arr.totalDeposited;
          const totalShares = arr.totalShares + dividendShares;

          return {
            totalDeposited,
            totalShares,
            lastSharePrice: arr.lastSharePrice,
            items: [
              ...arr.items,
              {
                type: "dividend",
                date: new Date(item.date),
                shareAmount: arr.lastSharePrice,
                shareChange: dividendShares,
                totalShares,
                totalDeposited,
                worth: totalShares * arr.lastSharePrice,
                growth:
                  ((totalShares * arr.lastSharePrice) / totalDeposited) * 100 -
                  100,
              },
            ],
          };
        }
        case "management": {
          const managementFee =
            arr.totalShares * (item.totalExpenseRatio / 100);
          const totalDeposited = arr.totalDeposited;
          const totalShares =
            (arr.totalShares * (100 - item.totalExpenseRatio)) / 100;

          return {
            totalDeposited,
            totalShares,
            lastSharePrice: arr.lastSharePrice,
            items: [
              ...arr.items,
              {
                type: "management",
                date: new Date(item.date),
                shareAmount: item.price,
                shareChange: 0 - managementFee,
                totalShares,
                totalDeposited,
                worth: totalShares * item.price,
                growth:
                  ((totalShares * item.price) / totalDeposited) * 100 - 100,
              },
            ],
          };
        }
        default: {
          return arr;
        }
      }
    },
    {
      totalDeposited: 0,
      totalShares: 0,
      lastSharePrice: 0,
      items: [],
    }
  ).items;

export default {
  calculate,
};
