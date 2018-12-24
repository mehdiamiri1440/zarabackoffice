import React, { Component } from "react";
import { Redirect, Route, withRouter, Switch } from "react-router-dom";

import Dashboard from "./dashboard/dashoard";

class MainRoutes extends Component {
  static init() {
    return (
      <Switch>
        {/* <Route from="/" to="/landing" /> */}
        <Route exact path="/" render={() => <Dashboard {...this.props} />} />
      </Switch>
    );
  }

  render() {
    return null;
  }
}

export default withRouter(MainRoutes);
