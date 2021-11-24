import React from 'react';
import { connect } from 'react-redux';
import { requestAPI } from '../actions';

class WalletForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value-input">
          Valor da despesa:&nbsp;
          <input data-testid="value-input" />
        </label>
        <label htmlFor="description-input">
          &nbsp;Descrição:&nbsp;
          <input data-testid="description-input" />
        </label>
        <label htmlFor="currency-input">
          &nbsp;Moeda&nbsp;
          <input data-testid="currency-input" />
        </label>
        <label htmlFor="method-input">
          &nbsp;Método de pagamento&nbsp;
          <input data-testid="method-input" />
        </label>
        <select idata-testid="method-input">
          <option disabled selected value>Selecione o método:</option>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <select data-testid="tag-input">
          <option disabled selected value>Selecione o tipo de despesa:</option>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
        <button
          type="submit"
          // disabled={ disable }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getResponseAPI: (state) => dispatch(requestAPI(state)),
});

export default connect(null, mapDispatchToProps)(WalletForm);
