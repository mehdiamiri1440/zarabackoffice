import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { serverAddress } from "./../../utility/consts";
class UserManagement extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], searchKey: "" };
  }
  componentDidMount() {
    this.getUsers();
  }
  getUsers() {
    fetch(`${serverAddress}/user`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log("it is the response", responseJson);
        this.setState({ users: responseJson });
      })
      .catch(error => console.error("Error:", error));
  }
  searchUsers() {
    fetch(`${serverAddress}/user/search`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        phrase: this.state.searchKey
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log("it is the response", responseJson);
        this.setState({ users: responseJson });
      })
      .catch(error => console.error("Error:", error));
  }
  renderSearchBox() {
    return (
      <div className="d-flex justify-content-end p-5 form-group">
        <input
          style={{ direction: "rtl" }}
          type="text"
          onChange={event => {
            this.setState({ searchKey: event.target.value }, () => {
              return this.searchUsers();
            });
          }}
          value={this.state.searchKey}
          className="form-control py-4 w-25"
          placeholder="جستجو در میان کاربران"
        />
      </div>
    );
  }
  renderUsersTable() {
    return (
      <table className="table table-striped table-hover table-light">
        <thead>
          <tr>
            <th className="align-middle text-center">بیشتر</th>
            <th className="align-middle text-center">تلفن</th>
            <th className="align-middle text-center">ایمیل</th>
            <th className="align-middle text-center">نام کاربری</th>
            <th className="align-middle text-center">نام خانوادگی </th>
            <th className="align-middle text-center">نام </th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map((user, indx) => (
            <tr key={indx}>
              <td className="align-middle text-center">
                <i data-toggle="dropdown" className="fas fa-ellipsis-h" />
                <div className="dropdown-menu">
                  <div className="dropdown-item">sd</div>
                </div>
              </td>
              <td className="align-middle text-center">{user.phone}</td>
              <td className="align-middle text-center">{user.email}</td>
              <td className="align-middle text-center">{user.username}</td>
              <td className="align-middle text-center">{user.lastName}</td>
              <td className="align-middle text-center">{user.firstName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  render() {
    return (
      <div className="col">
        {this.renderSearchBox()}
        {this.renderUsersTable()}
      </div>
    );
  }
}

export default withRouter(UserManagement);
