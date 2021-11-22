// foi usado como base para essa página o código do esquenta do dia 19/11
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
