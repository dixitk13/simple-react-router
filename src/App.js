import React, { Component, Fragment } from "react";
import { Route, Link, Switch } from "react-router-dom";

import Home from "./Home";

import PersonComponent from "./Person";

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>App Home Page</h1>
        <ul>
          <li>
            <Link to="/home">App Home</Link>
          </li>
          <li>
            <Link to="/person">List of Persons</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/person" component={PersonComponent} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
