import React from "react";
import { Table, Button } from "react-bootstrap";

const TripTable = ({ trips, onEdit, onDelete }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Trip Name</th>
          <th>Time</th>
          <th>Days</th>
          <th>Price</th>
          <th>Avatar</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {trips.map((trip, index) => (
          <tr key={trip._id}>
            <td>{index + 1}</td>
            <td>{trip.tripName}</td>
            <td>{new Date(trip.time).toLocaleString()}</td>
            <td>{trip.days}</td>
            <td>{trip.price}</td>
            <td>
              <img
                src={trip.avatar}
                alt={trip.tripName}
                style={{ width: "100px" }}
              />
            </td>
            <td>
              <Button
                variant="warning"
                className="me-2"
                onClick={() => onEdit(trip)}
              >
                Edit
              </Button>
              <Button variant="danger" onClick={() => onDelete(trip._id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TripTable;
