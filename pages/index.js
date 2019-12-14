import React, { useState } from 'react';
import Head from 'next/head';

import data from '../data';

import calculatorService from '../services/calculatorService';

const numberWithCommas = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const Home = () => {
  const [monthlyDeposit, setMonthlyDeposit] = useState(100);
  const [calculations, setCalculations] = useState([]);

  return (
    <div>
      <Head>
        <title>Shares Saver Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <h1 className="title">Shares Saver Calculator</h1>
        <div className="detailsContainer">
          <span className="detailsHeadline">Fund Details</span>
          <div><b>Name: </b><span>{data.asx.name}</span></div>
          <div><b>Entry Fee: </b><span>{data.asx.entryFee}%</span></div>
          <div><b>Management Fee: </b><span>{data.asx.totalExpenseRatio}% p.a</span></div>
        </div>
        <div className="calculationSettings">
          <label>Monthly Contribution:</label>
          <input type="number" value={monthlyDeposit} onChange={(event) => setMonthlyDeposit(event.target.value)} />
          <button onClick={() => setCalculations(calculatorService.calculate(data.asx, parseInt(monthlyDeposit, 10)))}>
            Calculate
          </button>
        </div>
        { calculations.length > 0 &&
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
            { calculations.map(calculation =>
            <tr className={calculation.type}>
              <td>{calculation.date.toISOString().substr(0, 10)}</td>
              <td>{calculation.type}{calculation.type === 'shares' ? ` @ ${calculation.shareAmount} euros` : ''}</td>
              <td>{calculation.shareChange > 0 ? '+' : ''}{numberWithCommas(calculation.shareChange.toFixed(2))}</td>
              <td>{numberWithCommas(calculation.totalShares.toFixed(2))}</td>
              <td>{numberWithCommas(calculation.totalDeposited.toFixed(2))} euros</td>
              <td>{numberWithCommas(calculation.worth.toFixed(2))} euros</td>
              <td className={calculation.growth < 0 ? 'negative' : 'positive'}>{calculation.growth.toFixed(2)}%</td>
            </tr>
          )}
          </table>
        }
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
        tr:nth-child(even) {background: #CCC}
        tr:nth-child(odd) {background: #FFF}
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
}

export default Home;
