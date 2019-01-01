import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class SlidesManagement extends Component {
  constructor(props) {
    super(props);
    this.state = { wholeObject: [], category: "", imageGuid: "" };
  }
  makeObject(type) {
    let wholeObject = this.state.wholeObject;
    if (wholeObject && wholeObject.length > 0) {
      wholeObject.map((item, index) => {
        if (item && item.code) {
          if (item.code === type) wholeObject.splice(index, 1);
        }
      });
    }
    wholeObject.push({ code: type, imageGuid: "", category: 1 });
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
              <input type="file" style={{ display: "none" }} />
            </label>
            <div className="d-flex justify-content-center py-2">
              <button
                onClick={() => this.makeObject(1)}
                className="btn mx-3 btn-primary"
              >
                اضافه کردن
              </button>
              <input type="radio" name="category" />
              <span className="d-flex align-items-center px-1">آقایان</span>
              <input type="radio" name="category" />
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
              <input type="file" style={{ display: "none" }} />
            </label>
            <div className="d-flex justify-content-center py-2">
              <button
                onClick={() => this.makeObject(2)}
                className="btn mx-3 btn-primary"
              >
                اضافه کردن
              </button>
              <input type="radio" name="category" />
              <span className="d-flex align-items-center px-1">آقایان</span>
              <input type="radio" name="category" />
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
              <input type="file" style={{ display: "none" }} />
            </label>
            <div className="d-flex justify-content-center py-2">
              <button
                onClick={() => this.makeObject(3)}
                className="btn mx-3 btn-primary"
              >
                اضافه کردن
              </button>
              <input type="radio" name="category" />
              <span className="d-flex align-items-center px-1">آقایان</span>
              <input type="radio" name="category" />
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
              <input type="file" style={{ display: "none" }} />
            </label>
            <div className="d-flex justify-content-center py-2">
              <button
                onClick={() => this.makeObject(4)}
                className="btn mx-3 btn-primary"
              >
                اضافه کردن
              </button>
              <input type="radio" name="category" />
              <span className="d-flex align-items-center px-1">آقایان</span>
              <input type="radio" name="category" />
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
              <input type="file" style={{ display: "none" }} />
            </label>
            <div className="d-flex justify-content-center py-2">
              <button
                onClick={() => this.makeObject(5)}
                className="btn mx-3 btn-primary"
              >
                اضافه کردن
              </button>
              <input type="radio" name="category" />
              <span className="d-flex align-items-center px-1">آقایان</span>
              <input type="radio" name="category" />
              <span className="d-flex align-items-center px-1">بانوان</span>
            </div>
          </div>
        </div>
        <div className="mb-4 pt-3 d-flex justify-content-center">
          <button className="btn py-3 btn-success w-75">ارسال اطلاعات</button>
        </div>
      </React.Fragment>
    );
  }
  render() {
    return <div>{this.renderUploadParts()}</div>;
  }
}

export default withRouter(SlidesManagement);
