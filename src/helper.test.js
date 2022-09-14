import {
  getCustomers,
  getMonths,
  getMonthName,
  getPoints,
  getPointsForCustomer,
  getPointsForCustomerForMonth,
  getPointsForMonth,
} from './helper';

const mockDataTransactions = [
  {
    "customer_id": 1,
    "transaction_date": "2019-01-02",
    "transaction_amount": 120,
    "transaction_id": 1
  },
  {
    "customer_id": 2,
    "transaction_date": "2019-01-15",
    "transaction_amount": 110,
    "transaction_id": 2
  },
  {
    "customer_id": 1,
    "transaction_date": "2019-01-13",
    "transaction_amount": 50,
    "transaction_id": 3
  }];

describe('helper', () => {
  it('getPoints', () => {
    expect(getPoints(0)).toBe(0);
    expect(getPoints(50)).toBe(50);
    expect(getPoints(51)).toBe(101);
    expect(getPoints(100)).toBe(50);
    expect(getPoints(101)).toBe(102);
    expect(getPoints(150)).toBe(152);
  });

  it('getPointsForCustomer', () => {
    expect(getPointsForCustomer(1, mockDataTransactions)).toBe(170);
    expect(getPointsForCustomer(2, mockDataTransactions)).toBe(110);
  });

  it('getPointsForMonth', () => {
    expect(getPointsForMonth('January', mockDataTransactions)).toBe(280);
  });

  it('getPointsForCustomerForMonth', () => {
    expect(getPointsForCustomerForMonth(1, 'January', mockDataTransactions)).toBe(170);
    expect(getPointsForCustomerForMonth(2, 'January', mockDataTransactions)).toBe(110);
  });

  it('getCustomers', () => {
    expect(getCustomers(mockDataTransactions)).toEqual([1, 2]);
  });

  it('getMonths', () => {
    expect(getMonths(mockDataTransactions)).toEqual(['January']);
  });

  it('getMonthName', () => {
    expect(getMonthName('2019-01-02')).toBe('January');
    expect(getMonthName('2019-02-02')).toBe('February');
    expect(getMonthName('2019-03-02')).toBe('March');
    expect(getMonthName('2019-04-02')).toBe('April');
    expect(getMonthName('2019-05-02')).toBe('May');
    expect(getMonthName('2019-06-02')).toBe('June');
    expect(getMonthName('2019-07-02')).toBe('July');
    expect(getMonthName('2019-08-02')).toBe('August');
    expect(getMonthName('2019-09-02')).toBe('September');
    expect(getMonthName('2019-10-02')).toBe('October');
    expect(getMonthName('2019-11-02')).toBe('November');
    expect(getMonthName('2019-12-02')).toBe('December');
  });
});