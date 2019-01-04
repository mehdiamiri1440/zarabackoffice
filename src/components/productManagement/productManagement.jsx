import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class ProductManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      images: [],
      isAvailable: false,
      price: "",
      title: "",
      sizes: [],
      showInNews: false
    };
  }
  insertCategoryPicture() {
    fetch(`http://192.168.43.102:3003/product`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        isAvailable: this.state.isAvailable,
        sizes: this.state.sizes,
        images: this.state.images,
        isNew: this.state.showInNews,
        price: this.state.price,
        category: this.state.category,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log("it is the response", responseJson);
      })
      .catch(error => {
        console.log(error, "it is the error");
      });
  }
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
              <i data-toggle="dropdown" className="fas fa-trash-alt" />
              <div className="dropdown-menu">
                <div className="dropdown-item">dsfsdfwef</div>
              </div>
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
  upload(indexInWholeObject, file) {
    var formData = new FormData();
    let wholeObject = this.state.wholeObject;
    formData.append("files", file);

    fetch("http://172.31.0.110:3003/document/upload", {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log("it is the response", responseJson);
        wholeObject[indexInWholeObject].image = responseJson;
      })
      .catch(error => console.error("Error:", error));
  }
  selectedCategory(indexInWholeObject, category) {
    let wholeObject = this.state.wholeObject;
    wholeObject[indexInWholeObject].category = category;
    this.setState({ wholeObject });
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
            <input
              onChange={event => this.upload(0, event.target.files(0))}
              value={this.state.images[0]}
              type="file"
              style={{ display: "none" }}
            />
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
            <input
              onChange={event => this.upload(1, event.target.files(0))}
              value={this.state.images[1]}
              type="file"
              style={{ display: "none" }}
            />
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
            <input
              onChange={event => this.upload(2, event.target.files(0))}
              value={this.state.images[2]}
              type="file"
              style={{ display: "none" }}
            />
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
            <input
              onChange={event => this.upload(3, event.target.files(0))}
              value={this.state.images[3]}
              type="file"
              style={{ display: "none" }}
            />
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
            <input
              onChange={event => this.upload(4, event.target.files(0))}
              value={this.state.images[4]}
              type="file"
              style={{ display: "none" }}
            />
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
            <input
              onChange={event => this.upload(5, event.target.files(0))}
              value={this.state.images[5]}
              type="file"
              style={{ display: "none" }}
            />
          </label>
        </div>
      </React.Fragment>
    );
  }
  productInfos() {
    return (
      <div className="d-flex justify-content-between p-4">
        <label className="d-flex  form-group">
          <input
            onChange={event => this.setState({ title: event.target.value })}
            type="text"
            className="align-middle form-control"
          />
          <div className="w-50 d-flex align-items-center px-2">: نام کالا</div>
        </label>
        <label className="d-flex  form-group">
          <input
            onChange={event => this.setState({ price: event.target.value })}
            type="text"
            value={this.state.price}
            className="align-middle form-control"
          />
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
  setSizes(size) {
    let sizes = [];
    sizes.push(size);
    this.setState({ sizes });
  }
  render() {
    return (
      <div className="w-100 pr-0 col-12">
        <div className=" p-3 w-100 d-flex justify-content-center">
          <h3>مدیریت دسته بندی آقایان</h3>
        </div>
        {this.renderUploadPictures()}
        {this.productInfos()}
        <div className="px-4  d-flex justify-content-end">
          <label className="px-2">
            <input
              className="align-middle px-1"
              type="checkbox"
              value={this.state.showInNews}
              onChange={() => this.setSizes("s")}
            />
            <span className="text-center align-middle px-1">s</span>
          </label>
          <label className="px-2">
            <input
              className="align-middle px-1"
              type="checkbox"
              value={this.state.showInNews}
              onChange={() => this.setSizes("m")}
            />
            <span className="text-center align-middle px-1">m</span>
          </label>
          <label className="px-2">
            <input
              className="align-middle px-1"
              type="checkbox"
              value={this.state.showInNews}
              onChange={() => this.setSizes("xxl")}
            />
            <span className="text-center align-middle px-1">xxl</span>
          </label>
          <label className="px-2">
            <input
              className="align-middle px-1"
              type="checkbox"
              value={this.state.showInNews}
              onChange={() => this.setSizes("xl")}
            />
            <span className="text-center align-middle px-1">xl</span>
          </label>
          <label className="px-2">
            <input
              className="align-middle px-1"
              type="checkbox"
              value={this.state.showInNews}
              onChange={() => this.setSizes("l")}
            />
            <span className="text-center align-middle px-1">l</span>
          </label>
        </div>
        <div className="d-flex justify-content-end p-4">
          <label>
            <span className="text-center align-middle px-1">
              در جدید ها نمایش داده شود
            </span>
            <input
              className="align-middle px-1"
              type="checkbox"
              value={this.state.showInNews}
              onChange={() =>
                this.setState({ showInNews: !this.state.showInNews })
              }
            />
          </label>
          <label className="px-3">
            <span className="text-center  align-middle px-1">موجود </span>
            <input
              className="align-middle px-1"
              type="checkbox"
              value={this.state.isAvailable}
              onChange={() =>
                this.setState({ isAvailable: !this.state.isAvailable })
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
