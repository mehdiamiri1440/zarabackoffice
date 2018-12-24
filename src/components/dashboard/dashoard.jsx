import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ width: "100%", height: "100vh" }} className="">
        <div className="position-absolute text-white display-4 p-3 ">ثریا</div>
        <img
          style={{ width: "100%", height: "100%" }}
          src={require("../../content/images/mainWallpaper.jpg")}
          alt=""
        />
      </div>
    );
  }
}

export default withRouter(Dashboard);
