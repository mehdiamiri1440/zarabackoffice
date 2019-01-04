import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./men.css";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { image: "" };
  }
  renderTableOfMenCloths() {
    return (
      <table className="table table-hover table-striped table-light">
        <thead>
          <tr>
            <th className="text-center align-middle" />
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
          </tr>
        </tbody>
      </table>
    );
  }
  upload(file) {
    var formData = new FormData();
    formData.append("files", file);
    fetch("http://172.31.0.110:3003/document/upload", {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log("it is the response", responseJson);
        this.setState({ image: responseJson });
      })
      .catch(error => console.error("Error:", error));
  }
  insertCategoryPicture() {
    fetch("http://172.31.0.110:3003/document/upload", {
      method: "POST",
      body: {
        category: "men",
        image: this.state.image
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log("inserted", responseJson);
      })
      .catch(error => console.error("Error:", error));
  }
  render() {
    return (
      <div className="w-100 pr-0 col-12">
        <div className=" p-3 w-100 d-flex justify-content-center">
          <h3>مدیریت دسته بندی آقایان</h3>
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
          <input
            onChange={event => this.upload(event.target.files(0))}
            type="file"
            style={{ display: "none" }}
          />
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
          <h3> کالا های موجود در این دسته بندی</h3>
        </div>
        <div className="w-100 justify-content-center d-flex p-3">
          {this.renderTableOfMenCloths()}
        </div>
      </div>
    );
  }
}

export default withRouter(Menu);
