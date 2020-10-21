import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import './App.css';
import { inject, observer } from 'mobx-react';
import NavBar from './components/NavBar';
import Clients from './components/clients/Clients';
import Actions from './components/actions/Actions';
import Analytics from './components/analytics/Analytics';

const App = inject('ClientStore')(observer((props) => {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <Router>
        <NavBar />
        <Switch>
          <Route path='/clients' exact render={() => <Clients />} />
          <Route path='/analytics' exact render={() => <Analytics />} />
          <Route path='/actions' exact render={() => <Actions />} />
        </Switch>
      </Router>
    </div>
  );
}))

export default App;
