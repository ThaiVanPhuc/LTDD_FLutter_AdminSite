import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import AdminPage from "./components/AdminPage";
import AdminUserPage from "./components/AdminUserPage";

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (loggedInUser) => {
    setUser(loggedInUser);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage onLoginSuccess={handleLoginSuccess} />}
        />
        <Route
          path="/admin"
          element={user ? <AdminPage /> : <RedirectToLogin />}
        />
        <Route
          path="/admin/users"
          element={user ? <AdminUserPage /> : <RedirectToLogin />}
        />
        <Route
          path="/"
          element={<LoginPage onLoginSuccess={handleLoginSuccess} />}
        />
      </Routes>
    </Router>
  );
}

function RedirectToLogin() {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate("/login");
  }, [navigate]);
  return null;
}

export default App;
