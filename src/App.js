import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import SearchPage from "./pages/SearchPage";
import Navbar from "./components/Navbar";
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      <body className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-1 w-full"> {/* main content area */}
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
          </Routes>
        </main>
      </body>
    </Router>
  );
}

export default App;