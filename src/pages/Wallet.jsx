import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    const { getEmail, getExpenses } = this.props;
    return (
      <>
        <header>
          <h1>TrybeWallet</h1>
          <h2 data-testid="email-field">{`Email: ${getEmail}`}</h2>
          <span
            data-testid="total-field"
          >
            {`Despesa Total: ${getExpenses.length === 0 ? 0 : 1}`}
          </span>
          <span data-testid="header-currency-field" />
          &nbsp;BRL
        </header>
        <br />
        <WalletForm />
      </>);
  }
}

Wallet.propTypes = {
  getEmail: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  getExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
