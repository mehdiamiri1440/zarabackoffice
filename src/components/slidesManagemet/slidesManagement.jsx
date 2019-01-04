import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class SlidesManagement extends Component {
  constructor(props) {
    super(props);
    this.state = { wholeObject: [], category: "", images: [], imageGuid: "" };
  }
  makeObject(type) {
    fetch(`http://192.168.43.102:3003/document/upload`, {
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
                className="rounded w-75 h-100"
                style={{ border: "1px solid green" }}
                src={require("../../content/images/camera.png")}
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
              {/* <button
                onClick={() => this.makeObject(1)}
                className="btn mx-3 btn-primary"
              >
                اضافه کردن
              </button> */}
              <input
                onClick={() => this.selectedCategory(0, "men")}
                type="radio"
                name="category"
              />
              <span className="d-flex align-items-center px-1">آقایان</span>
              <input
                onClick={() => this.selectedCategory(0, "women")}
                type="radio"
                name="category"
              />
              <span className="d-flex align-items-center px-1">بانوان</span>
            </div>
          </div>
          <div className="">
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
                type="file"
                onChange={event => this.upload(1, event.target.files[0])}
                style={{ display: "none" }}
              />
            </label>
            <div className="d-flex justify-content-center py-2">
              {/* <button
                onClick={() => this.makeObject(2)}
                className="btn mx-3 btn-primary"
              >
                اضافه کردن
              </button> */}
              <input
                onClick={() => this.selectedCategory(1, "men")}
                type="radio"
                name="category"
              />
              <span className="d-flex align-items-center px-1">آقایان</span>
              <input
                onClick={() => this.selectedCategory(1, "men")}
                type="radio"
                name="category"
              />
              <span className="d-flex align-items-center px-1">بانوان</span>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between ">
          <div className="">
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
                onChange={event => this.upload(2, event.target.files[0])}
                type="file"
                style={{ display: "none" }}
              />
            </label>
            <div className="d-flex justify-content-center py-2">
              {/* <button
                onClick={() => this.makeObject(3)}
                className="btn mx-3 btn-primary"
              >
                اضافه کردن
              </button> */}
              <input
                onClick={() => this.selectedCategory(2, "men")}
                type="radio"
                name="category"
              />
              <span className="d-flex align-items-center px-1">آقایان</span>
              <input
                onClick={() => this.selectedCategory(2, "men")}
                type="radio"
                name="category"
              />
              <span className="d-flex align-items-center px-1">بانوان</span>
            </div>
          </div>
          <div className="">
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
                onChange={event => this.upload(3, event.target.files[0])}
                type="file"
                style={{ display: "none" }}
              />
            </label>
            <div className="d-flex justify-content-center py-2">
              {/* <button
                onClick={() => this.makeObject(4)}
                className="btn mx-3 btn-primary"
              >
                اضافه کردن
              </button> */}
              <input
                onClick={() => this.selectedCategory(3, "men")}
                type="radio"
                name="category"
              />
              <span className="d-flex align-items-center px-1">آقایان</span>
              <input
                onClick={() => this.selectedCategory(3, "men")}
                type="radio"
                name="category"
              />
              <span className="d-flex align-items-center px-1">بانوان</span>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center ">
          <div className="">
            <label
              style={{ cursor: "pointer" }}
              className="d-flex justify-content-center"
            >
              <img
                className="rounded w-50 h-100"
                style={{ border: "1px solid green" }}
                src={require("../../content/images/camera.png")}
                alt=""
              />
              <input
                onChange={event => this.upload(4, event.target.files[0])}
                type="file"
                style={{ display: "none" }}
              />
            </label>
            <div className="d-flex justify-content-center py-2">
              {/* <button
                onClick={() => this.makeObject(5)}
                className="btn mx-3 btn-primary"
              >
                اضافه کردن
              </button> */}
              <input
                onClick={() => this.selectedCategory(4, "men")}
                type="radio"
                name="category"
              />
              <span className="d-flex align-items-center px-1">آقایان</span>
              <input
                onClick={() => this.selectedCategory(4, "men")}
                type="radio"
                name="category"
              />
              <span className="d-flex align-items-center px-1">بانوان</span>
            </div>
          </div>
        </div>
        <div className="mb-4 pt-3 d-flex justify-content-center">
          <button
            onClick={() => this.insertSlides()}
            className="btn py-3 btn-success w-75"
          >
            ارسال اطلاعات
          </button>
        </div>
      </React.Fragment>
    );
  }
  insertSlides() {
    fetch(`http://192.168.43.102:3003/carousels`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        slides: this.state.wholeObject
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
  render() {
    return <div>{this.renderUploadParts()}</div>;
  }
}

export default withRouter(SlidesManagement);
