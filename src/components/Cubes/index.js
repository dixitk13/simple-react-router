import React, { Component } from "react";

import CubesView from "./CubesView";
import { cubes } from "./static";

class Cubes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cubes
    };
  }
  componentDidMount() {
    // fetch user rooms
  }

  render() {
    return <CubesView {...this.state} />;
  }
}

export default Cubes;
