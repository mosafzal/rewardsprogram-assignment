import React from "react";
import { getCustomers, getPointsForCustomer } from "./../helper";


const Customers = ({transactions}) =>  {
  const customers = getCustomers(transactions);
  return <> 
    <h1>Customers</h1>
      <table id="rewardsTable">
        <thead>
          <tr>
            <th>Customer Id</th>
            <th>Total Points</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => <tr key={customer}>
              <td>{customer}</td>
              <td>{getPointsForCustomer(customer, transactions)}</td>
            </tr>)}
        </tbody>
      </table>
    </>;
}
export default Customers;
  