import React, { Fragment, Component } from "react";
import { withRouter, Link, Switch, Route } from "react-router-dom";
import { CategoryList, CategoryDetails } from "./Person";

class SomeView extends Component {
  render() {
    return (
      <div>
        <div>
          Click below for category list This is a link:
          <Link to="/category">clicker</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(SomeView);
