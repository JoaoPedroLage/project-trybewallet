import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class MethodForm extends Component {
  render() {
    const { method, handleChange } = this.props;
    return (
      <>
        <span>
          &nbsp;Método de pagamento&nbsp;
        </span>
        <select
          data-testid="method-input"
          value={ method }
          name="method"
          onChange={ handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </>
    );
  }
}

MethodForm.propTypes = {
  handleChange: PropTypes.func,
  method: PropTypes.string,
}.isRequired;
