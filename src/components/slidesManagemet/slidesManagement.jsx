import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { serverAddress } from "./../../utility/consts";
class SlidesManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      wholeObject: [],
      slideNumber: -1,
      carousels: [],
      show: false,
      location: "",
      category: "",
      searchKey: "",
      images: [],
      show: false,
      selectedProduct: {},
      target: false,
      categories: "",
      imageGuid: ""
    };
  }
  makeObject(type) {
    fetch(`${serverAddress}/document/upload`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        images: this.state.images
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
  // uploadImages(number, event) {
  //   this.upload(event.target.files[0]);
  // }
  upload(indexInWholeObject, file) {
    var formData = new FormData();
    let images = this.state.images;
    formData.append("files", file);
    fetch(`${serverAddress}/document/upload`, {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(responseJson => {
        images[indexInWholeObject] = `${serverAddress}/document/${
          responseJson.filename
        }`;
        this.setState({ images }, () => {
          console.log("my images:", this.state.images);
        });
      })
      .catch(error => console.log("Error:", error));
  }
  getCarousels() {
    fetch(`${serverAddress}/carousel`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log("it is the countires", responseJson);
        // responseJson.map(roleID => rolesID.push(roleID.Id));
        this.setState({ carousels: responseJson });
      })
      .catch(error => {
        console.log("it was false", error);
      });
  }
  componentDidMount() {
    this.getCarousels();
  }
  deleteCarousel(id) {
    fetch(`${serverAddress}/carousel`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        _id: id
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log("deleted");
      })
      .catch(error => {
        console.log(error, "it is the error");
      });
    this.getCarousels();
  }
  renderCarouselsTable() {
    return (
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th className="text-center align-middle">دسته بندی</th>
            <th className="text-center align-middle">عکس</th>
            <th className="text-center align-middle" />
          </tr>
        </thead>
        <tbody>
          {this.state.carousels.map((carousel, indx) => (
            <tr key={indx}>
              <td className="text-center align-middle">
                {carousel.location.split("/")[0]}
              </td>
              <td className="text-center align-middle">
                <img
                  style={{ width: 70, height: 70 }}
                  src={carousel.image}
                  alt=""
                />
              </td>
              <td className="text-center align-middle">
                <i
                  onClick={event => {
                    event.stopPropagation();
                    return this.deleteCarousel(carousel._id);
                  }}
                  className="fa fa-trash"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  showProducts() {
    return (
      <div
        onMouseLeave={() => this.setState({ products: [] })}
        style={{ maxHeight: 200, overflow: "scroll", cursor: "pointer" }}
        className="border bg-light"
      >
        {this.state.products.map((product, indx) => {
          return (
            <div
              key={indx}
              onClick={() => {
                this.setState({
                  products: [],
                  selectedProduct: product
                });
              }}
              className="d-flex border-bottom"
            >
              <img
                style={{ width: 80, height: 80 }}
                src={product.images[0]}
                alt=""
              />
              <div className="flex-column">
                <div>{product.name}</div>
                <div>{product.price}تومان</div>
                <div>{product.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  productSearch(event) {
    this.setState({ searchKey: event.target.value }, () => {
      fetch(`${serverAddress}/product/search`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          phrase: this.state.searchKey
        })
      })
        .then(response => response.json())
        .then(responseJson => {
          this.setState({ products: responseJson });
        })
        .catch(error => {
          console.log(error, "it is the error");
        });
    });
  }
  renderSearchBox() {
    return (
      <div style={{ position: "relative" }}>
        <input
          placeholder="جستجو بر روی کالا ها"
          type="text"
          className="form-control"
          value={this.state.searchKey}
          onChange={event => this.productSearch(event)}
        />
        {this.state.products && this.state.products.length
          ? this.showProducts()
          : null}
      </div>
    );
  }
  renderUploadParts() {
    return (
      <React.Fragment>
        <div className="d-flex justify-content-between ">
          <div className="">
            <label
              style={{ cursor: "pointer" }}
              className="d-flex justify-content-center"
            >
              <img
                className="rounded  "
                style={{ width: 300, height: 300, border: "1px solid green" }}
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
                accept="image/png, image/jpeg"
                name="fileUpload"
                style={{ display: "none" }}
              />
            </label>
            <div className="d-flex justify-content-center py-2">
              <button
                onClick={() => this.insertSlides(0)}
                className="btn mx-3 btn-primary"
              >
                اضافه کردن
              </button>
              <input
                onClick={() =>
                  this.setState({
                    show: !this.state.show
                  })
                }
                type="checkbox"
                name="category0"
              />
              <span className="d-flex align-items-center px-1">
                نمایش داده شود
              </span>
              <input
                onClick={() =>
                  this.setState({
                    target: !this.state.target
                  })
                }
                type="checkbox"
                name="category0"
              />
              <span className="d-flex align-items-center px-1">
                در صفحه جدید باز شود
              </span>
              {/* <input
                onClick={() =>
                  this.setState({
                    category: "men"
                  })
                }
                type="radio"
                name="category0"
              />
              <span className="d-flex align-items-center px-1">آقایان</span>
              <input
                onClick={() =>
                  this.setState({
                    category: "women"
                  })
                }
                type="radio"
                name="category0"
              />
              <span className="d-flex align-items-center px-1">بانوان</span> */}
            </div>
          </div>
          <div className="">
            {/* <div className="p-2 d-flex justify-content-center">
              {this.renderSearchBox(1)}
            </div> */}
            <label
              style={{ cursor: "pointer" }}
              className="d-flex justify-content-center"
            >
              <img
                className="rounded  "
                style={{ width: 300, height: 300, border: "1px solid green" }}
                src={
                  this.state.images && this.state.images[1]
                    ? this.state.images[1]
                    : require("../../content/images/camera.png")
                }
                alt=""
              />
              <input
                type="file"
                onChange={event => this.upload(1, event.target.files[0])}
                style={{ display: "none" }}
              />
            </label>
            <div className="d-flex justify-content-center py-2">
              <button
                onClick={() => this.insertSlides(1)}
                className="btn mx-3 btn-primary"
              >
                اضافه کردن
              </button>
              <input
                onClick={() =>
                  this.setState({
                    show: !this.state.show
                  })
                }
                type="checkbox"
                name="category0"
              />
              <span className="d-flex align-items-center px-1">
                نمایش داده شود
              </span>
              <input
                onClick={() =>
                  this.setState({
                    target: !this.state.target
                  })
                }
                type="checkbox"
                name="category0"
              />
              <span className="d-flex align-items-center px-1">
                در صفحه جدید باز شود
              </span>
              {/* <input
                onClick={() =>
                  this.setState({
                    category: "men"
                  })
                }
                type="radio"
                name="category1"
              />
              <span className="d-flex align-items-center px-1">آقایان</span>
              <input
                onClick={() =>
                  this.setState({
                    category: "women"
                  })
                }
                type="radio"
                name="category1"
              />
              <span className="d-flex align-items-center px-1">بانوان</span> */}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between ">
          <div className="">
            {/* <div className="p-2 d-flex justify-content-center">
              {this.renderSearchBox(2)}
            </div> */}
            <label
              style={{ cursor: "pointer" }}
              className="d-flex justify-content-center"
            >
              <img
                className="rounded  "
                style={{ width: 300, height: 300, border: "1px solid green" }}
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
            <div className="d-flex justify-content-center py-2">
              <button
                onClick={() => this.insertSlides(2)}
                className="btn mx-3 btn-primary"
              >
                اضافه کردن
              </button>
              <input
                onClick={() =>
                  this.setState({
                    show: !this.state.show
                  })
                }
                type="checkbox"
                name="category0"
              />
              <span className="d-flex align-items-center px-1">
                نمایش داده شود
              </span>
              <input
                onClick={() =>
                  this.setState({
                    target: !this.state.target
                  })
                }
                type="checkbox"
                name="category0"
              />
              <span className="d-flex align-items-center px-1">
                در صفحه جدید باز شود
              </span>
              {/* <input
                onClick={() =>
                  this.setState({
                    category: "men"
                  })
                }
                type="radio"
                name="category"
              />
              <span className="d-flex align-items-center px-1">آقایان</span>
              <input
                onClick={() =>
                  this.setState({
                    category: "women"
                  })
                }
                type="radio"
                name="category"
              />
              <span className="d-flex align-items-center px-1">بانوان</span> */}
            </div>
          </div>
          <div className="">
            {/* <div className="p-2 d-flex justify-content-center">
              {this.renderSearchBox(3)}
            </div> */}
            <label
              style={{ cursor: "pointer" }}
              className="d-flex justify-content-center"
            >
              <img
                className="rounded  "
                style={{ width: 300, height: 300, border: "1px solid green" }}
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
            <div className="d-flex justify-content-center py-2">
              <button
                onClick={() => this.insertSlides(3)}
                className="btn mx-3 btn-primary"
              >
                اضافه کردن
              </button>
              <input
                onClick={() =>
                  this.setState({
                    show: !this.state.show
                  })
                }
                type="checkbox"
                name="category0"
              />
              <span className="d-flex align-items-center px-1">
                نمایش داده شود
              </span>
              <input
                onClick={() =>
                  this.setState({
                    target: !this.state.target
                  })
                }
                type="checkbox"
                name="category0"
              />
              <span className="d-flex align-items-center px-1">
                در صفحه جدید باز شود
              </span>
              {/* <input
                onClick={() =>
                  this.setState({
                    category: "men"
                  })
                }
                type="radio"
                name="category"
              />
              <span className="d-flex align-items-center px-1">آقایان</span>
              <input
                onClick={() =>
                  this.setState({
                    category: "women"
                  })
                }
                type="radio"
                name="category"
              />
              <span className="d-flex align-items-center px-1">بانوان</span> */}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center ">
          <div className="">
            {/* <div className="p-2 d-flex justify-content-center">
              {this.renderSearchBox(4)}
            </div> */}
            <label
              style={{ cursor: "pointer" }}
              className="d-flex justify-content-center"
            >
              <img
                className="rounded "
                style={{ width: 300, height: 300, border: "1px solid green" }}
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
            <div className="d-flex justify-content-center py-2">
              <button
                onClick={() => this.insertSlides(4)}
                className="btn mx-3 btn-primary"
              >
                اضافه کردن
              </button>
              <input
                onClick={() =>
                  this.setState({
                    show: !this.state.show
                  })
                }
                type="checkbox"
                name="category0"
              />
              <span className="d-flex align-items-center px-1">
                نمایش داده شود
              </span>
              <input
                onClick={() =>
                  this.setState({
                    target: !this.state.target
                  })
                }
                type="checkbox"
                name="category0"
              />
              <span className="d-flex align-items-center px-1">
                در صفحه جدید باز شود
              </span>
              {/* <input
                onClick={() =>
                  this.setState({
                    category: "men"
                  })
                }
                type="radio"
                name="category"
              />
              <span className="d-flex align-items-center px-1">آقایان</span>
              <input
                onClick={() =>
                  this.setState({
                    category: "women"
                  })
                }
                type="radio"
                name="category"
              />
              <span className="d-flex align-items-center px-1">بانوان</span> */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  insertSlides(index) {
    console.log("selected:", this.state.selectedProduct);
    let x = {
      location:
        this.state.selectedProduct.categoryName +
        "/" +
        this.state.selectedProduct._id,
      image: this.state.images[index],
      show: this.state.show,
      target: this.state.target ? "_blank" : "_self"
    };
    console.log(x);
    fetch(`${serverAddress}/carousel`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        location:
          this.state.selectedProduct.categoryName +
          "/" +
          this.state.selectedProduct._id,
        image: this.state.images[index],
        show: this.state.show,
        target: this.state.target ? "_blank" : "_self"
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ selectedProduct: {}, target: false, show: false });
        console.log("it is the response", responseJson);
      })
      .catch(error => {
        console.log(error, "it is the error");
      });
  }
  render() {
    return (
      <div>
        <div className="p-2 d-flex justify-content-center">
          <div>
            <button
              onClick={() => {
                let images = this.state.images;
                images[
                  this.state.slideNumber - 1
                ] = this.state.selectedProduct.images[0];
                this.setState({ images });
              }}
              className="btn btn-primary"
            >
              تنظیم کردن
            </button>
          </div>
          <div className="px-2 w-25 input-group">
            <select className="form-control">
              <option
                onClick={() => this.setState({ slideNumber: 1 })}
                value={this.state.slideNumber}
              >
                1
              </option>
              <option
                onClick={() => this.setState({ slideNumber: 2 })}
                value={this.state.slideNumber}
              >
                2
              </option>
              <option
                onClick={() => this.setState({ slideNumber: 3 })}
                value={this.state.slideNumber}
              >
                3
              </option>
              <option
                onClick={() => this.setState({ slideNumber: 4 })}
                value={this.state.slideNumber}
              >
                4
              </option>
              <option
                onClick={() => this.setState({ slideNumber: 5 })}
                value={this.state.slideNumber}
              >
                5
              </option>
            </select>
            <label className="d-flex align-items-center px-2" htmlFor="">
              برای اسلاید شماره
            </label>
          </div>
          {this.renderSearchBox()}
        </div>
        {this.renderUploadParts()}
        {this.renderCarouselsTable()}
      </div>
    );
  }
}

export default withRouter(SlidesManagement);
