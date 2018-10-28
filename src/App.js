import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Error from "./components/Error";
import Person from "./components/Person";
import Cubes from "./components/Cubes";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/person" component={Person} />
          <Route path="/cubes" component={Cubes} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={Error} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
