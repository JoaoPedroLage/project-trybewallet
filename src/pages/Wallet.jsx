import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WalletForm from '../components/Form/WalletForm';

const totalExpense = [];

class Wallet extends React.Component {
  render() {
    const { getEmail, getExpenses } = this.props;
    totalExpense.push(Number(getExpenses.value));
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    // link da documentação encontrada para somar os valores do array:
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

    return (
      <>
        <header>
          <h1>TrybeWallet</h1>
          <h2 data-testid="email-field">{`Email: ${getEmail}`}</h2>
          <span
            data-testid="total-field"
          >
            {`Despesa Total: ${(getExpenses && getExpenses.length === 0) ? 0
              : totalExpense.filter(Number).reduce(reducer)}`}
            {/* link do solução encontrada para filtrar apenas os números do array:
            https://stackoverflow.com/questions/44628965/filtering-numbers-out-from-an-array */}
          </span>
          <span data-testid="header-currency-field">
          &nbsp;BRL
          </span>
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
