import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class NewIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderNewInCloths() {
    return (
      <table className="table table-hover table-striped table-light">
        <thead>
          <tr>
            <th className="text-center align-middle" />
            <th className="text-center align-middle">عکس اصلی</th>
            <th className="text-center align-middle">نام کالا</th>
            <th className="text-center align-middle">تاریخ ثبت</th>
            <th className="text-center align-middle">قیمت</th>
            <th className="text-center align-middle">دسته بندی</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              style={{ cursor: "pointer" }}
              className="text-center align-middle"
            >
              <i className="fas fa-trash-alt" />
            </td>
            <td
              style={{ width: "15%", height: "15%" }}
              className="text-center align-middle"
            >
              <img
                src={require("../../../content/images/camera.png")}
                style={{ width: "100%", height: "100%" }}
                alt=""
              />
            </td>
            <td className="text-center align-middle">کت</td>
            <td className="text-center align-middle">10/9/97</td>
            <td className="text-center align-middle">4000 ریال</td>
            <td className="text-center align-middle">آقایان</td>
          </tr>
        </tbody>
      </table>
    );
  }
  render() {
    return (
      <div>
        <div className="d-flex justify-content-end p-4">
          <h3> کالا های موجود در این دسته بندی</h3>
        </div>
        <div className="w-100 justify-content-center d-flex p-3">
          {this.renderNewInCloths()}
        </div>
      </div>
    );
  }
}

export default withRouter(NewIn);
