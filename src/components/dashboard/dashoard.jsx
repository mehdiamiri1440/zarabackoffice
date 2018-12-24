import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>hello mehdi amiri</div>;
  }
}

export default withRouter(Dashboard);
