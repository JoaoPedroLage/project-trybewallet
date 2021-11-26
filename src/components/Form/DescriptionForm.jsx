import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class DescriptionForm extends Component {
  render() {
    const { description, handleChange } = this.props;
    return (
      <label htmlFor="description-input">
          &nbsp;Descrição:&nbsp;
        <input
          data-testid="description-input"
          value={ description }
          name="description"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

DescriptionForm.propTypes = {
  description: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
