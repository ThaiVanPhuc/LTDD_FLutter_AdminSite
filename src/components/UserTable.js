import React from "react";
import { Table, Button } from "react-bootstrap";

const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Address</th>
          <th>Country</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td>{user.id}</td>
            <td>{user.full_name}</td>
            <td>{user.email}</td>
            <td>{user.phone_number}</td>
            <td>{user.address}</td>
            <td>{user.country}</td>
            <td>
              <Button variant="warning" onClick={() => onEdit(user)}>
                Edit
              </Button>{" "}
              <Button variant="danger" onClick={() => onDelete(user._id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;
