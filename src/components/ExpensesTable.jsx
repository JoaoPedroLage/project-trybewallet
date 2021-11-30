import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expensesData } from '../actions';

class ExpensesTable extends Component {
  render() {
    return (
      <table role="grid">
        <thead>
          <tr>
            <th role="columnheader">Descrição</th>
            <th role="columnheader">Tag</th>
            <th role="columnheader">Método de pagamento</th>
            <th role="columnheader">Valor</th>
            <th role="columnheader">Moeda</th>
            <th role="columnheader">Câmbio utilizado</th>
            <th role="columnheader">Valor convertido</th>
            <th role="columnheader">Moeda de conversão</th>
            <th role="columnheader">Editar/Excluir</th>
          </tr>
        </thead>
      </table>
    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getExpenses: (state) => dispatch(expensesData(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
