import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, withRouter } from "react-router-dom";

const BrowserRouterApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default withRouter(BrowserRouterApp);

ReactDOM.render(<BrowserRouterApp />, document.getElementById("root"));

serviceWorker.unregister();
