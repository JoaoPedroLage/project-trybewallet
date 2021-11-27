import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class WalletHeader extends React.Component {
  render() {
    const { getEmail, getExpenses, totalExpense } = this.props;
    return (
      <>
        <header>
          <h1>TrybeWallet</h1>
          <h2 data-testid="email-field">{`Email: ${getEmail}`}</h2>
          <span
            data-testid="total-field"
          >
            {`Despesa Total: ${(getExpenses && getExpenses.length === 0) ? 0
              : totalExpense}`}
          </span>
          <span data-testid="header-currency-field">
          &nbsp;BRL
          </span>
        </header>
        <br />
      </>);
  }
}

WalletHeader.propTypes = {
  getEmail: PropTypes.string,
  getExpenses: PropTypes.shape({
    length: PropTypes.number,
  }),
  totalExpense: PropTypes.any,
}.isRequired;

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  getExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletHeader);
