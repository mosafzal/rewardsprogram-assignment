import React from "react";
import { getPointsForMonth, getMonths } from "../helper";

const Months = ({transactions}) => {
  const months = getMonths(transactions);
  return <> 
    <h1>Months</h1>
      <table id="rewardsTable">
        <thead>
          <tr>
            <th>Month</th>
            <th>Total Points</th>
          </tr>
        </thead>
        <tbody>
          {months.map(month => <tr key={month}>
              <td>{month}</td>
              <td>{getPointsForMonth(month, transactions)}</td>
            </tr>)}
        </tbody>
      </table>
    </>;
};

export default Months;