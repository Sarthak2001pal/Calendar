import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Calendar from "./components/Calendar";
import Profile from "./components/Profile";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Header />
      <div style={{
        paddingTop: "60px", // Match the height of your fixed header
        minHeight: "calc(100vh - 60px)", // Ensure full viewport height
        backgroundColor: "#121212" // Match the dark mode background
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
