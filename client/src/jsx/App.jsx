import React from "react";
import "../css/App.css";

import LoadLoginPage from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";
import LoadWelcome from "./Welcome.jsx";
import LoadRegisterPage from "./Register.jsx";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="NavBar">
        <Link className="home" to="/">Home</Link>
        <Link className="home" to="/dashboard">Dashboard</Link>
        <Link className="home" to="/about">About</Link>
        <Link className="home" to="/contact">Contact</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<LoadWelcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoadLoginPage />} />
        <Route path="/register" element={<LoadRegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
