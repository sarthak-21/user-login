import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from './comps/Login';
import Register from './comps/Register';
import Reset from './comps/Reset';
import Dashboard from './comps/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = withRouter(({ location }) => {

  return (
    <div className="App">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/reset">
            <Reset />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
    </div>
  );
});

export default App;
