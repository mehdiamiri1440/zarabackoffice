import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class UserManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>it is the user mansgement</div>;
  }
}

export default withRouter(UserManagement);
