import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TripTable from "./TripTable";
import TripModal from "./TripModal";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminPage = () => {
  const [trips, setTrips] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [formData, setFormData] = useState({
    tripName: "",
    time: "",
    days: "",
    price: "",
    avatar: "",
  });

  const apiBaseUrl = "https://ltdd-flutter-sever.onrender.com/api/trips";

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get(apiBaseUrl);
        setTrips(response.data);
      } catch (error) {
        console.error("Error fetching trips:", error);
      }
    };
    fetchTrips();
  }, []);

  const handleShowModal = (trip = null) => {
    setSelectedTrip(trip);
    setFormData(
      trip
        ? { ...trip }
        : {
            tripName: "",
            time: "",
            days: "",
            price: "",
            avatar: "",
          }
    );
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTrip(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.tripName ||
      !formData.time ||
      !formData.days ||
      !formData.price ||
      !formData.avatar
    ) {
      return;
    }

    try {
      if (selectedTrip) {
        const response = await axios.put(
          `${apiBaseUrl}/${selectedTrip._id}`,
          formData
        );
        setTrips((prev) =>
          prev.map((trip) =>
            trip._id === selectedTrip._id ? { ...trip, ...response.data } : trip
          )
        );
      } else {
        const response = await axios.post(apiBaseUrl, formData);
        setTrips((prev) => [...prev, response.data]);
      }
      handleCloseModal();
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const handleDelete = (tripId) => {
    axios
      .delete(`${apiBaseUrl}/${tripId}`)
      .then(() =>
        setTrips((prev) => prev.filter((trip) => trip._id !== tripId))
      )
      .catch((error) => console.error("Error deleting trip:", error));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Manage Trips</h1>
      <Button
        variant="secondary"
        onClick={() => navigate("/admin/users")}
        className="mb-3"
      >
        Go to User Management
      </Button>
      <Button
        variant="primary"
        onClick={() => handleShowModal()}
        className="mb-3"
      >
        Add New Trip
      </Button>
      <TripTable
        trips={trips}
        onEdit={handleShowModal}
        onDelete={handleDelete}
      />
      <TripModal
        show={showModal}
        handleClose={handleCloseModal}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        selectedTrip={selectedTrip}
      />
    </div>
  );
};

export default AdminPage;
