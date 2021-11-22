// foi usado como base para essa página o código do esquenta do dia 19/11
import React from 'react';
import { Redirect } from 'react-router';

// links usados para fazer verificação regex: https://www.youtube.com/watch?v=QxjAOSUQjP0 &&
// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
const regexEmailValidation = /^([a-z\d\]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      validLogin: false,
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
    const { email, password } = this.state;
    const minLengthPassword = 5;
    console.log(password.length);
    if (regexEmailValidation.test(email)
     && password.length >= minLengthPassword) {
      this.setState({ validLogin: true });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { validLogin } = this.state;
    if (validLogin === true) {
      this.setState({ redirect: true });
    }
  }

  render() {
    const { email, redirect, password } = this.state;
    return (redirect ? <Redirect to="/carteira" /> : (
      <form id="login" onSubmit={ this.handleSubmit }>
        <label htmlFor="email-input">
          Email:
          <br />
          <input
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
        >
          Entrar
        </button>
      </form>)
    );
  }
}

export default Login;
