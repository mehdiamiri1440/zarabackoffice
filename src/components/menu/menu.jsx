import React, { Component } from "react";
import "./menu.css";
import { withRouter } from "react-router-dom";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className=" menuGradient text-center w-100 p-0"
        style={{ height: "100vh" }}
      >
        <div
          style={{ width: "100%" }}
          className="text-white  border-bottom text-center  p-2"
        >
          <span>مدیریت اسلاید ها</span>
          <span>
            <i className="fa fa-bars" />
          </span>
        </div>
        <div
          style={{ width: "100%" }}
          className="border-bottom text-white text-center p-2"
        >
          مدیریت دسته بندی ها
        </div>
      </div>
    );
  }
}

export default withRouter(Menu);
