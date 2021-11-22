import React, { Component } from 'react';
import EmployeeList from "./components/EmployeeList";

class App extends Component {
  render() {
    return (
      <div>
        <h1 id="header">Employee List</h1>
        <EmployeeList />
      </div>
    )
  }
}

export default App;