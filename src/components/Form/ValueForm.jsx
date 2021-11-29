import PropTypes from 'prop-types';
import React from 'react';

export default class ValueForm extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="value-input">
        Valor da despesa:&nbsp;
        <input
          data-testid="value-input"
          type="number"
          name="value"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ValueForm.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
}.isRequired;
