import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import Dashboard from "./dashboard/dashoard";
import Menu from "./menu/menu";
import SlidesManagement from "./slidesManagemet/slidesManagement";
import Women from "./categories/women/women";
import NewIn from "./categories/newIn/newIn";
import UserManagement from "./userManagement/usermanagement";
import Men from "./categories/men/men";
import ProductManagement from "./productManagement/productManagement";
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
            <Route
              exact
              path="/productManagement"
              render={() => <ProductManagement {...this.props} />}
            />
            <Route
              exact
              path="/women"
              render={() => <Women {...this.props} />}
            />
            <Route exact path="/men" render={() => <Men {...this.props} />} />
            <Route
              exact
              path="/userManagement"
              render={() => <UserManagement {...this.props} />}
            />
            <Route
              exact
              path="/newIn"
              render={() => <NewIn {...this.props} />}
            />
            <Route
              exact
              path="/slidesManagement"
              render={() => <SlidesManagement {...this.props} />}
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
