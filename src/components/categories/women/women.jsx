import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class Women extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderTableOfWomenCloths() {
    return (
      <table className="table table-hover table-striped table-light">
        <thead>
          <th className="text-center align-middle">عکس اصلی</th>
          <th className="text-center align-middle">نام کالا</th>
          <th className="text-center align-middle">تاریخ ثبت</th>
          <th className="text-center align-middle">قیمت</th>
        </thead>
        <tbody>
          <td className="text-center align-middle">کت</td>
          <td className="text-center align-middle">کت</td>
          <td className="text-center align-middle">10/9/97</td>
          <td className="text-center align-middle">4000 ریال</td>
        </tbody>
      </table>
    );
  }
  render() {
    return (
      <div className="w-100 pr-0 col-12">
        <div className=" p-3 w-100 d-flex justify-content-center">
          <h3>مدیریت دسته بندی بانوان</h3>
        </div>
        <label
          style={{ cursor: "pointer" }}
          className="d-flex justify-content-center"
        >
          <img
            className="rounded w-50 h-100"
            style={{ border: "1px solid green" }}
            src={require("../../../content/images/camera.png")}
            alt=""
          />
          <input type="file" style={{ display: "none" }} />
        </label>
        <div className=" d-flex justify-content-center">
          <button
            onClick={() => this.insertCategoryPicture()}
            className="btn py-3 btn-primary w-25 mt-2"
          >
            آپلود عکس
          </button>
        </div>
        <div className="w-100 justify-content-center d-flex p-3">
          {this.renderTableOfWomenCloths()}
        </div>
      </div>
    );
  }
}

export default withRouter(Women);
