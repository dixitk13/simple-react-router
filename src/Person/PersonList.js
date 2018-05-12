import React, {Component} from "react";
import { withRouter, Link } from "react-router-dom";

class PersonList extends Component {
  render() {
    return (
      <div>
          Person List Page
        <div>
          <Link to="/person/1">Person 1</Link>
        </div>
        <div>
          <Link to="/person/2">Person 2</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(PersonList)