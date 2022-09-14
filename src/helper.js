export const getMonthName = (transactionDate) => {
  return new Date(transactionDate).toLocaleString('en-us',{month:'long'});
}
export const getPoints = (amount) => {
  let points = 0;
  if (amount > 100) {
    points += (amount - 100) * 2;
  }
  if (amount > 50) {
    points += (amount - 50);
  }
  return points;
};

export const getPointsForCustomer = (customer_id, transactions) => {
  let points = 0;
  transactions.forEach((transaction) => {
    if (transaction.customer_id === customer_id) {
      points += getPoints(transaction.transaction_amount);
    }
  });
  return points;
};

export const getPointsForMonth = (month, transactions) => {
  let points = 0;
  transactions.forEach((transaction) => {
    if (getMonthName(transaction.transaction_date) === month) {
      points += getPoints(transaction.transaction_amount);
    }
  });
  return points;
};

export const getPointsForCustomerForMonth = (customerId, month, transactions) => {
  let points = 0;
  transactions.forEach((transaction) => {
    if (transaction.customer_id === customerId && getMonthName(transaction.transaction_date) === month) {
      points += getPoints(transaction.transaction_amount);
    }
  });
  return points;
};

export const getCustomers = (transactions) => {
  const customers = [];
  transactions.forEach((transaction) => {
    if (!customers.includes(transaction.customer_id)) {
      customers.push(transaction.customer_id);
    }
  });
  return customers;
};

export const getMonths = (transactions) => {
  const months = [];
  transactions.forEach((transaction) => {
    const month = getMonthName(transaction.transaction_date);
    if (!months.includes(month)) {
      months.push(month);
    }
  });
  return months;
};