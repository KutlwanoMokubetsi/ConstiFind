// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import SearchPage from "./pages/SearchPage";
import Navbar from "./components/Navbar";
import APIDocumentation from "./pages/APIDocumentation";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="flex-1 w-full"> {/* This will make content take remaining space */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPage />
            </PrivateRoute>
          }
        />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/api-docs" element={<APIDocumentation />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;