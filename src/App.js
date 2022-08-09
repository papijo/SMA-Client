import "./app.css";
import React, { useContext } from "react";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/messenger/Messenger";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="appStyle">
      <Router>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Login />} />

          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/messenger"
            element={!user ? <Navigate to="/" /> : <Messenger />}
          />
          <Route
            path="/profile/:username"
            element={user ? <Profile /> : <Login />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
