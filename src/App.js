import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import SuperAdminPage from "./pages/SuperAdminPage";
import SearchPage from "./pages/SearchPage";
import Navbar from "./components/Navbar";
import APIDocumentation from "./pages/APIDocumentation";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-transparent">
        <Navbar />
        <div className="flex-1">
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
            <Route
              path="/super-admin"
              element={
                <PrivateRoute>
                  <SuperAdminPage />
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