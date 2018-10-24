import React, { Fragment } from "react";
import { Route, Link, Switch, withRouter } from "react-router-dom";

import PersonList from "./PersonList/PersonList";
import PersonDetail from "./PersonDetail/PersonDetail";

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

export default withRouter(PersonComponent);
