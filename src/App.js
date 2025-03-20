import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const isAuthenticated = localStorage.getItem("auth");

  return (
    <div className="w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* If logged in, redirect to home */}
          <Route path="/reg" element={isAuthenticated ? <Navigate to="/" /> : <Signup />} />
          <Route path="/log" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
