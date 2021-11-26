import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import ExpensesForm from './ValueForm';
import CurrenciesForm from './CurrenciesForm';
import MethodForm from './MethodForm';
import TagForm from './TagForm';
import DescriptionForm from './DescriptionForm';
import { expensesData, requestAPI } from '../../actions';

let createIdNumber = 0;

const initialState = {
  currency: 'USD',
  description: '',
  method: '',
  id: '0',
  tag: '',
  value: '',
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

  async componentDidMount() {
    const { getResponseAPI } = this.props;
    await getResponseAPI();
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

  handleSubimit(e) {
    e.preventDefault();
    const { getExpenses } = this.props;
    getExpenses(this.state);
    this.setState({
      ...initialState,
      id: createIdNumber });
    createIdNumber += 1;
  }

  render() {
    // const { disabled } = this.state;
    return (
      <form onSubmit={ this.handleSubimit }>
        <ExpensesForm { ...this.state } handleChange={ this.handleChange } />
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
  getExpenses: PropTypes.func.isRequired,
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
