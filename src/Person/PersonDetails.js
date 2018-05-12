import React, {Component} from "react";
import {withRouter} from 'react-router-dom';

class PersonDetails extends Component {
  render() {
    return <div>you clicked on Person {this.props.id}</div>;
  }
}
export default withRouter(PersonDetails);
