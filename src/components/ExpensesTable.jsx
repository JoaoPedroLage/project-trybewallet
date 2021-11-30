import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expensesData } from '../actions';

class ExpensesTable extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
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
        {expenses.length > 0 && (
          <tbody>
            {expenses.map((expense, index) => {
              const exchange = Object.values(expense.exchangeRates)
                .find((cur) => cur.code === expense.currency);
              return (
                <tr key={ index }>
                  <td>{expense.description}</td>
                  <td>{expense.tag}</td>
                  <td>{expense.method}</td>
                  <td>{expense.value}</td>
                  <td>{exchange.name.split('/')[0]}</td>
                  <td>{(exchange.ask * 1).toFixed(2)}</td>
                  <td>{(expense.value * exchange.ask).toFixed(2)}</td>
                  <td>Real</td>
                  <td>
                    <button type="button">
                      Editar
                    </button>
                    <button type="button">
                      Excluir
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>)}
      </table>
    );
  }
}

ExpensesTable.propTypes = {
  expenses: PropTypes.array,
}.isRequerid;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getExpenses: (state) => dispatch(expensesData(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
