import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Error from "./components/Error";
import Person from "./components/Person";

class App extends Component {
  render() {
    return (
      <Fragment>
        {/*<h1>Sorting Algorithms</h1>*/}
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/person" component={Person} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={Error} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
