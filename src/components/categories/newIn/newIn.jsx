import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./newIn.css";
import { serverAddress } from "./../../../utility/consts";
import { numberWithCommas } from "./../../../utility/index";
class NewIn extends Component {
  constructor(props) {
    super(props);
    this.state = { image: "", products: [] };
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
    this.getProducts();
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
          {this.state.products.map((product, index) => (
            <tr key={index}>
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
                style={{ width: "15%", height: "15%" }}
                className="text-center align-middle"
              >
                <img
                  src={product.images[0]}
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                />
              </td>
              <td className="text-center align-middle">{product.name}</td>
              <td className="text-center align-middle">
                {product.registerDate}
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
  upload(file) {
    var formData = new FormData();
    formData.append("files", file);
    fetch(`${serverAddress}/document/upload`, {
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
  getProducts() {
    fetch(`${serverAddress}/product/getByCategoryName/new`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ products: responseJson });
      })
      .catch(error => {
        console.log("it was false", error);
      });
  }
  componentDidMount() {
    this.getProducts();
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

export default withRouter(NewIn);
