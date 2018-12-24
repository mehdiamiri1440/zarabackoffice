import React, { Component } from "react";
import { Redirect, Route, withRouter, Switch } from "react-router-dom";
import Dashboard from "./dashboard/dashoard";
import Menu from "./menu/menu";

class MainRoutes extends Component {
  static init() {
    return (
      <div className="col p-0 d-flex">
        <div className="d-flex justify-content-end p-0 col-10">
          <Switch>
            {/* <Route from="/" to="/landing" /> */}

            <Route
              exact
              path="/"
              render={() => <Dashboard {...this.props} />}
            />
          </Switch>
        </div>
        <div className="d-flex p-0 justify-content-end col-2">
          <Menu />
        </div>
      </div>
    );
  }

  render() {
    return null;
  }
}

export default withRouter(MainRoutes);
