import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class TagForm extends Component {
  render() {
    const { tag, handleChange } = this.props;
    return (
      <>
        <span>
          &nbsp;Tag:&nbsp;
        </span>
        <select
          data-testid="tag-input"
          name="tag"
          value={ tag }
          onChange={ handleChange }
        >
          {/* <option defaultValue>Selecione a tag:</option> */}
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </>
    );
  }
}

TagForm.propTypes = {
  handleChange: PropTypes.func,
  tag: PropTypes.string,
}.isRequired;
