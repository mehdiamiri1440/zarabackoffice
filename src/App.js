import React, { Component } from "react";
import { BrowserRouter, Redirect, Link, withRouter } from "react-router-dom";

import Routes from "./Routes.jsx";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
