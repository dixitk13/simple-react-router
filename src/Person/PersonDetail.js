import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class PersonDetails extends Component {
  render() {
    const { id } = this.props.match.params;
    return <div>you clicked on Person # {id}</div>;
  }
}
export default withRouter(PersonDetails);
