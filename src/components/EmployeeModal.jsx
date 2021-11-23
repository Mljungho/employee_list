import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Image, Header, Button } from "semantic-ui-react";

const EmployeeModal = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [employee, setEmployee] = useState({});

  const getEmployee = async () => {
    let employeeData = await axios.get(`https://reqres.in/api/users/${id}`);
    setEmployee(employeeData.data.data);
  };

  useEffect(() => {
    getEmployee();
  }, []);

  return (
    <Modal
      onClose={() => setOpen({ open: false })}
      onOpen={() => setOpen({ open: true })}
      open={open}
      trigger={<Button className="view-button">Show Modal</Button>}
    >
      <Modal.Content image data-cy="modal-container">
        <Image size="small" src={employee.avatar} wrapped />
        <Modal.Description>
          <Header> {`${employee.first_name} ${employee.last_name}`}</Header>
          <p>Email: {employee.email}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Edit
        </Button>
        <Button onClick={() => setOpen(false)}>Delete</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default EmployeeModal;
