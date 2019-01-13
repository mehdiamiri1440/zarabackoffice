import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { serverAddress } from "./../../utility/consts";
import { numberWithCommas } from "./../../utility/index";
class ProductManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      colorName: "",
      colorToChange: false,
      colors: [],
      products: [],
      images: new Array(6),
      isAvailable: false,
      hashTags: [],
      price: "",
      name: "",
      hashTagName: "",
      sizes: [],
      description: "",
      showInNews: false
    };
  }
  componentDidMount() {
    this.getAllProducts();
  }
  getAllProducts() {
    fetch(`${serverAddress}/product`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ products: responseJson });
        console.log("it is the response", responseJson);
      })
      .catch(error => {});
  }

  insertCategoryPicture() {
    fetch(`${serverAddress}/product`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        registerDate: Date.now(),
        color: this.state.colors,
        description: this.state.description,
        hashTag: this.state.hashTags,
        isAvailable: this.state.isAvailable,
        sizes: this.state.sizes,
        images: this.state.images.filter(item => item !== undefined),
        isNew: this.state.showInNews,
        price: this.state.price,
        categoryName: this.state.category,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          description: "",
          hashTags: [],
          isAvailable: false,
          sizes: [],
          images: [],
          showInNews: false,
          price: "",
          category: "",
          name: ""
        });
        return this.getAllProducts();
      })
      .catch(error => {
        console.log(error, "it is the error");
      });
  }
  changeColors(event, indx, index) {
    let products = this.state.products;
    products[index].color.splice(indx, 1);
    this.setState({ products });
  }
  changeSizes(event, indx, index) {
    let products = this.state.products;
    products[index].sizes.splice(indx, 1);
    this.setState({ products });
  }
  renderColorModalBody(index) {
    return (
      <div className="modal fade" id={`myModal-${index}`}>
        <div
          style={{ maxWidth: "100%", maxHeight: "100%" }}
          className="modal-dialog"
        >
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-center">
              <h3>رنگ ها</h3>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <table className="table table-hover table-striped table-light">
                <thead>
                  <tr>
                    <td className="text-center align-middle">رنگ ها</td>
                    <td className="text-center align-middle">ناموجود کردن</td>
                  </tr>
                </thead>
                <tbody>
                  {this.state.products[index].color &&
                    this.state.products[index].color.map((color, indx) => (
                      <tr key={indx}>
                        <td className="text-center align-middle">{color}</td>
                        <td className="text-center align-middle">
                          <input
                            type="checkbox"
                            onClick={event =>
                              this.changeColors(event, indx, index)
                            }
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                onClick={() =>
                  this.updateSizes(
                    this.state.products[index]._id,
                    this.state.products[index].sizes
                  )
                }
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                ناموجود کردن انتخاب شده ها
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  updateColors(id, color) {
    fetch(`${serverAddress}/product/update`, {
      method: "POST",
      body: { _id: id, color: color }
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(
          "it is the respinmse josn and it is the true:",
          responseJson
        );
      })
      .catch(error => {
        console.log("it is error in changing colors");
      });
  }
  updateSizes(id, sizes) {
    fetch(`${serverAddress}/product/update`, {
      method: "POST",
      body: { _id: id, sizes: sizes }
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(
          "it is the respinmse josn and it is the true:",
          responseJson
        );
      })
      .catch(error => {
        console.log("it is error in changing colors");
      });
  }
  renderSizesModalBody(index) {
    return (
      <div className="modal fade" id={`rolemodal-${index}`}>
        <div
          style={{ maxWidth: "100%", maxHeight: "100%" }}
          className="modal-dialog"
        >
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-center">
              <h3>سایز ها</h3>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <table className="table table-hover table-striped table-light">
                <thead>
                  <tr>
                    <td className="text-center align-middle">سایز ها</td>
                    <td className="text-center align-middle">ناموجود کردن</td>
                  </tr>
                </thead>
                <tbody>
                  {this.state.products[index].sizes &&
                    this.state.products[index].sizes.map((size, indx) => (
                      <tr key={indx}>
                        <td className="text-center align-middle">{size}</td>
                        <td className="text-center align-middle">
                          <input
                            type="checkbox"
                            onClick={event =>
                              this.changeSizes(event, indx, index)
                            }
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                onClick={() =>
                  this.updateColors(
                    this.state.products[index]._id,
                    this.state.products[index].color
                  )
                }
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                ناموجود کردن انتخاب شده ها
              </button>
            </div>
          </div>
        </div>
      </div>
    );
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
            ویرایش رنگ ها
          </div>
          <div className="dropdown-item" href="#" />
          <div
            data-toggle="modal"
            data-target={`#rolemodal-${index}`}
            className="dropdown-item"
          >
            ویرایش سایز ها
          </div>
          <div
            onClick={() => {
              let products = this.state.products;
              products[index].isAvailable = !products[index].isAvailable;
              this.setState({ products });
            }}
            className="dropdown-item"
            href="#"
          >
            {this.state.products &&
            this.state.products.length &&
            this.state.products[index].isAvailable
              ? "ناموجود کردن"
              : "موجود کردن"}
          </div>
        </div>
        {this.renderColorModalBody(index)}
        {this.renderSizesModalBody(index)}
      </div>
    );
  }
  deleteProduct(id) {
    console.log("id", id);
    fetch(`${serverAddress}/product`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id
      })
    })
      .then(response => response.json())
      .then(responseJson => {})
      .catch(error => {
        console.log(error, "it is the error");
      });
    this.getAllProducts();
  }
  renderTableOfMenCloths() {
    return (
      <table className="table table-hover table-striped table-light">
        <thead>
          <tr>
            <th className="text-center align-middle" />
            <th className="text-center align-middle">وضعیت</th>
            <th className="text-center align-middle">بیشتر</th>
            <th className="text-center align-middle">دسته بندی</th>
            <th className="text-center align-middle">عکس اصلی</th>
            <th className="text-center align-middle">نام کالا</th>
            <th className="text-center align-middle">تاریخ ثبت</th>
            <th className="text-center align-middle">قیمت</th>
          </tr>
        </thead>
        <tbody>
          {this.state.products &&
            this.state.products.length &&
            this.state.products.map((product, index) => (
              <tr>
                <td
                  style={{ cursor: "pointer" }}
                  className="text-center align-middle"
                >
                  <i
                    onClick={() => this.deleteProduct(product._id)}
                    className="fas fa-trash-alt"
                  />
                </td>
                <td
                  style={{ cursor: "pointer" }}
                  className="text-center align-middle"
                >
                  <i
                    className={`${
                      product.isAvailable ? "fas fa-check-double" : "fas fa-ban"
                    }`}
                  />
                </td>
                <td
                  style={{ cursor: "pointer" }}
                  className="text-center align-middle"
                >
                  <div>{this.renderMenuItems(index)}</div>
                </td>
                <td className="text-center align-middle">
                  {product.categoryName}
                </td>
                <td className="text-center align-middle">
                  <img
                    src={product.images[0]}
                    style={{ width: 70, height: 70 }}
                    alt="sdfdsf"
                  />
                </td>
                <td className="text-center align-middle">{product.name}</td>
                <td className="text-center align-middle">
                  {product.registerDate
                    ? this.renderTime(product.registerDate)
                    : null}
                </td>
                <td className="text-center align-middle">
                  {numberWithCommas(product.price)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
  renderTime(time) {
    let realTime = new Date(time);
    return realTime.toISOString();
  }
  upload(index, file) {
    var formData = new FormData();
    let images = this.state.images;
    formData.append("files", file);

    fetch(`${serverAddress}/document/upload`, {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(
          "it is the respinmse josn and it is the true:",
          responseJson
        );
        images[index] = `${serverAddress}/document/${responseJson.filename}`;
        console.log(this.state.images, images);
        this.setState({ images });
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
              className="rounded "
              style={{ width: 550, height: 550, border: "1px solid green" }}
              src={
                this.state.images && this.state.images[0]
                  ? this.state.images[0]
                  : require("../../content/images/camera.png")
              }
              alt=""
            />
            <input
              onChange={event => this.upload(0, event.target.files[0])}
              type="file"
              style={{ display: "none" }}
            />
          </label>
          <label
            style={{ cursor: "pointer" }}
            className="d-flex justify-content-center"
          >
            <img
              className="rounded   "
              style={{ width: 550, height: 550, border: "1px solid green" }}
              src={
                this.state.images && this.state.images[1]
                  ? this.state.images[1]
                  : require("../../content/images/camera.png")
              }
              alt=""
            />
            <input
              onChange={event => this.upload(1, event.target.files[0])}
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
              className="rounded   "
              style={{ width: 550, height: 550, border: "1px solid green" }}
              src={
                this.state.images && this.state.images[2]
                  ? this.state.images[2]
                  : require("../../content/images/camera.png")
              }
              alt=""
            />
            <input
              onChange={event => this.upload(2, event.target.files[0])}
              type="file"
              style={{ display: "none" }}
            />
          </label>
          <label
            style={{ cursor: "pointer" }}
            className="d-flex justify-content-center"
          >
            <img
              className="rounded   "
              style={{ width: 550, height: 550, border: "1px solid green" }}
              src={
                this.state.images && this.state.images[3]
                  ? this.state.images[3]
                  : require("../../content/images/camera.png")
              }
              alt=""
            />
            <input
              onChange={event => this.upload(3, event.target.files[0])}
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
              className="rounded   "
              style={{ width: 550, height: 550, border: "1px solid green" }}
              src={
                this.state.images && this.state.images[4]
                  ? this.state.images[4]
                  : require("../../content/images/camera.png")
              }
              alt=""
            />
            <input
              onChange={event => this.upload(4, event.target.files[0])}
              type="file"
              style={{ display: "none" }}
            />
          </label>
          <label
            style={{ cursor: "pointer" }}
            className="d-flex justify-content-center"
          >
            <img
              className="rounded   "
              style={{ width: 550, height: 550, border: "1px solid green" }}
              src={
                this.state.images && this.state.images[5]
                  ? this.state.images[5]
                  : require("../../content/images/camera.png")
              }
              alt=""
            />
            <input
              onChange={event => this.upload(5, event.target.files[0])}
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
            onChange={event => this.setState({ name: event.target.value })}
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
    let sizes = this.state.sizes;
    if (sizes && sizes.length > 0 && sizes.indexOf(size) !== -1) {
      let indexOf = sizes.indexOf(size);
      sizes.splice(indexOf, 1);
    } else sizes.push(size);
    this.setState({ sizes });
  }
  render() {
    return (
      <div className="w-100 pr-0 col-12">
        <div className=" p-3 w-100 d-flex justify-content-center">
          <h3>مدیریت محصولات</h3>
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
          <label className="px-3">
            <button
              onClick={() => {
                let hashTags = this.state.hashTags;
                hashTags.push(this.state.hashTagName);
                this.setState({ hashTags, hashTagName: "" });
              }}
              className="btn btn-danger mx-2"
            >
              اضافه کردن
            </button>
            <input
              className="align-middle px-1"
              type="text"
              value={this.state.hashTagName}
              onChange={event =>
                this.setState({ hashTagName: event.target.value })
              }
            />
            <span className="text-center  align-middle px-1">: هشتگ </span>
            <div>
              {this.state.hashTags && this.state.hashTags.length
                ? this.state.hashTags + " , "
                : null}
            </div>
          </label>
        </div>
        <div className=" d-flex justify-content-end px-5">
          <label>
            <button
              onClick={() => {
                let colors = this.state.colors;
                colors.push(this.state.colorName);
                this.setState({ colors, colorName: "" });
              }}
              className="btn btn-danger mx-2"
            >
              اضافه کردن
            </button>
            <input
              className="align-middle px-1"
              type="text"
              value={this.state.colorName}
              onChange={event =>
                this.setState({ colorName: event.target.value })
              }
            />
            <span className="text-center  align-middle px-1">: رنگ </span>
            <div>
              {this.state.colors && this.state.colors.length
                ? this.state.colors + " , "
                : null}
            </div>
          </label>
        </div>
        <label className="input-group">
          <input
            className="align-middle form-control w-75  px-1"
            type="text"
            value={this.state.description}
            onChange={event =>
              this.setState({ description: event.target.value })
            }
          />
          <span className="text-center  align-middle px-1">: توضیحات </span>
        </label>

        <div className=" d-flex justify-content-center">
          <button
            onClick={() => this.insertCategoryPicture()}
            className="btn py-3 btn-primary w-25 mt-2"
          >
            آپلود عکس
          </button>
        </div>
        <div className="d-flex justify-content-end p-4">
          <h3> کالا های موجود </h3>
        </div>
        <div className="w-100 justify-content-center d-flex p-3">
          {this.renderTableOfMenCloths()}
        </div>
      </div>
    );
  }
}

export default withRouter(ProductManagement);
