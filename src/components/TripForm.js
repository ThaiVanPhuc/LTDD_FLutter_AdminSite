import React from "react";
import { Form, Button } from "react-bootstrap";

const TripForm = ({ formData, setFormData, onSubmit, selectedTrip }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Trip Name</Form.Label>
        <Form.Control
          type="text"
          value={formData.tripName}
          onChange={(e) =>
            setFormData({ ...formData, tripName: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Time</Form.Label>
        <Form.Control
          type="datetime-local"
          value={formData.time}
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Days</Form.Label>
        <Form.Control
          type="number"
          value={formData.days}
          onChange={(e) => setFormData({ ...formData, days: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Avatar URL</Form.Label>
        <Form.Control
          type="text"
          value={formData.avatar}
          onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {selectedTrip ? "Update Trip" : "Add Trip"}
      </Button>
    </Form>
  );
};

export default TripForm;
