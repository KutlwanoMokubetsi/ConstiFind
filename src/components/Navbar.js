// src/components/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, BookOpen, Upload, Settings, LogIn } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const linkClasses = (path) =>
    `flex items-center px-4 py-2 text-sm font-medium rounded-md ${
      location.pathname === path
        ? 'bg-blue-600 text-white'
        : 'text-gray-700 hover:bg-gray-200'
    }`;

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm w-full">
      <div className="px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between mx-auto w-full">
        <h1 className="text-xl font-bold text-gray-800">Constitution Archive</h1>
        <div className="flex space-x-4">
          <Link to="/" className={linkClasses('/')}>
            <BookOpen className="h-4 w-4 mr-2" />
            Home
          </Link>
          <Link to="/search" className={linkClasses('/search')}>
            <Search className="h-4 w-4 mr-2" />
            Search
          </Link>
          <Link to="/admin" className={linkClasses('/admin')}>
            <Upload className="h-4 w-4 mr-2" />
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;