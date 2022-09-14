import React from 'react';
import axios from 'axios';
import Transactions from './components/Transactions';
import Customers from './components/Customers';
import Months from './components/Months';
import ThreeMonthsCustomerPoints from './components/ThreeMonthsCustomerPoints';
import './App.css';

function App() {
 const [transactions, setTransactions] = React.useState([]);
 const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    axios.get('mockData/data.json')
      .then((response) => {
        setTransactions(response.data);
      }).catch((err) => {
        setError(err);
      }).finally(() => { setLoading(false); });
  }, []);


if (loading) {
    return <div>Loading...</div>;
}

if (error) {
    return <div>Error: {error.message}</div>;
}


if (transactions.length === 0) {
    return <div>No transactions</div>;
}

return (
    <div className="App">
      <Transactions transactions={transactions}  />
      <Customers transactions={transactions}/>
      <Months  transactions={transactions}/>
      <ThreeMonthsCustomerPoints transactions={transactions}/>
    </div>
  );
}

export default App;