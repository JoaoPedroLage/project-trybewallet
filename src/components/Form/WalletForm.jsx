import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WalletHeader from '../WalletHeader';
import ValueForm from './ValueForm';
import CurrenciesForm from './CurrenciesForm';
import MethodForm from './MethodForm';
import TagForm from './TagForm';
import DescriptionForm from './DescriptionForm';
import { expensesData, requestAPI } from '../../actions';

let createIdNumber = 0;
const totalExpenseArray = [0];

const initialState = {
  currency: '',
  description: '',
  method: '',
  id: 0,
  tag: '',
  value: '',
  totalExpenses: 0,
};

class WalletForm extends React.Component {
  constructor() {
    super();

    this.state = {
      ...initialState,
      // disabled: true,
    };

    this.handleSubimit = this.handleSubimit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
    // () => this.checkInputValue());
    const { currencies } = this.props;
    this.setState({ exchangeRates: currencies });
  }

  // checkInputValue() {
  //   const { value } = this.state;
  //   if (value !== '') this.setState({ disabled: false });
  //   else this.setState({ disabled: true });
  // }

  async handleSubimit(e) {
    e.preventDefault();
    const { currency, description, method, id, exchangeRates, tag, value } = this.state;
    const { getExpenses, getResponseAPI } = this.props;
    createIdNumber += 1; // aumenta o id em 1 a cada submissão do formulário
    await getResponseAPI(); // chama a função que a requisição da API
    getExpenses({ currency, description, method, id, exchangeRates, tag, value }); // envia para a action esses dados do estado
    this.setState({
      ...initialState,
      id: createIdNumber });
    const exchange = Object.values(exchangeRates)
      .find((cur) => cur.code === currency).ask; // encontra o câmbio da moeda
    totalExpenseArray.push(Number(value * exchange)); // faz a conversão do câmbio da moeda
    const getSum = (result, number) => result + number; // soma o resultado atual com a antiga posição
    this.setState({ totalExpense: totalExpenseArray.reduce(getSum) }); // seta no estado da aplicação o total da soma das despesas
  }

  render() {
    // const { disabled } = this.state;
    return (
      <form onSubmit={ this.handleSubimit }>
        <WalletHeader { ...this.state } />
        <ValueForm { ...this.state } handleChange={ this.handleChange } />
        <CurrenciesForm { ...this.state } handleChange={ this.handleChange } />
        <MethodForm { ...this.state } handleChange={ this.handleChange } />
        <TagForm { ...this.state } handleChange={ this.handleChange } />
        <DescriptionForm { ...this.state } handleChange={ this.handleChange } />
        <button
          type="submit"
          // disabled={ disabled }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  getExpenses: PropTypes.func,
  getResponseAPI: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getExpenses: (state) => dispatch(expensesData(state)),
  getResponseAPI: (state) => dispatch(requestAPI(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
