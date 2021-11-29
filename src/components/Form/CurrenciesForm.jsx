import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestAPI } from '../../actions';

class CurrenciesForm extends Component {
  async componentDidMount() {
    const { getResponseAPI } = this.props;
    await getResponseAPI();
  }

  render() {
    const { currency, handleChange, currencies: { USDT, ...rest } } = this.props;
    return (
      <label htmlFor="currency">
        Moeda
        <select
          id="currency"
          data-testid="currency-input"
          name="currency"
          value={ currency }
          onChange={ handleChange }
        >
          {/* <option defaultValue>Selecione o câmbio da moeda:</option> */}
          { Object.keys(rest).map((cur, index) => (
            <option
              data-testid={ cur }
              key={ cur }
              id={ index }
              value={ cur }
              name="cur"
            >
              { cur }
            </option>
          )) }
        </select>
      </label>
    );
  }
}

CurrenciesForm.propTypes = {
  getResponseAPI: PropTypes.func,
  currencies: PropTypes.object,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getResponseAPI: (state) => dispatch(requestAPI(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrenciesForm);
