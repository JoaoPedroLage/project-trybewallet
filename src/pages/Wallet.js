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
          <h3 data-testid="total-field">Despesa Total:</h3>
          <span data-testid="header-currency-field" />
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
});

export default connect(mapStateToProps)(Wallet);
