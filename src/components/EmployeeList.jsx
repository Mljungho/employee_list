import React, { Component } from "react";
import axios from "axios";

class EmployeeList extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = async () => {
    let employeeData = await axios.get("https://reqres.in/api/users");
    this.setState({ employees: employeeData.data.data });
  };

  render() {
    let employeeList = this.state.employees.map((employee) => {
      return (
        <li key={employee.id} className="employee-item">
          <p>
            {employee.first_name} {employee.last_name}
          </p>
        </li>
      );
    });
    return <ul id="employee-list">{employeeList}</ul>;
  }
}

export default EmployeeList;
