import React, { Component } from "react";
import axios from "axios";
import { Modal, Image, Header, Button } from "semantic-ui-react";

class EmployeeModal extends Component {
  state = {
    open: false,
    employee: {},
  };

  getEmployee = async () => {
      let employeeData = await axios.get(`https://reqres.in/api/users/${this.props.id}`)
      this.setState({ employee: employeeData.data.data })
  }

  render() {
    return (
      <Modal
        onClose={() => this.setState({ open: false })}
        onOpen={() => this.setState({ open: true })}
        open={this.state.open}
        trigger={
          <Button onClick={() => { this.getEmployee() }} size="tiny" positive className="view-button">
            View
          </Button>
        }
      >
        <Modal.Content image id="modal-container">
          <Image
            className="image"
            size="small"
            src={this.state.employee.avatar}
            wrapped
          />
          <Modal.Description>
            <Header className="name">
              {this.state.employee.first_name} {this.state.employee.last_name}
            </Header>
            <p className="email">Email: {this.state.employee.email}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black">Edit</Button>
          <Button negative>Delete</Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default EmployeeModal;
