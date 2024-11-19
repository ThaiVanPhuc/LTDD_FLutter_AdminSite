import React from "react";
import { Modal, Button } from "react-bootstrap";
import TripForm from "./TripForm";

const TripModal = ({
  show,
  handleClose,
  formData,
  setFormData,
  onSubmit,
  selectedTrip,
}) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{selectedTrip ? "Edit Trip" : "Add New Trip"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TripForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
          selectedTrip={selectedTrip}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TripModal;
