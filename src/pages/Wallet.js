// eslint-disable-next-line jsx-a11y/control-has-associated-label
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { getEmail } = this.props;
    return (
      <form>
        <header>
          <h1>TrybeWallet</h1>
          <h2 data-testid="email-field">{`Email: ${getEmail}`}</h2>
          <h3 data-testid="total-field">Despesa Total: 0</h3>
          <span />
          Moeda:&nbsp;
          <select data-testid="header-currency-field">
            <option>BRL</option>
          </select>
          <label htmlFor="descricao">
          &nbsp;Descrição&nbsp;
            <input id="descricao" />
          </label>
        </header>
      </form>);
  }
}

Wallet.propTypes = {
  getEmail: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  // getTotalExpenses: state.wallet.totalExpenses,
});

export default connect(mapStateToProps)(Wallet);
