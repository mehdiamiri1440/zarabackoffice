import React, { Component } from "react";
class DoneOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  doneOrdersTable() {
    return (
      <table className="table table-striped table-hover table-light">
        <thead>
          <tr>
            <th className="align-middle text-center">بیشتر</th>
            <th className="align-middle text-center">وضعیت</th>
            <th className="align-middle text-center">تلفن</th>
            <th className="align-middle text-center">ایمیل</th>
            <th className="align-middle text-center">نام کاربری</th>
            <th className="align-middle text-center">نام </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="align-middle text-center">
              <i data-toggle="dropdown" className="fas fa-ellipsis-h" />
              <div className="dropdown-menu">
                <div className="dropdown-item">dsfsdfwef</div>
              </div>
            </td>
            <td className="align-middle text-center">sad</td>
            <td className="align-middle text-center">sd</td>
            <td className="align-middle text-center">dfg</td>
            <td className="align-middle text-center">dfg</td>
            <td className="align-middle text-center">dfg</td>
          </tr>
        </tbody>
      </table>
    );
  }
  render() {
    return <div className="col">{this.doneOrdersTable()}</div>;
  }
}

export default DoneOrders;
