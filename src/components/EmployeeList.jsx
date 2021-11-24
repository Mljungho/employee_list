import React, { Component } from "react";
import { list, Item } from "semantic-ui-react";
import EmployeeModal from "./EmployeeModal";

const EmployeeList = ({employee}) =>  {
      return (
        <Item key={employee.id} className="employee-item">
          <Item.Image
            ClassName="avatar" circular size="tiny" alt={employee.first_name} src={employee.avatar}/>

          <Item.Content verticalAlign="middle">
            <Item.Header ClassName="name">
              {employee.first_name} {employee.last_name}
            </Item.Header>
          </Item.Content>
        </Item>
      );
    };
  
export default EmployeeList;