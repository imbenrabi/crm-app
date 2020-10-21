import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import './App.css';
import { observer } from 'mobx-react';
import NavBar from './components/NavBar';
import Clients from './components/Clients';
import Actions from './components/Actions';
import Analytics from './components/Analytics';

const App = observer((props) => {
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
})

export default App;
