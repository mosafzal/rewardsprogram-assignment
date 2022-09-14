import React from 'react';
import { render, screen } from '@testing-library/react';
import Months from "./Months";

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


describe('Months', () => {
  it('renders without crashing', () => {
    render(<Months transactions={mockDataTransactions} />);
    expect(screen.getByText(/Month/i)).toBeInTheDocument();
  });

  it('renders the correct number of months', () => {
    render(<Months transactions={mockDataTransactions} />);
    expect(screen.getAllByRole('row')).toHaveLength(3);
  });

  it('renders the correct number of columns', () => {
    render(<Months transactions={mockDataTransactions} />);
    expect(screen.getAllByRole('columnheader')).toHaveLength(2);
  } );

  it('renders the correct number of rows', () => {
    render(<Months transactions={mockDataTransactions} />);
    expect(screen.getAllByRole('row')).toHaveLength(3);
  } );

  it('renders the correct number of cells', () => {
    render(<Months transactions={mockDataTransactions} />);
    expect(screen.getAllByRole('cell')).toHaveLength(6);
  } );

});