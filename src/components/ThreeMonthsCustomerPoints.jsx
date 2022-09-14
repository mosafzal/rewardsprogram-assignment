import React  from "react";
import { getCustomers, getPointsForCustomerForMonth, getPointsForCustomer,getMonths } from "./../helper";



// TODO: Ideally, This component should take param as how many months to show as period. due to time constraint, I am hardcoding it to 3 months

const ThreeMonthsCustomerPoints = ({transactions}) => {
  const customers = getCustomers(transactions);
  const months = getMonths(transactions);
  return <>
    <h1>Customer Points over 3 Month Period</h1>
    <table id="rewardsTable">
      <thead>
        <tr>
          <th>Customer</th>
          <th>Month</th>
          <th>Total Points</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={customer}>
            <td>{customer}</td>
            <td>{months.map((month) => (
              <div key={month}>
                {month}: {getPointsForCustomerForMonth(customer, month, transactions)}
              </div>
            ))}
            </td>
            <td>{getPointsForCustomer(customer, transactions)}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>;
};

export default ThreeMonthsCustomerPoints;