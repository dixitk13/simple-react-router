import React, { Fragment } from "react";
import { render } from "react-dom";
import {
  Route,
  Link,
  Switch,
  withRouter,
  BrowserRouter,
  HashRouter,
  Router
} from "react-router-dom";

import Home from "./Home";

import { PersonDetail, PersonList } from "./Person";

const App = () => (
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

    <Route exact path="/home" component={Home} />
    <Route path="/person" component={PersonComponent} />
  </Fragment>
);

const PersonComponent = () => (
  <Fragment>
    <h2>this is a person page</h2>
    <ul>
      <li>
        <Link to="/person/1">Person 1</Link>
      </li>
      <li>
        <Link to="/person/2">Person 2</Link>
      </li>
    </ul>
    <Switch>
      <Route path="/person/:id" component={PersonDetail} />
      <Route exact path="/person" component={PersonList} />
    </Switch>
  </Fragment>
);

const HashRouterApp = () => (
  <HashRouter>
    <App />
  </HashRouter>
);

const BrowserRouterApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default withRouter(BrowserRouterApp);

render(<BrowserRouterApp />, document.getElementById("root"));
