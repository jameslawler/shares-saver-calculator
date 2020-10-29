import React, { useState } from "react";
import Head from "next/head";

import data from "../data";

import calculatorService from "../services/calculatorService";

const getFundsList = () =>
  Object.keys(data).map((key) => ({
    key,
    name: data[key].name,
  }));

const numberWithCommas = (number) =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const Home = () => {
  const [monthlyDeposit, setMonthlyDeposit] = useState(100);
  const [calculations, setCalculations] = useState([]);
  const [fundKey, setFundKey] = useState(Object.keys(data)[0]);
  const funds = getFundsList();

  return (
    <div>
      <Head>
        <title>ETF Saving Plan Historical Simulator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <h1 className="title">ETF Saving Plan Historical Simulator</h1>
        <div className="detailsContainer">
          <span className="detailsHeadline">Fund</span>
          <div className="fundSelector">
            <select
              value={fundKey}
              onChange={(event) => setFundKey(event.target.value)}
            >
              {funds.map((f) => (
                <option value={f.key}>{f.name}</option>
              ))}
            </select>
          </div>
          <div>
            <b>Name: </b>
            <span>{data[fundKey].name}</span>
          </div>
          <div>
            <b>Entry Fee: </b>
            <span>{data[fundKey].entryFee}%</span>
          </div>
          <div>
            <b>Management Fee: </b>
            <span>{data[fundKey].totalExpenseRatio}% p.a</span>
          </div>
        </div>
        <div className="calculationSettings">
          <label>Monthly Contribution:</label>
          <input
            type="number"
            value={monthlyDeposit}
            onChange={(event) => setMonthlyDeposit(event.target.value)}
          />
          <button
            onClick={() =>
              setCalculations(
                calculatorService.calculate(
                  data[fundKey],
                  parseInt(monthlyDeposit, 10)
                )
              )
            }
          >
            Calculate
          </button>
        </div>
        {calculations.length > 0 && (
          <table>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Shares Change</th>
              <th>Total Shares</th>
              <th>Total Deposited</th>
              <th>Worth</th>
              <th>Growth</th>
            </tr>
            {calculations.map((calculation) => (
              <tr className={calculation.type}>
                <td>{calculation.date.toISOString().substr(0, 10)}</td>
                <td>
                  {calculation.type}
                  {calculation.type === "shares"
                    ? ` @ ${calculation.shareAmount} euros`
                    : ""}
                </td>
                <td>
                  {calculation.shareChange > 0 ? "+" : ""}
                  {numberWithCommas(calculation.shareChange.toFixed(2))}
                </td>
                <td>{numberWithCommas(calculation.totalShares.toFixed(2))}</td>
                <td>
                  {numberWithCommas(calculation.totalDeposited.toFixed(2))}{" "}
                  euros
                </td>
                <td>{numberWithCommas(calculation.worth.toFixed(2))} euros</td>
                <td
                  className={calculation.growth < 0 ? "negative" : "positive"}
                >
                  {calculation.growth.toFixed(2)}%
                </td>
              </tr>
            ))}
          </table>
        )}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          padding: 40px;
          width: 900px;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .fundSelector {
          padding: 10px 0 20px 0;
        }
        .detailsContainer {
          align-items: start;
          display: flex;
          flex-direction: column;
        }
        .detailsHeadline {
          font-size: 20px;
          font-weight: bold;
          padding: 15px 0;
        }
        .calculationSettings {
          padding: 15px 0;
        }
        .calculationSettings label {
          padding-right: 10px;
        }
        .calculationSettings input {
          margin-right: 10px;
        }
        tr:nth-child(even) {
          background: #ccc;
        }
        tr:nth-child(odd) {
          background: #fff;
        }
        tr.management {
          background: red;
        }
        tr.dividend {
          background: lightblue;
        }
        td {
          padding: 10px;
        }
        td.negative {
          background: red;
          font-weight: bold;
        }
        td.positive {
          background: green;
          color: white;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Home;
