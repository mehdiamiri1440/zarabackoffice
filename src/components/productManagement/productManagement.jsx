import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class ProductManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      showInNews: false
    };
  }
  insertCategoryPicture() {}
  renderMenuItems(index) {
    return (
      <div className="text-center">
        <i data-toggle="dropdown" className="fa fa-ellipsis-h" />
        <div className="dropdown-menu">
          <div
            data-toggle="modal"
            className="dropdown-item"
            data-target={`#myModal-${index}`}
          >
            ویرایش جزییات
          </div>
          <div className="dropdown-item" href="#" />
          <div
            data-toggle="modal"
            data-target={`#rolemodal-${index}`}
            className="dropdown-item"
          >
            sdc
          </div>
          <div
            onClick={() => this.customAlert(index)}
            className="dropdown-item"
            href="#"
          >
            sdc
          </div>
        </div>
      </div>
    );
  }
  renderTableOfMenCloths() {
    return (
      <table className="table table-hover table-striped table-light">
        <thead>
          <tr>
            <th className="text-center align-middle" />
            <th className="text-center align-middle">بیشتر</th>
            <th className="text-center align-middle">عکس اصلی</th>
            <th className="text-center align-middle">نام کالا</th>
            <th className="text-center align-middle">تاریخ ثبت</th>
            <th className="text-center align-middle">قیمت</th>
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
              style={{ cursor: "pointer" }}
              className="text-center align-middle"
            >
              <div>{this.renderMenuItems(1)}</div>
            </td>
            <td
              style={{ width: "15%", height: "15%" }}
              className="text-center align-middle"
            >
              <img
                src={require("../../content/images/camera.png")}
                style={{ width: "100%", height: "100%" }}
                alt=""
              />
            </td>
            <td className="text-center align-middle">کت</td>
            <td className="text-center align-middle">10/9/97</td>
            <td className="text-center align-middle">4000 ریال</td>
          </tr>
        </tbody>
      </table>
    );
  }
  renderUploadPictures() {
    return (
      <React.Fragment>
        <div className="d-flex justify-content-between ">
          <label
            style={{ cursor: "pointer" }}
            className="d-flex justify-content-center"
          >
            <img
              className="rounded w-75 h-100"
              style={{ border: "1px solid green" }}
              src={require("../../content/images/camera.png")}
              alt=""
            />
            <input type="file" style={{ display: "none" }} />
          </label>
          <label
            style={{ cursor: "pointer" }}
            className="d-flex justify-content-center"
          >
            <img
              className="rounded w-75 h-100"
              style={{ border: "1px solid green" }}
              src={require("../../content/images/camera.png")}
              alt=""
            />
            <input type="file" style={{ display: "none" }} />
          </label>
        </div>
        <div className="d-flex justify-content-between ">
          <label
            style={{ cursor: "pointer" }}
            className="d-flex justify-content-center"
          >
            <img
              className="rounded w-75 h-100"
              style={{ border: "1px solid green" }}
              src={require("../../content/images/camera.png")}
              alt=""
            />
            <input type="file" style={{ display: "none" }} />
          </label>
          <label
            style={{ cursor: "pointer" }}
            className="d-flex justify-content-center"
          >
            <img
              className="rounded w-75 h-100"
              style={{ border: "1px solid green" }}
              src={require("../../content/images/camera.png")}
              alt=""
            />
            <input type="file" style={{ display: "none" }} />
          </label>
        </div>
        <div className="d-flex justify-content-between ">
          <label
            style={{ cursor: "pointer" }}
            className="d-flex justify-content-center"
          >
            <img
              className="rounded w-75 h-100"
              style={{ border: "1px solid green" }}
              src={require("../../content/images/camera.png")}
              alt=""
            />
            <input type="file" style={{ display: "none" }} />
          </label>
          <label
            style={{ cursor: "pointer" }}
            className="d-flex justify-content-center"
          >
            <img
              className="rounded w-75 h-100"
              style={{ border: "1px solid green" }}
              src={require("../../content/images/camera.png")}
              alt=""
            />
            <input type="file" style={{ display: "none" }} />
          </label>
        </div>
      </React.Fragment>
    );
  }
  productInfos() {
    return (
      <div className="d-flex justify-content-between p-4">
        <label className="d-flex  form-group">
          <input type="text" className="align-middle form-control" />
          <div className="w-50 d-flex align-items-center px-2">: نام کالا</div>
        </label>
        <label className="d-flex  form-group">
          <input type="text" className="align-middle form-control" />
          <div className="w-50 d-flex align-items-center px-2">: قیمت</div>
        </label>
        <label className="d-flex  form-group">
          <input
            onClick={() =>
              this.setState({
                category: "women"
              })
            }
            type="radio"
            name="category"
            value={this.state.category}
            className="align-middle mx-1"
          />
          <span className="d-flex align-items-center px-1">بانوان</span>
          <input
            onClick={() =>
              this.setState({
                category: "men"
              })
            }
            type="radio"
            value={this.state.category}
            name="category"
            className="align-middle mx-1"
          />
          <span className="d-flex align-items-center px-1">آقایان</span>

          <div className="w-100 d-flex align-items-center px-2">
            : دسته بندی
          </div>
        </label>
      </div>
    );
  }
  render() {
    return (
      <div className="w-100 pr-0 col-12">
        <div className=" p-3 w-100 d-flex justify-content-center">
          <h3>مدیریت دسته بندی آقایان</h3>
        </div>
        {this.renderUploadPictures()}
        {this.productInfos()}
        <div className="d-flex justify-content-end p-4">
          <label>
            <span className="text-center align-middle px-1">
              در جدید ها نمایش داده شود
            </span>
            <input
              className="align-middle px-1"
              type="checkbox"
              value={this.showInNews}
              onChange={() =>
                this.setState({ showInNews: !this.state.showInNews })
              }
            />
          </label>
        </div>
        <div className=" d-flex justify-content-center">
          <button
            onClick={() => this.insertCategoryPicture()}
            className="btn py-3 btn-primary w-25 mt-2"
          >
            آپلود عکس
          </button>
        </div>
        <div className="d-flex justify-content-end p-4">
          <h3> کالا های موجود در این دسته بندی</h3>
        </div>
        <div className="w-100 justify-content-center d-flex p-3">
          {this.renderTableOfMenCloths()}
        </div>
      </div>
    );
  }
}

export default withRouter(ProductManagement);
