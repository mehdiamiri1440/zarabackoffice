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
          className="text-white d-flex position-relative justify-content-end openSubmenu border-bottom text-center  p-2"
        >
          <span className="text-center  align-middle">مدیریت اسلاید ها</span>
          <div
            id="submenu"
            style={{ right: "100%", top: 0 }}
            className="position-absolute w-100  submenu"
          >
            <div style={{}} className="align-middle p-2">
              <div className="w-100 d-flex  align-items-center justify-content-end">
                <span className="px-2">جدید ها</span>
                <i className="far fa-newspaper" />
              </div>
            </div>
          </div>
          <span>
            <i className="fab fa-slideshare text-center px-2 align-middle" />
          </span>
        </div>
        <div
          style={{ width: "100%" }}
          className="text-white d-flex justify-content-end openSubmenu position-relative  border-bottom text-center p-2"
        >
          <span className="text-center  align-middle">مدیریت دسته بندی ها</span>
          <div
            id="submenu"
            style={{ right: "100%", top: 0 }}
            className="position-absolute w-100  submenu"
          >
            <div className="align-middle   p-2">
              <div className=" w-100 d-flex align-items-center justify-content-end">
                <span className="px-2">جدید ها</span>
                <i className="far fa-newspaper" />
              </div>
            </div>
          </div>
          <span>
            <i className="far fa-window-restore text-center px-2 align-middle" />
          </span>
        </div>
        <div
          style={{ width: "100%" }}
          className="text-white d-flex justify-content-end openSubmenu position-relative  border-bottom text-center  p-2"
        >
          <span className="text-center  align-middle">مدیریت کاربران</span>
          <div
            id="submenu"
            style={{ right: "100%", top: 0 }}
            className="position-absolute w-100  submenu"
          >
            <div className="p-2">
              <div className=" w-100 d-flex align-items-center justify-content-end">
                <span className="px-2">جدید ها</span>
                <i className="far fa-newspaper" />
              </div>
            </div>
          </div>
          <span>
            <i className="fas fa-users-cog text-center px-2 align-middle" />
          </span>
        </div>
      </div>
    );
  }
}

export default withRouter(Menu);
