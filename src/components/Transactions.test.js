import React from 'react';
import { render, screen } from '@testing-library/react';
import Transactions from "./Transactions";

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

describe('Transactions', () => {
  it('renders without crashing', () => {
    render(<Transactions transactions={mockDataTransactions} />);
    expect(screen.getByText(/Transaction ID/i)).toBeInTheDocument();
  });

  it('renders the correct number of transactions', () => {
    render(<Transactions transactions={mockDataTransactions} />);
    expect(screen.getAllByRole('row')).toHaveLength(4);
  });

  it('renders the correct number of columns', () => {
    render(<Transactions transactions={mockDataTransactions} />);
    expect(screen.getAllByRole('columnheader')).toHaveLength(4);
  } );

  it('renders the correct number of rows', () => {
    render(<Transactions transactions={mockDataTransactions} />);
    expect(screen.getAllByRole('row')).toHaveLength(4);
  } );

  it('renders the correct number of cells', () => {
    render(<Transactions transactions={mockDataTransactions} />);
    expect(screen.getAllByRole('cell')).toHaveLength(12);
  } );

});

