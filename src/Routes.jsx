import React from "react";
import { Route, Link, withRouter } from "react-router-dom";
import MainRoutes from "./components/mainRoutes";

// import NewInRoutes from "./components/menu/new/newInRoutes";
class Routes extends React.Component {
  componentDidMount() {
    //alert("welcome");
  }
  render() {
    return (
      <div className="app">
        {/* <Route
          exact
          path="/login"
          render={() => <MainRoutes {...this.props} />}
        /> */}
        {MainRoutes.init()}
      </div>
    );
  }
}

export default withRouter(Routes);
