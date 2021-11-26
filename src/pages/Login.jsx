// foi usado como base para essa página o código do esquenta do dia 19/11
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { inputEmail } from '../actions';

// links usados para fazer verificação regex: https://www.youtube.com/watch?v=QxjAOSUQjP0 &&
// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
const regexEmailValidation = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disable: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkCorrectLogin = this.checkCorrectLogin.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value },
      () => this.checkCorrectLogin());
  }

  checkCorrectLogin() {
    const { email, password } = this.state;
    const minLengthPassword = 6;

    if (regexEmailValidation.test(email)
     && password.length >= minLengthPassword) {
      this.setState({
        disable: false });
    } else {
      this.setState({
        disable: true });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { history, getEmail } = this.props;
    const { email } = this.state;
    getEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, disable } = this.state;
    return (
      <form id="login" onSubmit={ this.handleSubmit }>
        <label htmlFor="email-input">
          Email:
          <br />
          <input
            id="email-input"
            data-testid="email-input"
            type="text"
            value={ email }
            name="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <br />
          <input
            data-testid="password-input"
            type="password"
            value={ password }
            name="password"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="submit"
          disabled={ disable }
        >
          Entrar
        </button>
      </form>);
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  getEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getEmail: (state) => dispatch(inputEmail(state)),
});

export default connect(null, mapDispatchToProps)(Login);
