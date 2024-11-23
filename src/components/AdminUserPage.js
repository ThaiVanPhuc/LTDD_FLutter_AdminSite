import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserTable from "./UserTable";
import UserModal from "./UserModal";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminUserPage = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    full_name: "",
    email: "",
    password: "",
    phone_number: "",
    address: "",
    country: "",
  });

  const apiBaseUrl = "https://ltdd-flutter-sever.onrender.com/api/users";
  const navigate = useNavigate();

  // Lấy danh sách người dùng
  const fetchUsers = async () => {
    try {
      const response = await axios.get(apiBaseUrl);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Hiển thị modal thêm mới hoặc chỉnh sửa người dùng
  const handleShowModal = (user = null) => {
    setSelectedUser(user);
    setFormData(
      user
        ? { ...user }
        : {
            id: "",
            full_name: "",
            email: "",
            password: "",
            phone_number: "",
            address: "",
            country: "",
          }
    );
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedUser) {
        await axios.put(`${apiBaseUrl}/update/${selectedUser._id}`, formData);
      } else {
        await axios.post(`${apiBaseUrl}/create`, formData);
      }
      fetchUsers();
      handleCloseModal();
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  // Xóa người dùng
  const handleDelete = async (userId) => {
    try {
      await axios.delete(`${apiBaseUrl}/delete/${userId}`);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <Button variant="secondary" onClick={() => navigate("/admin")}>
            Back to Admin Page
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="shadow-lg">
            <Card.Body>
              <Card.Title>
                <h3>Manage Users</h3>
              </Card.Title>
              <Button variant="primary" onClick={() => handleShowModal()}>
                Add New User
              </Button>
              <UserTable
                users={users}
                onEdit={handleShowModal}
                onDelete={handleDelete}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <UserModal
        show={showModal}
        handleClose={handleCloseModal}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />

      <Alert variant="danger" className="mt-3" hidden={users.length !== 0}>
        No users found. Please try again later.
      </Alert>
    </Container>
  );
};

export default AdminUserPage;
