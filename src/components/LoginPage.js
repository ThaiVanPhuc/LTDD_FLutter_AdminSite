import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button, Alert, Container, Card } from "react-bootstrap";

const LoginPage = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://ltdd-flutter-sever.onrender.com/api/users/login",
        formData
      );
      console.log("Response message:", response.data.message);
      if (response.data.message === "Login successful") {
        onLoginSuccess(response.data.user);
        navigate("/admin");
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Card className="p-4 shadow" style={{ width: "100%", maxWidth: "400px" }}>
        <Card.Body>
          <h1 className="text-center mb-4">Admin Login</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </Form.Group>
            <Button
              type="submit"
              variant="primary"
              className="w-100 mt-3"
              style={{ fontWeight: "bold" }}
            >
              Login
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer className="text-center text-muted">
          © 2024 Admin Portal
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default LoginPage;
