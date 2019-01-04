import React, { Component } from "react";
import "./menu.css";
import { Link, withRouter } from "react-router-dom";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className=" menuGradient text-center w-100 p-0"
        style={{ minHeight: "100vh" }}
      >
        <div
          style={{ cursor: "pointer", width: "100%" }}
          className="text-white d-flex justify-content-end openSubmenu position-relative  border-bottom text-center p-2"
        >
          <span className="text-center  align-middle">مدیریت دسته بندی ها</span>
          <div
            id="submenu"
            style={{ right: "100%", top: 0 }}
            className="position-absolute w-100  submenu"
          >
            <div className="align-middle   p-2">
              <Link
                style={{ textDecoration: "none" }}
                to="/newIn"
                className="border-bottom text-white py-1 w-100 d-flex align-items-center justify-content-end"
              >
                <span className="px-2">جدید ها </span>
                <i className="far fa-newspaper" />
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to="/category/women"
                className="border-bottom py-1 text-white w-100 d-flex align-items-center justify-content-end"
              >
                <span className="px-2">بانوان </span>
                <i className="fas fa-female" />
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to="/category/men"
                className="py-1 w-100 text-white d-flex align-items-center justify-content-end"
              >
                <span className="px-2">آقایان </span>
                <i className="fas fa-male" />
              </Link>
            </div>
          </div>
          <span>
            <i className="far fa-window-restore text-center px-2 align-middle" />
          </span>
        </div>
        <div
          style={{ cursor: "pointer", width: "100%" }}
          className="text-white d-flex justify-content-end openSubmenu position-relative  border-bottom text-center p-2"
        >
          <span className="text-center  align-middle">مدیریت سفارشات</span>
          <div
            id="submenu"
            style={{ right: "100%", top: 0 }}
            className="position-absolute w-100  submenu"
          >
            <div className="align-middle   p-2">
              <Link
                style={{ textDecoration: "none" }}
                to="/orders/doneOrders"
                className="border-bottom text-white py-1 w-100 d-flex align-items-center justify-content-end"
              >
                <span className="px-2">انجام شده ها</span>
                <i className="fas fa-clipboard-check" />
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to="/orders/onHoldOrders"
                className="border-bottom py-1 text-white w-100 d-flex align-items-center justify-content-end"
              >
                <span className="px-2">در انتظار انجام</span>
                <i className="fas fa-stopwatch" />
              </Link>
            </div>
          </div>
          <span>
            <i className="fas fa-shopping-basket text-center px-2 align-middle" />
          </span>
        </div>

        <Link
          to="/productManagement"
          style={{ textDecoration: "none", cursor: "pointer", width: "100%" }}
          className="text-white d-flex justify-content-end openSubmenu position-relative  border-bottom text-center  p-2"
        >
          <span className="text-center  align-middle">مدیریت محصولات</span>
          {/* <div
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
          </div> */}
          <span>
            <i className="fas fa-tshirt text-center px-2 align-middle" />
          </span>
        </Link>
        <Link
          to="/userManagement"
          style={{ textDecoration: "none", cursor: "pointer", width: "100%" }}
          className="text-white d-flex justify-content-end openSubmenu position-relative  border-bottom text-center  p-2"
        >
          <span className="text-center  align-middle">مدیریت کاربران</span>
          {/* <div
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
          </div> */}
          <span>
            <i className="fas fa-users-cog text-center px-2 align-middle" />
          </span>
        </Link>
        <Link
          to="/slidesManagement"
          style={{ textDecoration: "none", cursor: "pointer", width: "100%" }}
          className="text-white d-flex position-relative justify-content-end openSubmenu border-bottom text-center  p-2"
        >
          <span className="text-center  align-middle">مدیریت اسلاید ها</span>
          {/* <div
            id="submenu"
            style={{ right: "100%", top: 0 }}
            className="position-absolute w-100  submenu"
          >
            <div className="align-middle p-2">
              <div className="w-100 d-flex  align-items-center justify-content-end">
                <span className="px-2">جدید ها</span>
                <i className="far fa-newspaper" />
              </div>
            </div>
          </div> */}
          <span>
            <i className="fab fa-slideshare text-center px-2 align-middle" />
          </span>
        </Link>
      </div>
    );
  }
}

export default withRouter(Menu);
