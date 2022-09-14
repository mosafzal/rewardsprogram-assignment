import React from "react";
import { getMonthName } from "../helper";
const Transactions = ({
  transactions
}) =>  {
  return <> 
    <h1>Transactions</h1>
      <table id="rewardsTable">
        <thead>
          <tr>
            {transactions.length > 0 && Object.keys(transactions[0]).map(key => <th key={key}>{key.split('_').join(' ').toLocaleUpperCase()}</th>)}
            <th key="month">Month</th>
          </tr>

        </thead>
        <tbody>
          {transactions.map(transaction => <tr key={transaction.id}>
              <td>{transaction.customer_id}</td>
              <td>{transaction.transaction_date}</td>
              <td>{transaction.transaction_amount}</td>
              <td>{transaction.transaction_id}</td>
              <td>{getMonthName(transaction.transaction_date)}</td>
            </tr>)}
        </tbody>
      </table>
    </>;
};

export default Transactions;
  