import React from 'react';
import ExpensesTable from '../components/ExpensesTable';
import WalletForm from '../components/Form/WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <WalletForm />
        <ExpensesTable />
      </>
    );
  }
}

export default Wallet;
