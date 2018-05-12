import React, { Fragment } from "react";
import { render } from "react-dom";
import {
  Route,
  Link,
  Switch,
  withRouter,
  BrowserRouter,
  Router
} from "react-router-dom";

import Home from "./Home";

import { PersonDetails, PersonList } from "./Person";

const App = () => (
  <Fragment>
    <h1>Person Home Page</h1>
    <Route path="/" component={Home} />
    <Route exact path="/person" component={PersonList} />
    <Route exact path="/person/:id" component={PersonDetails} />
  </Fragment>
);

const BrowserRouterApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default withRouter(BrowserRouterApp);

render(<BrowserRouterApp />, document.getElementById("root"));
