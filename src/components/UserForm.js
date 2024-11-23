import React from "react";
import { Form, Button } from "react-bootstrap";

const UserForm = ({ formData, setFormData, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          value={formData.full_name}
          onChange={(e) =>
            setFormData({ ...formData, full_name: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          value={formData.phone_number}
          onChange={(e) =>
            setFormData({ ...formData, phone_number: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Country</Form.Label>
        <Form.Control
          type="text"
          value={formData.country}
          onChange={(e) =>
            setFormData({ ...formData, country: e.target.value })
          }
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {formData._id ? "Update User" : "Add User"}
      </Button>
    </Form>
  );
};

export default UserForm;
